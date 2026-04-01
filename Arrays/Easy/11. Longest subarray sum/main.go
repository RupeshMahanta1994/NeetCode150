package main

import "fmt"

func maxArray(nums []int, k int) int {
	left := 0
	var currentSum int
	var maxLen int
	for i := range nums {
		currentSum += nums[i]
		if currentSum == k {
			currLen := i - left + 1
			if currLen > maxLen {
				maxLen = currLen
			}
		}
		for currentSum > k {
			currentSum -= nums[left]
			left++
		}
	}
	return maxLen
}

func main() {
	nums := []int{10, 5, 2, 7, 1, 9}
	k := 15
	result := maxArray(nums, k)
	fmt.Println(result)
}
