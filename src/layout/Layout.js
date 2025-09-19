// src/layout/Layout.js
"use client";
import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import CustomCursor from '../components/CustomCursor/CustomCursor';

export const Layout = ({ children }) => {
  return (
    // THIS IS NOW THE SINGLE SOURCE OF TRUTH FOR YOUR LAYOUT
    // It controls the max-width, centering, and side padding for the entire site.
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-12">
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};