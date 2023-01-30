class Creature {
    constructor(diam, xPos, yPos) {
        this.diam = diam;
        this.xPos = xPos;
        this.yPos = yPos;
        this.location = [this.xPos, this.yPos];
        this.full = false;
        this.speed;
        this.eyeCol;
    }

    drawCreature() {

        if (this.full = false) {
            this.eyeCol = [255, 0, 0];
        } else {
            this.eyeCol = [0, 255, 0];
        }

        fill(255);
        ellipse(this.xPos, this.yPos, this.diam);
        fill(this.eyeCol);
        ellipse(this.xPos - 6, this.yPos - 2, 4);
        ellipse(this.xPos + 6, this.yPos - 2, 4);
    }

    followPlayer() {

        if (this.full = false) {
            this.speed = 1.5;
        } else {
            this.speed = 0.4;
        }

        this.location = [this.xPos, this.yPos];
        console.log(this.location);
        if (this.xPos < player.xPos) {
            this.xPos += this.speed;
        }
        if (this.xPos > player.xPos) {
            this.xPos -= this.speed;
        }
        if (this.yPos < player.yPos) {
            this.yPos += this.speed;
        }
        if (this.yPos > player.yPos) {
            this.yPos -= this.speed;
        }
    }

    eatFood() {
        if (this.xPos + this.diam / 2 - food.x > 0 && this.xPos + this.diam / 2 - food.x < 3) {
            console.log("eat");
        }
    }
}
