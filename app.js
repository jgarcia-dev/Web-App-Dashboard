const emailNotifications = document.getElementById('emailNotifications');
const publicProfile = document.getElementById('publicProfile');
const timezone = document.getElementById('timezone');
const alertBox = document.getElementById('alert');

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
}