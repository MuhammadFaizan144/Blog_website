import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaPaperPlane,
  FaExternalLinkAlt,
  FaRegCommentDots,
  FaRegQuestionCircle,
  FaChevronRight,
  FaInfoCircle,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [subscribeEmail, setSubscribeEmail] = useState("");

  const handleInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="min-h-screen font-sans bg-white">
      {/* Hero */}
      <section className="bg-gray-100 py-20 text-center">
        <span className="inline-block border border-blue-400 text-blue-500 text-[12px] px-4 py-1 rounded-full mb-2 font-medium bg-[#FAFAFBFF]">
          Contact Us
        </span>

        <h1 className="font-merriweather text-[48px] font-bold text-gray-900 mb-4">
          Let's Start a Conversation
        </h1>

        <p className="text-gray-500 max-w-[700px] mx-auto text-[18px] leading-relaxed">
          Have a question about our articles? Want to contribute a guest post?
          Our team is here to help you engage with the community.
        </p>
      </section>

      <div className="w-full h-px bg-gray-100" />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 pt-28 pb-32 grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Left Side */}
        <div>
          <div className="border border-gray-100  rounded-2xl p-8 shadow-sm bg-white">
            <h2 className="text-2xl font-bold font-merriweather text-gray-900 mb-1">
              Send us a Message
            </h2>

            <p className="text-[#565D6DFF] text-[14px] mb-7">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleInput}
                  placeholder="Jane"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Last Name
                </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Subject
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleInput}
                placeholder="Tell us more about how we can help you..."
                rows={5}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200">
              <FaPaperPlane className="text-[15px]" />
              Send Message
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              By clicking send, you agree to our privacy policy and terms of
              service.
            </p>
          </div>

          {/* Quick Assistance */}
          <div className="mt-6">
            <h3 className="flex items-center gap-2 text-gray-900 font-semibold mb-4">
              <FaInfoCircle className="text-blue-500 text-[20px]" />
              Quick Assistance
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: <FaRegCommentDots />,
                  title: "Writer Guidelines",
                  desc: "Check our submission requirements.",
                },
                {
                  icon: <FaRegQuestionCircle />,
                  title: "Advertising",
                  desc: "Get our latest media kit and rates.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-150 rounded-xl p-4 flex items-start justify-between gap-3 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all bg-white"
                >
                  <div className="flex gap-3 items-start">
                    <span className="text-gray-400 mt-0.5 text-[18px]">
                      {item.icon}
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <span className="text-gray-300 mt-0.5 flex-shrink-0 text-[14px]">
                    <FaChevronRight />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-merriweather">
            Contact Information
          </h2>

          <div className="space-y-9 mb-8">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Visit Our Office",
                main: "123 Bloggers Lane, Content District, New York, NY 10001",
                sub: "Validated parking available for visitors.",
              },
              {
                icon: <FaEnvelope />,
                title: "Email Support",
                main: "hello@blogcentral.com",
                sub: "General inquiries and feedback.",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Call Us",
                main: "+1 (555) 123-4567",
                sub: "Mon-Fri, 9am - 6pm EST",
              },
              {
                icon: <FaClock />,
                title: "Operational Hours",
                main: "Monday - Friday: 09:00 - 18:00",
                sub: "Closed on National Holidays",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="size-[48px] rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 text-[20px]">
                  {item.icon}
                </div>

                <div>
                  <p className="font-semibold text-gray-900 text-[16px] font-merriweather">
                    {item.title}
                  </p>
                  <p className="text-gray-600 text-sm mt-0.5">{item.main}</p>
                  <p className="text-blue-400 text-xs italic mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 font-merriweather">Locate Us</h3>

          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div
              className="h-[298px] relative flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(145deg, #d1d9e6 0%, #c8d3e8 40%, #bcc9dd 100%)",
                backgroundImage:
                  "linear-gradient(145deg, #d1d9e6 0%, #c8d3e8 40%, #bcc9dd 100%), repeating-linear-gradient(0deg,transparent,transparent 30px,rgba(255,255,255,0.08) 30px,rgba(255,255,255,0.08) 31px), repeating-linear-gradient(90deg,transparent,transparent 30px,rgba(255,255,255,0.08) 30px,rgba(255,255,255,0.08) 31px)",
              }}
            >
              <span className="absolute top-3 left-3 bg-white text-xs font-semibold text-gray-700 px-3 py-1 rounded-full shadow-sm">
                Headquarters
              </span>

              <div className="bg-gray-800 text-white text-center px-6 py-3 rounded-xl shadow-lg z-10 relative">
                <p className="font-bold tracking-widest text-sm">
                  CONTENT CITY
                </p>
                <p className="text-gray-400 text-xs tracking-widest mt-0.5">
                  — BLOG CENTRAL —
                </p>
              </div>

              <button className="absolute bottom-3 right-3 bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg shadow flex items-center gap-1.5 hover:bg-gray-50 transition-colors">
                <FaExternalLinkAlt className="text-[12px]" />
                Open in Maps
              </button>
            </div>

            <div className="px-4 py-3 bg-white">
              <p className="text-xs text-gray-500 italic leading-relaxed">
                Note: For security reasons, visitor appointments must be
                scheduled 24 hours in advance via email.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Newsletter */}
      <div className="bg-[#F0F7FFFF] px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-merriweather font-bold text-gray-900">
              Join the conversation.
            </h3>

            <p className="text-gray-600 text-[16px] mt-2">
              Subscribe to our weekly digest of top stories and exclusive
              insights.
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
    </main>
  );
};

export default Contact;