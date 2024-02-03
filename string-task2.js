function countLetter(inputString) {
  count = 0;
  for (i = 0; i < inputString.length; i++) {
    if (inputString[i].toLowerCase() == "a" && "A") {
      count++;
    }
  }
  return count;
}

let myString =
  "In the heart of the bustling city, where skyscrapers touched the clouds and neon lights painted the night, a sense of perpetual motion enveloped the streets. People hurried along the sidewalks, lost in the rhythm of their lives, each step telling a unique story. Amidst the chaos, there existed a hidden serenity, tucked away in quaint cafes and lush parks. The cityscape echoed with the laughter of friends sharing secrets, the hum of traffic, and the occasional melody of a street musician. As the sun dipped below the horizon, the city's energy transformed, revealing a nocturnal charm that captivated all who wandered its illuminated alleys.";

let result = countLetter(myString);
console.log(result);
