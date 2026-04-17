// components/ClientProviders.jsx
"use client";

import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "./ToastProvider ";

export default function ClientProviders({ children }) {
  return (
    <>
      {children}
     <ToastProvider/>
    </>
  );
}