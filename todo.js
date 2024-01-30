let data = [
    { id: 1, name: "sapna", email: "sapna@gmail.com" },
    { id: 2, name: "shilpi", email: "shilpi@gmail.com" }
]

function readAll() {
    localStorage.setItem('object', JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");
    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(Object);
    var elements = "";

    objectdata.map(record => (
        elements += `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
        <button class="edit" onclick={edit(${record.id})}>Edit</button>
        <button class="delete">Delete</button>
        </td>
        </tr>`
    ))
    tabledata.innerHTML = elements;
}

function create() {

    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";

}

function add() {

    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    var newObj = { id: 3, name: name, email: email };
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";
    readAll();
}

function edit(id) {
    document.querySelector(".update_form").style.display = "block";
}