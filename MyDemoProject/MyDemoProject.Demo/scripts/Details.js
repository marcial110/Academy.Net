$(document).ready(function () {
    loadProduct();
});

function loadProduct() {
    var myProduct = FindMyProduct(getJsonFromUrl())
    buildMyProduct(myProduct);
}

function FindMyProduct(id) {
    var ProductDetails = "";
    $.each(JSONDetails, function (element, object) {
        if (object.id == id) {
            ProductDetails = object;
        }
    });
    return ProductDetails;
}


//Dynamic build your collection
function buildMyProduct(myProduct) {
    var html = "";
    html += "<div><h3>" + myProduct.title + "</h3></div>";
    html += "<div class='col-md-3'><div class='thumbnail'><img class='Catalog MainImage' src='" + myProduct.MainImage + "' /></div></div>";
    html += "<div class='col-md-3'>";
    html += "<div>" + myProduct.description + "</div>";
    html += "<div>" + myProduct.model + "</div>";
    html += "<div>" + myProduct.price + "</div></div>";
    $.each(myProduct.productImages, function (element, image) {
        html += "<div id='ImageContainer'>Images:<ul>";
        html += "<li><img class='Thumb' src='" + image.imgUrl + "' /></li></ul>";
    });
    $("#MyDinamicProductDetails").append(html);
}


function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function (part) {
        var item = part.split("=");

        //Decode to avoid errors due to blank spaces on the URL
        result[item[0]] = decodeURIComponent(item[1]);
    });
    //we need only the ID
    return result['id '];
    //return result.id;
}