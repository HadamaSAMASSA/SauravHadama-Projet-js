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
};


function turnLeft() {
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
};

function turnRight() {
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
};

function moveForward() {
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
};

function moveBackward() {
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

};

function pilotRover(string) {
    for (var i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "L", "l":
                turnLeft();
                break;
            case "R", "r":
                turnRight();
                break;
            case "F", "f":
                moveForward();
                break;
            case "B", "b":
                moveBackward();
                break;
        };
    };
};