"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track loading

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const handleSubmit = async (event:any) => {
    event.preventDefault(); // Prevent default form submission behavior
    const form = event.target;
    const formData = new FormData(form);
    setIsSubmitting(true); // Start loading spinner

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw3C7d6AIU3eXZBS14QM3G-v9lVE1OaXxz46HvEU6Dxq_BCdvtByYiTyi7mc9n3HAIy_w/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      setThankYouMessage(true);
      form.reset(); // Clear the form after submission
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false); // Stop loading spinner
    }
  };

  return (
    <>
      <section id="support" className="">
        <div className="relative mx-auto pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          {/* Background shapes */}
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-black"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Let's Connect
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-blue-600 focus:placeholder:text-blue-600 focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-blue-600 focus:placeholder:text-blue-600 focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    placeholder="Message"
                    rows={3}
                    name="message"
                    required
                    className="w-full border-b border-stroke bg-transparent focus:border-blue-600 focus:placeholder:text-blue-600 focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex justify-start">
                  {thankYouMessage && (
                    <p className="text-green-600 font-bold ">
                      Thanks for reaching out! Our team is now on it!
                    </p>
                  )}
                </div>
                <div className="flex justify-end">  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 text-center px-6 py-2 font-bold rounded-md border dark:bg-black dark:border-white dark:text-white border-black bg-white text-black text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting && (
                      <span className="loader border-2 border-t-2 border-black dark:border-white border-t-transparent rounded-full w-4 h-4 animate-spin"></span>
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>
              <div className="mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Our Location
                </h3>
                <p>
                  Thinksolv Technologies Pvt Ltd, Forge Factory, KCT Tech Park,
                  Coimbatore - 641 049, India.
                </p>
              </div>
              <div className="mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="#">vikram@thinksolv.com</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
