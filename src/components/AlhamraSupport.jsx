import React, { useState } from "react";
import "./AlhamraSupport.css";

const faqs = [
  {
    q: "How do I book a hall?",
    a: "You can book a hall by clicking the 'Contact & Booking' section or using our online booking form. Our team will assist you with the process."
  },
  {
    q: "What packages are available?",
    a: "We offer Classic, Premium, and Corporate packages. Visit the 'Packages & Offers' section for details."
  },
  {
    q: "Can I schedule a tour?",
    a: "Yes! Please contact us via the 'Contact & Booking' section to schedule a virtual or in-person tour."
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellations are allowed up to 7 days before the event. Please see our terms or contact support for details."
  }
];

export default function AlhamraSupport() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="alhamra-support-fab" onClick={() => setOpen(true)}>
        <span role="img" aria-label="support">💬</span>
      </div>
      {open && (
        <div className="alhamra-support-chat">
          <div className="alhamra-support-header">
            <span>Alhamra AI Customer Support</span>
            <button className="alhamra-support-close" onClick={() => { setOpen(false); setSelected(null); }}>×</button>
          </div>
          <div className="alhamra-support-body">
            {!selected && (
              <>
                <div className="alhamra-support-welcome">Welcome! How can we help you today?</div>
                <div className="alhamra-support-faqs">
                  {faqs.map((faq, idx) => (
                    <button key={idx} className="alhamra-support-faq-btn" onClick={() => setSelected(idx)}>{faq.q}</button>
                  ))}
                </div>
              </>
            )}
            {selected !== null && (
              <div className="alhamra-support-answer">
                <div className="alhamra-support-question">{faqs[selected].q}</div>
                <div className="alhamra-support-response">{faqs[selected].a}</div>
                <button className="alhamra-support-back" onClick={() => setSelected(null)}>Back</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
