# Graph Data Structure - Complete Roadmap

## Table of Contents

1. [Introduction to Graphs](#introduction-to-graphs)
2. [Graph Representations](#graph-representations)
3. [Graph Traversal Algorithms](#graph-traversal-algorithms)
4. [Advanced Graph Concepts](#advanced-graph-concepts)
5. [Problems by Difficulty](#problems-by-difficulty)

---

## Introduction to Graphs

### What is a Graph?

A graph is a non-linear data structure consisting of **vertices (nodes)** and **edges** that connect these vertices. Graphs are used to represent networks, relationships, and connections between objects.

**Mathematical Definition:** G = (V, E)

- V = Set of vertices
- E = Set of edges

### Types of Graphs

#### 1. **Directed Graph (Digraph)**

- Edges have direction (A → B is different from B → A)
- Example: Twitter followers, web page links

```
A → B → C
↓       ↑
D ←────┘
```

#### 2. **Undirected Graph**

- Edges have no direction (A—B means you can go both ways)
- Example: Facebook friends, road networks

```
A — B — C
|       |
D ──────┘
```

#### 3. **Weighted Graph**

- Edges have weights/costs
- Example: Distance between cities, network latency

```
    5      3
A ──── B ──── C
|             |
2             7
|             |
D ────────────┘
      4
```

#### 4. **Unweighted Graph**

- All edges have equal weight (or weight = 1)

#### 5. **Cyclic Graph**

- Contains at least one cycle (path that starts and ends at same vertex)

#### 6. **Acyclic Graph**

- Contains no cycles
- **DAG (Directed Acyclic Graph)** - Important for task scheduling

#### 7. **Connected Graph**

- Path exists between every pair of vertices

#### 8. **Disconnected Graph**

- At least one vertex is unreachable from others

### Graph Terminology

- **Vertex/Node**: A point in the graph
- **Edge**: Connection between two vertices
- **Adjacent Vertices**: Vertices connected by an edge
- **Degree**: Number of edges connected to a vertex
  - **In-degree**: Number of incoming edges (directed graphs)
  - **Out-degree**: Number of outgoing edges (directed graphs)
- **Path**: Sequence of vertices connected by edges
- **Cycle**: Path that starts and ends at the same vertex
- **Connected Component**: Maximal set of vertices with paths between them

---

## Graph Representations

### 1. Adjacency Matrix

A 2D array where `matrix[i][j] = 1` if there's an edge from vertex i to vertex j.

**Pros:**

- O(1) edge lookup
- Simple implementation
- Good for dense graphs

**Cons:**

- O(V²) space complexity
- Inefficient for sparse graphs

```javascript
// Example: Undirected graph with 4 vertices
const adjacencyMatrix = [
  [0, 1, 1, 0], // Vertex 0 connects to 1, 2
  [1, 0, 1, 1], // Vertex 1 connects to 0, 2, 3
  [1, 1, 0, 1], // Vertex 2 connects to 0, 1, 3
  [0, 1, 1, 0], // Vertex 3 connects to 1, 2
];

// Weighted graph
const weightedMatrix = [
  [0, 5, 2, 0],
  [5, 0, 3, 7],
  [2, 3, 0, 4],
  [0, 7, 4, 0],
];
```

### 2. Adjacency List

Array/Map of lists where `list[i]` contains all neighbors of vertex i.

**Pros:**

- O(V + E) space complexity
- Efficient for sparse graphs
- Easy to iterate over neighbors

**Cons:**

- O(V) edge lookup in worst case

```javascript
// Using Array of Arrays
const adjacencyList = [
  [1, 2], // Vertex 0 neighbors
  [0, 2, 3], // Vertex 1 neighbors
  [0, 1, 3], // Vertex 2 neighbors
  [1, 2], // Vertex 3 neighbors
];

// Using Map (better for non-sequential vertices)
const graph = new Map();
graph.set("A", ["B", "C"]);
graph.set("B", ["A", "D"]);
graph.set("C", ["A", "D"]);
graph.set("D", ["B", "C"]);

// Weighted graph with adjacency list
const weightedGraph = new Map();
weightedGraph.set("A", [
  ["B", 5],
  ["C", 2],
]);
weightedGraph.set("B", [
  ["A", 5],
  ["D", 7],
]);
```

### 3. Edge List

Array of edges, where each edge is represented as `[from, to]` or `[from, to, weight]`.

```javascript
const edgeList = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 3],
];

// Weighted
const weightedEdgeList = [
  [0, 1, 5],
  [0, 2, 2],
  [1, 3, 7],
];
```

---

## Graph Traversal Algorithms

### 1. Breadth-First Search (BFS)

**Concept:** Explore all vertices at current depth before moving to next depth level. Uses a **queue**.

**Use Cases:**

- Shortest path in unweighted graphs
- Level-order traversal
- Finding connected components
- Web crawling

**Time Complexity:** O(V + E)
**Space Complexity:** O(V)

```javascript
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];

  visited.add(start);

  while (queue.length > 0) {
    const vertex = queue.shift();
    result.push(vertex);

    // Visit all neighbors
    for (const neighbor of graph.get(vertex) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}

// Example usage
const graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["A", "D", "E"]],
  ["C", ["A", "F"]],
  ["D", ["B"]],
  ["E", ["B", "F"]],
  ["F", ["C", "E"]],
]);

console.log(bfs(graph, "A")); // ['A', 'B', 'C', 'D', 'E', 'F']
```

### 2. Depth-First Search (DFS)

**Concept:** Explore as far as possible along each branch before backtracking. Uses a **stack** (or recursion).

**Use Cases:**

- Detecting cycles
- Topological sorting
- Finding paths
- Maze solving
- Backtracking problems

**Time Complexity:** O(V + E)
**Space Complexity:** O(V)

```javascript
// Recursive DFS
function dfsRecursive(graph, vertex, visited = new Set(), result = []) {
  visited.add(vertex);
  result.push(vertex);

  for (const neighbor of graph.get(vertex) || []) {
    if (!visited.has(neighbor)) {
      dfsRecursive(graph, neighbor, visited, result);
    }
  }

  return result;
}

// Iterative DFS
function dfsIterative(graph, start) {
  const visited = new Set();
  const stack = [start];
  const result = [];

  while (stack.length > 0) {
    const vertex = stack.pop();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      // Add neighbors to stack
      for (const neighbor of graph.get(vertex) || []) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
}

console.log(dfsRecursive(graph, "A")); // ['A', 'B', 'D', 'E', 'F', 'C']
console.log(dfsIterative(graph, "A")); // May vary due to stack order
```

---

## Advanced Graph Concepts

### 1. Shortest Path Algorithms

#### Dijkstra's Algorithm

- **Use Case:** Shortest path in weighted graphs with non-negative weights
- **Time Complexity:** O((V + E) log V) with priority queue
- **Space Complexity:** O(V)

```javascript
function dijkstra(graph, start) {
  const distances = new Map();
  const visited = new Set();
  const pq = [[0, start]]; // [distance, vertex]

  // Initialize distances
  for (const vertex of graph.keys()) {
    distances.set(vertex, Infinity);
  }
  distances.set(start, 0);

  while (pq.length > 0) {
    // Sort to simulate priority queue (use MinHeap for better performance)
    pq.sort((a, b) => a[0] - b[0]);
    const [currentDist, vertex] = pq.shift();

    if (visited.has(vertex)) continue;
    visited.add(vertex);

    for (const [neighbor, weight] of graph.get(vertex) || []) {
      const newDist = currentDist + weight;

      if (newDist < distances.get(neighbor)) {
        distances.set(neighbor, newDist);
        pq.push([newDist, neighbor]);
      }
    }
  }

  return distances;
}
```

#### Bellman-Ford Algorithm

- **Use Case:** Shortest path with negative weights, detects negative cycles
- **Time Complexity:** O(V × E)

#### Floyd-Warshall Algorithm

- **Use Case:** All-pairs shortest paths
- **Time Complexity:** O(V³)

### 2. Minimum Spanning Tree (MST)

#### Prim's Algorithm

- **Time Complexity:** O(E log V)
- Starts from a vertex and grows the MST

#### Kruskal's Algorithm

- **Time Complexity:** O(E log E)
- Sorts edges and adds them if they don't form a cycle

### 3. Topological Sort

- **Use Case:** Order tasks with dependencies (DAG only)
- **Methods:** DFS-based, Kahn's algorithm (BFS-based)

```javascript
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(vertex) {
    visited.add(vertex);

    for (const neighbor of graph.get(vertex) || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.push(vertex); // Add after visiting all descendants
  }

  for (const vertex of graph.keys()) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  return stack.reverse();
}
```

### 4. Union-Find (Disjoint Set Union)

- **Use Case:** Detect cycles, connected components, Kruskal's algorithm

```javascript
class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    // Union by rank
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }

    return true;
  }
}
```

---

## Problems by Difficulty

### Level 1: Basics (Understanding Graph Representations)

1. ✅ Build Adjacency List from Edge List
2. ✅ Build Adjacency Matrix from Edge List
3. ✅ Count Vertices and Edges
4. ✅ Find All Neighbors of a Vertex

### Level 2: Basic Traversals

5. ✅ BFS Traversal
6. ✅ DFS Traversal (Recursive and Iterative)
7. ✅ Number of Connected Components (Undirected)
8. ✅ Find if Path Exists Between Two Nodes

### Level 3: Easy Problems

9. ✅ **Find Center of Star Graph** (LeetCode 1791)
10. ✅ **Find the Town Judge** (LeetCode 997)
11. ✅ **Number of Provinces** (LeetCode 547)
12. ✅ **Clone Graph** (LeetCode 133)

### Level 4: Intermediate - Shortest Path

13. ✅ **Shortest Path in Binary Matrix** (LeetCode 1091)
14. ✅ **Minimum Number of Vertices to Reach All Nodes** (LeetCode 1557)
15. ✅ **All Paths From Source to Target** (LeetCode 797)
16. ✅ **Keys and Rooms** (LeetCode 841)

### Level 5: Intermediate - Cycle Detection

17. ✅ **Course Schedule** (LeetCode 207) - Detect cycle in directed graph
18. ✅ **Course Schedule II** (LeetCode 210) - Topological sort
19. ✅ **Redundant Connection** (LeetCode 684) - Union-Find

### Level 6: Advanced - Matrix as Graph

20. ✅ **Number of Islands** (LeetCode 200)
21. ✅ **Max Area of Island** (LeetCode 695)
22. ✅ **Surrounded Regions** (LeetCode 130)
23. ✅ **Rotting Oranges** (LeetCode 994)
24. ✅ **Pacific Atlantic Water Flow** (LeetCode 417)

### Level 7: Advanced - Complex Problems

25. ✅ **Network Delay Time** (LeetCode 743) - Dijkstra's
26. ✅ **Cheapest Flights Within K Stops** (LeetCode 787)
27. ✅ **Minimum Height Trees** (LeetCode 310)
28. ✅ **Graph Valid Tree** (LeetCode 261)
29. ✅ **Alien Dictionary** (LeetCode 269) - Topological sort
30. ✅ **Word Ladder** (LeetCode 127)

---

## Detailed Solutions

### Problem 1: Number of Islands (LeetCode 200)

**Difficulty:** Medium

**Problem Statement:**
Given a 2D grid of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.

**Approach:** DFS/BFS to explore each island

**Solution:**

```javascript
/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(r, c) {
    // Base cases: out of bounds or water
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") {
      return;
    }

    // Mark as visited by changing to '0'
    grid[r][c] = "0";

    // Explore all 4 directions
    dfs(r + 1, c); // down
    dfs(r - 1, c); // up
    dfs(r, c + 1); // right
    dfs(r, c - 1); // left
  }

  // Iterate through each cell
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c); // Sink the entire island
      }
    }
  }

  return count;
}

// Test
const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(grid)); // Output: 3
```

**Time Complexity:** O(m × n) where m = rows, n = cols
**Space Complexity:** O(m × n) for recursion stack in worst case

---

### Problem 2: Course Schedule (LeetCode 207)

**Difficulty:** Medium

**Problem Statement:**
There are `numCourses` courses labeled from `0` to `numCourses-1`. Given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates you must take course `bi` before course `ai`, return `true` if you can finish all courses.

**Approach:** Detect cycle in directed graph using DFS

**Solution:**

```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  // Build adjacency list
  const graph = new Map();
  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []);
  }
  for (const [course, prereq] of prerequisites) {
    graph.get(course).push(prereq);
  }

  const visiting = new Set(); // Currently in DFS path
  const visited = new Set(); // Completely processed

  function hasCycle(course) {
    if (visiting.has(course)) return true; // Cycle detected
    if (visited.has(course)) return false; // Already processed

    visiting.add(course);

    for (const prereq of graph.get(course)) {
      if (hasCycle(prereq)) return true;
    }

    visiting.delete(course);
    visited.add(course);
    return false;
  }

  // Check each course
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
}

// Test
console.log(canFinish(2, [[1, 0]])); // true
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
); // false (cycle)
```

**Time Complexity:** O(V + E)
**Space Complexity:** O(V + E)

---

### Problem 3: Clone Graph (LeetCode 133)

**Difficulty:** Medium

**Problem Statement:**
Given a reference of a node in a connected undirected graph, return a deep copy of the graph.

**Solution:**

```javascript
/**
 * function Node(val, neighbors) {
 *   this.val = val === undefined ? 0 : val;
 *   this.neighbors = neighbors === undefined ? [] : neighbors;
 * }
 */

/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
  if (!node) return null;

  const clones = new Map(); // Original node -> Clone node

  function dfs(node) {
    if (clones.has(node)) return clones.get(node);

    const clone = new Node(node.val);
    clones.set(node, clone);

    for (const neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
}
```

**Time Complexity:** O(V + E)
**Space Complexity:** O(V)

---

### Problem 4: Network Delay Time (LeetCode 743)

**Difficulty:** Medium

**Problem Statement:**
Given a network of `n` nodes and `times` array where `times[i] = [ui, vi, wi]` (directed edge from `ui` to `vi` with travel time `wi`), and a starting node `k`, return the time it takes for all nodes to receive the signal. If impossible, return -1.

**Approach:** Dijkstra's shortest path algorithm

**Solution:**

```javascript
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function networkDelayTime(times, n, k) {
  // Build adjacency list
  const graph = new Map();
  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }
  for (const [u, v, w] of times) {
    graph.get(u).push([v, w]);
  }

  // Dijkstra's algorithm
  const distances = new Map();
  const pq = [[0, k]]; // [time, node]

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [time, node] = pq.shift();

    if (distances.has(node)) continue;
    distances.set(node, time);

    for (const [neighbor, weight] of graph.get(node)) {
      if (!distances.has(neighbor)) {
        pq.push([time + weight, neighbor]);
      }
    }
  }

  if (distances.size !== n) return -1;
  return Math.max(...distances.values());
}

// Test
console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
); // 2
```

**Time Complexity:** O((V + E) log V) with proper priority queue
**Space Complexity:** O(V + E)

---

### Problem 5: Rotting Oranges (LeetCode 994)

**Difficulty:** Medium

**Problem Statement:**
In a grid, each cell can have one of three values:

- 0: empty
- 1: fresh orange
- 2: rotten orange

Every minute, fresh oranges adjacent (4-directionally) to rotten oranges become rotten. Return the minimum minutes until no fresh oranges remain. If impossible, return -1.

**Approach:** Multi-source BFS

**Solution:**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  let freshCount = 0;
  let minutes = 0;

  // Find all initial rotten oranges and count fresh ones
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        freshCount++;
      }
    }
  }

  if (freshCount === 0) return 0;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // BFS
  while (queue.length > 0) {
    const size = queue.length;
    let rottedThisMinute = false;

    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          grid[nr][nc] === 1
        ) {
          grid[nr][nc] = 2;
          freshCount--;
          queue.push([nr, nc]);
          rottedThisMinute = true;
        }
      }
    }

    if (rottedThisMinute) minutes++;
  }

  return freshCount === 0 ? minutes : -1;
}

