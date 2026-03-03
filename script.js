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

    // Check if we're on the forgot password page
    if (document.getElementById('forgotPasswordForm')) {
        initializeForgotPasswordPage();
    }
    
    // Check if we're on the dashboard page
    if (document.querySelector('.dashboard-container')) {
        initializeDashboard();
    }

    // Check if we're on the users page
    if (document.getElementById('usersTable')) {
        initializeUserManagement();
    }

    // Check if we're on the user view page
    if (document.getElementById('viewUserName')) {
        initializeUserViewPage();
    }

    // Check if we're on the user edit page
    if (document.getElementById('editUserForm')) {
        initializeUserEditPage();
    }

    // Check if we're on the vendors page
    if (document.getElementById('vendorsTable')) {
        initializeVendorManagement();
    }

    // Check if we're on the vendor view page
    if (document.getElementById('viewVendorName')) {
        initializeVendorViewPage();
    }

    // Check if we're on the vendor edit page
    if (document.getElementById('editVendorForm')) {
        initializeVendorEditPage();
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
// FORGOT PASSWORD PAGE
// ============================================

function initializeForgotPasswordPage() {
    var form = document.getElementById('forgotPasswordForm');
    var step1 = document.getElementById('forgotStep1');
    var step2 = document.getElementById('forgotStep2');
    var emailInput = document.getElementById('resetEmail');
    var emailError = document.getElementById('emailError');
    var sendBtn = document.getElementById('sendResetBtn');
    var resendBtn = document.getElementById('resendBtn');
    var sentToEmail = document.getElementById('sentToEmail');

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Clear error on input
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            emailError.textContent = '';
            emailInput.style.borderColor = '';
        });
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            var email = emailInput.value.trim();

            // Validation
            if (!email) {
                emailError.textContent = 'Please enter your email address';
                emailInput.style.borderColor = 'var(--danger)';
                emailInput.focus();
                return;
            }
            if (!validateEmail(email)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.style.borderColor = 'var(--danger)';
                emailInput.focus();
                return;
            }

            // Simulate sending
            sendBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
            sendBtn.disabled = true;
            sendBtn.style.opacity = '0.8';

            setTimeout(function() {
                // Show success step
                sentToEmail.textContent = email;
                step1.style.display = 'none';
                step2.style.display = 'block';
                step2.classList.remove('forgot-step-hidden');
            }, 1500);
        });
    }

    // Resend button
    if (resendBtn) {
        resendBtn.addEventListener('click', function() {
            var btn = this;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            setTimeout(function() {
                btn.innerHTML = '<i class="fas fa-check"></i> Email Resent!';
                
                setTimeout(function() {
                    btn.innerHTML = '<i class="fas fa-redo"></i> Resend Email';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
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
    const customRangePicker = document.getElementById('customRangePicker');
    const rangePickerClose = document.getElementById('rangePickerClose');
    const rangeBtnCancel = document.getElementById('rangeBtnCancel');
    const rangeBtnApply = document.getElementById('rangeBtnApply');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const quickOptions = document.querySelectorAll('.quick-option');
    
    if (dateFilter) {
        dateFilter.addEventListener('change', function() {
            const selectedFilter = this.value;
            
            if (selectedFilter === 'custom') {
                // Show custom range picker
                if (customRangePicker) {
                    customRangePicker.classList.add('active');
                    // Set default dates (last 30 days)
                    const today = new Date();
                    const thirtyDaysAgo = new Date(today);
                    thirtyDaysAgo.setDate(today.getDate() - 30);
                    if (startDateInput && !startDateInput.value) {
                        startDateInput.value = formatDateForInput(thirtyDaysAgo);
                    }
                    if (endDateInput && !endDateInput.value) {
                        endDateInput.value = formatDateForInput(today);
                    }
                }
            } else {
                // Hide custom range picker
                if (customRangePicker) {
                    customRangePicker.classList.remove('active');
                }
                // Update chart data based on selected filter
                updateChartsByFilter(selectedFilter);
            }
            
            // Store preference
            localStorage.setItem('selectedDateFilter', selectedFilter);
        });

        // Load saved preference
        const savedFilter = localStorage.getItem('selectedDateFilter');
        if (savedFilter) {
            dateFilter.value = savedFilter;
        }
    }

    // Close picker
    if (rangePickerClose) {
        rangePickerClose.addEventListener('click', function() {
            closeRangePicker();
        });
    }

    // Cancel button
    if (rangeBtnCancel) {
        rangeBtnCancel.addEventListener('click', function() {
            closeRangePicker();
        });
    }

    // Apply button
    if (rangeBtnApply) {
        rangeBtnApply.addEventListener('click', function() {
            const startDate = startDateInput ? startDateInput.value : '';
            const endDate = endDateInput ? endDateInput.value : '';

            if (!startDate || !endDate) {
                // Highlight empty fields
                if (!startDate && startDateInput) startDateInput.style.borderColor = 'var(--danger)';
                if (!endDate && endDateInput) endDateInput.style.borderColor = 'var(--danger)';
                return;
            }

            if (new Date(startDate) > new Date(endDate)) {
                // Swap if start > end
                if (startDateInput) startDateInput.style.borderColor = 'var(--danger)';
                if (endDateInput) endDateInput.style.borderColor = 'var(--danger)';
                return;
            }

            // Reset border colors
            if (startDateInput) startDateInput.style.borderColor = '';
            if (endDateInput) endDateInput.style.borderColor = '';

            // Format and display the selected range
            const formattedStart = formatDisplayDate(new Date(startDate));
            const formattedEnd = formatDisplayDate(new Date(endDate));

            // Update the filter dropdown text
            const customOption = dateFilter.querySelector('option[value="custom"]');
            if (customOption) {
                customOption.textContent = `${formattedStart} - ${formattedEnd}`;
            }

            // Store custom range
            localStorage.setItem('customStartDate', startDate);
            localStorage.setItem('customEndDate', endDate);

            // Update charts
            updateChartsByFilter('custom', startDate, endDate);

            // Close picker
            closeRangePicker();
        });
    }

    // Quick options
    quickOptions.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const days = parseInt(this.dataset.days);
            const today = new Date();
            const startDate = new Date(today);
            startDate.setDate(today.getDate() - days);

            if (startDateInput) startDateInput.value = formatDateForInput(startDate);
            if (endDateInput) endDateInput.value = formatDateForInput(today);

            // Highlight active quick option
            quickOptions.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            // Reset border colors
            if (startDateInput) startDateInput.style.borderColor = '';
            if (endDateInput) endDateInput.style.borderColor = '';
        });
    });

    // Reset border on input focus
    if (startDateInput) {
        startDateInput.addEventListener('focus', function() {
            this.style.borderColor = '';
        });
    }
    if (endDateInput) {
        endDateInput.addEventListener('focus', function() {
            this.style.borderColor = '';
        });
    }

    // Close picker when clicking outside
    document.addEventListener('click', function(e) {
        if (customRangePicker && customRangePicker.classList.contains('active')) {
            const container = document.querySelector('.date-filter-container');
            if (container && !container.contains(e.target)) {
                closeRangePicker();
            }
        }
    });

    function closeRangePicker() {
        if (customRangePicker) {
            customRangePicker.classList.remove('active');
        }
        // Reset to monthly if no range was applied
        const customOption = dateFilter ? dateFilter.querySelector('option[value="custom"]') : null;
        if (customOption && customOption.textContent === 'Custom Range') {
            dateFilter.value = 'monthly';
            localStorage.setItem('selectedDateFilter', 'monthly');
        }
    }

    function formatDateForInput(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function formatDisplayDate(date) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
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

function updateChartsByFilter(filter, startDate, endDate) {
    // This function would normally reload chart data based on the selected filter
    const filterLabels = {
        'daily': 'daily breakdown',
        'weekly': 'weekly summary',
        'monthly': 'monthly overview',
        'yearly': 'yearly analysis',
        'custom': 'custom range'
    };

    if (filter === 'custom' && startDate && endDate) {
        console.log(`Filtering data from ${startDate} to ${endDate}`);
        // In production: fetch data for the custom date range from API
    }
}

function initializeLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
                // Clear any stored preferences
                localStorage.removeItem('selectedDateFilter');
                
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 300);
            
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

// Prevent default on notification button (for prototype)
document.addEventListener('click', function(e) {
    if (e.target.closest('.notification-btn')) {
        e.preventDefault();
    }
});

/* ============================================
   USER MANAGEMENT FUNCTIONALITY
   ============================================ */

function initializeUserManagement() {
    initializeTableSearch('userSearchInput', 'usersTableBody');
    initializeStatusFilter('statusFilter', 'usersTableBody');
    initializeSelectAll('selectAll', 'usersTableBody');
    initializeUserActions();
    initializeLogout();
}

function initializeUserActions() {
    // Block/Unblock inline buttons
    document.querySelectorAll('#usersTable .action-block, #usersTable .action-unblock').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const statusBadge = row.querySelector('.status-badge');

            if (statusBadge.textContent.trim() === 'Blocked') {
                // Unblock
                statusBadge.textContent = 'Active';
                statusBadge.className = 'status-badge status-active';
                this.className = 'action-btn action-block';
                this.title = 'Block User';
                this.innerHTML = '<i class="fas fa-ban"></i>';
            } else {
                // Block
                statusBadge.textContent = 'Blocked';
                statusBadge.className = 'status-badge status-blocked';
                this.className = 'action-btn action-unblock';
                this.title = 'Unblock User';
                this.innerHTML = '<i class="fas fa-check-circle"></i>';
            }
        });
    });
}

