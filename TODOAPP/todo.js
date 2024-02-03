var data = [
    {
        "id": 1,
        "firstName": "Terry",
        "lastName": "Medhurst",
        "maidenName": "Smitham",
        "age": 50,
        "gender": "male",
        "email": "atuny0@sohu.com",
        "phone": "+63 791 675 8914",
        "username": "atuny0",
        "password": "9uQFF1Lh",
        "birthDate": "2000-12-25",
        "image": "https://robohash.org/Terry.png?set=set4",
        "address": {
            "address": "1745 T Street Southeast",
            "city": "Washington",
            "coordinates": {
              "lat": 38.867033,
              "lng": -76.979235
            },
            "postalCode": "20020",
            "state": "DC"
        }
    },
    {
        "id": 2,
        "firstName": "Jon",
        "lastName": "Doe",
        "maidenName": "",
        "age": 19,
        "gender": "male",
        "email": "atkut0@sohu.com",
        "phone": "+63 791 675 8914",
        "username": "Jondoe1",
        "password": "9uQFF1Lh",
        "birthDate": "2000-12-25",
        "image": "https://robohash.org/Terry.png?set=set4",
        "address": {
            "address": "1745 T Street Southeast",
            "city": "Washington",
            "coordinates": {
              "lat": 38.867033,
              "lng": -76.979235
            },
            "postalCode": "20020",
            "state": "DC"
        }
      },
      
];
function addData(e){
    // to get input data from input box and add to global variable data



    //call display function to display all added data.
}

function display(){
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

    
}

function showErrorMsg(msg){
    // method to display all type errors on ui
}

function showSuccessMsg(msg){
    // method to display to show success msg on ui
}