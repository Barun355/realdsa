import DirectGraph from "./directed-graph.js";
import UnDirectGraph from "./undirected-graph.js";


// const graph = new DirectGraph();
// graph.addVertices([0, 1, 2, 3], [[0, 1, 10], [1, 2, 5], [3, 2, 6]])
// graph.print()

const undirectedGraph = new UnDirectGraph()
undirectedGraph.addVertices([0, 1, 2, 3], [[0, 1, 10], [1, 2, 5], [3, 2, 6]])
undirectedGraph.print()