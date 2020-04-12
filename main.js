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
        "link": "https://drive.google.com/file/d/1AGP280Qf8lD6es6yTtJBHbExDePOY-Rl/view",
        "terms": "" ,
    },
    {
		"writer": "J.D Lee",
		"name": "Inorganic Chemistry",
        "language": "English",
        "subject": "Chemistry",
		"page": "342",
        "link": "https://drive.google.com/file/d/1iaXX15sPYGb1xosXdNyv-fkk5nX3kjEe/view",
        "terms": "" ,
    },
    {
		"writer": "S Chand",
		"name": "Essentials of Physical Chemistry",
        "language": "English",
        "subject": "Chemistry",
		"page": "1166",
        "link": "https://drive.google.com/file/d/1GJiAT76ibzUTemWDeyUFS6pza6ZJiucM/view",
        "terms": "" ,
    },
    {
		"writer": "Raymond Chang",
		"name": "Chemistry 10th Edition",
        "language": "English",
        "subject": "Chemistry",
		"page": "1170",
        "link": "https://drive.google.com/file/d/1WzTGWtqKbptJ11SHz5qO2Lab5lmPiukL/view",
        "terms": "" ,
    },
    {
		"writer": "Ebbing",
		"name": "General Chemistry",
        "language": "English",
        "subject": "Chemistry",
		"page": "1157",
        "link": "https://drive.google.com/file/d/1iw9YEPnfDIiHGPiBO0S-s5JR6VCKVL9v/view",
        "terms": "" ,
    },
    {
		"writer": "Morrison & Boyed",
		"name": "Organic Chemistry ",
        "language": "English",
        "subject": "Chemistry",
		"page": "1274",
        "link": "https://drive.google.com/file/d/1TG63lOykdJYpuD_QDZOK1QnVTBXqDvJB/view",
        "terms": "" ,
    },
    {
		"writer": "Solomons",
		"name": "Organic Chemistry",
        "language": "English",
        "subject": "Chemistry",
		"page": "__",
        "link": "https://drive.google.com/file/d/144k1GK2Yb1GYBx6bYq8YFi6uQdcSi1of/view",
        "terms": "" ,
    },
    {
		"writer": "M R Spiegel",
		"name": " Vector Analysis",
        "language": "English",
        "subject": "Math",
		"page": "234",
        "link": "https://drive.google.com/file/d/1GZ-FN-qDFnJ4q-XDB64eEJM3xpyXjcUy/view",
        "terms": "" ,
    },
    {
		"writer": "Abdul Matin",
		"name": " Vector Analysis",
        "language": "Bangla",
        "subject": "Math",
		"page": "234",
        "link": "https://drive.google.com/file/d/1GZ-FN-qDFnJ4q-XDB64eEJM3xpyXjcUy/view",
        "terms": "" ,
    },
    {
		"writer": "Schaum's",
		"name": " Complex Variables",
        "language": "English",
        "subject": "Math",
		"page": "385",
        "link": "https://drive.google.com/file/d/1Uunfww8lhHYJ9iDoXIGcWPYy5RmqZA7a/view",
        "terms": "" ,
    },
    {
		"writer": "Bahl & Tuli",
		"name": "A Textbook of Organic Chemistry",
        "language": "English",
        "subject": "Chemistry",
		"page": "916",
        "link": "https://drive.google.com/file/d/18M6idiDbnF1kYSbL5in_PYDIWojQEZS7/view",
        "terms": "" ,
	},
    {
		"writer": "Halliday & Resnick",
		"name": "Fundamentals of Physics",
        "language": "English",
        "subject": "Physics",
		"page": "800",
        "link": "fdfdfd",
        "terms": "" ,
    },
    {
		"writer": "Brijlal",
		"name": "Heat and Thermodynamics",
        "language": "English",
        "subject": "Physics",
		"page": "341",
        "link": "https://drive.google.com/file/d/1GmAQjfoh7mBUMaj_70uf7KtpP4_TJT42/view",
        "terms": "" ,
    },
    {
		"writer": "Max Planck",
		"name": "Theatise on Thermodynamics",
        "language": "English",
        "subject": "Physics",
		"page": "318",
        "link": "https://drive.google.com/file/d/1BN3kVMtkXOVJxaAEL9CFD_kRNTKStCyH/view",
        "terms": "" ,
    },
    {
		"writer": "WE Morton",
		"name": "Physical Properties of Textiles Fibers",
        "language": "English",
        "subject": "Yarn / Textile",
		"page": "765",
        "link": "https://drive.google.com/file/d/1r-AcYxYkbWMIPBvyg2ldUf4hJC7UNGXS/view",
        "terms": "" ,
    },
    {
		"writer": "Dr. Ahmed Jalal Uddin",
		"name": "Physical Characterization of Textile Fibres",
        "language": "English",
        "subject": "Yarn / Textile",
		"page": "372",
        "terms": "" ,
        "link": "https://drive.google.com/file/d/1ATL2uFGPVZh-jJtoFyTCJPGzel315rQh/view?mcp_token=eyJwaWQiOjEwMzE0ODU1Nzk0MDI5OSwic2lkIjozNTExMTQ2NzY1NjI1OTMyLCJheCI6ImQ0ZGE5NmRhMDZkZjBlNWUxOTlkYTk0NjBjMmQ3YzFkIiwidHMiOjE1ODY2ODcyNzAsImV4cCI6MTU4OTEwNjQ3MH0.A_zZtLLhe1UVqpp3NJZSds19yOjR9hD998j2Fybc6o0"
    },
    {
		"writer": "R.Alagirusamy & A.Das",
		"name": "Technical Textiles Yarns ",
        "language": "English",
        "subject": "Yarn / Textile",
		"page": "631",
        "link": "https://drive.google.com/file/d/1E2kSyq7Zvh7y7r8ZEAedWEHL-_ACNrvG/view",
        "terms": "" ,
    },
    {
		"writer": "Michael Allaby",
		"name": "Basic Environmental Science",
        "language": "English",
        "subject": "Environment / Science",
		"page": "340",
        "link": "https://drive.google.com/file/d/1uGuij_1koYVEX58EUQ4QD1We5fik28D3/view?usp=sharing",
        "terms": "ESE Environment Science Waste Engineering" ,
    },
    {
		"writer": "Erach Bharucha",
		"name": "Textbook for Environmental Studies",
        "language": "English",
        "subject": "Environment / Science",
		"page": "361",
        "link": "https://drive.google.com/file/d/1999m686rklX4OmDNjk42xM-qae1wligI/view?usp=sharing",
        "terms": "ESE Environment Science Waste Engineering" ,
    },
    {
		"writer": "Dr. Mamun Kabir",
		"name": "Advanced Polymer Chemistry",
        "language": "English",
        "subject": "Polymer / Science",
		"page": "164",
        "link": "https://drive.google.com/file/d/14Ua83Sa2goR0IHuT4W-ii9-oHOLGVp88/view",
        "terms": "material Science polymer Engineering" ,
    },
    {
		"writer": "Gowarikhar Sreedhar",
		"name": "Polymer Science",
        "language": "English",
        "subject": "Polymer / Science",
		"page": "413",
        "link": "https://drive.google.com/file/d/1JG_tKQK5luWEmknQLuXseER4iti_A-gH/view",
        "terms": "material Science polymer Engineering" ,
    },
    {
		"writer": "William D. Calister",
		"name": "Materials Science & Engineering",
        "language": "English",
        "subject": "Material / Science",
		"page": "990",
        "link": "https://drive.google.com/file/d/1sS4QI07RzARo6ZT0tUeULmwXMhXLFqVf/view",
        "terms": "material Science rethwisch Engineering ipe mse" ,
    },
    {
		"writer": "R C Hibbeler",
		"name": "Mechanics of Materials",
        "language": "English",
        "subject": "Mechanical / Civil",
		"page": "918",
        "link": "https://drive.google.com/drive/folders/1mgu7pBcFpn3wSIptIOhnJN6HT4K2sywq",
        "terms": "material Science mechanical Engineering civil" ,
    },
    {
		"writer": "Pytel & Singer",
		"name": "Stength of Materials",
        "language": "English",
        "subject": "Mechanical / Civil",
		"page": "302",
        "link": "https://drive.google.com/file/d/1GWCq2Jc4KHjOezeGUHL6hy-t_5rk25oz/view?usp=sharing",
        "terms": "material Science mechanical Engineering civil" ,
    },
    {
		"writer": "Dr. R K Bansal",
		"name": "A Textbook of Stength of Materials",
        "language": "English",
        "subject": "Mechanical / Civil",
		"page": "1220",
        "link": "https://drive.google.com/file/d/17NjvkL_E_-_sbQrSzi94uTLK15dAL93o/view?usp=sharing",
        "terms": "material Science mechanical Engineering civil" ,
    },
    {
		"writer": "John K Vennard",
		"name": "Elementary Fluid Mechanics",
        "language": "English",
        "subject": "Mechanical / Civil",
		"page": "372",
        "link": "https://drive.google.com/file/d/1e9UUyeS-EIcIwBAvIHq6qJ5D9tQKUHaV/view?usp=sharing",
        "terms": "material Science mechanical Engineering civil fluid" ,
    },
    {
		"writer": "Magoosh",
		"name": "Magoosh GRE Vocabulary",
        "language": "English",
        "subject": "GRE",
		"page": "98",
        "link": "https://drive.google.com/file/d/1nMJye9E6kytD4X36APlgmS7Ctu-B1a4q/view?usp=sharing",
        "terms": "vocabulary gre english magoosh vocal" ,
    },
    {
		"writer": "Manhattan Prep",
		"name": "5lb. Book of GRE Practise Problems",
        "language": "English",
        "subject": "GRE",
		"page": "1225",
        "link": "https://drive.google.com/file/d/12EN8kLd4JQvJN0ktSG3RjKQlcrlAy0qn/view?usp=sharing",
        "terms": "gre english manhataan " ,
    },
    {
		"writer": "Kaplan",
		"name": "GRE Verbal Workbook",
        "language": "English",
        "subject": "GRE",
		"page": "819",
        "link": "https://drive.google.com/file/d/12EN8kLd4JQvJN0ktSG3RjKQlcrlAy0qn/view?usp=sharing",
        "terms": "gre english kaplan verbal" ,
    },
    {
		"writer": "H K Dass",
		"name": "Advanced Engineering Mathematics",
        "language": "English",
        "subject": "Math / Engineering",
		"page": "1332",
        "link": "https://drive.google.com/drive/folders/1mgu7pBcFpn3wSIptIOhnJN6HT4K2sywq",
        "terms": " Science Engineering math mathematics" ,
    },
    {
		"writer": "Sidney H Avner",
		"name": "Introduction to Physical Metallurgy",
        "language": "English",
        "subject": "Material / Science",
		"page": "354",
        "link": "https://drive.google.com/file/d/0B0FdOS_BOGE3cXdoeDdtU2xBWGc/view",
        "terms": "material Science Engineering ipe mse" ,
    },
    {
		"writer": "H Varian",
		"name": "Intermediate Microeconomics",
        "language": "English",
        "subject": "Economics",
		"page": "806",
        "link": "https://drive.google.com/file/d/1KSqv9j1T7VF0bdWDgutWxESTxAcAmo3P/view",
        "terms": "economics ইকনমিক্স ইকো" ,
    },
    {
		"writer": "Prof. M A Kashem",
		"name": "Garments & Technology",
        "language": "English",
        "subject": "Apparel / Textile",
		"page": "201",
        "link": "https://drive.google.com/file/d/1WbDuIlaq8xGAPFxt8zCXJFAgxHQZEY-0/view",
        "terms": "garments apparel textile গার্মেন্টস এপারেল কাশেম  টেক্সটাইল " ,
    },
    {
		"writer": "Carr & latham",
		"name": "Technology of Clothing Manufacture",
        "language": "English",
        "subject": "Apparel / Textile",
		"page": "347",
        "link": "https://drive.google.com/file/d/1-7Ex1B7j8-8kSqjjbAyu2PCrv5Cs10xO/view",
        "terms": " apparel textile  এপারেল tyler  টেক্সটাইল clothing manufacture" ,
    },
    {
		"writer": "N. Gregory Mankiw",
		"name": "Macroeconomics",
        "language": "English",
        "subject": "Economics",
		"page": "641",
        "link": "https://drive.google.com/file/d/1r00diaKAmoK6aKShV9-Yzcpw53yP3cJt/view",
        "terms": "economics ইকনমিক্স ইকো" ,
    },
    {
		"writer": "Alfred Rudin",
		"name": "The Elements of Polymer Science & Engineering",
        "language": "English",
        "subject": "Polymer / Science",
		"page": "529",
        "link": "https://drive.google.com/file/d/1nmJ2uF7CLWDKNDmniS0H5kpuOHqW-gE9/view",
        "terms": "material Science polymer Engineering" ,
    },
    {
		"writer": "Tamim Shahriar Subin",
		"name": "Computer Programming",
        "language": "Bangla",
        "subject": "Programming / Science",
		"page": "117",
        "link": "https://drive.google.com/file/d/1vtnEQKKXSV6XAaoEVhrRPRbPcakhh6c_/view",
        "terms": "cse Science computer Engineering coding C tamim তামিম সুবিন প্রোগ্রামিং কম্পিউটার কোড shubin bangla code" ,
    },
    {
		"writer": "Brian & Dennis Ritchie",
		"name": "ANSI C",
        "language": "English",
        "subject": "Programming / Science",
		"page": "214",
        "link": "https://www.dropbox.com/s/mscokhiins5sf7f/The%20ANSI%20C%20Programming%20Language.pdf?dl=0",
        "terms": "cse Science computer Engineering coding C code code " ,
    },
    {
		"writer": "Dr. YK Singh",
		"name": "Environmental Science",
        "language": "English",
        "subject": "Environment / Science",
		"page": "319",
        "link": "https://drive.google.com/file/d/1lGNltbixmBUh8RlOcvF6yCqPUdRKVTwo/view?usp=sharing",
        "terms": "ESE Environment Science Waste Engineering" ,
    },
    {
		"writer": "PA Vesilind ,SM Morgan, LG Heine",
		"name": "Introduction to Environmental Engineering",
        "language": "English",
        "subject": "Environment / Science",
		"page": "628",
        "link": "https://drive.google.com/file/d/1uGuij_1koYVEX58EUQ4QD1We5fik28D3/view?usp=sharing",
        "terms": "ESE Environment Schience Waste Engineering" ,
    },
    {
		"writer": "Dr. Hosne Ara",
		"name": "Natural Textile Fibre",
        "language": "English",
        "subject": "Yarn / Textile",
		"page": "150",
        "link": "https://drive.google.com/file/d/1M6KFl1c6K20NSbd7mvh9bAUXWxslREHE/view",
        "terms": "" ,
	}
];


document.getElementById("database").innerHTML = database.length + " Books";

//this function searches the booklist
const searchBooks = async searchText =>{
    books = database;
    //get matches
    let matches = books.filter(book =>{
        const regex = new RegExp(`${searchText}`, 'gi'); // ^: will search for which resuls starts with 
        return book.name.match(regex) || book.writer.match(regex) || book.subject.match(regex) || book.terms.match(regex);
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
        <p class="card-title">${match.name} <br>(${match.writer}) <br><span>${match.subject}</span></p>
        <p><a href="${match.link}" target="blank">Download</a></p>
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
console.log(database.length);
}



