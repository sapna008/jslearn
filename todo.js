var data = [
    { id: 1, name: "sapna", email: "sapna@gmail.com" },
    { id: 2, name: "shilpi", email: "shilpi@gmail.com" }
]

function readAll() {
    const localData = localStorage.getItem('todoData');
    data = JSON.parse(localData);
    let allString = ''; 
    for(let item of data){
        allString +=  `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
         </tr>`
    }
    document.getElementById('tableBody').innerHTML = allString;


}
function refreshData(){
    readAll();
}
function create() {
    console.log('addddd')
    const name = document.getElementById('addName').value; 
    const email = document.getElementById('addEmail').value; 
    console.log(name);
    console.log(email);
    const arrLength = data.length + 1;
    data.push( { id: arrLength, name: name, email: email })
    localStorage.setItem('todoData',JSON.stringify(data));
}

function add() {
   
    // var name = document.querySelector(".name").value;
    // var email = document.querySelector(".email").value;

    // var newObj = { id: 3, name: name, email: email };
    // data.push(newObj);

    // document.querySelector(".create_form").style.display = "none";
    // document.querySelector(".add_div").style.display = "block";
    // readAll();
}

function edit(id) {
    document.querySelector(".update_form").style.display = "block";
}