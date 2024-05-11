const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const color=document.querySelector(".color");
const btn=document.getElementById("btn");

btn.addEventListener('click',function(){
    let hexnumber='#';
    for(let i=0;i<6;i++){
        hexnumber+=hex[getrandomnumber()];
    }

    document.body.style.backgroundColor=hexnumber;
    color.textContent=hexnumber
    color.style.color=hexnumber;
})

function getrandomnumber(){
    return Math.floor(Math.random()*hex.length);
}