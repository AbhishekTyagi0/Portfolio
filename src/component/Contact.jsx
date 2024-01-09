import { useRef } from "react";
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center w-full h-dvh bg-gradient-to-t from-slate-900 to-slate-800">
      <h1 className="text-white text-5xl font-bold">
        Contact<span className="text-red-400"> ME!</span>
      </h1>
      <div className="mt-12 w-10/12 h-4/6 flex justify-between">
        <div className="border-r border-red-200 flex-1 text-white p-20 font-bold">
          <h2 className="text-xl">My Name:</h2>
          <p className="text-2xl text-red-400">Abhishek Tyagi</p>
          <h2 className="mt-9 text-xl">My Email address:</h2>
          <p className="text-2xl text-red-400">abhishektyagigi4310@gmail.com</p>
          <h2 className="mt-9 text-xl">My Contact No.:</h2>
          <p className="text-2xl text-red-400">+91-8708353162</p>
          <h2 className="mt-12 text-xl">Let's Connect:</h2>
          <p className="text-md text-red-400 font-thin">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out through the "Contact" section.
            Your thoughts and feedback are invaluable to me.
          </p>
          <p className="text-md text-red-400 font-thin">
            Thank you for stopping by. Enjoy your visit, and let's create
            something amazing together!
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 flex-1 p-12"
        >
          <input
            type="text"
            name="user_name"
            placeholder="your name"
            className="p-2 pl-4 text-lg bg-slate-400 rounded border placeholder-gray-600"
          />
          <input
            type="email"
            name="user_email"
            placeholder="your email address"
            className="p-2 pl-4 text-lg bg-slate-400 rounded placeholder-opacity-600 placeholder-gray-600"
          />
          <textarea
            name="message"
            id="cont"
            cols="30"
            rows="10"
            placeholder="enter your text here...."
            className="p-2 pl-4 text-lg bg-slate-400 rounded placeholder-gray-600"
            a
          ></textarea>
          <input
            type="submit"
            className="bg-gradient-to-r from-red-400 to-red-500 p-3 text-xl rounded text-white font-bold  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-500 transition duration-300 ease-in-out"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
