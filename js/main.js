function Initiate() {
  debugger;
  var elem = document.getElementById("wrap-input");
  var settings = document.getElementById("settings");
  var frame = document.querySelector('.frame2');
  var list = document.querySelector('#links-list');
  for (var i = 0; i < localStorage.length; i=i+2){
    var name = localStorage.getItem(localStorage.key(i));
    var url = localStorage.getItem(localStorage.key(i+1));
       var opt = document.createElement('option');
         opt.value = url;
         opt.innerHTML = name;
         list.appendChild(opt);
         if(i==0){
         frame.src = url;
       }
  }



  if(frame.src!="about:blank"){
    list.style.display = "block"
    cancel_input();
    frame.style.display = "block"
  }
  else {
    list.style.display = "none"
    elem.style.display ="block";
    settings.style.background="white";
    frame.style.display = "none"
  }
}

function OnChange(name) {
  debugger; 
  if (this.selectedIndex!==0) {
    var name = name.value;
    var frame = document.querySelector('.frame2');
    var extend = document.querySelector('.expand2');
    extend.href = name;
    extend.style.display = "block"
    frame.src = url;
    cancel_input();
    frame.style.display = "block"


    var x=6;

  }
}


window.onresize = function() {
  var width =window.innerWidth;
  var myMarginleft = (width -980)/2;
  var myMarginRight = (width -980)/2;

  if(width>980) {
    setStyle('.page-body' , {'width':980+'px','margin-left':myMarginleft+'px','margin-right':myMarginRight+'px'});
    setStyle('#input' , {'width':950+'px'});
    setStyle('.rep' , {'margin-right':8+'%'});
    setStyle('.name' , {'margin-left':2+'%','margin-right':0+'%'});
    setStyle('.url' , {'margin-left':7+'%'});
  }
  else {
   setStyle('.page-body' , {'width':100+'%','margin-left':0+'px','margin-right':0+'px'});
   setStyle('#input' , {'width':100+'%'});
 }
 if(width<950)
 {
  setStyle('.rep' , {'margin-right':0+'%'});
  setStyle('.name' , {'margin-left':0+'%','margin-right':0+'%'});
  setStyle('.url' , {'margin-left':0+'%'});

}

}
function cancel_input() {
  var elem = document.getElementById("wrap-input");
  var settings = document.getElementById("settings");

  settings.style.background="rgb(235, 235, 235)";
  elem.style.display ="none";
}

function save_input() {
  
  var elem = document.getElementById("wrap-input");
  var settings = document.getElementById("settings");
  if(check == 2){
    settings.style.background="rgb(235, 235, 235)";
    elem.style.display ="none";

    var name = document.querySelectorAll('.link-name');
    var url = document.querySelectorAll('.link-url');
    var i;
   
    if(name != null){
      for (i = 0; i < name.length; ++i) {
        if (name[i].value) {
          localStorage.setItem(name[i].id, name[i].value);
        }
         if (url[i].value) {
          localStorage.setItem(url[i].id, url[i].value);
        }
       
      }
    }
    location.reload(); 
  }
  if(check ==0 ){
    alert("Please check input");
  }




}




function getSecondPart(str) {
  return str.split('#')[1];
}


window.onhashchange = function(e){
  if(window.location.hash) {
    var oldURL = e.oldURL; 
    var newURL = e.newURL; 
    var prev_hash = oldURL.split("#")[1];
    var curr_hash = newURL.split("#")[1];

  }	
  var e =e.originalEvent;

  var nth=0;
  var elem =document.getElementById(curr_hash);
  var tabs =document.getElementById("tabs");

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
    if(nth){
      li = tabs.querySelector("ul a:nth-child("+nth+")");
      li.style.background = "rgb(135, 135, 135)";
      li.style.color =  "white";
    }
    li = tabs.querySelector("ul a:nth-child(1)");
    li.style.background = "rgb(235, 235, 235)";
    li.style.color =  "black";
    setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});


  }
  if(elem.id == "my-folders"){
    setStyle(prev_hash, {'display':'none', 'background':'rgb(135, 135, 135)'});
    if(nth){
      li = tabs.querySelector("ul a:nth-child("+nth+")");
      li.style.background = "rgb(135, 135, 135)";
      li.style.color =  "white";
    }
    li = tabs.querySelector("ul a:nth-child(2)");
    li.style.color =  "black";
    li.style.background = "rgb(235, 235, 235)";
    setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});


  }
  if(elem.id == "my-team-folders"){
    setStyle(prev_hash, {'display':'none', 'background':'rgb(135, 135, 135)'});
    if(nth){
     li = tabs.querySelector("ul a:nth-child("+nth+")");
     li.style.background = "rgb(135, 135, 135)";
     li.style.color =  "white";
   }
   li = tabs.querySelector("ul a:nth-child(3)");
   li.style.color =  "black";
   li.style.background = "rgb(235, 235, 235)";
   setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});

 }
 if(elem.id == "public-folders"){
  setStyle(prev_hash, {'display':'none', 'background':'rgb(135, 135, 135)'});
  if(nth){
   li = tabs.querySelector("ul a:nth-child("+nth+")");
   li.style.background = "rgb(135, 135, 135)";
   li.style.color =  "white";
 }
 li = tabs.querySelector("ul a:nth-child(4)");
 li.style.color =  "black";
 li.style.background = "rgb(235, 235, 235)";
 setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});


}

elem.style.height = "700px";
}

function setStyle( objId, propertyObject )
{

 var elem = document.getElementById (objId);
 var elem2 = document.querySelectorAll(objId);
 var i;
 if(elem != null) { 
   for (var property in propertyObject)
    elem.style[property] = propertyObject[property];
}
else if(elem2 != null){
  for (i = 0; i < elem2.length; ++i) {
   for (var property in propertyObject)
    elem2[i].style[property] = propertyObject[property];
}
}

}

function settings() {
  var elem = document.getElementById("wrap-input");
  var settings = document.getElementById("settings");
  if(elem.style.display == "none"){
    elem.style.display ="block";
    settings.style.background="white";
  }
  else{
    settings.style.background="rgb(235, 235, 235)";
    elem.style.display ="none";
  }

}


function name_url(name, url) {

  var name = document.getElementById(name);
  var url = document.getElementById(url);
  if((url.value.slice(0,7) != "http://")&&(name.value.length)){
    url.style.border = "1px solid red";
    check=0;
  }
  else
  {
    check = 2;
    url.style.border = "none";
  }

}
function url_check(url) {
  var url = document.getElementById(url);
  if((url.value.slice(0,7) != "http://")&&(url.value.length)){
    url.style.border = "1px solid red";
    check=0;
  }
  else
  {
    check = 2;
    url.style.border = "none";
  }


}





window.onload = function(e) {
  check=0;

  var  x=  window.location.pathname;
  var y = document.title;
  history.pushState("", y,x);
  prev_hash=null;

};



