import { t } from "@lingui/macro";

import { Counter } from "./counter";

type Statistic = {
  name: string;
  value: number;
};

export const StatisticsSection = () => {
  const stats: Statistic[] = [
    { name: t`Rating`, value: 4.1 },
    { name: t`Users Signed Up`, value: 531 },
    { name: t`Resumes Generated`, value: 674 },
  ];

  return (
    <section id="statistics" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-3">
              <dt className="text-base leading-7 opacity-60">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                <Counter from={0} to={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
