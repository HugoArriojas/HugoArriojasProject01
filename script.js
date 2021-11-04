    // Selecting comment form on blog page
    formEl = document.querySelector("form.leaveComment");

    // Adding event listener to submit button
    formEl.addEventListener("submit", function (e) {
        // Stop page from refreshing
        e.preventDefault();
        // retrieve user information from the input boxes for name, email, and comment
        const userName = document.querySelector("input#name").value;
        const userEmail = document.querySelector("input#email").value;
        const userComment = document.querySelector("textarea#comment").value;

        // Verify required fields are filled out
        if (userName && userComment && userEmail) {
            // Make empty li container with class "comment" to put into dynamicComment ul
            const entryContainer = document.createElement("li");
            entryContainer.classList.add("comment");

            // add placeholder image for guests to match formatting
            entryContainer.innerHTML = " <img src='./styles/assets/home-circle-text.png' alt='Circular logo of Yummm a fancy food place - food in magenta'>"
            
            // Create div to be placed inside list element with class "commentTxt" and place inside li.comment containter
            const entry = document.createElement("div");
            entry.classList.add("commentTxt");
            entryContainer.appendChild(entry);

            // create paragraph element for name and user email
            const nameEl = document.createElement("p");
            nameEl.innerHTML = `<strong>${userName}</strong> • ${userEmail}`

            // create paragraph element for user comment
            const commentEl = document.createElement("p");
            commentEl.textContent = userComment;
            
            // create final paragraph element for date of comment posted and use template literals to format fate of comment
            const dateEl = document.createElement("p");
            const today = new Date();
            dateEl.innerHTML = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()} at ${today.getHours()}:${today.getMinutes()}`;

            // Append name, comment, and date paragraphs to div.commentTxt inside of li.comment element
            entry.appendChild(nameEl);
            entry.appendChild(commentEl);
            entry.appendChild(dateEl);
            
            // Append li.comment element to dynamicComment ul on page
            const blankList = document.querySelector("ul.dynamicComment");
            blankList.appendChild(entryContainer);

            // Clear the input fields 
            document.querySelector("#name").value = ""; 
            document.querySelector("#email").value = "";
            document.querySelector("#website").value = "";
            document.querySelector("textarea").value = "";
            // How to make more DRY?
                // make a foreach loop to make all vals ""  
                // using document.querySelectorAll("#input")? 
                // to examine with more time 🚨
    } else {
        alert("Please fill out all required fields");
    }
    })
