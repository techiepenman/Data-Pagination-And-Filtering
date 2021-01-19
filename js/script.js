/*
 Data Pagination and Filtering
*/

const itemsPerPage = 9;

// This function will create and insert/append the elements needed to display a "page" of nine students

const showPage = (list, page) => {
   
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;
  const ul = document.querySelector('.student-list');
  ul.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
     if ( i >= startIndex && i < endIndex) {
        const li = document.createElement('li');
        li.classList.add('student-item', 'cf');
        const student = document.createElement('div');
        //Create the DOM element for each student
        student.innerHTML =  `<div class="student-details">
        <img class="avatar" src=${list[i].picture.thumbnail} alt="Profile Picture">
        <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span></div>
        <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
        </div>`;
        li.appendChild(student);
        ul.appendChild(li);
     }
  }

}

//This function adds the pagination buttons dynamically to the page
const addPagination = (list) => {
const numOfPages = Math.ceil(list.length / itemsPerPage);
const linkList = document.querySelector('.link-list');
linkList.innerHTML = '';
for (let i = 1; i <= numOfPages; i++) {
   const button  = document.createElement('li');
   button.innerHTML = `<button type="button">${i}</button>`;
   linkList.insertAdjacentElement('beforeend', button);
   document.querySelector('button').className = 'active';
}
//Click on the page numbers (pagination buttons)
linkList.addEventListener('click', (e) => {
   if (e.target.tagName === 'BUTTON' ) {
      document.querySelector('.active').className = '';
      e.target.className = 'active';
      const pageNumber = e.target.textContent;
      showPage(list, pageNumber);
   }
  })
}
showPage(data,1);
addPagination(data);
