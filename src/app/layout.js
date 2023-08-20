import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "File manager",
    description: "Pagina para administrar archivos",
    keywords: "file, manager, files",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="relative container mx-auto">
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    );
}
