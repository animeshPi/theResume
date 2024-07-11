import { t, Trans } from "@lingui/macro";
import { Book, EnvelopeSimpleOpen, GithubLogo, HandHeart } from "@phosphor-icons/react";
import {
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";

import { getSectionIcon } from "../shared/section-icon";

const DonateCard = () => (
  <Card className="space-y-4 bg-info text-info-foreground">
    <CardContent className="space-y-2">
      <CardTitle>{t`Support the app by donating what you can!`}</CardTitle>
      <CardDescription className="space-y-2">
        <Trans>
          <p>
          ChatGPT

We built theResume as a team when we encountered difficulties finding free resume-building tools. Our goal was to create an easy-to-use platform to help you craft the perfect resume effortlessly. 
          </p>
          <p>
          We hope you find it as valuable as we did in addressing our own resume-building challenges. Your success is our motivation.
          </p>
        </Trans>
      </CardDescription>
    </CardContent>
  </Card>
);

const IssuesCard = () => (
  <Card className="space-y-4">
    <CardContent className="space-y-2">
      <CardTitle>{t`Found a bug, or have an idea for a new feature?`}</CardTitle>
      <CardDescription className="space-y-2">
        <Trans>
          <p>We strive for perfection with theResume, but we know there's always room for improvement.</p>
          <p>
          If you encounter any issues while creating your resume or have ideas to enhance the platform, please let us know. Your feedback is invaluable. Feel free to send us an email with your suggestions or concerns.
          </p>
        </Trans>
      </CardDescription>
    </CardContent>
    <CardFooter className="space-x-4">

      <a className={cn(buttonVariants({ size: "sm" }))} href="mailto:hello@theresume.us">
        <EnvelopeSimpleOpen size={14} weight="bold" className="mr-2" />
        <span className="line-clamp-1">{t`Send us a message`}</span>
      </a>
    </CardFooter>
  </Card>
);

const DocumentationCard = () => (
  <Card className="space-y-4">
    <CardContent className="space-y-2">
      <CardTitle>{t`Don't know where to begin? Hit the docs!`}</CardTitle>
      <CardDescription className="space-y-2">
        <Trans>
          <p>
          Our team has dedicated significant time to creating comprehensive documentation for theResume. We're confident it will help you get started with the app smoothly.
          </p>
          <p>
            There are also a lot of examples to help you get started, and features that you might
            not know about which could help you build your perfect resume.
          </p>
        </Trans>
      </CardDescription>
    </CardContent>
    <CardFooter className="space-x-4">
      <a
        className={cn(buttonVariants({ size: "sm" }))}
        href="https://docs.rxresu.me/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Book size={14} weight="bold" className="mr-2" />
        <span className="line-clamp-1">{t`Documentation`}</span>
      </a>
    </CardFooter>
  </Card>
);

export const InformationSection = () => {
  return (
    <section id="information" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          {getSectionIcon("information")}
          <h2 className="line-clamp-1 text-3xl font-bold">{t`Information`}</h2>
        </div>
      </header>

      <main className="grid gap-y-4">
        <DonateCard />
        <DocumentationCard />
        <IssuesCard />
      </main>
    </section>
  );
};
