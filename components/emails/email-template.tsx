interface EmailTemplateProps {
    email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email   
}) => (
  <div>
    <h1>New Subscriber</h1>
    <p>Email: {email}</p>
  </div>
);