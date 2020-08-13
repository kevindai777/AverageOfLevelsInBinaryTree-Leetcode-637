//Objective is to find the average in each level of a binary tree

class Node {
    constructor(left = null, right = null, val) {
      this.val = val
      this.left = left
      this.right = right
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that gets the sum of all values in each level first then
//finds the average afterwards

let result = []
    
function bfs(node, level) {
    if (!node) {
        return
    }
    
    if (!result[level]) {
        result[level] = []
    }
    result[level].push(node.val)
    
    bfs(node.left, level + 1)
    bfs(node.right, level + 1)
} 
bfs(tree.root, 0)

for (let i = 0; i < result.length; i++) {
    result[i] = result[i].reduce((sum, curr) => sum + curr) / result[i].length
}
    
return result