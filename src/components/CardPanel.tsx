'use client';

import { useReducer } from 'react';
import Card from './Card';

// Define the reducer function for managing ratings
type RatingState = Map<string, number>;
type RatingAction = 
  | { type: 'add', venueName: string, rating: number }
  | { type: 'remove', venueName: string };

const ratingReducer = (state: RatingState, action: RatingAction): RatingState => {
  switch (action.type) {
    case 'add':
      return new Map(state).set(action.venueName, action.rating);
    case 'remove':
      const newState = new Map(state);
      newState.delete(action.venueName);
      return newState;
    default:
      return state;
  }
};

export default function CardPanel() {
  // Initialize ratings Map with three venue names set to 0
  const initialRatings = new Map<string, number>([
    ['The Bloom Pavilion', 0],
    ['Spark Space', 0],
    ['The Grand Table', 0]
  ]);
  
  const [ratings, dispatchRating] = useReducer(ratingReducer, initialRatings);

  const handleRatingChange = (venueName: string, rating: number) => {
    dispatchRating({ type: 'add', venueName, rating });
  };

  const handleRemoveRating = (venueName: string) => {
    dispatchRating({ type: 'remove', venueName });
  };

  return (
    <div>
      <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
        <Card 
          venueName="The Bloom Pavilion" 
          imgSrc="/img/bloom.jpg" 
          onRatingChange={(rating) => handleRatingChange("The Bloom Pavilion", rating)}
        />
        <Card 
          venueName="Spark Space" 
          imgSrc="/img/sparkspace.jpg" 
          onRatingChange={(rating) => handleRatingChange("Spark Space", rating)}
        />
        <Card 
          venueName="The Grand Table" 
          imgSrc="/img/grandtable.jpg" 
          onRatingChange={(rating) => handleRatingChange("The Grand Table", rating)}
        />
      </div>

      <div className="mt-6 mx-auto p-4 bg-white rounded-lg shadow max-w-2xl">
        <h2 className="text-xl font-medium mb-4">Venue List with Ratings: {ratings.size}</h2>
        {Array.from(ratings).map(([venueName, rating]) => (
          <div 
            key={venueName} 
            className="p-2 border-b cursor-pointer hover:bg-gray-100"
            onClick={() => handleRemoveRating(venueName)}
            data-testid={venueName}
          >
            {venueName} Rating: {rating}
          </div>
        ))}
      </div>
    </div>
  );
}