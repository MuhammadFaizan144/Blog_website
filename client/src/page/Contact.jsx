import React from 'react'
import { useState } from "react";
const MapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const Mail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const Phone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.95 5.95l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>
);
const Clock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const Send = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const ExternalLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const MessageCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const HelpCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [subscribeEmail, setSubscribeEmail] = useState("");
 
  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen font-sans bg-white">
 
      {/* ── Hero ── */}
      <div className="bg-gray-100 py-20 text-center">
        <span className="inline-block border border-blue-400 text-blue-500 text-[12px] px-4 py-1 rounded-full mb-2 font-medium bg-[#FAFAFBFF]">
          Contact Us
        </span>
        <h1 className="font-merriweather text-[48px] font-bold text-gray-900 mb-4">
          Let's Start a Conversation
        </h1>
        <p className="text-gray-500 max-w-[700px] mx-auto text-[18px] leading-relaxed">
          Have a question about our articles? Want to contribute a guest post? Our team is here to
          help you engage with the community.
        </p>
      </div>
 
      <div className="w-full h-px bg-gray-100" />
 
      {/* ── Main Content ── */}
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-14">
 
        {/* ── Left: Form + Quick Links ── */}
        <div>
          <div className="border border-gray-100 rounded-2xl p-8 shadow-sm bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Send us a Message</h2>
            <p className="text-gray-400 text-sm mb-7">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
 
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleInput}
                  placeholder="Jane"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleInput}
                  placeholder="Doe"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            </div>
 
            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <input
                name="email"
                value={form.email}
                onChange={handleInput}
                placeholder="jane@example.com"
                type="email"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
 
            {/* Subject */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleInput}
                placeholder="Partnership Inquiry / Content Question"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
 
            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleInput}
                placeholder="Tell us more about how we can help you..."
                rows={5}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
              />
            </div>
 
            {/* Submit */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200">
              <Send /> Send Message
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              By clicking send, you agree to our privacy policy and terms of service.
            </p>
          </div>
 
          {/* Quick Assistance */}
          <div className="mt-6">
            <h3 className="flex items-center gap-2 text-gray-900 font-semibold mb-4">
              <span className="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </span>
              Quick Assistance
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <MessageCircle />, title: "Writer Guidelines", desc: "Check our submission requirements." },
                { icon: <HelpCircle />, title: "Advertising", desc: "Get our latest media kit and rates." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-150 rounded-xl p-4 flex items-start justify-between gap-3 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all bg-white"
                >
                  <div className="flex gap-3 items-start">
                    <span className="text-gray-400 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-gray-300 mt-0.5 flex-shrink-0">
                    <ChevronRight />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
 
        {/* ── Right: Contact Info + Map ── */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
 
          <div className="space-y-5 mb-8">
            {[
              {
                icon: <MapPin />,
                title: "Visit Our Office",
                main: "123 Bloggers Lane, Content District, New York, NY 10001",
                sub: "Validated parking available for visitors.",
              },
              {
                icon: <Mail />,
                title: "Email Support",
                main: "hello@blogcentral.com",
                sub: "General inquiries and feedback.",
              },
              {
                icon: <Phone />,
                title: "Call Us",
                main: "+1 (555) 123-4567",
                sub: "Mon-Fri, 9am - 6pm EST",
              },
              {
                icon: <Clock />,
                title: "Operational Hours",
                main: "Monday - Friday: 09:00 - 18:00",
                sub: "Closed on National Holidays",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-gray-600 text-sm mt-0.5">{item.main}</p>
                  <p className="text-blue-400 text-xs italic mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
 
          {/* Map */}
          <h3 className="text-xl font-bold text-gray-900 mb-3">Locate Us</h3>
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div
              className="h-48 relative flex items-center justify-center"
              style={{
                background: "linear-gradient(145deg, #d1d9e6 0%, #c8d3e8 40%, #bcc9dd 100%)",
                backgroundImage:
                  "linear-gradient(145deg, #d1d9e6 0%, #c8d3e8 40%, #bcc9dd 100%), repeating-linear-gradient(0deg,transparent,transparent 30px,rgba(255,255,255,0.08) 30px,rgba(255,255,255,0.08) 31px), repeating-linear-gradient(90deg,transparent,transparent 30px,rgba(255,255,255,0.08) 30px,rgba(255,255,255,0.08) 31px)",
              }}
            >
              <span className="absolute top-3 left-3 bg-white text-xs font-semibold text-gray-700 px-3 py-1 rounded-full shadow-sm">
                Headquarters
              </span>
              <div className="bg-gray-800 text-white text-center px-6 py-3 rounded-xl shadow-lg z-10 relative">
                <p className="font-bold tracking-widest text-sm">CONTENT CITY</p>
                <p className="text-gray-400 text-xs tracking-widest mt-0.5">— BLOG CENTRAL —</p>
              </div>
              <button className="absolute bottom-3 right-3 bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg shadow flex items-center gap-1.5 hover:bg-gray-50 transition-colors">
                <ExternalLink /> Open in Maps
              </button>
            </div>
            <div className="px-4 py-3 bg-white">
              <p className="text-xs text-gray-500 italic leading-relaxed">
                Note: For security reasons, visitor appointments must be scheduled 24 hours in advance via email.
              </p>
            </div>
          </div>
        </div>
      </div>
 
      {/* ── Footer Newsletter ── */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Join the conversation.</h3>
            <p className="text-gray-500 text-sm mt-1">
              Subscribe to our weekly digest of top stories and exclusive insights.
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 bg-white w-full md:w-56 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
 
    </div>

  )
}

export default Contact
