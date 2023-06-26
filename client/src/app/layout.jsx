import './globals.css'
import React from 'react';
import Footer from "./Components/Footer"
import Navbar from './Components/NavBar/Navbar'
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