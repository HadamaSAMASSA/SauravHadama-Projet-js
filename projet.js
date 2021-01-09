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
]; // var grid


var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
}; //var rover


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
    };
    console.log(rover.direction);
}; //turnLeft function

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
    };
    console.log(rover.direction);
}; //turnRight function

function moveForward(rover) {
    switch (rover.direction) {
        case "N":
            rover.y--;
            break;
        case "E":
            rover.x++;
            break;
        case "S":
            rover.y++;
            break;
        case "W":
            rover.x--;
            break;
    };
}; //moveForward function

function moveBackward(rover) {
    switch (rover.direction) {
        case "N":
            rover.y++;
            break;
        case "E":
            rover.x--;
            break;
        case "S":
            rover.y--;
            break;
        case "W":
            rover.x++;
            break;
    };
}; //moveBackward function

function pilotRover(string) {
    for (var i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "l":
                turnLeft(rover);
                break;
            case "r":
                turnRight(rover);
                break;
            case "f":
                moveForward(rover);
                break;
            case "b":
                moveBackward(rover);
                break;
        };
    };
}; //pilotRover function
console.table(grid);