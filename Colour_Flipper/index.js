const colors=["green","red","yellow","green"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',function(){ 
    //get random number
    const randomnumber=getrandomnumber();
    // console.log(randomnumber);
    document.body.style.backgroundColor=colors[randomnumber];
    color.textContent=colors[randomnumber];
    color.style.color=colors[randomnumber];
    
})
function getrandomnumber(){
    return Math.floor(Math.random()*colors.length);
}