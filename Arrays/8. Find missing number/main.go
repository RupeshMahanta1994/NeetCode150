package main

import "fmt"

func findMissingNum(nums []int) int {
	n := len(nums) + 1
	expectedSum := (n * (n + 1)) / 2
	currentSum := 0
	for _, num := range nums {
		currentSum += num
	}
	return expectedSum - currentSum
}
func main() {
	nums := []int{8, 2, 4, 5, 3, 7, 1}
	// nums := []int{1, 3, 4}
	result := findMissingNum(nums)
	fmt.Println(result)
}
