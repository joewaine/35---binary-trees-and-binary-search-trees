'use strict';

const bst = module.exports = {};

bst.TreeNode = class {
  constructor(value) {
    if (typeof value !== 'number')
      throw new TypeError('TreeNode value must be a number');

    this.value = value;
    this.right = this.left = null;
  }
};

bst.BinarySearchTree = class {
  constructor(root=null) {
    if (root && !(root instanceof bst.TreeNode))
      throw new TypeError('root must be a TreeNode');
    if (root && typeof root.value !== 'number')
      throw new TypeError('value on root must be a number');

    this.root = root;
  }

  insert(node) {
    if (!(node instanceof bst.TreeNode))
      throw new TypeError('node must be a TreeNode');
    if (typeof node.value !== 'number')
      throw new TypeError('node.value must be a number');
    // special case of empty bst
    if (this.root === null)
      this.root = node;
    else
      this._insert(this.root,node);
  }

  // insert helper
  _insert(root, node){
    if (node.value < root.value) {
      // go left when value < root.value
      if (!root.left)
        root.left = node;
      else
        this._insert(root.left, node);
    } else {
      // go right when value > root.value
      if (!root.right)
        root.right = node;
      else
        this._insert(root.right, node);
    }
  }

  find(value) {
    if (typeof value !== 'number')
      throw new TypeError('value to find must be a number');

    return this._find(this.root, value);
  }

  // find helper
  _find(root, value){
    if (!root)
      return null;
    else if (root.value === value)
      return root;
    else if (root.value < value)
      return this._find(root.right, value);
    else
      return this._find(root.left, value);
  }

  inOrderTraversal(cb) {
    if (!this.root) return null;
    if (typeof cb !== 'function')
      throw new TypeError('cb must be a function');

    this._inOrderTraversal(this.root, cb);
  }

  // inOrderTraversal helper
  _inOrderTraversal(root, cb) {
    if (!root) return null;

    // visit left
    this._inOrderTraversal(root.left, cb);
    // visit root
    cb(root.value);
    // visit right
    this._inOrderTraversal(root.right, cb);
  }

  preOrderTraversal(cb) {
    if (!this.root) return null;
    if (typeof cb !== 'function')
      throw new TypeError('cb must be a function');

    this._preOrderTraversal(this.root, cb);
  }

  // preOrderTraversal helper
  _preOrderTraversal(root, cb) {
    if (!root) return null;

    // visit root
    cb(root.value);
    // visit left
    this._preOrderTraversal(root.left, cb);
    // visit right
    this._preOrderTraversal(root.right, cb);
  }

  postOrderTraversal(cb) {
    if (!this.root) return null;
    if (typeof cb !== 'function')
      throw new TypeError('cb must be a function');

    this._postOrderTraversal(this.root, cb);
  }

  // postOrderTraversal helper
  _postOrderTraversal(root, cb) {
    if (!root) return null;

    // visit left
    this._postOrderTraversal(root.left, cb);
    // visit right
    this._postOrderTraversal(root.right, cb);
    // visit root
    cb(root.value);
  }

  printTree() {
    if (!this.root)
      return;

    this._printTree(this.root, '');
  }

  // print tree helper function
  _printTree(root, space) {
    if (!root) return;

    // Increase distance between levels
    space += '          ';

    // Process right child first
    this._printTree(root.right, space);

    // Print current node after space count
    console.log(`\n${space}${root.value}`);

    // Process left child
    this._printTree(root.left, space);
  }
};
