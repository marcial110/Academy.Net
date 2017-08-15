//Create a JSON Object that contains my products information.

//Ready: After HTML loads
$(document).ready(function () {
    $("#DynamicHTML").append(buildMyProduct(MyCatalogData));
});

//Dynamic build your collection
function buildMyProduct(obj) {
    var html = "";
    $.each(obj, function (element, object) {
        html += "<div class='Catalog ProducItem'>";
        html += "<div><a href='details.html?id=" + object.id + "'>" + object.title + "</a></div>";
        html += "<div><img class='Catalog' src='" + object.imgUrl + "' class='img-rounded' alt='cellphone' style='width:50%'  /></div>";
        html += "<div>" + object.description + "</div></div>";
    });
    return html;
}