import { useState } from "react";
import { MapPin, Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { InstagramIcon } from "../components/icons";
import PageHero from "../components/PageHero";
import FormField from "../components/FormField";
import Button from "../components/Button";
import useSEO from "../hooks/useSEO";
import { projectTypes } from "../data/services";
import { submitContactForm } from "../lib/contactApi";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  projectType: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a little about your project.";
  }

  if (!values.projectType) {
    errors.projectType = "Please select what you need help with.";
  }

  return errors;
}

export default function Contact() {
  useSEO({
    title: "Contact Elevrra — Let's Create Something Great",
    description:
      "Have a brand that needs a little more attention? A campaign you've been thinking about? Let's talk.",
  });

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      // Isolated submit handler — see src/lib/contactApi.js to connect
      // a real backend or form service. Currently simulates a request.
      await submitContactForm(values);
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Let's create something great."
        description="Have a brand that needs a little more attention? A campaign you've been thinking about? Or simply an idea you want to explore? Let's talk."
      />

      <section className="container-content py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16">
          {/* FORM */}
          <div>
            {status === "success" ? (
              <div
                role="status"
                className="border border-brass/40 bg-bg-2 p-10 flex flex-col items-start gap-4"
              >
                <CheckCircle2 className="text-brass" size={32} aria-hidden="true" />
                <h2 className="font-display font-bold text-2xl">
                  Inquiry sent.
                </h2>
                <p className="text-paper-mute leading-relaxed">
                  Thanks for reaching out — our team will get back to you
                  shortly.
                </p>
                <Button
                  as="button"
                  variant="outline"
                  icon={false}
                  onClick={() => setStatus("idle")}
                >
                  Send another inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <FormField
                    id="name"
                    label="Name"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <FormField
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                  <FormField
                    id="phone"
                    type="tel"
                    label="Phone Number"
                    placeholder="Enter your number"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  <FormField
                    id="company"
                    label="Company / Brand"
                    placeholder="Tell us your brand name"
                    value={values.company}
                    onChange={handleChange}
                  />
                </div>

                <FormField
                  id="message"
                  as="textarea"
                  label="Tell us about your project"
                  placeholder="Give us a little context about what you're looking to build."
                  value={values.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  rows={5}
                />

                <fieldset>
                  <legend className="block text-sm text-paper-dim mb-3">
                    What do you need help with?
                    <span className="text-brass"> *</span>
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {projectTypes.map((type) => {
                      const active = values.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          aria-pressed={active}
                          onClick={() => {
                            setValues((v) => ({ ...v, projectType: type }));
                            if (errors.projectType)
                              setErrors((er) => ({ ...er, projectType: undefined }));
                          }}
                          className={`px-5 py-2.5 text-sm border transition-colors duration-200 ${
                            active
                              ? "bg-brass border-brass text-bg font-semibold"
                              : "border-line-strong text-paper-dim hover:border-brass hover:text-paper"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                  {errors.projectType && (
                    <p className="mt-2 text-xs text-red-400" role="alert">
                      {errors.projectType}
                    </p>
                  )}
                </fieldset>

                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-center gap-3 border border-red-400/40 bg-red-400/5 px-5 py-4 text-sm text-red-300"
                  >
                    <AlertCircle size={18} className="shrink-0" />
                    Something went wrong sending your inquiry. Please try
                    again.
                  </div>
                )}

                <Button
                  as="button"
                  type="submit"
                  variant="primary"
                  icon={status !== "loading"}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    "SEND INQUIRY"
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* CONTACT DETAILS */}
          <aside className="lg:pt-2">
            <h2 className="font-display font-bold text-xl mb-6">
              ELEV RRA MARKETING AGENCY
            </h2>
            <ul className="space-y-5 text-sm text-paper-mute">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brass shrink-0 mt-0.5" aria-hidden="true" />
                Mumbai, India
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brass shrink-0 mt-0.5" aria-hidden="true" />
                <a href="mailto:hello@elevrra.com" className="hover:text-paper">
                  hello@elevrra.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <InstagramIcon size={18} className="text-brass shrink-0 mt-0.5" />
                <a
                  href="https://instagram.com/elevrra"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-paper"
                >
                  @elevrra
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-bg-2 py-24 md:py-32">
        <div className="container-content text-center">
          <h2 className="font-display font-extrabold text-[clamp(1.9rem,4.8vw,3.4rem)] leading-[1.08] max-w-2xl mx-auto mb-8">
            Don't just build a brand. Build a brand people talk about.
          </h2>
          <p className="font-display font-bold text-lg mb-2">ELEV RRA</p>
          <p className="text-paper-mute text-sm">
            Strategy × Creativity × Growth
          </p>
        </div>
      </section>
    </>
  );
}
