class Creature {
    constructor(diam, xPos, yPos) {
        this.diam = diam;
        this.xPos = xPos;
        this.yPos = yPos;
        this.location = [this.xPos, this.yPos];
    }

    drawCreature() {
        fill(255);
        ellipse(this.xPos, this.yPos, this.diam);
        fill(255, 0, 0);
        ellipse(this.xPos - 6, this.yPos - 2, 4);
        ellipse(this.xPos + 6, this.yPos - 2, 4);
    }

    followPlayer() {
        this.location = [this.xPos, this.yPos];
        console.log(this.location);
        if (this.xPos < player.xPos) {
            this.xPos += 1.5;
        }
        if (this.xPos > player.xPos) {
            this.xPos -= 1.5;
        }
        if (this.yPos < player.yPos) {
            this.yPos += 1.5;
        }
        if (this.yPos > player.yPos) {
            this.yPos -= 1.5;
        }
    }

    eatFood() {
        if (this.xPos + this.diam / 2 - food.x > 0 && this.xPos + this.diam / 2 - food.x < 3) {
            console.log("eat");
        }
    }
}
