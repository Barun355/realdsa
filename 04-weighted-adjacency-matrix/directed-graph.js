

class DirectedGraph {

    constructor(vertices) {
        this.vertices = vertices
        this.adj = Array.from({ length: vertices.length }, () => Array(vertices.length).fill(0))
    }


    addEdges(edges) {
        // Check if the edges are valid and contains only vertices in the graph
        for (const [src, dest] of edges) {
            if (!this.vertices.includes(src) || !this.vertices.includes(dest)) {
                throw new Error('Invalid edge: Edge contains a vertex that is not in the graph');
            }
        }
        
        // Add the edges to the graph
        for (const [src, dest, weight] of edges) {
            this.adj[this.vertices.indexOf(src)][this.vertices.indexOf(dest)] = weight;
        }
    }

    print() {
        console.log('Adjacency matrix (undirected, unweighted, ' + this.vertices.length + ' vertices):');
        console.log('    ' + this.vertices.join(' '));
        for (let i = 0; i < this.vertices.length; i++) {
            console.log(`${this.vertices[i]} : ${this.adj[i].join(' ')}`);
        }
    }
}

export default DirectedGraph