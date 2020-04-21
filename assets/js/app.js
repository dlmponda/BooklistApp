 
// custom method 
const method = {
    showAlert: (message, className) => {
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
}

const validation = (e) =>{
    e.preventDefault()
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const ISBN = document.querySelector("#ISBN").value;

    if (title === "" || author === "" || ISBN === "") {
        method.showAlert('Please fill in all fields', 'redMessage')
       
    } else {
        
       
    }

}

// 01 Event Listener
 document.querySelector("form").addEventListener("submit", validation)












