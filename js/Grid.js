class Grid {
    constructor(columns = 1, rows = 1, gap = 0, brickWidth, brickHeight, color, ctx) {
        this.brickWidth = brickWidth
        this.brickHeight = brickHeight
        this.color = color
        this.columns = columns
        this.rows = rows
        this.list = []
        this.ctx = ctx;
        this.gap = gap;
        this.createGridElements();
        this.createGrid();
        this.actualizeBricks();
    }
    createGridElements(columns = this.columns, rows = this.rows, ctx = this.ctx, gap = this.gap) {
        for (let i = 0; i < columns * rows; i++) {
            const brick = new Brick(0, 0, this.brickWidth - this.gap, this.brickHeight - this.gap, this.color, ctx);
            this.list.push(brick);
        }
    }
    createGrid(columns = this.columns, rows = this.rows) {
        let columnIndex = 0;
        let rowsIndex = 0;
        let index = 0;
        for (let i = 0; i < columns; i++) {
            for (let i = 0; i < rows; i++) {
                this.list[columnIndex].posY = i * this.brickHeight;
                columnIndex++
            }
            for (let i = 0; i < rows; i++) {
                this.list[rowsIndex].posX = index * this.brickWidth;
                rowsIndex++

            }
            index++
        }

        /*for (let i = 0; i < columns; i++) {
            this.list[rowsIndex].posX = i * this.brickWidth;
            rowsIndex++
        }*/

    }
    actualizeBricks() {
        this.list.forEach(brick => {
            brick.topEdge = brick.posY;
            brick.bottomEdge = brick.posY + brick.height;
            brick.leftEdge = brick.posX;
            brick.rightEdge = brick.posX + brick.width;
        });
    }

}