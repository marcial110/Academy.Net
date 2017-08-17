//Create a JSON Object that contains my products information.

//Ready: After HTML loads
$(document).ready(function () {
    $("#DynamicHTML").append(buildMyProduct(MyCatalogData));
});

//Dynamic build your collection
function buildMyProduct(obj) {
    var html = "";
    $.each(obj, function (element, object) {
        html += "<div class='col-md-4'>";
        html += "<div class='thumbnail'>";
        html += "<div><a href='details.html?id=" + object.id + "'>" + object.title + "</a></div>";
        html += "<div><img class='Catalog' src='" + object.imgUrl + "' class='img-rounded' alt='cellphone' style='width:50%'  /></div>";
        html += "<div class='caption'>" + object.description + "</div></div></div>";
    });
    return html;
}


function GetAllElements()
{
    $.ajax({
        type: 'GET',
        url: 'http://localhost:55894/api/product',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

        },
        error: function (a, b, c) {

        }
    });
}