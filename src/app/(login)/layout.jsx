import Head from "next/head";
import "../globals.css";

export const metadata = {
  title: "Onwave",
  description: "APP para a gestão do seu comercio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex  flex-col items-center  h-screen bg-gradient-to-b justify-center">
        <main class="">
          <div class="bg"></div>
          <div class="bg bg2"></div>
          <div class="bg bg3"></div>

          {children}
        </main>
      </body>
    </html>
  );
}