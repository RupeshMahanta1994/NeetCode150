package main

import (
	"fmt"
)

func buildTree(edges [][]int) map[int][]int {
	graph := make(map[int][]int)
	for _, edge := range edges {
		u := edge[0]
		v := edge[1]
		//undirected graph
		graph[u] = append(graph[u], v)
		graph[v] = append(graph[v], u)
	}
	return graph
}
func dfs(node int, tree map[int][]int, visited map[int]bool) {
	if visited[node] {
		return
	}
	visited[node] = true
	fmt.Printf("%d ", node)
	for _, neigh := range tree[node] {
		dfs(neigh, tree, visited)
	}

}
func bfs(start int, tree map[int][]int) {
	visited := make(map[int]bool)
	queue := []int{start}
	visited[start] = true
	for len(queue) > 0 {
		node := queue[0]
		fmt.Println(node)
		queue = queue[1:]
		for _, neigh := range tree[node] {
			if !visited[neigh] {
				visited[neigh] = true
				queue = append(queue, neigh)
			}
		}
	}
}

func main() {
	edges := [][]int{
		{1, 2}, {1, 3}, {2, 4},
	}
	tree := buildTree(edges)
	visited := make(map[int]bool)
	dfs(1, tree, visited)
	fmt.Println()
	bfs(1, tree)
	fmt.Println(tree)
}
