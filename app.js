var list=document.getElementById("list");
function addTodo()
{
var todo_item=document.getElementById("todo-item");
var li=document.createElement("li");
var liText=document.createTextNode(todo_item.value);
li.setAttribute("class", "liststyle")
li.appendChild(liText);




var delBtn=document.createElement("img");
delBtn.setAttribute("onclick","deleteItem(this)");
delBtn.setAttribute("class" ,"delbtn")
delBtn.src="download.png";
var addBtn=document.createElement("img");
addBtn.setAttribute("onclick","editItem(this)");
addBtn.setAttribute("class", "addbtn")
addBtn.src="editp.png";


li.appendChild(delBtn); 
li.appendChild(addBtn); 
list.appendChild(li);
todo_item.value="";
console.log(li);
}

function deleteItem(e){
    e.parentNode.remove();
}
function editItem(e){
    var val = prompt("Enter edit value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=val;
}
function deleteAll(){
    list.innerHTML="";
}