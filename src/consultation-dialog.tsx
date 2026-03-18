'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ConsultationForm } from './consultation-form';

export function ConsultationDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary">
          Book Free Design Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book a Free Consultation</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get in touch to schedule your free design consultation.
          </DialogDescription>
        </DialogHeader>
        <ConsultationForm onFormSubmit={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
