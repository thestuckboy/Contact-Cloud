const title = document.getElementById('title');
const home = document.getElementById('home');
const create = document.getElementById('create');
const contacts = document.getElementById('contacts');

if (title.innerHTML == "Contact Cloud - Contacts"){
    contacts.classList.toggle('active');
}
else if (title.innerHTML == "Contact Cloud - Create"){
    create.classList.toggle('active');
}
else if (title.innerHTML == "Contact Cloud"){
    home.classList.toggle('active');
}
else {
    console.error(`Couldn't toggle 'active' class. (See from line 6 to 16)`);
}

function checkcontacts (){
    const divContact = document.getElementById('contact-container');

    if (divContact.innerText == ""){
    divContact.innerHTML = 
    `
    <div class="text-center" key="<%= i.id %>">
        <h1>Can't find any contact &#x1F50D</h1>
        <h4><a href="/create" class="click-here">Create one</a></h3>
    </div>
    `

}

}

ScrollReveal().reveal('.main-container', {
    delay: 500,
    duration: 1000,
    origin: 'top',
    scale: 1,
    cleanup: true
});

ScrollReveal().reveal('header', {
    delay: 1000,
    duration: 1500,
    origin: 'left',
    scale: 1,
    easing: 'ease-out',
    cleanup: true
});

ScrollReveal().reveal('.div-presentation', {
    delay: 1500,
    duration: 2000,
    origin: 'left',
    scale: 0.9,
    easing: 'ease-out',
    cleanup: true
});

/*Create*/

ScrollReveal().reveal('.form-upload', {
    delay: 1500,
    duration: 2000,
    origin: 'left',
    scale: 0.9,
    easing: 'ease-out',
    cleanup: true
});

/*Contacts*/

ScrollReveal().reveal('.main-content', {
    delay: 1500,
    duration: 2000,
    origin: 'left',
    scale: 0.9,
    easing: 'ease-out',
    cleanup: true
});