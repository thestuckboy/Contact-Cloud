const divContact = document.getElementById('contact-container');

if (divContact.innerText == ""){
    divContact.innerHTML = `
<div class="text-center" key="<%= i.id %>">
    <h1>Can't find any contact &#x1F50D</h1>
    <h4><a href="/create" class="click-here">Create one</a></h3>
</div>`
}