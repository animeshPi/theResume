/* eslint-disable lingui/text-restrictions */
/* eslint-disable lingui/no-unlocalized-strings */

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";

import { useLanguages } from "@/client/services/resume/translation";

// Who are you, and why did you build Reactive Resume?
const Question1 = () => (
  <AccordionItem value="1">
    <AccordionTrigger className="text-left leading-relaxed">
      Why did you build theResume?
    </AccordionTrigger>
    <AccordionContent className="prose max-w-none dark:prose-invert">
      <p>
        We are a group of engineering students who thought of making a tool that would make building resumes easier and free. 
      </p>
    </AccordionContent>
  </AccordionItem>
);

// How much does it cost to run Reactive Resume?
// What languages are supported on Reactive Resume?
const Question4 = () => {
  const { languages } = useLanguages();

  return (
    <AccordionItem value="4">
      <AccordionTrigger className="text-left leading-relaxed">
        What languages are supported on theResume?
      </AccordionTrigger>
      <AccordionContent className="prose max-w-none dark:prose-invert">
        <p>
          Here are the languages currently supported by theResume, along with their respective
          completion percentages.
        </p>

        <div className="flex flex-wrap items-start justify-start gap-x-2 gap-y-4">
          {languages.map((language) => (
            <a
              key={language.id}
              className="no-underline"
              href={`https://crowdin.com/translate/reactive-resume/all/en-${language.editorCode}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative bg-secondary-accent font-medium transition-colors hover:bg-primary hover:text-background">
                <span className="px-2 py-1">{language.name}</span>

                {language.progress !== undefined && (
                  <span
                    className={cn(
                      "inset-0 bg-warning px-1.5 py-1 text-xs text-white",
                      language.progress < 40 && "bg-error",
                      language.progress > 80 && "bg-success",
                    )}
                  >
                    {language.progress}%
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
        <p>
          If a language is missing from this list, please raise an issue through email requesting its
          inclusion, and we will make sure to add it as soon as possible.
        </p>
      </AccordionContent>
    </AccordionItem>
  );
};

// How does the OpenAI Integration work?
const Question5 = () => (
  <AccordionItem value="5">
    <AccordionTrigger className="text-left leading-relaxed">
      How does the OpenAI Integration work?
    </AccordionTrigger>
    <AccordionContent className="prose max-w-none dark:prose-invert">
      <p>
        OpenAI has been a game-changer for all of us. I cannot tell you how much ChatGPT has helped
        me in my everyday work and with the development of theResume. It only makes sense that
        you leverage what AI has to offer and let it help you build the perfect resume.
      </p>

      <p>
        While most applications out there charge you a fee to use their AI services (rightfully so,
        because it isn't cheap), you can choose to enter your own OpenAI API key on the Settings
        page (under OpenAI Integration).{" "}
        <strong>The key is stored in your browser's local storage</strong>, which means that if you
        uninstall your browser, or even clear your data, the key is gone with it. All requests made
        to OpenAI are also sent directly to their service and does not hit the app servers at all.
      </p>

      <p>
        You are free to turn off all AI features (and not be aware of it's existence) simply by not
        adding a key in the Settings page and still make use of all the useful features that
        theResume has to offer. I would even suggest you to take the extra step of using ChatGPT to
        write your content, and simply copy it over to theResume.
      </p>
    </AccordionContent>
  </AccordionItem>
);

export const FAQSection = () => (
  <section id="faq" className="container relative py-24 sm:py-32">
    <div className="grid gap-12 lg:grid-cols-3">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>

        <p className="text-base leading-loose">
          Here are some questions I often get asked about theResume.
        </p>
      </div>

      <div className="col-span-2">
        <Accordion collapsible type="single">
          <Question1 />
          <Question4 />
          <Question5 />
        </Accordion>
      </div>
    </div>
  </section>
);
