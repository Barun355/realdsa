import DirectedGraph from './directed-graph.js';
import UndirectedGraph from './undirected-graph.js';

const directedGraph = new DirectedGraph([0, 1, 2, 3]);
directedGraph.addEdges([[0, 1], [1, 2], [2, 0], [3, 2]]);
directedGraph.print();

const undirectedGraph = new UndirectedGraph([0, 1, 2, 3]);
undirectedGraph.addEdges([[0, 1], [1, 2], [2, 3]]);
undirectedGraph.print();