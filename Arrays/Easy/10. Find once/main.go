package main

import "fmt"

func findOnce(nums []int) int {
	xor := 0
	for _, num := range nums {
		xor = xor ^ num
	}
	return xor
}
func main() {
	nums := []int{4, 1, 2, 1, 2}
	result := findOnce(nums)
	fmt.Println(result)
}
