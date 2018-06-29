// let bookArray = [
//   'book_1',
//   'book_2',
//   'book_3',
//   'book_4',
//   'book_5',
//   'book_5',
//   'book_6',
//   'book_7',
//   'book_8',
//   'book_9',
//   'book_10'
// ];

// function createList(Array) {
//   for (let i = 0; i < Array.length; i++) {
//     let ul = document.createElement('ul');
//     ul.id = 'ul-id';
//     document.body.appendChild(ul);
  
//     let li = document.createElement('li');
//     li.id = 'li-id';
//     ul.appendChild(li);
//     li.textContent = Array[i];
//   }
// }

// createList(bookArray);

let bookObject = {
  book_1: { title: 'move', language: 'English', author: '######', img: '1.jpg' },
  book_2: { title: 'move', language: 'English', author: '#####', img: '2.jpg' },
  book_3: { title: 'move', language: 'English', author: '######', img: '3.jpg' },
  book_4: { title: 'move', language: 'English', author: '#######', img: '4.jpg' },
  book_5: { title: 'move', language: 'English', author: '#######', img: '5.jpg' },
  book_6: { title: 'move', language: 'English', author: '######', img: '6.jpg' },
  book_7: { title: 'move', language: 'English', author: '#######', img: '7.jpg' },
  book_8: { title: 'move', language: 'English', author: '#######', img: '8.jpg' },
  book_9: { title: 'move', language: 'English', author: '######', img: '9.jpg' },
  book_10: { title: 'move', language: 'English', author: '######', img: '10.jpg' }
}

let homeWork = function createList(Obj) {
  for (let i = 0; i < Object.entries(Obj).length; i++) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);

    let li = document.createElement('li');
    ul.appendChild(li);

    let h2 = document.createElement('h2');
    li.appendChild(h2);
    h2.textContent = Object.entries(Obj)[i][1].title;

    let h4 = document.createElement('h4');
    li.appendChild(h4);
    h4.textContent = Object.entries(Obj)[i][1].language;

    let h3 = document.createElement('h3');
    li.appendChild(h3);
    h3.textContent = Object.entries(Obj)[i][1].author;

    let img = document.createElement('img');
    li.appendChild(img);
    img.setAttribute('src', Object.entries(Obj)[i][1].img);

    // styling page

    document.body.style.display = 'flex';
    document.body.style.flexFlow = 'row wrap';
    document.body.style.justifyContent = 'space-around';
    document.body.style.fontFamily = 'sans-serif';

    ul.style.listStyle = 'none';
    ul.style.padding = '0';
    ul.style.margin = '1rem';
    ul.style.width = '350px';
    ul.style.maxHeight = '450px';
    ul.style.overflow = 'hidden';
    ul.style.border = '1px solid black';

    li.style.display = 'flex';
    li.style.flexDirection = 'column';

    h2.style.margin = '0';
    h2.style.padding = '0.4rem';
    h2.style.fontSize = '1.3rem';

    h3.style.margin = '0';
    h3.style.padding = '0.4rem';
    h3.style.fontSize = '1rem';

    h4.style.margin = '0';
    h4.style.padding = '0.4rem';
    h4.style.fontSize = '0.8rem';

    img.style.objectFit = 'cover';
  }
}

homeWork(bookObject);