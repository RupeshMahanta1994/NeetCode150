package main

import "fmt"

func findMajority(nums []int) int {
	size := int(len(nums) / 2)
	hashMap := make(map[int]int)
	for _, num := range nums {
		if cnt, ok := hashMap[num]; ok {
			hashMap[num] = cnt + 1
		} else {
			hashMap[num] = 1
		}
	}
	for num, cnt := range hashMap {
		if cnt > size {
			return num
		}
	}
	return -1

}
func main() {
	nums := []int{7, 0, 0, 1, 7, 7, 2, 7, 7}
	nums2 := []int{1, 1, 1, 2, 1, 2}
	result := findMajority(nums)
	result2 := findMajority(nums2)
	fmt.Println(result)
	fmt.Println(result2)
}
