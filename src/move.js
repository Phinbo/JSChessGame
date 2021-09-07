// an object that represents a move taken.

export default class Move {
    constructor(movePiece, start, end, takePiece) {
        this.movePiece = movePiece;
        this.start = start;
        this.end = end;
        this.takePiece = takePiece;
    }
    getMovePiece() {
        return this.movePiece;
    }
    getStart() {
        return this.start;
    }
    getEnd() {
        return this.end;
    }
    getTakePiece() {
        return this.takePiece;
    }
}