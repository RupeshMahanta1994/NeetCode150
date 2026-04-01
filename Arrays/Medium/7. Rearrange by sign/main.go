package main

import "fmt"

func arrange(nums []int, n int) []int {
	var positive []int
	var negetive []int
	var res []int
	for _, num := range nums {
		if num < 0 {
			negetive = append(negetive, num)
		} else {
			positive = append(positive, num)
		}
	}
	for i := 0; i < len(positive); i++ {
		res = append(res, positive[i])
		res = append(res, negetive[i])
	}
	return res

}
func arrangeOptimal(nums []int, n int) []int {
	result := make([]int, n)
	positive := 0
	negetive := 1
	for _, num := range nums {
		if num >= 0 {
			result[positive] = num
			positive += 2
		} else {
			result[negetive] = num
			negetive += 2
		}
	}
	return result

}
func main() {
	nums := []int{1, 2, -4, -5}
	nums2 := []int{1, 2, -3, -1, -2, 3}
	N := 4
	result := arrange(nums, N)
	result2 := arrangeOptimal(nums2, 6)
	fmt.Println(result)
	fmt.Println(result2)
}
