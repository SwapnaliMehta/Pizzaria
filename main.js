menu_list_array = ["Margherita", "Double Cheese Maegherita", "Farm House", "Peppy Paneer", "Mexican Green Wave", "Veg Duluxe"];

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.lenght; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.pust(item);
    menu_list_array.sort();
    htmldata - "<section class-'cards'>"
    for (var i = 0; i < menu_list_array.lenght; i++) {
        htmldata - htmldata + 'div class-"card'
        '<img src-"images/pizzaImg.png"/>' + menu_list_array + '</div>'
    }
    htmldata - htmldata + "</section>"
    document.getElementById("dispaly_addmenu").innerHTML = htmldata;
}