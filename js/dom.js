// DOM Selection
// document.getElementById() -> Element
const title = document.getElementById('judul');

title.style.color = 'red';
title.style.backgroundColor = '#fafafa';
title.innerHTML = 'Origintypes';

// document.getElementsByTagName() -> HTMLcollection
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '30px';

// document.getElementByClassName() -> HTMLcollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'origintypes keyboard';

// document.querySelector() -> Element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '20px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'yellow';

// document.querySelectorAll() -> Node List

const paragraph = document.querySelectorAll('p');
for (i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'gray';
}

// Change Node Root
const sectionB = document.querySelector('section#b');
const root1 = sectionB.getElementsByTagName('p')[0];
root1.style.backgroundColor = 'orange';
