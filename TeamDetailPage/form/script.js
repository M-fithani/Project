var btn=document.getElementById("add_btn");
btn.addEventListener("click",addData);
 var arr=[];
 function addData(e)
 {
    e.preventDefault();
   
    
    var pName=document.getElementById('player_name').value;
    var tName = document.getElementById("Team_name").value;
    //console.log(typeof document.getElementById("Team_name").value);
    var  pPrice =document.getElementById("player_price").value;
    var  pStatus=document.getElementById("player_status").value;
    var  pType=document.getElementById("player_type").value;

    arr.push(pName,tName,pPrice,pStatus,pType);
    var data=JSON.stringify(arr);
    localStorage.setItem("localData", data);
    getData();
    location.href="/homepage/index.html";
 }
 function getData()
 {
    var str=localStorage.getItem("localData");
    if (str!=null)
        arr=JSON.parse(str);
      
       
 }

 