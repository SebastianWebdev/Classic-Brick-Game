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
        this.ball = new BAll(this.canvas, this.canvasContext, 10, "white", 1, 1);

        // this.brick = new Brick(0, 0, 100, 20, "blue", this.canvasContext) // do usuniecia, brick będzie generowany w grid
        this.count = 0;
        this.grid = new Grid(20, 30, 2, 50, 10, "blue", this.canvasContext);
        this.paddle = new Paddle(this.canvasWidth / 2, this.canvasHeight - 60, 100, 5, "white", this.canvasContext, this.canvas);
        this.coll = new Collisions([this.ball, this.paddle, this.grid.list], this.canvasWidth, this.canvasHeight);
        this.drow();
    }
    drow() {
        /* this.canvas.addEventListener("mousemove", (e) => {
             this.ball.posX = e.clientX;
             this.ball.posY = e.clientY
         })*/
        setInterval(() => {
            this.background.drowRect()
            this.ball.posY += this.ball.speedY;
            this.ball.posX += this.ball.speedX;
            this.ball.drowBall();

            for (let i = 0; i < this.grid.list.length; i++) {
                if (this.grid.list[i].appear) {
                    this.grid.list[i].drowRect();
                }

            }
            this.paddle.drowRect();
            //this.ball.ballColissions();
            this.coll.collisions();
        }, 1000 / this.fps)


    }
}