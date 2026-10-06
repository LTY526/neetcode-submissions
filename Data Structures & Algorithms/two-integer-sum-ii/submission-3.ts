class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0;
        let right = numbers.length - 1;
        while (left < right) {
            let dif = target - numbers[left];
            if (dif == numbers[right]) {
                return [left + 1, right + 1];
            }
            if (numbers[right] > dif) {
                right--;
            }
            if (numbers[right] < dif) {
                left ++
            }
        }
    }

    twoSumWithUnsorted(numbers: number[], target: number): number[] {
        const numMap = new Map<number, number>();
        for (let i = 0; i < numbers.length; i++) {
            let dif = target - numbers[i];
            if (numMap.has(dif)) {
                return [numMap.get(dif), i + 1];
            }
            numMap.set(numbers[i], i + 1);
        }
        return [];
    }

    twoSumNoob(numbers: number[], target: number): number[] {
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