// Test
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); // 4
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
); // -1
```

**Time Complexity:** O(m × n)
**Space Complexity:** O(m × n)

---

### Problem 6: Number of Provinces (LeetCode 547)

**Difficulty:** Medium

**Problem Statement:**
There are `n` cities. A province is a group of directly or indirectly connected cities. Given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if city `i` and city `j` are directly connected, return the total number of provinces.

**Approach:** DFS or Union-Find to count connected components

**Solution 1: DFS**

```javascript
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected) {
  const n = isConnected.length;
  const visited = new Set();
  let provinces = 0;

  function dfs(city) {
    visited.add(city);

    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (isConnected[city][neighbor] === 1 && !visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      provinces++;
      dfs(i);
    }
  }

  return provinces;
}

// Test
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
); // 3
```

**Solution 2: Union-Find**

```javascript
function findCircleNum(isConnected) {
  const n = isConnected.length;
  const uf = new UnionFind(n);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        uf.union(i, j);
      }
    }
  }

  // Count unique roots
  const roots = new Set();
  for (let i = 0; i < n; i++) {
    roots.add(uf.find(i));
  }

  return roots.size;
}
```

**Time Complexity:** O(n²) for DFS, O(n² × α(n)) for Union-Find where α is inverse Ackermann
**Space Complexity:** O(n)

---

### Problem 7: Pacific Atlantic Water Flow (LeetCode 417)

**Difficulty:** Medium

**Problem Statement:**
Given an `m x n` matrix of heights representing islands, find all cells where water can flow to both the Pacific ocean (top and left edges) and Atlantic ocean (bottom and right edges). Water flows from higher to lower or equal height cells.

**Approach:** Reverse DFS from both oceans

**Solution:**

```javascript
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic(heights) {
  if (!heights || heights.length === 0) return [];

  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

  function dfs(r, c, ocean) {
    ocean[r][c] = true;
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        !ocean[nr][nc] &&
        heights[nr][nc] >= heights[r][c]
      ) {
        dfs(nr, nc, ocean);
      }
    }
  }

  // DFS from Pacific (top and left edges)
  for (let c = 0; c < cols; c++) {
    dfs(0, c, pacific);
    dfs(rows - 1, c, atlantic);
  }

  // DFS from Atlantic (bottom and right edges)
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacific);
    dfs(r, cols - 1, atlantic);
  }

  // Find cells reachable by both oceans
  const result = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pacific[r][c] && atlantic[r][c]) {
        result.push([r, c]);
      }
    }
  }

  return result;
}

