#include <iostream>
#include <vector>


class DirectedGraph {
    int vertexCount;
    std::vector<std::vector<int>> adj;

public:
    explicit DirectedGraph(int n) : vertexCount(n), adj(n) {}

    void addEdge(int f, int t) {
        if ( f < 0 && t < 0 && f > vertexCount && t > vertexCount) {
            std::cerr << "Invalid edge: " << f << " --> " << t << '\n';
            return;
        }

        adj[f].push_back(t);
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
    DirectedGraph g(4);

    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(3, 2);


    g.print();

    return 0;
}