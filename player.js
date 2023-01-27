class Player {
    constructor(x, y, xPos, yPos) {
        this.x = x;
        this.y = y;
        this.xPos = xPos;
        this.yPos = yPos;
    }

    drawPlayer() {
        rect(this.xPos, this.yPos, this.x, this.y);
    }

    controlMovement() {
        if (keyIsDown(87)) {
            this.yPos--;
        }
        if (keyIsDown(83)) {
            this.yPos++;
        }
        if (keyIsDown(65)) {
            this.xPos--;
        }
        if (keyIsDown(68)) {
            this.xPos++;
        }
    }

    screenWrap() {
        if (this.xPos > width) {
            this.xPos = 0;
        }
        if (this.xPos < 0 - this.x) {
            this.xPos = width - 1;
        }
        if (this.yPos > height) {
            this.yPos = 0;
        }
        if (this.yPos < 0 - this.x) {
            this.yPos = height - 1;
        }
    }
}