// Test
console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
```

**Time Complexity:** O(m × n)
**Space Complexity:** O(m × n)

---

### Problem 8: Word Ladder (LeetCode 127)

**Difficulty:** Hard

**Problem Statement:**
Given two words `beginWord` and `endWord`, and a dictionary `wordList`, find the length of shortest transformation sequence from `beginWord` to `endWord`, changing only one letter at a time and each transformed word must exist in `wordList`.

**Approach:** BFS to find shortest path

**Solution:**

```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]]; // [word, level]
  const visited = new Set([beginWord]);

  while (queue.length > 0) {
    const [word, level] = queue.shift();

    if (word === endWord) return level;

    // Try changing each character
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        // 'a' to 'z'
        const newChar = String.fromCharCode(c);
        const newWord = word.slice(0, i) + newChar + word.slice(i + 1);

        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, level + 1]);
        }
      }
    }
  }

  return 0;
}

// Test
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); // 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
```

**Time Complexity:** O(M² × N) where M = word length, N = wordList size
**Space Complexity:** O(M × N)

---

### Problem 9: Course Schedule II (LeetCode 210)

**Difficulty:** Medium

**Problem Statement:**
Return the ordering of courses you should take to finish all courses. If impossible, return empty array.

**Approach:** Topological sort using DFS

**Solution:**

```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  // Build adjacency list
  const graph = new Map();
  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []);
  }
  for (const [course, prereq] of prerequisites) {
    graph.get(course).push(prereq);
  }

  const visiting = new Set();
  const visited = new Set();
  const result = [];

  function dfs(course) {
    if (visiting.has(course)) return false; // Cycle detected
    if (visited.has(course)) return true;

    visiting.add(course);

    for (const prereq of graph.get(course)) {
      if (!dfs(prereq)) return false;
    }

    visiting.delete(course);
    visited.add(course);
    result.push(course);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }

  return result;
}

