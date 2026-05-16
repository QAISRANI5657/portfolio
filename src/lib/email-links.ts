const FALLBACK_EMAIL = "qaisrani5657@gmail.com";

/** Normalize env email; fall back if missing or invalid. */
export function resolveContactEmail(fromEnv?: string): string {
  const t = (fromEnv ?? "").trim();
  if (t && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) return t;
  return FALLBACK_EMAIL;
}

/** `mailto:` for a known-good address (already resolved via `resolveContactEmail`). */
export function mailtoLink(email: string): string {
  return `mailto:${email.trim()}`;
}

/** Opens in the browser when no desktop mail client is set up (Gmail compose). */
export function gmailComposeUrl(email: string): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email.trim())}`;
}

const GMAIL_BODY_MAX = 12000;

/**
 * Gmail web compose with subject and body (`su` / `body` query params).
 * Long bodies are truncated so the URL stays within typical browser limits.
 */
export function gmailComposeWithContent(to: string, subject: string, body: string): string {
  const trimmed = body.trim();
  const safeBody =
    trimmed.length > GMAIL_BODY_MAX
      ? `${trimmed.slice(0, GMAIL_BODY_MAX)}\n\n[Message truncated. Please send the rest in a follow-up if needed.]`
      : trimmed;

  const params = new URLSearchParams();
  params.set("view", "cm");
  params.set("fs", "1");
  params.set("to", to.trim());
  params.set("su", subject);
  params.set("body", safeBody);

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function mailtoWithQuery(
  email: string,
  params: { subject?: string; body?: string },
): string {
  const to = email.trim();
  const sp = new URLSearchParams();
  if (params.subject) sp.set("subject", params.subject);
  if (params.body) sp.set("body", params.body);
  const q = sp.toString();
  return q ? `mailto:${to}?${q}` : `mailto:${to}`;
}
