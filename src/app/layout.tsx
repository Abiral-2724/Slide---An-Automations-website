import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slide",
  description: "Automate DMs and comments on instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en">
        <body className={jakarta.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
           {children}
           <Toaster></Toaster>
          </ThemeProvider>
          </body>
      
    </html>
    </ClerkProvider>
  
  );
}
