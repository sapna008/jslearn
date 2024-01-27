// global variables
var page = 1;
var cusrrentSearchInput;
var allData = [];

function handleSearch(e) {
    const inputValue = document.getElementById("search-input").value
    console.log(`search term form inut is : ${inputValue}`)
    cusrrentSearchInput = inputValue; // saving for future use as show more 
    page = 1;
    getDataFromServer(inputValue);
}

async function getDataFromServer(searchTerm){
    const accessKey = "zJZpaSiFHK_sHSkgHEGEEgDpITxgptSekbLygp4huzc"
    try {
        if(searchTerm !== undefined && searchTerm.length >= 3){
            const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchTerm}&client_id=${accessKey}`;
            const response = await fetch(url);
            const jsonData = await response.json();
            if(jsonData.results !== undefined && jsonData.results.length > 0){
                allData = jsonData.results;
                displayData(jsonData.results);
            }else{
                throw new Error('No More Data found found for : ' + searchTerm);
            }
        }else{
            throw new Error('Kindly input someThing at least 3 letter');
        }
    } catch (error) {
        console.log(error.message);
        showErrorMsg(error.message);
    }
}
function displayData(data){
    console.log('data received in display method ',data);
    hideErrorMsg();
    const searchResults = document.querySelector(".search-results")
    searchResults.innerHTML ='';
    data.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });
}
function showMoreData(event){
    page += 1;
    getDataFromServer(cusrrentSearchInput)
}
function showErrorMsg(msg){
    const errorElement = `<!-- alert -->
    <div class="alert alert-danger" role="alert">${msg}</div>`;
    const alertBox = document.getElementById('alertBox');
    alertBox.innerHTML = errorElement;
}
function hideErrorMsg(){
    document.getElementById('alertBox').innerHTML = '';
}
