//loader
var loadVar;
function load() {
    loadVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("c-body").style.display = "block";
}


//show menu

function showMenu()
{
    var x = document.getElementsByClassName("sublist");
    var i;
    for (i = 0; i < x.length; i++)
    {
        if (x[i].style.display == "none")
        {
            x[i].style.display = "block";
        } else 
        {
            x[i].style.display = "none";
        }
    }
    
}

//Slide show D
{
var myIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("dSlides");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1
            }
            x[myIndex - 1].style.display = "block";
            setTimeout(carousel, 4000); // Change image every 2 seconds
        }
}

//Our menu button
{
    var acc = document.getElementsByClassName("fmenu");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var flist = this.nextElementSibling;
    if (flist.style.maxHeight){
      flist.style.maxHeight = null;
    } else {
      flist.style.maxHeight = flist.scrollHeight + "px";
    } 
  });
}
}


//script for map
function myMap() {
    var location = {lat:21.352941,lng:74.880536};
    var map =new google.maps.Map(document.getElementById("map"),{zoom:18,center:location});
    var marker = new google.maps.Marker({position:location,map:map})
}
/*
The mapCanvas variable is the map's HTML element.
The mapOptions variable defines the properties for the map.
The center property specifies where to center the map (using latitude and longitude coordinates).
The zoom property specifies the zoom level for the map (try to experiment with the zoom level).
The google.maps.Map object is created with mapCanvas and mapOptions as parameters.
*/


//Script for subcription
function SubMess(){
////    var x=document.getElementById(subin1).valve;
//    document.getElementById(subin1).reset();
//    document.getElementById(subin2).reset();
    alert("Thankyou!for Subcribing to our newsletter");
}


