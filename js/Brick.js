class Brick extends Rect {
    constructor(posX, posY, width, height, color, ctx) {
        super(posX, posY, width, height, color, ctx)
        this.appear = true;
        this.topEdge = posY;
        this.bottomEdge = posY + height;
        this.leftEdge = posX;
        this.rightEdge = posX + width;
    }
}