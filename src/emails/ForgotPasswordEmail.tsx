import { TResetPasswordEmailProps } from "@/types/ResetPasswordEmailProps-Type";
import { Container, Html, Link, Section, Text } from "@react-email/components";

export default function ForgotPasswordEmail({
  resetLink,
}: TResetPasswordEmailProps) {
  const link = resetLink ?? "https://example.com/reset-password/1234567890";
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hi there numpty!</Text>
          <Text style={paragraph}>
            I heard you forgot your password. Im disappointed in you and so is
            your family. Use the link below to reset your password, dont let it
            happen again!
          </Text>
          <Link href={link}>{link}</Link>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
