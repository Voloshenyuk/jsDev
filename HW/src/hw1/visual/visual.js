
function submit() {
    var jsn = document.getElementById('inp').value;
    var tempJson = JSON.parse(jsn);
    // jsn = tempJson;
    // jsn = JSON.parse(myObj);
    init(tempJson);
}

function init(tempJson) {
    let parent = document.getElementById('output');
    findObject(parent, tempJson);
}

function findObject(parent, jsn) {
     for ( key in jsn ) {
         if (typeof (jsn[key]) == 'object') {
            let newElement = addDetail(key);
            parent.appendChild(newElement);
            findObject(parent.lastChild, jsn[key]);
         }  else {
                parent.appendChild(addText(key, jsn[key]));
            }
     }   
}

function addDetail (str) {
    var newElement = document.createElement('details');
    var inElement = document.createElement('summary');

        inElement.innerHTML = str;
        newElement.appendChild(inElement);
    return newElement;
}

function addText(key, value) {
    var newElement = document.createElement('p');

        newElement.innerHTML = key + ':' + value;
    return newElement;
}