// Test
console.log(findOrder(2, [[1, 0]])); // [0, 1]
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
); // [0, 1, 2, 3] or [0, 2, 1, 3]
```

**Time Complexity:** O(V + E)
**Space Complexity:** O(V + E)

---

### Problem 10: Graph Valid Tree (LeetCode 261)

**Difficulty:** Medium

**Problem Statement:**
Given `n` nodes labeled from `0` to `n-1` and a list of undirected edges, check if these edges form a valid tree.

**Conditions for valid tree:**

1. No cycles
2. All nodes connected (n nodes with n-1 edges)

**Solution:**

```javascript
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
function validTree(n, edges) {
  // Tree must have exactly n-1 edges
  if (edges.length !== n - 1) return false;

  // Build adjacency list
  const graph = new Map();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }
  for (const [u, v] of edges) {
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);

    for (const neighbor of graph.get(node)) {
      if (neighbor === parent) continue; // Skip parent edge
      if (visited.has(neighbor)) return false; // Cycle detected
      if (!dfs(neighbor, node)) return false;
    }

    return true;
  }

  // Check if all nodes are connected and no cycles
  return dfs(0, -1) && visited.size === n;
}

// Test
console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
); // true
console.log(
  validTree(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ])
); // false
```

**Time Complexity:** O(V + E)
**Space Complexity:** O(V + E)

---

### Problem 11: Redundant Connection (LeetCode 684)

**Difficulty:** Medium

**Problem Statement:**
In an undirected graph, return an edge that can be removed to make it a tree. If multiple answers exist, return the last occurring edge in the input.

**Approach:** Union-Find to detect cycle

**Solution:**

```javascript
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
function findRedundantConnection(edges) {
  const n = edges.length;
  const parent = Array.from({ length: n + 1 }, (_, i) => i);

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) return false; // Already connected (cycle)

    parent[rootX] = rootY;
    return true;
  }

  for (const [u, v] of edges) {
    if (!union(u, v)) {
      return [u, v]; // This edge creates a cycle
    }
  }

  return [];
}

