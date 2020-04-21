 
function Book(title,author,ISBN){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
}



// custom method 
const method = {

    getBooks: () =>{
        let books;
        if(localStorage.getItem('books') === null){
            books = []; // return an empty array once
        } else {
            books = JSON.parse(localStorage.getItem("books"));  // return array 
        }
        return books;
    },

    displayOutput : () => {
        try{
            if(JSON.parse(localStorage.getItem("books"))){
                bookk = JSON.parse(localStorage.getItem("books"));
                const bookList = document.querySelector("#book-list");
        let tr= "";
        
        bookk.forEach(element => {
           
            const {title,author,ISBN} = element
               tr+= ` <tr>
                 <td>${title}</td>
                <td>${author}</td>
                <td>${ISBN}</td>
                <td><b class="delete-btn">x</b></td> 
                </tr>`
        });

        bookList.innerHTML=tr;
            }
        }
        catch(e){

        }
    },

    store: (book) => {
        const books = method.getBooks();
        books.push(book)
        localStorage.setItem("books",JSON.stringify(books));
        method.displayOutput();
    },

    showAlert: (message, className) => {
        if(document.querySelector(".redMessage")){
        }else{
        const alterMessage = document.createElement("div");
        alterMessage.className = `alert ${className}`;
        alterMessage.appendChild(document.createTextNode(message));
       
        const section = document.querySelector("section");
        const main = document.querySelector("main");
        section.insertBefore(alterMessage,main);
        
        // Vanish in 3 seconds 
        setTimeout( function() {
            alterMessage.className = 'remove';
        },2000);

        setTimeout(()=> document.querySelector('.remove').remove(),3500)
    }
    },

    clearFields: () => {
         document.querySelector("#title").value="";
         document.querySelector("#author").value="";
          document.querySelector("#ISBN").value="";
    }
}

const validation = (e) =>{
    e.preventDefault()
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const ISBN = document.querySelector("#ISBN").value;

    if (title === "" || author === "" || ISBN === "") {
        method.showAlert('Please fill in all fields', 'redMessage')
    } else {  
        const book = new Book(title,author,ISBN);

        method.store(book);
        method.clearFields();
    }

}

// 01 Event Listener
 document.querySelector("form").addEventListener("submit", validation)


 

 method.displayOutput();











