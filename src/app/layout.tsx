"use client";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "@/hooks/Data";
import { useEffect, useState } from "react";
import Main_loader from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // we use this usestate for hydration
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <html dir="rtl" lang="fa">
      <body>
        <Data>
          {isClient && children}
          {!isClient && <Main_loader />}
        </Data>
      </body>
    </html>
  );
}
