$(document).ready(function () {
    $("#btnGetProducts").click(function () {
        //GetAllProducts();
    });
});

function GetAllProducts() {
    $.ajax({
        type: 'GET',
        url: 'api/productX',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

        },
        error: function (a, b, c) {

        }
    });
}

function PostProduct() {
    var myProduct = {
        "title": "myTitle001",
        "description": "myDescription",
        "imgUrl": "Images/img_003.jpg",
        "model": "md0001",
        "price": "2000.00"
    }

    $.ajax({
        type: 'POST',
        url: 'api/product',
        data: myProduct,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
        },
        error: function (a, b, c) {
        }
    });
}