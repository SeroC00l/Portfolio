"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface Props {
  mail: string;
}

export const Email = ({mail}: Props) => {
  const emailAddress = mail;
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
    <div className="flex items-center justify-center gap-1 transition-all duration-300">
      <button
        className="border-2 text-homeColor  gap-2 border-homeColor border-solid rounded-full px-4 py-2 mt-2 hover:shadow-homeColor hover:shadow-3xl flex items-center"
        onClick={handleCopyToClipboard}
      >
        <span>{emailAddress}</span>
        <span>{copied ? <Check /> : <Copy />}</span>
      </button>
      {copied && <span className="text-homeColor ml-2">Copied!</span>}
    </div>
  );
};
