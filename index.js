const person = require("./information");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Bonjour, je suis ${person.name} du campus de ${person.campus}`,
    e: "oO",
    T: "U ",
  })
);
