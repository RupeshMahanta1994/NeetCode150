package main

import "fmt"

func upperBound(nums []int, x int) int {
	left := 0
	right := len(nums) - 1
	res := len(nums)
	for left <= right {
		mid := left + (right-left)/2
		if nums[mid] > x {
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
	nums2 := []int{3, 5, 8, 9, 15, 19}
	x2 := 9
	result := upperBound(nums, x)
	result2 := upperBound(nums2, x2)
	fmt.Println(result)
	fmt.Println(result2)
}
