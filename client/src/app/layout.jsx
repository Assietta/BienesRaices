"use client";
import './globals.css'
import React from 'react';
import Footer from "./components/Footer"
import Navbar from './components/Navbar.jsx'
import ReactDOM from 'react-dom';

import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}){
  return (
  <html>
    <head>

    </head>
    <body>
    <Navbar/>
      {children}
      <div>
        <Footer/>
      </div>
       
    </body>

  </html>
   
  )
} 