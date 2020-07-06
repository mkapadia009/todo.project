// Reference the input field

// ADD EVENT

function addTodo(){
    var task = document.getElementById('todo-item').value;
    var btn = document.createElement('button');

    var row = ""
    row = row + '<tr><td>' + task + '</td><td>' + '<button class="btn btn-danger" onclick = deleteEntry();>Delete</button' + '</td></tr>';


    document.getElementById('tableList').innerHTML += row;
    
}

// DELETE EVENT

function deleteEntry(){

    // THIS LINE OF CODE IS USED TO TARGET THE PARENT NODE IN WHICH THE CHILD NODE EVENT IS TAKING PLACE.
      var td = event.target.parentNode; 
      
      // THIS LINE OF CODE IS USED TO GET THE TABLE ROW AS THE PARENT OF TD IS TR
      var tr = td.parentNode; // the row to be removed

      // THIS LINE OF CODE PICKS THE PARENT NODE OF THE TR WHICH IS THE TBODY AND THEN PICKS THE CHILD WHICH IS TR AND REMOVES IT.
      tr.parentNode.removeChild(tr);


}


