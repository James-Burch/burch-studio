// ==========================================
// EMAIL TEMPLATES
// ==========================================

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  message: string;
}

const BRAND = {
  bg: "#0a0a0c",
  surface: "#131316",
  border: "#23232a",
  accent: "#c8ff3c",
  textPrimary: "#e4e4e7",
  textMuted: "#8b8b96",
  textHeading: "#fafafb",
} as const;

function baseLayout(content: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Burch Studio</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.bg};padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
          <!-- Logo -->
          <tr>
            <td style="padding-bottom:32px;">
              <span style="font-size:20px;font-weight:800;color:${BRAND.textHeading};letter-spacing:-0.03em;">burch<span style="color:${BRAND.accent};">.</span>studio</span>
            </td>
          </tr>
          <!-- Content card -->
          <tr>
            <td style="background-color:${BRAND.surface};border:1px solid ${BRAND.border};border-radius:16px;padding:36px 32px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <p style="margin:0;font-size:13px;color:${BRAND.textMuted};">
                © ${new Date().getFullYear()} Burch Studio · burch-studio.co.uk
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

// ==========================================
// NOTIFICATION EMAIL (sent to Burch Studio)
// ==========================================

export function notificationEmail(data: ContactEmailData): string {
  const fields = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
    ...(data.phone ? [{ label: "Phone", value: data.phone }] : []),
    ...(data.business ? [{ label: "Business", value: data.business }] : []),
  ];

  const fieldRows = fields
    .map(
      (f) => `
      <tr>
        <td style="padding:8px 0;vertical-align:top;width:100px;">
          <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:${BRAND.textMuted};">${f.label}</span>
        </td>
        <td style="padding:8px 0;vertical-align:top;">
          <span style="font-size:15px;color:${BRAND.textPrimary};">${f.value}</span>
        </td>
      </tr>`,
    )
    .join("");

  return baseLayout(`
    <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:${BRAND.textHeading};">
      New enquiry
    </h1>
    <p style="margin:0 0 28px;font-size:14px;color:${BRAND.textMuted};">
      From the contact form on burch-studio.co.uk
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${BRAND.border};border-bottom:1px solid ${BRAND.border};margin-bottom:24px;">
      ${fieldRows}
    </table>

    <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:${BRAND.textMuted};">
      Message
    </p>
    <div style="background-color:${BRAND.bg};border:1px solid ${BRAND.border};border-radius:10px;padding:20px;">
      <p style="margin:0;font-size:15px;line-height:1.7;color:${BRAND.textPrimary};white-space:pre-wrap;">${data.message}</p>
    </div>

    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
      <tr>
        <td style="background-color:${BRAND.accent};border-radius:8px;">
          <a href="mailto:${data.email}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:600;color:${BRAND.bg};text-decoration:none;">
            Reply to ${data.name} →
          </a>
        </td>
      </tr>
    </table>
  `);
}

// ==========================================
// AUTO-REPLY EMAIL (sent to customer)
// ==========================================

export function autoReplyEmail(data: ContactEmailData): string {
  return baseLayout(`
    <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:${BRAND.textHeading};">
      Thanks for getting in touch
    </h1>
    <p style="margin:0 0 8px;font-size:15px;line-height:1.7;color:${BRAND.textPrimary};">
      Hi ${data.name},
    </p>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:${BRAND.textPrimary};">
      We've received your message and will get back to you within 24 hours. If you have anything urgent in the meantime, you can reach us at
      <a href="mailto:contact@burchstudio.co.uk" style="color:${BRAND.accent};text-decoration:none;">contact@burchstudio.co.uk</a>.
    </p>

    <div style="background-color:${BRAND.bg};border:1px solid ${BRAND.border};border-radius:10px;padding:20px;margin-bottom:24px;">
      <p style="margin:0 0 4px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:${BRAND.textMuted};">
        Your message
      </p>
      <p style="margin:0;font-size:14px;line-height:1.7;color:${BRAND.textMuted};white-space:pre-wrap;">${data.message}</p>
    </div>

    <p style="margin:0;font-size:15px;line-height:1.7;color:${BRAND.textPrimary};">
      Speak soon,
    </p>
    <p style="margin:0;font-size:15px;font-weight:600;color:${BRAND.textHeading};">
      Burch Studio
    </p>
  `);
}
