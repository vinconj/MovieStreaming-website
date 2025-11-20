// Movie data storage
let movies = [
    {
        id: 1,
        title: "Alice in Borderland",
        year: 2023,
        rating: 8.2,
        genre: "Sci-Fi",
        image: "images/aliceinborderland.webp",
        type: "tv-show",
        description: "A group of bored delinquents are transported to a parallel dimension as part of a survival game."
    },
    {
        id: 2,
        title: "Wheel of Time",
        year: 2022,
        rating: 7.9,
        genre: "Fantasy",
        image: "images/Season_2_poster_July_12_2023.webp",
        type: "tv-show",
        description: "A powerful organization of women searching for a man who prophesies say will either save or destroy humanity."
    },
    {
        id: 3,
        title: "The Witcher",
        year: 2023,
        rating: 8.5,
        genre: "Fantasy",
        image: "images/Witcher-S3-poster--528x787.webp",
        type: "tv-show",
        description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world."
    },
    {
        id: 4,
        title: "Outerbanks",
        year: 2022,
        rating: 7.4,
        genre: "Adventure",
        image: "images/outerbanks.jpg",
        type: "tv-show",
        description: "A group of teenagers from the wrong side of the track stumble upon a treasure map that changes their lives forever."
    },
    {
        id: 5,
        title: "Vampire Diaries",
        year: 2009,
        rating: 7.4,
        genre: "Drama",
        image: "images/vampire diaries.jpg",
        type: "tv-show",
        description: "The lives, loves, dangers and disasters in the town, Mystic Falls, Virginia."
    },
    {
        id: 6,
        title: "Youngins",
        year: 2023,
        rating: 8.0,
        genre: "Drama",
        image: "images/season-1.jpeg",
        type: "tv-show",
        description: "Coming-of-age story following teenagers navigating life in modern society."
    },
    {
        id: 7,
        title: "Gen V",
        year: 2023,
        rating: 7.8,
        genre: "Action",
        image: "images/Gen V.jpg",
        type: "tv-show",
        description: "Young adults with superpowers compete in a brutal battle for fame and fortune."
    },
    {
        id: 8,
        title: "Orphan Black",
        year: 2023,
        rating: 8.3,
        genre: "Sci-Fi",
        image: "images/images.jpeg",
        type: "tv-show",
        description: "A woman discovers she is one of many clones and must uncover the truth about her origin."
    },
    {
        id: 9,
        title: "Monster",
        year: 2023,
        rating: 7.9,
        genre: "Thriller",
        image: "images/monster.jpeg",
        type: "movie",
        description: "A psychological thriller exploring the dark side of human nature."
    },
    {
        id: 10,
        title: "Wildflower",
        year: 2022,
        rating: 8.5,
        genre: "Drama",
        image: "images/wildfower.jpg",
        type: "movie",
        description: "A heartwarming story about self-discovery and personal growth."
    },
    {
        id: 11,
        title: "Fountain of Youth",
        year: 2023,
        rating: 8.1,
        genre: "Adventure",
        image: "images/fountain of youth.jpg",
        type: "movie",
        description: "An epic quest to find the legendary fountain that grants eternal youth."
    },
    {
        id: 12,
        title: "Business Proposal",
        year: 2023,
        rating: 9.0,
        genre: "Romance",
        image: "images/business proposal.jpg",
        type: "movie",
        description: "A hilarious romantic comedy about mistaken identities and corporate intrigue."
    },
    {
        id: 13,
        title: "The Three Sides of Ana",
        year: 2023,
        rating: 8.5,
        genre: "Drama",
        image: "images/three sides of ana.jpg",
        type: "movie",
        description: "A complex character study exploring three different aspects of one woman's life."
    },
    {
        id: 14,
        title: "The Challenge",
        year: 2023,
        rating: 8.7,
        genre: "Reality",
        image: "images/the challenge.jpg",
        type: "tv-show",
        description: "Competitors face extreme physical and mental challenges for the ultimate prize."
    },
    {
        id: 15,
        title: "Keeping Up With The Kardashians",
        year: 2023,
        rating: 8.0,
        genre: "Reality",
        image: "images/kardashians.jpg",
        type: "tv-show",
        description: "Follow the lives of the famous Kardashian-Jenner family."
    },
    {
        id: 16,
        title: "Beast Game",
        year: 2023,
        rating: 7.5,
        genre: "Action",
        image: "images/Beast_Games_Poster.jpeg",
        type: "tv-show",
        description: "Survival game where contestants must overcome beastly challenges."
    },
    {
        id: 17,
        title: "Amazing Race",
        year: 2023,
        rating: 8.5,
        genre: "Adventure",
        image: "images/amazing race.webp",
        type: "tv-show",
        description: "Teams race around the world completing challenges for a grand prize."
    },
    {
        id: 18,
        title: "Tempest",
        year: 2023,
        rating: 8.2,
        genre: "Drama",
        image: "images/tempest.jpg",
        type: "movie",
        description: "A stormy tale of love and redemption set against a dramatic coastal backdrop."
    },
    {
        id: 19,
        title: "Teen Wolf",
        year: 2023,
        rating: 8.2,
        genre: "Fantasy",
        image: "images/teenwolf.jpg",
        type: "tv-show",
        description: "A teenage werewolf navigates high school while protecting his town from supernatural threats."
    }
];

