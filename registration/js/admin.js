import { 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

import { 
    getFirestore, 
    collection, 
    getDocs,
    orderBy,
    query,
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

import { app } from "./firebase.js"; // Reuse initialized app

const auth = getAuth(app);
const db = getFirestore(app);

// ─── ADMIN CONFIGURATION ───
// We will fetch authorized admin emails from the "settings/admins" document in Firestore.
// If the document doesn't exist yet, we fall back to the owner's email so you don't get locked out.
const FALLBACK_ADMIN = "dhamindhankher2010@gmail.com";

async function isUserAdmin(email) {
    try {
        const adminRef = doc(db, 'settings', 'admins');
        const adminSnap = await getDoc(adminRef);
        if (adminSnap.exists()) {
            const emails = adminSnap.data().emails || [];
            return emails.includes(email);
        }
    } catch (e) {
        console.error("Error fetching admin config:", e);
    }
    return email === FALLBACK_ADMIN;
}

// Helper for event names
const EVENT_NAMES = {
    mun: 'Model United Nations',
    moot_court: 'Moot Court',
    hackathon: 'Hackathon',
    debate: 'Conventional Debate',
    spark_tank: 'Spark Tank',
    marketing: 'Marketing',
    paper_trading: 'Paper Trading',
    film_making: 'Film Making',
    Navras: 'Navras',
    poetry: 'Poetry',
    raag_jaam: 'Raag Jaam',
    ipl: 'IPL Auction'
};

// ─── DOM ELEMENTS ───
const loginSection = document.getElementById('login-section');
const loadingSection = document.getElementById('loading-section');
const dashboardSection = document.getElementById('dashboard-section');

const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');

const logoutBtn = document.getElementById('logout-btn');
const totalCount = document.getElementById('total-count');
const tableBody = document.getElementById('table-body');
const searchInput = document.getElementById('search-input');

// Store data globally for search filtering
let registrationsData = [];

// ─── AUTH STATE LOGIC ───
onAuthStateChanged(auth, async (user) => {
    if (user) {
        showLoading("Verifying admin access...");
        const isAdmin = await isUserAdmin(user.email);
        
        if (isAdmin) {
            // Authorized
            showLoading("Fetching registration data...");
            await fetchRegistrations();
        } else {
            // Unauthroized user
            showLoading("Access Denied. You do not have admin privileges.");
            document.querySelector('.spinner').style.display = 'none';
            document.getElementById('loading-text').classList.add('error-text');
            // Give them a moment to see the error, then log out
            setTimeout(() => signOut(auth), 3000);
        }
    } else {
        // Not logged in
        showLogin();
    }
});

// ─── FETCH DATA ───
async function fetchRegistrations() {
    try {
        const regsRef = collection(db, "registrations");
        // Sort by registeredAt descending
        const q = query(regsRef, orderBy('registeredAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        registrationsData = [];
        querySnapshot.forEach((doc) => {
            registrationsData.push({ id: doc.id, ...doc.data() });
        });

        renderTable(registrationsData);
        showDashboard();

    } catch (error) {
        console.error("Error fetching documents: ", error);
        showLoading("Failed to load data. See console for details.");
        document.querySelector('.spinner').style.display = 'none';
        document.getElementById('loading-text').classList.add('error-text');
    }
}

// ─── RENDER TABLE ───
function renderTable(dataArray) {
    totalCount.textContent = dataArray.length;
    tableBody.innerHTML = '';

    if (dataArray.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 40px; color: var(--text-muted);">No registrations found.</td></tr>`;
        return;
    }

    dataArray.forEach(reg => {
        const row = document.createElement('tr');
        
        // Formating Date
        let dateStr = '—';
        if (reg.registeredAt) {
            // Firestore timestamp to Date
            const date = reg.registeredAt.toDate();
            dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        }

        // Formatting Details (Team or MUN)
        let detailsHtml = '—';
        if (reg.event === 'mun' && reg.munPortfolios) {
            detailsHtml = `<div class="detail-block"><span class="detail-label">Portfolios</span></div>
                           <ul class="team-list-small">`;
            reg.munPortfolios.forEach(p => {
                detailsHtml += `<li>${p.committeeName}: ${p.portfolioName}</li>`;
            });
            detailsHtml += `</ul>`;
        } else if (reg.teamSize > 1 && reg.teamMembers) {
            detailsHtml = `<div class="detail-block"><span class="detail-label">Team Size</span> ${reg.teamSize}</div>
                           <ul class="team-list-small">`;
            // Skip leader (index 0) since they are the main registrant, just show additional
            for (let i = 1; i < reg.teamMembers.length; i++) {
                detailsHtml += `<li>${reg.teamMembers[i].firstName} ${reg.teamMembers[i].lastName}</li>`;
            }
            detailsHtml += `</ul>`;
            if (reg.teamMembers.length <= 1) detailsHtml = '— (Missing data)';
        } else if (reg.teamSize === 1) {
            detailsHtml = 'Solo';
        }

        row.innerHTML = `
            <td>
                <span class="td-name">${reg.firstName} ${reg.lastName || ''}</span>
                <span class="td-city">${reg.city || 'Unknown City'}</span>
            </td>
            <td class="td-contact">
                <div><a href="mailto:${reg.email}">${reg.email}</a></div>
                <div style="margin-top: 4px;">${reg.phone || '—'}</div>
            </td>
            <td>
                <div>${reg.school || '—'}</div>
                <div style="font-size: 0.75rem; color: var(--text-dimmed); margin-top: 4px;">Grade ${reg.grade || '—'}</div>
            </td>
            <td>
                <span class="event-badge">${EVENT_NAMES[reg.event] || reg.event}</span>
            </td>
            <td>
                ${detailsHtml}
            </td>
            <td style="font-size: 0.75rem; color: var(--text-dimmed);">
                ${dateStr}
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// ─── SEARCH LOGIC ───
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    
    if (!term) {
        renderTable(registrationsData);
        return;
    }

    const filtered = registrationsData.filter(reg => {
        const fullName = `${reg.firstName} ${reg.lastName || ''}`.toLowerCase();
        const evName = (EVENT_NAMES[reg.event] || reg.event).toLowerCase();
        
        return fullName.includes(term) || 
               (reg.email && reg.email.toLowerCase().includes(term)) || 
               evName.includes(term) ||
               (reg.city && reg.city.toLowerCase().includes(term));
    });

    renderTable(filtered);
});

// ─── LOGIN & LOGOUT ───
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.textContent = '';
    
    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-password').value;

    loginBtn.disabled = true;
    loginBtn.textContent = 'Verifying...';

    const isAdmin = await isUserAdmin(email);
    if (!isAdmin) {
        loginError.textContent = "This email is not authorized for admin access.";
        loginBtn.disabled = false;
        loginBtn.textContent = 'Log In →';
        return;
    }

    loginBtn.textContent = 'Logging in...';

    try {
        await signInWithEmailAndPassword(auth, email, pass);
        // auth observer will trigger and route to dashboard
    } catch (error) {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Log In →';
        let msg = 'Login failed.';
        if (error.code === 'auth/invalid-credential') msg = 'Incorrect email or password.';
        else if (error.code === 'auth/user-not-found') msg = 'No account found with this email.';
        loginError.textContent = msg;
    }
});

logoutBtn.addEventListener('click', () => {
    signOut(auth);
});

// Toggle Password Visibility
const toggleBtn = document.querySelector('.password-toggle');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const input = document.getElementById(toggleBtn.getAttribute('data-target'));
        const isPass = input.getAttribute('type') === 'password';
        input.setAttribute('type', isPass ? 'text' : 'password');
        toggleBtn.querySelector('.eye-icon').style.display = isPass ? 'none' : 'block';
        toggleBtn.querySelector('.eye-off-icon').style.display = isPass ? 'block' : 'none';
    });
}

// ─── VIEW HELPERS ───
function showLogin() {
    loginSection.style.display = 'block';
    loadingSection.style.display = 'none';
    dashboardSection.style.display = 'none';
}

function showLoading(text) {
    document.getElementById('loading-text').textContent = text;
    document.getElementById('loading-text').classList.remove('error-text');
    document.querySelector('.spinner').style.display = 'block';
    
    loginSection.style.display = 'none';
    loadingSection.style.display = 'block';
    dashboardSection.style.display = 'none';
}

function showDashboard() {
    loginSection.style.display = 'none';
    loadingSection.style.display = 'none';
    dashboardSection.style.display = 'block';
}
