import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Set headers to prevent caching of the response
    const headers = {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    };

    // Early validation: Check if the email field is empty
    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { headers });
    }

    // Email validation function
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    // Validate the email format
    if (!validateEmail(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email format' }, { headers });
    }

    // Configure Nodemailer transport for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Create the email content as a string (HTML)
    const emailContent = `
      <html>
        <body>
          <h1>New Subscriber</h1>
          <p>Email: ${email}</p>
        </body>
      </html>
    `;

    // Prepare email options
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: 'New Subscriber',
      html: emailContent,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // Return the response with email info and no-cache headers
    return NextResponse.json({ success: true, info }, { headers });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
