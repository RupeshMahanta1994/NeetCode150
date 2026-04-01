package main

import "fmt"

func zeroSum(nums []int) int {
	var count int
	currentSum := nums[0]
	left := 0
	for i := 1; i < len(nums); i++ {
		currentSum += nums[i]
		if currentSum < 0 || currentSum > 0 {
			currentSum -= nums[left]
			left++
		} else {
			currLen := i - left + 1
			if currLen > count {
				count = currLen
			}
		}
	}
	return count

}

func main() {
	nums := []int{9, -3, 3, -1, 6, -5}
	result := zeroSum(nums)
	fmt.Println(result)
}
