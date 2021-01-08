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
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
}; //3) Le déplacement : x et y.

//2) Ajoutons quelques fonctions : turnLeft et turnRight

function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W"
            break;
        case "W":
            rover.direction = "S"
            break;
        case "S":
            rover.direction = "E"
            break;
        case "E":
            rover.direction = "N"
            break;

    }
    rover.travelLog.push(rover.direction);
};
/*console.log("turnLeft");
turnLeft(rover);*/

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E"
            break;
        case "E":
            rover.direction = "S"
            break;
        case "S":
            rover.direction = "W"
            break;
        case "W":
            rover.direction = "N"
            break;
    }
    rover.travelLog.push(rover.direction);
};
/*console.log("turnRight:");
turnRight(rover);*/
//4) Faisons avancer le rover : moveForward

function moveForward(rover) {
    switch (rover.direction) {
        case "N":
            rover.y = rover.y - 1;
            break;
        case "E":
            rover.x = rover.x + 1;
            break;
        case "S":
            rover.y = rover.y + 1;
            break;
        case "W":
            rover.x = rover.x - 1;
            break;

    }
}
/*console.log("moveForward:");
moveForward(rover);*/

//5) Créons un outil de commande : pilotRover
function pilotRover(string) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "L" || string[i] === "l") {
            console.log(turnLeft(rover));
        } else if (string[i] === "R" || string[i] === "r") {
            console.log(turnRight(rover));
        } else if (string[i] === "F" || string[i] === "f") {
            console.log(moveForward(rover));
        } else {
            console.log("error");
        }

    }

}
console.log("pilotRover:")
pilotRover("lf");

//6) L'historique :