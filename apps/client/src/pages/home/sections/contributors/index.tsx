import { t } from "@lingui/macro";
import { Avatar, AvatarFallback, AvatarImage, Tooltip } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { motion } from "framer-motion";
import { useMemo } from "react";

import { useContributors } from "@/client/services/resume/contributors";

export const ContributorsSection = () => {
  const { github, crowdin, loading } = useContributors();

  const contributors = useMemo(() => {
    if (github && crowdin) return [...github, ...crowdin];
    return [];
  }, [github, crowdin]);

  return (
    <section id="contributors" className="container relative space-y-12 py-24 sm:py-32">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">{t`Designed with you in mind.`}</h1>
        <p className="mx-auto max-w-3xl leading-loose">
          {t`theResume thrives thanks to the dedication of numerous individuals. This project owes its progress to those who've devoted their time and skills.`}
        </p>
      </div>

      {loading && (
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
          {Array.from({ length: 30 })
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, transition: { delay: index * 0.05 } }}
              >
                <Avatar>
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </motion.div>
            ))}
        </div>
      )}
    </section>
  );
};
