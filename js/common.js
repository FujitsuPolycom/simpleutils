// SimpleUtils - Common JavaScript
// Handles search filtering, nav, and footer functionality

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        initSearch();
        initAnalytics();
    }
    
    // Search functionality
    function initSearch() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        
        const toolCards = document.querySelectorAll('.tool-card');
        const noResults = document.getElementById('noResults');
        
        const sectionHeaders = document.querySelectorAll('[data-section-header]');

        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            let visibleCount = 0;

            toolCards.forEach(function(card) {
                const toolName = card.getAttribute('data-name') || '';
                const isMatch  = !query || toolName.includes(query);
                card.classList.toggle('hidden', !isMatch);
                if (isMatch) visibleCount++;
            });

            // Hide section headers when all tools in that section are filtered out
            sectionHeaders.forEach(function(header) {
                const section = header.getAttribute('data-section-header');
                if (!query) {
                    header.classList.remove('hidden');
                    return;
                }
                const anyVisible = document.querySelector(
                    `.tool-card[data-section="${section}"]:not(.hidden)`
                );
                header.classList.toggle('hidden', !anyVisible);
            });

            // Show/hide no results message
            noResults.classList.toggle('hidden', !(visibleCount === 0 && query.length > 0));
        });
        
        // Clear search on ESC key
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
                searchInput.blur();
            }
        });
    }
    
    // Analytics placeholder (can be replaced with actual tracking)
    function initAnalytics() {
        // Track tool clicks
        const toolCards = document.querySelectorAll('.tool-card');
        toolCards.forEach(function(card) {
            card.addEventListener('click', function(e) {
                const toolName = this.querySelector('h3').textContent;
                console.log('Tool clicked:', toolName);
                
                // Example: Send to Google Analytics
                // if (window.gtag) {
                //     gtag('event', 'tool_click', {
                //         'event_category': 'Tools',
                //         'event_label': toolName
                //     });
                // }
            });
        });
    }
    
    // Utility: Get URL parameter
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    
    // Pre-fill search from URL parameter (?q=...)
    const urlQuery = getUrlParameter('q');
    if (urlQuery) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = urlQuery;
            searchInput.dispatchEvent(new Event('input'));
        }
    }
    
})();
