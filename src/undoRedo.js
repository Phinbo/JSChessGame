import { manager } from "./script.js";

let redo = document.getElementById("redo");
let undo = document.getElementById("undo");

undo.addEventListener("click", () => {
    undoMove();
});

redo.addEventListener("click", () => {
    redoMove();
});

function undoMove() {
    manager.undo();
}

function redoMove() {
    manager.redo();
}
