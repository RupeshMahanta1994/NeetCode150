package main

import "fmt"

func lowerBound(nums []int, x int) int {
	left := 0
	right := len(nums) - 1
	var res int
	for left <= right {
		mid := int((left + right) / 2)
		if x <= nums[mid] {
			res = mid
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return res
}
func main() {
	nums := []int{1, 2, 2, 3}
	x := 2
	nums2 := []int{3, 5, 8, 15, 19}
	x2 := 9
	result := lowerBound(nums, x)
	result2 := lowerBound(nums2, x2)
	fmt.Println(result)
	fmt.Println(result2)
}
