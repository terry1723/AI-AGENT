import type { Metadata } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  title: "Terry AI Lab — 讓 AI 真正開始替你的公司工作",
  description: "Terry AI Lab 協助中小企業將重要工作流程轉化成真正可以工作的 AI Agent 與自動化系統。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
