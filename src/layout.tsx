import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "DT Digital",
  description: "Creating Softwares & Digital Excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
