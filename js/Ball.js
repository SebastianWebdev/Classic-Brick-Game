class BAll {
    constructor(canvas, canvasCtx, radius = 1, color = "white", speedX = 1, speedY = 1, index = 0) {
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.index = index;
        this.posX = canvas.width / 2;
        this.posY = canvas.height / 2;
        this.canvas = canvas;
        this.canvasCtx = canvasCtx;
        // this.drowBall(this.posX, this.posY, this.radius, this.canvasCtx);
        this.drowBall();
    }
    drowBall(posX = this.posX, posY = this.posY, radius = this.radius, ctx = this.canvasCtx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(posX, posY, radius, 0, Math.PI * 2, true, )
        ctx.fill()
    }
    ballColissions(posX = this.posX, posY = this.posY, R = this.radius, canvas = this.canvas) {
        if (posX > canvas.width - R / 2 || posX < R / 2) {
            this.speedX *= -1;
        }
        if (posY > canvas.height) {
            this.posY = canvas.height / 2;
            this.posX = canvas.width / 2;
            //console.log("drugi if działa");
        }
        if (posY < R / 2) {
            this.speedY *= -1;
        }
    }
}