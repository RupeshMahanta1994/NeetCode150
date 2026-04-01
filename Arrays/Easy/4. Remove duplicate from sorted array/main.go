package main

import "fmt"

func main() {
	nums := []int{1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4}
	slow := 0
	for i := 1; i < len(nums); i++ {
		if nums[i] == nums[slow] {
			nums[i] = 0
			continue
		} else {
			slow += 1
			nums[slow] = nums[i]
			nums[i] = 0
		}
	}
	fmt.Println(nums)
}
