"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { serviceCategories } from "@/lib/services";

type FormStatus = "idle" | "loading" | "success" | "error";

interface ContactFormProps {
  accessKey: string;
}

export default function ContactForm({ accessKey }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
      botcheck: formData.get("botcheck") === "on",
    };

    if (data.botcheck) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      if (!accessKey) {
        throw new Error("Contact form is not configured. Please try again later.");
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name.trim(),
          email: data.email.trim(),
          phone: data.phone?.trim() || "Not provided",
          service: data.service?.trim() || "Not specified",
          message: data.message.trim(),
          subject: `New Enquiry from ${data.name.trim()} - Jaguar Security Services`,
          from_name: "Jaguar Security Services Website",
        }),
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.message || "Failed to send message. Please try again later.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message"
      );
    }
  }

  if (status === "success") {
    return (
      <div className="animate-scale-in flex flex-col items-center rounded-2xl border border-jaguar-gold/30 bg-jaguar-gold/10 p-12 text-center">
        <CheckCircle className="h-16 w-16 text-jaguar-gold-bright" />
        <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-jaguar-black">
          Message Sent Successfully
        </h3>
        <p className="mt-2 text-jaguar-black/60">
          Thank you for contacting us. We will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-bold text-jaguar-gold-bright hover:text-jaguar-black"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-jaguar-black/12 bg-white px-4 py-3.5 text-jaguar-black placeholder:text-jaguar-black/35 transition-colors focus:border-jaguar-gold-bright focus:outline-none focus:ring-1 focus:ring-jaguar-gold-bright/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        style={{ display: "none" }}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-jaguar-black/75"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-jaguar-black/75"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-jaguar-black/75"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClass}
            placeholder="07XXX XXXXXX"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-jaguar-black/75"
          >
            Service Required
          </label>
          <select
            id="service"
            name="service"
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceCategories.map((cat) => (
              <option key={cat.slug} value={cat.title}>
                {cat.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-jaguar-black/75"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your security requirements..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-400/40 bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-jaguar-gold-bright px-8 py-4 text-sm font-bold tracking-wide text-white transition-all hover:bg-jaguar-gold-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto gold-glow"
      >
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            Send Enquiry
            <Send className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="text-xs text-jaguar-black/40">
        By submitting this form, you agree to your data being processed by
        Jaguar Security Services Ltd for the purpose of responding to your
        enquiry.
      </p>
    </form>
  );
}
