package main

import "fmt"

func main() {
	nums := []int{1, 2, 4, 7, 7, 5}
	var first, second int
	for _, num := range nums {
		if num > first {
			second = first
			first = num
		}
		if num > second && num < first {
			second = num
		}
	}
	fmt.Println(second)
}
