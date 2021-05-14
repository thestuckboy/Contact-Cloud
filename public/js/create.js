const response = document.getElementById('response');
const submitButton = document.getElementById('submit')
const fname = document.getElementById('fname');
const flastName = document.getElementById('flastname');
const fnumberf = document.getElementById('fnumberf');

function sendData (name, lastName, phone){
    let req = new XMLHttpRequest();
    req.open('POST', '/create');
    req.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
    req.send(`name=${name}&lastname=${lastName}&numberp=${phone}`);
}

submitButton.addEventListener('click', ()=>{
    response.innerHTML = null;
    let name = fname.value;
    let lastName = flastName.value;
    let phone = fnumberf.value;
    if(name.length > 3){
        if (lastName.length >= 4){
            if (phone.length >= 10 ){
                // 093999999
                sendData(name, lastName, phone);
                response.innerHTML = `<h6 class="valid">Contact data has been submitted.<br><br>You can upload another contact if you like.</h6>`
                setTimeout(()=>{
                    response.innerHTML = null;
                }, 6000)
            }
            else {
                response.innerHTML = '<h6 class="invalid" >Phone length must be 10 or more.</h6>'
            }
        }
        else {
            response.innerHTML = '<h6 class="invalid" >Last name must be more than 4 characters</h6>'
        }
    }
    else {
        response.innerHTML = `<h6 class="invalid" >Name must be more than 3 characters</h6>`
    }
});