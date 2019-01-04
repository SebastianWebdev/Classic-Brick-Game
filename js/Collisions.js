class Collisions {
    constructor(objects = [], canvasWidth, canvasHeight) {
        this.objects = objects;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    collisions() {
        // ball collisions with canvas walls
        if (this.objects[0].posX > this.canvasWidth - this.objects[0].radius / 2 || this.objects[0].posX < this.objects[0].radius / 2) {
            this.objects[0].speedX *= -1;
        }
        if (this.objects[0].posY > this.canvasHeight) {
            this.objects[0].posY = this.canvasHeight / 2;
            this.objects[0].posX = this.canvasWidth / 2;
            this.objects[0].speedX *= -1;
            console.log("drugi if działa");
        }
        if (this.objects[0].posY < this.objects[0].radius) {
            this.objects[0].speedY *= -1;
        }

        // ball collisions with paddle
        if (this.objects[0].posY > this.objects[1].paddleTop - this.objects[0].radius && this.objects[0].posX > this.objects[1].paddleLeft && this.objects[0].posX < this.objects[1].paddleRight && this.objects[0].posY < this.objects[1].paddleBottom - this.objects[0].radius) {

            this.objects[0].speedY *= -1;
            console.log(this.objects[0].speedY);
            const ballFromPaddleCenter = this.objects[0].posX - this.objects[1].paddleCenter;
            this.objects[0].speedX = ballFromPaddleCenter * 0.2;

        }
        // Ball collisions with bricks
        this.objects[2].forEach(brick => {
            if (brick.appear) {
                if (this.objects[0].posY < brick.bottomEdge + this.objects[0].radius && this.objects[0].posY > brick.topEdge - this.objects[0].radius && this.objects[0].posX > brick.leftEdge - this.objects[0].radius && this.objects[0].posX < brick.rightEdge + this.objects[0].radius) {
                    const prevBallPosX = this.objects[0].posX - this.objects[0].speedX;
                    const prevBallPosY = this.objects[0].posY - this.objects[0].speedY;
                    const BallRow = Math.floor(this.objects[0].posY / this.objects[2][0].height);
                    const BallCol = Math.floor(this.objects[0].posX / this.objects[2][0].width);
                    const prevBallCol = Math.floor(prevBallPosX / this.objects[2][0].width);
                    const prevBallRow = Math.floor(prevBallPosY / this.objects[2][0].height);
                    console.log(prevBallCol, "prevBallCol");
                    console.log(prevBallRow, "Row");

                    if (prevBallCol != BallCol) {
                        this.objects[0].speedX *= -1;
                        console.log("if column działa");

                    }
                    if (prevBallRow != BallRow) {
                        this.objects[0].speedY *= -1;
                        console.log("if Row działa");
                    }

                    console.log(prevBallPosX, prevBallPosY);


                    brick.appear = false;
                    this.objects[0].speedY *= -1;
                    console.log(brick);

                }
            }

        })
    }


}