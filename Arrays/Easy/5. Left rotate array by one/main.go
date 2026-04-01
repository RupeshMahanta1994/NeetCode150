package main

import "fmt"

func rotate(nums []int, left, right int) []int {
	for left <= right {
		temp := nums[right]
		nums[right] = nums[left]
		nums[left] = temp
		left++
		right--

	}
	return nums
}
func main() {
	nums := []int{1, 2, 3, 4, 5}
	pivot := 2
	//rotate left half
	res1 := rotate(nums, 0, pivot-1)
	//rotate right half
	res2 := rotate(res1, pivot, len(nums)-1)
	//rotate all
	res := rotate(res2, 0, len(nums)-1)
	fmt.Println(res)

}
