const divContact = document.getElementById('contact-container');
const model = document.querySelector('.model');
const newName = document.getElementById('newName');
const newLastName = document.getElementById('newLastName');
const newPhoneNumber = document.getElementById('newPhoneNumber');

if (divContact.innerText == ""){
    divContact.innerHTML = `
<div class="text-center" key="<%= i.id %>">
    <h1>Can't find any contact &#x1F50D</h1>
    <h4><a href="/create" class="click-here">Create one</a></h3>
</div>`
}

document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', (e) => {
        //Getting Key attribute from button's 'grandfather' 
        let parent = e.target.parentNode;
        let contact = parent.parentNode;
        let key = contact.getAttribute('key');

        //Send 'Key' data to Server

        const req = new XMLHttpRequest();

        req.open('DELETE', '/delete');
        req.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
        req.send(`key=${key}`);
        contact.parentNode.removeChild(contact);
        checkcontacts();
    });
  });

var contactKey;

document.querySelectorAll('.edit').forEach(item =>{
    item.addEventListener('click', (e)=>{
        //Getting Key attribute from button's 'grandfather'

        let parent = e.target.parentNode;
        let contact = parent.parentNode;
        contactKey = contact.getAttribute('key');

        model.style.animation = "pop-up 0.5s ease forwards";
        let updateButton = document.getElementById('update');

        updateButton.addEventListener('click', ()=>{
            const req = new XMLHttpRequest();

            req.open('POST', '/contacts')
            req.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
            req.send(`newName=${newName.value}&newLastName=${newLastName.value}&newPhoneNumber=${newPhoneNumber.value}&key=${contactKey}`);
            location.reload();
        });
    });
});

document.getElementById('leave').addEventListener('click', ()=>{
        model.style.animation = "pop-leave 0.5s ease forwards";
        contactKey = null;
});