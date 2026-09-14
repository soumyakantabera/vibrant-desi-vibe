import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { COURSE_FEES, formatFee, startingFee } from "./pricing.ts";

describe("formatFee", () => {
  it("keeps India INR for Basic Spoken English", () => {
    const f = formatFee("spoken-english", "IN");
    assert.equal(f.currency, "INR");
    assert.equal(f.amount, 999);
    assert.equal(f.label, "₹999/month");
  });

  it("uses the agreed USD monthly fees outside India", () => {
    assert.equal(formatFee("spoken-english", "INTL").label, "US$59/month");
    assert.equal(formatFee("interactive-speaking", "INTL").label, "US$99/month");
    assert.equal(formatFee("teen-english", "INTL").label, "US$79/month");
    assert.equal(formatFee("business-english", "INTL").label, "US$129/month");
  });

  it("asks overseas visitors to contact us when no USD fee is agreed", () => {
    const f = formatFee("ielts", "INTL");
    assert.equal(f.amount, null);
    assert.match(f.label, /Contact us for international pricing/);
  });

  it("marks Kids as discontinued in both markets", () => {
    assert.equal(formatFee("kids-english", "IN").discontinued, true);
    assert.equal(formatFee("kids-english", "INTL").discontinued, true);
    assert.equal(COURSE_FEES["kids-english"].discontinued, true);
  });

  it("starts the catalogue at the lowest monthly fee", () => {
    assert.equal(startingFee("IN").amount, 999);
    assert.equal(startingFee("INTL").amount, 59);
  });
});
