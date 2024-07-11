/* eslint-disable lingui/text-restrictions */
/* eslint-disable lingui/no-unlocalized-strings */

import { t, Trans } from "@lingui/macro";
import { Quotes } from "@phosphor-icons/react";
import { cn } from "@reactive-resume/utils";
import { motion } from "framer-motion";

const email = "hello@theresume.us";

type Testimonial = {
  quote: string;
  name: string;
};

const testimonials: Testimonial[][] = [
  [
    {
      name: "A. Patel",
      quote:
        "This is really a thank you for the resume tool. Drafting resumes was never a strength of mine, so your app really made the whole process easy and smooth!",
    },
    {
      name: "S. Sharma",
      quote:
        "First off, many thanks for making this resume builder! This is one of the best tools I have ever found. Have also recommended it to many of my university friends...",
    },
    {
      name: "K. Rao",
      quote:
        "I just found your resume builder, and I really appreciate it! The moment I saw its quality, I closed all the other CV sites I was considering. Thank you for providing such a great service.",
    },
  ],
  [
    {
      name: "R. Gupta",
      quote:
        "Hey, just wanted to let you know you not only helped me get a job, you helped my partner and my childhood friend, who then used your site to help one of her friends get a job. I wanted to let you know you really made a difference with your resume builder.",
    },
    {
      name: "P. Kumar",
      quote:
        "Hey, I am a mechanical engineer, not very good with coding, AI, and computer systems. But what drew me here is your creativity. Your website is excellent! Using it and seeing the effort put into making it accessible is remarkable. Keep doing great work.",
    },
  ],
  [
    {
      name: "A. Singh",
      quote:
        "I have loved your resume builder website. Thank you so much for making this kind of thing.",
    },
    {
      name: "S. Jain",
      quote:
        "I appreciate your effort in creating such a valuable tool. It is on par with many popular resume builders in quality.",
    },
    {
      name: "M. Joshi",
      quote:
        "I just wanted to write a thank you message for developing this resume tool. It's easy to use, intuitive, and much more practical than many others that made you pay up after spending an hour to create your CV.",
    },
  ],
];


export const TestimonialsSection = () => (
  <section id="testimonials" className="container relative space-y-12 py-24 sm:py-32">
    <div className="space-y-6 text-center">
      <h1 className="text-4xl font-bold">{t`Testimonials`}</h1>
      <p className="mx-auto max-w-2xl leading-relaxed">
        <Trans>
          I always love to hear from the users of theResume with feedback or support. Here are
          some of the messages I've received. If you have any feedback, feel free to drop me an
          email at{" "}
          <a href="mailto:hello@theresume.us" className="underline">
            {email}
          </a>
          .
        </Trans>
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-y-0">
      {testimonials.map((columnGroup, groupIndex) => (
        <div key={groupIndex} className="space-y-8">
          {columnGroup.map((testimonial, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.25 } }}
              className={cn(
                "relative overflow-hidden rounded-lg bg-secondary-accent p-5 text-primary shadow-lg",
                index > 0 && "hidden lg:block",
              )}
            >
              <Quotes size={64} className="absolute -right-3 bottom-0 opacity-20" />
              <blockquote className="italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 font-medium">{testimonial.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      ))}
    </div>
  </section>
);
