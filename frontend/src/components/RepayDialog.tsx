"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface RepayDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function RepayDialog({ open, setOpen }: RepayDialogProps) {
  // const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // setName("");
    setNumber("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Repay Loan</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div> */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="number">Register mobile number</Label>
            <Input
              id="number"
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
