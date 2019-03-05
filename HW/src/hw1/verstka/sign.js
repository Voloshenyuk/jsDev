function submit(){
    
    // var jsn = document.getElementById('vivod');
    // parent.appendChild('sdfsdfsd');
    // createTable(jsn, parent, 9, 4);
    // var table = document.createElement('table');
    // var tr1 = document.createElement('tr'); 
    // alert(jsn);
    // parent.appendChild('sdfsdfsd');
    var parent = document.getElementById('vivod');
    alert(parent);
    var newElement = document.createElement('details');
    var inElement = document.createElement('summary');
    inElement.innerHTML = 'это объект';
    newElement.appendChild(inElement);
    var inElement = document.createElement('p');
    inElement.innerHTML = 'вывод из js';
    newElement.appendChild(inElement);
    parent.appendChild(newElement);

}

var parent = document.getElementById('vivod');
console.log(parent);
var dot = document.getElementById('vivod');