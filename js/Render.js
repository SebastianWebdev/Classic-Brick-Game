class Render {
    constructor(canvasID, fps, canvasWidth, canvasHeight) {
        this.canvasID = canvasID
        this.canvas = document.getElementById(`${this.canvasID}`);
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.canvasContext = this.canvas.getContext("2d");
        this.fps = fps;
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;

        this.background = new Rect(0, 0, this.canvasWidth, this.canvasHeight, "black", this.canvasContext);
        this.ball = new BAll(this.canvas, this.canvasContext, 10, "white", -2, 1);
        this.paddle = new Paddle();
        // this.brick = new Brick(0, 0, 100, 20, "blue", this.canvasContext) // do usuniecia, brick będzie generowany w grid
        this.count = 0;
        this.grid = new Grid(3, 3, 2, 100, 20, "blue", this.canvasContext);
        this.drow();
    }
    drow() {
        setInterval(() => {
            this.background.drowRect()
            this.ball.posY += this.ball.speedY;
            this.ball.posX += this.ball.speedX;
            this.ball.drowBall();

            for (let i = 0; i < this.grid.list.length; i++) {
                this.grid.list[i].drowRect();
            }
        }, 1000 / this.fps)


    }
}