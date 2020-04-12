window.onload = function(){
    const search = document.getElementById("search");
    const matchList = document.getElementById("list");
let books;

let database = [
    {
		"writer": "Gias Uddin",
		"name": "Physics for Engineers",
        "language": "English",
        "subject": "Physics",
		"page": "1200",
		"link": "https://drive.google.com/file/d/1AGP280Qf8lD6es6yTtJBHbExDePOY-Rl/view"
	},
    {
		"writer": "James Halliday",
		"name": "Elementary Physics",
        "language": "English",
        "subject": "Physics",
		"page": "800",
		"link": "fdfdfd"
    },
    {
		"writer": "Dr. Hosne Ara",
		"name": "Natural Textile Fibre",
        "language": "English",
        "subject": "Yarn",
		"page": "400",
		"link": "fdfdfd"
	}
];
    
//this function searches the booklist
const searchBooks = async searchText =>{
    books = database;
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

