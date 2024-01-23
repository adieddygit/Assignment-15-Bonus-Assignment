/*
When you drag an element, three events fire
dragstart : Once you drag the draggable element
drag : as long as the element is being dragged
dragend : when you stop dragging the element
The element being dragged is ev.target

Three events fire when you drag an element over a drop target
dragenter : as soon as the drag element is over a drop target
dragover : fires as long the draggable element is within the boundaries of a drop target
dragleave : fires when you leave the boundaries of the drop target
drop : if you drop the element on the target
the element being dropped is the ev.target

to transfer the data that the object holds in a drag and drop option,
use the dataTransfer object. It has two methods. the setData() and the getData()
setData : set the drag operation data to a specified format and data. The format
can be either taxt/plain or text/url-list. The data can be a string.
getData() : retrieves the drag data stored by the setData() method
and accepts only the format as an argument.

*/

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



