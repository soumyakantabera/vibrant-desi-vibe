import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { decideFromSignals } from "./country.ts";

describe("decideFromSignals", () => {
  it("trusts a majority India IP even if timezone is missing", () => {
    const d = decideFromSignals({ ipCodes: ["IN", "IN"], timezone: null });
    assert.equal(d.market, "IN");
    assert.equal(d.iso2, "IN");
    assert.equal(d.needsConfirm, false);
    assert.equal(d.source, "ip");
  });

  it("does not flip an India timezone visitor to USD when IP disagrees", () => {
    const d = decideFromSignals({ ipCodes: ["US"], timezone: "Asia/Kolkata" });
    assert.equal(d.market, "IN");
    assert.equal(d.needsConfirm, true);
    assert.equal(d.source, "timezone");
  });

  it("uses overseas IP when timezone is also overseas", () => {
    const d = decideFromSignals({ ipCodes: ["US", "US"], timezone: "America/New_York" });
    assert.equal(d.market, "INTL");
    assert.equal(d.iso2, "US");
    assert.equal(d.needsConfirm, false);
  });

  it("falls back to India timezone when IP lookup fails", () => {
    const d = decideFromSignals({ ipCodes: [], timezone: "Asia/Kolkata" });
    assert.equal(d.market, "IN");
    assert.equal(d.needsConfirm, false);
    assert.equal(d.source, "timezone");
  });

  it("falls back to overseas timezone when IP lookup fails", () => {
    const d = decideFromSignals({ ipCodes: [], timezone: "Europe/London" });
    assert.equal(d.market, "INTL");
    assert.equal(d.iso2, "GB");
    assert.equal(d.needsConfirm, false);
  });

  it("asks the visitor to choose when every signal is missing", () => {
    const d = decideFromSignals({ ipCodes: [], timezone: "Unknown/Zone" });
    assert.equal(d.market, "UNKNOWN");
    assert.equal(d.iso2, null);
    assert.equal(d.needsConfirm, true);
    assert.equal(d.source, "unknown");
  });

  it("treats an IP tie as no majority and uses timezone", () => {
    const d = decideFromSignals({ ipCodes: ["IN", "US"], timezone: "Asia/Kolkata" });
    // majority() returns null on tie, so IP is ignored; timezone India wins
    assert.equal(d.market, "IN");
    assert.equal(d.source, "timezone");
  });

  it("trusts a 3-of-4 India IP majority even if one provider says overseas", () => {
    const d = decideFromSignals({ ipCodes: ["IN", "IN", "IN", "US"], timezone: "America/New_York" });
    assert.equal(d.market, "IN");
    assert.equal(d.needsConfirm, false);
    assert.equal(d.source, "ip");
    assert.equal(d.confidence, "high");
  });

  it("does not confirm USD when a majority overseas IP conflicts with an India timezone", () => {
    const d = decideFromSignals({ ipCodes: ["US", "US", "GB"], timezone: "Asia/Kolkata" });
    assert.equal(d.market, "IN");
    assert.equal(d.needsConfirm, true);
  });

  it("applies overseas fees when IP and timezone both sit outside India", () => {
    const d = decideFromSignals({ ipCodes: ["GB"], timezone: "Europe/London" });
    assert.equal(d.market, "INTL");
    assert.equal(d.iso2, "GB");
    assert.equal(d.needsConfirm, false);
  });

  it("never silently confirms India when every signal is missing", () => {
    const d = decideFromSignals({ ipCodes: [], timezone: null });
    assert.equal(d.market, "UNKNOWN");
    assert.equal(d.needsConfirm, true);
    assert.equal(d.iso2, null);
  });
});
