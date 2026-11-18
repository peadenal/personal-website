// The site's comments and reactions live in a small Supabase project. The key
// below is a publishable key, safe to ship in the browser — database rules
// decide what visitors can read and write.
export const SUPABASE_URL = "https://hstokmebfvxaniqmjdug.supabase.co";
const SUPABASE_KEY = "sb_publishable_PZpaPAzUAe7IS_YX86PFfw_uSKU9VCw";

export const SUPABASE_HEADERS = { apikey: SUPABASE_KEY, "Content-Type": "application/json" };

export const COMMENTS_ENDPOINT = `${SUPABASE_URL}/rest/v1/comments`;

/** Call a database function. Throws if the request fails. */
export const rpc = async (name: string, args: Record<string, unknown> = {}) => {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: SUPABASE_HEADERS,
    body: JSON.stringify(args),
  });
  if (!res.ok) throw new Error(`${name} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};
