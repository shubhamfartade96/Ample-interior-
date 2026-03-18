"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addDoc, collection } from "firebase/firestore";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { db } from "@/lib/firebase";

const formSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Please enter a valid email address.").min(1, "Email is required."),
  phone: z.string().min(10, "Please enter a valid phone number."),
});

const translations = {
  'English': {
    title: "Let's Get Started",
    description: "A few details and we're ready to go.",
    namePlaceholder: "Your Name *",
    emailPlaceholder: "Your Email *",
    phonePlaceholder: "Your Phone Number *",
    submitButton: "Start Chat",
    submittingButton: "Submitting...",
    toastSuccessTitle: "Welcome aboard!",
    toastSuccessDescription: "You can now chat with our AI assistant.",
    toastErrorTitle: "Error",
    toastErrorDescription: "There was an issue saving your details. Please try again.",
    validation: {
        name: "Name is required.",
        email: "Please enter a valid email address.",
        phone: "Please enter a valid phone number.",
    }
  },
  'Hindi': {
    title: "चलिए शुरू करते हैं",
    description: "बस कुछ जानकारी और हम तैयार हैं।",
    namePlaceholder: "आपका नाम *",
    emailPlaceholder: "आपका ईमेल *",
    phonePlaceholder: "आपका फ़ोन नंबर *",
    submitButton: "चैट शुरू करें",
    submittingButton: "सबमिट हो रहा है...",
    toastSuccessTitle: "आपका स्वागत है!",
    toastSuccessDescription: "अब आप हमारे AI सहायक से चैट कर सकते हैं।",
    toastErrorTitle: "त्रुटि",
    toastErrorDescription: "आपकी जानकारी सहेजने में कोई समस्या हुई। कृपया पुनः प्रयास करें।",
    validation: {
        name: "नाम आवश्यक है।",
        email: "कृपया एक मान्य ईमेल पता दर्ज करें।",
        phone: "कृपया एक मान्य फ़ोन नंबर दर्ज करें।",
    }
  }
};


interface LeadCaptureFormProps {
  onLeadCaptured: (name: string) => void;
  language: string;
}

export function LeadCaptureForm({ onLeadCaptured, language }: LeadCaptureFormProps) {
  const { toast } = useToast();
  const t = translations[language as keyof typeof translations];
  
  const currentFormSchema = z.object({
    name: z.string().min(2, t.validation.name),
    email: z.string().email(t.validation.email).min(1, t.validation.email),
    phone: z.string().min(10, t.validation.phone),
  });

  const form = useForm<z.infer<typeof currentFormSchema>>({
    resolver: zodResolver(currentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    mode: "onChange",
  });

  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(values: z.infer<typeof currentFormSchema>) {
    try {
      await addDoc(collection(db, "leads"), values);
      onLeadCaptured(values.name);
      toast({
        title: t.toastSuccessTitle,
        description: t.toastSuccessDescription,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: t.toastErrorTitle,
        description: t.toastErrorDescription,
        variant: "destructive",
      });
    }
  }

  return (
    <Card className="w-full max-w-sm mx-auto bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
        <CardDescription>{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t.namePlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t.emailPlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t.phonePlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting || !isValid}>
              {isSubmitting ? t.submittingButton : t.submitButton}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
