package main

import (
	"fmt"
)

func countOnes(nums []int) int {
	maxLen := 0
	currLen := 0
	for _, num := range nums {
		if num != 1 {
			currLen = 0
		} else {
			currLen += 1
			if currLen > maxLen {
				maxLen = currLen
			}
		}
	}
	return maxLen
}
func main() {
	// nums := []int{1, 1, 0, 1, 1, 1}
	nums := []int{1, 0, 1, 1, 0, 1}
	result := countOnes(nums)
	fmt.Println(result)
}
