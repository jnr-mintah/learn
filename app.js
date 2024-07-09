const criminalCases = [
    {
        "name": "Emmanuel Mintah",
        "cardNumber": 1234,
    },
    {   
        "name": "Sam George",
        "cardNumber": 1234,
    },
    {
        "name": "Jane Smith",
        "cardNumber": 1234,     
    },
    { 
        "name": "Courage Patamiah",
        "cardNumber": 1234,   
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const criminalName = document.getElementById('criminalName');
    const criminalNumber = document.getElementById('criminalNumber');
    const resultDiv = document.getElementById('result');

    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const name = criminalName.value.trim();
        const number = parseInt(criminalNumber.value.trim(), 10);

        if (name === '' || isNaN(number)) {
            resultDiv.textContent = 'Please enter a valid name and Ghana Card Number.';
            resultDiv.className = 'not-available';
            return;
        }

        const caseFound = criminalCases.some(criminalCase =>
            criminalCase.name === name && criminalCase.cardNumber === number
        );

        if (caseFound) {
            resultDiv.textContent = 'This person is listed as a criminal.';
            resultDiv.className = 'available';
        } else {
            resultDiv.textContent = 'No criminal record found for this person.';
            resultDiv.className = 'not-available';
        }
    });
});


