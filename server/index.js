import 'dotenv/config';
import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const YOUR_EMAIL = 'kartiksuryawanshi55@gmail.com';

if (!RESEND_API_KEY) {
  console.warn('RESEND_API_KEY is not set. Contact form will not send emails.');
}

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

// Simple email validation
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    if (!resend) {
      return res.status(503).json({ success: false, error: 'Email service is not configured.' });
    }

    const safeName = name.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeEmail = email.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeSubject = subject.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeMessage = message.trim()
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br />');

    const senderLabel = `${name.trim()} (${email.trim()})`;
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio Contact</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #1a1a1a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);">
              <h1 style="margin: 0; font-size: 20px; font-weight: 600; color: #ffffff; letter-spacing: -0.02em;">
                New message from your portfolio
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.85);">
                Someone reached out via your contact form
              </p>
            </td>
          </tr>
          <!-- Sender details -->
          <tr>
            <td style="padding: 24px 32px 16px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 600; width: 100px;">From</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 500; color: #111827;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 600;">Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <a href="mailto:${email.trim()}" style="color: #0d9488; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 600;">Subject</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 500; color: #111827;">${safeSubject}</td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Message -->
          <tr>
            <td style="padding: 20px 32px 32px 32px;">
              <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 600;">Message</p>
              <div style="padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #0d9488; font-size: 15px; color: #374151; line-height: 1.7;">
                ${safeMessage}
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 16px 32px; background-color: #f8fafc; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
              This email was sent from your portfolio contact form. Reply to respond directly to the sender.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const { data, error } = await resend.emails.send({
      from: `"${senderLabel.replace(/"/g, '\\"')}" <onboarding@resend.dev>`,
      to: [YOUR_EMAIL],
      replyTo: email.trim(),
      subject: `[Portfolio] ${subject.trim()}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ success: false, error: error.message || 'Failed to send email.' });
    }

    res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact API error:', err);
    res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API running at http://localhost:${PORT}`);
});