/* ============================================
   USER VIEW PAGE
   ============================================ */

// Sample user data store (simulates backend)
var usersData = {
    'USR-001': {
        name: 'Ahmed Al-Rashid', email: 'ahmed.rashid@email.com', phone: '+966 50 123 4567',
        joined: 'Jan 15, 2025', status: 'Active', bookings: '24', spent: '$4,250',
        location: 'Riyadh, Saudi Arabia', lastActive: '2 hours ago',
        avatar: 'Ahmed+Al-Rashid', avatarBg: '667eea',
        firstName: 'Ahmed', lastName: 'Al-Rashid'
    },
    'USR-002': {
        name: 'Fatima Noor', email: 'fatima.noor@email.com', phone: '+966 55 987 6543',
        joined: 'Feb 03, 2025', status: 'Active', bookings: '18', spent: '$3,120',
        location: 'Jeddah, Saudi Arabia', lastActive: '5 hours ago',
        avatar: 'Fatima+Noor', avatarBg: 'f093fb',
        firstName: 'Fatima', lastName: 'Noor'
    },
    'USR-003': {
        name: 'Mohammed Saeed', email: 'm.saeed@email.com', phone: '+966 54 456 7890',
        joined: 'Mar 21, 2025', status: 'Inactive', bookings: '7', spent: '$980',
        location: 'Dammam, Saudi Arabia', lastActive: '3 days ago',
        avatar: 'Mohammed+Saeed', avatarBg: '4facfe',
        firstName: 'Mohammed', lastName: 'Saeed'
    },
    'USR-004': {
        name: 'Sara Abdullah', email: 'sara.abdullah@email.com', phone: '+966 56 321 0987',
        joined: 'Apr 10, 2025', status: 'Active', bookings: '31', spent: '$5,870',
        location: 'Mecca, Saudi Arabia', lastActive: '1 hour ago',
        avatar: 'Sara+Abdullah', avatarBg: '27ae60',
        firstName: 'Sara', lastName: 'Abdullah'
    },
    'USR-005': {
        name: 'Khalid Omar', email: 'k.omar@email.com', phone: '+966 59 654 3210',
        joined: 'May 05, 2025', status: 'Blocked', bookings: '2', spent: '$340',
        location: 'Medina, Saudi Arabia', lastActive: '15 days ago',
        avatar: 'Khalid+Omar', avatarBg: 'e74c3c',
        firstName: 'Khalid', lastName: 'Omar'
    },
    'USR-006': {
        name: 'Layla Hassan', email: 'layla.h@email.com', phone: '+966 53 789 0123',
        joined: 'Jun 18, 2025', status: 'Active', bookings: '15', spent: '$2,450',
        location: 'Taif, Saudi Arabia', lastActive: '30 minutes ago',
        avatar: 'Layla+Hassan', avatarBg: 'f39c12',
        firstName: 'Layla', lastName: 'Hassan'
    },
    'USR-007': {
        name: 'Omar Farooq', email: 'omar.farooq@email.com', phone: '+966 51 234 5678',
        joined: 'Jul 02, 2025', status: 'Active', bookings: '42', spent: '$7,680',
        location: 'Riyadh, Saudi Arabia', lastActive: '4 hours ago',
        avatar: 'Omar+Farooq', avatarBg: '16a085',
        firstName: 'Omar', lastName: 'Farooq'
    },
    'USR-008': {
        name: 'Nadia Khan', email: 'nadia.khan@email.com', phone: '+966 58 876 5432',
        joined: 'Aug 14, 2025', status: 'Active', bookings: '9', spent: '$1,560',
        location: 'Abha, Saudi Arabia', lastActive: '1 day ago',
        avatar: 'Nadia+Khan', avatarBg: '9b59b6',
        firstName: 'Nadia', lastName: 'Khan'
    }
};

function getUserIdFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id') || 'USR-001';
}

function initializeUserViewPage() {
    var userId = getUserIdFromUrl();
    var user = usersData[userId];

    if (user) {
        document.getElementById('viewUserAvatar').src = 'https://ui-avatars.com/api/?name=' + user.avatar + '&background=' + user.avatarBg + '&color=fff&size=120';
        document.getElementById('viewUserName').textContent = user.name;
        document.getElementById('viewUserTitle').textContent = user.name;
        document.getElementById('viewUserId').textContent = '#' + userId;
        document.getElementById('viewUserEmail').textContent = user.email;
        document.getElementById('viewUserPhone').textContent = user.phone;
        document.getElementById('viewUserJoined').textContent = user.joined;
        document.getElementById('viewUserLocation').textContent = user.location;
        document.getElementById('viewUserLastActive').textContent = user.lastActive;
        document.getElementById('viewUserBookings').textContent = user.bookings;
        document.getElementById('viewUserSpent').textContent = user.spent;

        var statusEl = document.getElementById('viewUserStatus');
        statusEl.textContent = user.status;
        statusEl.className = 'status-badge status-' + user.status.toLowerCase();

        // Edit user link
        var editLink = document.getElementById('editUserLink');
        if (editLink) {
            editLink.href = 'user-edit.html?id=' + userId;
        }

        // Block/Unblock button
        var blockBtn = document.getElementById('blockUserBtn');
        if (blockBtn) {
            if (user.status === 'Blocked') {
                blockBtn.innerHTML = '<i class="fas fa-check-circle"></i> Unblock User';
                blockBtn.classList.remove('btn-danger');
                blockBtn.classList.add('btn-outline');
            }
            blockBtn.addEventListener('click', function() {
                var currentStatus = statusEl.textContent.trim();
                if (currentStatus === 'Blocked') {
                    statusEl.textContent = 'Active';
                    statusEl.className = 'status-badge status-active';
                    this.innerHTML = '<i class="fas fa-ban"></i> Block User';
                    this.classList.remove('btn-outline');
                    this.classList.add('btn-danger');
                } else {
                    statusEl.textContent = 'Blocked';
                    statusEl.className = 'status-badge status-blocked';
                    this.innerHTML = '<i class="fas fa-check-circle"></i> Unblock User';
                    this.classList.remove('btn-danger');
                    this.classList.add('btn-outline');
                }
            });
        }

        // Reset password button
        var resetPwdBtn = document.getElementById('resetPasswordBtn');
        if (resetPwdBtn) {
            resetPwdBtn.addEventListener('click', function() {
                this.innerHTML = '<i class="fas fa-check"></i> Reset Link Sent';
                this.disabled = true;
                this.style.opacity = '0.7';
                var ref = this;
                setTimeout(function() {
                    ref.innerHTML = '<i class="fas fa-key"></i> Reset Password';
                    ref.disabled = false;
                    ref.style.opacity = '';
                }, 2500);
            });
        }
    }

    initializeLogout();
}

