import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface IEmailTemplate {
  fullName: string;
  companyName?: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactEmailTemplate = ({
  fullName,
  message,
  subject,
  companyName,
  email,
}: IEmailTemplate) => {
  return (
    <Html>
      <Head />
      <Preview>New enquiries from webform 🌟</Preview>
      <Tailwind>
        <Body className="my-auto mx-auto font-sans bg-white">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://dtdigital.nl/logo.svg`}
                width="70"
                height="65"
                alt="DT Digital logo"
                className="my-0 mx-auto"
              />
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Email: {email}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Company Name: {companyName || "N/A"}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Fullname: {fullName}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Subject: {subject}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
