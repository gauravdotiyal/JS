//set the value of count
let count=0;

const btns=document.querySelectorAll(".btn");//this will give the classlist of buttons
const value=document.querySelector(".value");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const item=e.currentTarget.classList;
        if(item.contains("decrease")){ 
            count--;
            if(count<0)
            value.style.color='red'; 
        }
        else if(item.contains("increase")){
            count++;
            if(count>0)
            value.style.color='green'; 
        }
        else if(item.contains("reset")){
            count=0;
            if(count==0) 
            value.style.color='black'; 
        }
        value.textContent=count; 
    })
})
