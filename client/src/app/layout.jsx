"use client";
import "./globals.css";
import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar/Navbar";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "../redux/store";
import axios from "axios";
import { SessionProvider } from "next-auth/react";
// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <html>
          <head></head>
          <body>
            <Navbar />
            {children}
            <div>
              <Footer />
            </div>
          </body>
        </html>
      </Provider>
    </SessionProvider>
  );
}
