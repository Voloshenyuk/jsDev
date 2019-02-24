function ListFirst(){
    
}

ListFirst.prototype.push = function(){

}

ListFirst.prototype.pop = function(){
    
}

ListFirst.prototype.shift = function(){
    
}

ListFirst.prototype.unshift = function(){
    
}

ListFirst.prototype.remove = function(){
    
}

ListFirst.prototype.some = function(){
    
}

ListFirst.prototype.every = function(){
    
}


function Alist(arr){
    this.arr=[];
    this.length = 0;
    if (arr) {
        this.arr=[arr];
        ++this.length;    
    }
}

Alist.prototype = Object.create(ListFirst.prototype);
Alist.prototype.constructor = Alist;

Alist.prototype.push = function(item){

    this.arr[this.length]=item;
    this.length++;
}

Alist.prototype.pop = function (){
    var tempArr = this.arr[this.length-1];
    --this.length;
    this.arr.length = this.length;
    return tempArr;
}

Alist.prototype.shift = function(){
            
    var tempArr = [];

        for (var i = 0; i < this.length ; i++){

            var tempArr = this.arr[ 0 ];
            this.arr[ i ] = this.arr[ i + 1 ];
            
        }
              
    this.length--; 
    this.arr.length = this.length;
    return tempArr;
}

Alist.prototype.unshift = function(item){
    for (var i = 0; i < this.length ; i++){

        this.arr[ this.length - i ] = this.arr[this.length - 1 - i];

    }
    
    this.arr[0] = item;
    this.length++; 
}

Alist.prototype.remove = function(index){
    let removedValue = this.arr[index];
    let tempArr =[];    
    for ( let i = index + 1 ; i <  this.length; ++ i ){
         tempArr.push( this.arr[ i ] ) ;
        
    }
    this.length = index;
    this.arr.length = this.length;
    for ( let i = 0 ; i < tempArr.length ; ++ i ){
        this.arr.push(tempArr[i]);
    }
    this.length = this.arr.length;
    return removedValue;
}

Alist.prototype.some = function (callback){
    for ( let i = 0; i < this.length; ++i  ){
        if (callback(this.arr[i])) 
        return true;
    }
 return false;   
}

Alist.prototype.every = function (callback){
           
    let tempFlag = true;

    for ( let i = 0; i < this.length; ++i  ){
        if  ( !callback( this.arr[i] ) ) {
            tempFlag = false;
            return tempFlag;
        }
    }

   return tempFlag;   
}

Alist.prototype.splice = function(index, forDel) {
            
    if (!forDel) forDel = this.length - index;
        let removeArr = [];
        for(let i = index ; i < index + forDel ; ++i  ){

            removeArr.push(this.arr[i]);

        }

        for(let y = i = index ; i < index + forDel ; ++i  ){
            this.remove(y);
        }
    
        if (arguments.length > 2) {
            let firstPart = [];
            let lastPart = [];

            for(  let i = 0 ; i < index ; i++  ){
                firstPart.push(this.arr[i]);
            }
        
            for ( let i = index ; i < this.length ; i++ ){
                lastPart.push(this.arr[i]);
            }
        
        
        
            for (let i = 2 ; i < arguments.length; ++i ){
                firstPart.push(arguments[i]); 
            }    

            for( let i = 0 ; i < lastPart.length ; ++i  ){
                firstPart.push(lastPart[i]);
            }

            for (let i = 0 ; i < firstPart.length  ; ++i ){
                this.arr[i] = firstPart[i] ;
            }
        }
}

Alist.prototype.isArray = function(value){
                    // console.log(value instanceof String);        
                    return (value instanceof Alist);        
             }
    











// let newarr1 = new Alist(15);
// let newarr2 = new Alist(15);
// console.log (newarr1.isArray(newarr2));
// newarr.push(111111);
// newarr.push(222222);
// newarr.push(333333);
// newarr.push(444444);
// newarr.push('dasdasd');
// newarr.push(555555);
// newarr.push(666666);
// newarr.push(777777);

// console.log(newarr);

// newarr.unshift('qqqqqqqqqqqqqqqqq');

// console.log(newarr);













function Linklist() {
    this.root = null;
    this.last = null;
    this.length = 0;

}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;    
    this.prev = prev;
}

