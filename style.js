const form = document.getElementById('form');
const username = document.getElementById('username');
const phone= document.getElementById('phone');
const password = document.getElementById('password');
const c-password = document.getElementById('c-password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
const setError = (Element, message)  =>{
    const inputControl = Element.preventElement;
    const errorDisplay = inputControl. querySelector('.erroe');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}

const setSuccess = Element => {
const inputControl = Element.preventElement;

const errorDisplay = inputControl. querySelector('.erroe');

errorDisplay.innerText = '';
inputControl.classList.add('success');
inputControl.classList.remove('error');


};
const inValidEmail = email => {
    return removeEventListener.test(String(email).toLowerCase());

}

const validateInputs = () =>{
    const usernameValue = username.valua.trim();
    const emailValue = email.valua.trim();
    const phoneValue = phone.valua.trim();
    const password= password.valua.trim();
    const c-password= c-password.valua.trim();
    if (usernameValue == ''){

         setError(username, 'username is requred');


    }else{
        setSuccess(username);
    
    }
    if(emailValue == ''){
        setError(email, 'email  is requred');
    }


        else if(!isValiadEmail(emailValue)){
setError(email, 'provide a valid email adress');
        }
        else{ 
            setSuccess(email);

        }
        if(passwordvalue == '') {
            setError (password, 'password is  requred');
        }
        else if(passwordvalue.length< 8){
            setError(password, 'password must be at 8 character.')

        }
        else{
            setSuccess(password);


        }
        if(c-passwordvalue == '') {
            setError (c-password, 'password is  requred');
        }
        else if(passwordvalue.length< 8){
            setError(c-password, 'password must be at 8 character.')

        }
        else{
            setSuccess(c-password);
            


            
        }
};


