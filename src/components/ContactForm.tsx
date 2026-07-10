"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { serviceCategories } from "@/lib/services";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
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
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
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
      <div className="flex flex-col items-center rounded-2xl border border-jaguar-gold/30 bg-jaguar-gold/5 p-12 text-center">
        <CheckCircle className="h-16 w-16 text-jaguar-gold-bright" />
        <h3 className="mt-4 text-2xl font-bold text-white">
          Message Sent Successfully
        </h3>
        <p className="mt-2 text-white/60">
          Thank you for contacting us. We will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-jaguar-gold-bright hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-white/10 bg-jaguar-dark px-4 py-3 text-white placeholder:text-white/30 focus:border-jaguar-gold focus:outline-none focus:ring-1 focus:ring-jaguar-gold"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-white/10 bg-jaguar-dark px-4 py-3 text-white placeholder:text-white/30 focus:border-jaguar-gold focus:outline-none focus:ring-1 focus:ring-jaguar-gold"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-white/10 bg-jaguar-dark px-4 py-3 text-white placeholder:text-white/30 focus:border-jaguar-gold focus:outline-none focus:ring-1 focus:ring-jaguar-gold"
            placeholder="07XXX XXXXXX"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-white/80">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-lg border border-white/10 bg-jaguar-dark px-4 py-3 text-white focus:border-jaguar-gold focus:outline-none focus:ring-1 focus:ring-jaguar-gold"
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
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-white/10 bg-jaguar-dark px-4 py-3 text-white placeholder:text-white/30 focus:border-jaguar-gold focus:outline-none focus:ring-1 focus:ring-jaguar-gold"
          placeholder="Tell us about your security requirements..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-jaguar-gold-bright px-8 py-4 text-sm font-bold tracking-wide text-jaguar-black transition-all hover:bg-jaguar-gold-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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

      <p className="text-xs text-white/40">
        By submitting this form, you agree to your data being processed by
        Jaguar Security Services Ltd for the purpose of responding to your
        enquiry.
      </p>
    </form>
  );
}
