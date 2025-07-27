export interface Category {
  id: string;
  name: string;
  words: {
    en: string[];
    nl: string[];
  };
  enabled: boolean;
}

export type Language = 'en' | 'nl';

export const DEFAULT_CATEGORIES: Category[] = [
  {
    id: 'famous-persons',
    name: 'Famous Persons',
    enabled: true,
    words: {
      en: [
        'Albert Einstein', 'Leonardo da Vinci', 'Shakespeare', 'Mozart', 'Napoleon', 'Cleopatra',
        'Gandhi', 'Martin Luther King Jr.', 'Nelson Mandela', 'Steve Jobs', 'Bill Gates', 'Elon Musk',
        'Michael Jackson', 'Elvis Presley', 'Marilyn Monroe', 'Tom Hanks', 'Walt Disney', 'Johan Cruijff',
        'Pablo Picasso', 'Vincent van Gogh', 'Marie Curie', 'Charles Darwin', 'Aristotle', 'Socrates',
        'Isaac Newton', 'J.K. Rowling', 'Stephen Hawking','Beyoncé', 'Taylor Swift', 'Winston Churchill',
        'Oprah Winfrey', 'Barack Obama', 'Abraham Lincoln', 'Frida Kahlo', 'Andy Warhol', 'John Lennon',
        'Madonna', 'Michael Jordan', 'Muhammad Ali', 'Serena Williams', 'Lionel Messi', 'Cristiano Ronaldo',
        'Mark Zuckerberg', 'Warren Buffett', 'Nikola Tesla', 'Galileo Galilei', 'Alexander the Great',
        'Julius Caesar', 'Theodore Roosevelt', 'Franklin D. Roosevelt', 'John F. Kennedy', 'Gordon Ramsay',
        'Drake', 'Kanye West', 'Bruno Mars', 'The Rock', 'Arnold Schwarzenegger', 'Will Smith',
        'Lady Gaga', 'Adele', 'Ed Sheeran', 'Justin Bieber', 'Ariana Grande', 'Rihanna', 'Leonardo DiCaprio'
      ],
      nl: [
        'Albert Einstein', 'Leonardo da Vinci', 'Shakespeare', 'Mozart', 'Napoleon', 'Cleopatra',
        'Gandhi', 'Martin Luther King Jr.', 'Nelson Mandela', 'Steve Jobs', 'Bill Gates', 'Elon Musk',
        'Michael Jackson', 'Elvis Presley', 'Marilyn Monroe', 'Tom Hanks', 'Walt Disney', 'Johan Cruijff',
        'Pablo Picasso', 'Vincent van Gogh', 'Marie Curie', 'Charles Darwin', 'Aristoteles', 'Socrates',
        'Isaac Newton', 'J.K. Rowling', 'Stephen Hawking','Beyoncé', 'Taylor Swift', 'Winston Churchill',
        'Oprah Winfrey', 'Barack Obama', 'Abraham Lincoln', 'Frida Kahlo', 'Andy Warhol', 'John Lennon',
        'Madonna', 'Michael Jordan', 'Muhammad Ali', 'Serena Williams', 'Lionel Messi', 'Cristiano Ronaldo',
        'Mark Zuckerberg', 'Warren Buffett', 'Nikola Tesla', 'Galileo Galilei', 'Alexander de Grote',
        'Julius Caesar', 'Theodore Roosevelt', 'Franklin D. Roosevelt', 'John F. Kennedy', 'Gordon Ramsay',
        'Drake', 'Kanye West', 'Bruno Mars', 'The Rock', 'Arnold Schwarzenegger', 'Will Smith',
        'Lady Gaga', 'Adele', 'Ed Sheeran', 'Justin Bieber', 'Ariana Grande', 'Rihanna', 'Leonardo DiCaprio'
      ]
    }
  },
  {
    id: 'food',
    name: 'Food',
    enabled: false,
    words: {
      en: [
        'Pizza', 'Burger', 'Sushi', 'Pasta', 'Sandwich', 'Salad', 'Soup', 'Steak',
        'Chicken', 'Fish', 'Rice', 'Bread', 'Cheese', 'Apple', 'Banana', 'Orange',
        'Coffee', 'Tea', 'Water', 'Juice', 'Wine', 'Beer', 'Cake', 'Ice Cream',
        'Chocolate', 'Cookie', 'Donut', 'Pancake', 'Waffle', 'Pie', 'Taco', 'Burrito',
        'Curry', 'Ramen', 'Croissant', 'Bagel', 'Muffin', 'Smoothie', 'Milkshake', 'Lemonade',
        'Popcorn', 'Pretzel', 'French Fries', 'Onion Rings', 'Hot Dog', 'BBQ', 'Lasagna', 'Risotto',
        'Spaghetti', 'Carbonara', 'Tiramisu', 'Cheesecake', 'Brownie', 'Cupcake', 'Muffin',
        'Yogurt', 'Cereal', 'Oatmeal', 'Toast', 'Jam', 'Honey', 'Butter', 'Milk', 'Hummus', 
        'Egg', 'Bacon', 'Ham', 'Turkey', 'Salmon', 'Tuna', 'Shrimp', 'Lobster', 'Wrap', 
        'Potato', 'Carrot', 'Broccoli', 'Spinach', 'Tomato', 'Cucumber', 'Onion', 'Garlic',
        'Strawberry', 'Blueberry', 'Grape', 'Pineapple', 'Mango', 'Avocado', 'Lemon', 'Lime',
        'Nuts', 'Peanut Butter', 'Crackers', 'Chips', 'Nachos', 'Salsa', 'Guacamole',
        'Noodles', 'Dumplings', 'Spring Roll', 'Fried Rice', 'Kebab', 'Falafel', 'Pita Bread'
      ],
      nl: [
        'Pizza', 'Burger', 'Sushi', 'Pasta', 'Sandwich', 'Salade', 'Soep', 'Biefstuk',
        'Kip', 'Vis', 'Rijst', 'Brood', 'Kaas', 'Appel', 'Banaan', 'Sinaasappel',
        'Koffie', 'Thee', 'Water', 'Sap', 'Wijn', 'Bier', 'Taart', 'IJs',
        'Chocolade', 'Koekje', 'Donut', 'Pannenkoek', 'Wafel', 'Taart', 'Taco', 'Burrito',
        'Curry', 'Ramen', 'Croissant', 'Bagel', 'Muffin', 'Smoothie', 'Milkshake', 'Limonade',
        'Popcorn', 'Pretzel', 'Friet', 'Uienringen', 'Hotdog', 'BBQ', 'Lasagne', 'Risotto',
        'Spaghetti', 'Carbonara', 'Tiramisu', 'Cheesecake', 'Brownie', 'Cupcake', 'Muffin',
        'Yoghurt', 'Ontbijtgranen', 'Havermout', 'Toast', 'Jam', 'Honing', 'Boter', 'Melk', 'Hummus',
        'Ei', 'Spek', 'Ham', 'Kalkoen', 'Zalm', 'Tonijn', 'Garnaal', 'Kreeft', 'Wrap',
        'Aardappel', 'Wortel', 'Broccoli', 'Spinazie', 'Tomaat', 'Komkommer', 'Ui', 'Knoflook',
        'Aardbei', 'Blauwe bes', 'Druif', 'Ananas', 'Mango', 'Avocado', 'Citroen', 'Limoen',
        'Noten', 'Pindakaas', 'Crackers', 'Chips', 'Nacho\'s', 'Salsa', 'Guacamole',
        'Noedels', 'Dumplings', 'Loempia', 'Gebakken rijst', 'Kebab', 'Falafel', 'Pitabrood'
      ]
    }
  },
  {
    id: 'objects',
    name: 'Objects',
    enabled: true,
    words: {
      en: [
        'Chair', 'Table', 'Lamp', 'Book', 'Phone', 'Computer', 'Car', 'Bicycle',
        'Watch', 'Glasses', 'Umbrella', 'Bag', 'Shoes', 'Hat', 'Mirror', 'Camera',
        'Key', 'Pen', 'Paper', 'Clock', 'Window', 'Door', 'Pillow', 'Blanket',
        'Candle', 'Backpack', 'Wallet', 'Headphones', 'Television', 'Radio', 'Microwave',
        'Refrigerator', 'Toaster', 'Blender', 'Vacuum', 'Washing Machine', 'Dryer', 'Iron',
        'Scissors', 'Hammer', 'Screwdriver', 'Ladder', 'Toolbox', 'Flashlight', 'Battery',
        'Charger', 'Remote Control', 'Gaming Console', 'Keyboard', 'Mouse', 'Monitor',
        'Sofa', 'Bed', 'Desk', 'Shelf', 'Cabinet', 'Drawer', 'Curtain', 'Carpet',
        'Vase', 'Picture Frame', 'Painting', 'Poster', 'Calendar', 'Notebook', 'Pencil',
        'Eraser', 'Ruler', 'Stapler', 'Tape', 'Glue', 'Marker', 'Highlighter',
        'Plate', 'Bowl', 'Cup', 'Glass', 'Fork', 'Knife', 'Spoon', 'Napkin',
        'Towel', 'Soap', 'Shampoo', 'Toothbrush', 'Toothpaste', 'Comb', 'Brush',
        'Sunglasses', 'Scarf', 'Gloves', 'Belt', 'Tie', 'Jacket', 'Sweater', 'T-shirt',
        'Jeans', 'Socks', 'Sneakers', 'Boots', 'Sandals', 'Slippers', 'Pajamas'
      ],
      nl: [
        'Stoel', 'Tafel', 'Lamp', 'Boek', 'Telefoon', 'Computer', 'Auto', 'Fiets',
        'Horloge', 'Bril', 'Paraplu', 'Tas', 'Schoenen', 'Hoed', 'Spiegel', 'Camera',
        'Sleutel', 'Pen', 'Papier', 'Klok', 'Raam', 'Deur', 'Kussen', 'Deken',
        'Kaars', 'Rugzak', 'Portemonnee', 'Koptelefoon', 'Televisie', 'Radio', 'Magnetron',
        'Koelkast', 'Broodrooster', 'Blender', 'Stofzuiger', 'Wasmachine', 'Droger', 'Strijkijzer',
        'Schaar', 'Hamer', 'Schroevendraaier', 'Ladder', 'Gereedschapskist', 'Zaklamp', 'Batterij',
        'Oplader', 'Afstandsbediening', 'Spelcomputer', 'Toetsenbord', 'Muis', 'Monitor',
        'Bank', 'Bed', 'Bureau', 'Plank', 'Kast', 'Lade', 'Gordijn', 'Tapijt',
        'Vaas', 'Fotolijst', 'Schilderij', 'Poster', 'Kalender', 'Notitieboek', 'Potlood',
        'Gum', 'Liniaal', 'Nietmachine', 'Tape', 'Lijm', 'Marker', 'Markeerstift',
        'Bord', 'Kom', 'Beker', 'Glas', 'Vork', 'Mes', 'Lepel', 'Servet',
        'Handdoek', 'Zeep', 'Shampoo', 'Tandenborstel', 'Tandpasta', 'Kam', 'Borstel',
        'Zonnebril', 'Sjaal', 'Handschoenen', 'Riem', 'Stropdas', 'Jas', 'Trui', 'T-shirt',
        'Spijkerbroek', 'Sokken', 'Sneakers', 'Laarzen', 'Sandalen', 'Pantoffels', 'Pyjama'
      ]
    }
  },
  {
    id: 'countries-cities',
    name: 'Countries & Cities',
    enabled: true,
    words: {
      en: [
        'Paris', 'London', 'New York', 'Tokyo', 'Rome', 'Berlin', 'Moscow', 'Sydney',
        'France', 'Germany', 'Japan', 'Italy', 'Spain', 'Brazil', 'Canada', 'Australia',
        'China', 'India', 'Russia', 'Mexico', 'Egypt', 'Greece', 'Norway', 'Thailand', 
        'Amsterdam', 'Dubai', 'Las Vegas', 'Barcelona', 'Egypt', 'Switzerland', 'Sweden',
        'Denmark', 'Finland', 'Portugal', 'Ireland', 'Turkey', 'South Korea', 'Singapore',
        'Hong Kong', 'Vienna', 'Prague', 'Budapest', 'Warsaw', 'Stockholm', 'Copenhagen',
        'Milan', 'Venice', 'Florence', 'Madrid', 'Lisbon', 'Athens', 'Istanbul', 'Cairo',
        'Mumbai', 'Shanghai', 'Beijing', 'Los Angeles', 'Chicago', 'Miami', 'Toronto'
      ],
      nl: [
        'Parijs', 'Londen', 'New York', 'Tokio', 'Rome', 'Berlijn', 'Moskou', 'Sydney',
        'Frankrijk', 'Duitsland', 'Japan', 'Italië', 'Spanje', 'Brazilië', 'Canada', 'Australië',
        'China', 'India', 'Rusland', 'Mexico', 'Egypte', 'Griekenland', 'Noorwegen', 'Thailand',
        'Amsterdam', 'Dubai', 'Las Vegas', 'Barcelona', 'Egypte', 'Zwitserland', 'Zweden',
        'Denemarken', 'Finland', 'Portugal', 'Ierland', 'Turkije', 'Zuid-Korea', 'Singapore',
        'Hong Kong', 'Wenen', 'Praag', 'Boedapest', 'Warschau', 'Stockholm', 'Kopenhagen',
        'Milaan', 'Venetië', 'Florence', 'Madrid', 'Lissabon', 'Athene', 'Istanbul', 'Caïro',
        'Mumbai', 'Shanghai', 'Beijing', 'Los Angeles', 'Chicago', 'Miami', 'Toronto'
      ]
    }
  },
  {
    id: 'jobs',
    name: 'Jobs & Professions',
    enabled: true,
    words: {
      en: [
        'Doctor', 'Teacher', 'Engineer', 'Artist', 'Chef', 'Pilot', 'Nurse', 'Police Officer',
        'Firefighter', 'Lawyer', 'Scientist', 'Writer', 'Musician', 'Actor', 'Athlete', 'Farmer',
        'Mechanic', 'Electrician', 'Plumber', 'Architect', 'Designer', 'Photographer', 'Journalist', 
        'Librarian', 'Politician', 'Accountant', 'Carpenter', 'Surgeon', 'Professor', 'Veterinarian', 
        'Dentist', 'Pharmacist', 'Therapist', 'Judge', 'Banker', 'Real Estate Agent', 'Social Worker', 
        'Psychologist', 'Consultant', 'Manager', 'CEO', 'Flight Attendant', 'Security Guard', 
        'Translator', 'Interior Designer', 'Personal Trainer', 'Hairdresser', 'Waiter', 'Bartender',
        'Software Developer', 'Data Analyst', 'Marketing Manager', 'Sales Representative', 'Receptionist',
        'Construction Worker', 'Taxi Driver', 'Bus Driver', 'Delivery Driver', 'Postal Worker',
        'Paramedic', 'Physical Therapist', 'Radiologist', 'Anesthesiologist'
      ],
      nl: [
        'Dokter', 'Leraar', 'Ingenieur', 'Kunstenaar', 'Kok', 'Piloot', 'Verpleegkundige', 'Politieagent',
        'Brandweerman', 'Advocaat', 'Wetenschapper', 'Schrijver', 'Musicus', 'Acteur', 'Atleet', 'Boer',
        'Monteur', 'Elektricien', 'Loodgieter', 'Architect', 'Ontwerper', 'Fotograaf', 'Journalist',
        'Bibliothecaris', 'Politicus', 'Accountant', 'Timmerman', 'Chirurg', 'Professor', 'Dierenarts',
        'Tandarts', 'Apotheker', 'Therapeut', 'Rechter', 'Bankier', 'Makelaar', 'Maatschappelijk werker',
        'Psycholoog', 'Adviseur', 'Manager', 'CEO', 'Stewardess', 'Beveiliger',
        'Vertaler', 'Interieurontwerper', 'Personal trainer', 'Kapper', 'Ober', 'Barkeeper',
        'Software ontwikkelaar', 'Data analist', 'Marketing manager', 'Vertegenwoordiger', 'Receptionist',
        'Bouwvakker', 'Taxichauffeur', 'Buschauffeur', 'Bezorger', 'Postbode',
        'Ambulanceverpleegkundige', 'Fysiotherapeut', 'Radioloog', 'Anesthesist'
      ]
    }
  },
  {
    id: 'brands',
    name: 'Brands',
    enabled: true,
    words: {
      en: [
        'Apple', 'Google', 'Microsoft', 'Amazon', 'Nike', 'Adidas', 'Coca-Cola', 'Pepsi',
        'McDonald\'s', 'KFC', 'Starbucks', 'Samsung', 'Sony', 'BMW', 'Mercedes', 'Toyota',
        'Disney', 'Netflix', 'Facebook', 'Twitter', 'Instagram', 'YouTube', 'Spotify', 'Uber',
        'Heineken', 'Lego', 'IKEA', 'H&M', 'Zara', 'Puma', 'Reebok', 'Shell', 'Coca-Cola', 'Philips',
        'Tesla', 'Volkswagen', 'Ford', 'Honda', 'Nissan', 'Ferrari', 'Porsche', 'Lamborghini',
        'Louis Vuitton', 'Gucci', 'Chanel', 'Rolex', 'Omega', 'Calvin Klein', 'Ralph Lauren',
        'Visa', 'Mastercard', 'PayPal', 'eBay', 'Airbnb', 'TikTok', 'LinkedIn', 'WhatsApp',
        'Burger King', 'New York Pizza', 'New Balance', 'Audi', 'Red Bull', 'Tommy Hilfiger'
      ],
      nl: [
        'Apple', 'Google', 'Microsoft', 'Amazon', 'Nike', 'Adidas', 'Coca-Cola', 'Pepsi',
        'McDonald\'s', 'KFC', 'Starbucks', 'Samsung', 'Sony', 'BMW', 'Mercedes', 'Toyota',
        'Disney', 'Netflix', 'Facebook', 'Twitter', 'Instagram', 'YouTube', 'Spotify', 'Uber',
        'Heineken', 'Lego', 'IKEA', 'H&M', 'Zara', 'Puma', 'Reebok', 'Shell', 'Coca-Cola', 'Philips',
        'Tesla', 'Volkswagen', 'Ford', 'Honda', 'Nissan', 'Ferrari', 'Porsche', 'Lamborghini',
        'Louis Vuitton', 'Gucci', 'Chanel', 'Rolex', 'Omega', 'Calvin Klein', 'Ralph Lauren',
        'Visa', 'Mastercard', 'PayPal', 'eBay', 'Airbnb', 'TikTok', 'LinkedIn', 'WhatsApp',
        'Burger King', 'New York Pizza', 'New Balance', 'Audi', 'Red Bull', 'Tommy Hilfiger'
      ]
    }
  },
  {
    id: 'activities',
    name: 'Activities',
    enabled: true,
    words: {
      en: [
        'Swimming', 'Running', 'Dancing', 'Singing', 'Reading', 'Writing', 'Cooking', 'Painting',
        'Drawing', 'Playing', 'Sleeping', 'Walking', 'Driving', 'Flying', 'Climbing', 'Jumping',
        'Shopping', 'Traveling', 'Working', 'Studying', 'Exercising', 'Meditating', 'Fishing', 'Camping',
        'Hiking', 'Skiing', 'Snowboarding', 'Surfing', 'Cycling', 'Jogging', 'Yoga', 'Pilates',
        'Bowling', 'Golfing', 'Tennis', 'Basketball', 'Football', 'Baseball', 'Volleyball', 'Badminton',
        'Gardening', 'Knitting', 'Sewing', 'Photography', 'Blogging', 'Gaming', 'Puzzle Solving'
      ],
      nl: [
        'Zwemmen', 'Rennen', 'Dansen', 'Zingen', 'Lezen', 'Schrijven', 'Koken', 'Schilderen',
        'Tekenen', 'Spelen', 'Slapen', 'Wandelen', 'Rijden', 'Vliegen', 'Klimmen', 'Springen',
        'Winkelen', 'Reizen', 'Werken', 'Studeren', 'Sporten', 'Mediteren', 'Vissen', 'Kamperen',
        'Wandelen', 'Skiën', 'Snowboarden', 'Surfen', 'Fietsen', 'Joggen', 'Yoga', 'Pilates',
        'Bowlen', 'Golfen', 'Tennis', 'Basketbal', 'Voetbal', 'Honkbal', 'Volleybal', 'Badminton',
        'Tuinieren', 'Breien', 'Naaien', 'Fotograferen', 'Bloggen', 'Gamen', 'Puzzelen'
      ]
    }
  },
  {
    id: 'music',
    name: 'Music',
    enabled: true,
    words: {
      en: [
        'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Trumpet', 'Flute', 'Harp',
        'Rock', 'Pop', 'Jazz', 'Classical', 'Blues', 'Country', 'Hip Hop', 'Electronic',
        'Concert', 'Orchestra', 'Band', 'Singer', 'Composer', 'Album', 'Song', 'Melody',
        'Bass Guitar', 'Keyboard', 'Cello', 'Clarinet', 'Trombone', 'Harmonica', 'Ukulele',
        'Reggae', 'Folk', 'Opera', 'Symphony', 'Choir', 'Solo', 'Duet', 'Trio', 'Quartet',
        'DJ', 'Producer', 'Studio', 'Recording', 'Headphones', 'Microphone', 'Amplifier',
        'Metal', 'Punk', 'Indie', 'Alternative', 'Grunge', 'Ska', 'Swing', 'Gospel'
      ],
      nl: [
        'Piano', 'Gitaar', 'Viool', 'Drums', 'Saxofoon', 'Trompet', 'Fluit', 'Harp',
        'Rock', 'Pop', 'Jazz', 'Klassiek', 'Blues', 'Country', 'Hip Hop', 'Elektronisch',
        'Concert', 'Orkest', 'Band', 'Zanger', 'Componist', 'Album', 'Lied', 'Melodie',
        'Basgitaar', 'Keyboard', 'Cello', 'Klarinet', 'Trombone', 'Mondharmonica', 'Ukulele',
        'Reggae', 'Folk', 'Opera', 'Symfonie', 'Koor', 'Solo', 'Duet', 'Trio', 'Kwartet',
        'DJ', 'Producer', 'Studio', 'Opname', 'Koptelefoon', 'Microfoon', 'Versterker',
        'Metal', 'Punk', 'Indie', 'Alternative', 'Grunge', 'Ska', 'Swing', 'Gospel'
      ]
    }
  },
  {
    id: 'places',
    name: 'Places',
    enabled: true,
    words: {
      en: [
        'Beach', 'Mountain', 'Forest', 'Desert', 'School', 'Hospital', 'Restaurant', 'Park',
        'Museum', 'Library', 'Airport', 'Train Station', 'Mall', 'Cinema', 'Theater', 'Stadium',
        'Church', 'Hotel', 'Garden', 'Farm', 'Zoo', 'Island', 'Castle', 'Bridge',
        'University', 'Gym', 'Spa', 'Bank', 'Post Office', 'Pharmacy', 'Bakery', 'Bookstore',
        'Gas Station', 'Parking Lot', 'Playground', 'Swimming Pool', 'Tennis Court', 'Golf Course',
        'Aquarium', 'Planetarium', 'Observatory', 'Lighthouse', 'Cave', 'Waterfall', 'Valley',
        'Coffee Shop', 'Café', 'Bar', 'Pub', 'Nightclub', 'Lounge', 'Diner', 'Food Court',
        'Supermarket', 'Grocery Store', 'Convenience Store', 'Department Store', 'Boutique',
        'Salon', 'Barbershop', 'Laundromat', 'Dry Cleaner', 'Tailor', 'Shoe Store',
        'Flower Shop', 'Pet Store', 'Toy Store', 'Electronics Store', 'Furniture Store',
        'Office Building', 'Factory', 'Warehouse', 'Workshop', 'Studio', 'Laboratory',
        'Clinic', 'Dentist Office', 'Fire Station', 'Police Station',
        'City Hall', 'Court House', 'Embassy', 'Temple', 'Mosque', 'Synagogue',
        'Beach House', 'Cabin', 'Cottage', 'Mansion', 'Apartment', 'Condo', 'Penthouse'
      ],
      nl: [
        'Strand', 'Berg', 'Bos', 'Woestijn', 'School', 'Ziekenhuis', 'Restaurant', 'Park',
        'Museum', 'Bibliotheek', 'Vliegveld', 'Treinstation', 'Winkelcentrum', 'Bioscoop', 'Theater', 'Stadion',
        'Kerk', 'Hotel', 'Tuin', 'Boerderij', 'Dierentuin', 'Eiland', 'Kasteel', 'Brug',
        'Universiteit', 'Sportschool', 'Spa', 'Bank', 'Postkantoor', 'Apotheek', 'Bakkerij', 'Boekwinkel',
        'Tankstation', 'Parkeerplaats', 'Speeltuin', 'Zwembad', 'Tennisbaan', 'Golfbaan',
        'Aquarium', 'Planetarium', 'Sterrenwacht', 'Vuurtoren', 'Grot', 'Waterval', 'Dal',
        'Koffiebar', 'Café', 'Bar', 'Kroeg', 'Nachtclub', 'Lounge', 'Diner', 'Foodcourt',
        'Supermarkt', 'Kruidenier', 'Buurtwinkel', 'Warenhuis', 'Boetiek',
        'Salon', 'Kapper', 'Wasserette', 'Stomerij', 'Kleermaker', 'Schoenwinkel',
        'Bloemenwinkel', 'Dierenwinkel', 'Speelgoedwinkel', 'Elektronicawinkel', 'Meubelwinkel',
        'Kantoorgebouw', 'Fabriek', 'Magazijn', 'Werkplaats', 'Studio', 'Laboratorium',
        'Kliniek', 'Tandartspraktijk', 'Brandweerkazerne', 'Politiebureau',
        'Stadhuis', 'Rechtbank', 'Ambassade', 'Tempel', 'Moskee', 'Synagoge',
        'Strandhuis', 'Hut', 'Cottage', 'Villa', 'Appartement', 'Flat', 'Penthouse'
      ]
    }
  },
  {
    id: 'nature-animals',
    name: 'Nature & Animals',
    enabled: true,
    words: {
      en: [
        'Dog', 'Cat', 'Horse', 'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra',
        'Monkey', 'Bear', 'Wolf', 'Fox', 'Rabbit', 'Deer', 'Cow', 'Pig',
        'Sheep', 'Goat', 'Duck', 'Chicken', 'Eagle', 'Owl', 'Parrot', 'Penguin',
        'Dolphin', 'Whale', 'Shark', 'Fish', 'Butterfly', 'Bee', 'Spider', 'Snake',
        'Turtle', 'Frog', 'Lizard', 'Crocodile', 'Kangaroo', 'Koala', 'Panda', 'Gorilla',
        'Tree', 'Flower', 'Rose', 'Sunflower', 'Grass', 'Leaf', 'Branch', 'Root',
        'Ocean', 'River', 'Lake', 'Stream', 'Rain', 'Snow', 'Wind', 'Storm',
        'Sun', 'Moon', 'Star', 'Cloud', 'Rainbow', 'Lightning', 'Thunder',
        'Hamster', 'Guinea Pig', 'Goldfish', 'Parakeet', 'Canary', 'Tropical Fish',
        'Seal', 'Sea Lion', 'Walrus', 'Polar Bear', 'Brown Bear', 'Black Bear'
      ],
      nl: [
        'Hond', 'Kat', 'Paard', 'Leeuw', 'Tijger', 'Olifant', 'Giraffe', 'Zebra',
        'Aap', 'Beer', 'Wolf', 'Vos', 'Konijn', 'Hert', 'Koe', 'Varken',
        'Schaap', 'Geit', 'Eend', 'Kip', 'Adelaar', 'Uil', 'Papegaai', 'Pinguïn',
        'Dolfijn', 'Walvis', 'Haai', 'Vis', 'Vlinder', 'Bij', 'Spin', 'Slang',
        'Schildpad', 'Kikker', 'Hagedis', 'Krokodil', 'Kangoeroe', 'Koala', 'Panda', 'Gorilla',
        'Boom', 'Bloem', 'Roos', 'Zonnebloem', 'Gras', 'Blad', 'Tak', 'Wortel',
        'Oceaan', 'Rivier', 'Meer', 'Beek', 'Regen', 'Sneeuw', 'Wind', 'Storm',
        'Zon', 'Maan', 'Ster', 'Wolk', 'Regenboog', 'Bliksem', 'Donder',
        'Hamster', 'Cavia', 'Goudvis', 'Parkiet', 'Kanarie', 'Tropische vis',
        'Zeehond', 'Zeeleeuw', 'Walrus', 'IJsbeer', 'Bruine beer', 'Zwarte beer'
      ]
    }
  },
  {
    id: 'custom-words',
    name: 'Custom Words',
    enabled: false,
    words: {
      en: [],
      nl: []
    }
  }
];

export function getRandomWordFromCategories(categories: Category[], language: 'en' | 'nl' = 'en'): string | null {
  const enabledCategories = categories.filter(cat => cat.enabled);
  
  if (enabledCategories.length === 0) {
    return null;
  }
  
  // Get all words from enabled categories in the specified language
  const allWords = enabledCategories.flatMap(cat => cat.words[language]);
  
  if (allWords.length === 0) {
    return null;
  }
  
  // Return random word
  const randomIndex = Math.floor(Math.random() * allWords.length);
  return allWords[randomIndex];

}