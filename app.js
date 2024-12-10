document.getElementById('generate-resume').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const skills = document.getElementById('skills').value;
    const education = document.getElementById('education').value;

    const resume = `
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
        <h2>Education</h2>
        <p>${education}</p>
    `;
    
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<html><body>${resume}</body></html>`);
    newWindow.document.close();
});

document.getElementById('Terms-link').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('terms').style.display = 'block';
});

document.getElementById('Privacy-link').addEventListener('click', (event) => {
    event.preventDefault();
    document.get



    // Function to show modal
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Event listeners for the Terms and Privacy links
document.getElementById('Terms-link').addEventListener('click', (event) => {
    event.preventDefault(); // Prevents default link behavior
    showModal('terms'); // Show Terms modal
});

document.getElementById('Privacy-link').addEventListener('click', (event) => {
    event.preventDefault(); // Prevents default link behavior
    showModal('privacy'); // Show Privacy modal
});