// Watchlist functionality
let watchlist = JSON.parse(localStorage.getItem('moviesite_watchlist')) || [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    setupSearch();
    setupCategoryFilters();
    setupWatchlistButtons();
    updateWatchlistStats();
    
    // Load appropriate content based on current page
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            loadFeaturedContent();
            break;
        case 'movies.html':
            loadMoviesPage();
            break;
        case 'tv-shows.html':
            loadTVShowsPage();
            break;
        case 'my-list.html':
            loadMyListPage();
            break;
    }
}

// Setup search functionality
function setupSearch() {
    const searchInputs = document.querySelectorAll('.search-bar input');
    const searchButtons = document.querySelectorAll('.search-bar button');
    
    searchInputs.forEach((input, index) => {
        // Add Enter key support
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
        
        // Connect search buttons
        if (searchButtons[index]) {
            searchButtons[index].addEventListener('click', function() {
                performSearch(input.value);
            });
        }
    });
}

// Perform search
function performSearch(query) {
    if (!query.trim()) {
        showNotification('Please enter a search term', 'warning');
        return;
    }
    
    const results = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase())
    );
    
    if (results.length === 0) {
        showNotification(`No results found for "${query}"`, 'warning');
        return;
    }
    
    // Store search results and redirect to appropriate page
    localStorage.setItem('moviesite_search_results', JSON.stringify({
        query: query,
        results: results
    }));
    
    // Redirect to movies page for now (could be enhanced)
    if (!window.location.pathname.includes('movies.html')) {
        window.location.href = 'movies.html?search=' + encodeURIComponent(query);
    } else {
        displaySearchResults(results, query);
    }
}

// Display search results
function displaySearchResults(results, query) {
    const moviesGrid = document.querySelector('.movies-grid');
    if (!moviesGrid) return;
    
    moviesGrid.innerHTML = results.map(movie => createMovieCard(movie)).join('');
    
    // Update page title to show search results
    const pageTitle = document.querySelector('.page-header h1');
    if (pageTitle) {
        pageTitle.textContent = `Search Results for "${query}"`;
    }
    
    showNotification(`Found ${results.length} results for "${query}"`, 'success');
}

// Setup category filters
function setupCategoryFilters() {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryName = this.textContent;
            filterByCategory(categoryName);
        });
    });
    
    // Setup filter selects on movies page
    const genreSelect = document.querySelector('.filter-select');
    if (genreSelect) {
        genreSelect.addEventListener('change', function() {
            if (this.value !== 'All Genres') {
                filterByCategory(this.value);
            } else {
                clearFilters();
            }
        });
    }
}

// Filter by category
function filterByCategory(category) {
    const filteredMovies = movies.filter(movie => 
        movie.genre === category || movie.type === category.toLowerCase()
    );
    
    const moviesGrid = document.querySelector('.movies-grid');
    if (moviesGrid) {
        if (filteredMovies.length === 0) {
            moviesGrid.innerHTML = '<p class="no-results">No movies found in this category.</p>';
        } else {
            moviesGrid.innerHTML = filteredMovies.map(movie => createMovieCard(movie)).join('');
        }
    }
    
    // Highlight active category
    document.querySelectorAll('.category').forEach(cat => {
        cat.classList.remove('active');
        if (cat.textContent === category) {
            cat.classList.add('active');
        }
    });
    
    showNotification(`Showing ${category} content`, 'info');
}

