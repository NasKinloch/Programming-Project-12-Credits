class Enemy {
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
//        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x + this.w >= canvas.width || this.x <= 0) {
            this.xSpeed *= -1;
        }

        if(this.y >canvas.height){
            this.y = 0 - this.h;
            this.ySpeed = Math.floor(Math.random() * (6 - 3) + 3);
        }
    }
}
