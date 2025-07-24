export interface Category {
  id: string;
  name: string;
  words: string[];
  enabled: boolean;
}

export const DEFAULT_CATEGORIES: Category[] = [ // these are all the words that can be used in the game. In future versions these can be updated to include more words.
  {
    id: 'famous-persons',
    name: 'Famous Persons',
    enabled: true,
    words: [
      'Albert Einstein', 'Leonardo da Vinci', 'Shakespeare', 'Mozart', 'Napoleon', 'Cleopatra',
      'Gandhi', 'Martin Luther King Jr.', 'Nelson Mandela', 'Steve Jobs', 'Bill Gates', 'Elon Musk',
      'Michael Jackson', 'Elvis Presley', 'Marilyn Monroe', 'Tom Hanks', 'Walt Disney', 'Johan Cruijff',
      'Pablo Picasso', 'Vincent van Gogh', 'Marie Curie', 'Charles Darwin', 'Aristotle', 'Socrates',
    ]
  },
  {
    id: 'food',
    name: 'Food',
    enabled: true,
    words: [
      'Pizza', 'Burger', 'Sushi', 'Pasta', 'Sandwich', 'Salad', 'Soup', 'Steak',
      'Chicken', 'Fish', 'Rice', 'Bread', 'Cheese', 'Apple', 'Banana', 'Orange',
      'Coffee', 'Tea', 'Water', 'Juice', 'Wine', 'Beer', 'Cake', 'Ice Cream'
    ]
  },
  {
    id: 'objects',
    name: 'Objects',
    enabled: true,
    words: [
      'Chair', 'Table', 'Lamp', 'Book', 'Phone', 'Computer', 'Car', 'Bicycle',
      'Watch', 'Glasses', 'Umbrella', 'Bag', 'Shoes', 'Hat', 'Mirror', 'Camera',
      'Key', 'Pen', 'Paper', 'Clock', 'Window', 'Door', 'Pillow', 'Blanket'
    ]
  },
  {
    id: 'countries-cities',
    name: 'Countries & Cities',
    enabled: true,
    words: [
      'Paris', 'London', 'New York', 'Tokyo', 'Rome', 'Berlin', 'Moscow', 'Sydney',
      'France', 'Germany', 'Japan', 'Italy', 'Spain', 'Brazil', 'Canada', 'Australia',
      'China', 'India', 'Russia', 'Mexico', 'Egypt', 'Greece', 'Norway', 'Thailand', 'Amsterdam'
    ]
  },
  {
    id: 'jobs',
    name: 'Jobs',
    enabled: true,
    words: [
      'Doctor', 'Teacher', 'Engineer', 'Artist', 'Chef', 'Pilot', 'Nurse', 'Police Officer',
      'Firefighter', 'Lawyer', 'Scientist', 'Writer', 'Musician', 'Actor', 'Athlete', 'Farmer',
      'Mechanic', 'Electrician', 'Plumber', 'Architect', 'Designer', 'Photographer', 'Journalist', 'Librarian'
    ]
  },
  {
    id: 'brands',
    name: 'Brands',
    enabled: true,
    words: [
      'Apple', 'Google', 'Microsoft', 'Amazon', 'Nike', 'Adidas', 'Coca-Cola', 'Pepsi',
      'McDonald\'s', 'KFC', 'Starbucks', 'Samsung', 'Sony', 'BMW', 'Mercedes', 'Toyota',
      'Disney', 'Netflix', 'Facebook', 'Twitter', 'Instagram', 'YouTube', 'Spotify', 'Uber',
      'Heineken', 'Lego', 'IKEA', 'H&M', 'Zara', 'Puma', 'Reebok', 'Shell'
    ]
  },
  {
    id: 'activities',
    name: 'Activities',
    enabled: true,
    words: [
      'Swimming', 'Running', 'Dancing', 'Singing', 'Reading', 'Writing', 'Cooking', 'Painting',
      'Drawing', 'Playing', 'Sleeping', 'Walking', 'Driving', 'Flying', 'Climbing', 'Jumping',
      'Shopping', 'Traveling', 'Working', 'Studying', 'Exercising', 'Meditating', 'Fishing', 'Camping'
    ]
  },
  {
    id: 'professions',
    name: 'Professions',
    enabled: false,
    words: [
      'Surgeon', 'Professor', 'Architect', 'Veterinarian', 'Dentist', 'Pharmacist', 'Therapist', 'Judge',
      'Accountant', 'Banker', 'Real Estate Agent', 'Social Worker', 'Psychologist', 'Consultant', 'Manager', 'CEO',
      'Flight Attendant', 'Security Guard', 'Translator', 'Interior Designer', 'Personal Trainer', 'Hairdresser', 'Waiter', 'Bartender'
    ]
  },
  {
    id: 'music',
    name: 'Music',
    enabled: true,
    words: [
      'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Trumpet', 'Flute', 'Harp',
      'Rock', 'Pop', 'Jazz', 'Classical', 'Blues', 'Country', 'Hip Hop', 'Electronic',
      'Concert', 'Orchestra', 'Band', 'Singer', 'Composer', 'Album', 'Song', 'Melody'
    ]
  },
  {
    id: 'places',
    name: 'Places',
    enabled: true,
    words: [
      'Beach', 'Mountain', 'Forest', 'Desert', 'School', 'Hospital', 'Restaurant', 'Park',
      'Museum', 'Library', 'Airport', 'Train Station', 'Mall', 'Cinema', 'Theater', 'Stadium',
      'Church', 'Hotel', 'Garden', 'Farm', 'Zoo', 'Island', 'Castle', 'Bridge'
    ]
  }
];

export function getRandomWordFromCategories(categories: Category[]): string | null {
  const enabledCategories = categories.filter(cat => cat.enabled);
  
  if (enabledCategories.length === 0) {
    return null;
  }
  
  // Get all words from enabled categories
  const allWords = enabledCategories.flatMap(cat => cat.words);
  
  if (allWords.length === 0) {
    return null;
  }
  
  // Return random word
  const randomIndex = Math.floor(Math.random() * allWords.length);
  return allWords[randomIndex];
}
