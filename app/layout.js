import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";
import { GlobalProvider } from "./GlobalProvider";

export const metadata = {
    icons: {
        icon: [
            '/favicon.ico?v=4'
        ],
        apple: [
            '/apple-touch-icon.png?v=4'
        ],
        shortcut: [
            '/apple-touch-icon.png'
        ],

    }
  }

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <GlobalProvider>
                    <Header />
                    {children}
                    <Footer />
                </GlobalProvider>
            </body>
        </html>
    );
}
