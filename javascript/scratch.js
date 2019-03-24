function Tree() {

  this.maxPathLength = 0;
  this.root = null;

  function TreeNode(lChild, rChild) = {
    this.lChild = lChild;
    this.rChild = rChild;
    if (!lChild) {
      this.leftDepth = 0;
      this.rightDepth = rChild.depth + 1;
    } else if (!rChild) {
      this.rightDepth = 0;
      this.leftDepth = lChild.depth + 1;
    } else {
      this.leftDepth = Math.max(lChild.leftDepth, rChild.leftDepth) + 1;
      this.rightDepth = Math.max(lChild.leftDepth, rChild.leftDepth) + 1;;
    }
  }

  function buildTree() {
    this.root = TreeNode(
      TreeNode(TreeNode(null, null),
               TreeNode(null, null)),
      TreeNode(null, TreeNode(null,
                              TreeNode(null,
                                       TreeNode(null, null)))),
    );
    
  }

  function maxDepth(node) {
    return Math.max(node.lChild.leftDepth, node.rightDepth) + 1;
  }

  function traverse() {
    var maxLDepth = maxDepth(root.lChild);
    var maxRDepth = maxDepth(root.rChild);
    
    this.maxPathLength = Math.max(maxPathLength, maxLDepth + maxRDepth);
  }

  function getMaxPathLength() {
    traverse();
    return this.maxPathLength;
  }

}

var t = Tree();
t.getMaxPathLength();



function maxDepth(node) {
  if (!node) {
    return 0;
  }
  if (!node.lChild) {
    return maxDepth(node.rChild) + 1;
  }
  if (!node.rChild) {
    return maxDepth(node.lChild) + 1;
  }
  return math.Max(maxDepth(node.rChild), maxDepth(node.lChild)) + 1;
}

