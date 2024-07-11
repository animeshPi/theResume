import { t, Trans } from "@lingui/macro";
import { cn } from "@reactive-resume/utils";

type Props = {
  className?: string;
};

export const Copyright = ({ className }: Props) => (
  <div
    className={cn(
      "prose prose-sm prose-zinc flex max-w-none flex-col gap-y-1 text-xs opacity-40 dark:prose-invert",
      className,
    )}
  >
   
    <span>{t`Crafted to help you create the perfect resume.`}</span>
    <span>
      <Trans>
      Developed with dedication by TeamUnknown     
      </Trans>
    </span>

    <span className="mt-4">
      {t`theResume`} {"v0.1"}
    </span>
  </div>
);