// Clear filters
function clearFilters() {
    const moviesGrid = document.querySelector('.movies-grid');
    if (moviesGrid) {
        moviesGrid.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
    }
    
    document.querySelectorAll('.category').forEach(cat => {
        cat.classList.remove('active');
    });
    
    // Reset select elements
    document.querySelectorAll('.filter-select').forEach(select => {
        select.selectedIndex = 0;
    });
}

// Setup watchlist buttons
function setupWatchlistButtons() {
    // This will be called when creating movie cards
}

// Create movie card HTML
function createMovieCard(movie) {
    const isInWatchlist = watchlist.some(item => item.id === movie.id);
    
    return `
        <div class="movie-card" data-id="${movie.id}">
            <img src="${movie.image}" alt="${movie.title}" class="movie-poster" onclick="showMovieDetails(${movie.id})">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="rating">★ ${movie.rating}</span>
                </div>
                <button class="watchlist-btn ${isInWatchlist ? 'added' : ''}" 
                        onclick="toggleWatchlist(${movie.id})">
                    ${isInWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}
                </button>
            </div>
        </div>
    `;
}

// Toggle watchlist
function toggleWatchlist(movieId) {
    const movie = movies.find(m => m.id === movieId);
    const index = watchlist.findIndex(item => item.id === movieId);
    
    if (index === -1) {
        // Add to watchlist
        watchlist.push(movie);
        showNotification(`"${movie.title}" added to watchlist`, 'success');
    } else {
        // Remove from watchlist
        watchlist.splice(index, 1);
        showNotification(`"${movie.title}" removed from watchlist`, 'info');
    }
    
    // Save to localStorage
    localStorage.setItem('moviesite_watchlist', JSON.stringify(watchlist));
    
    // Update UI
    updateWatchlistButtons();
    updateWatchlistStats();
    
    // Reload watchlist if on My List page
    if (window.location.pathname.includes('my-list.html')) {
        loadMyListPage();
    }
}

// Update watchlist buttons
function updateWatchlistButtons() {
    const buttons = document.querySelectorAll('.watchlist-btn');
    buttons.forEach(button => {
        const movieCard = button.closest('.movie-card');
        if (movieCard) {
            const movieId = parseInt(movieCard.dataset.id);
            const isInWatchlist = watchlist.some(item => item.id === movieId);
            
            if (isInWatchlist) {
                button.textContent = '✓ In Watchlist';
                button.classList.add('added');
            } else {
                button.textContent = '+ Add to Watchlist';
                button.classList.remove('added');
            }
        }
    });
}

// Update watchlist statistics
function updateWatchlistStats() {
    const movieCount = watchlist.filter(item => item.type === 'movie').length;
    const tvCount = watchlist.filter(item => item.type === 'tv-show').length;
    const totalCount = watchlist.length;
    
    // Update stats on My List page
    const statNumbers = document.querySelectorAll('.stat-number');
    const statLabels = document.querySelectorAll('.stat-label');
    
    if (statNumbers.length >= 3) {
        statNumbers[0].textContent = movieCount;
        statNumbers[1].textContent = tvCount;
        statNumbers[2].textContent = totalCount;
        
        statLabels[0].textContent = movieCount === 1 ? 'Movie' : 'Movies';
        statLabels[1].textContent = tvCount === 1 ? 'TV Show' : 'TV Shows';
        statLabels[2].textContent = totalCount === 1 ? 'Total Item' : 'Total Items';
    }
}

