var data = [];

function AddUser() {
    // Create an object to store form data
    let userData = {};

    // Get form data and populate the object
    userData.firstName = document.getElementById("firstName").value;
    userData.lastName = document.getElementById("lastName").value;
    userData.age = document.getElementById("age").value;

    // Get gender value
    let gender = document.querySelector('input[name="gender"]:checked');
    console.log('gender ', gender);
    userData.gender = gender ? gender.value : null;

    userData.phone = document.getElementById("phoneNumber").value;
    userData.birthday = document.getElementById("birthday").value;
    userData.address = { city: document.getElementById("location").value }
    userData.email = document.getElementById("email").value;
    userData.username = document.getElementById("username").value;
    if (userData.username == "") {
        userData.username = userData.email;

    }
    // Log or perform actions with the form data object
    console.log("User Data:", userData);
    data.push(userData)
    console.log(" Data:", data);
    display()

}


function display() {
    // takes global data and itrate over it and then render to ui
    // step 1 : target tbody of your table by Id and assign to a varibale . eg. let tableBody = document.ge.....
    // step 2 : crete element tr, and ( td as required). 
    // step three add tds to tr then this tr to tbody
    //  for reference : 
    // const imageWrapper = document.createElement("div");
    //     imageWrapper.classList.add("search-result");
    //     const image = document.createElement("img");
    //     image.src = result.urls.small;
    //     image.alt = result.alt_description;
    //     const imageLink = document.createElement('a');
    //     // imageLink.href = result.links.html;
    //     //imageLink.target = "_blank";
    //     imageLink.textContent = result.alt_description;
    //     imageWrapper.appendChild(image);
    //     imageWrapper.appendChild(imageLink);
    //     searchResults.appendChild(imageWrapper);

    //  write your logic here.
    let tbody = document.getElementById('tableBody')
    tbody.innerHTML = ''
    let index = 1;
    data.forEach(function(item) {
        const row = document.createElement("tr")
        const colhead = document.createElement("th")
        colhead.scope = "row"
        colhead.innerText = index;
        index++;
        row.appendChild(colhead)

        //td
        const t1 = document.createElement("td")
        t1.innerText = item.firstName
        row.appendChild(t1)

        const t2 = document.createElement("td")
        t2.innerText = item.lastName
        row.appendChild(t2)
        const t3 = document.createElement("td")
        t3.innerText = item.age
        row.appendChild(t3)
        const t4 = document.createElement("td")
        t4.innerText = item.gender
        row.appendChild(t4)
        const t5 = document.createElement("td")
        t5.innerText = item.phone
        row.appendChild(t5)
        const t6 = document.createElement("td")
        t6.innerText = item.birthDate
        row.appendChild(t6)
        const t8 = document.createElement("td")
        t8.innerText = item.address.city
        row.appendChild(t8)
        const t7 = document.createElement("td")
        t7.innerText = item.email
        row.appendChild(t7)

        const t9 = document.createElement("td")
        const edit = document.createElement("button")
        const delet = document.createElement("button")
        delet.classList.add("btn", "btn-primary");
        edit.classList.add("btn", "btn-primary");
        edit.innerHTML = "edit &nbsp;"

        delet.innerText = "delete"
        t9.appendChild(edit)
        t9.appendChild(delet)
        row.appendChild(t9)



        tbody.appendChild(row)


    })


}
display()

function showErrorMsg(msg) {
    // method to display all type errors on ui
}

function showSuccessMsg(msg) {
    // method to display to show success msg on ui
}