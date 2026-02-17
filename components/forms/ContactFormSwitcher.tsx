"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/forms/ContactForm";
import { AuditForm } from "@/components/forms/AuditForm";

export function ContactFormSwitcher() {
  const searchParams = useSearchParams();
  const isAudit = searchParams.has("audit");

  return isAudit ? <AuditForm /> : <ContactForm />;
}
