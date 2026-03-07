// ─── Data Definitions ───
const COMMITTEES = [
    {
        id: 'unga',
        name: 'UNGA',
        portfolios: [
            { id: '1', name: 'USA', status: 'available' },
            { id: '2', name: 'UK', status: 'taken' },
            { id: '3', name: 'France', status: 'available' },
            { id: '4', name: 'Russia', status: 'available' },
            { id: '5', name: 'China', status: 'available' },
            { id: '6', name: 'India', status: 'taken' },
            { id: '7', name: 'Germany', status: 'available' },
            { id: '8', name: 'Japan', status: 'available' }
        ]
    },
    {
        id: 'uncsw',
        name: 'UNCSW',
        portfolios: [
            { id: '9', name: 'USA', status: 'available' },
            { id: '10', name: 'UK', status: 'available' },
            { id: '11', name: 'France', status: 'taken' },
            { id: '12', name: 'India', status: 'available' },
            { id: '13', name: 'Brazil', status: 'available' },
            { id: '14', name: 'South Africa', status: 'available' }
        ]
    },
    {
        id: 'unhrc',
        name: 'UNHRC',
        portfolios: [
            { id: '15', name: 'USA', status: 'available' },
            { id: '16', name: 'China', status: 'taken' },
            { id: '17', name: 'Russia', status: 'available' },
            { id: '18', name: 'Germany', status: 'available' },
            { id: '19', name: 'Canada', status: 'available' },
            { id: '20', name: 'Australia', status: 'taken' }
        ]
    },
    {
        id: 'who',
        name: 'WHO',
        portfolios: [
            { id: '21', name: 'USA', status: 'available' },
            { id: '22', name: 'UK', status: 'available' },
            { id: '23', name: 'China', status: 'taken' },
            { id: '24', name: 'India', status: 'available' },
            { id: '25', name: 'Japan', status: 'available' },
            { id: '26', name: 'Switzerland', status: 'available' }
        ]
    },
    {
        id: 'aippm',
        name: 'AIPPM',
        portfolios: [
            { id: '27', name: 'Narendra Modi', status: 'taken' },
            { id: '28', name: 'Amit Shah', status: 'available' },
            { id: '29', name: 'Rahul Gandhi', status: 'available' },
            { id: '30', name: 'Arvind Kejriwal', status: 'available' },
            { id: '31', name: 'Mamata Banerjee', status: 'taken' },
            { id: '32', name: 'Nitish Kumar', status: 'available' }
        ]
    },
    {
        id: 'ip',
        name: 'International Press (IP)',
        portfolios: [
            { id: '33', name: 'Reuters', status: 'available' },
            { id: '34', name: 'Al Jazeera', status: 'taken' },
            { id: '35', name: 'BBC News', status: 'available' },
            { id: '36', name: 'CNN', status: 'available' },
            { id: '37', name: 'The Hindu', status: 'available' },
            { id: '38', name: 'New York Times', status: 'taken' }
        ]
    }
];

const container = document.getElementById('committees-container');
const submitBtn = document.getElementById('mun-submit-btn');
const countDisplay = document.getElementById('select-count');
const statusBadge = document.querySelector('.selection-status');

// Track selected portfolios. Max 2.
// Format: [{ committeeId, portfolioId, portfolioName }]
let selectedPortfolios = [];

// ─── Render Committees ───
function render() {
    container.innerHTML = '';

    COMMITTEES.forEach(com => {
        const group = document.createElement('div');
        group.className = 'committee-group';
        group.id = `group-${com.id}`;

        // Check if user has selected a portfolio in this committee
        const isSelectedHere = selectedPortfolios.some(p => p.committeeId === com.id);
        if (isSelectedHere) {
            group.classList.add('has-selection');
        }

        // Header
        const header = document.createElement('div');
        header.className = 'committee-header';
        header.innerHTML = `
            <div class="committee-title">
                ${com.name}
                <span class="selected-badge">Selected</span>
            </div>
            <svg class="expand-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        `;

        // Toggle expand/collapse
        header.addEventListener('click', () => {
            const isExpanded = group.classList.contains('expanded');
            // Close all others
            document.querySelectorAll('.committee-group').forEach(g => g.classList.remove('expanded'));
            if (!isExpanded) {
                group.classList.add('expanded');
            }
        });

        // Portfolios List
        const list = document.createElement('div');
        list.className = 'portfolio-list';

        com.portfolios.forEach(port => {
            const isTaken = port.status === 'taken';
            const isChecked = selectedPortfolios.some(p => p.portfolioId === port.id);
            const item = document.createElement('div');
            item.className = `portfolio-item ${isTaken ? 'taken' : ''}`;

            const idStr = `port-${com.id}-${port.id}`;

            const statusClass = isTaken ? 'status-taken' : 'status-available';
            const statusText = isTaken ? 'Taken' : 'Available';

            item.innerHTML = `
                <input type="checkbox" id="${idStr}" value="${port.id}" ${isChecked ? 'checked' : ''} ${isTaken ? 'disabled' : ''}>
                <label for="${idStr}">
                    <span>${port.name}</span>
                    <span class="status-indicator ${statusClass}">${statusText}</span>
                </label>
            `;

            if (!isTaken) {
                const input = item.querySelector('input');
                input.addEventListener('change', (e) => {
                    handleSelectionChange(e.target.checked, com.id, com.name, port.id, port.name, input);
                });
            }

            list.appendChild(item);
        });

        group.appendChild(header);
        group.appendChild(list);
        container.appendChild(group);
    });

    updateUIState();
}

// ─── Selection Logic ───
function handleSelectionChange(isChecked, comId, comName, portId, portName, inputEl) {
    if (isChecked) {
        // Collect current stats
        const currentInCom = selectedPortfolios.filter(p => p.committeeId === comId).length;
        const uniqueComIds = [...new Set(selectedPortfolios.map(p => p.committeeId))];
        const isNewCom = !uniqueComIds.includes(comId);

        // Rule 1: Max 2 committees
        if (isNewCom && uniqueComIds.length >= 2) {
            alert('You can only select portfolios from 2 committees in total.');
            inputEl.checked = false;
            return;
        }

        // Rule 2: Max 2 portfolios per committee
        if (currentInCom >= 2) {
            alert(`You can only select 2 portfolios from ${comName}.`);
            inputEl.checked = false;
            return;
        }

        // Rule 3: Max 4 portfolios total
        if (selectedPortfolios.length >= 4) {
            alert('You can only select exactly 4 portfolios in total.');
            inputEl.checked = false;
            return;
        }

        selectedPortfolios.push({
            committeeId: comId,
            committeeName: comName,
            portfolioId: portId,
            portfolioName: portName
        });
    } else {
        selectedPortfolios = selectedPortfolios.filter(p => p.portfolioId !== portId);
    }

    render(); // Re-render to update badges and checked states
}

function updateUIState() {
    const count = selectedPortfolios.length;
    countDisplay.textContent = count;

    if (count === 4) {
        statusBadge.classList.add('complete');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Continue to Personal Details →';
    } else {
        statusBadge.classList.remove('complete');
        submitBtn.disabled = true;
        submitBtn.textContent = `Select ${4 - count} more...`;
    }
}

// ─── Submission ───
submitBtn.addEventListener('click', () => {
    if (selectedPortfolios.length !== 4) return;

    // Save MUN selection
    sessionStorage.setItem('nydc_mun_selection', JSON.stringify(selectedPortfolios));
    
    // Redirect to selection.html for the final review/submission
    // Since MUN is a solo event, they won't add team members, but selection.html has the final Firebase submit button.
    window.location.href = 'selection.html';
});

// Init
render();
