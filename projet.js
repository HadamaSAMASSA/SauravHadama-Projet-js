//1) Commençons par créer quelques variables : grid et rover
var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];


var rover = {
    direction: "W",
    x: 0,
    y: 0,
}; //3) Le déplacement : x et y.

//2) Ajoutons quelques fonctions : turnLeft et turnRight

function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W"
            console.log(rover);
            break;
        case "W":
            rover.direction = "S"
            console.log(rover);
            break;
        case "S":
            rover.direction = "E"
            console.log(rover);
            break;
        case "E":
            rover.direction = "N"
            console.log(rover);
            break;
        default:
            console.log("error");
    }
};
console.log("turnLeft");
turnLeft(rover);

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E"
            console.log(rover);
            break;
        case "E":
            rover.direction = "S"
            console.log(rover);
            break;
        case "S":
            rover.direction = "W"
            console.log(rover);
            break;
        case "W":
            rover.direction = "N"
            console.log(rover);
            break;
        default:
            console.log("error");
    }
};
console.log("turnRight:");
turnRight(rover);

//4) Faisons avancer le rover : moveForward

function moveForward(rover) {
    switch (rover.direction) {
        case "N":
            rover.y = rover.y + 1;
            console.log(rover);
            break;
        case "E":
            rover.x = rover.x + 1;
            console.log(rover);
            break;
        case "S":
            rover.y = rover.y - 1;
            console.log(rover);
            break;
        case "W":
            rover.x = rover.x - 1;
            console.log(rover);
            break;
    }
}
console.log("moveForward:");
moveForward(rover);

//5) Créons un outil de commande : pilotRover