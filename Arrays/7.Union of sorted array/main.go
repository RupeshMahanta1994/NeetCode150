package main

import "fmt"

func union(arr1, arr2 []int, n, m int) []int {
	i := 0
	j := 0
	var union []int
	for i < n && j < m {
		if arr1[i] < arr2[j] {

			if len(union) == 0 || union[len(union)-1] != arr1[i] {
				union = append(union, arr1[i])
			}
			i++
		} else if arr2[j] < arr1[i] {
			if len(union) == 0 || union[len(union)-1] != arr2[j] {
				union = append(union, arr2[j])
			}
			j++
		} else {
			if len(union) == 0 || union[len(union)-1] != arr1[i] {
				union = append(union, arr1[i])
			}
			i++
			j++
		}
	}
	if i < n {
		union = append(union, arr1[i])
		i++
	}
	if j < m {
		union = append(union, arr2[j])
		j++
	}
	return union
}
func main() {
	arr1 := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	arr2 := []int{2, 3, 4, 4, 5, 11, 12}
	result := union(arr1, arr2, len(arr1), len(arr2))
	fmt.Println(result)
}
