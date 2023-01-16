class Solution {
    public int[] runningSum(int[] nums) {
        /** Array to hold result of Running Sum */
        int[] res = {};

        /**
         * Iterated over the array adding the number in the current index with the next
         * number and adding the sum into the [res] array
         */
        for (int i = 0; i < nums.length; i++) {
        }

        return res;
    }
}

/**
 * Responsible for testing and running the solution
 * Has two methods, [main] - runs the result and [getInput] - gets Input from
 * user
 */
class Main {
    public int main() {
        Solution sln = new Solution();
        sln.runningSum();
    }
}