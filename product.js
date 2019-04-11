function getNoOfItems(){
    var sum = 0;

    var p = document.getElementsByClassName("radioValue")
    var x = document.getElementsByClassName("item")
    var y = document.getElementsByClassName("price")

    var RadioValues = new Array();
    var Item = new Array();
    var ItemPrice = new Array();

    for (var i = 0; i < p.length; i++ ){
        if ( p[ i ].checked ){
	        RadioValues.push(p[i].value);
	        Item.push(x[i].value);
	        ItemPrice.push(y[i].value);

        }
    }


    var ItemStore = new Array();

    for(var i = 0; i < x.length; i++){
        var z = (x[i].value) * (y[i].value)
            debugger;
            ItemStore.push(z);
        }

    for(var i= 0; i < ItemStore.length ; i++) {
        sum += ItemStore[i]
    }

    for(var j = 0; j < RadioValues.length; j++){
        alert("Dear " + document.forms["info"]["firstname"].value + ", you have ordered " + Item[j] + " "+ RadioValues[j]+ " at a cost of $" + ItemPrice[j]   );
    }

    alert("Your Total Bill is $" + sum + ". Thank You for shopping with us!");
}

function resetOrder(){
    var r = document.getElementsByClassName("item")
    var p = document.getElementsByClassName("radioValue")
    var x = document.getElementsByClassName("item")
    for(var i = 0 ; i < r.length ; i++){
        r[i].value = "";
        p[ i ].checked = false;
        x[i].disabled = true;
    }

}

function validateForm(){
    var x = document.forms["info"]["firstname"].value;
    var y = document.forms["info"]["address"].value;
    var p = document.getElementsByClassName("radioValue").value
    if(x == "" || y == "" || p == null){
        alert("NAME and ADDRESS must be filled out and should select a PRODUCT");
    }
    else {
        getNoOfItems();
    }
}