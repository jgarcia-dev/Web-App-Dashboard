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
});



// for message widget
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', ()=> {
    const userValue = user.value.trim();
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