/* ============================================
   USER EDIT PAGE
   ============================================ */

function initializeUserEditPage() {
    var userId = getUserIdFromUrl();
    var user = usersData[userId];

    if (user) {
        document.getElementById('editUserAvatar').src = 'https://ui-avatars.com/api/?name=' + user.avatar + '&background=' + user.avatarBg + '&color=fff&size=120';
        document.getElementById('editUserDisplayName').textContent = user.name;
        document.getElementById('editUserId').textContent = '#' + userId;
        document.getElementById('editUserTitle').textContent = 'Edit — ' + user.name;
        document.getElementById('editFirstName').value = user.firstName;
        document.getElementById('editLastName').value = user.lastName;
        document.getElementById('editEmail').value = user.email;
        document.getElementById('editPhone').value = user.phone;
        document.getElementById('editLocation').value = user.location;
        document.getElementById('editUserJoinedDisplay').value = user.joined;

        // Set status dropdown
        var statusSelect = document.getElementById('editStatus');
        if (statusSelect) {
            statusSelect.value = user.status.toLowerCase();
        }
    }

    // Form submission
    var form = document.getElementById('editUserForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            var saveBtn = document.getElementById('saveUserBtn');
            if (saveBtn) {
                saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved Successfully';
                saveBtn.disabled = true;
                saveBtn.style.opacity = '0.8';

                setTimeout(function() {
                    window.location.href = 'user-view.html?id=' + userId;
                }, 1200);
            }
        });
    }

    initializeLogout();
}

/* ============================================
   VENDOR MANAGEMENT FUNCTIONALITY
   ============================================ */

