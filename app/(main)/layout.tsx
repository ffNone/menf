import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from './partials/header'
import FOOTER from './partials/footer'
import Prenav from './partials/prenav'
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"
import LoginForm from '../(form)/login'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Menf international tours",
  description: "Travel agency",

}; 

export default function RootLayout({
  children 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  >
      <head>
        <link rel="manifest" href="/manifest.json/" suppressHydrationWarning={true} />
        <link rel="shortcut icon" href="/imgs/icons/main-logo.ico" type="image/x-icon" />
          <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossOrigin="anonymous"></script>
          {/* IOS SUPPORT */}
          <link rel="apple-touch-icon" href="/imgs/icons/icon-96x96.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#52a8bf" />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true} style={{overflowX : 'hidden'}}>
        
      <Script src="/GTranslate.js"   /> 
        <Script src="https://cdn.gtranslate.net/widgets/latest/popup.js"  defer /> 
        <Prenav/>
        <Header/>
        
        {children}
      
 

        <FOOTER/>
        <Analytics/>
        <script src="/app.js"></script>
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
                     <script src="/script/jquery.js"  ></script>
                     {/* <div className="gtranslate_wrapper" style={{color : '#ffdb1f', fontWeight : 'bold'}}></div> */}
         

      </body>
    </html>
  );
}
