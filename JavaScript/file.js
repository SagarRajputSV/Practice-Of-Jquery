// alert("Hola from JavaScript");
$(document).ready(function() {
    alert("Hola From JQuery");
    $("#city").children('option').hide();
    $("#carmodel").children('option').hide();
});

// //==============================================================================================

// document.getElementById("demo").innerHTML = "Hello World!";
// document.getElementById("demo").style.color="green";
$("#demo").html("Hello World!").css("color", "green");

// //==============================================================================================

// function URLDisplay()
// {
//     document.getElementById("link").innerHTML = document.URL;  
// }

$("#urlbutton").click(function() {
    $("#link").html(document.URL);
});

// //==============================================================================================


function greet() {
    var name = document.forms["form1"]["Name"].value.trim();
    alert("welcome " + name);

    return false;

}

// $("#greetbtn").click(function() {
//     alert("hola " + $("#name").val());
//     return false;
// });

// //==============================================================================================


// function changeclass() {
//     var num = document.forms["form3"]["num"].value.trim();

//     if (num >= 100) {
//         document.getElementById("classhead").classList.add("classadded");
//     } else {
//         document.getElementById("classhead").classList.remove("classadded");
//     }
//     return false;
// }

$("#classchangebtn").click(function() {

    var num = $("#ClassModifierNumber").val();

    if (num >= 100) {
        $("#classhead").addClass("classadded");
    } else {
        $("#classhead").removeClass("classadded");
    }

    return false;
});

// //==============================================================================================

// function bgchange()
// {    

//     document.getElementById("bdy").style.background = document.forms["form2"]["bgcolor"].value;
//     var option = (document.forms["form2"]["bgcolor"].value).toLowerCase();

//     if(option=="black")
//     {
//         document.getElementById("bdy").style.color="white";
//     }

//     else if(option=="white")
//     {
//         document.getElementById("bdy").style.color= "black"
//     }

//     else if(option == "green")
//     {
//         document.getElementById("bdy").style.color = "red";
//     }

//     else if(option=="red")
//     {
//         document.getElementById("bdy").style.color = "black";
//     }

// }

$("#drop").change(function() {
    var bgcolor = $(this).val();
    bgcolor = bgcolor.toLowerCase();

    $("#bdy").css("background", bgcolor);

    if (bgcolor == 'black') {
        $("#bdy").css("color", "white");
    } else if (bgcolor == 'white') {
        $("#bdy").css("color", "black");
    } else if (bgcolor == 'red') {
        $("#bdy").css("color", "black");
    } else if (bgcolor == 'green') {
        $("#bdy").css("color", "yellow");
    }
});

// //==============================================================================================
var stateval;
$("#state").change(function() {
    $("#city").children('option').hide();
    $("#city").children("option[value^=" + $(this).val() + "]").show();
    stateval = $(this).val();
});

$("#city").click(function() {
    if (stateval == null || stateval == "") {
        alert("Please select the state")
    }
});

// =================================================================================================

var companyval;
$("#carcompany").change(function() {
    $("#carmodel").children('option').hide();
    $("#carmodel").children("option[value^=" + $(this).val() + "]").show();
    companyval = $(this).val();
});

$("#carmodel").click(function() {
    if (companyval == null || companyval == "") {
        alert("Please select the car company first");
    }
});

// =================================================================================================
$(document).ready(function() {
    $("#otpimagesection").on("div:toggle", function(event) {
        alert("Gracias");
        $("#otpimagesection").css("border", "blue solid 3px").animate({ left: '200px' });
    });

    $("#formbtn").find(":submit").click(function() {
        alert("Hola amigo");
        $("#otpimagesection").trigger("div:toggle");
        return false;
    });
});

// =================================================================================================