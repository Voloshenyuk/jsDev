function Node(value, next) {
    this.next = next;    
    this.value = value;

}

function LList0() {
    this.root = null;
    this.last = null;
    this.length = 0;
    this.unshift = function (value) {
        var e = new Node(value, this.root, null)
        if(this.root) {
            this.root.prev = e;
            this.length++;

        } else {
            this.last = e;
            this.length++;

        }
        this.root = e;
    }

    this.shift = function () {
        
        if(this.root) {
            if (this.root.next == null) {
                this.root = null;
                this.last = null;
                return;
            }    
            this.root = this.root.next;
            this.root.prev = null;
            this.length--;

        } else {
            
            console.log('удаление из пустого списка');

        }
        
    } 

    this.push = function (value) {
        var e = new Node(value, null)
        if(this.last) {
            e.prev = this.last;
            this.last.next = e;
            this.length++;

        } else {
            this.last = e;
            this.length++;

        }
        this.last = e;
    }

    this.pop = function () {
        
        if(this.last) {
             if (this.root.next == null) {
                this.root = null;
                this.last = null;
                return;
            }

            this.last.prev.next = null;
            this.length--;

        } else {
            
            console.log('удаление из пустого списка');
            return;
        }
        this.last = this.last.prev;
    }


 
    this.some = function(colback){
        
        let current = this.root;
        
        while (current != null) {

            if (colback(current.value) ) {
                
                return  true;

            }   else {

                   current = current.next;

                }   

        }

     return false;   

    }





    this.every = function(colback){
            
            let current = this.root;
            let tempFlag = true;

            while (current != null){
                if  ( !colback(current.value) ) {
               
                    tempFlag = false;
                    return tempFlag;
                }
                current = current.next;
            }

           return tempFlag;   
    }



    this.isLinkedList = function(){
        
        return true;

    }

    this.remove = function(index){
        var i = 1;
        let current = this.root;
        let prevDel = null;

        while( i < index - 1 ){
            current = current.next;
            i++;
        }
        prevDel = current;

        current = current.next;
        prevDel.next = current.next;
        current = current.next;
        current.prev = prevDel;
        this.length--;

    }



}



var linkObj = new LList0();
console.log(linkObj);
linkObj.unshift(11111);
linkObj.unshift(22222);
linkObj.unshift(33333);
linkObj.unshift(44444);
linkObj.unshift(5555);
linkObj.unshift(6666);
linkObj.remove(3);
// linkObj.pop();
// linkObj.shift();
// linkObj.shift();
// linkObj.shift();
// linkObj.pop();

console.log(linkObj.some(function(a){ 
    if (a == 111) 
    return true; 
    else false;
}));

console.log(linkObj.every(function(a){ 
    if (a > 0)  
    return true; 
    else false;
}));
