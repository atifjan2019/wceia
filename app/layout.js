import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata = {
  title: "WCEIA - Women Cultural Empowerment International",
  description:
    "WCEI supports women in overcoming cultural and economic barriers by providing education, life skills, and leadership guidance — helping them thrive in family and society.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={barlow.variable}>
      <body
        suppressHydrationWarning
        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
