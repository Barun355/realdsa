
/**
 * An undirected graph is a collection of vertices and edges, where the edges have no direction.
 * This class represents an undirected graph using an adjacency matrix & unweighted edges.
 */

class UndirectedGraph {

    /**
     * @param {Array<number|string>} vertices -
     * The vertices in the graph.
     * Example: [0, 1, 2, 3] or ['A', 'B', 'C', 'D']
     */
    constructor(vertices) {
        this.vertices = vertices;
        this.adj = Array.from({ length: vertices.length }, () => Array(vertices.length).fill(0));
    }
    
    
    /**
     * Add edges to the graph.
     * @param {Array<[number|string, number|string]>} edges - 
     * The edges to add to the graph.
     * Example: [[0, 1], [1, 2], [2, 0], [3, 2]] or [['A', 'B'], ['B', 'C'], ['C', 'A'], ['D', 'C']]
     * 
     * @returns {void}
     */
    addEdges(edges) {
        
        // Check if the edges are valid and contains only vertices in the graph
        for (const [src, dest] of edges) {
            if (!this.vertices.includes(src) || !this.vertices.includes(dest)) {
                throw new Error('Invalid edge: Edge contains a vertex that is not in the graph');
            }
        }
        
        // Add the edges to the graph
        for (const [src, dest] of edges) {
            this.adj[this.vertices.indexOf(src)][this.vertices.indexOf(dest)] = 1;
            this.adj[this.vertices.indexOf(dest)][this.vertices.indexOf(src)] = 1;
        }
    }

    /**
     * Print the adjacency matrix of the graph.
     * @returns {void}
     */
    print() {
        console.log('Adjacency matrix (undirected, unweighted, ' + this.vertices.length + ' vertices):');
        console.log('    ' + this.vertices.join(' '));
        for (let i = 0; i < this.vertices.length; i++) {
            console.log(this.vertices[i] + ' : ' + this.adj[i].join(' '));
        }
    }
}

export default UndirectedGraph;