package main

import "fmt"

func searchPos(nums []int, x int) int {
	left := 0
	right := len(nums) - 1
	var res int
	for left <= right {
		mid := int((left + right) / 2)
		if nums[mid] >= x {
			res = mid
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return res
}
func main() {
	nums := []int{1, 2, 4, 7}
	x := 6
	nums2 := []int{1, 2, 4, 7, 9}
	x2 := 2
	result := searchPos(nums, x)
	result2 := searchPos(nums2, x2)
	fmt.Println(result)
	fmt.Println(result2)
}
