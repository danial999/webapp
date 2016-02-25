flag =1;

function Initiate() {
  debugger;

   
 var count_rep = -1;
 var count_fol = -1;
 var hash = window.location.hash.substring(1);
 if((hash == "quick-reports")||(hash=='')){
  var elem = document.getElementById("wrap-input");
  var settings = document.getElementById("settings");
  var frame = document.querySelector('#frame2');
  var list = document.querySelector('#links-list');
  var extend = document.querySelector('.expand2');
  var cancel = 'cancel';
} else {
  var elem = document.getElementById("wrap-input1");
  var settings = document.getElementById("settings1");
  var frame = document.querySelector('#frame3');
  var list = document.querySelector('#links-list2');
  var extend = document.querySelector('.expand3');
  var cancel = 'cancel1';
}


OnRes();
removeOptions(list);
for (var i = 0; i < localStorage.length; i=i+2){
  var name = localStorage.getItem(localStorage.key(i));
  var str1 = localStorage.key(i).split("_", 1);
  var url = localStorage.getItem(localStorage.key(i+1));
  var str2 = localStorage.key(i+1).split("_", 2).pop();
  var res = localStorage.key(i).split("_").pop();
  var input_name =  document.getElementById(str1);
  var input_url =  document.getElementById(str2);
  if((res == "report")&&((hash == "quick-reports")||(hash==''))){
    var opt = document.createElement('option');
    count_rep++;

    input_name.value = name;
    input_url.value = url;
    opt.value = url;
    opt.innerHTML = name;
    list.appendChild(opt);
    if(count_rep==0){
     extend.href = url;
     frame.src = url;
   }
 }
 else if ((res == "folder")&&(hash == "my-team-folders")){
  count_fol++;
  var opt = document.createElement('option');
  input_name.value = name;
  input_url.value = url;
  opt.value = url;
  opt.innerHTML = name;
  list.appendChild(opt);
  if(count_fol==0){
   extend.href = url;
   frame.src = url;
 }
}
}

if(flag !=1){
OnChange(flag);
if(hash == "my-team-folders"){
 var list = document.querySelector('#links-list2');
}
else{
  var list = document.querySelector('#links-list');
}
debugger;
     str1 =str1 + "";
     var num = str1.substring(4, 5);
    list.selectedIndex = (num-1);
    flag=1;
}

if(frame.src!="about:blank"){
  list.style.display = "block"
  cancel_input(cancel);

  extend.style.display = "block"
  frame.style.display = "block"
}
else {
  list.style.display = "none"
  elem.style.display ="block";
  settings.style.background="white";
  frame.style.display = "none"
}
}

function OnChange(url) {
  debugger;
  if (this.selectedIndex!==0) {
    var hash = window.location.hash.substring(1);
    var url = url;
    if((hash == "quick-reports")||(hash=='')){
      var frame = document.querySelector('#frame2');
      var extend = document.querySelector('.expand2');
    }else {
      var frame = document.querySelector('#frame3');
      var extend = document.querySelector('.expand3');
    }
    extend.href = url;
    extend.style.display = "block"
    frame.src = url;
    cancel_input();
    frame.style.display = "block"


    var x=6;

  }
}


window.onresize = OnRes;

function OnRes() {

  var width =window.outerWidth;
  var width2 =window.innerWidth;
  var myMarginleft = (width -980)/2 - (width-width2)- (width-width2);
  var myMarginRight = (width -980)/2 + (width-width2);
  var container = document.querySelector('.container');
  if(width>980) {
    setStyle('.page-body' , {'width':980+'px','margin-left':myMarginleft+'px','margin-right':myMarginRight+'px'});
    setStyle('.frame' , {'width':960+'px'});
    setStyle('.input' , {'width': 960 +'px'});
    setStyle('.rep' , {'margin-right':8+'%'});
    setStyle('.name' , {'margin-left':2+'%','margin-right':0+'%'});
    setStyle('.url' , {'margin-left':7+'%'});
  }
  else {
   setStyle('.frame' , {'width': 97+ '%'});
   setStyle('.page-body' , {'width':100+'%','margin-left':0+'px','margin-right':0+'px'});
   setStyle('.input' , {'width':98+'%','margin-left':1+'%','margin-right':1+'%'});
 }
 if(width<950)
 {
  setStyle('.rep' , {'margin-right':0+'%'});
  setStyle('.name' , {'margin-left':0+'%','margin-right':0+'%'});
  setStyle('.url' , {'margin-left':0+'%'});

}

}
function cancel_input(cancel) {
  if(cancel=="cancel"){
    var elem = document.getElementById("wrap-input");
    var settings = document.getElementById("settings");
  }else{
    var elem = document.getElementById("wrap-input1");
    var settings = document.getElementById("settings1");
  }

  settings.style.background="rgb(235, 235, 235)";
  elem.style.display ="none";
}

function save_input(save) {

 if(save=="save"){
  var start = "report"
  var elem = document.getElementById("wrap-input");
  var settings = document.getElementById("settings");
}else{
  var start = "folder"
  var elem = document.getElementById("wrap-input1");
  var settings = document.getElementById("settings1");
}
if(check == 2){
  settings.style.background="rgb(235, 235, 235)";
  elem.style.display ="none";
  var len = localStorage.length;
  if(save=="save"){
    var name = document.querySelectorAll('.link-name');
    var url = document.querySelectorAll('.link-url');
  }else{
   var name = document.querySelectorAll('.link-name1');
   var url = document.querySelectorAll('.link-url1');
 }
 var i;

 if(name != null){
  for (i = 0; i < name.length; ++i) {
    len = localStorage.length;
    if (name[i].value) {
      localStorage.setItem(name[i].id+"_"+start, name[i].value);
    }
    if (url[i].value) {
      localStorage.setItem(name[i].id+"_"+url[i].id+"_"+start, url[i].value);
    }
       //  addEntry(name[i].value,url[i].value);
       // }
     }

     Initiate();
   } 
 }
  // if(check ==0 ){
  //   alert("Please check input");
  // }


}




