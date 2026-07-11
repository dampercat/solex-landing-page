import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        error: "Email is required.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Solex <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to Solex 🚀",
      html: `
        <h1>Welcome to Solex!</h1>

        <p>Thanks for joining us.</p>

        <p>We're excited to have you on board.</p>

        <p>More exciting things are coming soon!</p>
      `,
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        error,
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}