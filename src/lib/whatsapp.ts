export const WHATSAPP_PHONE = "919674479949";
export const WHATSAPP_DISPLAY = "+91 96744 79949";
export const CALL_LINK = `tel:+${WHATSAPP_PHONE}`;

const ATTRIBUTION_KEY = "lws_campaign_v1";

export type CampaignAttribution = {
  source: string;
  medium: string;
  campaign: string;
  landingPage: string;
};

function clean(value: string | null | undefined, fallback: string): string {
  const normalised = value
    ?.trim()
    .replace(/[\r\n]+/g, " ")
    .slice(0, 80);
  return normalised || fallback;
}

function attributionFromPage(): CampaignAttribution {
  if (typeof window === "undefined") {
    return { source: "direct", medium: "none", campaign: "none", landingPage: "/" };
  }

  const params = new URLSearchParams(window.location.search);
  let referrer = "direct";
  try {
    const referrerUrl = document.referrer ? new URL(document.referrer) : null;
    if (referrerUrl && referrerUrl.hostname !== window.location.hostname) {
      referrer = referrerUrl.hostname.replace(/^www\./, "");
    }
  } catch {
    // A malformed or privacy-redacted referrer is simply treated as direct.
  }

  return {
    source: clean(params.get("utm_source"), referrer),
    medium: clean(params.get("utm_medium"), referrer === "direct" ? "none" : "referral"),
    campaign: clean(params.get("utm_campaign"), "none"),
    landingPage: `${window.location.pathname}${window.location.search}`.slice(0, 160),
  };
}

/**
 * Save the visitor's first campaign touch for this tab. This is first-party
 * session storage only: no cookie banner, vendor script or new dependency.
 */
export function captureCampaignAttribution(): CampaignAttribution {
  const current = attributionFromPage();
  if (typeof window === "undefined") return current;

  try {
    const stored = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    if (stored) return JSON.parse(stored) as CampaignAttribution;
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(current));
  } catch {
    // Storage can be unavailable in private browsing; conversion still works.
  }
  return current;
}

export function getCampaignAttribution(): CampaignAttribution {
  if (typeof window !== "undefined") {
    try {
      const stored = window.sessionStorage.getItem(ATTRIBUTION_KEY);
      if (stored) return JSON.parse(stored) as CampaignAttribution;
    } catch {
      // Fall through to the current page.
    }
  }
  return attributionFromPage();
}

export function createLeadId(): string {
  const time = Date.now().toString(36).toUpperCase();
  let random = Math.random().toString(36).slice(2, 8).toUpperCase();
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    random = crypto.randomUUID().replaceAll("-", "").slice(0, 6).toUpperCase();
  }
  return `LWS-${time}-${random}`;
}

export function leadContext(leadId: string, attribution = getCampaignAttribution()): string {
  return [
    `Lead ref: ${leadId}`,
    `Source: ${attribution.source} / ${attribution.medium}`,
    `Campaign: ${attribution.campaign}`,
    `Landing: ${attribution.landingPage}`,
  ].join("\n");
}

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
