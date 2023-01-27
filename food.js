class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    drawFood() {
        fill(0, 255, 0);
        ellipse(this.x, this.y, 8);
    }
}