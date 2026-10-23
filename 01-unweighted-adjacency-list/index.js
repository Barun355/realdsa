import DirectedGraph from './directed-graph.js';
import UndirectedGraph from './undirected-graph.js';

// const directedGraph = new DirectedGraph();
// directedGraph.addVertices([0, 1, 2, 3], [[0, 1], [1, 2], [2, 0], [3, 2]]);
// directedGraph.print();

const undirectedGraph = new UndirectedGraph();
undirectedGraph.addVertices(['A', 'B', 'C', 'D'], [['A', 'B'], ['B', 'C'], ['C', 'D']]);
undirectedGraph.print();
