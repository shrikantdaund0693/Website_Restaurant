function quantity_change() {
    var n = document.getElementById("quantity");
    n = parseInt(n.value);
    var price = document.getElementById("price");
    var val = parseInt(price.value);
    var final = val*n;
    document.getElementById('total').innerHTML = final + " $";
}