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
    direction: "E"
};

function turnLeft(rover){
    switch(rover.direction){
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
turnLeft(rover);

function turnRight(rover){
    switch(rover.direction){
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
turnRight(rover);
