import UndirectedGraph from "./undirected-graph.js";
import DirectGraph from "./directed-graph.js"

// const undirectedGraph = new UndirectedGraph([0, 1, 2, 3]);
// undirectedGraph.addEdges([[0, 1, 20], [1, 2, 30], [2, 3, 50]]);
// undirectedGraph.print();


const directedGraph = new DirectGraph([0, 1, 2, 3]);
directedGraph.addEdges([[0, 1, 20], [1, 2, 30], [3, 2, 50]]);
directedGraph.print();