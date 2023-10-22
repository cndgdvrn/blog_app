import { Inter, Gemunu_Libre } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ThemeContextProvider from "@/components/providers/ThemeContextProvider";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/providers/AuthProvider";

const gemunu = Gemunu_Libre({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "Can's Place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={gemunu.className}>
        <AuthProvider>
          <ThemeProvider>
            <ThemeContextProvider>
              <div className="min-h-screen">
                <div className="w-11/12 lg:w-5/6 mx-auto py-2">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeContextProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
