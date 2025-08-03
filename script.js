//your JS code here. If required.
const form = document.getElementById('form');
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(ageInput.value);
    const name = nameInput.value;

    if (isNaN(age) || name === '') {
        alert('Please enter valid details.');
        return;
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(name);
            } else {
                reject(name);
            }
        }, 4000);
    });

    promise.then((name) => {
        alert(`Welcome, ${name}. You can vote.`);
    }).catch((name) => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});


