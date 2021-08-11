class Bullet {
    constructor(x, y, w, h, c, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.ySpeed = ySpeed;
    }

    drawRect() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);

    }

    move() {
        this.y -= this.ySpeed;
    }


    outOfBounds() {
        return this.y < 0;
    }

    hasHitItem(item) {
        return ((this.x + this.w) >= item.x && this.x <= (item.x + item.w)) && ((this.y + this.h) >= item.y && this.y <= (item.y + item.h));
    }

    hasHitEnemy(enemy) {
        return this.hasHitItem(enemy);
    }

    hasCollided() {
        var self = this;
        var collided = false;
        enemies.forEach(function (enemy, i) {
            if (self.hasHitEnemy(enemy)) {
                delete enemies[i];
                collided = true;
                score++;
                console.log('score:' + score);
            }
        });
        enemies = enemies.filter(item => item !== undefined);
        return collided;
    }

}
