
function showNumb(num){
  let z = document.getElementById("sub2");
if(z.value!==""){
  document.getElementById('sub').value=z.value;
  z.value="";
}    
let x=document.getElementById("sub").value+=num;
}
function del(){
  let x=document.getElementById("sub").value;
   document.getElementById("sub").value=x.substr(0, x.length-1);
}
function result(){
  let x=document.getElementById("sub").value;
  let y=eval(x);
  document.getElementById("sub2").value=y;
}
function clr(){
  document.getElementById("sub").value="";
  document.getElementById("sub2").value="";
}

