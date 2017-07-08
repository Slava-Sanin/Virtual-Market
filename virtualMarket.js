var items_counter = 15;
var myListArray = [];
var total_price = 0;
var current_item = 1;
var itemsArray = [{
	category : "Sunglasses",
	name : "Sunglasses",
	id_parit : 1,
	count : 3,
	info : "Black Sunglasses",
	price : 50,
	pic : "pics/black_sunglasses.jpg",
	color : "black"
}, {
	category : "Sunglasses",
	name : "Sunglasses",
	id_parit : 2,
	count : 2,
	info : "Red Sunglasses",
	price : 50,
	pic : "pics/red_sunglasses.jpg",
	color : "red"
}, {
	category : "Sunglasses",
	name : "Sunglasses",
	id_parit : 3,
	count : 1,
	info : "Blue Sunglasses",
	price : 50,
	pic : "pics/blue_sunglasses.jpg",
	color : "blue"
}, {
	category : "Knifes",
	name : "for fiting",
	id_parit : 4,
	count : 1,
	info : "Knife for fiting",
	price : 40,
	pic : "pics/knife1.jpg",
	color : ""
}, {
	category : "Knifes",
	name : "for kitchen",
	id_parit : 5,
	count : 1,
	info : "Knife for kitchen",
	price : 10,
	pic : "pics/knife2.jpg",
	color : ""
}, {
	category : "Knifes",
	name : "decorativ",
	id_parit : 6,
	count : 1,
	info : "Black Sunglasses",
	price : 90,
	pic : "pics/knife3.jpg",
	color : ""
}, {
	category : "Phones",
	name : "Iphone",
	id_parit : 7,
	count : 1,
	info : "Mobile phone Iphone",
	price : 100,
	pic : "pics/iphone.jpg",
	color : "white"
}, {
	category : "Phones",
	name : "Galaxy 3",
	id_parit : 8,
	count : 1,
	info : "Mobile phone Galaxy 3",
	price : 200,
	pic : "pics/Samsung-Galaxy-S4.jpg",
	color : "black"
}, {
	category : "Phones",
	name : "LG",
	id_parit : 9,
	count : 1,
	info : "Mobile phone LG",
	price : 90,
	pic : "pics/lg-g-pro-lite-d680-1.jpg",
	color : "black"
}, {
	category : "Computers",
	name : "Dell",
	id_parit : 10,
	count : 1,
	info : "Dell laptop",
	price : 300,
	pic : "pics/pc_dell.jpg",
	color : "red"
}, {
	category : "Computers",
	name : "HP",
	id_parit : 11,
	count : 1,
	info : "HP laptop",
	price : 3200,
	pic : "pics/pc_hp.jpg",
	color : "white"
}, {
	category : "Computers",
	name : "Apple",
	id_parit : 12,
	count : 1,
	info : "apple-macbook-air-13-inch-mid-2012",
	price : 350,
	pic : "pics/apple-macbook-air-13-inch-mid-2012.jpg",
	color : "white"
}, {
	category : "Swatchs",
	name : "Swatch",
	id_parit : 13,
	count : 1,
	info : "Black swatch",
	price : 53,
	pic : "pics/black_swatch.jpg",
	color : "black"
}, {
	category : "Swatchs",
	name : "Swatch",
	id_parit : 14,
	count : 1,
	info : "Red swatch",
	price : 49,
	pic : "pics/red_swatch.jpg",
	color : "red"
}, {
	category : "Swatchs",
	name : "Swatch",
	id_parit : 15,
	count : 1,
	info : "Blue swatch",
	price : 65,
	pic : "pics/blue_swatch.jpg",
	color : "blue"
}];

//------------------------------------------------------------

function Create_Parit() {

	//	alert("Creating parit");
}

//------------------Creating object Category----------------

function Parit() {
	this.category
	this.name
	this.id_parit
	this.count
	this.info
	this.price
	this.pic
	this.color
}

//------------------------------------------------------------
//------------------------main function-----------------------

