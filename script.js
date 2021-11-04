    // Selecting comment form on blog page
    formEl = document.querySelector("form.leaveComment");

    formEl.addEventListener("submit", function (e) {
    // Stop page from refreshing
      e.preventDefault();
      // retrieve user information from the input boxes
      const userName = document.querySelector("input#name").value;
      const userEmail = document.querySelector("input#email").value;
      const userComment = document.querySelector("textarea#comment").value;

      // Making sure required fields are filled out
      if (userName && userComment && userEmail) {
        // Make empty li container with class "comment" to put into dynamic ul
        const entryContainer = document.createElement("li");
        entryContainer.classList.add("comment");
        // add placeholder image for guests
        entryContainer.innerHTML = " <img src='./styles/assets/home-circle-text.png' alt='Circular logo of Yummm a fancy food place - food in magenta'>"
        
        // Create div to be placed inside list element with class "commentTxt"
        const entry = document.createElement("div");
        entry.classList.add("commentTxt");
        // Place div in list element
        entryContainer.appendChild(entry);

        
        // create paragraph element for name and user email
        const nameEl = document.createElement("p");
        nameEl.innerHTML = `<strong>${userName}</strong> • ${userEmail}`
        // create paragraph element for user comment
        const commentEl = document.createElement("p");
        commentEl.textContent = userComment;
        // create final paragraph element for date of comment posted
        const today = new Date();
        const dateEl = document.createElement("p");
        dateEl.innerHTML = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()} at ${today.getHours()}:${today.getMinutes()}`;

        
        // NOTE: NO QUOTATIONS
        entry.appendChild(nameEl);
        entry.appendChild(commentEl);
        entry.appendChild(dateEl);
         
        // This appends it to the ul
        const blankList = document.querySelector("ul.dynamicComment");
        blankList.appendChild(entryContainer);

        // Clear the input field
        // document.querySelector("input").value = "";
      }

    })
