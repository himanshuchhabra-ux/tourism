/* ============================================
   THEME TOGGLE FUNCTIONALITY
   ============================================ */

function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

/* ============================================
   LOGIN PAGE FUNCTIONALITY
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme toggle for all pages
    initializeThemeToggle();
    
    // Check if we're on the login page
    if (document.getElementById('loginForm')) {
        initializeLoginPage();
    }
    
    // Check if we're on the dashboard page
    if (document.querySelector('.dashboard-container')) {
        initializeDashboard();
    }
});

// ============================================
// LOGIN PAGE
// ============================================

function initializeLoginPage() {
    const loginForm = document.getElementById('loginForm');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Change icon
            const icon = this.querySelector('i');
            if (type === 'text') {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }

    // Form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.querySelector('input[name="remember"]').checked;

            // Simple validation
            if (email.trim() === '' || password.trim() === '') {
                return;
            }

            // Store remember me preference (design phase only)
            if (rememberMe) {
                localStorage.setItem('rememberUsername', email);
            } else {
                localStorage.removeItem('rememberUsername');
            }

            // Simulate login and redirect
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 600);
        });
    }
}

// ============================================
// DASHBOARD FUNCTIONALITY
// ============================================

function initializeDashboard() {
    initializeSidebar();
    initializeDateFilter();
    initializeCharts();
    initializeLogout();
    loadSidebarPreferences();
}

function initializeSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const navItems = document.querySelectorAll('.nav-item');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }

    // Close sidebar when a nav item is clicked on mobile
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const section = this.getAttribute('data-section');
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Update page title
            const titles = {
                'dashboard': 'Dashboard',
                'users': 'User Management',
                'vendors': 'Vendor Management',
                'bookings': 'Booking Management',
                'reports': 'Reports',
                'settings': 'Settings'
            };
            
            document.getElementById('pageTitle').textContent = titles[section] || 'Dashboard';
            
            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
}

function initializeDateFilter() {
    const dateFilter = document.getElementById('dateFilter');
    
    if (dateFilter) {
        dateFilter.addEventListener('change', function() {
            const selectedFilter = this.value;
            
            // Update chart data based on selected filter
            updateChartsByFilter(selectedFilter);
            
            // Store preference
            localStorage.setItem('selectedDateFilter', selectedFilter);
        });

        // Load saved preference
        const savedFilter = localStorage.getItem('selectedDateFilter');
        if (savedFilter) {
            dateFilter.value = savedFilter;
        }
    }
}

function initializeCharts() {
    // Initialize Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Revenue ($)',
                        data: [12000, 15000, 18000, 22000, 25000, 28000, 31000, 35000, 32000, 38000, 42000, 48000],
                        borderColor: '#16a085',
                        backgroundColor: 'rgba(22, 160, 133, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 5,
                        pointBackgroundColor: '#16a085',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointHoverRadius: 7
                    },
                    {
                        label: 'Commission ($)',
                        data: [1200, 1500, 1800, 2200, 2500, 2800, 3100, 3500, 3200, 3800, 4200, 4800],
                        borderColor: '#e67e22',
                        backgroundColor: 'rgba(230, 126, 34, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 5,
                        pointBackgroundColor: '#e67e22',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointHoverRadius: 7
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: {
                                size: 12,
                                weight: '600'
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            },
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Initialize Distribution Chart (Pie)
    const distributionCtx = document.getElementById('distributionChart');
    if (distributionCtx) {
        new Chart(distributionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Hotels', 'Restaurants', 'Packages', 'Activities', 'Cabs'],
                datasets: [
                    {
                        data: [35, 20, 25, 12, 8],
                        backgroundColor: [
                            '#16a085',
                            '#e67e22',
                            '#3498db',
                            '#f39c12',
                            '#2980b9'
                        ],
                        borderColor: '#fff',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: {
                                size: 12,
                                weight: '600'
                            }
                        }
                    }
                }
            }
        });
    }
}

function updateChartsByFilter(filter) {
    // This function would normally reload chart data based on the selected filter
    // For the prototype phase, we'll just show a notification
    const filterLabels = {
        'daily': 'daily breakdown',
        'weekly': 'weekly summary',
        'monthly': 'monthly overview',
        'yearly': 'yearly analysis'
    };

    if (filter === 'custom') {
        // In real implementation, show a date range picker modal
    }
}

function initializeLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (confirm('Are you sure you want to logout?')) {
                // Clear any stored preferences
                localStorage.removeItem('selectedDateFilter');
                
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 300);
            }
        });
    }
}

function loadSidebarPreferences() {
    // This could be used to remember which section the user last visited
    // For now, it's a placeholder for future implementation
    const savedSection = localStorage.getItem('lastDashboardSection');
    if (savedSection) {
        const navItem = document.querySelector(`[data-section="${savedSection}"]`);
        if (navItem) {
            navItem.click();
        }
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ============================================
// RESPONSIVE BEHAVIOR
// ============================================

window.addEventListener('resize', () => {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > 768) {
        sidebar?.classList.remove('open');
    }
});

// Prevent form submission on forgot password link (for prototype)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('forgot-password')) {
        e.preventDefault();
    }

    if (e.target.closest('.notification-btn')) {
        e.preventDefault();
    }
});
