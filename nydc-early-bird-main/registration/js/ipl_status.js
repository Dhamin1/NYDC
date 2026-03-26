// ─── IPL Team Status Checker (Real-time) ───
// Listens to Firestore in real-time and marks taken IPL teams immediately.

import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
import { getFirestore, collection, query, where, onSnapshot } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDBo7RP1PSFhva-Ni0pKScX0MlIuUEAmnE",
  authDomain: "nydc-72b34.firebaseapp.com",
  projectId: "nydc-72b34",
  storageBucket: "nydc-72b34.firebasestorage.app",
  messagingSenderId: "935882112599",
  appId: "1:935882112599:web:f04b660e233f21a46f2d12",
  measurementId: "G-5G8Z44578K"
};

// Reuse existing Firebase app if already initialized
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

function applyTeamStatuses(takenTeams) {
  document.querySelectorAll('.ipl-team-card').forEach(card => {
    const input = card.querySelector('input[type="radio"]');
    if (!input) return;

    const isTaken = takenTeams.has(input.value);

    if (isTaken) {
      // Disable and mark taken
      input.disabled = true;
      // If this was the selected team, deselect it
      if (input.checked) input.checked = false;
      card.classList.add('ipl-team-taken');

      const label = card.querySelector('label');
      if (label && !label.querySelector('.ipl-taken-badge')) {
        const badge = document.createElement('span');
        badge.className = 'ipl-taken-badge';
        badge.textContent = 'Taken';
        label.appendChild(badge);
      }
    } else {
      // Restore available team
      input.disabled = false;
      card.classList.remove('ipl-team-taken');
      const badge = card.querySelector('.ipl-taken-badge');
      if (badge) badge.remove();
    }
  });
}

function startIplStatusListener() {
  // Only run on IPL event
  const storedEvent = sessionStorage.getItem('nydc_event');
  if (!storedEvent) return;
  const evData = JSON.parse(storedEvent);
  if (evData.event !== 'ipl') return;

  const regsRef = collection(db, 'registrations');
  const q = query(regsRef, where('event', '==', 'ipl'));

  // onSnapshot fires immediately AND on every future change
  onSnapshot(q, (snapshot) => {
    const takenTeams = new Set();
    snapshot.forEach(docSnap => {
      const data = docSnap.data();
      // pending + approved both block the team; rejected frees it
      if (data.iplTeam && data.status !== 'rejected') {
        takenTeams.add(data.iplTeam);
      }
    });
    applyTeamStatuses(takenTeams);
  }, (err) => {
    console.warn('IPL status listener error:', err);
  });
}

// Wait for DOM before starting the listener
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startIplStatusListener);
} else {
  startIplStatusListener();
}

