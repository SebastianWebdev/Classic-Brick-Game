class Paddle extends Rect {
    constructor(posX, posY, width, height, color, ctx, canvas) {
        super(posX, posY, width, height, color, ctx)
        this.canvas = canvas;
        this.mouseX = 0;
        this.mouseY = 0;

        this.paddleTop = this.posY;
        this.paddleBottom = this.posY + height;
        this.paddleLeft = this.posX;
        this.paddleRight = this.posX + width;
        this.paddleCenter = this.paddleLeft + this.width / 2;
        this.moweFunc();

    }
    moweFunc() {
        this.canvas.addEventListener("mousemove", (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const root = document.documentElement;
            this.mouseX = e.clientX - rect.left - root.scrollLeft;
            this.mouseY = e.clientY - rect.top - root.scrollTop;
            this.posX = this.mouseX - this.width / 2;
            this.paddleLeft = this.posX;
            this.paddleRight = this.posX + this.width;
            this.paddleCenter = this.paddleLeft + this.width / 2;
            //console.log(this.mouseX);

        })
    }
    /*paddleCol(ballR, ballX, ballY) {

    }*/
}