// Mobile Menu Slide-In:
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('button[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('slide-in');
        mobileMenu.classList.toggle('hidden');
    });
});


//FAQ Section:
document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('section dl div dt button');

    faqButtons.forEach(button => {
        button.addEventListener('click', function () {
            const ariaControls = this.getAttribute('aria-controls');
            const answerElement = document.getElementById(ariaControls);
            const iconExpand = this.querySelector('svg:first-child');
            const iconCollapse = this.querySelector('svg:last-child');

            answerElement.classList.toggle('hidden');

            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);

            iconExpand.classList.toggle('hidden');
            iconCollapse.classList.toggle('hidden');
        });
    });
});


//Form Submission Logic:
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const formContainer = document.querySelector('.form-container');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirm-email');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (emailInput.value !== confirmEmailInput.value) {
            alert("Emails do not match.");
            return;
        }

        const formData = {
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            email: emailInput.value
        };

        console.log("Sending form data:", formData);

        formContainer.innerHTML = `
        <div class="flex items-center justify-center h-full">
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Success!</strong>
                <span class="block sm:inline">Your form has been submitted.</span>
            </div>
        </div>
    `;

    });
});

//Visit Today Button:

document.getElementById('contactUsButton').addEventListener('click', function () {
    window.location.href = 'visit_today.html';
});

document.getElementById('visitTodayButton').addEventListener('click', function () {
    window.location.href = 'visit_today.html';
});


// Back to the top button
document.getElementById('backToTopButton').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});






