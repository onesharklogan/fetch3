'use strict';

// function getImage() {
//     let qty = $("#quantity").val();
//     $('#doggie-list').replaceWith(`<ol id="doggie-list">
//     </ol>`);
//     for (let i = 0; i < qty; i++) {
//         getRandomDogImage();
//     }
// }


function generateImage() {
    let breed = $("#breed-input").val();

    $('#doggie-list').replaceWith(`<ol id="doggie-list">
    </ol>`);

    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
        .then(response => response.json())
        .then(responseJson =>
            generateHtml(responseJson))
        .catch(error => errorMessage("Breed was not found"));
}

function errorMessage(msg) {
    console.log("error:" + msg);
    alert(msg);
    $('#doggie-list').replaceWith(`<ol id="doggie-list"><li>No image available - ` + msg + `</li>
     </ol>`);
}


function generateHtml(responseJson) {
    //console.log(responseJson);
    $('#doggie-list').append(`<li><img src=" ${responseJson.message}" class="results-img"></li>`)
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        generateImage();
    });
}

$(function() {
    watchForm();
});