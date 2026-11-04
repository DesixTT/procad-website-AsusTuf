import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Parse the request body (form data)
    const { name, email, message } = await req.json();

    // Validate the form data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required.' }),
        { status: 400 }
      );
    }

    // Configure the SMTP transport for sending the email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another email service
      auth: {
        user: process.env.EMAIL_USER, // Use email from environment variables
        pass: process.env.EMAIL_PASS, // Use password from environment variables
      },
    });

    // Set the email options (who the email is from, subject, content, etc.)
    const mailOptions = {
      from: email, // The email address of the person submitting the form
      to: process.env.RECIPIENT_EMAIL, // Your recipient email address
      subject: `New message from ${name}`, // Subject of the email
      text: message, // Plain text content
      html: `<p>You have received a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`, // HTML content
    };

    // Send the email using the transporter
    await transporter.sendMail(mailOptions);

    // Return a success response
    return new Response(
      JSON.stringify({ message: 'Message sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process the request.' }),
      { status: 500 }
    );
  }
}
