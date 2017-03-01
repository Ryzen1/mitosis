function Cell(pos, radius, c) {

    if (pos) {
        this.pos = pos.copy();
    } else {
        this.pos = createVector(random(width), random(height));
    }

    this.radius = radius || 60;
    this.c = c || color(random(100, 255), 0, random(100, 255), 100);

    this.move = function () {
        var velocity = p5.Vector.random2D();
        this.pos.add(velocity);
    }

    this.mitosis = function () {
        this.pos.x += random(-this.radius, this.radius);
        return new Cell(this.pos, this.radius * 0.8, this.c);
    }

    this.show = function () {
        noStroke();
        fill(this.c);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }

    this.clicked = function (x, y) {
        var distance = dist(this.pos.x, this.pos.y, x, y);
        if (distance < this.radius) {
            return true;
        } else {
            return false;
        }
    }
}