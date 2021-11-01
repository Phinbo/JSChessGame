# ChessGame
[Click Here!](https://phinziegler.github.io/ChessGame/)<br>
This is a personal project of mine. Trying to create something to prove my knowledge of Javascript, HTML, and CSS.

## In development
1. Check and checkmate detection. 
2. Alternate Win condition settings:
    1. Checkmate
    2. Elimination
    3. Pawn journey
3. Creating starting positions (already possible with fen, but I would like this to be possible using a more natural menu).
4. Custom Colors OR a list of presets to choose from
    1. Blue theme (**DONE**).
    2. Green theme.
    3. classic theme.
    4. Dark theme.
5. Audio Queues for moves, and/or music?
6. Cookies to save color and audio preferences.

## Known Bugs
1. rnbqkbnr/ppppppPp/8/8/8/8/PPPPPPPP/RNBQKBNR => update => upgrade white pawn => undo => move same white pawn = bizarre bug which i cant figure out. Somehow this allows the move history to have a length greater than 0 in the starting position.. For some reason, the board state is also in a state previous to the board update.
    UPDATE: the source of this bug is in MOVES.js, in the enPassant function. 
