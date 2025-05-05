"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./validationSchema"; // adjust path
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";


type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(contactSchema),
  });

    async function onSubmit(data:FormData){
        try{
            const response = await fetch("https://formspree.io/f/mwpoovjy", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
                
            })
            console.log(response);
            
        }
        catch(error){
            toast.error("form submission error")
            console.log(error)
        } 
        finally{
            toast.success("Success I'll get back to you :)")
            reset()
        }
    }


  return (
    <section id="contact" className="border-4 justify-self-center border-black w-fit p-10 mt-20 shadow-custom">
      <h2 className="text-5xl font-bold mb-6">Contact Me</h2>
      <form className="flex flex-col gap-5 max-w-xl" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your Name"
          className="border-2 w-[500px] border-black p-4"
          {...register("name")}
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}

        <input
          type="email"
          placeholder="Your Email"
          className="border-2 border-black p-4"
          {...register("email")}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

        <textarea
          placeholder="Your Message"
          className="border-2 border-black p-4 h-40"
          {...register("message")}
        />
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}

        <button type="submit" className="bg-amber-400 border-2 border-black p-4 font-bold shadow-custom hover:shadow-none">
          Send
        </button>
      </form>

      <ul className="flex gap-x-[20px] mt-[40px] items-center justify-self-center">
        <li>
          <a target="_" href="https://www.linkedin.com/in/abdullah-arshad-6b4949284/">
            <Image width={50} height={50} alt="github-link" src={"/links/github.svg"} />
          </a>
        </li>
        <li>
          <a target="_" href="https://github.com/Abdullah-765">
            <Image width={50} height={50} alt="linkedin-link" src={"/links/linkedin.svg"} />
          </a>
        </li>
      </ul>
      <ToastContainer/>
    </section>
  );
}
