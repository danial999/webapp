

$(document).ready(function(){
  var x = 0;
  $(window).resize(function(){

    var myMarginleft = (width -980)/2;
    var myMarginRight = (width -980)/2;
    var width = $( window ).width();
    if(width>980){

      $(".page-body").css('width',980+'px');
      $(".page-body").css('margin-left',myMarginleft+'px');
      $(".page-body").css('margin-right',myMarginRight+'px');
      $("#input").css('width',950+'px');
    }
    else {
      $(".page-body").css('width',100+'%');
      $(".page-body").css('margin-left',0+'px');
      $(".page-body").css('margin-right',0+'px');
      $("#input").css('width',100+'%');

    }

  });
});



function getSecondPart(str) {
  return str.split('#')[1];
}
$(window).on('hashchange', function(e) {
  //.. work ..

  //  var submenu1 = ul.getElementsByTagName('li')[0];
   // if( submenu) {
    if(window.location.hash) {
      var hyperlinkText = window.location.hash.substring(1);

    }		
    //	var hyperlinkText = submenu.getElementsByTagName('a')[0].hash;
    //	hyperlinkText = hyperlinkText.substring(1);
    var nth=0;
    var elem =document.getElementById(hyperlinkText);
    var tabs =document.getElementById("tabs");
    var curr_hash = hyperlinkText;
    var prev_hash = getSecondPart(e.originalEvent.oldURL);
    if(prev_hash==null){
      prev_hash ="quick-reports";
    }
    var li = tabs.querySelector("ul li");
    if(prev_hash == "quick-reports"){ nth =1;}
    else if (prev_hash == "my-folders"){ nth =2;}
    else if (prev_hash == "my-team-folders"){ nth =3;}
    else if (prev_hash == "public-folders"){ nth =4;}

    if(elem.id == "quick-reports"){
      setStyle(prev_hash, {'display':'none', 'background':'rgb(135, 135, 135)'});
      li = tabs.querySelector("ul a:nth-child(1)");
      li.style.background = "rgb(235, 235, 235)";
      li.style.color =  "black";
      setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});
      if(nth){
        li = tabs.querySelector("ul a:nth-child("+nth+")");
        li.style.background = "rgb(135, 135, 135)";
        li.style.color =  "white";
      }

    }
    if(elem.id == "my-folders"){
      setStyle(prev_hash, {'display':'none', 'background':'rgb(135, 135, 135)'});
      li = tabs.querySelector("ul a:nth-child(2)");
      li.style.color =  "black";
      li.style.background = "rgb(235, 235, 235)";
      setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});
      if(nth){
        li = tabs.querySelector("ul a:nth-child("+nth+")");
        li.style.background = "rgb(135, 135, 135)";
        li.style.color =  "white";
      }

    }
    if(elem.id == "my-team-folders"){
      setStyle(prev_hash, {'display':'none', 'background':'rgb(135, 135, 135)'});
      li = tabs.querySelector("ul a:nth-child(3)");
      li.style.color =  "black";
      li.style.background = "rgb(235, 235, 235)";
      setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});
      if(nth){
       li = tabs.querySelector("ul a:nth-child("+nth+")");
       li.style.background = "rgb(135, 135, 135)";
       li.style.color =  "white";
     }
   }
   if(elem.id == "public-folders"){
    setStyle(prev_hash, {'display':'none', 'background':'rgb(135, 135, 135)'});
    li = tabs.querySelector("ul a:nth-child(4)");
    li.style.color =  "black";
    li.style.background = "rgb(235, 235, 235)";
    setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});
    if(nth){
     li = tabs.querySelector("ul a:nth-child("+nth+")");
     li.style.background = "rgb(135, 135, 135)";
     li.style.color =  "white";
   }

 }




 elem.style.height = "700px";
});

function setStyle( objId, propertyObject )
{

 var elem = document.getElementById(objId);
 if(elem){
   for (var property in propertyObject)
    elem.style[property] = propertyObject[property];
}
}

$('#settings').click(function(){
    var elem = document.getElementById("input");
    var settings = document.getElementById("settings");
    if(elem.style.display == "none"){
      elem.style.display ="block";
      settings.style.background="white";
    }
    else{
      settings.style.background="rgb(235, 235, 235)";
      elem.style.display ="none";
    }

});


$('#name1').on('input', function() {
  debugger;
  var name = document.getElementById("name1");
   var url = document.getElementById("url1");
  if(name.value.length){
   
        url.style.border = "1px solid red";

  }
  else
  {
     url.style.border = "none";
  }
        
});
$('#url1').on('input', function() {
  debugger;
  var name = document.getElementById("name1");
   var url = document.getElementById("url1");
  if(url.value.length){
   if(url.value == "http://")
           url.style.border = "none";
  } 
  else
  {
     url.style.border = "1px solid red";
  }       
});