// Show movie details
function showMovieDetails(movieId) {
    const movie = movies.find(m => m.id === movieId);
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <div class="modal-body">
                <img src="${movie.image}" alt="${movie.title}" class="modal-poster">
                <div class="modal-info">
                    <h2>${movie.title} (${movie.year})</h2>
                    <div class="movie-meta">
                        <span>${movie.genre}</span>
                        <span class="rating">★ ${movie.rating}</span>
                    </div>
                    <p class="movie-description">${movie.description}</p>
                    <div class="modal-actions">
                        <button class="btn watch-now">Watch Now</button>
                        <button class="watchlist-btn ${watchlist.some(item => item.id === movie.id) ? 'added' : ''}" 
                                onclick="toggleWatchlist(${movie.id}); closeModal();">
                            ${watchlist.some(item => item.id === movie.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles if not already added
    if (!document.querySelector('#modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .modal {
                display: flex;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                z-index: 1000;
                justify-content: center;
                align-items: center;
            }
            .modal-content {
                background-color: var(--secondary);
                border-radius: 8px;
                max-width: 800px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
            }
            .close-modal {
                position: absolute;
                top: 15px;
                right: 15px;
                font-size: 24px;
                cursor: pointer;
                color: var(--text-secondary);
                z-index: 1001;
            }
            .close-modal:hover {
                color: var(--highlight);
            }
            .modal-body {
                display: flex;
                padding: 30px;
                gap: 30px;
            }
            .modal-poster {
                width: 300px;
                height: 450px;
                object-fit: cover;
                border-radius: 8px;
            }
            .modal-info {
                flex: 1;
            }
            .movie-description {
                margin: 20px 0;
                line-height: 1.6;
                color: var(--text-secondary);
            }
            .modal-actions {
                display: flex;
                gap: 15px;
                margin-top: 25px;
            }
            .watch-now {
                background-color: var(--highlight);
            }
            @media (max-width: 768px) {
                .modal-body {
                    flex-direction: column;
                    padding: 20px;
                }
                .modal-poster {
                    width: 100%;
                    height: 400px;
                }
            }
        `;
        document.head.appendChild(modalStyles);
    }
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Watch Now button functionality
    modal.querySelector('.watch-now').addEventListener('click', function() {
        showNotification(`Starting "${movie.title}"...`, 'success');
        closeModal();
    });
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Load featured content on homepage
function loadFeaturedContent() {
    // Featured movies are already in HTML, just add functionality
    updateWatchlistButtons();
}

// Load movies page
function loadMoviesPage() {
    const moviesGrid = document.querySelector('.movies-grid');
    if (moviesGrid) {
        const allMovies = movies.filter(movie => movie.type === 'movie');
        moviesGrid.innerHTML = allMovies.map(movie => createMovieCard(movie)).join('');
    }
    updateWatchlistButtons();
    
    // Check for search results
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery) {
        performSearch(searchQuery);
    }
}

// Load TV shows page
function loadTVShowsPage() {
    const tvGrid = document.querySelector('.tv-grid');
    if (tvGrid) {
        const allTVShows = movies.filter(movie => movie.type === 'tv-show');
        tvGrid.innerHTML = allTVShows.map(show => createTVShowCard(show)).join('');
    }
    updateWatchlistButtons();
}

// Create TV show card
function createTVShowCard(show) {
    const isInWatchlist = watchlist.some(item => item.id === show.id);
    
    return `
        <div class="tv-card" data-id="${show.id}">
            <img src="${show.image}" alt="${show.title}" class="tv-poster" onclick="showMovieDetails(${show.id})">
            <div class="tv-info">
                <h3 class="tv-title">${show.title}</h3>
                <div class="tv-meta">
                    <span>${show.genre}</span>
                    <span class="rating">★ ${show.rating}</span>
                </div>
                <p class="tv-description">${show.description}</p>
                <button class="watchlist-btn ${isInWatchlist ? 'added' : ''}" 
                        onclick="toggleWatchlist(${show.id})">
                    ${isInWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}
                </button>
            </div>
        </div>
    `;
}

// Load My List page
function loadMyListPage() {
    const moviesGrid = document.querySelector('.movies-grid');
    if (moviesGrid) {
        if (watchlist.length === 0) {
            moviesGrid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                    <h3>Your watchlist is empty</h3>
                    <p>Start adding movies and TV shows to your watchlist!</p>
                    <a href="movies.html" class="btn" style="margin-top: 20px;">Browse Movies</a>
                </div>
            `;
        } else {
            moviesGrid.innerHTML = watchlist.map(item => createMovieCard(item)).join('');
        }
    }
    updateWatchlistStats();
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const notificationStyles = document.createElement('style');
        notificationStyles.id = 'notification-styles';
        notificationStyles.textContent = `
            .notification {
                position: fixed;
                top: 80px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 4px;
                color: white;
                z-index: 1001;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                animation: slideIn 0.3s ease;
                max-width: 300px;
            }
            .notification.success {
                background-color: #10b981;
            }
            .notification.warning {
                background-color: #f59e0b;
            }
            .notification.info {
                background-color: var(--highlight);
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(notificationStyles);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Pagination functionality
function setupPagination() {
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            pageButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real app, this would load the appropriate page of content
            showNotification(`Loading page ${this.textContent}...`, 'info');
        });
    });
}

// Initialize pagination if on a page that has it
if (document.querySelector('.pagination')) {
    document.addEventListener('DOMContentLoaded', setupPagination);
}