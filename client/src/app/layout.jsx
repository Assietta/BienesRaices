import React from 'react';
import Footer from "./Components/Footer"

export default function RootLayout({children}){
  return (
  <html>
    <head>

    </head>
    <body>
      {children}
      <div>
        <Footer/>
      </div>
       
    </body>

  </html>
   
  )
} 