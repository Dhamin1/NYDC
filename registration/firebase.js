// Firebase configuration & Firestore registration handler
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDBo7RP1PSFhva-Ni0pKScX0MlIuUEAmnE",
  authDomain: "nydc-72b34.firebaseapp.com",
  projectId: "nydc-72b34",
  storageBucket: "nydc-72b34.firebasestorage.app",
  messagingSenderId: "935882112599",
  appId: "1:935882112599:web:f04b660e233f21a46f2d12",
  measurementId: "G-5G8Z44578K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ─── Handle registration form submission ───
const form = document.getElementById('registration-form');
const submitBtn = form.querySelector('.submit-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Disable button & show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting…';

  // Gather selected events
  const selectedEvents = [];
  document.querySelectorAll('input[name="events"]:checked').forEach((cb) => {
    selectedEvents.push(cb.value);
  });

  // Build registration data object
  const registrationData = {
    firstName:  document.getElementById('first-name').value.trim(),
    lastName:   document.getElementById('last-name').value.trim(),
    email:      document.getElementById('email').value.trim(),
    phone:      document.getElementById('phone').value.trim(),
    school:     document.getElementById('school').value.trim(),
    grade:      document.getElementById('grade').value,
    city:       document.getElementById('city').value.trim(),
    events:     selectedEvents,
    experience: document.getElementById('experience').value.trim(),
    registeredAt: serverTimestamp()
  };

  try {
    const docRef = await addDoc(collection(db, 'registrations'), registrationData);
    console.log('Registration saved with ID:', docRef.id);

    // Show success
    form.innerHTML = `
      <div style="text-align:center; padding:40px 0;">
        <div style="width:60px;height:60px;border-radius:50%;background:rgba(139,26,26,0.2);border:2px solid #8b1a1a;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b1a1a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h2 style="font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:300;margin-bottom:12px;">
          Registration <span style="color:#8b1a1a;">Confirmed</span>
        </h2>
        <p style="font-family:'Outfit',sans-serif;color:#9ca3af;font-size:0.9rem;line-height:1.6;">
          Thank you, <strong style="color:#fff;">${registrationData.firstName}</strong>! We've received your registration.<br>
          You'll receive a confirmation email at <strong style="color:#fff;">${registrationData.email}</strong>.
        </p>
        <p style="font-family:'Outfit',sans-serif;color:#6b7280;font-size:0.75rem;margin-top:16px;letter-spacing:0.1em;text-transform:uppercase;">
          Registration ID: ${docRef.id}
        </p>
      </div>
    `;
  } catch (error) {
    console.error('Error saving registration:', error);
    submitBtn.disabled = false;
    submitBtn.textContent = 'Register Now';
    alert('Something went wrong. Please try again.\n\nError: ' + error.message);
  }
});