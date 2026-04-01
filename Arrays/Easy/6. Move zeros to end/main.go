package main

import "fmt"

func main() {
	nums := []int{1, 0, 2, 3, 0, 4, 0, 1}
	j := -1
	for i := 0; i < len(nums); i++ {
		if nums[i] == 0 {
			j = i
			break
		}
	}
	if j == -1 {
		fmt.Println("No zero present")
	}
	for i := j + 1; i < len(nums); i++ {
		if nums[i] != 0 {
			temp := nums[i]
			nums[i] = nums[j]
			nums[j] = temp
			j++
		}
	}
	fmt.Println(nums)
}
