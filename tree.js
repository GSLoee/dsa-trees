/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  sum(){
    let sum = 0
    let currentStack = [this]
    while (currentStack.length){
      let current = currentStack.pop()
      sum += current.val
      for(let child of current.children){
        currentStack.push(child)
      }
    }  
    return sum
  }
  sumOfEvenNum(){
    let sum = 0
    let currentStack = [this]
    while (currentStack.length){
      let current = currentStack.pop()
      if(current.val % 2 === 1){
        sum += current.val
      }
      for(let child of current.children){
        currentStack.push(child)
      }      
    }
    return sum
  }
}


class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    return this.root.sum()  
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    return this.root.sumOfEvenNum()
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0; 

    const toVisitQueue = [this.root]
    let sum = 0

    while(toVisitQueue.length){
      const current = toVisitQueue.shift();
      if (current.val > lowerBound){
        sum += current.val
      }
      for (let child of current.children){
        toVisitQueue.push(child)
      }
    }
    return sum
  }
}

module.exports = { Tree, TreeNode };
