const farmAnimals = 'cow horse sheep pig chicken';
// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const animals = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};
//String: uses destructuring to declare five animal sounds
const { moo, neigh, baa, oink, cluck } = animals;

const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};
//String: uses destructuring to declare the four traditional animal names
const { bessie, dolly, babe, little } = animalNames;

const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};
//String: uses destructuring to declare the three traditional animal colors
const { blackAndWhite, black, pink } = animalColors;


const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//Array: uses destructuring to declare the seven traditional rainbow color variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Array: uses destructuring to declare six rainbow color variables using initials
const [r, o, y, g, b, ,v,] = rainbowColors;

//Array: uses destructuring to declare Indigo using indg
const [, , , , , indg] = rainbowColors;

//Object: uses destructuring to assign all appropriate variables using the keys as the variable names
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName,color,song,job,partner}= muppet

//Object: uses destructuring to assign songs 2 and 4, and Kermit's job and partner
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Destructure the second and fourth songs from the songs array
// Define the album object with the array of songs from The Muppet Movie
const {
  album:{
  theMuppetMovie: {song2,song4}
},
nestedJob,
nestedPartner
} = nestedMuppet;

// Destructure Kermit's job and partner from the nested object







// 1. Use destructuring to assign appropriate variables based on the sounds animals make.


// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner