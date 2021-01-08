// for notifications
const notificationsDropDown = document.querySelector('.notifications-dropdown');
const notificationsContent = document.querySelector('.notifications-content');
const notificationsBtn = document.getElementById('notifications-btn');
const marker = document.querySelector('.marker');
const userNotifications = [
    "You have a new message from Sonia Lupe.",
    "Mike Smith liked your post.",
    "You have a new message from Mark Sanchez"
];

// for local storage settings
const emailNotifications = document.getElementById('emailNotifications');
const publicProfile = document.getElementById('publicProfile');
const timezone = document.getElementById('timezone');
const alertBox = document.getElementById('alert');



function showNotifications() {
    notificationsDropDown.classList.add('show');
    if (userNotifications.length > 0) {
        while (userNotifications.length > 0) {
            // Populate notifications content
            const p = document.createElement('p');
            p.textContent = userNotifications.pop();
            notificationsContent.appendChild(p);
        } 
        // Deactivate notifications marker
        marker.classList.remove('show');
    } else {
        // Display message of no notifications
        const p = document.createElement('p');
        p.textContent = "No notifications"
        notificationsContent.appendChild(p);
    }
}

function hideNotifications() {
    notificationsDropDown.classList.remove('show');
    notificationsContent.innerHTML = '';
}

function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window.localStorage !== null;
    } catch(err) {
        return false;
    }
}

function updateUI() {
    // get setting values from local storage 
    const emailNotificationsValue = JSON.parse(localStorage.getItem(emailNotifications.id));
    const publicProfileValue = JSON.parse(localStorage.getItem(publicProfile.id));
    const timezoneValue = JSON.parse(localStorage.getItem(timezone.id));

    // if local storage setting values exist then set UI setting to value
    
    if (emailNotificationsValue !== null) {
        emailNotifications.checked = emailNotificationsValue;
    }

    if (publicProfileValue !== null) {
        publicProfile.checked = publicProfileValue;
    }

    if (timezoneValue !== null) {
        timezone.selectedIndex = timezoneValue;
    }
}



window.onload = function() {
    if (supportsLocalStorage()) {

        updateUI();

        // event handlers to setting values to local storage

        emailNotifications.addEventListener('change', ()=> {
            localStorage.emailNotifications = JSON.stringify(emailNotifications.checked);
        });

        publicProfile.addEventListener('change', ()=> {
            localStorage.publicProfile = JSON.stringify(publicProfile.checked);
        });
        
        timezone.addEventListener('change', ()=> {
            localStorage.timezone = JSON.stringify(timezone.selectedIndex);
        });
    }

    alertBox.addEventListener('click', ()=> {
        alertBox.style.display = 'none';
    });

    // show notifications marker
    if (userNotifications.length > 0) {
        marker.classList.add('show');
    }
}



window.addEventListener('click', (e)=> {
    // toggles display of notifications based on origin of click event
    if (e.target === notificationsBtn) {
        if (notificationsDropDown.classList.contains('show')) {
            hideNotifications();
        } else {
            showNotifications();
        }
    } else {
        hideNotifications();
    }

    closeAutoCompList();
});



// for message widget
const userField = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
const autoCompContainer = document.querySelector('.autocomplete-container');

users = ['Annie Chen', 'Abe Smith', 'Carla Willet', 'Dale Byrd', 'Dale Brad', 'Dan Oliver', 'John Garcia', 'Juan Garcia', 'Mike Smith', 'Victoria Chambers']
let currFocus = -1;

function getSearches(arr, queryStr) {
    const searches = []
    for (let i = 0; i < arr.length; i++) {
    if ( arr[i].toLowerCase().startsWith(queryStr.toLowerCase()) ) {
            searches.push(arr[i]);
        }
    }

    return searches;
}

function closeAutoCompList() {
    const currList = document.querySelector('.autocomplete-list');
    if (currList) {
        autoCompContainer.removeChild(currList);
    }
}

function addActive(collection) {
    removeActive(collection);
    if (currFocus >= collection.length) currFocus = 0
    if (currFocus < 0 ) currFocus = collection.length - 1
    collection[currFocus].classList.add('autocomplete-active')
}

function removeActive(collection) {
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.remove('autocomplete-active');
    }
}


userField.addEventListener('input', ()=> {
    const query = userField.value.trim();
    if (query) {
        const searches = getSearches(users, query)

        if (searches.length > 0) {
            closeAutoCompList();
            // build new list holding searches
            const autoCompList = document.createElement('UL');
            autoCompList.classList.add('autocomplete-list');
    
            for (let i = 0; i < searches.length; i++) {
                const li = document.createElement('LI');
                li.classList.add('autocomplete-item');
                li.textContent = searches[i];
                li.addEventListener('click', (e)=> {
                    userField.value = e.target.textContent;
                    closeAutoCompList();
                });
                autoCompList.appendChild(li);
            }
            autoCompContainer.appendChild(autoCompList);
        }
    }  
});

userField.addEventListener('keydown', (e)=> {
    const currList = document.getElementsByClassName('autocomplete-item');
    if (currList.length > 0) {
        if (e.key === 'ArrowUp') {
            currFocus--;
            addActive(currList);
        } else if (e.key === 'ArrowDown') {
            currFocus++;
            addActive(currList);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currFocus > -1) {
                currList[currFocus].click();
            }
        }
    }
});

send.addEventListener('click', ()=> {
    const userValue = userField.value.trim();
    const messageValue = message.value.trim();

    if (userValue === '' && messageValue === '') {
        alert('Please fill out both user and message fields before sending.');
    } else if (userValue === '') {
        alert('Please fill out user field before sending.');
    } else if (messageValue === '') {
        alert('Please fill out message field before sending.');
    } else {
        alert(`Message successfully sent to: ${userValue}`);
    }
});