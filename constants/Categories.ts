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
      'Isaac Newton', 'J.K. Rowling', 'Stephen Hawking','Beyoncé', 'Taylor Swift', 'Winston Churchill',
      'Oprah Winfrey', 'Barack Obama', 'Abraham Lincoln', 'Frida Kahlo', 'Andy Warhol', 'John Lennon',
      'Madonna', 'Michael Jordan', 'Muhammad Ali', 'Serena Williams', 'Lionel Messi', 'Cristiano Ronaldo',
      'Mark Zuckerberg', 'Warren Buffett', 'Nikola Tesla', 'Galileo Galilei', 'Alexander the Great',
      'Julius Caesar', 'Theodore Roosevelt', 'Franklin D. Roosevelt', 'John F. Kennedy'
    ]
  },
  {
    id: 'food',
    name: 'Food',
    enabled: false,
    words: [
      'Pizza', 'Burger', 'Sushi', 'Pasta', 'Sandwich', 'Salad', 'Soup', 'Steak',
      'Chicken', 'Fish', 'Rice', 'Bread', 'Cheese', 'Apple', 'Banana', 'Orange',
      'Coffee', 'Tea', 'Water', 'Juice', 'Wine', 'Beer', 'Cake', 'Ice Cream',
      'Chocolate', 'Cookie', 'Donut', 'Pancake', 'Waffle', 'Pie', 'Taco', 'Burrito',
      'Curry', 'Ramen', 'Croissant', 'Bagel', 'Muffin', 'Smoothie', 'Milkshake', 'Lemonade',
      'Popcorn', 'Pretzel', 'French Fries', 'Onion Rings', 'Hot Dog', 'BBQ', 'Lasagna', 'Risotto',
      'Spaghetti', 'Carbonara', 'Tiramisu', 'Cheesecake', 'Brownie', 'Cupcake', 'Muffin'
    ]
  },
  {
    id: 'objects',
    name: 'Objects',
    enabled: true,
    words: [
      'Chair', 'Table', 'Lamp', 'Book', 'Phone', 'Computer', 'Car', 'Bicycle',
      'Watch', 'Glasses', 'Umbrella', 'Bag', 'Shoes', 'Hat', 'Mirror', 'Camera',
      'Key', 'Pen', 'Paper', 'Clock', 'Window', 'Door', 'Pillow', 'Blanket',
      'Candle', 'Backpack', 'Wallet', 'Headphones', 'Television', 'Radio', 'Microwave',
      'Refrigerator', 'Toaster', 'Blender', 'Vacuum', 'Washing Machine', 'Dryer', 'Iron',
      'Scissors', 'Hammer', 'Screwdriver', 'Ladder', 'Toolbox', 'Flashlight', 'Battery',
      'Charger', 'Remote Control', 'Gaming Console', 'Keyboard', 'Mouse', 'Monitor'
    ]
  },
  {
    id: 'countries-cities',
    name: 'Countries & Cities',
    enabled: true,
    words: [
      'Paris', 'London', 'New York', 'Tokyo', 'Rome', 'Berlin', 'Moscow', 'Sydney',
      'France', 'Germany', 'Japan', 'Italy', 'Spain', 'Brazil', 'Canada', 'Australia',
      'China', 'India', 'Russia', 'Mexico', 'Egypt', 'Greece', 'Norway', 'Thailand', 
      'Amsterdam', 'Dubai', 'Las Vegas', 'Barcelona', 'Egypt', 'Switzerland', 'Sweden',
      'Denmark', 'Finland', 'Portugal', 'Ireland', 'Turkey', 'South Korea', 'Singapore',
      'Hong Kong', 'Vienna', 'Prague', 'Budapest', 'Warsaw', 'Stockholm', 'Copenhagen',
      'Milan', 'Venice', 'Florence', 'Madrid', 'Lisbon', 'Athens', 'Istanbul', 'Cairo',
      'Mumbai', 'Shanghai', 'Beijing', 'Los Angeles', 'Chicago', 'Miami', 'Toronto'
    ]
  },
  {
    id: 'jobs',
    name: 'Jobs & Professions',
    enabled: true,
    words: [
      'Doctor', 'Teacher', 'Engineer', 'Artist', 'Chef', 'Pilot', 'Nurse', 'Police Officer',
      'Firefighter', 'Lawyer', 'Scientist', 'Writer', 'Musician', 'Actor', 'Athlete', 'Farmer',
      'Mechanic', 'Electrician', 'Plumber', 'Architect', 'Designer', 'Photographer', 'Journalist', 
      'Librarian', 'Politician', 'Accountant', 'Carpenter', 'Surgeon', 'Professor', 'Veterinarian', 
      'Dentist', 'Pharmacist', 'Therapist', 'Judge', 'Banker', 'Real Estate Agent', 'Social Worker', 
      'Psychologist', 'Consultant', 'Manager', 'CEO', 'Flight Attendant', 'Security Guard', 
      'Translator', 'Interior Designer', 'Personal Trainer', 'Hairdresser', 'Waiter', 'Bartender',
      'Software Developer', 'Data Analyst', 'Marketing Manager', 'Sales Representative', 'Receptionist',
      'Construction Worker', 'Taxi Driver', 'Bus Driver', 'Delivery Driver', 'Postal Worker',
      'Paramedic', 'Physical Therapist', 'Optometrist', 'Radiologist', 'Anesthesiologist'
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
      'Heineken', 'Lego', 'IKEA', 'H&M', 'Zara', 'Puma', 'Reebok', 'Shell', 'Coca-Cola', 'Philips',
      'Tesla', 'Volkswagen', 'Ford', 'Honda', 'Nissan', 'Ferrari', 'Porsche', 'Lamborghini',
      'Louis Vuitton', 'Gucci', 'Chanel', 'Rolex', 'Omega', 'Calvin Klein', 'Ralph Lauren',
      'Visa', 'Mastercard', 'PayPal', 'eBay', 'Airbnb', 'TikTok', 'LinkedIn', 'WhatsApp'
    ]
  },
  {
    id: 'activities',
    name: 'Activities',
    enabled: true,
    words: [
      'Swimming', 'Running', 'Dancing', 'Singing', 'Reading', 'Writing', 'Cooking', 'Painting',
      'Drawing', 'Playing', 'Sleeping', 'Walking', 'Driving', 'Flying', 'Climbing', 'Jumping',
      'Shopping', 'Traveling', 'Working', 'Studying', 'Exercising', 'Meditating', 'Fishing', 'Camping',
      'Hiking', 'Skiing', 'Snowboarding', 'Surfing', 'Cycling', 'Jogging', 'Yoga', 'Pilates',
      'Bowling', 'Golfing', 'Tennis', 'Basketball', 'Football', 'Baseball', 'Volleyball', 'Badminton',
      'Gardening', 'Knitting', 'Sewing', 'Photography', 'Blogging', 'Gaming', 'Puzzle Solving'
    ]
  },
  {
    id: 'music',
    name: 'Music',
    enabled: true,
    words: [
      'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Trumpet', 'Flute', 'Harp',
      'Rock', 'Pop', 'Jazz', 'Classical', 'Blues', 'Country', 'Hip Hop', 'Electronic',
      'Concert', 'Orchestra', 'Band', 'Singer', 'Composer', 'Album', 'Song', 'Melody',
      'Bass Guitar', 'Keyboard', 'Cello', 'Clarinet', 'Trombone', 'Harmonica', 'Ukulele',
      'Reggae', 'Folk', 'Opera', 'Symphony', 'Choir', 'Solo', 'Duet', 'Trio', 'Quartet',
      'DJ', 'Producer', 'Studio', 'Recording', 'Headphones', 'Microphone', 'Amplifier'
    ]
  },
  {
    id: 'places',
    name: 'Places',
    enabled: true,
    words: [
      'Beach', 'Mountain', 'Forest', 'Desert', 'School', 'Hospital', 'Restaurant', 'Park',
      'Museum', 'Library', 'Airport', 'Train Station', 'Mall', 'Cinema', 'Theater', 'Stadium',
      'Church', 'Hotel', 'Garden', 'Farm', 'Zoo', 'Island', 'Castle', 'Bridge',
      'University', 'Gym', 'Spa', 'Bank', 'Post Office', 'Pharmacy', 'Bakery', 'Bookstore',
      'Gas Station', 'Parking Lot', 'Playground', 'Swimming Pool', 'Tennis Court', 'Golf Course',
      'Aquarium', 'Planetarium', 'Observatory', 'Lighthouse', 'Cave', 'Waterfall', 'Valley'
    ]
  },
  {
    id: 'nature-animals',
    name: 'Nature & Animals',
    enabled: true,
    words: [
      'Dog', 'Cat', 'Horse', 'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra',
      'Monkey', 'Bear', 'Wolf', 'Fox', 'Rabbit', 'Deer', 'Cow', 'Pig',
      'Sheep', 'Goat', 'Duck', 'Chicken', 'Eagle', 'Owl', 'Parrot', 'Penguin',
      'Dolphin', 'Whale', 'Shark', 'Fish', 'Butterfly', 'Bee', 'Spider', 'Snake',
      'Turtle', 'Frog', 'Lizard', 'Crocodile', 'Kangaroo', 'Koala', 'Panda', 'Gorilla',
      'Tree', 'Flower', 'Rose', 'Sunflower', 'Grass', 'Leaf', 'Branch', 'Root',
      'Ocean', 'River', 'Lake', 'Stream', 'Rain', 'Snow', 'Wind', 'Storm',
      'Sun', 'Moon', 'Star', 'Cloud', 'Rainbow', 'Lightning', 'Thunder'
    ]
  },
  {
    id: 'custom-words',
    name: 'Custom Words',
    enabled: false,
    words: [] // This will be populated with user-defined custom words
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
