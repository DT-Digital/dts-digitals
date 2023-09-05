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
}

export const ConfirmationEmailTemplate = ({ fullName }: IEmailTemplate) => {
  return (
    <Html>
      <Head />
      <Preview>Email received</Preview>
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
              Dear {fullName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We have received your email and will get back to your shortly.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Best regards,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              DT Digital Team.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
