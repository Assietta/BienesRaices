'use client'
import './globals.css'
import React from 'react';
import Footer from "./Components/Footer"
import Navbar from '../app/Components/Navbar.jsx'
import { Inter } from 'next/font/google'
import rootReducer from "../redux/reducer"
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const store = createStore(rootReducer)
// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}){
  return (
  <html>
    <head>

    </head>
    <body>
    <Provider store={store}>

    <Navbar/>
      {children}

      <div>
        <Footer/>
      </div>
      </Provider>
    </body>

  </html>
   
  )
} 