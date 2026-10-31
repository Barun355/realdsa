/**
 * 
 * A directed graph is a collection of vertices and edges, where the edges have a direction.
 * 
 * This class represents a directed graph using an adjacency list & weighted edges.
 */
class DirectGraph {
    
    constructor() {
        this.adj = {}
    }


    /**
     * Add a vertice to the graph.
     * @param {Array<number|string>} vertices - 
     * The vertices to add to the graph.
     * Example: [0, 1, 2, 3] or ['A', 'B', 'C', 'D']
     * 
     * @param {Array<[number|string, number|string, number]>} edges - 
     * The edges to add to the graph.
     * Example: [[0, 1, 5], [1, 2, 3], [2, 3, 1]] or [['A', 'B', 5], ['B', 'C', 3], ['C', 'D', 1]]
     * 
     * @returns {void}
     */
    addVertices(vertices, edges) {

        // Check if the edges are valid and contains only vertices in the graph
        for (const [src, dest] of edges) {
            if (!vertices.includes(src) || !vertices.includes(dest)) {
                throw new Error('Invalid edge: Edge contains a vertex that is not in the graph')
            }
        }

        // Add the vertices to the graph
        for (const vertex of vertices) {
            if (!this.adj[vertex]) {
                this.adj[vertex] = []
            }
        }

        // Add the edges to the graph
        for (const [src, dest, weight] of edges) {
            this.adj[src].push([dest, weight])
        }
    }

    /**
     * Print the adjacency list of the graph.
     * @returns {void}
     */
    print() {
        console.log('Adjacency list (directed, unweighted, ' + this.adj.size + ' vertices):');
        
        for (const vertex in this.adj) {
            console.log(`${vertex} : (${this.adj[vertex].join(' ')})`);
        }
    }
}

export default DirectGraph;