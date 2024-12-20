interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => `
  <div>
    <h1>New Message from Portfolio Website</h1>
    <p>From: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
  </div>
`

export const AutoReplyTemplate = (name: string) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #40E0D0;">Thank you for your message!</h2>
    <p>Hello ${name},</p>
    <p>I've received your message and will get back to you as soon as possible.</p>
    <p>In the meantime, feel free to:</p>
    <ul>
      <li>Check out my portfolio: <a href="https://yourwebsite.com/portfolio">Portfolio</a></li>
      <li>Connect with me on LinkedIn: <a href="your-linkedin-url">LinkedIn</a></li>
      <li>Follow me on GitHub: <a href="your-github-url">GitHub</a></li>
    </ul>
    <p>Best regards,<br>Your Name</p>
  </div>
` 