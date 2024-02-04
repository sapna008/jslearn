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
    saveToLocalStorage(data);
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
    data = (getFromLocalStorage()== null)? data:getFromLocalStorage();
    if(data == undefined && data == null){
        return;
    }
    
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

        const t2 = document.createElement("td")//
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
        delet.setAttribute("type", "button");
        edit.classList.add('btn', 'btn-primary');
        edit.setAttribute("data-bs-toggle", "modal");
        edit.setAttribute("name", item.email);
        edit.setAttribute("data-bs-target", "#staticBackdrop");
        edit.setAttribute("onclick", "Edit()");
        edit.inner
        edit.innerHTML = "edit"

        delet.innerText = "delete"
        t9.appendChild(edit)
        edit.setAttribute("id", "userSignUpForm");
        edit.setAttribute("action", "javascript:void(0)");
        //edit.setAttribute("onclick", "AddUser()");
        delet.setAttribute("data-id", item.email)
        delet.addEventListener('click', dele)

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

function validateform() {
    let name = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phoneNumber").value;


    if (name == null || name == "" || typeof(name) === "number") {
        alert("Name can't be blank");
        return false;
    } else if ((lname == null || lname == "" || typeof(name) === "number")) {
        alert("last name can't be blank");
        return false;
        // } else if (typeof age !== "number") {
        //     alert("Please enter correct age");
        //     return false;

    } else if (phone.length == 10) {
        alert("Phone number must be at 10 characters long.");
        return false;
    }
}

function Edit() {
    tn = document.getElementById("staticBackdropLabel")
    tk = document.getElementById("sappy")
    tn.innerText = "Edit user details"
    tk.innerText = "Edit"




}


function dele(e) {
    console.log(e);
    const dataid = e.target.dataset.id;
    console.log(dataid)
    let tempArray = []
    data.forEach(function(item) {
        if (item.email != dataid) {
            tempArray.push(item)
        }

        data = tempArray
        display()
    })
}

function saveToLocalStorage(data){
    try {
        const jsonString = JSON.stringify(data);
        localStorage.setItem('userData', jsonString);
        console.log('Data saved to local storage successfully.');
    } catch (error) {
        console.error('Error saving data to local storage:', error);
    }
}
function getFromLocalStorage() {
    try {
        // Retrieve the JSON-formatted string from local storage
        const jsonString = localStorage.getItem('userData');

        // Parse the JSON string to convert it back to a JavaScript object
        const data = JSON.parse(jsonString);

        console.log('Data retrieved from local storage successfully.');
        return data;
    } catch (error) {
        console.error('Error retrieving data from local storage:', error);
        return null;
    }
}
