document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("btn");
    const icon = btn.querySelector("i");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    
    // Search Event Listeners
    searchBtn.addEventListener('click', search);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') search();
    });

    // Theme Toggle Logic
    let darkMode = localStorage.getItem('theme') === 'dark';
    
    // Apply initial theme
    if (darkMode) {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    btn.addEventListener("click", () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode');
        
        if (darkMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});

async function search() {
    const input = document.getElementById('searchInput').value.trim();
    if (!input) return;

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '<div class="text-center p-3">Searching...</div>';

    try {
        const response = await fetch(`http://localhost:3000/unscramble/${input}`);
        if (!response.ok) throw new Error('Server error');
        
        const words = await response.json();
        
        resultsContainer.innerHTML = '';
        if (words.length === 0) {
            resultsContainer.innerHTML = '<div class="text-center p-3">No matches found.</div>';
            return;
        }

        const list = document.createElement('div');
        list.className = 'list-group list-group-flush';
        
        const displayWords = words.slice(0, 100); 
        
        displayWords.forEach(word => {
            const item = document.createElement('div');
            item.className = 'list-group-item';
            item.textContent = word;
            list.appendChild(item);
        });

        if (words.length > 100) {
            const more = document.createElement('div');
            more.className = 'list-group-item text-muted';
            more.style.fontStyle = 'italic';
            more.textContent = `...and ${words.length - 100} more.`;
            list.appendChild(more);
        }

        resultsContainer.appendChild(list);

    } catch (error) {
        console.error('Error:', error);
        resultsContainer.innerHTML = '<div class="text-center p-3 text-danger">Server offline. Run: node server.js</div>';
    }
}