// Vendor data store (simulates backend)
var vendorsData = {
    'VND-001': {
        name: 'Al Faisaliah Hotel', owner: 'Abdulaziz Al-Faisal',
        email: 'info@alfaisaliah.com', phone: '+966 11 234 5678',
        joined: 'Jan 10, 2025', status: 'Approved', type: 'hotel', typeName: 'Hotel', typeIcon: 'fa-hotel',
        rating: '4.8', revenue: '$245,000', commission: '12', bookings: '1,247',
        location: 'Riyadh, KSA', website: 'www.alfaisaliahhotel.com',
        avatar: 'Al+Faisaliah+Hotel', avatarBg: '667eea',
        responseTime: '2.3 hours', cancelRate: '1.8%', payout: 'Monthly', totalPayouts: '$215,600',
        description: 'Luxury 5-star hotel located in the heart of Riyadh, offering premium accommodation and world-class dining experiences.',
        bankName: 'Al Rajhi Bank', accountNumber: 'SA03 8000 0000 6080 1016 7519',
        notes: 'Premium vendor partner. High booking volume. Insurance document pending review — follow up by March 2026.'
    },
    'VND-002': {
        name: 'Najd Cuisine', owner: 'Hassan Al-Qahtani',
        email: 'contact@najdcuisine.com', phone: '+966 11 456 7890',
        joined: 'Feb 14, 2025', status: 'Approved', type: 'restaurant', typeName: 'Restaurant', typeIcon: 'fa-utensils',
        rating: '4.6', revenue: '$89,500', commission: '10', bookings: '834',
        location: 'Riyadh, KSA', website: 'www.najdcuisine.com',
        avatar: 'Najd+Cuisine', avatarBg: '27ae60',
        responseTime: '1.5 hours', cancelRate: '0.9%', payout: 'Bi-Weekly', totalPayouts: '$80,550',
        description: 'Authentic Saudi Arabian restaurant serving traditional Najd cuisine with modern presentation.',
        bankName: 'Saudi National Bank', accountNumber: 'SA44 1000 0000 0060 8010 1234',
        notes: 'Excellent customer reviews. Featured vendor for dining experiences.'
    },
    'VND-003': {
        name: 'Desert Adventures', owner: 'Turki Al-Otaibi',
        email: 'info@desertadventures.sa', phone: '+966 50 789 0123',
        joined: 'Jul 22, 2025', status: 'Pending', type: 'tour', typeName: 'Tour Operator', typeIcon: 'fa-compass',
        rating: 'N/A', revenue: '$0', commission: '—', bookings: '0',
        location: 'Riyadh, KSA', website: 'www.desertadventures.sa',
        avatar: 'Desert+Adventures', avatarBg: 'f39c12',
        responseTime: 'N/A', cancelRate: 'N/A', payout: 'Monthly', totalPayouts: '$0',
        description: 'Desert safari and outdoor adventure tour operator specializing in cultural desert experiences.',
        bankName: 'Riyad Bank', accountNumber: 'SA22 2000 0000 0012 3456 7890',
        notes: 'New application. Documents under review. Awaiting insurance verification.'
    },
    'VND-004': {
        name: 'Red Sea Resort', owner: 'Omar Al-Harbi',
        email: 'reservations@redsearesort.com', phone: '+966 12 345 6789',
        joined: 'Mar 05, 2025', status: 'Approved', type: 'hotel', typeName: 'Hotel', typeIcon: 'fa-hotel',
        rating: '4.9', revenue: '$312,800', commission: '15', bookings: '1,892',
        location: 'Jeddah, KSA', website: 'www.redsearesort.com',
        avatar: 'Red+Sea+Resort', avatarBg: 'e74c3c',
        responseTime: '1.8 hours', cancelRate: '1.2%', payout: 'Monthly', totalPayouts: '$265,880',
        description: 'Beachfront luxury resort on the Red Sea coast with private beach, spa, and premium water sports facilities.',
        bankName: 'Al Rajhi Bank', accountNumber: 'SA55 8000 0000 6123 4567 8901',
        notes: 'Top-performing vendor. Consistently high ratings. Premium partnership tier.'
    },
    'VND-005': {
        name: 'Jeddah Rides', owner: 'Faisal Mahmoud',
        email: 'support@jeddahrides.com', phone: '+966 12 987 6543',
        joined: 'Jul 28, 2025', status: 'Pending', type: 'transport', typeName: 'Transport', typeIcon: 'fa-car',
        rating: 'N/A', revenue: '$0', commission: '—', bookings: '0',
        location: 'Jeddah, KSA', website: 'www.jeddahrides.com',
        avatar: 'Jeddah+Rides', avatarBg: '9b59b6',
        responseTime: 'N/A', cancelRate: 'N/A', payout: 'Weekly', totalPayouts: '$0',
        description: 'Private car hire and airport transfer service operating across Jeddah and surrounding areas.',
        bankName: 'Saudi National Bank', accountNumber: 'SA66 1000 0000 0078 9012 3456',
        notes: 'New application. Fleet verification in progress.'
    },
    'VND-006': {
        name: 'Arabian Nights Dining', owner: 'Noura Al-Saud',
        email: 'hello@arabiannightsdining.com', phone: '+966 11 654 3210',
        joined: 'Apr 12, 2025', status: 'Approved', type: 'restaurant', typeName: 'Restaurant', typeIcon: 'fa-utensils',
        rating: '4.4', revenue: '$67,200', commission: '10', bookings: '612',
        location: 'Riyadh, KSA', website: 'www.arabiannightsdining.com',
        avatar: 'Arabian+Nights+Dining', avatarBg: '16a085',
        responseTime: '3.1 hours', cancelRate: '2.4%', payout: 'Monthly', totalPayouts: '$60,480',
        description: 'Themed dining experience with traditional Arabian ambiance, live entertainment, and authentic Middle Eastern cuisine.',
        bankName: 'Alinma Bank', accountNumber: 'SA77 0500 0000 0034 5678 9012',
        notes: 'Good performance. Slightly higher cancellation rate — monitor. Response time could be improved.'
    },
    'VND-007': {
        name: 'Summit Trekkers', owner: 'Khalid Al-Zahrani',
        email: 'info@summittrekkers.sa', phone: '+966 17 234 5678',
        joined: 'Jun 30, 2025', status: 'Rejected', type: 'activity', typeName: 'Activity', typeIcon: 'fa-hiking',
        rating: 'N/A', revenue: '$0', commission: '—', bookings: '0',
        location: 'Abha, KSA', website: 'www.summittrekkers.sa',
        avatar: 'Summit+Trekkers', avatarBg: 'f093fb',
        responseTime: 'N/A', cancelRate: 'N/A', payout: 'Monthly', totalPayouts: '$0',
        description: 'Mountain trekking and hiking tours in the Asir region, specializing in guided outdoor adventures.',
        bankName: 'Riyad Bank', accountNumber: 'SA88 2000 0000 0045 6789 0123',
        notes: 'Application rejected — insufficient safety certifications. Can reapply after obtaining required documentation.'
    },
    'VND-008': {
        name: 'Riyadh Grand Hotel', owner: 'Salman Al-Dosari',
        email: 'info@riyadhgrandhotel.com', phone: '+966 11 876 5432',
        joined: 'Dec 20, 2024', status: 'Disabled', type: 'hotel', typeName: 'Hotel', typeIcon: 'fa-hotel',
        rating: '3.9', revenue: '$156,400', commission: '12', bookings: '943',
        location: 'Riyadh, KSA', website: 'www.riyadhgrandhotel.com',
        avatar: 'Riyadh+Grand+Hotel', avatarBg: '4facfe',
        responseTime: '5.2 hours', cancelRate: '4.1%', payout: 'Monthly', totalPayouts: '$137,632',
        description: 'Budget-friendly hotel in central Riyadh, disabled due to ongoing quality improvement measures.',
        bankName: 'Al Rajhi Bank', accountNumber: 'SA99 8000 0000 6234 5678 9012',
        notes: 'Disabled due to multiple customer complaints about room quality. Under review for potential reinstatement after improvements.'
    }
};

function getVendorIdFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id') || 'VND-001';
}

function initializeVendorManagement() {
    initializeTableSearch('vendorSearchInput', 'vendorsTableBody');
    initializeStatusFilter('vendorStatusFilter', 'vendorsTableBody');
    initializeVendorActions();
    initializeLogout();
}

function initializeVendorActions() {
    // Approve buttons
    document.querySelectorAll('#vendorsTable .action-approve').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var row = this.closest('tr');
            var statusBadge = row.querySelector('.status-badge');
            statusBadge.textContent = 'Approved';
            statusBadge.className = 'status-badge status-approved';

            // Replace approve/reject with edit/disable
            var actionsDiv = row.querySelector('.table-actions');
            var viewBtn = actionsDiv.querySelector('.action-view').outerHTML;
            actionsDiv.innerHTML = viewBtn +
                '<button class="action-btn action-edit" title="Edit Vendor"><i class="fas fa-pen"></i></button>' +
                '<button class="action-btn action-block" title="Disable"><i class="fas fa-toggle-off"></i></button>';
        });
    });

    // Reject buttons
    document.querySelectorAll('#vendorsTable .action-reject').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var row = this.closest('tr');
            var statusBadge = row.querySelector('.status-badge');
            statusBadge.textContent = 'Rejected';
            statusBadge.className = 'status-badge status-rejected';

            // Replace approve/reject with re-approve/delete
            var actionsDiv = row.querySelector('.table-actions');
            var viewBtn = actionsDiv.querySelector('.action-view').outerHTML;
            actionsDiv.innerHTML = viewBtn +
                '<button class="action-btn action-approve" title="Re-approve"><i class="fas fa-redo"></i></button>' +
                '<button class="action-btn action-delete" title="Delete"><i class="fas fa-trash"></i></button>';
        });
    });

    // Enable/Disable inline toggle
    document.querySelectorAll('#vendorsTable .action-block').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var row = this.closest('tr');
            var statusBadge = row.querySelector('.status-badge');
            if (statusBadge.textContent.trim() === 'Disabled') {
                statusBadge.textContent = 'Approved';
                statusBadge.className = 'status-badge status-approved';
                this.title = 'Disable';
                this.innerHTML = '<i class="fas fa-toggle-off"></i>';
            } else {
                statusBadge.textContent = 'Disabled';
                statusBadge.className = 'status-badge status-disabled';
                this.title = 'Enable';
                this.innerHTML = '<i class="fas fa-toggle-on"></i>';
            }
        });
    });
}

