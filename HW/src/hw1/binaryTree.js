function NodeForTree(value){
       this.value = value;
       this.left = null;
       this.right = null; 
}

function BinTree(){
        this.root = null;
}

BinTree.prototype.add = function (value){
        // var root = this.root;
        if(!this.root){
            this.root = new NodeForTree(value);
            return;
        }

        var current = this.root;
        var newNode = new NodeForTree(value);

        while (current){
            if(newNode.value < current.value ){
                if ( !current.left ){
                    current.left = newNode;
                    break;
                }   else   {
                        current = current.left;
                    } 

            }   else  {
                    if ( !current.right ){
                        current.right = newNode;
                        break;
                    }   else  {
                        current = current.right;
                    }
                }    
        }    
}

BinTree.prototype.showValue = function(node){
        if(node){
           console.log(node.value);
           this.showValue(node.left);
           this.showValue(node.right);
        }
}

BinTree.prototype.traversLeftToRight = function(node){
        if (node) {
            this.traversLeftToRight(node.left);
            console.log(node.value);
            this.traversLeftToRight(node.right);
        }   
}


BinTree.prototype.traversRightToLeft = function(node){
    if (node) {
        this.traversRightToLeft(node.right);
        console.log(node.value);
        this.traversRightToLeft(node.left);
    }   
}


BinTree.prototype.minNode = function(node){
    if (!node){
        return 0;
    } 
    if (node.left) {
        return this.minNode(node.left);
       }    
    return node.value;
}    

BinTree.prototype.maxNode = function(node){
    if (!node){
        return 0;
    } if(node.right){    
        return this.maxNode(node.right);
    }    
    return node.value;
}    

BinTree.prototype.find = function(findValue, node){
    while(node){
       if(node.value == findValue) {
           return node.value;
       }
       this.find(findValue, node.left);
       this.find(findValue, node.right);
    }
    return node.value;
};


BinTree.prototype.toString = function(node){
       let tempStr = '';
       function travers(node){
            if (node) {
                travers(node.left);
                tempStr = tempStr + node.value;
                console.log(node.value);
                travers(node.right);
            }    
       }
       travers(node) ;
       return tempStr;
        
};
  
BinTree.prototype.toArray = function(node){
    let tempArr = [];
    function travers(node){
         if (node) {
             travers(node.left);
             tempArr.push(node.value);
             console.log(node.value);
             travers(node.right);
         }    
    }
    travers(node) ;
    return tempArr;
     
};

BinTree.prototype.find = function(findValue,node){
    let result = 'do not find';
    function travers(node){
         if (node) {
             travers(node.left);
             if (findValue == node.value) {
                result = node.value;   
             }

             console.log(node.value);
             travers(node.right);
         }    
    }
    travers(node) ;
    return result;
     
};

BinTree.prototype.remove = function(findValue,node){
    function travers(node){
         if (node) {
             if (node.left){
                if (node.left.value == findValue){
                    node.left = null;
                }
             } 
             if (node.right){
                  if (node.right.value == findValue){
                     node.right = null;
                  }
             }
             travers(node.left);
             console.log(node.value);
             travers(node.right);
         }    
    }
    travers(node) ;
    return this;
     
};

BinTree.prototype.empty = function(){
    this.root = null;
};

// BinTree.prototype.find = function(findValue, node){
//             if ( (node) && (node.value !== findValue)) {
//                 this.find(findValue, node.left );
//                 // if ( node.value == findValue ){
//                     console.log(node.value);
//                     this.find(findValue, node.right);
//                 } 
//     return node.value ;  
// }

var binSearchTree = new BinTree();
binSearchTree.add(3);
binSearchTree.add(2);
binSearchTree.add(4);
binSearchTree.add(1);
binSearchTree.add(5);
binSearchTree.add(7);

// console.log(binSearchTree.root);
// console.log(binSearchTree);
// binSearchTree.traversLeftToRight(binSearchTree.root);
//binSearchTree.traversRightToLeft(binSearchTree.root);
// binSearchTree.showValue(binSearchTree.root);
//console.log(binSearchTree.maxNode(binSearchTree.root));
// console.log(binSearchTree.find( 1, binSearchTree.root));

console.log(binSearchTree.toString(binSearchTree.root));

console.log(binSearchTree.toArray(binSearchTree.root));
console.log(binSearchTree.find(8, binSearchTree.root));
console.log(binSearchTree);
console.log(binSearchTree.remove(5, binSearchTree.root));
// binSearchTree.empty();