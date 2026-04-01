package main

import "fmt"

func twoSum(nums []int, k int) bool {
	//create a map
	mpp := make(map[int]int)
	for i, num := range nums {
		comp := k - num
		//search in map
		if _, exists := mpp[comp]; exists {
			//if present return true
			return true
		} else {
			//else store this i,num in mpp
			mpp[num] = i
		}
	}
	return false
}

func main() {
	nums := []int{2, 6, 5, 8, 11}
	nums1 := []int{2, 6, 5, 8, 11}
	target := 14
	target1 := 15
	result := twoSum(nums, target)
	result1 := twoSum(nums1, target1)
	fmt.Println(result)
	fmt.Println(result1)
}
