import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Styles/form.css";

const SERVICE_ID = "service_orrxo3a";
const TEMPLATE_ID = "template_d5qg7dp";

const Form = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");

    // Uses data-name attributes to map to EmailJS template variables
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          email,
          subject,
          message,
        },
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS failed...", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} className="form" onSubmit={handleSubmit}>
      <div className="form-row" style={{ margin: "50px 50px 30px 50px" }}>
        <div className="form-column half-width">
          <div className="form-label-row">
            <div>Name</div>
            <div className="required">*</div>
          </div>
          <input
            type="text"
            name="name"
            className="input"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-column half-width">
          <div className="form-label-row">
            <div>Email</div>
            <div className="required">*</div>
          </div>
          <input
            type="email"
            name="email"
            className="input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row" style={{ margin: "30px 50px" }}>
        <div className="form-column full-width">
          <div className="form-label-row">Subject</div>
          <input
            type="text"
            name="subject"
            className="input"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row" style={{ margin: "30px 50px" }}>
        <div className="form-column full-width">
          <div className="form-label-row">Message</div>
          <textarea
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="form-footer">
        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "SENDING..." : "SEND"}
        </button>
      </div>

      {status === "success" && (
        <div className="form-status success" aria-live="polite">
          Message sent successfully. Thank you for reaching out!
        </div>
      )}
      {status === "error" && (
        <div className="form-status error" aria-live="polite">
          Something went wrong. Please try again in a moment.
        </div>
      )}
    </form>
  );
};

export default Form;
