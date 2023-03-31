class Solution {

    public void Solution() {
    }

    public static void main(String[] args) {
        int[] nums = { 1, 2, 5, 3, 9 };
        Solution sln = new Solution();

        sln.twoSum(nums, 5);
    }

    public int[] twoSum(int[] nums, int target) {
        int[] res = new int[3];
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length; j++) {
                int checkSum = nums[i] + nums[j];
                if (checkSum == target) {
                    res[0] = i;
                    res[1] = j;
                }
            }
        }

        return res;
    }
}