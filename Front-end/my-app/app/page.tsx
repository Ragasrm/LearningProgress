"use client"
import StarRating from '@/Component/Rating/RatingComponent';

export default function Home() {
  return (
    <div>
      <main>
        <h1>
          Welcome to learn space..!
        </h1>

        <StarRating
          maxStars={5}
          initialRating={3}
          onRatingChange={(value: number) => console.log('User rated:', value)}
        />

      </main>
    </div>
  );
}