import type { Metadata } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  title: "Terry AI Lab — 企業成長與 AI 落地夥伴",
  description: "Terry AI Lab 協助企業釐清真正問題，再與團隊共同建立可持續使用的 workflow。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
