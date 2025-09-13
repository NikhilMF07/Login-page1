const toggleButton = document.getElementById("toggle-btn")
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
}


function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

const popoverTrigger = document.getElementById('profilePopover');
const popover = new bootstrap.Popover(popoverTrigger);

document.addEventListener('click', function (event) {
    const popoverElement = document.querySelector('.popover');
    
    if (!popoverElement) return;

    const isClickInsidePopover = popoverElement.contains(event.target);
    const isClickOnTrigger = popoverTrigger.contains(event.target);

    if (!isClickInsidePopover && !isClickOnTrigger) {
        popover.hide();
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault(); 

const empId = document.getElementById('employeeId').value.trim();
const password = document.getElementById('password').value.trim();

if(empId === '1' && password === '1') {
    // Store login status
    localStorage.setItem('isLoggedIn', 'true');

    document.querySelector('.home-section').style.display = 'block';
    document.querySelector('.login-container').style.display = 'none';
} else {
    alert('Invalid Employee ID or Password');
}
});

function logout() {
    localStorage.removeItem('isLoggedIn');

    document.querySelector('.home-section').style.display = 'none';
    document.querySelector('.login-container').style.display = '';

    document.getElementById('employeeId').value = '';
    document.getElementById('password').value = '';

    popover.hide();

    alert('You have been logged out successfully!');
}


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-danger') && event.target.textContent.trim() === 'Logout') {
        logout();
    }
});

window.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        document.querySelector('.home-section').style.display = 'block';
        document.querySelector('.login-container').style.display = 'none';
    }
});

document.getElementById('signupLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('registrationContainer').style.display = '';
});

document.querySelector('#registrationContainer .options a').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('registrationContainer').style.display = 'none';
    document.querySelector('.login-container').style.display = '';
});