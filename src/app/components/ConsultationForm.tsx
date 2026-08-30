"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  studyLevel: string;
  message: string;
}

interface FieldErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  destination?: string;
}

const DESTINATIONS = [
  "Australia",
  "United Kingdom",
  "Canada",
  "United States",
  "Japan",
  "South Korea",
  "Other",
];

const STUDY_LEVELS = [
  "Bachelor's",
  "Master's",
  "PhD",
  "Diploma",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ConsultationForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    studyLevel: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    else if (form.fullName.trim().length < 2) e.fullName = "Please enter a valid name.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^[0-9+\-\s()]+$/.test(form.phone.trim()))
      e.phone = "Please enter a valid phone number.";
    if (!form.destination) e.destination = "Please select a destination.";
    return e;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSending(true);
    setStatus("idle");

    try {


      console.log(`serviceId:${serviceId} templateId:${templateId} publicKey:${publicKey}`)
      const emailjs = (await import("@emailjs/browser")).default;
      const payload = {
        from_name: form.fullName.trim(),
        from_email: form.email.trim(),
        phone: form.phone.trim(),
        destination: form.destination,
        study_level: form.studyLevel || "Not specified",
        message: form.message.trim(),
      }
      console.log(`payload:${JSON.stringify(payload)}`)
      await emailjs.send(serviceId, templateId, payload, publicKey);

      setStatus("success");
      setStatusMessage(
        "Thank you! Your consultation request has been sent. Our team will get in touch with you soon."
      );
      setForm({
        fullName: "",
        email: "",
        phone: "",
        destination: "",
        studyLevel: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        "Something went wrong while sending your request. Please try again or contact us directly at banepatrailmaker@gmail.com or call 011-664371 / 011-665623."
      );
      console.log(error)
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="consultation"
      style={{
        background: "var(--cream)",
        padding: "clamp(48px, 8vw, 96px) 0",
      }}
    >
      <div className="wrap consultation-wrap">
        <div className="consultation-copy reveal">
          <span className="eyebrow">Book a Consultation</span>
          <h2>Tell us where you want your education journey to take you.</h2>
          <p>
            Fill in the form and our counselors will get in touch with you
            shortly to map out your trail. Your first consultation is free.
          </p>
          <div className="consultation-contact">
            <p>Or reach us directly:</p>
            <a href="tel:+97711664371" className="contact-link">
              011-664371
            </a>
            <a href="tel:+97711665623" className="contact-link">
              011-665623
            </a>
            <a
              href="mailto:banepatrailmaker@gmail.com"
              className="contact-link"
            >
              banepatrailmaker@gmail.com
            </a>
          </div>
        </div>

        <div className="consultation-form-wrap reveal">
          {status === "success" ? (
            <div className="form-success" role="status">
              <span className="success-icon" aria-hidden="true">
                &#10004;
              </span>
              <p>{statusMessage}</p>
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => setStatus("idle")}
              >
                Submit another request
              </button>
            </div>
          ) : status === "error" ? (
            <div className="form-error" role="alert">
              <span className="error-icon" aria-hidden="true">&#9888;</span>
              <p>{statusMessage}</p>
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => {
                  setStatus("idle");
                  setStatusMessage("");
                }}
              >
                Try again
              </button>
            </div>
          ) : (
            <form className="consultation-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    disabled={sending}
                  />
                  {errors.fullName && (
                    <span className="field-error">{errors.fullName}</span>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    disabled={sending}
                  />
                  {errors.email && (
                    <span className="field-error">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="011-664371"
                    disabled={sending}
                  />
                  {errors.phone && (
                    <span className="field-error">{errors.phone}</span>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="destination">Interested Destination *</label>
                  <select
                    id="destination"
                    name="destination"
                    required
                    value={form.destination}
                    onChange={handleChange}
                    disabled={sending}
                  >
                    <option value="">Select a destination</option>
                    {DESTINATIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  {errors.destination && (
                    <span className="field-error">{errors.destination}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="studyLevel">Preferred Study Level</label>
                  <select
                    id="studyLevel"
                    name="studyLevel"
                    value={form.studyLevel}
                    onChange={handleChange}
                    disabled={sending}
                  >
                    <option value="">Select a level</option>
                    {STUDY_LEVELS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your goals..."
                    rows={4}
                    disabled={sending}
                  />
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-gold btn-block"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Book a Consultation"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
