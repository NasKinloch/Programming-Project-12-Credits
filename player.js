class Player {
    constructor(x, y, w, h, c, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    drawRect() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);

    }

    move() {
        if (rightKeyPressed) {
            this.x += this.xSpeed;
        }
        if (leftKeyPressed) {
            this.x -= this.xSpeed;
        }
        if (upKeyPressed) {
            this.y -= this.ySpeed;
        }
        if (downKeyPressed) {
            this.y += this.ySpeed;
        }
    }

}
