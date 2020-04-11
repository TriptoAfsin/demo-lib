window.onload = function(){
    const search = document.getElementById("search");
    const matchList = document.getElementById("list");
let books;


//this function searches the booklist
const searchBooks = async searchText =>{
    const res = await fetch('../database.json');
    books = await res.json();
    //get matches
    let matches = books.filter(book =>{
        const regex = new RegExp(`${searchText}`, 'gi'); // ^: will search for which resuls starts with 
        return book.name.match(regex) || book.writer.match(regex);
    });

    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML ="";
    }

    outputHtml(matches);

    console.log(matches);
};

//show results in html

const outputHtml = matches =>{
    if(matches.length > 0){
        const html = matches.map(match => `
        <div class="card">
        <p>${match.name} (${match.writer}) <span>${match.subject}</span></p>
        <p><a href="${match.link}">Download</a></p>
        <small>Language: ${match.language} / Page: ${match.page} </small>
        </div>
        `).join('');
        console.log(html);
        matchList.innerHTML = html;
    }
    else{
        matchList.innerHTML = null;
    }
};

window.addEventListener('DOMContentLoaded', searchBooks);
search.addEventListener("keyup", () => searchBooks(search.value));
}

