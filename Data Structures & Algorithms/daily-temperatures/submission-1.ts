class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array(temperatures.length).fill(0);
        const stack: number[] = [];
        for (let i = temperatures.length - 1; i >= 0; i--) {
            while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
                stack.pop();
            }
            result[i] = stack.length == 0 ? 0 : (stack[stack.length - 1] - i);
            stack.push(i);
        }
        return result;
    }

    dailyTemperaturesNaive(temperatures: number[]): number[] {
        const result = [];
        for (let i = 0; i < temperatures.length; i++) {
            const current = temperatures[i];
            let ctr = 1;
            let found = false;
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[j] > current) {
                    result.push(ctr);
                    found = true;
                    break;
                }
                ctr++;
            }
            if (found) continue;
            result.push(0);
        }
        return result;
    }
}
