// Main JavaScript file for Multi-Tools Hub
document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer dynamically
    loadHeader();
    loadFooter();
    
    // Initialize search functionality
    initializeSearch();
    
    // Load tools on homepage
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        loadTools();
        loadPopularTools();
    }
});

// Load header dynamically
async function loadHeader() {
    try {
        const response = await fetch('header.html');
        const headerHtml = await response.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;
        
        // Initialize header search
        const headerSearch = document.getElementById('headerSearch');
        if (headerSearch) {
            headerSearch.addEventListener('input', function() {
                performSearch(this.value);
            });
        }
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Load footer dynamically
async function loadFooter() {
    try {
        const response = await fetch('footer.html');
        const footerHtml = await response.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });
    }
}

// Perform search
function performSearch(query) {
    if (!query.trim()) {
        loadTools(); // Show all tools if search is empty
        return;
    }
    
    const allTools = getAllTools();
    const filteredTools = allTools.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        tool.category.toLowerCase().includes(query.toLowerCase())
    );
    
    renderTools(filteredTools);
}

// Load all tools
function loadTools() {
    const allTools = getAllTools();
    renderTools(allTools);
}

// Render tools in grid
function renderTools(tools) {
    const container = document.getElementById('toolsContainer');
    if (!container) return;
    
    // Group tools by category
    const groupedTools = {};
    tools.forEach(tool => {
        if (!groupedTools[tool.categoryId]) {
            groupedTools[tool.categoryId] = {
                category: toolsData.categories.find(cat => cat.id === tool.categoryId),
                tools: []
            };
        }
        groupedTools[tool.categoryId].tools.push(tool);
    });
    
    let html = '';
    
    Object.values(groupedTools).forEach(group => {
        if (group.tools.length === 0) return;
        
        html += `
            <section class="mb-5" id="${group.category.id}">
                <div class="d-flex align-items-center mb-4">
                    <i class="${group.category.icon} text-${group.category.color} me-3 fs-2"></i>
                    <h2 class="mb-0">${group.category.name}</h2>
                </div>
                <div class="row g-4">
        `;
        
        group.tools.forEach(tool => {
            html += `
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card h-100 tool-card shadow-sm">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3">
                                <i class="${tool.icon} text-${group.category.color} me-3 fs-4"></i>
                                <h5 class="card-title mb-0">${tool.name}</h5>
                                ${tool.popular ? '<span class="badge bg-warning ms-2">Popular</span>' : ''}
                            </div>
                            <p class="card-text text-muted">${tool.description}</p>
                        </div>
                        <div class="card-footer bg-transparent">
                            <a href="${tool.url}" class="btn btn-outline-${group.category.color} w-100">
                                <i class="fas fa-external-link-alt me-2"></i>Use Tool
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </section>
        `;
    });
    
    container.innerHTML = html;
}

// Load popular tools in sidebar
function loadPopularTools() {
    const popularTools = getPopularTools();
    const container = document.getElementById('popularTools');
    if (!container) return;
    
    let html = '';
    popularTools.forEach(tool => {
        html += `
            <li class="mb-2">
                <a href="${tool.url}" class="text-decoration-none">
                    <i class="${tool.icon} me-2"></i>${tool.name}
                </a>
            </li>
        `;
    });
    
    container.innerHTML = html;
}

// Utility function to show loading spinner
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `
            <div class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3 text-muted">Loading tools...</p>
            </div>
        `;
    }
}

// Utility function to show error message
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <i class="fas fa-exclamation-triangle me-2"></i>
                ${message}
            </div>
        `;
    }
}

// Smooth scroll to category
function scrollToCategory(categoryId) {
    const element = document.getElementById(categoryId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Copy to clipboard utility
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success message
        showToast('Copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast('Failed to copy to clipboard', 'error');
    });
}

// Show toast notification
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'} border-0`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    // Remove toast after it's hidden
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

// Create toast container if it doesn't exist
function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container position-fixed top-0 end-0 p-3';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
    return container;
} 