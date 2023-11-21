// JavaScript to handle form submission and display entries
document.getElementById('user-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents default form submission
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const acceptTerms = document.getElementById('acceptTerms').checked;
  
  if (!acceptTerms) {
    document.getElementById('error').innerText = 'Please accept the terms and conditions.';
    document.getElementById('error').classList.remove('hidden');
    return; // Stop form submission if terms not accepted
  }

  // Clear error message if terms are accepted
  document.getElementById('error').classList.add('hidden');

  // Display entry in the 'Entries' section
  const userEntries = document.getElementById('user-entries');
  const entryDiv = document.createElement('div');
  entryDiv.classList.add('user-entry');
  entryDiv.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Accepted Terms:</strong> ${acceptTerms ? 'Yes' : 'No'}</p>
    <hr>
  `;
  userEntries.appendChild(entryDiv);

  // Clear form fields after submission
  document.getElementById('user-form').reset();
});
