const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit",(event) => {
    event.preventDefault();

    const input = document.querySelector("input");
    ul.innerHTML += `<li>${input.value}</li>`;
    input.value = "";


})