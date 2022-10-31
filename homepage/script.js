var btn=document.getElementById("entry_btn");
btn.addEventListener("click", addDatail)
function addDatail(){
  location.href="/TeamDetailPage/form/index.html";
}

$(document).ready(function()
 {
        var arr1=JSON.parse(localStorage.getItem("localData"));
        var detailDiv=document.getElementById("detail");
        detailDiv.innerText=localStorage.getItem("localData");
       
 })