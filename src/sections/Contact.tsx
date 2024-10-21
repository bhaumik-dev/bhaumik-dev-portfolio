"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="py-12 pt-10 lg:py-24 lg:pt-20">
        <div className="container">
          <div className="bg-gradient-to-r from-violet-600 to-purple-700 py-14 px-10 rounded-3xl text-center md:text-left">
            <div className="flex flex-col gap-8 items-center md:flex-row md:gap-12">
              <div>
                <h2 className="font-serif font-semibold text-2xl text-white md:text-2xl">
                  Leave Your Website Worries to Me - I'll Take Care of
                  Everything!
                </h2>
                <p className="text-sm mt-3 text-white max-w-3xl mx-auto md:text-base md:w-full">
                  Whether you're looking to build a custom website, enhance an
                  existing one, or need a quick turnaround using no-code tools,
                  I'm ready to help. Get in touch, and let's discuss how we can
                  work together to create something amazing.
                </p>
              </div>
              <div>
                <button
                  className="text-white bg-gray-900 inline-flex items-center  px-6 h-12 rounded-xl gap-2 mt-6 w-max"
                  onClick={() =>
                    (window.location.href = "mailto:webdevbhaumik@gmail.com")
                  }
                >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
