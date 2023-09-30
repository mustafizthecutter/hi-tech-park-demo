const sections = document.querySelectorAll('section');
// console.log(sections);
for (const section of sections) {
    // console.log(section);
    section.style.backgroundColor = 'lightgray';
    section.style.border = '2px solid red';
    section.style.marginBottom = '7px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}
// const frndsPart = document.getElementById('friends-container');
// frndsPart.style.backgroundColor = 'yellow';
const friendsPart = document.getElementById('friends-container');
friendsPart.classList.add('yellow-bg');
friendsPart.classList.remove('large-text');