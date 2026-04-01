package main

import (
	"fmt"
	"sort"
)

func sortArr(nums []int) []int {
	sort.Ints(nums)
	return nums
}
func sortArr1(nums []int) []int {
	sort.Sort(sort.Reverse(sort.IntSlice(nums)))
	return nums
}
func customSort(arr []int) []int {
	sort.Slice(arr, func(i, j int) bool {
		return arr[i] > arr[j]
	})
	return arr
}

type Person struct {
	Name string
	Age  int
}

func sortingStruct() []Person {
	people := []Person{
		{"Alcie", 20},
		{"Mark", 45},
		{"Bob", 12},
	}
	sort.Slice(people, func(i, j int) bool {
		return people[i].Age < people[j].Age
	})
	return people
}
func main() {
	nums := []int{1, 0, 2, 1, 0}
	result := sortArr(append([]int{}, nums...))
	result1 := sortArr1(append([]int{}, nums...))
	result2 := customSort(append([]int{}, nums...))
	structSort := sortingStruct()
	fmt.Println("Asending sort", result)
	fmt.Println("Descending sort", result1)
	fmt.Println("Custom Sort", result2)
	fmt.Println("Struct Sort", structSort)
}
