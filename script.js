document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var age = document.getElementById('age').value;
    var name = document.getElementById('name').value;

    if (age === '' || name === '') {
        document.getElementById('result').innerText = 'Please enter valid details.';
        return;
    }

    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (age >= 18) {
                resolve(name);
            } else {
                reject(name);
            }
        }, 4000);
    });

    promise.then(function(name) {
        document.getElementById('result').innerText = `Welcome, ${name}. You can vote.`;
    }).catch(function(name) {
        document.getElementById('result').innerText = `Oh sorry ${name}. You aren't old enough.`;
    });
});


cypress test

describe('promises-and-chains-solution', () => {
    beforeEach(() => {
        cy.visit('index.html')
    })

    it('Check validation', () => {
        cy.get('#btn').click()
        cy.get('#result').should('contain', 'Please enter valid details.')
    })

    it('Check function - success', () => {
        cy.get('#age').type('20')
        cy.get('#name').type('John')
        cy.get('#btn').click()
        cy.wait(4000)
        cy.get('#result').should('contain', 'Welcome, John. You can vote.')
    })

    it('Check function - failure', () => {
        cy.get('#age').type('17')
        cy.get('#name').type('John')
        cy.get('#btn').click()
        cy.wait(4000)
        cy.get('#result').should('contain', 'Oh sorry John. You aren\'t old enough.')
    })
})

