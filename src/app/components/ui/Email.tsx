"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export const Email = () => {
  const emailAddress = "aleurrea4@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar al portapapeles:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="border-2 text-homeColor transition-all duration-300 gap-2 border-homeColor border-solid rounded-full px-4 py-2 mt-2 hover:shadow-homeColor hover:shadow-3xl flex items-center"
        onClick={handleCopyToClipboard}
      >
        <span>{emailAddress}</span>
        <span>{copied ? <Check /> : <Copy />}</span>
      </button>
      {copied && <span className="text-homeColor ml-2">Copied!</span>}
    </div>
  );
};
