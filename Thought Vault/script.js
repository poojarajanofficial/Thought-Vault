var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")
var addpopuptbtn=document.querySelector(".btn1")

addpopuptbtn.addEventListener("click",function(){

overlay.style.display="block"
popupbox.style.display="block" 

})
var cancelbtn=document.getElementById("cancelpopup")
cancelbtn.addEventListener("click",function(event){
event.preventDefault()

 

overlay.style.display="none"
popupbox.style.display="none" 
})
var addbtn=document.getElementById("addthought")
addbtn.addEventListener("click",function(event){
event.preventDefault()
    
})

var container=document.querySelector(".container")
 var thoughtinput=document.getElementById("thoughtinput")
var addbtn=document.getElementById("addthought")
var cancelbtn=document.getElementById("cancelpopup")

 

addbtn.addEventListener("click",function(){
    
     
    overlay.style.display="none"
    popupbox.style.display="none" 

var div=document.createElement("div")
div.setAttribute("class","thoughtcontainer")
div.innerHTML=`<h3>${thoughtinput.value}</h3>
<button onclick="deleteitem(event)">Delete</button>`
container.append(div)
})
 function deleteitem(event){
    event.target.parentElement.remove()
 }