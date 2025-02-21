document.addEventListener("DOMContentLoaded", function(){
    
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');

    let error = document.getElementById('error');

    if(password != password2){
        error.innerHTML = 'Passwords do not match';
    }
    
    console.log('Hi')
})