Linklist.prototype = Object.create(ListFirst.prototype);
Linklist.prototype.constructor = Linklist;
Linklist.prototype.unshift = function (value) {
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

Linklist.prototype.shift = function () {
        
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

Linklist.prototype.push = function (value) {
    var e = new Node(value, null)
    if(this.last) {
        e.prev = this.last;
        this.last.next = e;
        this.length++;

    }  else {

        this.length++;
        this.root = e;

       }
    this.last = e;
}


Linklist.prototype.pop = function () {
        
    if(this.last) {

        if (this.root.next == null) {
            this.root = null;
            this.last = null;
            return;
        }

        this.last.prev.next = null;
        this.length--;

    }  else {
        
            console.log('удаление из пустого списка');
            return;
       }
    this.last = this.last.prev;
}

Linklist.prototype.some = function(callback){
        
    let current = this.root;
    
    while (current != null) {

        if (callback(current.value) ) {
            
            return  true;

        }   else {

               current = current.next;

            }   

    }

    return false;   

}

Linklist.prototype.every = function(callback){
            
    let current = this.root;
    let tempFlag = true;

    while (current != null){
        if  ( !callback(current.value) ) {
       
            tempFlag = false;
            return tempFlag;
        }
        current = current.next;
    }

    return tempFlag;   
}

Linklist.prototype.isLinkedList = function(item){
        
     return( item instanceof Linklist) ;

}

Linklist.prototype.remove = function(index){
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

Linklist.prototype.splice = function (){


}

//************************************* */

function ListSecond(){

}
ListSecond.prototype = Object.create(ListFirst.prototype);
ListSecond.prototype.constructor = ListSecond;
ListSecond.prototype.toString = function(){

}

ListSecond.prototype.sort = function(){
    
}

ListSecond.prototype.toArrayList = function(){
    
}

ListSecond.prototype.toLinkedList = function(){
    
}

function AlistSecond(arr){
    this.arr=[];
    this.length = 0;
    if (arr) {
        this.arr=[arr];
        ++this.length;    
    }
}

AlistSecond.prototype = Object.create(ListSecond.prototype);
AlistSecond.prototype.constructor = AlistSecond;

AlistSecond.prototype.push = function(item){

    this.arr[this.length]=item;
    this.length++;
    return this.toString();
}

AlistSecond.prototype.pop = function (){
    var tempArr = this.arr[this.length-1];
    --this.length;
    this.arr.length = this.length;
    return tempArr;
}

AlistSecond.prototype.shift = function(){
            
    var tempArr = [];

        for (var i = 0; i < this.length ; i++){

            var tempArr = this.arr[ 0 ];
            this.arr[ i ] = this.arr[ i + 1 ];
            
        }
              
    this.length--; 
    this.arr.length = this.length;
    return tempArr;
}

AlistSecond.prototype.unshift = function(item){
    for (var i = 0; i < this.length ; i++){

        this.arr[ this.length - i ] = this.arr[this.length - 1 - i];

    }
    
    this.arr[0] = item;
    this.length++; 
    return this.toString();
}

AlistSecond.prototype.remove = function(index){
    let removedValue = this.arr[index];
    let tempArr =[];    
    for ( let i = index + 1 ; i <  this.length; ++ i ){
         tempArr.push( this.arr[ i ] ) ;
        
    }
    this.length = index;
    this.arr.length = this.length;
    for ( let i = 0 ; i < tempArr.length ; ++ i ){
        this.arr.push(tempArr[i]);
    }
    this.length = this.arr.length;
    return removedValue;
}

AlistSecond.prototype.some = function (callback){
    for ( let i = 0; i < this.length; ++i  ){
        if (callback(this.arr[i])) 
        return true;
    }
 return false;   
}

AlistSecond.prototype.every = function (callback){
           
    let tempFlag = true;

    for ( let i = 0; i < this.length; ++i  ){
        if  ( !callback( this.arr[i] ) ) {
            tempFlag = false;
            return tempFlag;
        }
    }

   return tempFlag;   
}

AlistSecond.prototype.splice = function(index, forDel) {
    
    let tempArr = [];
    if (!forDel) forDel = this.length - index;
        let removeArr = [];
        for(let i = index ; i < index + forDel ; ++i  ){

            removeArr.push(this.arr[i]);

        }

        for(let y = i = index ; i < index + forDel ; ++i  ){
        
            tempArr.push(this.remove(y));
        }
    
        if (arguments.length > 2) {
            let firstPart = [];
            let lastPart = [];

            for(  let i = 0 ; i < index ; i++  ){
                firstPart.push(this.arr[i]);
            }
        
            for ( let i = index ; i < this.length ; i++ ){
                lastPart.push(this.arr[i]);
            }
        
            for (let i = 2 ; i < arguments.length; ++i ){
                firstPart.push(arguments[i]); 
            }    

            for( let i = 0 ; i < lastPart.length ; ++i  ){
                firstPart.push(lastPart[i]);
            }

            for (let i = 0 ; i < firstPart.length  ; ++i ){
                this.arr[i] = firstPart[i] ;
            }
        }
    return tempArr;
}

AlistSecond.prototype.isArray = function(item){
                               return( item instanceof AlistSecond) ;
                          }
    

AlistSecond.prototype.toString = function(){
                let outputString = '';
                for ( let i=0 ; i < this.length  ; i++ ){
                    if ( i === this.length - 1) {
                        outputString = outputString + this.arr[i];
                    }   else {
                            outputString = outputString + this.arr[i] + ',';
                        }
                }
        return outputString;
}

AlistSecond.prototype.sort = function(callback) {
    var n = this.arr.length;
    if (callback(this.arr[0],this.arr[1]) < 0) {
        for (var i = 0; i < n - 1; i++) {
            var min = i;
                    for (var j = i + 1; j < n; j++) {
                        if (this.arr[j] < this.arr[min]) min = j;
                    }
                    var temp = this.arr[min];
                    this.arr[min] = this.arr[i];
                    this.arr[i] = temp;
        }
    }   else {
            for (var i = 0; i < n - 1; i++) {
                var max = i;
                        for (var j = i + 1; j < n; j++) {
                            if (this.arr[j] > this.arr[max]) max = j;
                        }
                        var temp = this.arr[i];
                        this.arr[i] = this.arr[max];
                        this.arr[max] = temp;
            }            
        }  
    return this.arr;    
}

AlistSecond.prototype.toArrayList = function() {

        return this.arr;

} 


AlistSecond.prototype.toLinkList = function() {

        let tempLinkList = new LinklistSecond(); 
         for (let i = 0; i < this.arr.length; i++) {

            tempLinkList.push(this.arr[i]);

         }

      return tempLinkList;  
}

let newarr = new AlistSecond(1);
newarr.push(22);
newarr.push(10);
newarr.push(15);
newarr.push(-54);
newarr.push(-4);
newarr.push(0);


//====================================================================================



function LinklistSecond() {
    this.root = null;
    this.last = null;
    this.length = 0;

}


LinklistSecond.prototype = Object.create(ListSecond.prototype);
LinklistSecond.prototype.constructor = LinklistSecond;

LinklistSecond.prototype.unshift = function ( value ) {
    let e = new Node( value, this.root, null )
    if( this.root ) {
        this.root.prev = e;
        this.length++;

    } else {
        this.last = e;
        this.length++;

      }
    this.root = e;
    return  this.toArrayList();
};

LinklistSecond.prototype.shift = function() {
        
    if( this.root ) {
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
    return  this.toArrayList();
} 

LinklistSecond.prototype.push = function (value) {
    var e = new Node(value, null, null)
    if(this.last) {
        e.prev = this.last;
        this.last.next = e;
        this.length++;

    }  else {
        //this.last = e;
        this.length++;
        this.root = e;

       }
    this.last = e;
    return  this.toArrayList();
}


LinklistSecond.prototype.pop = function () {
        
    if(this.last) {
        if (this.root.next == null) {
            this.root = null;
            this.last = null;
            return;
        }

        this.last.prev.next = null;
        this.length--;

    }  else {
        
            console.log('удаление из пустого списка');
            return;
       }
    this.last = this.last.prev;
    return this.toArrayList();
}

LinklistSecond.prototype.some = function(callback){
        
    let current = this.root;
    
    while (current != null) {

        if (callback(current.value) ) {
            
            return  true;

        }   else {

               current = current.next;

            }   

    }

    return false;   

}

LinklistSecond.prototype.every = function(callback){
            
    let current = this.root;
    let tempFlag = true;

    while (current != null){
        if  ( !callback(current.value) ) {
       
            tempFlag = false;
            return tempFlag;
        }
        current = current.next;
    }

    return tempFlag;   
}

LinklistSecond.prototype.isLinkListSecond = function(item){
           return( item instanceof LinklistSecond) ;
}

LinklistSecond.prototype.remove = function(index){
    // var i = 0;
    let forReturn;
    if (index === 0) {
        forReturn = this.root.value;
        this.root = this.root.next;
    }   else {
            let current = this.root;
            for ( let i = 0 ; i < index - 1 ; i ++ , current = current.next ){
            }
            forReturn = current.next.value;
            current.next = current.next.next;
        }    
    this.length--;
    return forReturn;
}


LinklistSecond.prototype.toString = function() {
        let current = this.root;
        let outputString = '';

        while (current !== null) {
            if (current.next === null){
                outputString = outputString + current.value;
                current = current.next;                    
            }  else {
                outputString = outputString + current.value + ' ';
                current = current.next;
            }
            
        }

    return outputString;

}

LinklistSecond.prototype.toArrayList = function() {

        let current = this.root;
        let outputArray = [] ;
        while (current !== null) {
            outputArray.push(current.value);
            current = current.next;
        }

    return outputArray;
}


LinklistSecond.prototype.toLinkedList = function (){

            return this;

}

LinklistSecond.prototype.sort = function (){
        var n = this.length;
                for (var i = 0; i < n-1;  i++){
                    current = this.root;
                    for (var j = 0; (j < n-1-i) ; j++, current = current.next ){
                            if (current.next.value < current.value) { 
                                    var t = current.next.value;
                                    current.next.value = current.value; 
                                    current.value = t; 
                            }   
                        continue;
                    }  
                } 
         return this.toArrayList();   
}

LinklistSecond.prototype.splice = function(){

}

let newLink = new LinklistSecond();
newLink.push(23);
newLink.push(55);
newLink.push(7);
newLink.push(0);
newLink.push(41);
newLink.push(-5);
newLink.push(-45);
newLink.push(12);
 
// console.log(newLink.sort());
// console.log(newLink.toString());
console.log(newLink.remove(2));