// Test
console.log(
  findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ])
); // [2,3]
console.log(
  findRedundantConnection([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5],
  ])
); // [1,4]
```

**Time Complexity:** O(N × α(N)) where α is inverse Ackermann
**Space Complexity:** O(N)

---

### Problem 12: All Paths From Source to Target (LeetCode 797)

**Difficulty:** Medium

**Problem Statement:**
Given a directed acyclic graph (DAG) of `n` nodes, find all possible paths from node `0` to node `n-1`.

**Approach:** DFS with backtracking

**Solution:**

```javascript
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
function allPathsSourceTarget(graph) {
  const n = graph.length;
  const target = n - 1;
  const result = [];

  function dfs(node, path) {
    if (node === target) {
      result.push([...path]);
      return;
    }

    for (const neighbor of graph[node]) {
      path.push(neighbor);
      dfs(neighbor, path);
      path.pop(); // Backtrack
    }
  }

  dfs(0, [0]);
  return result;
}

// Test
console.log(allPathsSourceTarget([[1, 2], [3], [3], []])); // [[0,1,3],[0,2,3]]
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])); // [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
```

**Time Complexity:** O(2^V × V) - exponential due to all paths
**Space Complexity:** O(V)

---

### Problem 13: Minimum Height Trees (LeetCode 310)

**Difficulty:** Medium

**Problem Statement:**
Given a tree of `n` nodes, return a list of all root labels that result in minimum height trees.

**Approach:** Trim leaves layer by layer (reverse topological sort)

**Solution:**

```javascript
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findMinHeightTrees(n, edges) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  // Build adjacency list and degree count
  const graph = new Map();
  const degree = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (const [u, v] of edges) {
    graph.get(u).push(v);
    graph.get(v).push(u);
    degree[u]++;
    degree[v]++;
  }

  // Start with all leaf nodes (degree = 1)
  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) leaves.push(i);
  }

  let remaining = n;

  // Trim leaves until 1 or 2 nodes remain (the centers)
  while (remaining > 2) {
    remaining -= leaves.length;
    const newLeaves = [];

    for (const leaf of leaves) {
      for (const neighbor of graph.get(leaf)) {
        degree[neighbor]--;
        if (degree[neighbor] === 1) {
          newLeaves.push(neighbor);
        }
      }
    }

    leaves = newLeaves;
  }

  return leaves;
}

