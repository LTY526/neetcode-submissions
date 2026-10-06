class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const numMap = new Map<number, number>();
        for (let i = 0; i < numbers.length; i++) {
            numMap.set(numbers[i], i + 1);
        }
        for (let i = 0; i < numbers.length - 1; i++) {
            let dif = target - numbers[i];
            if (numMap.has(dif)) {
                return [i + 1, numMap.get(dif)];
            }
        }
        return [numbers.length - 1, numbers.length];
    }
}
