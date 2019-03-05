function submit(){
    
    var jsn = document.getElementById('inp').value;
    var parent = document.getElementById('vivod');
    createTable(jsn, parent, 9, 4);
    // var table = document.createElement('table');
    // var tr1 = document.createElement('tr'); 
    alert(jsn);
}

function createTable(Myobj, parent,rows, cols) {
    var table = document.createElement('table');
    var tr1 = document.createElement('tr'); 
    
//заполнение строки tr ячейками th 
for (var k = 0; k < cols; k++) { 
    var th = document.createElement('th'); 
    tr1.appendChild(th); 
} 
table.appendChild(tr1); 
//добавление tbody 
var tempMyobj = JSON.parse(Myobj); 
Myobj = tempMyobj;
for (var i=0; i< rows-1; i++) { 
    var tr = document.createElement('tr'); 
for (var j = 0; j < cols; j++) { 
    var td = document.createElement('td'); 
if(j===0) td.innerHTML = Myobj[i].id; 
else if(j===1) td.innerHTML = Myobj[i].name; 
else if(j===2) td.innerHTML = Myobj[i].price; 
else td.innerHTML = Myobj[i].quantity; 
tr.appendChild(td); //добавить td в tr 
} 
table.appendChild(tr); //добавить tr в table 
} 
//добавление всего table 
parent.appendChild(table); 
}  
    