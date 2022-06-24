//creating a popup

const button = document.querySelector('.btn-popup');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () =>{
    popup.style.display = 'block';
});
close.addEventListener('click',()=>{
popup.style.display = 'none';
});
popup.addEventListener('click', ()=>{
    popup.style.display='none';
});


//clock

const clock = document.querySelector('.clock');

const tick = () =>{
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    
    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>  


    `;
    clock.innerHTML = html;

};

setInterval(tick, 1000);


//form validation

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');



form.addEventListener('submit', e=> {
    e.preventDefault();
    

//validation

const username = form.username.value;
const usernamePattern = /^[a-zA-Z]{6,12}$/;


if(usernamePattern.test(username)){
    feedback.textContent = 'that is a valid username';
}
else{
    feedback.textContent = 'that is not a valid username, username must contain only letter range between 6 to 12'
}


});

//livefeedback
const username = form.username.value;
const usernamePattern = /^[a-zA-Z]{6,12}$/;
form.username.addEventListener('keyup', e =>{

    if(usernamePattern.test(e.target.value)){
      form.username.setAttribute('class','success');
    
    }else{
        form.username.setAttribute('class','error');
        
    }
});







