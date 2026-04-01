package main

import "fmt"

func main() {
	nums := []int{2, 5, 1, 3, 0}
	var res int
	for _, num := range nums {
		if num > res {
			res = num
		}
	}
	fmt.Println(res)
}
