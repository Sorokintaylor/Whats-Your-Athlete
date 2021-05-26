$(".button2").click(function() {
    let discription = $(".input1").val();
    let inputItem = $(".input2").val();
    if (discription === "Very active" && inputItem === "Football") {
        $(".obj").show();
    }
    if (discription === "Very active" && inputItem === "Basketball") {
        $(".Legoat").show();
    }
    if (discription === "Very active" && inputItem === "Soccer") {
        $(".Ronaldo").show();
    }
    if (discription === "Very active" && inputItem === "Baseball") {
        $(".Mookie").show();
    }
    if (discription === "Very conditioned" && inputItem === "Football") {
        $(".Donald").show();
    }
    if (discription === "Very conditioned" && inputItem === "Basketball") {
        $(".Curry").show();
    }
    if (discription === "Very conditioned" && inputItem === "Soccer") {
        $(".Kevin").show();
    }
    if (discription === "Very conditioned" && inputItem === "Baseball") {
        $(".Wade").show();
    }
    if (discription === "Likes to be alone" && inputItem === "Football") {
        $(".Ramsey").show();
    }
    if (discription === "Likes to be alone" && inputItem === "Basketball") {
        $(".Kawhi").show();
    }
    if (discription === "Likes to be alone" && inputItem === "Soccer") {
        $(".Mbappe").show();
    }
    if (discription === "Likes to be alone" && inputItem === "Baseball") {
        $(".Mike").show();
    } 
    if (discription === "Very social" && inputItem === "Football") {
        $(".Tyreek").show();
    }
    if (discription === "Very social" && inputItem === "Basketball") {
        $(".Lamelo").show();
    }
    if (discription === "Very social" && inputItem === "Soccer") {
        $(".Neymar").show();
    }
    if (discription === "Very social" && inputItem === "Baseball") {
        $(".Aaron").show();
          
    
    }
    $(".main").hide();
    $("ul").hide();
    $("h2").hide();
    $("body").css("background-color","red");  
});
$(".imgages").click(function(){
  $(".main").show();
    $("ul").show();
    $("h2").show();
     $("img").hide();
    $("body").css("background-color","grey");
});
$("h1").click(function(){
  $(".main").show();
    $("ul").show();
    $("h2").show();
     $("img").hide();
    $("body").css("background-color","grey");
});