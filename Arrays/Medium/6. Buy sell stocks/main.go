package main

import "fmt"

func buySellStock(nums []int) int {
	buy := 0
	var maxProfit int
	for i, num := range nums {
		profit := nums[i] - nums[buy]
		if profit > maxProfit {
			maxProfit = profit
		}
		if num < nums[buy] {
			buy = i
		}

	}
	return maxProfit
}
func main() {
	nums := []int{7, 1, 5, 3, 6, 4}
	result := buySellStock(nums)
	fmt.Println(result)

}
