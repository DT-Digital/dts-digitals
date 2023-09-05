import { MainLayout } from "@/components/Layouts/MainLayout";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

import { Open_Sans } from "next/font/google";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";
import { LoadCalendar } from "@/components/Calendar";

const inter = Open_Sans({ subsets: ["greek-ext"] });

export const metadata: Metadata = {
  title: "DT Digital",
  description: "Creating Softwares & Digital Excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>
          {children}
          <LoadCalendar />
          <ToastContainer />
        </MainLayout>
      </body>
    </html>
  );
}
