import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="page page-contact">
      <div className="container">

        <h2>
          CONTACT US<span className="dot">.</span>
        </h2>

        <p className="project-info">
          I appriciate to messaging us!!
        </p>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);

            const subject = encodeURIComponent(
              fd.get("subject") || "Project Inquiry"
            );

            // FIXED → Correct newlines in mailto
            const body =
              `Name: ${fd.get("name")}%0A` +
              `Email: ${fd.get("email")}%0A` +
              `Phone: ${fd.get("phone") || "N/A"}%0A` +
              `Company: ${fd.get("company") || "N/A"}%0A%0A` +
              `Message:%0A${fd.get("message")}`;

            window.location.href = `mailto:eduard.mirandilla0820@gmaile.comsubject=${subject}&body=${body}`;
          }}
        >

          {/* Your Name */}
          <div className="form-group">
            <label htmlFor="name">YOUR NAME*</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="email">EMAIL ADDRESS*</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phone">PHONE NUMBER</label>
            <input
              name="phone"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Company */}
          <div className="form-group">
            <label htmlFor="company">YOUR COMPANY</label>
            <input
              name="company"
              id="company"
              type="text"
              placeholder="Enter your company name"
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">WHAT SAY YOU?*</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message here..."
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary">
            SEND IT.
          </button>

        </form>
      </div>
    </section>
  );
}
