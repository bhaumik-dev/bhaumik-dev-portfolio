"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import memojiAvatar1 from "@/assets/images/parth_gupta_testimonial_image.png";
import memojiAvatar2 from "@/assets/images/devarshidave.jpg";
import memojiAvatar3 from "@/assets/images/samara.jpg";
import memojiAvatar4 from "@/assets/images/genericprofilepic.jpg";
import memojiAvatar5 from "@/assets/images/tayseerrehman.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Cards";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Parth Gupta",
    position: "Social Media Marketer & LinkedIn Strategist",
    text: "Bhaumik's ability to translate ideas into visually stunning elements, coupled with his keen understanding of user experience, resulted in a website that not only met but exceeded my expectations. Throughout the entire process, he remained communicative, responsive, and open to feedback, ensuring that the final product aligned perfectly with my vision.  If you're seeking a designer who combines creativity with a commitment to excellence, Bhaumik is your go-to.",
    avatar: memojiAvatar1,
  },
  {
    name: "Devarshi Dave",
    position: "Team Lead and Senior Fullstack Developer",
    text: "Bhaumik is a rising talent in UI/UX Design for any web or mobile based applications. He has efficiently provided insights and correct recommendations to improve the UI/UX for my projects and it was a success! He is fast learner and fluent in English language. Bhaumik can be a valuable asset to any firm. I am always looking forward to work with him.",
    avatar: memojiAvatar2,
  },
  {
    name: "Samara Alam",
    position: "Founder at Winfluence",
    text: "Bhaumik is an awesome Web Designer and developer! But importantly, he's a great person to work with. He has very clear communication methods and truly understands what you're meaning. Very glad to have benefitted from his perceptiveness, allowing him to put ideas to life in a beautiful and accurate way. He's very efficient as well in terms of timing with his work and I can truly say he gets the job done beyond expectations. Definitely recommend his services tenfold!",
    avatar: memojiAvatar3,
  },
  {
    name: "Kunwar Khurmi",
    position: "Full Stack Developer and Professor",
    text: "I was Bhaumik's professor at Conestoga College for the course Advanced Responsive Site Design. He scored 4 out of 4 grade points in my course. Bhaumik consistently submitted his coursework ahead of deadlines, and his work on assignments and projects was exceptional. He is a dedicated student who will excel in any opportunity he is given.",
    avatar: memojiAvatar4,
  },
  {
    name: "Taysseer Samman",
    position: "Software Developer & Solutions Architect",
    text: "Bhaumik was a top student in my class, attentive and collaborative. He showed interest, attention to detail, and a great team player. He would fit in any position, because of his personality and wits.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="py-16 lg:py-24">
      <div className="lg:max-w-full md:container sm:container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="Testimonials & Recommendations"
          description="See what people say about me."
        />

        {isClient && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image: linear-gradient(to_right, transparent, black_10%, black90%, transparent)] py-4 -my-4">
              <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
                {[...new Array(2)].fill(0).map((_, index) => (
                  <Fragment key={index}>
                    {testimonials.map((testimonial) => (
                      <Card
                        className="text-white mt-2 max-w-xs md:p-8 md:max-w-lg lg:max-w-2xl hover:-rotate-1 transition duration-300"
                        key={testimonial.name}
                      >
                        <div className="flex gap-4 items-center">
                          <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="max-h-full rounded-full"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-white">
                              {testimonial.name}
                            </div>
                            <div className="text-sm font-light text-white">
                              {testimonial.position}
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 md:mt-6 text-sm md:text-base text-white">
                          {testimonial.text}
                        </p>
                      </Card>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
