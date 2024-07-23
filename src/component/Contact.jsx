import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3e3k0d7",
        "template_zlasmvj",
        form.current,
        "iUyevNgIX9SLNCfjm"
      )
      .then(
        (result) => {
          console.log(result.text);
          // TODO: Add success notification
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          // TODO: Add error notification
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      id="contact"
      className="pt-20 flex flex-col relative items-center w-full h-auto bg-gradient-to-t from-slate-900 to-slate-800 max-sm:pt-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-white text-5xl font-bold max-sm:text-xl mb-12"
        variants={itemVariants}
      >
        Contact <span className="text-red-400">ME!</span>
      </motion.h1>
      <div className="w-10/12 flex justify-between max-md:flex-col">
        <motion.div
          className="border-r border-red-200 flex-1 text-white p-20 font-bold max-md:border-none max-md:p-12 max-sm:p-4"
          variants={itemVariants}
        >
          <h2 className="text-xl max-sm:text-sm">My Name:</h2>
          <p className="text-2xl text-red-400 max-sm:text-lg mb-9">
            Abhishek Tyagi
          </p>
          <h2 className="text-xl max-sm:text-sm">My Email address:</h2>
          <p className="text-2xl text-red-400 max-sm:text-lg mb-9">
            abhishektyagigi4310@gmail.com
          </p>
          <h2 className="text-xl max-sm:text-sm">My Contact No.:</h2>
          <p className="text-2xl text-red-400 max-sm:text-lg mb-12">
            +91-8708353162
          </p>
          <h2 className="text-xl mb-4">Let's Connect:</h2>
          <p className="text-md text-red-400 font-thin max-md:font-bold max-sm:font-thin mb-4">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out through the contact form. Your
            thoughts and feedback are invaluable to me.
          </p>
          <p className="text-md text-red-400 font-thin max-md:font-bold max-sm:font-thin">
            Thank you for stopping by. Enjoy your visit, and let's create
            something amazing together!
          </p>
        </motion.div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 flex-1 p-12 max-sm:p-8 max-sm:gap-4"
          variants={itemVariants}
        >
          <motion.input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 pl-4 text-lg bg-slate-700 text-white rounded border border-red-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 max-sm:text-sm"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="user_email"
            placeholder="Your Email Address"
            className="p-3 pl-4 text-lg bg-slate-700 text-white rounded border border-red-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 max-sm:text-sm"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            placeholder="Enter your message here..."
            className="p-3 pl-4 text-lg bg-slate-700 text-white rounded border border-red-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 max-sm:text-sm"
            rows="6"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-red-400 to-red-500 p-3 text-xl rounded text-white font-bold hover:from-red-500 hover:to-red-600 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
      <motion.footer
        className="bg-gradient-to-r bottom-0 from-cyan-800 to-blue-900 w-full flex justify-evenly items-center h-24 mt-12"
        variants={itemVariants}
      >
        <h2 className="text-white font-bold text-xl max-sm:text-xs">
          Designed and Developed with ❤️ by
          <span className="text-red-400 font-bold text-xl ml-2 max-sm:text-xs">
            Abhishek Tyagi
          </span>
        </h2>
        <h3 className="text-white font-bold max-sm:text-xs">
          Copyright &copy; {new Date().getFullYear()} AT.
        </h3>
      </motion.footer>
    </motion.div>
  );
};

export default Contact;
