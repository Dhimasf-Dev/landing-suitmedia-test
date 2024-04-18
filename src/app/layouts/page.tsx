"use client"
import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from 'react'

export default function Layout({
  children
}: any) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    isClient &&
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
