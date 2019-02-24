function copyObject(obj){
    var newArr = {};
    for (key in obj){
        newArr[key] = obj[key];
    }
    return newArr;
}

function Alist(arr){

        this.arr=[];
        this.length = 0;
        if (arr) {
            this.arr=[arr];
            ++this.length;    
        }
        

        this.push = function(item){

            this.arr[this.length]=item;
            this.length++;
        }

        this.pop = function (){
            var tempArr = this.arr[this.length-1];
            --this.length;
            this.arr.length = this.length;
            return tempArr;
        }

        this.shift = function(){
            
            var tempArr = [];

                for (var i = 0; i < this.length ; i++){

                    var tempArr = this.arr[ 0 ];
                    this.arr[ i ] = this.arr[ i + 1 ];
                    
                }
                      
            this.length--; 
            this.arr.length = this.length;
            return tempArr;
        }

        this.unshift = function(item){
            for (var i = 0; i < this.length ; i++){

                this.arr[ this.length - i ] = this.arr[this.length - 1 - i];

            }
            
            this.arr[0] = item;
            this.arr;
            this.length++; 
        }

        this.remove = function(index){
            let removedValue = this.arr[index];
            let tempArr =[];    
            for ( let i = index + 1 ; i <  this.length; ++ i ){
                 tempArr.push( this.arr[ i ] ) ;
                
            }
            this.length = index;
            this.arr.length = this.length;
            for ( let i = 0 ; i < tempArr.length ; ++ i ){
                newObj.push(tempArr[i]);
            }
            return removedValue;
        }

        this.some = function (colback){
                for ( let i = 0; i < this.length; ++i  ){
                    if (colback(this.arr[i])) 
                    return true;
                }
             return false;   
        }

        this.every = function (colback){
           
            let tempFlag = true;

            for ( let i = 0; i < this.length; ++i  ){
                if  ( !colback( this.arr[i] ) ) {
                tempFlag = false;
                return tempFlag;
                }
            }

           return tempFlag;   
        }

        this.splice =  function(index, forDel) {
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
                    
                    // console.log(firstPart);
                    // console.log(lastPart);
                    
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
                // console.log(removeArr);
        }

        this.isArray = function(){

            return true;

        }
}

var newObj = new Alist(25);
        newObj.push(11);
        newObj.pop();
        newObj.push('tert');
        newObj.shift();
        newObj.unshift(65);
        newObj.unshift(77);
        newObj.unshift('uuuuu');
        newObj.unshift('lalla');
        newObj.unshift('11111');
        newObj.unshift('tttt');
        newObj.unshift(8080);
        newObj.unshift(543543);
        newObj.unshift(876);
        console.log(newObj.remove(3));
        console.log(newObj.some(function(a){ 
            if (a == 'tttt') 
            return true;
            else false; 
        }));
        console.log(newObj.every(function(a){ 
            if (a == 'tttt') 
            return true; 
        }));
        console.log(newObj.arr);
        newObj.splice(3,3,'dfsd','cvcvvvv');
        
console.log(newObj);