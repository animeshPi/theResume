import { t } from "@lingui/macro";

export const SupportSection = () => (
  <section
    id="support"
    className="relative space-y-12 bg-secondary-accent py-24 text-primary sm:py-32"
  >
    <div className="container space-y-6">
      <h1 className="text-4xl font-bold">{t`Supporting theResume`}</h1>

      <p className="max-w-4xl leading-loose">
        {t`theResume is a project crafted by a small group of dedicated individuals, and your support is greatly appreciated. Thank you for being a part of our journey.`}
      </p>


      <p className="max-w-4xl leading-loose">
        {t`If you're multilingual, we'd love your help in bringing the app to more languages and communities. Don't worry if you don't see your language on the list - contact us through email, and we'll make sure to include it.`}
      </p>



      <p className="max-w-4xl leading-loose">
        {t`You can make a difference in our project by spreading the word to your friends or by letting us know how theResume has helped you. Your feedback and support are always welcome and greatly appreciated!`}
      </p>
    </div>
  </section>
);
