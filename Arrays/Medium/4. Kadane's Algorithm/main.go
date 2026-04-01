package main

import "fmt"

func kadens(nums []int) int {
	currSum := nums[0]
	maxSum := nums[0]
	for i := 1; i < len(nums); i++ {
		if currSum+nums[i] > nums[i] { //decision for current num, if it increses the currSum then add else not
			currSum += nums[i]
		} else {
			currSum = nums[i]
		}
		if currSum > maxSum {
			maxSum = currSum
		}
	}
	return maxSum

}
func main() {
	nums := []int{2, 3, 5, -2, 7, -4}
	nums2 := []int{-2, -3, -7, -2, -10, -4}
	result := kadens(nums)
	result2 := kadens(nums2)
	fmt.Println(result)
	fmt.Println(result2)
}
