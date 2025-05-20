"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface CustomDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  buttonText?: string;
  onSubmit?: () => Promise<any>; // async submit
  children?: ReactNode;
}

export default function CustomDialog({
  open,
  setOpen,
  title,
  buttonText,
  onSubmit,
  children,
}: CustomDialogProps) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      await onSubmit();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {children}
          <Button type="submit" className="w-full bg-blue-600">
            {buttonText}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