function getSecondPart(str) {
  return str.split('#')[1];
}


window.onhashchange = function(e){
   debugger;
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

    setStyle(prev_hash, {'display':'none', 'background':'rgb(80, 80, 80)'});
    if(nth){
      li = tabs.querySelector("ul a:nth-child("+nth+")");
      li.style.background = "rgb(80, 80, 80)";
      li.style.color =  "white";
    }
    li = tabs.querySelector("ul a:nth-child(1)");
    li.style.background = "rgb(235, 235, 235)";
    li.style.color =  "black";
    setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});
    Initiate();

  }
  if(elem.id == "my-folders"){
    setStyle(prev_hash, {'display':'none', 'background':'rgb(80, 80, 80)'});
    if(nth){
      li = tabs.querySelector("ul a:nth-child("+nth+")");
      li.style.background = "rgb(80, 80, 80)";
      li.style.color =  "white";
    }
    li = tabs.querySelector("ul a:nth-child(2)");
    li.style.color =  "black";
    li.style.background = "rgb(235, 235, 235)";
    setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});
    Initiate();

  }
  if(elem.id == "my-team-folders"){

    setStyle(prev_hash, {'display':'none', 'background':'rgb(80, 80, 80)'});
    if(nth){
     li = tabs.querySelector("ul a:nth-child("+nth+")");
     li.style.background = "rgb(80, 80, 80)";
     li.style.color =  "white";
   }
   li = tabs.querySelector("ul a:nth-child(3)");
   li.style.color =  "black";
   li.style.background = "rgb(235, 235, 235)";
   setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});
   Initiate();

 }
 if(elem.id == "public-folders"){
  setStyle(prev_hash, {'display':'none', 'background':'rgb(80, 80, 80)'});
  if(nth){
   li = tabs.querySelector("ul a:nth-child("+nth+")");
   li.style.background = "rgb(80, 80, 80)";
   li.style.color =  "white";
 }
 li = tabs.querySelector("ul a:nth-child(4)");
 li.style.color =  "black";
 li.style.background = "rgb(235, 235, 235)";
 setStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});

 Initiate();
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

function settings(wrap,set) {

  var elem = document.getElementById(set);
  var settings = document.getElementById(wrap);
  if((elem.style.display == "none")||((elem.style.display == ""))){
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
  if(name.value=="") {
    name.style.border = "1px solid red";
    check=0;
  }
  else if((url.value.slice(0,7) != "http://")&&(name.value.length>0)){
    name.style.border = "none";   
    url.style.border = "1px solid red";
    check=0;
  }
  else 
  {
    check = 2;
    name.style.border = "none";
    url.style.border = "none";
  }

}
function url_check(name,url) {
  var name = document.getElementById(name);
  var url = document.getElementById(url);
  if(url.value=="") {
    url.style.border = "1px solid red";
    check=0;
  }
  else if((url.value.slice(0,7) != "http://")&&(url.value.length)){
    url.style.border = "1px solid red";
    check=0;
  }
  else 
  {
    check = 2;
    url.style.border = "none";
    url.style.border = "none";
  }


}





window.onload = function(e) {
     debugger;
  check=0;

  var  x=  window.location.pathname;
  var y = document.title;
  history.pushState("", y,x);
  prev_hash=null;

};

function removeOptions(selectbox)
{
  debugger;
  var i;
  for(i=selectbox.options.length-1;i>=0;i--)
  {
    selectbox.remove(i);
  }
}

function searchFn() {
  
   debugger;
  for (var i = 0; i < localStorage.length; i=i+2){
     var hash = window.location.hash.substring(1);
   var s = document.getElementById("search");
   var name = localStorage.getItem(localStorage.key(i));
   var str1 = localStorage.key(i).split("_", 1);
   var url = localStorage.getItem(localStorage.key(i+1));
   
   var str2 = localStorage.key(i+1).split("_", 2).pop();
   var res = localStorage.key(i).split("_").pop();
    if(name==s.value){
   flag = url;
    if(res == "report"){
     
      if((hash == "quick-reports")||(hash=='')){ 
        OnChange(flag);
        var list = document.querySelector('#links-list');
         str1 =str1 + "";
        var num = str1.substring(4, 5);
        list.selectedIndex = (num-1);
        flag=1;
         }
         else{
      window.location.hash = "quick-reports";
      }
    return;
   }else{ 
      if(hash =="my-team-folders" ){
        OnChange(flag);
        var list = document.querySelector('#links-list2');
         str1 =str1 + "";
        var num = str1.substring(4, 5);
        list.selectedIndex = (num-1);
        flag=1;
         } 
         else{
        window.location.hash ="my-team-folders";
        }
    return;
   }

 }
 
}

  // window.location.hash = "my-folders";

  var search = document.querySelector('#search');
  var frame = document.querySelector('#frame44');
  var extend = document.querySelector('#expand44');
  query = search.value;
  str = "https://www.bing.com/search?q=";

  str2 = str.concat(query);

  frame.src = str2;
  extend.href = str2;
  return;

}