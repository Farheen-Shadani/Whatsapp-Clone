// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function (response) {
        // handle success
        console.log(response);
        for (let i = 0; i < response.data.length; i++) {
            let message = response.data[i];
            document.querySelector("ul").innerHTML += `
            <li>
                <img src="${message.profilePic}">
                <div class="messages">
                    <div class="info">
                        <h3>${message.name}</h3>
                        <p class="time">${message.time.toLowerCase()}</p>
                    </div>
                    <div class="details">
                        <p class="text">${message.firstLine}</p>
                        <p class="numb">${message.numbUnread}</p>
                    </div>
                </div>
            </li>
            `;
//             if (message.isUnread == false) {
//                 document.querySelector('.time').style.color = "#07d260";
//                 document.querySelector('.numb').style.display = "none";
//             };
        }
    }
    )
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
