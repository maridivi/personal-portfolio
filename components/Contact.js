import H2 from "./UI/H2";
import toast, { Toaster } from "react-hot-toast";
import Section from "./Section";
import CustomInput, { TextArea } from "./UI/CustomInput";
import { useState } from "react";
import { vercelApi } from "../pages";

export default function ContactForm() {
  const [user, setUser] = useState({ userName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await vercelApi.post("/api/contact", {
        data: {
          userName: e.target.elements["name"].value,
          email: e.target.elements["email"].value,
          message: e.target.elements["message"].value,
        },
      });
      console.log("Response received", res);
      if (res.status === 200) {
        console.log("Response succeeded!");
        const inputs = document.querySelectorAll("input, textarea");
        console.log(inputs);
        inputs.forEach((input) => {
          input.value = "";
        });

        toast.success("Message sent!", {
          position: "bottom-center",
          duration: 4000,
        });
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Section>
      <div className="flex flex-col py-48" id="contact">
        <H2 className="text-center">Get in touch</H2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="w-96 mx-auto mt-8">
            <CustomInput label="Name" inputName="name" />
            <CustomInput
              inputName="email"
              label="Email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <TextArea
              inputName="message"
              label="Message"
              onChange={(e) => {
                setUser({ ...user, message: e.target.value });
              }}
            />

            <button
              type="submit"
              className="bg-yellow-400 rounded-md w-1/3 mx-2 mt-8 py-2 text-slate-800 text-sm font-bold"
            >
              Send Message
            </button>
            <Toaster position="bottom-center" />
          </div>
        </form>
      </div>
    </Section>
  );
}
