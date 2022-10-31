var idParam = location.search;
var param = new URLSearchParams(idParam);
var pName = param.get("playername");
console.log(pName);
var a=pName.charAt(pName.length-1);
var player=[];
switch(a)
{
    case 1:
        player=JSON.parse(localStorage.getItem('MI'));
    break;
    case 2:
        player=JSON.parse(localStorage.getItem('KKR'));
    break;
    case 3:
        player=JSON.parse(localStorage.getItem('CSK'));
    break;
    case 4:
        player=JSON.parse(localStorage.getItem('RR'));
    break;
    case 5:
        player=JSON.parse(localStorage.getItem('RCB'));
    break;
}
var div =document.createElement("div");
var img=document.createElement("img");
var pNAME=document.createElement("h1");
var teamName=document.createElement("h2");
var price=document.createElement("h3");
var pStatus=document.createElement("h3");
var type=document.createElement("h3");
div.append(img,pNAME,teamName,price,pStatus,type);