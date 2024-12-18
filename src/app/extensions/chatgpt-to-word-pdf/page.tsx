"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";

import Head from "next/head";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Welcome() {
  useEffect(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio: number, opts: object) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    // Trigger the confetti on page load
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, []);
  return (
    <>
      <Head>
        <title>
          How to Save a ChatGPT Conversation as a Word or PDF Document
        </title>
      </Head>

      <Header />
      <div className=" text-gray-800 font-sans">
        {/* Header */}
        <header className="bg-white py-4 px-6 text-center">
          <h1 className="text-3xl font-bold">
            How to Save a ChatGPT Conversation as a Word or PDF Document
          </h1>
        </header>

        <main className="max-w-4xl mx-auto mt-8 p-6 bg-white ">
          <section className="flex flex-col items-center text-center mb-10">
            <span className="text-4xl text-black-600 font-bold mb-4">1</span>
            <h2 className="text-xl font-semibold">Open chatpgpt.com</h2>
            <Image
              src="/chatgpt-to-word-pdf-1.png" // Replace with actual image path
              alt="Open ChatGPT"
              width={800}
              height={520}
              className="mt-4 rounded-lg"
            />
          </section>

          {/* Step 2 */}
          <section className="flex flex-col items-center text-center mb-10">
            <span className="text-4xl text-black-600 font-bold mb-4">2</span>
            <h2 className="text-xl font-semibold leading-loose	">
              Ask a question to ChatGPT.{" "}
              <p>
                Once, you have received the answer, Click the Word or PDF button
                on the bottom right of the response.
              </p>
            </h2>
            <Image
              src="/chatgpt-to-word-pdf-2.png" // Replace with actual image path
              alt="Select Conversation"
              width={800}
              height={520}
              className="mt-4 rounded-lg"
            />
          </section>

          {/* Demo Video Section */}
        </main>

        {/* Features Section */}
        <section className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-8">
            Features of ChatGPT to Word or PDF Extension
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold">One-click Export</h3>
              <p className="text-sm text-gray-600 mt-2">
                Save your conversation as a Word or PDF file instantly.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">Supports Images</h3>
              <p className="text-sm text-gray-600 mt-2">
                Retain all images in the exported document.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">Preserves Formatting</h3>
              <p className="text-sm text-gray-600 mt-2">
                Keep text, tables, and code blocks formatted perfectly.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center my-8">
          <a
            href="#"
            className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Download the Extension
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
}