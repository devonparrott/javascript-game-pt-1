var playAGame = prompt("Do you want to play?");

if (playAGame.toLowerCase() === "yes") {
  var name = prompt("What is your name?");
}

var user = {name, total:0, health:40};
var grantName = "Grant the Mighty Chicken";
var grant = {grantName, total:0, health:10};

while (user.total < 3) {
  while (user.health > 0 && grant.health > 0) {
    user.health -= Math.floor((Math.random() * 2));
    grant.health -= Math.floor((Math.random() * 2));

    console.log(name + " has " + user.health + " health left.");
    console.log(grantName + " has " + grant.health + " health left.");
  }

  if (grant.health < user.health) {
    console.log('One win for ' + name + " !" );
    user.total++;
    grant.health = 10;
  } else {
    console.log('One win for ' + grantName + " !");

    grant.total++;
    grant.health = 10;
  }
}

if (user.total === 3) {
  console.log(name + " wins! You won " + user.total + " games!");
} else if (user.health === 0) {
  console.log(grantName + " wins! Your health hit 0!");
}