$(function() {
    if ((localStorage !== undefined) && localStorage.myListArray) Load();
	//------------------------------------------------------------
	$(".items li").click(function() {
		var item = $(this).val();
		copy_item(item);
	});
	//------------------------------------------------------------
	$(".items li").mouseover(function() {
		info($(this).val());
		Save();
	});
	//------------------------------------------------------------
	//$("#to_bay").mouseover(function() {
		
		
	//});
	//------------------------------------------------------------
});
//-------------------------end main function------------------


//---------------------------copy item to my list-------------

function copy_item(item) {
	var text = "";

	if (itemsArray[item - 1].count == 0)
		return;
	myListArray.push(itemsArray[item - 1]);
	itemsArray[item - 1].count--;
	total_price += itemsArray[item - 1].price;

	$("#to_bay").append("<li class='items_to_bay' onclick='clickOnItemInList(this);' value='" + myListArray.length + "'>" + itemsArray[item - 1].info + "   " + itemsArray[item - 1].price + "$</li>");
	$("#p_total_price").html("<b>Total price: " + total_price + "$</b>");
  
	//document.getElementById("myBtn").addEventListener("click", function(){
    //document.getElementById("demo").innerHTML = "Hello World";});
  info(item);
	Save();
}

//-------------------------------Save to localstorage---------

function Save() {
	// Store
	
	localStorage.setItem("items_counter", items_counter);
	//localStorage.setItem("myListArray", myListArray);
	localStorage.myListArray = JSON.stringify(myListArray);

	localStorage.setItem("total_price", total_price);
	localStorage.setItem("current_item", current_item);
	//localStorage.setItem("itemsArray", itemsArray);
	localStorage.itemsArray = JSON.stringify(itemsArray);
	
	localStorage.setItem( "last_list", $("#to_bay").html() );
}

//-------------------------------Load from localstorage---------

function Load() {
	// Retrieve
	
	items_counter = parseInt( localStorage.getItem("items_counter") );
	//myListArray = localStorage.getItem("myListArray");
	myListArray = JSON.parse(localStorage.myListArray);
	
	total_price = parseInt( localStorage.getItem("total_price") );
	current_item = parseInt( localStorage.getItem("current_item") );
	//itemsArray = localStorage.getItem("itemsArray");
	itemsArray = JSON.parse(localStorage.itemsArray);
	
	$("#to_bay").html( localStorage.getItem("last_list") );
	$("#p_total_price").html("<b>Total price: " + total_price + "$<b>");
	if (total_price) info(current_item);
}

//---------------------------show info about selected item----

function info(item) {
	current_item = item;
	var text = "";

	text += "<img id='pic' src='" + itemsArray[item - 1].pic + "'></img>" + "</br></br>";

	text += itemsArray[item - 1].name + "</br>";
	text += "Id of item: " + itemsArray[item - 1].id_parit + "</br>";
	text += "Items: " + itemsArray[item - 1].count + "</br>";
	text += "Model: " + itemsArray[item - 1].info + "</br>";
	text += "Price: " + itemsArray[item - 1].price + "$</br>";
	text += "Color: " + itemsArray[item - 1].color;

	$("#listp").html(text);
	// $("#div3").css("visibility", "visible");
	//$("#add-to-cart-button").attr("item", item);
	$("#div3").fadeIn(3000);

	//Load();
}

//---------------------------Empty Cart----

function emptyCart(){
	var count =  myListArray.length;
	for (x=0; x<count; x++) {
		itemsArray[myListArray[0].id_parit - 1].count++;
		myListArray.splice(0, 1);
	}
	total_price = 0;
	$("#to_bay").html("");
	$("#p_total_price").html("<b>Total price: " + total_price + "$<b>");
	info(current_item);
	Save();
 }
 
 //---------------------------clickOnItemInList----
 
 function clickOnItemInList(x){
		    var item = $(x).val();				
			//console.log(item);
			
	  		$(x).remove();
			
			itemsArray[myListArray[item - 1].id_parit - 1].count++;
			total_price -= myListArray[item - 1].price;
			myListArray.splice(item - 1, 1);
			//delete myListArray[item - 1];
	
			var new_index = 1;
			$("#to_bay li").each(function(){
	     		$(this).val(new_index++);
	  		});
	
			$("#p_total_price").html("<b>Total price: " + total_price + "$<b>");
			
			info(current_item);
			Save();
		};