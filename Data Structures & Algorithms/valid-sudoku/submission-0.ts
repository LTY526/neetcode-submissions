class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let row = Array.from({ length: 9 }, () => new Set<string>());
        let col = Array.from({ length: 9 }, () => new Set<string>());
        let box = Array.from({ length: 9 }, () => new Set<string>());
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                                    // row 012 is box0    + col 
                                    // row 345 is box3    + col
                                    // row 678 is box6    + col
                const belongToBox = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                const currentValue = board[i][j];
                if (currentValue == '.') continue;
                if (row[i].has(currentValue) || col[j].has(currentValue) || box[belongToBox].has(currentValue)) {
                    return false;
                }
                row[i].add(currentValue);
                col[j].add(currentValue);
                box[belongToBox].add(currentValue);
            }
        }
        return true;
    }
}
