import { FC, PropsWithChildren } from "react";
import { Navbar } from "@/components/Layouts/Navbar";
import { Footer } from "./Footer";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
