'use client';

import { useState } from 'react';

import { challenges, challengeOptions } from '@/db/schema';
import { Header } from './header';

type Props = {
  initialLessonId: number;
  initialHeart: number;
  initialPercentage: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription: any; // TODO: Replace with subscription DB type
};

export const Quiz = ({
  initialLessonId,
  initialHeart,
  initialPercentage,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(initialHeart);
  const [percentage, setpercentage] = useState(initialPercentage);

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
};