/* ============================================
   VENDOR VIEW PAGE
   ============================================ */

function initializeVendorViewPage() {
    var vendorId = getVendorIdFromUrl();
    var vendor = vendorsData[vendorId];

    if (vendor) {
        document.getElementById('viewVendorAvatar').src = 'https://ui-avatars.com/api/?name=' + vendor.avatar + '&background=' + vendor.avatarBg + '&color=fff&size=120';
        document.getElementById('viewVendorName').textContent = vendor.name;
        document.getElementById('viewVendorTitle').textContent = vendor.name;
        document.getElementById('viewVendorId').textContent = '#' + vendorId;
        document.getElementById('viewVendorOwner').textContent = vendor.owner;
        document.getElementById('viewVendorEmail').textContent = vendor.email;
        document.getElementById('viewVendorPhone').textContent = vendor.phone;
        document.getElementById('viewVendorLocation').textContent = vendor.location;
        document.getElementById('viewVendorWebsite').textContent = vendor.website;
        document.getElementById('viewVendorJoined').textContent = vendor.joined;
        document.getElementById('viewVendorBookings').textContent = vendor.bookings;
        document.getElementById('viewVendorRevenue').textContent = vendor.revenue;
        document.getElementById('viewVendorRating').textContent = vendor.rating;
        document.getElementById('viewVendorCommission').textContent = vendor.commission === '—' ? '—' : vendor.commission + '%';
        document.getElementById('viewVendorResponseTime').textContent = vendor.responseTime;
        document.getElementById('viewVendorCancelRate').textContent = vendor.cancelRate;
        document.getElementById('viewVendorPayout').textContent = vendor.payout;
        document.getElementById('viewVendorTotalPayouts').textContent = vendor.totalPayouts;

        // Status badge
        var statusEl = document.getElementById('viewVendorStatus');
        statusEl.textContent = vendor.status;
        statusEl.className = 'status-badge status-' + vendor.status.toLowerCase();

        // Type badge
        var typeBadge = document.getElementById('viewVendorTypeBadge');
        if (typeBadge) {
            typeBadge.className = 'type-badge type-' + vendor.type;
            typeBadge.innerHTML = '<i class="fas ' + vendor.typeIcon + '"></i> ' + vendor.typeName;
        }

        // Edit vendor link
        var editLink = document.getElementById('editVendorLink');
        if (editLink) {
            editLink.href = 'vendor-edit.html?id=' + vendorId;
        }

        // Disable/Enable button
        var disableBtn = document.getElementById('disableVendorViewBtn');
        if (disableBtn) {
            if (vendor.status === 'Disabled') {
                disableBtn.innerHTML = '<i class="fas fa-toggle-on"></i> Enable Vendor';
                disableBtn.classList.remove('btn-danger');
                disableBtn.classList.add('btn-outline');
            }
            disableBtn.addEventListener('click', function() {
                var currentStatus = statusEl.textContent.trim();
                if (currentStatus === 'Disabled') {
                    statusEl.textContent = 'Approved';
                    statusEl.className = 'status-badge status-approved';
                    this.innerHTML = '<i class="fas fa-toggle-off"></i> Disable Vendor';
                    this.classList.remove('btn-outline');
                    this.classList.add('btn-danger');
                } else {
                    statusEl.textContent = 'Disabled';
                    statusEl.className = 'status-badge status-disabled';
                    this.innerHTML = '<i class="fas fa-toggle-on"></i> Enable Vendor';
                    this.classList.remove('btn-danger');
                    this.classList.add('btn-outline');
                }
            });
        }

        // Documents button
        var docsBtn = document.getElementById('viewDocumentsBtn');
        if (docsBtn) {
            docsBtn.addEventListener('click', function() {
                var docsSection = document.querySelector('.document-grid');
                if (docsSection) {
                    docsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }
    }

    initializeLogout();
}

/* ============================================
   VENDOR EDIT PAGE
   ============================================ */

function initializeVendorEditPage() {
    var vendorId = getVendorIdFromUrl();
    var vendor = vendorsData[vendorId];

    if (vendor) {
        document.getElementById('editVendorAvatar').src = 'https://ui-avatars.com/api/?name=' + vendor.avatar + '&background=' + vendor.avatarBg + '&color=fff&size=120';
        document.getElementById('editVendorDisplayName').textContent = vendor.name;
        document.getElementById('editVendorId').textContent = '#' + vendorId;
        document.getElementById('editVendorTitle').textContent = 'Edit — ' + vendor.name;
        document.getElementById('editBusinessName').value = vendor.name;
        document.getElementById('editOwnerName').value = vendor.owner;
        document.getElementById('editVendorEmail').value = vendor.email;
        document.getElementById('editVendorPhone').value = vendor.phone;
        document.getElementById('editVendorLocation').value = vendor.location;
        document.getElementById('editVendorJoinedDisplay').value = vendor.joined;
        document.getElementById('editVendorDesc').value = vendor.description;
        document.getElementById('editVendorNotes').value = vendor.notes;

        // Website
        var websiteInput = document.getElementById('editVendorWebsite');
        if (websiteInput) {
            websiteInput.value = vendor.website.startsWith('http') ? vendor.website : 'https://' + vendor.website;
        }

        // Status dropdown
        var statusSelect = document.getElementById('editVendorStatus');
        if (statusSelect) {
            statusSelect.value = vendor.status.toLowerCase();
        }

        // Business type dropdown
        var typeSelect = document.getElementById('editVendorType');
        if (typeSelect) {
            typeSelect.value = vendor.type;
        }

        // Commission
        var commissionInput = document.getElementById('editCommissionRate');
        if (commissionInput && vendor.commission !== '—') {
            commissionInput.value = vendor.commission;
        }

        // Payout schedule
        var payoutSelect = document.getElementById('editPayoutSchedule');
        if (payoutSelect) {
            payoutSelect.value = vendor.payout.toLowerCase().replace('-', '');
        }

        // Bank details
        var bankInput = document.getElementById('editBankName');
        if (bankInput) bankInput.value = vendor.bankName;
        var accountInput = document.getElementById('editAccountNumber');
        if (accountInput) accountInput.value = vendor.accountNumber;
    }

    // Form submission
    var form = document.getElementById('editVendorForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            var saveBtn = document.getElementById('saveVendorBtn');
            if (saveBtn) {
                saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved Successfully';
                saveBtn.disabled = true;
                saveBtn.style.opacity = '0.8';

                setTimeout(function() {
                    window.location.href = 'vendor-view.html?id=' + vendorId;
                }, 1200);
            }
        });
    }

    initializeLogout();
}

/* ============================================
   SHARED TABLE UTILITIES
   ============================================ */

function initializeTableSearch(inputId, tbodyId) {
    var searchInput = document.getElementById(inputId);
    var tbody = document.getElementById(tbodyId);

    if (searchInput && tbody) {
        searchInput.addEventListener('input', function() {
            var query = this.value.toLowerCase();
            var rows = tbody.querySelectorAll('tr');

            rows.forEach(function(row) {
                var text = row.textContent.toLowerCase();
                row.style.display = text.includes(query) ? '' : 'none';
            });
        });
    }
}

function initializeStatusFilter(selectId, tbodyId) {
    var select = document.getElementById(selectId);
    var tbody = document.getElementById(tbodyId);

    if (select && tbody) {
        select.addEventListener('change', function() {
            var value = this.value.toLowerCase();
            var rows = tbody.querySelectorAll('tr');

            rows.forEach(function(row) {
                if (value === 'all') {
                    row.style.display = '';
                } else {
                    var badge = row.querySelector('.status-badge');
                    var status = badge ? badge.textContent.toLowerCase().trim() : '';
                    row.style.display = status === value ? '' : 'none';
                }
            });
        });
    }
}

function initializeSelectAll(checkboxId, tbodyId) {
    var selectAll = document.getElementById(checkboxId);
    var tbody = document.getElementById(tbodyId);

    if (selectAll && tbody) {
        selectAll.addEventListener('change', function() {
            var checked = this.checked;
            tbody.querySelectorAll('.row-checkbox').forEach(function(cb) {
                cb.checked = checked;
            });
        });
    }
}
