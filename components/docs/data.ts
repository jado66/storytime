export interface AnimalOption {
    readonly value: string;
    readonly label: string;
    readonly animal: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
  export const animalOptions: readonly AnimalOption[] = [
    { value: "Squirrel", label: "Squirrel", animal: "#00B8D9" },
    { value: "Bear", label: "Bear", animal: "#00B8D9" },
    { value: "Chipmunk", label: "Chipmunk", animal: "#00B8D9" },
    { value: "Blue Whale", label: "Blue Whale", animal: "#00B8D9" },
    { value: "Porcupine", label: "Porcupine", animal: "#00B8D9" },
    { value: "Lion", label: "Lion", animal: "#00B8D9" },
    { value: "Hedgehog", label: "Hedgehog", animal: "#00B8D9" },
    { value: "Coyote", label: "Coyote", animal: "#00B8D9" },
    { value: "Possum", label: "Possum", animal: "#00B8D9" },
    { value: "Dolphin", label: "Dolphin", animal: "#00B8D9" },
    { value: "Meerkat", label: "Meerkat", animal: "#00B8D9" },
    { value: "Crocodile", label: "Crocodile", animal: "#00B8D9" },
    { value: "Otter", label: "Otter", animal: "#00B8D9" },
    { value: "Raccoon", label: "Raccoon", animal: "#00B8D9" },
    { value: "Hyena", label: "Hyena", animal: "#00B8D9" },
    { value: "Fox", label: "Fox", animal: "#00B8D9" },
    { value: "Monkey", label: "Monkey", animal: "#00B8D9" },
    { value: "Panda", label: "Panda", animal: "#00B8D9" },
    { value: "Deer", label: "Deer", animal: "#00B8D9" },
    { value: "Black Leopard", label: "Black Leopard", animal: "#00B8D9" },
    { value: "Wombat", label: "Wombat", animal: "#00B8D9" },
    { value: "Kangaroo", label: "Kangaroo", animal: "#00B8D9" },
    { value: "Tiger", label: "Tiger", animal: "#00B8D9" },
    { value: "Cheetah", label: "Cheetah", animal: "#00B8D9" },
    { value: "Zebra", label: "Zebra", animal: "#00B8D9" },
    { value: "Giraffe", label: "Giraffe", animal: "#00B8D9" },
    { value: "Jaguar", label: "Jaguar", animal: "#00B8D9" },
    { value: "Hippopotamus", label: "Hippopotamus", animal: "#00B8D9" },
    { value: "Wolf", label: "Wolf", animal: "#00B8D9" },
    { value: "Elephant", label: "Elephant", animal: "#00B8D9" },
    { value: "Chimpanzee", label: "Chimpanzee", animal: "#00B8D9" },
    { value: "Gorilla", label: "Gorilla", animal: "#00B8D9" },
    { value: "Snake", label: "Snake", animal: "#00B8D9" },
    { value: "Eagle", label: "Eagle", animal: "#00B8D9" },
    { value: "Vulture", label: "Vulture", animal: "#00B8D9" },
    { value: "Elk", label: "Elk", animal: "#00B8D9" },
    { value: "Antelope", label: "Antelope", animal: "#00B8D9" },
    { value: "Camel", label: "Camel", animal: "#00B8D9" },
    { value: "Owl", label: "Owl", animal: "#00B8D9" },
    { value: "Ox", label: "Ox", animal: "#00B8D9" },
    { value: "Alligator", label: "Alligator", animal: "#00B8D9" },
    { value: "Panther", label: "Panther", animal: "#00B8D9" },
    { value: "Parrot", label: "Parrot", animal: "#00B8D9" },
    { value: "Flamingo", label: "Flamingo", animal: "#00B8D9" },
    { value: "Warthog", label: "Warthog", animal: "#00B8D9" },
    { value: "Rhinoceros", label: "Rhinoceros", animal: "#00B8D9" },
    { value: "Beaver", label: "Beaver", animal: "#00B8D9" },
    { value: "Woodpecker", label: "Woodpecker", animal: "#00B8D9" },
    { value: "Walrus", label: "Walrus", animal: "#00B8D9" },
    { value: "Toad", label: "Toad", animal: "#00B8D9" },
    { value: "Starfish", label: "Starfish", animal: "#00B8D9" },
    { value: "Shark", label: "Shark", animal: "#00B8D9" },
    { value: "Whale Shark", label: "Whale Shark", animal: "#00B8D9" },
    { value: "Hammerhead Shark", label: "Hammerhead Shark", animal: "#00B8D9" },
    { value: "Great White Shark", label: "Great White Shark", animal: "#00B8D9" },
    { value: "Reindeer", label: "Reindeer", animal: "#00B8D9" },
    { value: "Rat", label: "Rat", animal: "#00B8D9" },
    { value: "Rabbit", label: "Rabbit", animal: "#00B8D9" },
    { value: "Mole", label: "Mole", animal: "#00B8D9" },
    { value: "Lizard", label: "Lizard", animal: "#00B8D9" },
    { value: "Leopard", label: "Leopard", animal: "#00B8D9" },
    { value: "Koala", label: "Koala", animal: "#00B8D9" },
    { value: "Jellyfish", label: "Jellyfish", animal: "#00B8D9" },
    { value: "Bunny", label: "Bunny", animal: "#00B8D9" },
    { value: "Hare", label: "Hare", animal: "#00B8D9" },
    { value: "Frog", label: "Frog", animal: "#00B8D9" },
    { value: "Crab", label: "Crab", animal: "#00B8D9" },
    { value: "Bat", label: "Bat", animal: "#00B8D9" },
    { value: "Bald eagle", label: "Bald eagle", animal: "#00B8D9" },
    { value: "Badger", label: "Badger", animal: "#00B8D9" },
    { value: "Wallaby", label: "Wallaby", animal: "#00B8D9" },
    { value: "Vole", label: "Vole", animal: "#00B8D9" },
    { value: "Turtle", label: "Turtle", animal: "#00B8D9" },
    { value: "Tree frog", label: "Tree frog", animal: "#00B8D9" },
    { value: "Toucan", label: "Toucan", animal: "#00B8D9" },
    { value: "Tarantula", label: "Tarantula", animal: "#00B8D9" },
    { value: "Spider Monkey", label: "Spider Monkey", animal: "#00B8D9" },
    { value: "Sparrow", label: "Sparrow", animal: "#00B8D9" },
    { value: "Skunk", label: "Skunk", animal: "#00B8D9" },
    { value: "Scorpion", label: "Scorpion", animal: "#00B8D9" },
    { value: "Salamander", label: "Salamander", animal: "#00B8D9" },
    { value: "Piranha", label: "Piranha", animal: "#00B8D9" },
    { value: "Parakeet", label: "Parakeet", animal: "#00B8D9" },
    { value: "Orangutan", label: "Orangutan", animal: "#00B8D9" },
    { value: "Moth", label: "Moth", animal: "#00B8D9" },
    { value: "Moose", label: "Moose", animal: "#00B8D9" },
    { value: "Lemur", label: "Lemur", animal: "#00B8D9" },
    { value: "Blue Jay", label: "Blue Jay", animal: "#00B8D9" },
    { value: "Iguana", label: "Iguana", animal: "#00B8D9" },
    { value: "Hummingbird", label: "Hummingbird", animal: "#00B8D9" },
    { value: "Hawk", label: "Hawk", animal: "#00B8D9" },
    { value: "Flying Squirrel", label: "Flying Squirrel", animal: "#00B8D9" },
    { value: "Electric Eel", label: "Electric Eel", animal: "#00B8D9" },
    { value: "Chameleon", label: "Chameleon", animal: "#00B8D9" },
    { value: "Catfish", label: "Catfish", animal: "#00B8D9" },
    { value: "Capybara", label: "Capybara", animal: "#00B8D9" },
    { value: "Caiman", label: "Caiman", animal: "#00B8D9" },
    { value: "Butterfly", label: "Butterfly", animal: "#00B8D9" },
    { value: "Bull Shark", label: "Bull Shark", animal: "#00B8D9" },
    { value: "Bobcat", label: "Bobcat", animal: "#00B8D9" },
    { value: "Baboon", label: "Baboon", animal: "#00B8D9" },
    { value: "Bison", label: "Bison", animal: "#00B8D9" },
    { value: "Red panda", label: "Red panda", animal: "#00B8D9" },
    { value: "Yak", label: "Yak", animal: "#00B8D9" },
    { value: "Worm", label: "Worm", animal: "#00B8D9" },
    { value: "Viper", label: "Viper", animal: "#00B8D9" },
    { value: "Snow Leopard", label: "Snow Leopard", animal: "#00B8D9" },
    { value: "Raven", label: "Raven", animal: "#00B8D9" },
    { value: "Newt", label: "Newt", animal: "#00B8D9" },
    { value: "Guinea Pig", label: "Guinea Pig", animal: "#00B8D9" },
    { value: "Falcon", label: "Falcon", animal: "#00B8D9" },
    { value: "Crow", label: "Crow", animal: "#00B8D9" },
    { value: "Cougar", label: "Cougar", animal: "#00B8D9" },
    { value: "Chinchilla", label: "Chinchilla", animal: "#00B8D9" },
    { value: "Caribou", label: "Caribou", animal: "#00B8D9" },
    { value: "Brown Bear", label: "Brown Bear", animal: "#00B8D9" },
    { value: "Boa constrictor", label: "Boa Constrictor", animal: "#00B8D9" },
    { value: "Bird", label: "Bird", animal: "#00B8D9" },
    { value: "Beetle", label: "Beetle", animal: "#00B8D9" },
    { value: "Bee", label: "Bee", animal: "#00B8D9" },
    { value: "Black Bear", label: "Black Bear", animal: "#00B8D9" },
    { value: "Grizzly Bear", label: "Grizzly Bear", animal: "#00B8D9" },
    { value: "Mountain Lion", label: "Mountain Lion", animal: "#00B8D9" },
    { value: "Alpaca", label: "Alpaca", animal: "#00B8D9" },
    { value: "Buffalo", label: "Buffalo", animal: "#00B8D9" }
  ].sort((a, b) => (a.value > b.value ? 1 : -1));
  
  export interface PeopleOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const peopleOptions: readonly PeopleOption[] = [
    { value: "Brother", label: "Brother" },
    { value: "Sister", label: "Sister" },
    { value: "Dad", label: "Dad" },
    { value: "Mom", label: "Mom" },
    { value: "artist", label: "artist" },
    { value: "astronaut", label: "astronaut" },
    { value: "chef", label: "chef" },
    { value: "construction worker", label: "construction worker" },
    { value: "firefighter", label: "firefighter" },
    { value: "doctor", label: "doctor" },
    { value: "police", label: "police" },
    { value: "teacher", label: "teacher" },
    { value: "veterinarian", label: "veterinarian" },
    { value: "actress", label: "actress" },
    { value: "actor", label: "actor" },
    { value: "architect", label: "architect" },
    { value: "singer", label: "singer" },
    { value: "dentist", label: "dentist" },
    { value: "detective", label: "detective" },
    { value: "writer", label: "writer" },
    { value: "farmer", label: "farmer" },
    { value: "nurse", label: "nurse" },
    { value: "pilot", label: "pilot" },
    { value: "engineer", label: "engineer" },
    { value: "accountant", label: "accountant" },
    { value: "butcher", label: "butcher" },
    { value: "cashier", label: "cashier" },
    { value: "barber", label: "barber" },
    { value: "carpenter", label: "carpenter" },
    { value: "lifeguard", label: "lifeguard" },
    { value: "baker", label: "baker" },
    { value: "electrician", label: "electrician" },
    { value: "flight attendant", label: "flight attendant" },
    { value: "plumber", label: "plumber" },
    { value: "receptionist", label: "receptionist" },
    { value: "scientist", label: "scientist" },
    { value: "lawyer", label: "lawyer" },
    { value: "bus driver", label: "bus driver" },
    { value: "journalist", label: "journalist" },
    { value: "photographer", label: "photographer" },
    { value: "musician", label: "musician" },
    { value: "painter", label: "painter" },
    { value: "florist", label: "florist" },
    { value: "sales assistant", label: "sales assistant" },
    { value: "mechanic", label: "mechanic" },
    { value: "shop assistant", label: "shop assistant" },
    { value: "politician", label: "politician" },
    { value: "hairdresser", label: "hairdresser" },
    { value: "taxi driver", label: "taxi driver" },
    { value: "pharmacist", label: "pharmacist" },
    { value: "nanny", label: "nanny" },
    { value: "travel agent", label: "travel agent" },
    { value: "biologist", label: "biologist" },
    { value: "businesswoman", label: "businesswoman" },
    { value: "businessman", label: "businessman" },
    { value: "dancer", label: "dancer" },
    { value: "gardener", label: "gardener" },
    { value: "meteorologist", label: "meteorologist" },
    { value: "programmer", label: "programmer" },
    { value: "travel guide", label: "travel guide" },
    { value: "saleswoman", label: "saleswoman" },
    { value: "salesman", label: "salesman" }
  ];
  
  export interface StateOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const stateOptions: readonly StateOption[] = [
    {
      value: "laughing at your own mistakes",
      label: "laughing at your own mistakes"
    },
    { value: "friendship", label: "friendship" },
    { value: "family", label: "family" },
    { value: "moving away", label: "moving away" },
    {
      value: "how you can't always get what you want",
      label: "how you can't always get what you want"
    },
    {
      value: "how everyone is has something special about them",
      label: "how everyone is has something special about them"
    },
    { value: "patience", label: "patience" },
    { value: "how life isn't fair", label: "how life isn't fair" },
    { value: "getting out of your comfort zone", label: "getting out of your comfort zone" },
    { value: "how It's Not All About You", label: "It's Not All About You" },
    { value: "how money Will Never Solve Your Real Problems",label: "Money Will Never Solve Your Real Problems"},
    { value: "how You Can't Please Everyone", label:"How You Can't Please Everyone"},
    { value: "everyone has bad days", label: "everyone has bad days" }
  ];
  
  export const optionLength = [
    { value: 1, label: "general" },
    {
      value: 2,
      label:
        "Evil is the moment when I lack the strength to be true to the Good that compels me."
    },
    {
      value: 3,
      label:
        "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you."
    }
  ];
  
  export const dogOptions = [
    { id: 1, label: "Chihuahua" },
    { id: 2, label: "Bulldog" },
    { id: 3, label: "Dachshund" },
    { id: 4, label: "Akita" }
  ];
  
  // let bigOptions = [];
  // for (let i = 0; i < 10000; i++) {
  // 	bigOptions = bigOptions.concat(colourOptions);
  // }
  
  export interface GroupedOption {
    readonly label: string;
    readonly options: readonly AnimalOption[] | readonly PeopleOption[];
  }
  
  export const groupedOptions: readonly GroupedOption[] = [
    {
      label: "Animals",
      options: animalOptions
    },
    {
      label: "People",
      options: peopleOptions
    }
  ];
  