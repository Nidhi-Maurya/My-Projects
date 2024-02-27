var stat= document.querySelector("h5")

var btn=document.querySelector("#add")
flag=0
btn.addEventListener("click",function(){
   if(flag==0){
    stat.innerHTML="Unfriends";
    stat.style.color= "red";
    btn.innerHTML="Add Friends";
    flag=1;
   }
   else{
    stat.innerHTML="Friends";
    stat.style.color="green";
    btn.innerHTML="Remove Friends";
    flag=0;
   
   }
   
})
