#include <iostream>
#include <vector>

// Undirected, unweighted graph stored as an adjacency list.
// Each vertex maps to a list of neighboring vertices.
class UndirectedGraph {
    int vertexCount;
    std::vector<std::vector<int>> adj;

public:
    explicit UndirectedGraph(int n) : vertexCount(n), adj(n) {}

    // Because the graph is undirected, an edge u--v is stored both ways.
    void addEdge(int u, int v) {
        if (u < 0 || v < 0 || u >= vertexCount || v >= vertexCount) {
            std::cerr << "Invalid edge: " << u << " -- " << v << '\n';
            return;
        }
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    void print() const {
        std::cout << "Adjacency list (undirected, unweighted, "
                  << vertexCount << " vertices):\n";
        for (int u = 0; u < vertexCount; ++u) {
            std::cout << u << " : ";
            for (int v : adj[u]) {
                std::cout << v << ' ';
            }
            std::cout << '\n';
        }
    }
};

int main() {
    // 4 vertices: 0, 1, 2, 3
    // 3 undirected unweighted edges: 0--1, 1--2, 2--3
    UndirectedGraph g(4);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 3);
    g.print();
    return 0;
}
