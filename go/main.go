package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i, num := range nums {
		if j, ok := m[target-num]; ok {
			return []int{j, i}
		}
		m[num] = i
	}
	return []int{}
}

func main() {
	data, _ := os.ReadFile("input.txt")
	tokens := strings.Fields(strings.TrimSpace(string(data)))

	target, _ := strconv.Atoi(tokens[0])
	var nums []int
	for i := 1; i < len(tokens); i++ {
		num, _ := strconv.Atoi(tokens[i])
		nums = append(nums, num)
	}

	result := twoSum(nums, target)
	output := fmt.Sprintf("%d %d", result[0], result[1])
	os.WriteFile("output.txt", []byte(output), 0644)
}
