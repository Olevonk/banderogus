const form = document.querySelector('#form');
const launchBtn = document.querySelector('#launch-btn');
const userEmailField = document.querySelector('#user-email');
const userNameField = document.querySelector('#user-name');

const goToFormButton = document.querySelector('#go-to-form-btn');

goToFormButton.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#form-section').scrollIntoView({ behavior: 'smooth', block: 'start', duration: 600 });
});

function clearFormFields() {
    const fieldName = form.querySelector('input[type="text"]');
    const fieldEmail = form.querySelector('input[type="email"]');

    fieldName.value = '';
    fieldEmail.value = '';
}

function addGooseElement() {
    const targetContainer = document.querySelector('#form');
    const gooseEl = document.createElement('img');
    gooseEl.classList.add('gus-anim');

    targetContainer.appendChild(gooseEl);
}

function showGooseAnim() {
    const gooseEl = document.querySelector('.gus-anim');
    gooseEl.style.transitionDuration = '300ms';
    
    gooseEl.setAttribute('src', './img/gus-anim.gif');
    
    setTimeout(() => {
        gooseEl.removeAttribute('src');
    }, 4000);
}

addGooseElement();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    if (userEmailField?.value?.length > 60) {
        return;
    }

    console.log('Імʼя користувача: ', userNameField.value);
    console.log('Email користувача: ', userEmailField.value);

    launchBtn.setAttribute('disabled', true);
    launchBtn.style.opacity = '0.7';

    showGooseAnim();

    launchBtn.removeAttribute("disabled");
    clearFormFields();

    setTimeout(() => {
        launchBtn.style.opacity = '1';
    }, 4000);
});

const img = new Image();
img.src = './img/gus-anim.gif';