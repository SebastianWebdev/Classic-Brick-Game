class Rect {
    constructor(posX, posY, width, height, color, ctx) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.drowRect();
    }
    drowRect(posX = this.posX, posY = this.posY, width = this.width, height = this.height, color = this.color, ctx = this.ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(posX, posY, width, height, )
    }
}