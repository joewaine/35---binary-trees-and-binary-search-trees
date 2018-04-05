# 35 - Binary Search Tree

- **Author**: Steve Carpenter
- **Author**: Joe Waine
- **Version**: 1.0.0

## Overview
This is a Binary Search Tree library meant for storing numbers. Users of this library can import the code, create, modify
and analyze their Binary Search Trees using the simple interface.

## Getting Started
- Clone the repository to your local directory from [here]
(https://github.com/stevegcarpenter/35---binary-trees-and-binary-search-trees)
- Install all the necessary modules using the `npm install` command
- Import the library by importing the `./lib/bst.js` file

The following is a simple set of examples demonstrating how to use the code

#### Create a Binary Search Tree
```js
  // Build the following tree
  //                       7
  //
  //               6
  //
  //                       5
  //
  //         4
  //
  //                       3
  //
  //               2
  //
  //                       1
  //
  const TreeNode = require('/path/to/bst').TreeNode;
  const BinarySearchTree = require('/path/to/bst').BinarySearchTree;

  let nodes = [
    new TreeNode(4),
    new TreeNode(2),
    new TreeNode(1),
    new TreeNode(3),
    new TreeNode(6),
    new TreeNode(7),
    new TreeNode(5),
  ];
  let bst = new BinarySearchTree();
  for (let node of nodes) {
    bst.insert(node);
  }
```

#### Find a node by value
Finding a node is done using the `find()` method for the binary search tree. It will
return false if the node doesn't exist or return the node itself if it was found.
```js
  let node = bst.find(5)

  // result on the previous tree should log { value: 5, left: null, right: null }
  // if the node does not exist it will be null
  console.log(node);
```

#### Remove a node by value
Removing nodes from the binary search tree can be done by simply calling the `remove()`
method and passing in the requested value to remove. If the value doesn't exist in the
tree, false will be returned and nothing will be done. If the value is found present
in the tree, it will be removed and the tree will be adjusted to retain its binary
search tree structure.
```js
  let result = bst.remove(99);

  // for non existant items, false will be returned
  // on a successful removal, true is returned
  console.log(result);
```

#### Pre order traversal
The pre order traversal method `preOrderTraversal()` accepts a callback to be
applied to the value of each node. This examples uses the tree created previously
and passes a callback which pushes all the values into an array. The resulting
array will represent a pre order traversal through the tree.

```js
 let values = [];
 bst.preOrderTraversal(item => values.push(item));

 // values should equal: [4, 2, 1, 3, 6, 5, 7]
 console.log(values);
```

#### In order traversal
The in order traversal operates identically to the pre order in that it accepts
a callback which is applied to the values of each node. The difference is that
it traverses the binary search tree in an in order fashion.
```js
 let values = [];
 bst.inOrderTraversal(item => values.push(item));

 // values should equal: [1, 2, 3, 4, 5, 6, 7]
 console.log(values);
```

#### Post order traversal
The post order traversal is again very similar to the pre and in order traversals
except for the order the tree is procecssed. It also accepts a callback which is
applied to all the values of the nodes.
```js
 let values = [];
 bst.postOrderTraversal(item => values.push(item));

 // values should equal: [1, 3, 2, 5, 7, 6, 4]
 console.log(values);
```
#### Print tree
Using the `printTree()` method of the binary search tree you can print the tree
in a sideways tree-like layout.
```js
  // print it
  bst.printTree();

  // on the above built tree, it would be displayed in the console as follows
  //                       7
  //
  //               6
  //
  //                       5
  //
  //         4
  //
  //                       3
  //
  //               2
  //
  //                       1
  //
```

#### Check if a tree is balanced
Once a tree has been built, the `isBalanced()` method can be called on it to
determine whether it is a valid binary search tree or not. It verifies that the
shallowest leaf node is no more then one level beneath the deepest leave node.
```js
  // check if the tree is balanced
  let balanced = bst.isBalanced();

  // balanced will be true or false
  console.log(balanced);
```


## Architecture
- [JavaScript](https://www.javascript.com/)
- [npm](https://npmjs.org/)
- [NodeJS](https://nodejs.org)

## Dependencies
```JSON
  "devDependencies": {
    "eslint": "^4.18.1",
    "jest": "^22.4.0"
  }
```

## Change Log
```
2018-03-02 Adding all dotfiles
2018-03-02 Adding code written during class
2018-03-02 Adding tests for TreeNode and some scaffolded tests
2018-03-02 Adding npm package files
2018-03-02 Modified the TreeNode constructor not to take left and right children
2018-03-02 Added some tests to the BinarySearchTree constructor
2018-03-02 More tests for the BinarySearchTree constructor
2018-03-02 Added insert and _insert, find, and _find methods to BST
2018-03-02 Tests added for insert and _insert, find, and _find methods to BST
2018-03-02 Fixed bugs with the inOrderTraversal and got the test working
2018-03-02 Fixed missing declaration
2018-03-02 Renamed the bst test file
2018-03-02 Two more invalid tests for the inOrderTraversal
2018-03-03 Added some tests for the insert method and added print function
2018-03-03 Added more tests for the insert and various traversals
2018-03-03 Added some type checking to the find method
2018-03-03 Added tests for the find method
2018-03-03 Adding modification to test code
2018-03-03 BST remove, _findMinimum, and _remove methods done
2018-03-03 Tests for BST remove, _findMinimum, and _remove done
2018-03-03 Implemented isBalanced and _isBalanced methods
2018-03-03 Tests for isBalanced method returning true/valse correctly
2018-03-03 Tests for _isBalanced returning shallowest and deepest path values
```