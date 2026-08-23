"use client";

import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode; //permite usar o children igual nos layouts
}

export default function EstruturaModal({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* conteúdo do modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-offwhite shadow-lg overflow-hidden">
        <div className="w-full bg-chocolate flex justify-end px-4 py-2 rounded-tr-2xl rounded-tl-2xl">
          <button
            type="button"
            className="bg-offwhite rounded-xl hover:cursor-pointer"
            onClick={onClose}
          >
            <X className="w-6 h-6 text-chocolate" />
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}