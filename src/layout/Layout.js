// src/layout/Layout.js
"use client";
import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import CustomCursor from '../components/CustomCursor/CustomCursor';

export const Layout = ({ children }) => {
  return (
    // THIS IS THE FIX: We add the horizontal padding (px) here.
    // This will apply consistent side margins to your entire site.
    <div className="max-w-7xl mx-auto w-full">
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};