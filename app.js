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
        .catch(error => alert('Breed not found!'));
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