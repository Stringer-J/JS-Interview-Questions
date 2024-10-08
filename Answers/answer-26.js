// Question 26
// Implement a Turtle class that moves a turtle on a 2D plane.

class Turtle {
    constructor() {
        this.x = 0; // Initial x position
        this.y = 0; // Initial y position
        this.direction = 0; // Initial direction in degrees (0 = facing right)
    }

    // Move the turtle forward by a given distance
    move(distance) {
        const radians = (Math.PI / 180) * this.direction; // Convert degrees to radians
        this.x += distance * Math.cos(radians); // Update x position
        this.y += distance * Math.sin(radians); // Update y position
    }

    // Turn the turtle left by a given angle
    turnLeft(angle) {
        this.direction = (this.direction - angle + 360) % 360; // Update direction
    }

    // Turn the turtle right by a given angle
    turnRight(angle) {
        this.direction = (this.direction + angle) % 360; // Update direction
    }

    // Get the current position of the turtle
    getPosition() {
        return { x: this.x, y: this.y };
    }

    // Get the current direction of the turtle
    getDirection() {
        return this.direction;
    }
}

// Example usage:
const turtle = new Turtle();
console.log(turtle.getPosition()); // { x: 0, y: 0 }
turtle.move(10);
console.log(turtle.getPosition()); // { x: 10, y: 0 }
turtle.turnLeft(90);
turtle.move(5);
console.log(turtle.getPosition()); // { x: 10, y: 5 }
turtle.turnRight(90);
turtle.move(3);
console.log(turtle.getPosition()); // { x: 13, y: 5 }
