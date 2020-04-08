function getAllImagesArray() {

    var all_images_array = [];
    var dir = 'assets/images/icons/';
    var fileextension = ['.svg', '.jpg', '.gif', '.png'];

    $.ajax({
        url: dir,

        error: function () {
            alert('An error occurred!');
        },

        success: function (data) {
            //List all files with defined extension (.svg)
            for (var i = 0; i < fileextension.length; i++) {
                $(data).find('a:contains(' + fileextension[i] + ')').each(function () {
                    var filename = this.href.replace(window.location.host, '').replace(window.location.pathname, '').replace('https://', '').replace('http://', '');

                    all_images_array.push(filename);
                });
            }
        }
    });
    return all_images_array;
}

console.log(getAllImagesArray());



function getRandomImage(imgAr, path) {
    path = path || 'assets/images/icons/'; // default path here
    var num = Math.floor(Math.random() * imgAr.length);
    var img = imgAr[num];
    var imgStr = '<img class="icon" src="' + path + img + '" alt = "' + img + '">';
    return imgStr;
}

function generateImages(number_of_cards) {
    for (let i = 0; i < number_of_cards; i++) {
        document.getElementById("img_" + i).innerHTML += getRandomImage(random_images_array);
    }
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function generateImagesArray(number_of_cards) {
    let random_images = [];
    let temp = "";
    for (let i = 0; i < number_of_cards / 2; i++) {
        temp = getRandomImage(random_images_array);
        random_images.push(temp);
        random_images.push(temp);
    }
    shuffleArray(random_images);
    console.log(random_images);
}


function clearImages(number_of_cards) {
    for (let i = 0; i < number_of_cards; i++) {
        document.getElementById("img_" + i).innerHTML = "";
    }
}


function distributeCards_rows(number_of_cards) {
    let HTMLstring = ""
    for (let y = 0; y < Math.sqrt(number_of_cards); y++) {
        HTMLstring = HTMLstring + '<div id = "row_' + y + '" class="row"></div>';
    }
    document.getElementById("playground").innerHTML = HTMLstring;
}

function distributeCards_cards(number_of_cards) {
    distributeCards_rows(number_of_cards);
    for (let x = 0; x < number_of_cards; x++) {
        document.getElementById("row_" + Math.floor(x / Math.sqrt(number_of_cards))).innerHTML += '<div id="img_' + x + '" class="col image"></div>';
    }
}

function show() {
    $('.icon').show();
}

function hide() {
    $('.icon').hide();
}

distributeCards_cards(36);
