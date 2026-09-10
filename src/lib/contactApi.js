/**
 * Contact form submit handler.
 *
 * This is intentionally isolated from the Contact page component so it's
 * a single place to wire up a real backend, form service (e.g. Formspree,
 * Resend, a Google Sheet via Apps Script), or your own API endpoint.
 *
 * Currently this SIMULATES a network request and always resolves
 * successfully after a short delay — no data is actually sent anywhere.
 *
 * To connect a real API:
 *
 *   export async function submitContactForm(values) {
 *     const response = await fetch("https://your-api.com/contact", {
 *       method: "POST",
 *       headers: { "Content-Type": "application/json" },
 *       body: JSON.stringify(values),
 *     });
 *     if (!response.ok) throw new Error("Failed to submit form");
 *     return response.json();
 *   }
 */
export async function submitContactForm(values) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  // eslint-disable-next-line no-console
  console.log("Contact form submitted (simulated):", values);
  return { ok: true };
}
