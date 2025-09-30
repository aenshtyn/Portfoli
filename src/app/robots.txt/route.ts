
const baseUrl = "https://mohamed.co.ke";

export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
