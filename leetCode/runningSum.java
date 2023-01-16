import java.io.IOException;

class Solution {
    public int[] runningSum(int[] nums) {
        /** Array to hold result of Running Sum */
        int[] res = {};

        /**
         * Iterated over the array adding the number in the current index with the next
         * number and adding the sum into the [res] array
         */
        for (int i = 0; i < nums.length; i++) {
            res[i] = nums[i] + nums[++i];
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
    public void main() throws IOException {
        // Reading Outputs
        int[] input = getInput();

        // Getting Solutions
        Solution sln = new Solution();
        int[] r = sln.runningSum(input);

        // Printing Results
        System.out.println(r);
    }

    public int[] getInput() throws IOException {
        System.out.print("Enter your Array:");
        int arr = System.in.read();
        int[] r = { arr };
        return r;
    }
}