// Test
console.log(
  findMinHeightTrees(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ])
); // [1]
console.log(
  findMinHeightTrees(6, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ])
); // [3,4]
```

**Time Complexity:** O(V)
**Space Complexity:** O(V)

---

## Practice Tips

1. **Start with graph representation** - Master building adjacency lists and matrices
2. **Understand BFS vs DFS** - Know when to use each
3. **Visualize the graph** - Draw it out on paper
4. **Pattern recognition:**
   - Shortest path (unweighted) → BFS
   - Detect cycles → DFS with color marking
   - Topological sort → DFS or Kahn's algorithm
   - Shortest path (weighted) → Dijkstra's
   - MST → Prim's or Kruskal's
   - Connected components → Union-Find or DFS
5. **Grid as graph** - Treat 2D matrices as implicit graphs
6. **Time complexity** - Most graph algorithms are O(V + E)

---

## Additional Resources

- **Books:**
  - "Introduction to Algorithms" (CLRS) - Chapter on Graphs
  - "Algorithm Design Manual" by Skiena
- **Online:**
  - NeetCode Graph Playlist
  - William Fiset's Graph Theory YouTube Series
  - Visualgo.net for algorithm visualization
- **Practice Platforms:**
  - LeetCode (Graph tag)
  - HackerRank Graph Theory
  - Codeforces

---

**Happy Learning! 🚀**

Practice consistently, and you'll master graphs in no time!
