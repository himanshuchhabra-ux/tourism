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

    // Initialize sidebar collapse for all pages with sidebar
    initializeSidebarCollapse();

    // Initialize profile dropdown for all pages with topbar
    initializeProfileDropdown();
    
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

    // Check if we're on the service providers page
    if (document.getElementById('providersTable')) {
        initializeProviderManagement();
    }

    // Check if we're on the provider view page
    if (document.getElementById('viewProviderName')) {
        initializeProviderViewPage();
    }

    // Check if we're on the provider edit page
    if (document.getElementById('editProviderForm')) {
        initializeProviderEditPage();
    }

    // Check if we're on the categories page
    if (document.getElementById('categoriesTable')) {
        initializeCategoryManagement();
    }

    // Check if we're on the category view page
    if (document.getElementById('viewCategoryName')) {
        initializeCategoryViewPage();
    }

    // Check if we're on the category edit page
    if (document.getElementById('editCategoryForm')) {
        initializeCategoryEditPage();
    }

    // Check if we're on the hotels page
    if (document.getElementById('hotelsTable')) {
        initializeHotelManagement();
    }

    // Check if we're on the hotel view page
    if (document.getElementById('viewHotelName')) {
        initializeHotelViewPage();
    }

    // Check if we're on the hotel edit page
    if (document.getElementById('hotelEditForm')) {
        initializeHotelEditPage();
    }

    // Check if we're on the restaurants page
    if (document.getElementById('restaurantsTable')) {
        initializeRestaurantManagement();
    }

    // Check if we're on the restaurant view page
    if (document.getElementById('viewRestaurantName')) {
        initializeRestaurantViewPage();
    }

    // Check if we're on the restaurant edit page
    if (document.getElementById('restaurantEditForm')) {
        initializeRestaurantEditPage();
    }

    // Check if we're on the packages page
    if (document.getElementById('packagesTable')) {
        initializePackageManagement();
    }

    // Check if we're on the package view page
    if (document.getElementById('viewPackageName')) {
        initializePackageViewPage();
    }

    // Check if we're on the package edit page
    if (document.getElementById('packageEditForm')) {
        initializePackageEditPage();
    }

    // Check if we're on the activities page
    if (document.getElementById('activitiesTable')) {
        initializeActivityManagement();
    }

    // Check if we're on the activity view page
    if (document.getElementById('viewActivityName')) {
        initializeActivityViewPage();
    }

    // Check if we're on the activity edit page
    if (document.getElementById('activityEditForm')) {
        initializeActivityEditPage();
    }

    // Check if we're on the cabs list page
    if (document.getElementById('cabsTable')) {
        initializeCabManagement();
    }

    // Check if we're on the cab view page
    if (document.getElementById('viewCabDriverName')) {
        initializeCabViewPage();
    }

    // Check if we're on the cab edit page
    if (document.getElementById('cabEditForm')) {
        initializeCabEditPage();
    }

    // Check if we're on the bookings list page
    if (document.getElementById('bookingsTable')) {
        initializeBookingManagement();
    }

    // Check if we're on the booking view page
    if (document.getElementById('viewBookingId')) {
        initializeBookingViewPage();
    }

    // Check if we're on the booking edit page
    if (document.getElementById('bookingEditForm')) {
        initializeBookingEditPage();
    }

    // Check if we're on the subscriptions page
    if (document.getElementById('subscriptionsTable')) {
        initializeSubscriptionManagement();
    }

    // Check if we're on the subscription view page
    if (document.getElementById('viewSubPlanName')) {
        initializeSubscriptionViewPage();
    }

    // Check if we're on the subscription edit page
    if (document.getElementById('subscriptionEditForm')) {
        initializeSubscriptionEditPage();
    }

    // Check if we're on the payouts page
    if (document.getElementById('payoutsTable')) {
        initializePayoutManagement();
    }

    // Check if we're on the payout view page
    if (document.getElementById('viewPayoutId')) {
        initializePayoutViewPage();
    }

    // Check if we're on the payout edit page
    if (document.getElementById('payoutEditForm')) {
        initializePayoutEditPage();
    }

    // Check if we're on the ads page
    if (document.getElementById('adsTable')) {
        initializeAdManagement();
    }

    // Check if we're on the ad view page
    if (document.getElementById('viewAdName')) {
        initializeAdViewPage();
    }

    // Check if we're on the ad edit page
    if (document.getElementById('adEditForm')) {
        initializeAdEditPage();
    }

    // Check if we're on the banners page
    if (document.getElementById('bannersTable')) {
        initializeBannerManagement();
    }

    // Check if we're on the banner view page
    if (document.getElementById('viewBannerName')) {
        initializeBannerViewPage();
    }

    // Check if we're on the banner edit page
    if (document.getElementById('bannerEditForm')) {
        initializeBannerEditPage();
    }

    // Check if we're on the reports page
    if (document.getElementById('scheduledReportsTable')) {
        initializeReportsPage();
    }

    // Check if we're on the refunds page
    if (document.getElementById('refundsTable')) {
        initializeRefundManagement();
    }

    // Check if we're on the refund view page
    if (document.getElementById('viewRefundId')) {
        initializeRefundViewPage();
    }

    // Check if we're on the refund edit page
    if (document.getElementById('refundEditForm')) {
        initializeRefundEditPage();
    }

    // Check if we're on the transactions page
    if (document.getElementById('transactionsTable')) {
        initializeTransactionManagement();
    }

    // Check if we're on the transaction view page
    if (document.getElementById('viewTxnId')) {
        initializeTransactionViewPage();
    }

    // Check if we're on the notifications page
    if (document.getElementById('notificationsTable')) {
        initializeNotificationManagement();
    }

    // Check if we're on the notification view page
    if (document.getElementById('viewNotifId')) {
        initializeNotificationViewPage();
    }

    // Check if we're on the notification edit page
    if (document.getElementById('notificationEditForm')) {
        initializeNotificationEditPage();
    }

    // Check if we're on the support page
    if (document.getElementById('supportTable')) {
        initializeSupportManagement();
    }

    // Check if we're on the support view page
    if (document.getElementById('viewTicketId')) {
        initializeSupportViewPage();
    }

    // Check if we're on the support edit page
    if (document.getElementById('supportEditForm')) {
        initializeSupportEditPage();
    }

    // Check if we're on the CMS pages
    if (document.getElementById('cmsTable')) {
        initializeCmsManagement();
    }

    // Check if we're on the CMS view page
    if (document.getElementById('viewCmsSlug')) {
        initializeCmsViewPage();
    }

    // Check if we're on the CMS edit page
    if (document.getElementById('cmsEditForm')) {
        initializeCmsEditPage();
    }

    // Check if we're on the settings page
    if (document.getElementById('settingsForm')) {
        initializeSettingsPage();
    }

    // Phase 11: Commission Management
    if (document.getElementById('commissionTable')) {
        initializeCommissionManagement();
    }

    // Phase 11: Commission View
    if (document.getElementById('viewCommissionId')) {
        initializeCommissionViewPage();
    }

    // Phase 11: Commission Edit
    if (document.getElementById('commissionEditForm')) {
        initializeCommissionEditPage();
    }

    // Phase 11: Ads Rate Management
    if (document.getElementById('adsRateTable')) {
        initializeAdsRateManagement();
    }

    // Phase 11: Ads Rate View
    if (document.getElementById('viewAdsRateId')) {
        initializeAdsRateViewPage();
    }

    // Phase 11: Ads Rate Edit
    if (document.getElementById('adsRateEditForm')) {
        initializeAdsRateEditPage();
    }

    // Phase 11: Dashboard Comparison Toggle
    if (document.getElementById('compareToggle')) {
        initializeComparisonToggle();
    }

    // Sub Admin Management
    if (document.getElementById('subAdminsTable')) {
        initializeSubAdminManagement();
    }

    // Sub Admin Edit
    if (document.getElementById('subAdminEditForm')) {
        initializeSubAdminEditPage();
    }

    // Sub Admin View
    if (document.getElementById('viewSubAdminName')) {
        initializeSubAdminViewPage();
    }

    // Sub Admin Dashboard
    if (document.querySelector('.sub-admin-welcome')) {
        initializeSubAdminDashboard();
    }

    // Add Pages - generic form handling
    var addPageConfigs = [
        { formId: 'addProviderForm', redirect: 'service-providers.html', label: 'Provider' },
        { formId: 'addCategoryForm', redirect: 'categories.html', label: 'Category' },
        { formId: 'addHotelForm', redirect: 'hotels.html', label: 'Hotel' },
        { formId: 'addRestaurantForm', redirect: 'restaurants.html', label: 'Restaurant' },
        { formId: 'addPackageForm', redirect: 'packages.html', label: 'Package' },
        { formId: 'addActivityForm', redirect: 'activities.html', label: 'Activity' },
        { formId: 'addCabForm', redirect: 'cabs.html', label: 'Cab' },
        { formId: 'addSubscriptionForm', redirect: 'subscriptions.html', label: 'Plan' },
        { formId: 'addAdForm', redirect: 'ads.html', label: 'Ad' },
        { formId: 'addBannerForm', redirect: 'banners.html', label: 'Banner' },
        { formId: 'addCommissionForm', redirect: 'commission.html', label: 'Rule' },
        { formId: 'addAdsRateForm', redirect: 'ads-rate.html', label: 'Rate Rule' }
    ];
    addPageConfigs.forEach(function(cfg) {
        var form = document.getElementById(cfg.formId);
        if (form) {
            initializeAddPageForm(form, cfg.redirect, cfg.label);
        }
    });
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

            // Check if 2FA is enabled
            var twofaToggle = document.getElementById('twofa-toggle');
            if (twofaToggle && twofaToggle.checked) {
                show2FAStep();
                return;
            }

            // Simulate login and redirect
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 600);
        });
    }

    // 2FA Login Button override (since it's an <a> tag)
    var loginBtn = document.getElementById('loginBtn');
    var twofaToggle = document.getElementById('twofa-toggle');

    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();

            if (twofaToggle && twofaToggle.checked) {
                show2FAStep();
            } else {
                window.location.href = 'dashboard.html';
            }
        });
    }

    // 2FA Step Functions
    function show2FAStep() {
        var twofaSection = document.getElementById('twofaSection');
        var loginBtn = document.getElementById('loginBtn');
        var formGroups = loginForm.querySelectorAll('.form-group, .form-options, .twofa-toggle-wrapper');

        if (twofaSection) {
            formGroups.forEach(function(el) { el.style.display = 'none'; });
            loginBtn.style.display = 'none';
            twofaSection.style.display = 'block';

            // Focus first code box
            var firstBox = twofaSection.querySelector('.twofa-code-box');
            if (firstBox) firstBox.focus();
        }
    }

    function hide2FAStep() {
        var twofaSection = document.getElementById('twofaSection');
        var loginBtn = document.getElementById('loginBtn');
        var formGroups = loginForm.querySelectorAll('.form-group, .form-options, .twofa-toggle-wrapper');

        if (twofaSection) {
            twofaSection.style.display = 'none';
            formGroups.forEach(function(el) { el.style.display = ''; });
            loginBtn.style.display = '';

            // Clear code boxes
            twofaSection.querySelectorAll('.twofa-code-box').forEach(function(box) {
                box.value = '';
                box.classList.remove('filled');
            });
        }
    }

    // 2FA Code Inputs - auto tab, paste, backspace
    var codeContainer = document.getElementById('twofaCodeInputs');
    if (codeContainer) {
        var codeBoxes = codeContainer.querySelectorAll('.twofa-code-box');

        codeBoxes.forEach(function(box, idx) {
            box.addEventListener('input', function(e) {
                var val = this.value.replace(/[^0-9]/g, '');
                this.value = val;
                this.classList.toggle('filled', val.length > 0);
                if (val && idx < codeBoxes.length - 1) {
                    codeBoxes[idx + 1].focus();
                }
            });

            box.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && !this.value && idx > 0) {
                    codeBoxes[idx - 1].focus();
                    codeBoxes[idx - 1].value = '';
                    codeBoxes[idx - 1].classList.remove('filled');
                }
            });

            box.addEventListener('paste', function(e) {
                e.preventDefault();
                var pasted = (e.clipboardData || window.clipboardData).getData('text').replace(/[^0-9]/g, '').slice(0, 6);
                for (var i = 0; i < pasted.length && (idx + i) < codeBoxes.length; i++) {
                    codeBoxes[idx + i].value = pasted[i];
                    codeBoxes[idx + i].classList.add('filled');
                }
                var nextIdx = Math.min(idx + pasted.length, codeBoxes.length - 1);
                codeBoxes[nextIdx].focus();
            });
        });
    }

    // 2FA Verify Button
    var verifyBtn = document.getElementById('twofaVerifyBtn');
    if (verifyBtn) {
        verifyBtn.addEventListener('click', function() {
            var codeBoxes = document.querySelectorAll('.twofa-code-box');
            var code = '';
            codeBoxes.forEach(function(box) { code += box.value; });

            if (code.length < 6) {
                codeBoxes.forEach(function(box) {
                    if (!box.value) box.style.borderColor = 'var(--danger)';
                });
                setTimeout(function() {
                    codeBoxes.forEach(function(box) { box.style.borderColor = ''; });
                }, 1500);
                return;
            }

            // Simulate verification
            verifyBtn.innerHTML = '<span>Verifying...</span> <i class="fas fa-spinner fa-spin"></i>';
            setTimeout(function() {
                window.location.href = 'dashboard.html';
            }, 800);
        });
    }

    // 2FA Back Button
    var backBtn = document.getElementById('twofaBackBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            hide2FAStep();
        });
    }

    // 2FA Resend Button
    var resendBtn = document.getElementById('twofaResendBtn');
    if (resendBtn) {
        resendBtn.addEventListener('click', function() {
            resendBtn.disabled = true;
            resendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            setTimeout(function() {
                resendBtn.innerHTML = '<i class="fas fa-check"></i> Code Sent!';
                setTimeout(function() {
                    resendBtn.disabled = false;
                    resendBtn.innerHTML = '<i class="fas fa-rotate-right"></i> Resend Code';
                }, 2000);
            }, 1200);
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

/* ============================================
       HOTEL MANAGEMENT DATA & FUNCTIONS
       ============================================ */

    const hotelsData = {
        'HTL-001': {
            id: 'HTL-001',
            name: 'Grand Plaza Hotel',
            location: 'Riyadh',
            address: 'King Fahd Road, Olaya District, Riyadh',
            stars: 5,
            rating: 4.8,
            amenities: ['Free WiFi', 'Swimming Pool', 'Fitness Center', 'Spa & Wellness', 'Restaurant', '24/7 Room Service', 'Free Parking', 'Conference Rooms'],
            rooms: 250,
            priceRange: '800-2500',
            owner: 'Luxury Hotels Group',
            contact: '+966-11-555-0101',
            email: 'info@grandplaza.sa',
            website: 'www.grandplaza.sa',
            status: 'approved',
            featured: 'yes',
            joined: 'Jan 15, 2023',
            bookings: 1248,
            revenue: 'SAR 450K',
            occupancy: '85%',
            avgStay: '3.2 days',
            quality: 92,
            cleanliness: 4.9,
            service: 4.7,
            facilities: 4.8,
            compliance: 'compliant',
            checkIn: '14:00',
            checkOut: '12:00',
            description: 'Luxurious 5-star hotel in the heart of Riyadh offering world-class amenities and exceptional service.',
            adminNotes: 'Premium partner. Excellent performance metrics.'
        },
        'HTL-002': {
            id: 'HTL-002',
            name: 'Jeddah Seaside Resort',
            location: 'Jeddah',
            address: 'Corniche Road, North Obhur, Jeddah',
            stars: 5,
            rating: 4.6,
            amenities: ['Free WiFi', 'Beach Access', 'Swimming Pool', 'Water Sports', 'Spa', 'Multiple Restaurants', 'Kids Club', 'Valet Parking'],
            rooms: 180,
            priceRange: '900-3000',
            owner: 'Seaside Resorts Ltd',
            contact: '+966-12-555-0202',
            email: 'info@jeddahseaside.sa',
            website: 'www.jeddahseaside.sa',
            status: 'approved',
            featured: 'yes',
            joined: 'Feb 20, 2023',
            bookings: 980,
            revenue: 'SAR 385K',
            occupancy: '78%',
            avgStay: '4.1 days',
            quality: 88,
            cleanliness: 4.7,
            service: 4.5,
            facilities: 4.6,
            compliance: 'compliant',
            checkIn: '15:00',
            checkOut: '12:00',
            description: 'Beachfront resort with stunning Red Sea views and premium facilities for families and business travelers.',
            adminNotes: 'Seasonal performance variations. Strong summer bookings.'
        },
        'HTL-003': {
            id: 'HTL-003',
            name: 'Mecca Pilgrims Inn',
            location: 'Mecca',
            address: 'Al Hijra Road, near Haram, Mecca',
            stars: 4,
            rating: 4.7,
            amenities: ['Free WiFi', 'Prayer Facilities', 'Shuttle to Haram', '24/7 Reception', 'Restaurant', 'Laundry Service'],
            rooms: 320,
            priceRange: '400-1200',
            owner: 'Holy City Hotels',
            contact: '+966-12-555-0303',
            email: 'info@pilgrimsinn.sa',
            website: 'www.pilgrimsinn.sa',
            status: 'approved',
            featured: 'no',
            joined: 'Mar 10, 2023',
            bookings: 1850,
            revenue: 'SAR 520K',
            occupancy: '92%',
            avgStay: '5.3 days',
            quality: 85,
            cleanliness: 4.8,
            service: 4.6,
            facilities: 4.2,
            compliance: 'compliant',
            checkIn: '14:00',
            checkOut: '12:00',
            description: 'Comfortable accommodation for Hajj and Umrah pilgrims with easy access to the Holy Mosque.',
            adminNotes: 'High occupancy during pilgrimage seasons. Excellent guest reviews.'
        },
        'HTL-004': {
            id: 'HTL-004',
            name: 'Medina Heritage Hotel',
            location: 'Medina',
            address: 'Quba Road, Al Madinah Al Munawwarah',
            stars: 4,
            rating: 4.5,
            amenities: ['Free WiFi', 'Prayer Room', 'Shuttle Service', 'Restaurant', 'Concierge', 'Room Service'],
            rooms: 200,
            priceRange: '350-1000',
            owner: 'Heritage Hospitality',
            contact: '+966-14-555-0404',
            email: 'info@medinaheritage.sa',
            website: 'www.medinaheritage.sa',
            status: 'approved',
            featured: 'no',
            joined: 'Apr 5, 2023',
            bookings: 1425,
            revenue: 'SAR 380K',
            occupancy: '88%',
            avgStay: '4.8 days',
            quality: 83,
            cleanliness: 4.6,
            service: 4.4,
            facilities: 4.3,
            compliance: 'compliant',
            checkIn: '14:00',
            checkOut: '11:00',
            description: 'Traditional hotel near the Prophet\'s Mosque offering comfortable stays for religious visitors.',
            adminNotes: 'Strong repeat customer base. Consider expansion.'
        },
        'HTL-005': {
            id: 'HTL-005',
            name: 'Dammam Business Suites',
            location: 'Dammam',
            address: 'King Saud Street, Business District, Dammam',
            stars: 4,
            rating: 4.4,
            amenities: ['Free WiFi', 'Business Center', 'Meeting Rooms', 'Gym', 'Restaurant', 'Free Parking'],
            rooms: 150,
            priceRange: '450-1400',
            owner: 'Eastern Province Hotels',
            contact: '+966-13-555-0505',
            email: 'info@dammamsuites.sa',
            website: 'www.dammamsuites.sa',
            status: 'pending',
            featured: 'no',
            joined: 'May 12, 2023',
            bookings: 680,
            revenue: 'SAR 245K',
            occupancy: '72%',
            avgStay: '2.5 days',
            quality: 80,
            cleanliness: 4.5,
            service: 4.3,
            facilities: 4.4,
            compliance: 'minor-issues',
            checkIn: '14:00',
            checkOut: '12:00',
            description: 'Modern business hotel catering to corporate travelers with excellent meeting facilities.',
            adminNotes: 'Pending documentation verification. Minor compliance issues to resolve.'
        },
        'HTL-006': {
            id: 'HTL-006',
            name: 'Abha Mountain Resort',
            location: 'Abha',
            address: 'Al Souda Mountain, Abha',
            stars: 4,
            rating: 4.6,
            amenities: ['Free WiFi', 'Mountain View', 'Restaurant', 'Hiking Tours', 'Spa', 'Fireplace Lounge'],
            rooms: 95,
            priceRange: '550-1600',
            owner: 'Mountain Resorts Co',
            contact: '+966-17-555-0606',
            email: 'info@abhamountain.sa',
            website: 'www.abhamountain.sa',
            status: 'approved',
            featured: 'yes',
            joined: 'Jun 8, 2023',
            bookings: 540,
            revenue: 'SAR 185K',
            occupancy: '65%',
            avgStay: '3.8 days',
            quality: 87,
            cleanliness: 4.7,
            service: 4.5,
            facilities: 4.6,
            compliance: 'compliant',
            checkIn: '15:00',
            checkOut: '11:00',
            description: 'Scenic mountain resort offering breathtaking views and a peaceful retreat from city life.',
            adminNotes: 'Excellent potential for eco-tourism packages.'
        },
        'HTL-007': {
            id: 'HTL-007',
            name: 'AlUla Desert Camp',
            location: 'AlUla',
            address: 'Hegra Archaeological Site, AlUla',
            stars: 3,
            rating: 4.7,
            amenities: ['Stargazing Tours', 'Desert Safari', 'Traditional Dining', 'Campfire', 'WiFi Lounge'],
            rooms: 45,
            priceRange: '400-900',
            owner: 'Desert Adventures Ltd',
            contact: '+966-14-555-0707',
            email: 'info@alulacamp.sa',
            website: 'www.alulacamp.sa',
            status: 'flagged',
            featured: 'no',
            joined: 'Jul 15, 2023',
            bookings: 320,
            revenue: 'SAR 125K',
            occupancy: '58%',
            avgStay: '2.2 days',
            quality: 75,
            cleanliness: 4.3,
            service: 4.5,
            facilities: 4.0,
            compliance: 'non-compliant',
            checkIn: '16:00',
            checkOut: '10:00',
            description: 'Unique glamping experience near historical sites with authentic Bedouin-style accommodations.',
            adminNotes: 'Flagged for safety compliance review. Interesting concept needs improvements.'
        },
        'HTL-008': {
            id: 'HTL-008',
            name: 'Riyadh Airport Hotel',
            location: 'Riyadh',
            address: 'King Khalid International Airport, Riyadh',
            stars: 3,
            rating: 4.2,
            amenities: ['Free WiFi', 'Airport Shuttle', '24/7 Reception', 'Restaurant', 'Business Center'],
            rooms: 120,
            priceRange: '300-800',
            owner: 'Airport Services Co',
            contact: '+966-11-555-0808',
            email: 'info@riyadhairport.sa',
            website: 'www.riyadhairporthotel.sa',
            status: 'approved',
            featured: 'no',
            joined: 'Aug 22, 2023',
            bookings: 1150,
            revenue: 'SAR 295K',
            occupancy: '76%',
            avgStay: '1.5 days',
            quality: 78,
            cleanliness: 4.3,
            service: 4.1,
            facilities: 4.0,
            compliance: 'compliant',
            checkIn: '14:00',
            checkOut: '12:00',
            description: 'Convenient transit hotel for travelers with early flights or layovers.',
            adminNotes: 'Consistent performance. Good for transit passengers.'
        }
    };

    function initializeHotelManagement() {
        populateHotelsTable();
        setupHotelFilters();
        setupHotelActions();
        initializeLogout();
    }

    function populateHotelsTable() {
        const tbody = document.getElementById('hotelsTableBody');
        if (!tbody) return;

        let html = '';
        for (let id in hotelsData) {
            const hotel = hotelsData[id];
            const statusClass = 'status-' + hotel.status.toLowerCase();
            const amenitiesPreview = hotel.amenities.slice(0, 3).join(', ') + (hotel.amenities.length > 3 ? '...' : '');
        
            html += `
                <tr data-hotel-id="${hotel.id}" data-status="${hotel.status}" data-location="${hotel.location.toLowerCase()}" data-stars="${hotel.stars}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(hotel.name)}&background=667eea&color=fff&size=36" alt="${hotel.name}">
                            <div>
                                <span class="table-user-name">${hotel.name}</span>
                                <span class="table-user-id">${hotel.id}</span>
                            </div>
                        </div>
                    </td>
                    <td>${hotel.location}</td>
                    <td><span class="star-rating">${'★'.repeat(hotel.stars)}</span></td>
                    <td><span class="rating-badge">${hotel.rating}/5.0</span></td>
                    <td><span class="status-badge ${statusClass}">${hotel.status.charAt(0).toUpperCase() + hotel.status.slice(1)}</span></td>
                    <td><strong>${hotel.revenue}</strong></td>
                    <td>
                        <div class="table-actions">
                            <a href="hotel-view.html?id=${hotel.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="hotel-edit.html?id=${hotel.id}" class="action-btn action-edit" title="Edit Hotel"><i class="fas fa-pen"></i></a>
                            <button class="action-btn action-block" title="Disable"><i class="fas fa-toggle-off"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupHotelFilters() {
        const searchInput = document.getElementById('hotelSearchInput');
        const statusFilter = document.getElementById('hotelStatusFilter');
        const locationFilter = document.getElementById('hotelLocationFilter');
        const starFilter = document.getElementById('hotelStarFilter');

        if (searchInput) {
            searchInput.addEventListener('input', filterHotels);
        }
        if (statusFilter) {
            statusFilter.addEventListener('change', filterHotels);
        }
        if (locationFilter) {
            locationFilter.addEventListener('change', filterHotels);
        }
        if (starFilter) {
            starFilter.addEventListener('change', filterHotels);
        }
    }

    function filterHotels() {
        const searchTerm = document.getElementById('hotelSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('hotelStatusFilter')?.value || 'all';
        const locationFilter = document.getElementById('hotelLocationFilter')?.value || 'all';
        const starFilter = document.getElementById('hotelStarFilter')?.value || 'all';
    
        const rows = document.querySelectorAll('#hotelsTableBody tr');
    
        rows.forEach(row => {
            const hotelId = row.dataset.hotelId;
            const hotel = hotelsData[hotelId];
            const matchesSearch = hotel.name.toLowerCase().includes(searchTerm) || 
                                hotel.location.toLowerCase().includes(searchTerm) ||
                                hotelId.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || row.dataset.status === statusFilter;
            const matchesLocation = locationFilter === 'all' || row.dataset.location === locationFilter;
            const matchesStars = starFilter === 'all' || row.dataset.stars === starFilter;
        
            if (matchesSearch && matchesStatus && matchesLocation && matchesStars) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    function setupHotelActions() {
        const tbody = document.getElementById('hotelsTableBody');
        if (!tbody) return;

        tbody.addEventListener('click', function(e) {
            const approveBtn = e.target.closest('.approve-hotel');
            const flagBtn = e.target.closest('.flag-hotel');
        
            if (approveBtn && !approveBtn.disabled) {
                const row = approveBtn.closest('tr');
                const statusBadge = row.querySelector('.status-badge');
                statusBadge.textContent = 'Approved';
                statusBadge.className = 'status-badge status-approved';
                approveBtn.disabled = true;
                approveBtn.style.opacity = '0.5';
            }
        
            if (flagBtn) {
                const row = flagBtn.closest('tr');
                const statusBadge = row.querySelector('.status-badge');
                statusBadge.textContent = 'Flagged';
                statusBadge.className = 'status-badge status-flagged';
            }
        });
    }

    function initializeHotelViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const hotelId = urlParams.get('id');
    
        if (hotelId && hotelsData[hotelId]) {
            populateHotelView(hotelsData[hotelId]);
        }
    
        initializeLogout();
    }

    function populateHotelView(hotel) {
        // Basic info
        document.getElementById('viewHotelName').textContent = hotel.name;
        document.getElementById('viewHotelId').textContent = '#' + hotel.id;
        document.getElementById('viewHotelLocation').textContent = hotel.location;
        document.getElementById('viewHotelStars').textContent = hotel.stars + ' Star';
        document.getElementById('viewHotelRating').textContent = hotel.rating + '/5.0';
        document.getElementById('viewHotelOwner').textContent = hotel.owner;
        document.getElementById('viewHotelContact').textContent = hotel.contact;
        document.getElementById('viewHotelEmail').textContent = hotel.email;
        document.getElementById('viewHotelJoined').textContent = hotel.joined;
    
        // Status badge
        const statusBadge = document.getElementById('viewHotelStatus');
        statusBadge.textContent = hotel.status.charAt(0).toUpperCase() + hotel.status.slice(1);
        statusBadge.className = 'status-badge status-' + hotel.status;
    
        // Quality metrics
        document.getElementById('viewHotelQuality').textContent = hotel.quality + '%';
        document.getElementById('viewHotelCleanliness').textContent = hotel.cleanliness + '/5.0';
        document.getElementById('viewHotelService').textContent = hotel.service + '/5.0';
        document.getElementById('viewHotelFacilities').textContent = hotel.facilities + '/5.0';
    
        // Performance stats
        document.getElementById('viewHotelBookings').textContent = hotel.bookings.toLocaleString();
        document.getElementById('viewHotelRevenue').textContent = hotel.revenue;
        document.getElementById('viewHotelOccupancy').textContent = hotel.occupancy;
        document.getElementById('viewHotelDuration').textContent = hotel.avgStay;
    
        // Amenities
        const amenitiesContainer = document.getElementById('viewHotelAmenities');
        amenitiesContainer.innerHTML = hotel.amenities.map(amenity => 
            `<span class="amenity-badge"><i class="fas fa-check"></i> ${amenity}</span>`
        ).join('');
    
        // Compliance
        const complianceContainer = document.getElementById('viewHotelCompliance');
        const complianceClass = hotel.compliance === 'compliant' ? 'compliant' :
                               hotel.compliance === 'minor-issues' ? 'minor-issues' : 'non-compliant';
        const complianceIcon = hotel.compliance === 'compliant' ? 'fa-check-circle' :
                              hotel.compliance === 'minor-issues' ? 'fa-exclamation-circle' : 'fa-times-circle';
        complianceContainer.innerHTML = `
            <div class="compliance-item">
                <span class="compliance-item-label"><i class="fas ${complianceIcon}"></i> Overall Compliance</span>
                <span class="compliance-badge ${complianceClass}">${hotel.compliance.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</span>
            </div>
        `;
    
        // Edit link
        const editLink = document.getElementById('editHotelLink');
        if (editLink) {
            editLink.href = 'hotel-edit.html?id=' + hotel.id;
        }
    }

    function initializeHotelEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const hotelId = urlParams.get('id');
    
        if (hotelId && hotelsData[hotelId]) {
            populateHotelEdit(hotelsData[hotelId]);
        }
    
        const form = document.getElementById('hotelEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() {
                    window.location.href = 'hotel-view.html?id=' + hotelId;
                }, 1000);
            });
        }
    
        initializeLogout();
    }

    function populateHotelEdit(hotel) {
        document.getElementById('editHotelDisplayName').textContent = hotel.name;
        document.getElementById('editHotelId').textContent = '#' + hotel.id;
        document.getElementById('editHotelName').value = hotel.name;
        document.getElementById('editHotelStars').value = hotel.stars;
        document.getElementById('editHotelLocation').value = hotel.location.toLowerCase();
        document.getElementById('editHotelAddress').value = hotel.address;
        document.getElementById('editHotelOwner').value = hotel.owner;
        document.getElementById('editHotelContact').value = hotel.contact;
        document.getElementById('editHotelEmail').value = hotel.email;
        document.getElementById('editHotelWebsite').value = hotel.website || '';
        document.getElementById('editHotelRooms').value = hotel.rooms;
        document.getElementById('editHotelPriceRange').value = hotel.priceRange;
        document.getElementById('editHotelDescription').value = hotel.description || '';
        document.getElementById('editHotelCheckIn').value = hotel.checkIn || '14:00';
        document.getElementById('editHotelCheckOut').value = hotel.checkOut || '12:00';
        document.getElementById('editHotelQualityScore').value = hotel.quality;
        document.getElementById('editHotelCompliance').value = hotel.compliance;
        document.getElementById('editHotelStatus').value = hotel.status;
        document.getElementById('editHotelFeatured').value = hotel.featured;
        document.getElementById('editHotelAdminNotes').value = hotel.adminNotes || '';
    }

    /* ============================================
       RESTAURANT MANAGEMENT DATA & FUNCTIONS
       ============================================ */

    const restaurantsData = {
        'RST-001': {
            id: 'RST-001',
            name: 'Al Nakheel Restaurant',
            location: 'Riyadh',
            address: 'Tahlia Street, Riyadh',
            cuisine: 'Saudi Traditional',
            rating: 4.7,
            capacity: 120,
            priceRange: '80-200',
            owner: 'Nakheel Hospitality',
            contact: '+966-11-555-2001',
            email: 'info@nakheel.sa',
            website: 'www.nakheel.sa',
            status: 'active',
            featured: 'yes',
            joined: 'Feb 10, 2023',
            reservations: 3456,
            revenue: 'SAR 280K',
            turnover: '2.3 times/day',
            retention: '68%',
            foodQuality: 4.8,
            service: 4.6,
            ambiance: 4.7,
            value: 4.5,
            reviewCount: 245,
            features: ['Free WiFi', 'Outdoor Seating', 'Private Rooms', 'Valet Parking', 'Reservations'],
            openTime: '11:00',
            closeTime: '23:00',
            healthScore: 95,
            compliance: 'compliant',
            license: 'FL-RYD-2023-001',
            description: 'Authentic Saudi cuisine in an elegant traditional setting.',
            adminNotes: 'Excellent reputation. High-quality service.'
        },
        'RST-002': {
            id: 'RST-002',
            name: 'Taj Mahal Indian Cuisine',
            location: 'Jeddah',
            address: 'Palestine Street, Jeddah',
            cuisine: 'Indian',
            rating: 4.5,
            capacity: 90,
            priceRange: '60-150',
            owner: 'Taj Restaurant Group',
            contact: '+966-12-555-2002',
            email: 'info@tajmahal.sa',
            website: 'www.tajmahal.sa',
            status: 'active',
            featured: 'no',
            joined: 'Mar 15, 2023',
            reservations: 2890,
            revenue: 'SAR 195K',
            turnover: '2.8 times/day',
            retention: '72%',
            foodQuality: 4.6,
            service: 4.4,
            ambiance: 4.3,
            value: 4.7,
            reviewCount: 189,
            features: ['Free WiFi', 'Takeaway', 'Home Delivery', 'Halal Certified'],
            openTime: '12:00',
            closeTime: '00:00',
            healthScore: 92,
            compliance: 'compliant',
            license: 'FL-JED-2023-045',
            description: 'Traditional Indian flavors with modern presentation.',
            adminNotes: 'Strong delivery business. Consistent quality.'
        },
        'RST-003': {
            id: 'RST-003',
            name: 'La Piazza Italian',
            location: 'Riyadh',
            address: 'Olaya Street, Riyadh',
            cuisine: 'Italian',
            rating: 4.6,
            capacity: 100,
            priceRange: '100-250',
            owner: 'Mediterranean Dining Co',
            contact: '+966-11-555-2003',
            email: 'info@lapiazza.sa',
            website: 'www.lapiazza.sa',
            status: 'active',
            featured: 'yes',
            joined: 'Apr 20, 2023',
            reservations: 2654,
            revenue: 'SAR 245K',
            turnover: '2.1 times/day',
            retention: '65%',
            foodQuality: 4.7,
            service: 4.5,
            ambiance: 4.8,
            value: 4.4,
            reviewCount: 178,
            features: ['Free WiFi', 'Outdoor Seating', 'Live Music', 'Wine Selection', 'Reservations'],
            openTime: '12:00',
            closeTime: '23:30',
            healthScore: 94,
            compliance: 'compliant',
            license: 'FL-RYD-2023-078',
            description: 'Authentic Italian cuisine with imported ingredients and wood-fired pizzas.',
            adminNotes: 'Premium segment. Good ambiance and service.'
        },
        'RST-004': {
            id: 'RST-004',
            name: 'Dragon Palace Chinese',
            location: 'Dammam',
            address: 'King Fahd Road, Dammam',
            cuisine: 'Chinese',
            rating: 4.3,
            capacity: 110,
            priceRange: '70-180',
            owner: 'Asian Flavors Ltd',
            contact: '+966-13-555-2004',
            email: 'info@dragonpalace.sa',
            website: 'www.dragonpalace.sa',
            status: 'pending',
            featured: 'no',
            joined: 'May 8, 2023',
            reservations: 1845,
            revenue: 'SAR 165K',
            turnover: '2.5 times/day',
            retention: '58%',
            foodQuality: 4.4,
            service: 4.2,
            ambiance: 4.1,
            value: 4.5,
            reviewCount: 132,
            features: ['Free WiFi', 'Takeaway', 'Home Delivery', 'Private Rooms'],
            openTime: '11:30',
            closeTime: '23:00',
            healthScore: 88,
            compliance: 'minor-issues',
            license: 'FL-DAM-2023-122',
            description: 'Traditional Chinese dishes with dim sum specialty.',
            adminNotes: 'Pending final health inspection. Minor issues to address.'
        },
        'RST-005': {
            id: 'RST-005',
            name: 'Mediterranean Breeze',
            location: 'Jeddah',
            address: 'Corniche Road, Jeddah',
            cuisine: 'Mediterranean',
            rating: 4.8,
            capacity: 85,
            priceRange: '120-280',
            owner: 'Coastal Dining Group',
            contact: '+966-12-555-2005',
            email: 'info@medbreeze.sa',
            website: 'www.medbreeze.sa',
            status: 'active',
            featured: 'yes',
            joined: 'Jun 12, 2023',
            reservations: 2234,
            revenue: 'SAR 298K',
            turnover: '1.9 times/day',
            retention: '75%',
            foodQuality: 4.9,
            service: 4.7,
            ambiance: 4.9,
            value: 4.6,
            reviewCount: 203,
            features: ['Sea View', 'Outdoor Seating', 'Shisha', 'Live Music', 'Valet Parking'],
            openTime: '13:00',
            closeTime: '01:00',
            healthScore: 96,
            compliance: 'compliant',
            license: 'FL-JED-2023-089',
            description: 'Upscale Mediterranean dining with stunning sea views.',
            adminNotes: 'Premium location. Excellent customer satisfaction.'
        },
        'RST-006': {
            id: 'RST-006',
            name: 'Steakhouse 101',
            location: 'Riyadh',
            address: 'King Fahd Road, Riyadh',
            cuisine: 'Steakhouse',
            rating: 4.4,
            capacity: 75,
            priceRange: '150-350',
            owner: 'Prime Cuts Co',
            contact: '+966-11-555-2006',
            email: 'info@steakhouse101.sa',
            website: 'www.steakhouse101.sa',
            status: 'active',
            featured: 'no',
            joined: 'Jul 5, 2023',
            reservations: 1567,
            revenue: 'SAR 235K',
            turnover: '1.7 times/day',
            retention: '62%',
            foodQuality: 4.6,
            service: 4.3,
            ambiance: 4.5,
            value: 4.2,
            reviewCount: 145,
            features: ['Premium Cuts', 'Wine Selection', 'Private Dining', 'Reservations Required'],
            openTime: '17:00',
            closeTime: '23:00',
            healthScore: 93,
            compliance: 'compliant',
            license: 'FL-RYD-2023-134',
            description: 'Premium steakhouse serving the finest cuts of meat.',
            adminNotes: 'High-end segment. Strong dinner service.'
        },
        'RST-007': {
            id: 'RST-007',
            name: 'Seafood Harbor',
            location: 'Khobar',
            address: 'Corniche, Al Khobar',
            cuisine: 'Seafood',
            rating: 4.5,
            capacity: 95,
            priceRange: '90-220',
            owner: 'Gulf Seafood Restaurants',
            contact: '+966-13-555-2007',
            email: 'info@seafoodharbor.sa',
            website: 'www.seafoodharbor.sa',
            status: 'flagged',
            featured: 'no',
            joined: 'Aug 18, 2023',
            reservations: 1289,
            revenue: 'SAR 175K',
            turnover: '2.2 times/day',
            retention: '60%',
            foodQuality: 4.4,
            service: 4.3,
            ambiance: 4.6,
            value: 4.5,
            reviewCount: 98,
            features: ['Fresh Catch Daily', 'Sea View', 'Outdoor Seating', 'Kids Friendly'],
            openTime: '12:00',
            closeTime: '23:30',
            healthScore: 82,
            compliance: 'non-compliant',
            license: 'FL-KHO-2023-056',
            description: 'Fresh seafood dining with Arabian Gulf specialties.',
            adminNotes: 'Flagged for health score review. Follow-up inspection scheduled.'
        },
        'RST-008': {
            id: 'RST-008',
            name: 'Global Bites Café',
            location: 'Riyadh',
            address: 'Diplomatic Quarter, Riyadh',
            cuisine: 'International',
            rating: 4.2,
            capacity: 65,
            priceRange: '50-130',
            owner: 'Café Culture Co',
            contact: '+966-11-555-2008',
            email: 'info@globalbites.sa',
            website: 'www.globalbites.sa',
            status: 'active',
            featured: 'no',
            joined: 'Sep 10, 2023',
            reservations: 1678,
            revenue: 'SAR 145K',
            turnover: '3.1 times/day',
            retention: '55%',
            foodQuality: 4.3,
            service: 4.1,
            ambiance: 4.2,
            value: 4.4,
            reviewCount: 124,
            features: ['Free WiFi', 'Breakfast Menu', 'Takeaway', 'Outdoor Seating'],
            openTime: '07:00',
            closeTime: '22:00',
            healthScore: 91,
            compliance: 'compliant',
            license: 'FL-RYD-2023-178',
            description: 'Casual café offering international comfort food and specialty coffees.',
            adminNotes: 'Good breakfast traffic. Consider expanding menu.'
        }
    };

    function initializeRestaurantManagement() {
        populateRestaurantsTable();
        setupRestaurantFilters();
        setupRestaurantActions();
        initializeLogout();
    }

    function populateRestaurantsTable() {
        const tbody = document.getElementById('restaurantsTableBody');
        if (!tbody) return;

        let html = '';
        for (let id in restaurantsData) {
            const restaurant = restaurantsData[id];
            const statusClass = 'status-' + restaurant.status.toLowerCase();
        
            html += `
                <tr data-restaurant-id="${restaurant.id}" data-status="${restaurant.status}" data-location="${restaurant.location.toLowerCase()}" data-cuisine="${restaurant.cuisine.toLowerCase()}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(restaurant.name)}&background=f093fb&color=fff&size=36" alt="${restaurant.name}">
                            <div>
                                <span class="table-user-name">${restaurant.name}</span>
                                <span class="table-user-id">${restaurant.id}</span>
                            </div>
                        </div>
                    </td>
                    <td>${restaurant.location}</td>
                    <td><span class="cuisine-badge"><i class="fas fa-utensils"></i> ${restaurant.cuisine}</span></td>
                    <td><span class="rating-badge">${restaurant.rating}/5.0</span></td>
                    <td><span class="status-badge ${statusClass}">${restaurant.status.charAt(0).toUpperCase() + restaurant.status.slice(1)}</span></td>
                    <td><strong>${restaurant.revenue}</strong></td>
                    <td>
                        <div class="table-actions">
                            <a href="restaurant-view.html?id=${restaurant.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="restaurant-edit.html?id=${restaurant.id}" class="action-btn action-edit" title="Edit Restaurant"><i class="fas fa-pen"></i></a>
                            <button class="action-btn action-block" title="Disable"><i class="fas fa-toggle-off"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupRestaurantFilters() {
        const searchInput = document.getElementById('restaurantSearchInput');
        const statusFilter = document.getElementById('restaurantStatusFilter');
        const cuisineFilter = document.getElementById('restaurantCuisineFilter');
        const locationFilter = document.getElementById('restaurantLocationFilter');

        if (searchInput) {
            searchInput.addEventListener('input', filterRestaurants);
        }
        if (statusFilter) {
            statusFilter.addEventListener('change', filterRestaurants);
        }
        if (cuisineFilter) {
            cuisineFilter.addEventListener('change', filterRestaurants);
        }
        if (locationFilter) {
            locationFilter.addEventListener('change', filterRestaurants);
        }
    }

    function filterRestaurants() {
        const searchTerm = document.getElementById('restaurantSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('restaurantStatusFilter')?.value || 'all';
        const cuisineFilter = document.getElementById('restaurantCuisineFilter')?.value || 'all';
        const locationFilter = document.getElementById('restaurantLocationFilter')?.value || 'all';
    
        const rows = document.querySelectorAll('#restaurantsTableBody tr');
    
        rows.forEach(row => {
            const restaurantId = row.dataset.restaurantId;
            const restaurant = restaurantsData[restaurantId];
            const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm) || 
                                restaurant.cuisine.toLowerCase().includes(searchTerm) ||
                                restaurantId.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || row.dataset.status === statusFilter;
            const matchesCuisine = cuisineFilter === 'all' || row.dataset.cuisine.includes(cuisineFilter);
            const matchesLocation = locationFilter === 'all' || row.dataset.location === locationFilter;
        
            if (matchesSearch && matchesStatus && matchesCuisine && matchesLocation) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    function setupRestaurantActions() {
        const tbody = document.getElementById('restaurantsTableBody');
        if (!tbody) return;

        tbody.addEventListener('click', function(e) {
            const approveBtn = e.target.closest('.approve-restaurant');
            const flagBtn = e.target.closest('.flag-restaurant');
        
            if (approveBtn && !approveBtn.disabled) {
                const row = approveBtn.closest('tr');
                const statusBadge = row.querySelector('.status-badge');
                statusBadge.textContent = 'Active';
                statusBadge.className = 'status-badge status-active';
                approveBtn.disabled = true;
                approveBtn.style.opacity = '0.5';
            }
        
            if (flagBtn) {
                const row = flagBtn.closest('tr');
                const statusBadge = row.querySelector('.status-badge');
                statusBadge.textContent = 'Flagged';
                statusBadge.className = 'status-badge status-flagged';
            }
        });
    }

    function initializeRestaurantViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const restaurantId = urlParams.get('id');
    
        if (restaurantId && restaurantsData[restaurantId]) {
            populateRestaurantView(restaurantsData[restaurantId]);
        }
    
        initializeLogout();
    }

    function populateRestaurantView(restaurant) {
        // Basic info
        document.getElementById('viewRestaurantName').textContent = restaurant.name;
        document.getElementById('viewRestaurantId').textContent = '#' + restaurant.id;
        document.getElementById('viewRestaurantLocation').textContent = restaurant.location;
        document.getElementById('viewRestaurantCuisine').textContent = restaurant.cuisine;
        document.getElementById('viewRestaurantRating').textContent = restaurant.rating + '/5.0';
        document.getElementById('viewRestaurantCapacity').textContent = restaurant.capacity + ' seats';
        document.getElementById('viewRestaurantOwner').textContent = restaurant.owner;
        document.getElementById('viewRestaurantContact').textContent = restaurant.contact;
        document.getElementById('viewRestaurantEmail').textContent = restaurant.email;
        document.getElementById('viewRestaurantJoined').textContent = restaurant.joined;
    
        // Status badge
        const statusBadge = document.getElementById('viewRestaurantStatus');
        statusBadge.textContent = restaurant.status.charAt(0).toUpperCase() + restaurant.status.slice(1);
        statusBadge.className = 'status-badge status-' + restaurant.status;
    
        // Ratings
        document.getElementById('viewRestaurantOverallRating').textContent = restaurant.rating;
        document.getElementById('viewRestaurantReviewCount').textContent = restaurant.reviewCount + ' reviews';
        document.getElementById('viewRestaurantFoodQuality').textContent = restaurant.foodQuality + '/5.0';
        document.getElementById('viewRestaurantServiceRating').textContent = restaurant.service + '/5.0';
        document.getElementById('viewRestaurantAmbianceRating').textContent = restaurant.ambiance + '/5.0';
        document.getElementById('viewRestaurantValueRating').textContent = restaurant.value + '/5.0';
    
        // Performance stats
        document.getElementById('viewRestaurantReservations').textContent = restaurant.reservations.toLocaleString();
        document.getElementById('viewRestaurantRevenue').textContent = restaurant.revenue;
        document.getElementById('viewRestaurantTurnover').textContent = restaurant.turnover;
        document.getElementById('viewRestaurantRetention').textContent = restaurant.retention;
    
        // Features
        const featuresContainer = document.getElementById('viewRestaurantFeatures');
        featuresContainer.innerHTML = restaurant.features.map(feature => 
            `<div class="feature-item"><i class="fas fa-check"></i> ${feature}</div>`
        ).join('');
    
        // Compliance
        const complianceContainer = document.getElementById('viewRestaurantCompliance');
        const complianceClass = restaurant.compliance === 'compliant' ? 'compliant' :
                               restaurant.compliance === 'minor-issues' ? 'minor-issues' : 'non-compliant';
        const complianceIcon = restaurant.compliance === 'compliant' ? 'fa-check-circle' :
                              restaurant.compliance === 'minor-issues' ? 'fa-exclamation-circle' : 'fa-times-circle';
        complianceContainer.innerHTML = `
            <div class="compliance-item">
                <span class="compliance-item-label"><i class="fas ${complianceIcon}"></i> Health Inspection Score</span>
                <span class="metric-value">${restaurant.healthScore}%</span>
            </div>
            <div class="compliance-item">
                <span class="compliance-item-label"><i class="fas fa-certificate"></i> Food License</span>
                <span>${restaurant.license}</span>
            </div>
        `;
    
        // Edit link
        const editLink = document.getElementById('editRestaurantLink');
        if (editLink) {
            editLink.href = 'restaurant-edit.html?id=' + restaurant.id;
        }
    }

    function initializeRestaurantEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const restaurantId = urlParams.get('id');
    
        if (restaurantId && restaurantsData[restaurantId]) {
            populateRestaurantEdit(restaurantsData[restaurantId]);
        }
    
        const form = document.getElementById('restaurantEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() {
                    window.location.href = 'restaurant-view.html?id=' + restaurantId;
                }, 1000);
            });
        }
    
        initializeLogout();
    }

    function populateRestaurantEdit(restaurant) {
        document.getElementById('editRestaurantDisplayName').textContent = restaurant.name;
        document.getElementById('editRestaurantId').textContent = '#' + restaurant.id;
        document.getElementById('editRestaurantName').value = restaurant.name;
        document.getElementById('editRestaurantCuisine').value = restaurant.cuisine.toLowerCase().replace(' ', '-');
        document.getElementById('editRestaurantLocation').value = restaurant.location.toLowerCase();
        document.getElementById('editRestaurantAddress').value = restaurant.address;
        document.getElementById('editRestaurantCapacity').value = restaurant.capacity;
        document.getElementById('editRestaurantPriceRange').value = restaurant.priceRange;
        document.getElementById('editRestaurantOwner').value = restaurant.owner;
        document.getElementById('editRestaurantContact').value = restaurant.contact;
        document.getElementById('editRestaurantEmail').value = restaurant.email;
        document.getElementById('editRestaurantWebsite').value = restaurant.website || '';
        document.getElementById('editRestaurantOpenTime').value = restaurant.openTime || '11:00';
        document.getElementById('editRestaurantCloseTime').value = restaurant.closeTime || '23:00';
        document.getElementById('editRestaurantHealthScore').value = restaurant.healthScore;
        document.getElementById('editRestaurantCompliance').value = restaurant.compliance;
        document.getElementById('editRestaurantLicense').value = restaurant.license || '';
        document.getElementById('editRestaurantDescription').value = restaurant.description || '';
        document.getElementById('editRestaurantStatus').value = restaurant.status;
        document.getElementById('editRestaurantFeatured').value = restaurant.featured;
        document.getElementById('editRestaurantAdminNotes').value = restaurant.adminNotes || '';
    }

// ============================================
// PACKAGE MANAGEMENT
// ============================================

    const packagesData = {
        'PKG-001': {
            id: 'PKG-001', name: 'Riyadh Heritage Tour', type: 'Cultural', duration: '5 Days / 4 Nights',
            days: 5, nights: 4, price: 'SAR 2,500', priceNum: 2500, rating: 4.8, bookings: 324,
            status: 'active', provider: 'Saudi Tours Co', groupSize: '2-15', minGroup: 2, maxGroup: 15,
            location: 'Riyadh', description: 'Explore the rich heritage of Riyadh with guided tours to historical sites.',
            inclusions: ['Hotel Accommodation', 'Transportation', 'Meals Included', 'Tour Guide', 'Entrance Fees'],
            exclusions: ['International Flights', 'Travel Insurance', 'Personal Expenses'],
            itinerary: [
                { day: 1, title: 'Arrival & City Overview', desc: 'Airport pickup, hotel check-in, evening city drive' },
                { day: 2, title: 'Historical Diriyah', desc: 'Full day exploring At-Turaif UNESCO World Heritage Site' },
                { day: 3, title: 'National Museum & Masmak', desc: 'Visit National Museum, Masmak Fortress, and souks' },
                { day: 4, title: 'Edge of the World', desc: 'Day trip to Jebel Fihrayn with desert picnic lunch' },
                { day: 5, title: 'Departure', desc: 'Breakfast, souvenir shopping, airport transfer' }
            ],
            revenue: 'SAR 810K', avgGroup: 6.2, repeatRate: '42%',
            quality: 92, compliance: 'compliant', featured: 'yes', seasonal: false,
            discount: 10, commission: 15, created: 'Mar 10, 2025',
            adminNotes: 'Top-performing cultural package. Consistently positive reviews.'
        },
        'PKG-002': {
            id: 'PKG-002', name: 'Red Sea Diving Package', type: 'Adventure', duration: '3 Days / 2 Nights',
            days: 3, nights: 2, price: 'SAR 1,800', priceNum: 1800, rating: 4.9, bookings: 186,
            status: 'active', provider: 'Coastal Trips Agency', groupSize: '4-12', minGroup: 4, maxGroup: 12,
            location: 'Jeddah', description: 'Premium diving experience in the crystal-clear waters of the Red Sea.',
            inclusions: ['Hotel Accommodation', 'Diving Equipment', 'Boat Transfers', 'Meals Included', 'Insurance'],
            exclusions: ['International Flights', 'Personal Expenses', 'Tips'],
            itinerary: [
                { day: 1, title: 'Arrival & Orientation', desc: 'Equipment fitting, safety briefing, shallow reef dive' },
                { day: 2, title: 'Deep Sea Exploration', desc: 'Two deep dives at premium coral sites' },
                { day: 3, title: 'Final Dive & Departure', desc: 'Morning snorkel session, certification, departure' }
            ],
            revenue: 'SAR 335K', avgGroup: 7.1, repeatRate: '38%',
            quality: 95, compliance: 'compliant', featured: 'yes', seasonal: true,
            discount: 0, commission: 12, created: 'Apr 05, 2025',
            adminNotes: 'Highest-rated adventure package. Seasonal availability May-October.'
        },
        'PKG-003': {
            id: 'PKG-003', name: 'Umrah Premium Package', type: 'Religious', duration: '7 Days / 6 Nights',
            days: 7, nights: 6, price: 'SAR 4,500', priceNum: 4500, rating: 4.7, bookings: 512,
            status: 'active', provider: 'Heritage Explorers', groupSize: '2-20', minGroup: 2, maxGroup: 20,
            location: 'Mecca', description: 'Complete Umrah package with premium accommodation and guided rituals.',
            inclusions: ['5-Star Hotel', 'Transportation', 'Meals Included', 'Tour Guide', 'Airport Transfers'],
            exclusions: ['Visa Fees', 'Personal Shopping', 'Phone/Internet'],
            itinerary: [
                { day: 1, title: 'Arrival in Mecca', desc: 'Airport pickup, hotel check-in, Ihram preparation' },
                { day: 2, title: 'Umrah Rituals', desc: 'Guided Tawaf, Sa\'i, and other Umrah rites' },
                { day: 3, title: 'Mecca Exploration', desc: 'Visit historical sites around Mecca' },
                { day: 4, title: 'Transfer to Medina', desc: 'Travel to Medina, hotel check-in' },
                { day: 5, title: 'Medina Holy Sites', desc: 'Visit Prophet\'s Mosque, Quba Mosque, Uhud' },
                { day: 6, title: 'Medina Heritage', desc: 'Explore Medina heritage sites and markets' },
                { day: 7, title: 'Departure', desc: 'Final prayers, airport transfer' }
            ],
            revenue: 'SAR 2.3M', avgGroup: 8.5, repeatRate: '55%',
            quality: 94, compliance: 'compliant', featured: 'yes', seasonal: false,
            discount: 5, commission: 10, created: 'Jan 20, 2025',
            adminNotes: 'Best-selling religious package. Year-round availability.'
        },
        'PKG-004': {
            id: 'PKG-004', name: 'Al Ula Discovery Trek', type: 'Adventure', duration: '4 Days / 3 Nights',
            days: 4, nights: 3, price: 'SAR 3,200', priceNum: 3200, rating: 4.6, bookings: 145,
            status: 'active', provider: 'Desert Adventures Ltd', groupSize: '4-10', minGroup: 4, maxGroup: 10,
            location: 'Al Ula', description: 'Discover the ancient wonders of Hegra and the stunning landscapes of Al Ula.',
            inclusions: ['Boutique Hotel', 'Transportation', 'Meals Included', 'Tour Guide', 'Entrance Fees'],
            exclusions: ['Flights', 'Travel Insurance', 'Personal Expenses', 'Balloon Ride Upgrade'],
            itinerary: [
                { day: 1, title: 'Arrival at Al Ula', desc: 'Airport transfer, resort check-in, sunset viewpoint' },
                { day: 2, title: 'Hegra UNESCO Site', desc: 'Full day exploring Hegra (Mada\'in Saleh)' },
                { day: 3, title: 'Elephant Rock & Oasis', desc: 'Visit Elephant Rock, Old Town, date palm oasis' },
                { day: 4, title: 'Hot Air Balloon & Departure', desc: 'Sunrise balloon ride, breakfast, departure' }
            ],
            revenue: 'SAR 464K', avgGroup: 5.8, repeatRate: '30%',
            quality: 88, compliance: 'compliant', featured: 'no', seasonal: true,
            discount: 15, commission: 14, created: 'Feb 15, 2025',
            adminNotes: 'Growing demand. Consider adding winter season special.'
        },
        'PKG-005': {
            id: 'PKG-005', name: 'Jeddah Family Fun', type: 'Family', duration: '4 Days / 3 Nights',
            days: 4, nights: 3, price: 'SAR 2,800', priceNum: 2800, rating: 4.5, bookings: 198,
            status: 'active', provider: 'Luxury Travel KSA', groupSize: '4-20', minGroup: 4, maxGroup: 20,
            location: 'Jeddah', description: 'Family-friendly package with kids activities, waterpark, and beach fun.',
            inclusions: ['Family Hotel', 'Transportation', 'Meals Included', 'Waterpark Tickets', 'Beach Access'],
            exclusions: ['Flights', 'Travel Insurance', 'Extra Activities', 'Mini Bar'],
            itinerary: [
                { day: 1, title: 'Arrival & Beach Day', desc: 'Hotel check-in, private beach, welcome dinner' },
                { day: 2, title: 'Waterpark Adventure', desc: 'Full day at premium waterpark with all rides' },
                { day: 3, title: 'Jeddah Corniche & Aquarium', desc: 'Corniche walk, Fakieh Aquarium, Al Balad' },
                { day: 4, title: 'Shopping & Departure', desc: 'Mall of Arabia visit, airport transfer' }
            ],
            revenue: 'SAR 554K', avgGroup: 8.4, repeatRate: '35%',
            quality: 86, compliance: 'compliant', featured: 'no', seasonal: false,
            discount: 20, commission: 13, created: 'May 01, 2025',
            adminNotes: 'Popular during school holidays. Family-friendly verified.'
        },
        'PKG-006': {
            id: 'PKG-006', name: 'Budget Backpacker Route', type: 'Budget', duration: '6 Days / 5 Nights',
            days: 6, nights: 5, price: 'SAR 1,200', priceNum: 1200, rating: 4.3, bookings: 267,
            status: 'pending', provider: 'Saudi Tours Co', groupSize: '6-25', minGroup: 6, maxGroup: 25,
            location: 'Multi-City', description: 'Affordable multi-city tour covering Riyadh, Jeddah, and Al Ula highlights.',
            inclusions: ['Hostel/Budget Hotel', 'Bus Transport', 'Breakfast', 'Tour Guide'],
            exclusions: ['Flights', 'Lunch & Dinner', 'Insurance', 'Personal Expenses', 'Entrance Fees'],
            itinerary: [
                { day: 1, title: 'Riyadh Start', desc: 'Group meeting, city highlights walking tour' },
                { day: 2, title: 'Riyadh Heritage', desc: 'Diriyah, National Museum on a budget' },
                { day: 3, title: 'Travel to Jeddah', desc: 'Bus to Jeddah, evening Corniche walk' },
                { day: 4, title: 'Al Balad & Coast', desc: 'Historic Jeddah, local food tour, beach' },
                { day: 5, title: 'Travel to Al Ula', desc: 'Flight to Al Ula, sunset at Elephant Rock' },
                { day: 6, title: 'Hegra & Departure', desc: 'Morning Hegra visit, departure transfers' }
            ],
            revenue: 'SAR 320K', avgGroup: 14.2, repeatRate: '48%',
            quality: 78, compliance: 'minor-issues', featured: 'no', seasonal: false,
            discount: 0, commission: 18, created: 'Jun 15, 2025',
            adminNotes: 'Pending quality review. Need to verify hostel standards.'
        },
        'PKG-007': {
            id: 'PKG-007', name: 'Royal Luxury Escape', type: 'Luxury', duration: '5 Days / 4 Nights',
            days: 5, nights: 4, price: 'SAR 8,500', priceNum: 8500, rating: 4.9, bookings: 89,
            status: 'active', provider: 'Luxury Travel KSA', groupSize: '2-6', minGroup: 2, maxGroup: 6,
            location: 'Riyadh', description: 'Ultra-luxury experience with private chauffeur, fine dining, and VIP access.',
            inclusions: ['5-Star Suite', 'Private Chauffeur', 'Fine Dining', 'VIP Access', 'Spa Package', 'Personal Guide'],
            exclusions: ['International Flights', 'Travel Insurance', 'Personal Shopping'],
            itinerary: [
                { day: 1, title: 'VIP Arrival', desc: 'Limousine pickup, suite check-in, rooftop dinner' },
                { day: 2, title: 'Private Heritage Tour', desc: 'Private guide to Diriyah, exclusive lunch' },
                { day: 3, title: 'Desert Glamping', desc: 'Luxury desert camp, camel ride, stargazing' },
                { day: 4, title: 'Spa & Fine Dining', desc: 'Full spa day, Michelin-star dinner experience' },
                { day: 5, title: 'Farewell', desc: 'Brunch, souvenir shopping, VIP airport lounge' }
            ],
            revenue: 'SAR 757K', avgGroup: 3.1, repeatRate: '62%',
            quality: 98, compliance: 'compliant', featured: 'yes', seasonal: false,
            discount: 0, commission: 8, created: 'Feb 01, 2025',
            adminNotes: 'Premium flagship package. Highest revenue per booking.'
        },
        'PKG-008': {
            id: 'PKG-008', name: 'Tabuk Winter Special', type: 'Adventure', duration: '3 Days / 2 Nights',
            days: 3, nights: 2, price: 'SAR 1,950', priceNum: 1950, rating: 4.4, bookings: 76,
            status: 'seasonal', provider: 'Desert Adventures Ltd', groupSize: '6-15', minGroup: 6, maxGroup: 15,
            location: 'Tabuk', description: 'Experience snow and mountains in Tabuk during the winter season.',
            inclusions: ['Mountain Lodge', 'Transportation', 'Meals', 'Winter Gear Rental', 'Guide'],
            exclusions: ['Flights', 'Travel Insurance', 'Personal Expenses', 'Ski Equipment Upgrade'],
            itinerary: [
                { day: 1, title: 'Arrival in Tabuk', desc: 'Airport transfer, lodge check-in, mountain viewpoint' },
                { day: 2, title: 'Snow & Mountains', desc: 'Snow activities, hiking, campfire dinner' },
                { day: 3, title: 'Wadi Al Disah & Departure', desc: 'Visit Wadi Al Disah canyon, departure' }
            ],
            revenue: 'SAR 148K', avgGroup: 9.3, repeatRate: '25%',
            quality: 82, compliance: 'compliant', featured: 'no', seasonal: true,
            discount: 10, commission: 15, created: 'Oct 01, 2025',
            adminNotes: 'Seasonal package - Dec to Feb only. Check weather advisories.'
        }
    };

    function initializePackageManagement() {
        populatePackagesTable();
        setupPackageFilters();
        setupPackageActions();
        initializeLogout();
    }

    function populatePackagesTable() {
        const tbody = document.getElementById('packagesTableBody');
        if (!tbody) return;

        let html = '';
        for (let id in packagesData) {
            const pkg = packagesData[id];
            const statusClass = 'status-' + pkg.status.toLowerCase();

            html += `
                <tr data-package-id="${pkg.id}" data-status="${pkg.status}" data-type="${pkg.type.toLowerCase()}" data-duration="${pkg.days}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(pkg.name)}&background=667eea&color=fff&size=36" alt="${pkg.name}">
                            <div>
                                <span class="table-user-name">${pkg.name}</span>
                                <span class="table-user-id">${pkg.id}</span>
                            </div>
                        </div>
                    </td>
                    <td><span class="type-badge type-${pkg.type.toLowerCase()}"><i class="fas fa-tag"></i> ${pkg.type}</span></td>
                    <td>${pkg.duration}</td>
                    <td><strong>${pkg.price}</strong></td>
                    <td>
                        <div class="rating-display">
                            <i class="fas fa-star"></i>
                            <span>${pkg.rating}</span>
                        </div>
                    </td>
                    <td>${pkg.bookings}</td>
                    <td><span class="status-badge ${statusClass}">${pkg.status.charAt(0).toUpperCase() + pkg.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="package-view.html?id=${pkg.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="package-edit.html?id=${pkg.id}" class="action-btn action-edit" title="Edit Package"><i class="fas fa-pen"></i></a>
                            <button class="action-btn action-block" title="Disable"><i class="fas fa-toggle-off"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupPackageFilters() {
        const searchInput = document.getElementById('packageSearchInput');
        const statusFilter = document.getElementById('packageStatusFilter');
        const typeFilter = document.getElementById('packageTypeFilter');
        const durationFilter = document.getElementById('packageDurationFilter');

        if (searchInput) searchInput.addEventListener('input', filterPackages);
        if (statusFilter) statusFilter.addEventListener('change', filterPackages);
        if (typeFilter) typeFilter.addEventListener('change', filterPackages);
        if (durationFilter) durationFilter.addEventListener('change', filterPackages);
    }

    function filterPackages() {
        const searchTerm = document.getElementById('packageSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('packageStatusFilter')?.value || 'all';
        const typeFilter = document.getElementById('packageTypeFilter')?.value || 'all';
        const durationFilter = document.getElementById('packageDurationFilter')?.value || 'all';

        const rows = document.querySelectorAll('#packagesTableBody tr');

        rows.forEach(row => {
            const pkgId = row.dataset.packageId;
            const pkg = packagesData[pkgId];
            const matchesSearch = pkg.name.toLowerCase().includes(searchTerm) ||
                                pkg.provider.toLowerCase().includes(searchTerm) ||
                                pkgId.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || pkg.status === statusFilter;
            const matchesType = typeFilter === 'all' || pkg.type.toLowerCase() === typeFilter;
            let matchesDuration = true;
            if (durationFilter === '1-3') matchesDuration = pkg.days >= 1 && pkg.days <= 3;
            else if (durationFilter === '4-7') matchesDuration = pkg.days >= 4 && pkg.days <= 7;
            else if (durationFilter === '8+') matchesDuration = pkg.days >= 8;

            row.style.display = (matchesSearch && matchesStatus && matchesType && matchesDuration) ? '' : 'none';
        });
    }

    function setupPackageActions() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.action-block') && e.target.closest('#packagesTableBody')) {
                const row = e.target.closest('tr');
                const pkgId = row.dataset.packageId;
                if (packagesData[pkgId]) {
                    packagesData[pkgId].status = packagesData[pkgId].status === 'disabled' ? 'active' : 'disabled';
                    populatePackagesTable();
                }
            }
        });
    }

    function initializePackageViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const packageId = urlParams.get('id');

        if (packageId && packagesData[packageId]) {
            populatePackageView(packagesData[packageId]);
        }

        const editLink = document.getElementById('editPackageLink');
        if (editLink && packageId) {
            editLink.href = 'package-edit.html?id=' + packageId;
        }

        initializeLogout();
    }

    function populatePackageView(pkg) {
        document.getElementById('viewPackageName').textContent = pkg.name;
        document.getElementById('viewPackageId').textContent = '#' + pkg.id;
        document.getElementById('viewPackageTitle').textContent = pkg.name;
        document.getElementById('viewPackageAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(pkg.name) + '&background=667eea&color=fff&size=120';

        const statusEl = document.getElementById('viewPackageStatus');
        statusEl.textContent = pkg.status.charAt(0).toUpperCase() + pkg.status.slice(1);
        statusEl.className = 'status-badge status-' + pkg.status;

        document.getElementById('viewPackageType').textContent = pkg.type;
        document.getElementById('viewPackageDuration').textContent = pkg.duration;
        document.getElementById('viewPackagePrice').textContent = pkg.price + '/person';
        document.getElementById('viewPackageGroupSize').textContent = pkg.groupSize + ' persons';
        document.getElementById('viewPackageRating').textContent = pkg.rating + '/5.0';
        document.getElementById('viewPackageProvider').textContent = pkg.provider;
        document.getElementById('viewPackageCreated').textContent = pkg.created;

        // Description
        var descEl = document.getElementById('viewPackageDescription');
        if (descEl && pkg.description) {
            descEl.textContent = pkg.description;
        }

        // Performance stats
        document.getElementById('viewPackageBookings').textContent = pkg.bookings.toLocaleString();
        document.getElementById('viewPackageRevenue').textContent = pkg.revenue || 'N/A';
        document.getElementById('viewPackageAvgGroup').textContent = pkg.avgGroup || 'N/A';
        document.getElementById('viewPackageRepeatRate').textContent = pkg.repeatRate || 'N/A';

        // Itinerary
        const itineraryEl = document.getElementById('viewPackageItinerary');
        if (itineraryEl && pkg.itinerary) {
            itineraryEl.innerHTML = pkg.itinerary.map(item => `
                <div class="itinerary-item">
                    <div class="itinerary-day">Day ${item.day}</div>
                    <div class="itinerary-content">
                        <strong>${item.title}</strong>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // Inclusions & Exclusions
        const inclusionsEl = document.getElementById('viewPackageInclusions');
        if (inclusionsEl) {
            var html = '';
            if (pkg.inclusions) {
                html += '<div class="inclusions-column"><h4><i class="fas fa-check-circle"></i> Included</h4>' +
                    pkg.inclusions.map(function(i) { return '<div class="inclusion-item included"><i class="fas fa-check"></i> ' + i + '</div>'; }).join('') +
                    '</div>';
            }
            if (pkg.exclusions) {
                html += '<div class="inclusions-column"><h4><i class="fas fa-times-circle" style="color:#e74c3c"></i> Excluded</h4>' +
                    pkg.exclusions.map(function(i) { return '<div class="inclusion-item excluded"><i class="fas fa-times"></i> ' + i + '</div>'; }).join('') +
                    '</div>';
            }
            inclusionsEl.innerHTML = html;
        }

        // Compliance
        var complianceEl = document.getElementById('viewPackageCompliance');
        if (complianceEl) {
            var compClass = pkg.compliance === 'compliant' ? 'compliant' :
                           pkg.compliance === 'minor-issues' ? 'minor-issues' : 'non-compliant';
            var compIcon = pkg.compliance === 'compliant' ? 'fa-check-circle' :
                          pkg.compliance === 'minor-issues' ? 'fa-exclamation-circle' : 'fa-times-circle';
            complianceEl.innerHTML =
                '<div class="compliance-item">' +
                    '<span class="compliance-item-label"><i class="fas ' + compIcon + '"></i> Overall Compliance</span>' +
                    '<span class="compliance-badge ' + compClass + '">' + pkg.compliance.split('-').map(function(w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(' ') + '</span>' +
                '</div>' +
                '<div class="compliance-item">' +
                    '<span class="compliance-item-label"><i class="fas fa-star"></i> Quality Score</span>' +
                    '<span class="compliance-badge ' + (pkg.quality >= 90 ? 'compliant' : pkg.quality >= 70 ? 'minor-issues' : 'non-compliant') + '">' + pkg.quality + '%</span>' +
                '</div>';
        }

        // Activity Log
        var activityEl = document.getElementById('viewPackageActivity');
        if (activityEl) {
            activityEl.innerHTML =
                '<div class="activity-item">' +
                    '<div class="activity-icon"><i class="fas fa-plus-circle"></i></div>' +
                    '<div class="activity-content"><div class="activity-title">Package created</div><div class="activity-time">' + pkg.created + '</div></div>' +
                '</div>' +
                '<div class="activity-item">' +
                    '<div class="activity-icon"><i class="fas fa-check-circle"></i></div>' +
                    '<div class="activity-content"><div class="activity-title">Status set to ' + pkg.status + '</div><div class="activity-time">' + pkg.created + '</div></div>' +
                '</div>' +
                '<div class="activity-item">' +
                    '<div class="activity-icon"><i class="fas fa-chart-line"></i></div>' +
                    '<div class="activity-content"><div class="activity-title">' + pkg.bookings + ' bookings recorded</div><div class="activity-time">Updated recently</div></div>' +
                '</div>';
        }
    }

    function initializePackageEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const packageId = urlParams.get('id');

        if (packageId && packagesData[packageId]) {
            populatePackageEdit(packagesData[packageId]);
        }

        const form = document.getElementById('packageEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() {
                    window.location.href = 'package-view.html?id=' + packageId;
                }, 1000);
            });
        }

        initializeLogout();
    }

    function populatePackageEdit(pkg) {
        document.getElementById('editPackageDisplayName').textContent = pkg.name;
        document.getElementById('editPackageId').textContent = '#' + pkg.id;
        document.getElementById('editPackageName').value = pkg.name;
        document.getElementById('editPackageType').value = pkg.type.toLowerCase();
        document.getElementById('editPackageDays').value = pkg.days;
        document.getElementById('editPackageNights').value = pkg.nights;
        document.getElementById('editPackageMinGroup').value = pkg.minGroup;
        document.getElementById('editPackageMaxGroup').value = pkg.maxGroup;
        document.getElementById('editPackageDescription').value = pkg.description || '';
        document.getElementById('editPackagePrice').value = pkg.priceNum;
        document.getElementById('editPackageDiscount').value = pkg.discount || 0;
        document.getElementById('editPackageQuality').value = pkg.quality;
        document.getElementById('editPackageCompliance').value = pkg.compliance;
        document.getElementById('editPackageStatus').value = pkg.status;
        document.getElementById('editPackageFeatured').value = pkg.featured;
        document.getElementById('editPackageCommission').value = pkg.commission || '';
        document.getElementById('editPackageAdminNotes').value = pkg.adminNotes || '';
    }

// ============================================
// ACTIVITY MANAGEMENT
// ============================================

    const activitiesData = {
        'ACT-001': {
            id: 'ACT-001', name: 'Desert Safari Adventure', category: 'Adventure', duration: '4 Hours',
            durationHrs: 4, price: 'SAR 350', priceNum: 350, rating: 4.7, bookings: 1856,
            status: 'active', operator: 'Desert Adventures Ltd', difficulty: 'Moderate',
            location: 'Riyadh', maxPax: 20, minAge: 12,
            description: 'Thrilling desert safari with dune bashing, camel rides, and traditional Bedouin dinner.',
            includes: ['Professional Guide', 'Transportation', 'Camel Ride', 'Dinner', 'Refreshments'],
            schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], start: '15:00', end: '21:00' },
            quality: 90, compliance: 'compliant', featured: 'yes',
            commission: 15, created: 'Jan 05, 2025',
            adminNotes: 'Top adventure activity. Excellent safety record.'
        },
        'ACT-002': {
            id: 'ACT-002', name: 'Old Jeddah Walking Tour', category: 'Cultural', duration: '3 Hours',
            durationHrs: 3, price: 'SAR 180', priceNum: 180, rating: 4.8, bookings: 2340,
            status: 'active', operator: 'Heritage Explorers', difficulty: 'Easy',
            location: 'Jeddah', maxPax: 25, minAge: 6,
            description: 'Guided walking tour through the historic Al Balad district with expert heritage guides.',
            includes: ['Professional Guide', 'Refreshments', 'Photography'],
            schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'], start: '08:00', end: '11:00' },
            quality: 94, compliance: 'compliant', featured: 'yes',
            commission: 12, created: 'Dec 15, 2024',
            adminNotes: 'Award-winning cultural experience. UNESCO area.'
        },
        'ACT-003': {
            id: 'ACT-003', name: 'Red Sea Snorkeling', category: 'Water Sports', duration: '5 Hours',
            durationHrs: 5, price: 'SAR 420', priceNum: 420, rating: 4.6, bookings: 987,
            status: 'active', operator: 'Red Sea Diving Center', difficulty: 'Easy',
            location: 'Jeddah', maxPax: 15, minAge: 10,
            description: 'Explore vibrant coral reefs and marine life in the crystal-clear Red Sea waters.',
            includes: ['Equipment Provided', 'Professional Guide', 'Transportation', 'Meals/Snacks', 'Insurance'],
            schedule: { days: ['Sun', 'Tue', 'Thu', 'Sat'], start: '07:00', end: '12:00' },
            quality: 92, compliance: 'compliant', featured: 'no',
            commission: 14, created: 'Feb 20, 2025',
            adminNotes: 'Seasonal peak in summer. All safety certifications valid.'
        },
        'ACT-004': {
            id: 'ACT-004', name: 'Mountain Hiking Expedition', category: 'Outdoor', duration: '8 Hours',
            durationHrs: 8, price: 'SAR 280', priceNum: 280, rating: 4.5, bookings: 654,
            status: 'active', operator: 'Mountain Trails KSA', difficulty: 'Challenging',
            location: 'Tabuk', maxPax: 12, minAge: 16,
            description: 'Full-day mountain hiking through scenic trails with panoramic views.',
            includes: ['Professional Guide', 'Equipment Provided', 'Meals/Snacks', 'First Aid Kit'],
            schedule: { days: ['Fri', 'Sat'], start: '06:00', end: '14:00' },
            quality: 88, compliance: 'compliant', featured: 'no',
            commission: 16, created: 'Mar 01, 2025',
            adminNotes: 'High difficulty - ensure age/fitness requirements are enforced.'
        },
        'ACT-005': {
            id: 'ACT-005', name: 'Saudi Food Tour', category: 'Food Tour', duration: '4 Hours',
            durationHrs: 4, price: 'SAR 250', priceNum: 250, rating: 4.9, bookings: 1432,
            status: 'active', operator: 'Saudi Tours Co', difficulty: 'Easy',
            location: 'Riyadh', maxPax: 15, minAge: 5,
            description: 'Taste authentic Saudi cuisine at local hidden gems with a professional food guide.',
            includes: ['Professional Guide', 'All Food Tastings', 'Refreshments', 'Transportation'],
            schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], start: '18:00', end: '22:00' },
            quality: 96, compliance: 'compliant', featured: 'yes',
            commission: 13, created: 'Jan 15, 2025',
            adminNotes: 'Highest-rated food activity. Consistently sells out.'
        },
        'ACT-006': {
            id: 'ACT-006', name: 'Spa & Wellness Retreat', category: 'Wellness', duration: '6 Hours',
            durationHrs: 6, price: 'SAR 550', priceNum: 550, rating: 4.4, bookings: 423,
            status: 'pending', operator: 'Luxury Travel KSA', difficulty: 'Easy',
            location: 'Riyadh', maxPax: 8, minAge: 18,
            description: 'Premium spa day including massage, thermal baths, and wellness consultation.',
            includes: ['All Treatments', 'Lunch', 'Refreshments', 'Wellness Kit'],
            schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'], start: '09:00', end: '15:00' },
            quality: 85, compliance: 'minor-issues', featured: 'no',
            commission: 10, created: 'Apr 10, 2025',
            adminNotes: 'Pending: need updated health and safety certification.'
        },
        'ACT-007': {
            id: 'ACT-007', name: 'Al Ula Stargazing', category: 'Outdoor', duration: '3 Hours',
            durationHrs: 3, price: 'SAR 320', priceNum: 320, rating: 4.8, bookings: 567,
            status: 'active', operator: 'Desert Adventures Ltd', difficulty: 'Easy',
            location: 'Al Ula', maxPax: 20, minAge: 8,
            description: 'Professional stargazing experience in the pristine dark skies of Al Ula desert.',
            includes: ['Professional Guide', 'Telescope Access', 'Refreshments', 'Transportation', 'Certificate'],
            schedule: { days: ['Wed', 'Thu', 'Fri', 'Sat'], start: '20:00', end: '23:00' },
            quality: 91, compliance: 'compliant', featured: 'yes',
            commission: 14, created: 'Mar 15, 2025',
            adminNotes: 'Unique activity. Best during new moon phases.'
        },
        'ACT-008': {
            id: 'ACT-008', name: 'Sandboarding Experience', category: 'Adventure', duration: '3 Hours',
            durationHrs: 3, price: 'SAR 200', priceNum: 200, rating: 4.3, bookings: 345,
            status: 'flagged', operator: 'Desert Adventures Ltd', difficulty: 'Moderate',
            location: 'Riyadh', maxPax: 16, minAge: 14,
            description: 'Exciting sandboarding on massive dunes with professional instructors.',
            includes: ['Equipment Provided', 'Professional Guide', 'Refreshments'],
            schedule: { days: ['Thu', 'Fri', 'Sat'], start: '15:00', end: '18:00' },
            quality: 72, compliance: 'minor-issues', featured: 'no',
            commission: 17, created: 'May 20, 2025',
            adminNotes: 'FLAGGED: Safety incident reported. Under investigation.'
        }
    };

    function initializeActivityManagement() {
        populateActivitiesTable();
        setupActivityFilters();
        setupActivityActions();
        initializeLogout();
    }

    function populateActivitiesTable() {
        const tbody = document.getElementById('activitiesTableBody');
        if (!tbody) return;

        let html = '';
        for (let id in activitiesData) {
            const activity = activitiesData[id];
            const statusClass = 'status-' + activity.status.toLowerCase();
            const difficultyClass = 'difficulty-' + activity.difficulty.toLowerCase();

            html += `
                <tr data-activity-id="${activity.id}" data-status="${activity.status}" data-category="${activity.category.toLowerCase().replace(' ', '-')}" data-difficulty="${activity.difficulty.toLowerCase()}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(activity.name)}&background=f093fb&color=fff&size=36" alt="${activity.name}">
                            <div>
                                <span class="table-user-name">${activity.name}</span>
                                <span class="table-user-id">${activity.id}</span>
                            </div>
                        </div>
                    </td>
                    <td><span class="type-badge type-${activity.category.toLowerCase().replace(' ', '-')}"><i class="fas fa-tag"></i> ${activity.category}</span></td>
                    <td>${activity.duration}</td>
                    <td><strong>${activity.price}</strong></td>
                    <td><span class="difficulty-badge ${difficultyClass}">${activity.difficulty}</span></td>
                    <td>
                        <div class="rating-display">
                            <i class="fas fa-star"></i>
                            <span>${activity.rating}</span>
                        </div>
                    </td>
                    <td><span class="status-badge ${statusClass}">${activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="activity-view.html?id=${activity.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="activity-edit.html?id=${activity.id}" class="action-btn action-edit" title="Edit Activity"><i class="fas fa-pen"></i></a>
                            <button class="action-btn action-block" title="Disable"><i class="fas fa-toggle-off"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupActivityFilters() {
        const searchInput = document.getElementById('activitySearchInput');
        const statusFilter = document.getElementById('activityStatusFilter');
        const categoryFilter = document.getElementById('activityCategoryFilter');
        const difficultyFilter = document.getElementById('activityDifficultyFilter');

        if (searchInput) searchInput.addEventListener('input', filterActivities);
        if (statusFilter) statusFilter.addEventListener('change', filterActivities);
        if (categoryFilter) categoryFilter.addEventListener('change', filterActivities);
        if (difficultyFilter) difficultyFilter.addEventListener('change', filterActivities);
    }

    function filterActivities() {
        const searchTerm = document.getElementById('activitySearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('activityStatusFilter')?.value || 'all';
        const categoryFilter = document.getElementById('activityCategoryFilter')?.value || 'all';
        const difficultyFilter = document.getElementById('activityDifficultyFilter')?.value || 'all';

        const rows = document.querySelectorAll('#activitiesTableBody tr');

        rows.forEach(row => {
            const actId = row.dataset.activityId;
            const activity = activitiesData[actId];
            const matchesSearch = activity.name.toLowerCase().includes(searchTerm) ||
                                activity.operator.toLowerCase().includes(searchTerm) ||
                                actId.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || activity.status === statusFilter;
            const matchesCategory = categoryFilter === 'all' || activity.category.toLowerCase().replace(' ', '-') === categoryFilter;
            const matchesDifficulty = difficultyFilter === 'all' || activity.difficulty.toLowerCase() === difficultyFilter;

            row.style.display = (matchesSearch && matchesStatus && matchesCategory && matchesDifficulty) ? '' : 'none';
        });
    }

    function setupActivityActions() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.action-block') && e.target.closest('#activitiesTableBody')) {
                const row = e.target.closest('tr');
                const actId = row.dataset.activityId;
                if (activitiesData[actId]) {
                    activitiesData[actId].status = activitiesData[actId].status === 'disabled' ? 'active' : 'disabled';
                    populateActivitiesTable();
                }
            }
        });
    }

    function initializeActivityViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const activityId = urlParams.get('id');

        if (activityId && activitiesData[activityId]) {
            populateActivityView(activitiesData[activityId]);
        }

        const editLink = document.getElementById('editActivityLink');
        if (editLink && activityId) {
            editLink.href = 'activity-edit.html?id=' + activityId;
        }

        initializeLogout();
    }

    function populateActivityView(activity) {
        document.getElementById('viewActivityName').textContent = activity.name;
        document.getElementById('viewActivityId').textContent = '#' + activity.id;
        document.getElementById('viewActivityTitle').textContent = activity.name;
        document.getElementById('viewActivityAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(activity.name) + '&background=f093fb&color=fff&size=120';

        const statusEl = document.getElementById('viewActivityStatus');
        statusEl.textContent = activity.status.charAt(0).toUpperCase() + activity.status.slice(1);
        statusEl.className = 'status-badge status-' + activity.status;

        document.getElementById('viewActivityCategory').textContent = activity.category;
        document.getElementById('viewActivityDuration').textContent = activity.duration;
        document.getElementById('viewActivityPrice').textContent = activity.price + '/person';
        document.getElementById('viewActivityDifficulty').textContent = activity.difficulty;
        document.getElementById('viewActivityMaxPax').textContent = activity.maxPax + ' persons';
        document.getElementById('viewActivityRating').textContent = activity.rating + '/5.0';
        document.getElementById('viewActivityLocation').textContent = activity.location;
        document.getElementById('viewActivityOperator').textContent = activity.operator;

        // Schedule
        const scheduleEl = document.getElementById('viewActivitySchedule');
        if (scheduleEl && activity.schedule) {
            scheduleEl.innerHTML = activity.schedule.days.map(day => `
                <div class="hours-row">
                    <span class="hours-day">${day}</span>
                    <span class="hours-time">${activity.schedule.start} - ${activity.schedule.end}</span>
                </div>
            `).join('');
        }

        // Includes
        const includesEl = document.getElementById('viewActivityIncludes');
        if (includesEl && activity.includes) {
            includesEl.innerHTML = activity.includes.map(item => `
                <div class="feature-item"><i class="fas fa-check-circle"></i> ${item}</div>
            `).join('');
        }
    }

    function initializeActivityEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const activityId = urlParams.get('id');

        if (activityId && activitiesData[activityId]) {
            populateActivityEdit(activitiesData[activityId]);
        }

        const form = document.getElementById('activityEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() {
                    window.location.href = 'activity-view.html?id=' + activityId;
                }, 1000);
            });
        }

        initializeLogout();
    }

    function populateActivityEdit(activity) {
        document.getElementById('editActivityDisplayName').textContent = activity.name;
        document.getElementById('editActivityId').textContent = '#' + activity.id;
        document.getElementById('editActivityName').value = activity.name;
        document.getElementById('editActivityCategory').value = activity.category.toLowerCase().replace(' ', '-');
        document.getElementById('editActivityLocation').value = activity.location.toLowerCase().replace(' ', '-');
        document.getElementById('editActivityDifficulty').value = activity.difficulty.toLowerCase();
        document.getElementById('editActivityDuration').value = activity.durationHrs;
        document.getElementById('editActivityMaxPax').value = activity.maxPax;
        document.getElementById('editActivityDescription').value = activity.description || '';
        document.getElementById('editActivityPrice').value = activity.priceNum;
        document.getElementById('editActivityMinAge').value = activity.minAge || '';
        document.getElementById('editActivitySafetyScore').value = activity.quality;
        document.getElementById('editActivityCompliance').value = activity.compliance;
        document.getElementById('editActivityStatus').value = activity.status;
        document.getElementById('editActivityFeatured').value = activity.featured;
        document.getElementById('editActivityCommission').value = activity.commission || '';
        document.getElementById('editActivityAdminNotes').value = activity.adminNotes || '';

        if (activity.schedule) {
            document.getElementById('editActivityStartTime').value = activity.schedule.start;
            document.getElementById('editActivityEndTime').value = activity.schedule.end;
        }
    }

// ============================================
// CAB MANAGEMENT
// ============================================

    const cabsData = {
        'CAB-001': {
            id: 'CAB-001', driverName: 'Ahmed Al Fahad', phone: '+966-50-555-1234',
            email: 'ahmed.fahad@email.com', license: 'SA-DRV-2024-0815', licenseExpiry: '2027-06-30',
            vehicle: 'Toyota Camry 2024', make: 'Toyota', model: 'Camry', year: 2024,
            color: 'White', type: 'Sedan', plate: 'ABC 1234', capacity: 4,
            city: 'Riyadh', rating: 4.8, trips: 1248, status: 'active',
            baseFare: 15, perKm: 2.5, perMin: 0.75, commission: 18,
            earnings: 'SAR 8,500', acceptance: 92, cancellation: 4,
            insuranceExpiry: '2026-12-31', registrationExpiry: '2026-06-30',
            safetyScore: 94, compliance: 'compliant', featured: 'yes',
            schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], start: '06:00', end: '22:00' },
            joined: 'Feb 10, 2025',
            adminNotes: 'Top-rated driver. Excellent customer feedback consistently.'
        },
        'CAB-002': {
            id: 'CAB-002', driverName: 'Khalid Al Otaibi', phone: '+966-50-555-2345',
            email: 'khalid.otaibi@email.com', license: 'SA-DRV-2024-1023', licenseExpiry: '2027-03-15',
            vehicle: 'Hyundai Tucson 2023', make: 'Hyundai', model: 'Tucson', year: 2023,
            color: 'Silver', type: 'SUV', plate: 'DEF 5678', capacity: 5,
            city: 'Jeddah', rating: 4.6, trips: 876, status: 'active',
            baseFare: 20, perKm: 3.0, perMin: 0.85, commission: 18,
            earnings: 'SAR 7,200', acceptance: 88, cancellation: 6,
            insuranceExpiry: '2026-08-15', registrationExpiry: '2026-11-20',
            safetyScore: 90, compliance: 'compliant', featured: 'no',
            schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'], start: '07:00', end: '20:00' },
            joined: 'Mar 22, 2025',
            adminNotes: 'Reliable SUV driver. Good for airport transfers.'
        },
        'CAB-003': {
            id: 'CAB-003', driverName: 'Omar Hassan', phone: '+966-50-555-3456',
            email: 'omar.hassan@email.com', license: 'SA-DRV-2023-0456', licenseExpiry: '2026-09-10',
            vehicle: 'Mercedes S-Class 2024', make: 'Mercedes', model: 'S-Class', year: 2024,
            color: 'Black', type: 'Luxury', plate: 'GHI 9012', capacity: 4,
            city: 'Riyadh', rating: 4.9, trips: 542, status: 'active',
            baseFare: 50, perKm: 5.0, perMin: 1.50, commission: 15,
            earnings: 'SAR 15,800', acceptance: 96, cancellation: 2,
            insuranceExpiry: '2027-01-15', registrationExpiry: '2027-03-30',
            safetyScore: 98, compliance: 'compliant', featured: 'yes',
            schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], start: '08:00', end: '23:00' },
            joined: 'Jan 05, 2025',
            adminNotes: 'Premium luxury driver. VIP clientele. Prioritize for high-value bookings.'
        },
        'CAB-004': {
            id: 'CAB-004', driverName: 'Saad Al Qahtani', phone: '+966-50-555-4567',
            email: 'saad.qahtani@email.com', license: 'SA-DRV-2024-0789', licenseExpiry: '2027-01-20',
            vehicle: 'Toyota Hiace 2023', make: 'Toyota', model: 'Hiace', year: 2023,
            color: 'White', type: 'Van', plate: 'JKL 3456', capacity: 12,
            city: 'Mecca', rating: 4.5, trips: 1567, status: 'on-trip',
            baseFare: 25, perKm: 2.0, perMin: 0.60, commission: 20,
            earnings: 'SAR 9,200', acceptance: 94, cancellation: 3,
            insuranceExpiry: '2026-10-05', registrationExpiry: '2026-07-15',
            safetyScore: 86, compliance: 'compliant', featured: 'no',
            schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], start: '05:00', end: '23:00' },
            joined: 'Dec 15, 2024',
            adminNotes: 'Group transport specialist. Mainly Hajj/Umrah transfers.'
        },
        'CAB-005': {
            id: 'CAB-005', driverName: 'Faisal Al Harbi', phone: '+966-50-555-5678',
            email: 'faisal.harbi@email.com', license: 'SA-DRV-2024-1156', licenseExpiry: '2027-08-22',
            vehicle: 'Kia Cerato 2024', make: 'Kia', model: 'Cerato', year: 2024,
            color: 'Grey', type: 'Economy', plate: 'MNO 7890', capacity: 4,
            city: 'Dammam', rating: 4.3, trips: 654, status: 'active',
            baseFare: 10, perKm: 1.8, perMin: 0.50, commission: 22,
            earnings: 'SAR 4,800', acceptance: 85, cancellation: 8,
            insuranceExpiry: '2026-11-30', registrationExpiry: '2027-02-10',
            safetyScore: 80, compliance: 'minor-issues', featured: 'no',
            schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'], start: '06:00', end: '18:00' },
            joined: 'Apr 05, 2025',
            adminNotes: 'Budget option. Minor vehicle cleanliness issue noted in last inspection.'
        },
        'CAB-006': {
            id: 'CAB-006', driverName: 'Turki Al Dossari', phone: '+966-50-555-6789',
            email: 'turki.dossari@email.com', license: 'SA-DRV-2023-0987', licenseExpiry: '2026-05-18',
            vehicle: 'Nissan Patrol 2023', make: 'Nissan', model: 'Patrol', year: 2023,
            color: 'White', type: 'SUV', plate: 'PQR 1234', capacity: 7,
            city: 'Medina', rating: 4.7, trips: 923, status: 'active',
            baseFare: 22, perKm: 3.2, perMin: 0.90, commission: 17,
            earnings: 'SAR 10,100', acceptance: 91, cancellation: 5,
            insuranceExpiry: '2026-09-20', registrationExpiry: '2026-12-01',
            safetyScore: 92, compliance: 'compliant', featured: 'yes',
            schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], start: '05:00', end: '22:00' },
            joined: 'Nov 20, 2024',
            adminNotes: 'Experienced Medina driver. Knows all holy sites routes.'
        },
        'CAB-007': {
            id: 'CAB-007', driverName: 'Nasser Al Shehri', phone: '+966-50-555-7890',
            email: 'nasser.shehri@email.com', license: 'SA-DRV-2024-0321', licenseExpiry: '2027-04-12',
            vehicle: 'Toyota Corolla 2022', make: 'Toyota', model: 'Corolla', year: 2022,
            color: 'Blue', type: 'Sedan', plate: 'STU 5678', capacity: 4,
            city: 'Jeddah', rating: 4.1, trips: 432, status: 'pending',
            baseFare: 12, perKm: 2.0, perMin: 0.60, commission: 20,
            earnings: 'SAR 3,200', acceptance: 78, cancellation: 12,
            insuranceExpiry: '2026-06-15', registrationExpiry: '2026-04-30',
            safetyScore: 72, compliance: 'minor-issues', featured: 'no',
            schedule: { days: ['Mon', 'Tue', 'Wed', 'Thu'], start: '08:00', end: '16:00' },
            joined: 'May 10, 2025',
            adminNotes: 'Pending verification. High cancellation rate needs review.'
        },
        'CAB-008': {
            id: 'CAB-008', driverName: 'Youssef Ibrahim', phone: '+966-50-555-8901',
            email: 'youssef.ibrahim@email.com', license: 'SA-DRV-2024-0654', licenseExpiry: '2027-07-05',
            vehicle: 'Lexus ES 2024', make: 'Lexus', model: 'ES', year: 2024,
            color: 'Pearl White', type: 'Luxury', plate: 'VWX 9012', capacity: 4,
            city: 'Riyadh', rating: 4.8, trips: 312, status: 'offline',
            baseFare: 45, perKm: 4.5, perMin: 1.30, commission: 15,
            earnings: 'SAR 11,400', acceptance: 95, cancellation: 3,
            insuranceExpiry: '2027-03-20', registrationExpiry: '2027-05-15',
            safetyScore: 96, compliance: 'compliant', featured: 'yes',
            schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'], start: '09:00', end: '21:00' },
            joined: 'Mar 01, 2025',
            adminNotes: 'Currently on scheduled leave. Returns next week.'
        }
    };

    function initializeCabManagement() {
        populateCabsTable();
        setupCabFilters();
        setupCabActions();
        initializeLogout();
    }

    function populateCabsTable() {
        const tbody = document.getElementById('cabsTableBody');
        if (!tbody) return;

        let html = '';
        for (let id in cabsData) {
            const cab = cabsData[id];
            const statusClass = 'status-' + cab.status.replace(' ', '-');
            const typeClass = 'type-' + cab.type.toLowerCase();

            html += `
                <tr data-cab-id="${cab.id}" data-status="${cab.status}" data-type="${cab.type.toLowerCase()}" data-city="${cab.city.toLowerCase()}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(cab.driverName)}&background=f39c12&color=fff&size=36" alt="${cab.driverName}">
                            <div>
                                <span class="table-user-name">${cab.driverName}</span>
                                <span class="table-user-id">${cab.id}</span>
                            </div>
                        </div>
                    </td>
                    <td>${cab.vehicle}</td>
                    <td><span class="type-badge ${typeClass}"><i class="fas fa-car"></i> ${cab.type}</span></td>
                    <td>${cab.city}</td>
                    <td>
                        <div class="rating-display">
                            <i class="fas fa-star"></i>
                            <span>${cab.rating}</span>
                        </div>
                    </td>
                    <td>${cab.trips.toLocaleString()}</td>
                    <td><span class="status-badge ${statusClass}">${cab.status.charAt(0).toUpperCase() + cab.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="cab-view.html?id=${cab.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="cab-edit.html?id=${cab.id}" class="action-btn action-edit" title="Edit Cab"><i class="fas fa-pen"></i></a>
                            <button class="action-btn action-block" title="Disable"><i class="fas fa-toggle-off"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupCabFilters() {
        const searchInput = document.getElementById('cabSearchInput');
        const statusFilter = document.getElementById('cabStatusFilter');
        const typeFilter = document.getElementById('cabTypeFilter');
        const cityFilter = document.getElementById('cabCityFilter');

        if (searchInput) searchInput.addEventListener('input', filterCabs);
        if (statusFilter) statusFilter.addEventListener('change', filterCabs);
        if (typeFilter) typeFilter.addEventListener('change', filterCabs);
        if (cityFilter) cityFilter.addEventListener('change', filterCabs);
    }

    function filterCabs() {
        const searchTerm = document.getElementById('cabSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('cabStatusFilter')?.value || 'all';
        const typeFilter = document.getElementById('cabTypeFilter')?.value || 'all';
        const cityFilter = document.getElementById('cabCityFilter')?.value || 'all';

        const rows = document.querySelectorAll('#cabsTableBody tr');

        rows.forEach(row => {
            const cabId = row.dataset.cabId;
            const cab = cabsData[cabId];
            const matchesSearch = cab.driverName.toLowerCase().includes(searchTerm) ||
                                cab.vehicle.toLowerCase().includes(searchTerm) ||
                                cabId.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || cab.status === statusFilter;
            const matchesType = typeFilter === 'all' || cab.type.toLowerCase() === typeFilter;
            const matchesCity = cityFilter === 'all' || cab.city.toLowerCase() === cityFilter;

            row.style.display = (matchesSearch && matchesStatus && matchesType && matchesCity) ? '' : 'none';
        });
    }

    function setupCabActions() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.action-block') && e.target.closest('#cabsTableBody')) {
                const row = e.target.closest('tr');
                const cabId = row.dataset.cabId;
                if (cabsData[cabId]) {
                    cabsData[cabId].status = cabsData[cabId].status === 'disabled' ? 'active' : 'disabled';
                    populateCabsTable();
                }
            }
        });
    }

    function initializeCabViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const cabId = urlParams.get('id');

        if (cabId && cabsData[cabId]) {
            populateCabView(cabsData[cabId]);
        }

        const editLink = document.getElementById('editCabLink');
        if (editLink && cabId) {
            editLink.href = 'cab-edit.html?id=' + cabId;
        }

        initializeLogout();
    }

    function populateCabView(cab) {
        document.getElementById('viewCabDriverName').textContent = cab.driverName;
        document.getElementById('viewCabId').textContent = '#' + cab.id;
        document.getElementById('viewCabTitle').textContent = cab.driverName + ' - ' + cab.vehicle;
        document.getElementById('viewCabAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(cab.driverName) + '&background=f39c12&color=fff&size=120';

        const statusEl = document.getElementById('viewCabStatus');
        statusEl.textContent = cab.status.charAt(0).toUpperCase() + cab.status.slice(1);
        statusEl.className = 'status-badge status-' + cab.status;

        document.getElementById('viewCabVehicle').textContent = cab.vehicle;
        document.getElementById('viewCabType').textContent = cab.type;
        document.getElementById('viewCabPlate').textContent = cab.plate;
        document.getElementById('viewCabCity').textContent = cab.city;
        document.getElementById('viewCabRating').textContent = cab.rating + '/5.0';
        document.getElementById('viewCabPhone').textContent = cab.phone;
        document.getElementById('viewCabLicense').textContent = cab.license;
        document.getElementById('viewCabJoined').textContent = cab.joined;

        // Vehicle details
        document.getElementById('viewCabMakeModel').textContent = cab.make + ' ' + cab.model;
        document.getElementById('viewCabYear').textContent = cab.year;
        document.getElementById('viewCabColor').textContent = cab.color;
        document.getElementById('viewCabCapacity').textContent = cab.capacity + ' Passengers';
        document.getElementById('viewCabInsurance').textContent = cab.insuranceExpiry;
        document.getElementById('viewCabRegistration').textContent = cab.registrationExpiry;

        // Pricing
        document.getElementById('viewCabBaseFare').textContent = 'SAR ' + cab.baseFare;
        document.getElementById('viewCabPerKm').textContent = 'SAR ' + cab.perKm;
        document.getElementById('viewCabPerMin').textContent = 'SAR ' + cab.perMin;
        document.getElementById('viewCabSurge').textContent = '1.0x';

        // Performance
        document.getElementById('viewCabTotalTrips').textContent = cab.trips.toLocaleString();
        document.getElementById('viewCabEarnings').textContent = cab.earnings;
        document.getElementById('viewCabAcceptance').textContent = cab.acceptance + '%';
        document.getElementById('viewCabCancellation').textContent = cab.cancellation + '%';

        // Schedule
        const scheduleEl = document.getElementById('viewCabSchedule');
        if (scheduleEl && cab.schedule) {
            scheduleEl.innerHTML = cab.schedule.days.map(day => `
                <div class="hours-row">
                    <span class="hours-day">${day}</span>
                    <span class="hours-time">${cab.schedule.start} - ${cab.schedule.end}</span>
                </div>
            `).join('');
        }

        // Compliance
        const complianceEl = document.getElementById('viewCabCompliance');
        if (complianceEl) {
            complianceEl.innerHTML = `
                <div class="compliance-item ${cab.compliance === 'compliant' ? 'compliant' : 'warning'}">
                    <i class="fas fa-${cab.compliance === 'compliant' ? 'check-circle' : 'exclamation-triangle'}"></i>
                    <span>Overall Compliance: ${cab.compliance.charAt(0).toUpperCase() + cab.compliance.slice(1)}</span>
                </div>
                <div class="compliance-item compliant">
                    <i class="fas fa-check-circle"></i>
                    <span>Driver License: Valid until ${cab.licenseExpiry}</span>
                </div>
                <div class="compliance-item compliant">
                    <i class="fas fa-check-circle"></i>
                    <span>Vehicle Insurance: Valid until ${cab.insuranceExpiry}</span>
                </div>
                <div class="compliance-item compliant">
                    <i class="fas fa-check-circle"></i>
                    <span>Safety Score: ${cab.safetyScore}/100</span>
                </div>
            `;
        }
    }

    function initializeCabEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const cabId = urlParams.get('id');

        if (cabId && cabsData[cabId]) {
            populateCabEdit(cabsData[cabId]);
        }

        const form = document.getElementById('cabEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() {
                    window.location.href = 'cab-view.html?id=' + cabId;
                }, 1000);
            });
        }

        initializeLogout();
    }

    function populateCabEdit(cab) {
        document.getElementById('editCabDisplayName').textContent = cab.driverName;
        document.getElementById('editCabId').textContent = '#' + cab.id;
        document.getElementById('editCabDriverName').value = cab.driverName;
        document.getElementById('editCabPhone').value = cab.phone;
        document.getElementById('editCabEmail').value = cab.email || '';
        document.getElementById('editCabLicense').value = cab.license;
        document.getElementById('editCabCity').value = cab.city.toLowerCase();
        document.getElementById('editCabVehicleMake').value = cab.make;
        document.getElementById('editCabVehicleModel').value = cab.model;
        document.getElementById('editCabVehicleYear').value = cab.year;
        document.getElementById('editCabVehicleColor').value = cab.color;
        document.getElementById('editCabVehicleType').value = cab.type.toLowerCase();
        document.getElementById('editCabCapacity').value = cab.capacity;
        document.getElementById('editCabPlate').value = cab.plate;
        document.getElementById('editCabBaseFare').value = cab.baseFare;
        document.getElementById('editCabPerKm').value = cab.perKm;
        document.getElementById('editCabPerMin').value = cab.perMin;
        document.getElementById('editCabCommission').value = cab.commission;
        document.getElementById('editCabSafetyScore').value = cab.safetyScore;
        document.getElementById('editCabCompliance').value = cab.compliance;
        document.getElementById('editCabStatus').value = cab.status;
        document.getElementById('editCabFeatured').value = cab.featured;
        document.getElementById('editCabAdminNotes').value = cab.adminNotes || '';
    }

// ============================================
// BOOKING MANAGEMENT
// ============================================

    const bookingsData = {
        'BK-2025-001': {
            id: 'BK-2025-001', customer: 'Mohammed Al Rashid', custEmail: 'm.rashid@email.com',
            custPhone: '+966-50-555-6789', custNationality: 'Saudi Arabia',
            serviceType: 'hotel', serviceName: 'Grand Plaza Hotel', serviceId: 'HTL-001',
            bookingDate: 'Mar 15, 2025', checkin: 'Apr 01, 2025', checkout: 'Apr 04, 2025',
            guests: '2 Adults, 1 Child', amount: 2400, discount: 0, amountDisplay: 'SAR 2,400',
            paymentStatus: 'paid', paymentMethod: 'Credit Card', transactionId: 'TXN-88412',
            status: 'confirmed', vendor: 'Luxury Hotels Group', vendorId: 'VND-015',
            commission: 12, commissionAmount: 288, payout: 2112,
            specialRequest: 'High floor room with city view preferred.',
            adminNotes: 'VIP customer. Returning guest - 3rd booking.'
        },
        'BK-2025-002': {
            id: 'BK-2025-002', customer: 'Sara Al Zahrani', custEmail: 's.zahrani@email.com',
            custPhone: '+966-50-555-4321', custNationality: 'Saudi Arabia',
            serviceType: 'package', serviceName: 'Riyadh Heritage Tour', serviceId: 'PKG-001',
            bookingDate: 'Mar 18, 2025', checkin: 'Apr 10, 2025', checkout: 'Apr 15, 2025',
            guests: '2 Adults', amount: 5000, discount: 500, amountDisplay: 'SAR 4,500',
            paymentStatus: 'paid', paymentMethod: 'Bank Transfer', transactionId: 'TXN-88520',
            status: 'confirmed', vendor: 'Saudi Tours Co', vendorId: 'VND-008',
            commission: 15, commissionAmount: 675, payout: 3825,
            specialRequest: 'Private tour guide requested.',
            adminNotes: 'Couple celebrating anniversary. Ensure premium experience.'
        },
        'BK-2025-003': {
            id: 'BK-2025-003', customer: 'Abdullah Al Ghamdi', custEmail: 'a.ghamdi@email.com',
            custPhone: '+966-55-444-7890', custNationality: 'Saudi Arabia',
            serviceType: 'activity', serviceName: 'Desert Safari Adventure', serviceId: 'ACT-001',
            bookingDate: 'Mar 20, 2025', checkin: 'Mar 28, 2025', checkout: 'Mar 28, 2025',
            guests: '4 Adults, 2 Children', amount: 2100, discount: 0, amountDisplay: 'SAR 2,100',
            paymentStatus: 'paid', paymentMethod: 'Digital Wallet', transactionId: 'TXN-88634',
            status: 'completed', vendor: 'Desert Adventures Ltd', vendorId: 'VND-012',
            commission: 15, commissionAmount: 315, payout: 1785,
            specialRequest: 'Vegetarian dinner option for 2 guests.',
            adminNotes: 'Completed successfully. Positive feedback received.'
        },
        'BK-2025-004': {
            id: 'BK-2025-004', customer: 'Fatima Al Harbi', custEmail: 'f.harbi@email.com',
            custPhone: '+966-50-333-2211', custNationality: 'Saudi Arabia',
            serviceType: 'cab', serviceName: 'Airport Transfer - Luxury', serviceId: 'CAB-003',
            bookingDate: 'Mar 22, 2025', checkin: 'Mar 25, 2025', checkout: 'Mar 25, 2025',
            guests: '1 Adult', amount: 350, discount: 0, amountDisplay: 'SAR 350',
            paymentStatus: 'paid', paymentMethod: 'Credit Card', transactionId: 'TXN-88701',
            status: 'completed', vendor: 'Omar Hassan (Driver)', vendorId: 'CAB-003',
            commission: 15, commissionAmount: 52.5, payout: 297.5,
            specialRequest: 'Pick up at Terminal 5, holding name sign.',
            adminNotes: 'Smooth transfer. Driver received 5-star rating.'
        },
        'BK-2025-005': {
            id: 'BK-2025-005', customer: 'James Wilson', custEmail: 'j.wilson@email.com',
            custPhone: '+44-20-7123-4567', custNationality: 'United Kingdom',
            serviceType: 'hotel', serviceName: 'Seaside Resort Jeddah', serviceId: 'HTL-002',
            bookingDate: 'Mar 24, 2025', checkin: 'May 01, 2025', checkout: 'May 08, 2025',
            guests: '2 Adults, 2 Children', amount: 6300, discount: 630, amountDisplay: 'SAR 5,670',
            paymentStatus: 'partial', paymentMethod: 'Credit Card', transactionId: 'TXN-88789',
            status: 'pending', vendor: 'Coastal Hotels Co', vendorId: 'VND-020',
            commission: 12, commissionAmount: 680.4, payout: 4989.6,
            specialRequest: 'Connecting rooms if possible. Kids pool access.',
            adminNotes: 'International guest. Only 50% deposit paid so far.'
        },
        'BK-2025-006': {
            id: 'BK-2025-006', customer: 'Noura Al Mutairi', custEmail: 'n.mutairi@email.com',
            custPhone: '+966-50-777-8899', custNationality: 'Saudi Arabia',
            serviceType: 'restaurant', serviceName: 'The Spice Kitchen', serviceId: 'RST-003',
            bookingDate: 'Mar 25, 2025', checkin: 'Mar 30, 2025', checkout: 'Mar 30, 2025',
            guests: '6 Adults', amount: 1200, discount: 0, amountDisplay: 'SAR 1,200',
            paymentStatus: 'unpaid', paymentMethod: 'Cash', transactionId: '',
            status: 'pending', vendor: 'Gourmet Dining Group', vendorId: 'VND-025',
            commission: 10, commissionAmount: 120, payout: 1080,
            specialRequest: 'Private dining area. Birthday cake arrangement.',
            adminNotes: 'Pay at venue. Birthday celebration - confirm cake order with vendor.'
        },
        'BK-2025-007': {
            id: 'BK-2025-007', customer: 'Hassan Al Dosari', custEmail: 'h.dosari@email.com',
            custPhone: '+966-55-222-3344', custNationality: 'Saudi Arabia',
            serviceType: 'package', serviceName: 'Umrah Premium Package', serviceId: 'PKG-003',
            bookingDate: 'Mar 10, 2025', checkin: 'Mar 20, 2025', checkout: 'Mar 27, 2025',
            guests: '3 Adults', amount: 13500, discount: 675, amountDisplay: 'SAR 12,825',
            paymentStatus: 'refunded', paymentMethod: 'Bank Transfer', transactionId: 'TXN-87925',
            status: 'cancelled', vendor: 'Heritage Explorers', vendorId: 'VND-010',
            commission: 10, commissionAmount: 1282.5, payout: 11542.5,
            specialRequest: 'Wheelchair accessible rooms needed.',
            adminNotes: 'Cancelled due to family emergency. Full refund processed on Mar 18.'
        },
        'BK-2025-008': {
            id: 'BK-2025-008', customer: 'Aisha Bint Ali', custEmail: 'a.ali@email.com',
            custPhone: '+966-50-111-5566', custNationality: 'Saudi Arabia',
            serviceType: 'activity', serviceName: 'Saudi Food Tour', serviceId: 'ACT-005',
            bookingDate: 'Mar 26, 2025', checkin: 'Apr 05, 2025', checkout: 'Apr 05, 2025',
            guests: '2 Adults', amount: 500, discount: 0, amountDisplay: 'SAR 500',
            paymentStatus: 'paid', paymentMethod: 'Debit Card', transactionId: 'TXN-88845',
            status: 'confirmed', vendor: 'Saudi Tours Co', vendorId: 'VND-008',
            commission: 13, commissionAmount: 65, payout: 435,
            specialRequest: 'No seafood due to allergy.',
            adminNotes: 'Allergy noted. Inform food tour guide about seafood restriction.'
        }
    };

    function initializeBookingManagement() {
        populateBookingsTable();
        setupBookingFilters();
        setupBookingActions();
        initializeLogout();
    }

    function populateBookingsTable() {
        const tbody = document.getElementById('bookingsTableBody');
        if (!tbody) return;

        const serviceIcons = {
            hotel: 'fa-hotel', package: 'fa-suitcase-rolling', activity: 'fa-hiking',
            cab: 'fa-taxi', restaurant: 'fa-utensils'
        };

        let html = '';
        for (let id in bookingsData) {
            const booking = bookingsData[id];
            const statusClass = 'status-' + booking.status;
            const paymentClass = 'payment-' + booking.paymentStatus;
            const svcIcon = serviceIcons[booking.serviceType] || 'fa-concierge-bell';

            html += `
                <tr data-booking-id="${booking.id}" data-status="${booking.status}" data-service="${booking.serviceType}" data-payment="${booking.paymentStatus}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(booking.id.replace('BK-2025-', ''))}&background=667eea&color=fff&size=36" alt="${booking.id}">
                            <div>
                                <span class="table-user-name">${booking.id}</span>
                                <span class="table-user-id">${booking.bookingDate}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(booking.customer)}&background=16a085&color=fff&size=36" alt="${booking.customer}">
                            <div>
                                <span class="table-user-name">${booking.customer}</span>
                                <span class="table-user-id">${booking.custPhone}</span>
                            </div>
                        </div>
                    </td>
                    <td><span class="type-badge type-${booking.serviceType}"><i class="fas ${svcIcon}"></i> ${booking.serviceType.charAt(0).toUpperCase() + booking.serviceType.slice(1)}</span></td>
                    <td>${booking.checkin}</td>
                    <td><strong>${booking.amountDisplay}</strong></td>
                    <td><span class="payment-badge ${paymentClass}">${booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}</span></td>
                    <td><span class="status-badge ${statusClass}">${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="booking-view.html?id=${booking.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="booking-edit.html?id=${booking.id}" class="action-btn action-edit" title="Edit Booking"><i class="fas fa-pen"></i></a>
                            <button class="action-btn action-block" title="Cancel"><i class="fas fa-times-circle"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupBookingFilters() {
        const searchInput = document.getElementById('bookingSearchInput');
        const statusFilter = document.getElementById('bookingStatusFilter');
        const serviceFilter = document.getElementById('bookingServiceFilter');
        const paymentFilter = document.getElementById('bookingPaymentFilter');

        if (searchInput) searchInput.addEventListener('input', filterBookings);
        if (statusFilter) statusFilter.addEventListener('change', filterBookings);
        if (serviceFilter) serviceFilter.addEventListener('change', filterBookings);
        if (paymentFilter) paymentFilter.addEventListener('change', filterBookings);
    }

    function filterBookings() {
        const searchTerm = document.getElementById('bookingSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('bookingStatusFilter')?.value || 'all';
        const serviceFilter = document.getElementById('bookingServiceFilter')?.value || 'all';
        const paymentFilter = document.getElementById('bookingPaymentFilter')?.value || 'all';

        const rows = document.querySelectorAll('#bookingsTableBody tr');

        rows.forEach(row => {
            const bkId = row.dataset.bookingId;
            const booking = bookingsData[bkId];
            const matchesSearch = booking.customer.toLowerCase().includes(searchTerm) ||
                                booking.serviceName.toLowerCase().includes(searchTerm) ||
                                bkId.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
            const matchesService = serviceFilter === 'all' || booking.serviceType === serviceFilter;
            const matchesPayment = paymentFilter === 'all' || booking.paymentStatus === paymentFilter;

            row.style.display = (matchesSearch && matchesStatus && matchesService && matchesPayment) ? '' : 'none';
        });
    }

    function setupBookingActions() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.action-block') && e.target.closest('#bookingsTableBody')) {
                const row = e.target.closest('tr');
                const bkId = row.dataset.bookingId;
                if (bookingsData[bkId]) {
                    bookingsData[bkId].status = bookingsData[bkId].status === 'cancelled' ? 'confirmed' : 'cancelled';
                    populateBookingsTable();
                }
            }
        });
    }

    function initializeBookingViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const bookingId = urlParams.get('id');

        if (bookingId && bookingsData[bookingId]) {
            populateBookingView(bookingsData[bookingId]);
        }

        const editLink = document.getElementById('editBookingLink');
        if (editLink && bookingId) {
            editLink.href = 'booking-edit.html?id=' + bookingId;
        }

        initializeLogout();
    }

    function populateBookingView(booking) {
        document.getElementById('viewBookingId').textContent = booking.id;
        document.getElementById('viewBookingTitle').textContent = 'Booking ' + booking.id;
        document.getElementById('viewBookingAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(booking.id.replace('BK-2025-', '')) + '&background=667eea&color=fff&size=120';
        document.getElementById('viewBookingServiceType').textContent = booking.serviceType.charAt(0).toUpperCase() + booking.serviceType.slice(1) + ' Booking';

        const statusEl = document.getElementById('viewBookingStatus');
        statusEl.textContent = booking.status.charAt(0).toUpperCase() + booking.status.slice(1);
        statusEl.className = 'status-badge status-' + booking.status;

        document.getElementById('viewBookingCustomer').textContent = booking.customer;
        document.getElementById('viewBookingService').textContent = booking.serviceName;
        document.getElementById('viewBookingDate').textContent = booking.bookingDate;
        document.getElementById('viewBookingCheckin').textContent = booking.checkin;
        document.getElementById('viewBookingCheckout').textContent = booking.checkout;
        document.getElementById('viewBookingGuests').textContent = booking.guests;
        document.getElementById('viewBookingAmount').textContent = booking.amountDisplay;
        document.getElementById('viewBookingPayment').textContent = booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1) + ' - ' + booking.paymentMethod;

        // Customer info
        document.getElementById('viewBookingCustName').textContent = booking.customer;
        document.getElementById('viewBookingCustEmail').textContent = booking.custEmail;
        document.getElementById('viewBookingCustPhone').textContent = booking.custPhone;
        document.getElementById('viewBookingCustNationality').textContent = booking.custNationality;

        // Service details
        const serviceDetailsEl = document.getElementById('viewBookingServiceDetails');
        if (serviceDetailsEl) {
            serviceDetailsEl.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Service Name</span>
                    <span class="info-value">${booking.serviceName}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Service ID</span>
                    <span class="info-value">#${booking.serviceId}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Check-in / Start</span>
                    <span class="info-value">${booking.checkin}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Check-out / End</span>
                    <span class="info-value">${booking.checkout}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Special Requests</span>
                    <span class="info-value">${booking.specialRequest || 'None'}</span>
                </div>
            `;
        }

        // Payment breakdown
        const paymentEl = document.getElementById('viewBookingPaymentBreakdown');
        if (paymentEl) {
            const net = booking.amount - booking.discount;
            paymentEl.innerHTML = `
                <div class="payment-row">
                    <span>Subtotal</span>
                    <span>SAR ${booking.amount.toLocaleString()}</span>
                </div>
                ${booking.discount > 0 ? `<div class="payment-row discount"><span>Discount</span><span>- SAR ${booking.discount.toLocaleString()}</span></div>` : ''}
                <div class="payment-row total">
                    <span><strong>Total</strong></span>
                    <span><strong>SAR ${net.toLocaleString()}</strong></span>
                </div>
                <div class="payment-row">
                    <span>Payment Method</span>
                    <span>${booking.paymentMethod}</span>
                </div>
                <div class="payment-row">
                    <span>Transaction ID</span>
                    <span>${booking.transactionId || 'N/A'}</span>
                </div>
                <div class="payment-row">
                    <span>Payment Status</span>
                    <span class="payment-badge payment-${booking.paymentStatus}">${booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}</span>
                </div>
            `;
        }

        // Vendor assignment
        document.getElementById('viewBookingVendor').textContent = booking.vendor;
        document.getElementById('viewBookingVendorId').textContent = '#' + booking.vendorId;
        document.getElementById('viewBookingCommission').textContent = booking.commission + '% (SAR ' + booking.commissionAmount + ')';
        document.getElementById('viewBookingPayout').textContent = 'SAR ' + booking.payout.toLocaleString();

        // Timeline
        const timelineEl = document.getElementById('viewBookingTimeline');
        if (timelineEl) {
            timelineEl.innerHTML = `
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-plus-circle"></i></div>
                    <div class="activity-content">
                        <p>Booking created by ${booking.customer}</p>
                        <span class="activity-time">${booking.bookingDate}</span>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-credit-card"></i></div>
                    <div class="activity-content">
                        <p>Payment ${booking.paymentStatus} via ${booking.paymentMethod}</p>
                        <span class="activity-time">${booking.bookingDate}</span>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-check-circle"></i></div>
                    <div class="activity-content">
                        <p>Booking ${booking.status} - Vendor notified</p>
                        <span class="activity-time">${booking.bookingDate}</span>
                    </div>
                </div>
            `;
        }
    }

    function initializeBookingEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const bookingId = urlParams.get('id');

        if (bookingId && bookingsData[bookingId]) {
            populateBookingEdit(bookingsData[bookingId]);
        }

        const form = document.getElementById('bookingEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() {
                    window.location.href = 'booking-view.html?id=' + bookingId;
                }, 1000);
            });
        }

        initializeLogout();
    }

    function populateBookingEdit(booking) {
        document.getElementById('editBookingDisplayId').textContent = booking.id;
        document.getElementById('editBookingServiceLabel').textContent = booking.serviceType.charAt(0).toUpperCase() + booking.serviceType.slice(1) + ' Booking';
        document.getElementById('editBookingStatus').value = booking.status;
        document.getElementById('editBookingPaymentStatus').value = booking.paymentStatus;
        document.getElementById('editBookingCustName').value = booking.customer;
        document.getElementById('editBookingCustEmail').value = booking.custEmail;
        document.getElementById('editBookingCustPhone').value = booking.custPhone;
        document.getElementById('editBookingGuests').value = booking.guests;
        document.getElementById('editBookingServiceType').value = booking.serviceType;
        document.getElementById('editBookingServiceName').value = booking.serviceName;
        document.getElementById('editBookingAmount').value = booking.amount;
        document.getElementById('editBookingDiscount').value = booking.discount || 0;
        document.getElementById('editBookingPaymentMethod').value = booking.paymentMethod.toLowerCase().replace(' ', '-');
        document.getElementById('editBookingTransactionId').value = booking.transactionId || '';
        document.getElementById('editBookingVendor').value = booking.vendor;
        document.getElementById('editBookingCommission').value = booking.commission;
        document.getElementById('editBookingSpecialRequest').value = booking.specialRequest || '';
        document.getElementById('editBookingAdminNotes').value = booking.adminNotes || '';
    }

// ============================================
// SUBSCRIPTION MANAGEMENT
// ============================================

    const subscriptionsData = {
        'SUB-001': {
            id: 'SUB-001', planName: 'Starter', type: 'vendor', price: 99, billing: 'monthly',
            status: 'active', featured: 'no', subscribers: 420, revenue: 41580,
            revenueDisplay: 'SAR 41,580', renewal: 88, churn: 5.2,
            description: 'Basic plan for new vendors to list their services with essential features.',
            maxListings: 5, maxPhotos: 10, prioritySupport: 'no', analytics: 'no',
            featuredPlacement: 'no', commissionRate: 18, trialDays: 14, autoRenew: 'yes',
            gracePeriod: 7, cancellationPolicy: 'end-of-period', created: 'Jan 10, 2025',
            adminNotes: 'Entry-level plan. Good conversion from trial.'
        },
        'SUB-002': {
            id: 'SUB-002', planName: 'Professional', type: 'vendor', price: 299, billing: 'monthly',
            status: 'active', featured: 'yes', subscribers: 245, revenue: 73255,
            revenueDisplay: 'SAR 73,255', renewal: 92, churn: 3.8,
            description: 'Most popular plan for established vendors with advanced tools and priority support.',
            maxListings: 25, maxPhotos: 50, prioritySupport: 'yes', analytics: 'yes',
            featuredPlacement: 'yes', commissionRate: 15, trialDays: 7, autoRenew: 'yes',
            gracePeriod: 14, cancellationPolicy: 'end-of-period', created: 'Jan 15, 2025',
            adminNotes: 'Best seller. Recommend for mid-tier vendors.'
        },
        'SUB-003': {
            id: 'SUB-003', planName: 'Enterprise', type: 'vendor', price: 799, billing: 'monthly',
            status: 'active', featured: 'yes', subscribers: 68, revenue: 54332,
            revenueDisplay: 'SAR 54,332', renewal: 95, churn: 2.1,
            description: 'Premium plan for large vendors with unlimited listings, dedicated support, and custom features.',
            maxListings: -1, maxPhotos: -1, prioritySupport: 'yes', analytics: 'yes',
            featuredPlacement: 'yes', commissionRate: 10, trialDays: 0, autoRenew: 'yes',
            gracePeriod: 30, cancellationPolicy: 'prorated', created: 'Jan 15, 2025',
            adminNotes: 'Premium tier. Dedicated account manager assigned.'
        },
        'SUB-004': {
            id: 'SUB-004', planName: 'Provider Basic', type: 'provider', price: 149, billing: 'monthly',
            status: 'active', featured: 'no', subscribers: 180, revenue: 26820,
            revenueDisplay: 'SAR 26,820', renewal: 85, churn: 6.5,
            description: 'Essential plan for activity operators and tour providers to get started.',
            maxListings: 10, maxPhotos: 20, prioritySupport: 'no', analytics: 'no',
            featuredPlacement: 'no', commissionRate: 17, trialDays: 14, autoRenew: 'yes',
            gracePeriod: 7, cancellationPolicy: 'end-of-period', created: 'Feb 01, 2025',
            adminNotes: 'Good entry point for tour operators.'
        },
        'SUB-005': {
            id: 'SUB-005', planName: 'Provider Pro', type: 'provider', price: 399, billing: 'monthly',
            status: 'active', featured: 'yes', subscribers: 112, revenue: 44688,
            revenueDisplay: 'SAR 44,688', renewal: 90, churn: 4.0,
            description: 'Advanced tools for professional tour operators and activity providers.',
            maxListings: 50, maxPhotos: 100, prioritySupport: 'yes', analytics: 'yes',
            featuredPlacement: 'yes', commissionRate: 12, trialDays: 7, autoRenew: 'yes',
            gracePeriod: 14, cancellationPolicy: 'prorated', created: 'Feb 01, 2025',
            adminNotes: 'Popular among established tour operators.'
        },
        'SUB-006': {
            id: 'SUB-006', planName: 'Premium Annual', type: 'premium', price: 2999, billing: 'yearly',
            status: 'active', featured: 'yes', subscribers: 35, revenue: 104965,
            revenueDisplay: 'SAR 104,965', renewal: 96, churn: 1.5,
            description: 'Annual premium plan with maximum savings - all features included with lowest commission rate.',
            maxListings: -1, maxPhotos: -1, prioritySupport: 'yes', analytics: 'yes',
            featuredPlacement: 'yes', commissionRate: 8, trialDays: 0, autoRenew: 'yes',
            gracePeriod: 30, cancellationPolicy: 'prorated', created: 'Jan 20, 2025',
            adminNotes: 'Best value plan. Focus upselling to this from monthly plans.'
        },
        'SUB-007': {
            id: 'SUB-007', planName: 'Quarterly Plus', type: 'vendor', price: 749, billing: 'quarterly',
            status: 'inactive', featured: 'no', subscribers: 0, revenue: 0,
            revenueDisplay: 'SAR 0', renewal: 0, churn: 0,
            description: 'Quarterly billing option with moderate savings. Currently paused for review.',
            maxListings: 25, maxPhotos: 50, prioritySupport: 'yes', analytics: 'yes',
            featuredPlacement: 'no', commissionRate: 14, trialDays: 7, autoRenew: 'yes',
            gracePeriod: 14, cancellationPolicy: 'end-of-period', created: 'Mar 01, 2025',
            adminNotes: 'Temporarily deactivated. Low adoption rate - consider repricing.'
        },
        'SUB-008': {
            id: 'SUB-008', planName: 'Legacy Basic', type: 'vendor', price: 49, billing: 'monthly',
            status: 'archived', featured: 'no', subscribers: 185, revenue: 9065,
            revenueDisplay: 'SAR 9,065', renewal: 75, churn: 12,
            description: 'Original basic plan - grandfathered for existing subscribers. No new sign-ups.',
            maxListings: 3, maxPhotos: 5, prioritySupport: 'no', analytics: 'no',
            featuredPlacement: 'no', commissionRate: 20, trialDays: 30, autoRenew: 'yes',
            gracePeriod: 7, cancellationPolicy: 'immediate', created: 'Nov 15, 2024',
            adminNotes: 'Legacy plan. Encourage migration to Starter or Professional.'
        }
    };

    function initializeSubscriptionManagement() {
        populateSubscriptionsTable();
        setupSubscriptionFilters();
        setupSubscriptionActions();
        initializeLogout();
    }

    function populateSubscriptionsTable() {
        const tbody = document.getElementById('subscriptionsTableBody');
        if (!tbody) return;

        let html = '';
        for (let id in subscriptionsData) {
            const sub = subscriptionsData[id];
            const statusClass = 'status-' + sub.status;
            const typeClass = 'type-' + sub.type;

            html += `
                <tr data-sub-id="${sub.id}" data-status="${sub.status}" data-type="${sub.type}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(sub.planName)}&background=8e44ad&color=fff&size=36" alt="${sub.planName}">
                            <div>
                                <span class="table-user-name">${sub.planName}</span>
                                <span class="table-user-id">${sub.id}</span>
                            </div>
                        </div>
                    </td>
                    <td><span class="type-badge ${typeClass}"><i class="fas fa-tag"></i> ${sub.type.charAt(0).toUpperCase() + sub.type.slice(1)}</span></td>
                    <td><strong>SAR ${sub.price.toLocaleString()}</strong></td>
                    <td>${sub.billing.charAt(0).toUpperCase() + sub.billing.slice(1)}</td>
                    <td>${sub.subscribers.toLocaleString()}</td>
                    <td>${sub.revenueDisplay}</td>
                    <td><span class="status-badge ${statusClass}">${sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="subscription-view.html?id=${sub.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="subscription-edit.html?id=${sub.id}" class="action-btn action-edit" title="Edit Plan"><i class="fas fa-pen"></i></a>
                            <button class="action-btn action-block" title="Toggle Status"><i class="fas fa-toggle-${sub.status === 'active' ? 'on' : 'off'}"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupSubscriptionFilters() {
        const searchInput = document.getElementById('subscriptionSearchInput');
        const statusFilter = document.getElementById('subscriptionStatusFilter');
        const typeFilter = document.getElementById('subscriptionTypeFilter');

        if (searchInput) searchInput.addEventListener('input', filterSubscriptions);
        if (statusFilter) statusFilter.addEventListener('change', filterSubscriptions);
        if (typeFilter) typeFilter.addEventListener('change', filterSubscriptions);
    }

    function filterSubscriptions() {
        const searchTerm = document.getElementById('subscriptionSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('subscriptionStatusFilter')?.value || 'all';
        const typeFilter = document.getElementById('subscriptionTypeFilter')?.value || 'all';

        const rows = document.querySelectorAll('#subscriptionsTableBody tr');
        rows.forEach(row => {
            const subId = row.dataset.subId;
            const sub = subscriptionsData[subId];
            const matchesSearch = sub.planName.toLowerCase().includes(searchTerm) || subId.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || sub.status === statusFilter;
            const matchesType = typeFilter === 'all' || sub.type === typeFilter;
            row.style.display = (matchesSearch && matchesStatus && matchesType) ? '' : 'none';
        });
    }

    function setupSubscriptionActions() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.action-block') && e.target.closest('#subscriptionsTableBody')) {
                const row = e.target.closest('tr');
                const subId = row.dataset.subId;
                if (subscriptionsData[subId]) {
                    subscriptionsData[subId].status = subscriptionsData[subId].status === 'active' ? 'inactive' : 'active';
                    populateSubscriptionsTable();
                }
            }
        });
    }

    function initializeSubscriptionViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const subId = urlParams.get('id');

        if (subId && subscriptionsData[subId]) {
            populateSubscriptionView(subscriptionsData[subId]);
        }

        const editLink = document.getElementById('editSubLink');
        if (editLink && subId) {
            editLink.href = 'subscription-edit.html?id=' + subId;
        }

        initializeLogout();
    }

    function populateSubscriptionView(sub) {
        document.getElementById('viewSubPlanName').textContent = sub.planName;
        document.getElementById('viewSubId').textContent = '#' + sub.id;
        document.getElementById('viewSubTitle').textContent = sub.planName + ' Plan';
        document.getElementById('viewSubAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(sub.planName) + '&background=8e44ad&color=fff&size=120';

        const statusEl = document.getElementById('viewSubStatus');
        statusEl.textContent = sub.status.charAt(0).toUpperCase() + sub.status.slice(1);
        statusEl.className = 'status-badge status-' + sub.status;

        document.getElementById('viewSubType').textContent = sub.type.charAt(0).toUpperCase() + sub.type.slice(1);
        document.getElementById('viewSubPrice').textContent = 'SAR ' + sub.price.toLocaleString() + '/' + sub.billing;
        document.getElementById('viewSubBilling').textContent = sub.billing.charAt(0).toUpperCase() + sub.billing.slice(1);
        document.getElementById('viewSubSubscribers').textContent = sub.subscribers.toLocaleString();
        document.getElementById('viewSubRevenue').textContent = sub.revenueDisplay;
        document.getElementById('viewSubCreated').textContent = sub.created;
        document.getElementById('viewSubRenewal').textContent = sub.renewal + '%';
        document.getElementById('viewSubChurn').textContent = sub.churn + '%';

        // Features
        const featuresEl = document.getElementById('viewSubFeatures');
        if (featuresEl) {
            featuresEl.innerHTML = `
                <div class="inclusion-item ${sub.maxListings !== 0 ? 'included' : 'excluded'}">
                    <i class="fas fa-${sub.maxListings !== 0 ? 'check' : 'times'}"></i>
                    <span>Max Listings: ${sub.maxListings === -1 ? 'Unlimited' : sub.maxListings}</span>
                </div>
                <div class="inclusion-item ${sub.maxPhotos !== 0 ? 'included' : 'excluded'}">
                    <i class="fas fa-${sub.maxPhotos !== 0 ? 'check' : 'times'}"></i>
                    <span>Max Photos: ${sub.maxPhotos === -1 ? 'Unlimited' : sub.maxPhotos}</span>
                </div>
                <div class="inclusion-item ${sub.prioritySupport === 'yes' ? 'included' : 'excluded'}">
                    <i class="fas fa-${sub.prioritySupport === 'yes' ? 'check' : 'times'}"></i>
                    <span>Priority Support</span>
                </div>
                <div class="inclusion-item ${sub.analytics === 'yes' ? 'included' : 'excluded'}">
                    <i class="fas fa-${sub.analytics === 'yes' ? 'check' : 'times'}"></i>
                    <span>Advanced Analytics</span>
                </div>
                <div class="inclusion-item ${sub.featuredPlacement === 'yes' ? 'included' : 'excluded'}">
                    <i class="fas fa-${sub.featuredPlacement === 'yes' ? 'check' : 'times'}"></i>
                    <span>Featured Placement</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Commission Rate</span>
                    <span class="info-value">${sub.commissionRate}%</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Trial Period</span>
                    <span class="info-value">${sub.trialDays > 0 ? sub.trialDays + ' Days' : 'No Trial'}</span>
                </div>
            `;
        }

        // Analytics
        const analyticsEl = document.getElementById('viewSubAnalytics');
        if (analyticsEl) {
            analyticsEl.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Total Subscribers</span>
                    <span class="info-value">${sub.subscribers.toLocaleString()}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Monthly Revenue</span>
                    <span class="info-value">${sub.revenueDisplay}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Renewal Rate</span>
                    <span class="info-value">${sub.renewal}%</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Churn Rate</span>
                    <span class="info-value">${sub.churn}%</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Avg Revenue per User</span>
                    <span class="info-value">SAR ${sub.subscribers > 0 ? Math.round(sub.revenue / sub.subscribers).toLocaleString() : '0'}</span>
                </div>
            `;
        }

        // Recent subscribers
        const recentEl = document.getElementById('viewSubRecentSubscribers');
        if (recentEl) {
            recentEl.innerHTML = `
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-user-plus"></i></div>
                    <div class="activity-content">
                        <p>New subscriber: Al Firdaus Hotels joined ${sub.planName}</p>
                        <span class="activity-time">2 hours ago</span>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-user-plus"></i></div>
                    <div class="activity-content">
                        <p>New subscriber: Desert Tours SA joined ${sub.planName}</p>
                        <span class="activity-time">1 day ago</span>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-redo"></i></div>
                    <div class="activity-content">
                        <p>Renewal: Coastal Resorts renewed ${sub.planName}</p>
                        <span class="activity-time">3 days ago</span>
                    </div>
                </div>
            `;
        }

        // Pricing history
        const historyEl = document.getElementById('viewSubPricingHistory');
        if (historyEl) {
            historyEl.innerHTML = `
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-tag"></i></div>
                    <div class="activity-content">
                        <p>Current price: SAR ${sub.price.toLocaleString()}/${sub.billing}</p>
                        <span class="activity-time">${sub.created}</span>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-plus-circle"></i></div>
                    <div class="activity-content">
                        <p>Plan created</p>
                        <span class="activity-time">${sub.created}</span>
                    </div>
                </div>
            `;
        }
    }

    function initializeSubscriptionEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const subId = urlParams.get('id');

        if (subId && subscriptionsData[subId]) {
            populateSubscriptionEdit(subscriptionsData[subId]);
        }

        const form = document.getElementById('subscriptionEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() {
                    window.location.href = 'subscription-view.html?id=' + subId;
                }, 1000);
            });
        }

        initializeLogout();
    }

    function populateSubscriptionEdit(sub) {
        document.getElementById('editSubDisplayName').textContent = sub.planName;
        document.getElementById('editSubId').textContent = '#' + sub.id;
        document.getElementById('editSubStatus').value = sub.status;
        document.getElementById('editSubFeatured').value = sub.featured;
        document.getElementById('editSubPlanName').value = sub.planName;
        document.getElementById('editSubType').value = sub.type;
        document.getElementById('editSubPrice').value = sub.price;
        document.getElementById('editSubBilling').value = sub.billing;
        document.getElementById('editSubDescription').value = sub.description || '';
        document.getElementById('editSubMaxListings').value = sub.maxListings === -1 ? 9999 : sub.maxListings;
        document.getElementById('editSubMaxPhotos').value = sub.maxPhotos === -1 ? 9999 : sub.maxPhotos;
        document.getElementById('editSubPrioritySupport').value = sub.prioritySupport;
        document.getElementById('editSubAnalytics').value = sub.analytics;
        document.getElementById('editSubFeaturedPlacement').value = sub.featuredPlacement;
        document.getElementById('editSubCommissionRate').value = sub.commissionRate;
        document.getElementById('editSubTrialDays').value = sub.trialDays;
        document.getElementById('editSubAutoRenew').value = sub.autoRenew;
        document.getElementById('editSubGracePeriod').value = sub.gracePeriod;
        document.getElementById('editSubCancellationPolicy').value = sub.cancellationPolicy;
        document.getElementById('editSubAdminNotes').value = sub.adminNotes || '';
    }

// ============================================
// PAYOUT MANAGEMENT
// ============================================

    const payoutsData = {
        'PAY-2025-001': {
            id: 'PAY-2025-001', vendor: 'Luxury Hotels Group', vendorId: 'VND-015',
            vendorType: 'hotel', period: 'Feb 2025',
            gross: 45000, commissionRate: 12, commissionAmount: 5400, net: 39600,
            adjustment: 0, adjustmentReason: '',
            status: 'completed', priority: 'normal', method: 'bank-transfer', ref: 'REF-88421',
            payoutDate: 'Mar 01, 2025',
            bankName: 'Al Rajhi Bank', accountHolder: 'Luxury Hotels Group LLC',
            accountNum: '****4521', iban: 'SA03 8000 0000 6080 1016 4521',
            bookings: ['BK-2025-001', 'BK-2025-005'],
            adminNotes: 'Processed on schedule. All bookings verified.'
        },
        'PAY-2025-002': {
            id: 'PAY-2025-002', vendor: 'Saudi Tours Co', vendorId: 'VND-008',
            vendorType: 'package', period: 'Feb 2025',
            gross: 32000, commissionRate: 15, commissionAmount: 4800, net: 27200,
            adjustment: -500, adjustmentReason: 'Refund adjustment for cancelled booking',
            status: 'completed', priority: 'normal', method: 'bank-transfer', ref: 'REF-88430',
            payoutDate: 'Mar 01, 2025',
            bankName: 'National Commercial Bank', accountHolder: 'Saudi Tours Co Ltd',
            accountNum: '****7834', iban: 'SA44 1000 0000 0058 3200 7834',
            bookings: ['BK-2025-002', 'BK-2025-008'],
            adminNotes: 'Adjustment for BK-2025-007 cancellation refund deducted.'
        },
        'PAY-2025-003': {
            id: 'PAY-2025-003', vendor: 'Desert Adventures Ltd', vendorId: 'VND-012',
            vendorType: 'activity', period: 'Feb 2025',
            gross: 18500, commissionRate: 15, commissionAmount: 2775, net: 15725,
            adjustment: 0, adjustmentReason: '',
            status: 'completed', priority: 'normal', method: 'bank-transfer', ref: 'REF-88445',
            payoutDate: 'Mar 02, 2025',
            bankName: 'Riyad Bank', accountHolder: 'Desert Adventures Ltd',
            accountNum: '****9012', iban: 'SA67 2000 0000 0012 3456 9012',
            bookings: ['BK-2025-003'],
            adminNotes: 'Clean payout. All activities completed successfully.'
        },
        'PAY-2025-004': {
            id: 'PAY-2025-004', vendor: 'Omar Hassan (Driver)', vendorId: 'CAB-003',
            vendorType: 'cab', period: 'Feb 2025',
            gross: 12800, commissionRate: 15, commissionAmount: 1920, net: 10880,
            adjustment: 0, adjustmentReason: '',
            status: 'completed', priority: 'normal', method: 'bank-transfer', ref: 'REF-88460',
            payoutDate: 'Mar 03, 2025',
            bankName: 'Al Rajhi Bank', accountHolder: 'Omar Hassan',
            accountNum: '****3456', iban: 'SA80 8000 0000 1234 5678 3456',
            bookings: ['BK-2025-004'],
            adminNotes: 'Driver payout - includes tips and bonus.'
        },
        'PAY-2025-005': {
            id: 'PAY-2025-005', vendor: 'Coastal Hotels Co', vendorId: 'VND-020',
            vendorType: 'hotel', period: 'Feb 2025',
            gross: 28000, commissionRate: 12, commissionAmount: 3360, net: 24640,
            adjustment: 0, adjustmentReason: '',
            status: 'pending', priority: 'high', method: 'bank-transfer', ref: '',
            payoutDate: '',
            bankName: 'Saudi British Bank', accountHolder: 'Coastal Hotels Co',
            accountNum: '****6789', iban: 'SA15 4500 0000 6789 0123 6789',
            bookings: ['BK-2025-005'],
            adminNotes: 'Pending - awaiting partial payment completion from guest.'
        },
        'PAY-2025-006': {
            id: 'PAY-2025-006', vendor: 'Gourmet Dining Group', vendorId: 'VND-025',
            vendorType: 'restaurant', period: 'Feb 2025',
            gross: 15200, commissionRate: 10, commissionAmount: 1520, net: 13680,
            adjustment: 200, adjustmentReason: 'Bonus for high customer satisfaction',
            status: 'processing', priority: 'normal', method: 'bank-transfer', ref: 'REF-88501',
            payoutDate: '',
            bankName: 'Banque Saudi Fransi', accountHolder: 'Gourmet Dining Group LLC',
            accountNum: '****2345', iban: 'SA22 5500 0000 9876 5432 2345',
            bookings: ['BK-2025-006'],
            adminNotes: 'Processing. Includes satisfaction bonus of SAR 200.'
        },
        'PAY-2025-007': {
            id: 'PAY-2025-007', vendor: 'Heritage Explorers', vendorId: 'VND-010',
            vendorType: 'package', period: 'Feb 2025',
            gross: 0, commissionRate: 10, commissionAmount: 0, net: 0,
            adjustment: -12825, adjustmentReason: 'Full refund for cancelled booking BK-2025-007',
            status: 'on-hold', priority: 'urgent', method: 'bank-transfer', ref: '',
            payoutDate: '',
            bankName: 'Alinma Bank', accountHolder: 'Heritage Explorers Co',
            accountNum: '****8901', iban: 'SA33 0500 0000 8765 4321 8901',
            bookings: ['BK-2025-007'],
            adminNotes: 'On hold - refund clawback pending. Review with finance team.'
        },
        'PAY-2025-008': {
            id: 'PAY-2025-008', vendor: 'Al Fahad Transport', vendorId: 'CAB-001',
            vendorType: 'cab', period: 'Feb 2025',
            gross: 8500, commissionRate: 18, commissionAmount: 1530, net: 6970,
            adjustment: 0, adjustmentReason: '',
            status: 'failed', priority: 'high', method: 'bank-transfer', ref: 'REF-88520',
            payoutDate: '',
            bankName: 'Al Rajhi Bank', accountHolder: 'Ahmed Al Fahad',
            accountNum: '****5678', iban: 'SA99 8000 0000 2468 1357 5678',
            bookings: [],
            adminNotes: 'Failed - bank account details mismatch. Contact vendor to verify IBAN.'
        }
    };

    function initializePayoutManagement() {
        populatePayoutsTable();
        setupPayoutFilters();
        setupPayoutActions();
        initializeLogout();
    }

    function populatePayoutsTable() {
        const tbody = document.getElementById('payoutsTableBody');
        if (!tbody) return;

        const typeIcons = {
            hotel: 'fa-hotel', restaurant: 'fa-utensils', package: 'fa-suitcase-rolling',
            activity: 'fa-hiking', cab: 'fa-taxi'
        };

        let html = '';
        for (let id in payoutsData) {
            const payout = payoutsData[id];
            const statusClass = 'status-' + payout.status.replace(' ', '-');
            const typeIcon = typeIcons[payout.vendorType] || 'fa-store';

            html += `
                <tr data-payout-id="${payout.id}" data-status="${payout.status}" data-type="${payout.vendorType}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(payout.id.replace('PAY-2025-', ''))}&background=27ae60&color=fff&size=36" alt="${payout.id}">
                            <div>
                                <span class="table-user-name">${payout.id}</span>
                                <span class="table-user-id">${payout.period}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(payout.vendor)}&background=2c3e50&color=fff&size=36" alt="${payout.vendor}">
                            <div>
                                <span class="table-user-name">${payout.vendor}</span>
                                <span class="table-user-id">#${payout.vendorId}</span>
                            </div>
                        </div>
                    </td>
                    <td><span class="type-badge type-${payout.vendorType}"><i class="fas ${typeIcon}"></i> ${payout.vendorType.charAt(0).toUpperCase() + payout.vendorType.slice(1)}</span></td>
                    <td>SAR ${payout.gross.toLocaleString()}</td>
                    <td>SAR ${payout.commissionAmount.toLocaleString()}</td>
                    <td><strong>SAR ${payout.net.toLocaleString()}</strong></td>
                    <td><span class="status-badge ${statusClass}">${payout.status.charAt(0).toUpperCase() + payout.status.slice(1).replace('-', ' ')}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="payout-view.html?id=${payout.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="payout-edit.html?id=${payout.id}" class="action-btn action-edit" title="Edit Payout"><i class="fas fa-pen"></i></a>
                            <button class="action-btn action-block" title="Hold/Release"><i class="fas fa-${payout.status === 'on-hold' ? 'play' : 'pause'}"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupPayoutFilters() {
        const searchInput = document.getElementById('payoutSearchInput');
        const statusFilter = document.getElementById('payoutStatusFilter');
        const typeFilter = document.getElementById('payoutVendorTypeFilter');

        if (searchInput) searchInput.addEventListener('input', filterPayouts);
        if (statusFilter) statusFilter.addEventListener('change', filterPayouts);
        if (typeFilter) typeFilter.addEventListener('change', filterPayouts);
    }

    function filterPayouts() {
        const searchTerm = document.getElementById('payoutSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('payoutStatusFilter')?.value || 'all';
        const typeFilter = document.getElementById('payoutVendorTypeFilter')?.value || 'all';

        const rows = document.querySelectorAll('#payoutsTableBody tr');
        rows.forEach(row => {
            const payId = row.dataset.payoutId;
            const payout = payoutsData[payId];
            const matchesSearch = payout.vendor.toLowerCase().includes(searchTerm) || payId.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || payout.status === statusFilter;
            const matchesType = typeFilter === 'all' || payout.vendorType === typeFilter;
            row.style.display = (matchesSearch && matchesStatus && matchesType) ? '' : 'none';
        });
    }

    function setupPayoutActions() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.action-block') && e.target.closest('#payoutsTableBody')) {
                const row = e.target.closest('tr');
                const payId = row.dataset.payoutId;
                if (payoutsData[payId]) {
                    payoutsData[payId].status = payoutsData[payId].status === 'on-hold' ? 'pending' : 'on-hold';
                    populatePayoutsTable();
                }
            }
        });
    }

    function initializePayoutViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const payoutId = urlParams.get('id');

        if (payoutId && payoutsData[payoutId]) {
            populatePayoutView(payoutsData[payoutId]);
        }

        const editLink = document.getElementById('editPayoutLink');
        if (editLink && payoutId) {
            editLink.href = 'payout-edit.html?id=' + payoutId;
        }

        initializeLogout();
    }

    function populatePayoutView(payout) {
        document.getElementById('viewPayoutId').textContent = payout.id;
        document.getElementById('viewPayoutTitle').textContent = 'Payout ' + payout.id;
        document.getElementById('viewPayoutAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(payout.id.replace('PAY-2025-', '')) + '&background=27ae60&color=fff&size=120';
        document.getElementById('viewPayoutVendorType').textContent = payout.vendorType.charAt(0).toUpperCase() + payout.vendorType.slice(1) + ' Vendor';

        const statusEl = document.getElementById('viewPayoutStatus');
        statusEl.textContent = payout.status.charAt(0).toUpperCase() + payout.status.slice(1).replace('-', ' ');
        statusEl.className = 'status-badge status-' + payout.status.replace(' ', '-');

        document.getElementById('viewPayoutVendor').textContent = payout.vendor;
        document.getElementById('viewPayoutVendorId').textContent = '#' + payout.vendorId;
        document.getElementById('viewPayoutGross').textContent = 'SAR ' + payout.gross.toLocaleString();
        document.getElementById('viewPayoutCommission').textContent = payout.commissionRate + '% (SAR ' + payout.commissionAmount.toLocaleString() + ')';
        document.getElementById('viewPayoutNet').textContent = 'SAR ' + payout.net.toLocaleString();
        document.getElementById('viewPayoutDate').textContent = payout.payoutDate || 'Pending';
        document.getElementById('viewPayoutBank').textContent = payout.bankName + ' ' + payout.accountNum;
        document.getElementById('viewPayoutRef').textContent = payout.ref || 'Pending';

        // Breakdown
        const breakdownEl = document.getElementById('viewPayoutBreakdown');
        if (breakdownEl) {
            breakdownEl.innerHTML = `
                <div class="payment-row">
                    <span>Gross Revenue</span>
                    <span>SAR ${payout.gross.toLocaleString()}</span>
                </div>
                <div class="payment-row">
                    <span>Commission (${payout.commissionRate}%)</span>
                    <span>- SAR ${payout.commissionAmount.toLocaleString()}</span>
                </div>
                ${payout.adjustment !== 0 ? `<div class="payment-row ${payout.adjustment < 0 ? 'discount' : ''}">
                    <span>Adjustment</span>
                    <span>${payout.adjustment > 0 ? '+' : ''} SAR ${payout.adjustment.toLocaleString()}</span>
                </div>` : ''}
                <div class="payment-row total">
                    <span><strong>Net Payout</strong></span>
                    <span><strong>SAR ${(payout.net + payout.adjustment).toLocaleString()}</strong></span>
                </div>
                <div class="payment-row">
                    <span>Payment Method</span>
                    <span>${payout.method.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                </div>
                <div class="payment-row">
                    <span>Reference</span>
                    <span>${payout.ref || 'Pending'}</span>
                </div>
            `;
        }

        // Booking references
        const bookingsEl = document.getElementById('viewPayoutBookings');
        if (bookingsEl) {
            if (payout.bookings.length > 0) {
                bookingsEl.innerHTML = payout.bookings.map(bkId => `
                    <div class="info-item">
                        <span class="info-label"><i class="fas fa-link"></i> ${bkId}</span>
                        <span class="info-value"><a href="booking-view.html?id=${bkId}" class="btn btn-outline" style="padding: 4px 12px; font-size: 12px;">View</a></span>
                    </div>
                `).join('');
            } else {
                bookingsEl.innerHTML = '<p style="color: var(--text-muted); font-size: 14px;">No bookings linked to this payout.</p>';
            }
        }

        // Banking
        document.getElementById('viewPayoutBankName').textContent = payout.bankName;
        document.getElementById('viewPayoutAccountHolder').textContent = payout.accountHolder;
        document.getElementById('viewPayoutAccountNum').textContent = payout.accountNum;
        document.getElementById('viewPayoutIBAN').textContent = payout.iban;

        // Timeline
        const timelineEl = document.getElementById('viewPayoutTimeline');
        if (timelineEl) {
            timelineEl.innerHTML = `
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-file-invoice"></i></div>
                    <div class="activity-content">
                        <p>Payout generated for ${payout.period}</p>
                        <span class="activity-time">${payout.payoutDate || 'Pending'}</span>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-calculator"></i></div>
                    <div class="activity-content">
                        <p>Commission calculated: ${payout.commissionRate}% = SAR ${payout.commissionAmount.toLocaleString()}</p>
                        <span class="activity-time">${payout.payoutDate || 'Pending'}</span>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-${payout.status === 'completed' ? 'check-circle' : 'clock'}"></i></div>
                    <div class="activity-content">
                        <p>Status: ${payout.status.charAt(0).toUpperCase() + payout.status.slice(1).replace('-', ' ')}</p>
                        <span class="activity-time">${payout.payoutDate || 'Awaiting processing'}</span>
                    </div>
                </div>
            `;
        }
    }

    function initializePayoutEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const payoutId = urlParams.get('id');

        if (payoutId && payoutsData[payoutId]) {
            populatePayoutEdit(payoutsData[payoutId]);
        }

        const form = document.getElementById('payoutEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() {
                    window.location.href = 'payout-view.html?id=' + payoutId;
                }, 1000);
            });
        }

        initializeLogout();
    }

    function populatePayoutEdit(payout) {
        document.getElementById('editPayoutDisplayId').textContent = payout.id;
        document.getElementById('editPayoutVendorLabel').textContent = payout.vendorType.charAt(0).toUpperCase() + payout.vendorType.slice(1) + ' Vendor';
        document.getElementById('editPayoutStatus').value = payout.status;
        document.getElementById('editPayoutPriority').value = payout.priority;
        document.getElementById('editPayoutVendor').value = payout.vendor;
        document.getElementById('editPayoutVendorId').value = payout.vendorId;
        document.getElementById('editPayoutVendorType').value = payout.vendorType.charAt(0).toUpperCase() + payout.vendorType.slice(1);
        document.getElementById('editPayoutPeriod').value = payout.period;
        document.getElementById('editPayoutGross').value = payout.gross;
        document.getElementById('editPayoutCommissionRate').value = payout.commissionRate;
        document.getElementById('editPayoutCommissionAmount').value = payout.commissionAmount;
        document.getElementById('editPayoutNet').value = payout.net;
        document.getElementById('editPayoutAdjustment').value = payout.adjustment;
        document.getElementById('editPayoutAdjustmentReason').value = payout.adjustmentReason || '';
        document.getElementById('editPayoutMethod').value = payout.method;
        document.getElementById('editPayoutRef').value = payout.ref || '';
        document.getElementById('editPayoutAdminNotes').value = payout.adminNotes || '';
    }

// ============================================
// ADS MANAGEMENT
// ============================================

    const adsData = {
        'AD-001': {
            id: 'AD-001', name: 'Premium Hotel Banner', vendor: 'Luxury Hotels Group',
            vendorId: 'VND-015', vendorEmail: 'marketing@luxuryhotels.com', vendorPhone: '+966-11-555-1234',
            type: 'banner', placement: 'homepage-top', status: 'active',
            startDate: 'Mar 01, 2025', endDate: 'Mar 31, 2025', duration: 30, dailyHours: 24,
            rate: 15, budget: 10800, spent: 8640, costDisplay: 'SAR 10,800',
            impressions: 245000, clicks: 12250, ctr: 5.0, conversions: 612,
            description: 'Full-width banner promoting luxury hotel stays in Riyadh.',
            paymentStatus: 'paid', discount: 0, targetRegion: 'riyadh', targetAudience: 'premium',
            adminNotes: 'High-performing campaign. Vendor requested extension.'
        },
        'AD-002': {
            id: 'AD-002', name: 'Desert Safari Featured', vendor: 'Desert Adventures Ltd',
            vendorId: 'VND-012', vendorEmail: 'ads@desertadventures.com', vendorPhone: '+966-11-555-5678',
            type: 'featured', placement: 'search-results', status: 'active',
            startDate: 'Mar 05, 2025', endDate: 'Apr 04, 2025', duration: 30, dailyHours: 12,
            rate: 8, budget: 2880, spent: 1920, costDisplay: 'SAR 2,880',
            impressions: 156000, clicks: 9360, ctr: 6.0, conversions: 468,
            description: 'Featured listing for desert safari activities in search results.',
            paymentStatus: 'paid', discount: 10, targetRegion: 'all', targetAudience: 'tourists',
            adminNotes: 'Good CTR. Consider for featured case study.'
        },
        'AD-003': {
            id: 'AD-003', name: 'Umrah Package Sponsored', vendor: 'Heritage Explorers',
            vendorId: 'VND-010', vendorEmail: 'marketing@heritageexplorers.com', vendorPhone: '+966-11-555-9012',
            type: 'sponsored', placement: 'listing-page', status: 'active',
            startDate: 'Feb 15, 2025', endDate: 'Apr 15, 2025', duration: 60, dailyHours: 24,
            rate: 12, budget: 17280, spent: 10368, costDisplay: 'SAR 17,280',
            impressions: 380000, clicks: 22800, ctr: 6.0, conversions: 1140,
            description: 'Sponsored content for Umrah premium packages on listing pages.',
            paymentStatus: 'partial', discount: 5, targetRegion: 'mecca', targetAudience: 'all',
            adminNotes: 'Long-running campaign. 60% spent so far. Strong ROI.'
        },
        'AD-004': {
            id: 'AD-004', name: 'Jeddah Seafood Popup', vendor: 'Gourmet Dining Group',
            vendorId: 'VND-025', vendorEmail: 'ads@gourmetdining.com', vendorPhone: '+966-12-555-3456',
            type: 'popup', placement: 'homepage-sidebar', status: 'paused',
            startDate: 'Mar 10, 2025', endDate: 'Mar 25, 2025', duration: 15, dailyHours: 8,
            rate: 20, budget: 2400, spent: 960, costDisplay: 'SAR 2,400',
            impressions: 45000, clicks: 1800, ctr: 4.0, conversions: 90,
            description: 'Pop-up ad for seafood restaurant promotion in Jeddah area.',
            paymentStatus: 'paid', discount: 0, targetRegion: 'jeddah', targetAudience: 'families',
            adminNotes: 'Paused by vendor request. Low conversion rate - review targeting.'
        },
        'AD-005': {
            id: 'AD-005', name: 'Cab Service Launch', vendor: 'Al Fahad Transport',
            vendorId: 'CAB-001', vendorEmail: 'ahmed.fahad@email.com', vendorPhone: '+966-50-555-1234',
            type: 'banner', placement: 'homepage-sidebar', status: 'pending',
            startDate: 'Apr 01, 2025', endDate: 'Apr 30, 2025', duration: 30, dailyHours: 24,
            rate: 10, budget: 7200, spent: 0, costDisplay: 'SAR 7,200',
            impressions: 0, clicks: 0, ctr: 0, conversions: 0,
            description: 'Launch campaign for premium cab service with airport transfers.',
            paymentStatus: 'invoiced', discount: 15, targetRegion: 'riyadh', targetAudience: 'business',
            adminNotes: 'Pending approval. Verify ad creative meets guidelines before activation.'
        },
        'AD-006': {
            id: 'AD-006', name: 'Medina Hotels Promo', vendor: 'Turki Al Dossari Hotels',
            vendorId: 'VND-030', vendorEmail: 'promo@tdhhotels.com', vendorPhone: '+966-14-555-7890',
            type: 'featured', placement: 'search-results', status: 'expired',
            startDate: 'Jan 15, 2025', endDate: 'Feb 14, 2025', duration: 30, dailyHours: 24,
            rate: 10, budget: 7200, spent: 7200, costDisplay: 'SAR 7,200',
            impressions: 210000, clicks: 8400, ctr: 4.0, conversions: 420,
            description: 'Featured hotel listings for Medina area properties.',
            paymentStatus: 'paid', discount: 0, targetRegion: 'medina', targetAudience: 'all',
            adminNotes: 'Campaign completed. Good results. Vendor interested in renewal.'
        },
        'AD-007': {
            id: 'AD-007', name: 'Adventure Activities Bundle', vendor: 'Saudi Tours Co',
            vendorId: 'VND-008', vendorEmail: 'marketing@sauditours.com', vendorPhone: '+966-11-555-2345',
            type: 'sponsored', placement: 'listing-page', status: 'pending',
            startDate: 'Apr 05, 2025', endDate: 'May 05, 2025', duration: 30, dailyHours: 12,
            rate: 12, budget: 4320, spent: 0, costDisplay: 'SAR 4,320',
            impressions: 0, clicks: 0, ctr: 0, conversions: 0,
            description: 'Sponsored listings for adventure activity bundles during spring season.',
            paymentStatus: 'unpaid', discount: 0, targetRegion: 'all', targetAudience: 'tourists',
            adminNotes: 'Awaiting payment before approval. Follow up with vendor.'
        },
        'AD-008': {
            id: 'AD-008', name: 'Summer Special Hotels', vendor: 'Coastal Hotels Co',
            vendorId: 'VND-020', vendorEmail: 'marketing@coastalhotels.com', vendorPhone: '+966-12-555-6789',
            type: 'banner', placement: 'homepage-top', status: 'rejected',
            startDate: '', endDate: '', duration: 30, dailyHours: 24,
            rate: 18, budget: 12960, spent: 0, costDisplay: 'SAR 12,960',
            impressions: 0, clicks: 0, ctr: 0, conversions: 0,
            description: 'Summer season hotel deals banner for coastal properties.',
            paymentStatus: 'unpaid', discount: 0, targetRegion: 'jeddah', targetAudience: 'families',
            adminNotes: 'Rejected - ad creative contains misleading pricing. Vendor notified to revise.'
        }
    };

    function initializeAdManagement() {
        populateAdsTable();
        setupAdFilters();
        setupAdActions();
        initializeLogout();
    }

    function populateAdsTable() {
        const tbody = document.getElementById('adsTableBody');
        if (!tbody) return;

        let html = '';
        for (let id in adsData) {
            const ad = adsData[id];
            const statusClass = 'status-' + ad.status;
            const typeClass = 'ad-type-' + ad.type;

            html += `
                <tr data-ad-id="${ad.id}" data-status="${ad.status}" data-type="${ad.type}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(ad.name.substring(0, 2))}&background=e74c3c&color=fff&size=36" alt="${ad.name}">
                            <div>
                                <span class="table-user-name">${ad.name}</span>
                                <span class="table-user-id">${ad.id}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(ad.vendor)}&background=2c3e50&color=fff&size=36" alt="${ad.vendor}">
                            <div>
                                <span class="table-user-name">${ad.vendor}</span>
                                <span class="table-user-id">#${ad.vendorId}</span>
                            </div>
                        </div>
                    </td>
                    <td><span class="type-badge ${typeClass}"><i class="fas fa-${ad.type === 'banner' ? 'image' : ad.type === 'featured' ? 'star' : ad.type === 'sponsored' ? 'bullhorn' : 'window-maximize'}"></i> ${ad.type.charAt(0).toUpperCase() + ad.type.slice(1)}</span></td>
                    <td>${ad.startDate ? ad.startDate + ' - ' + ad.endDate : 'Not set'}</td>
                    <td>SAR ${ad.rate}/hr</td>
                    <td>${ad.impressions > 0 ? (ad.impressions / 1000).toFixed(0) + 'K' : '0'}</td>
                    <td><strong>SAR ${ad.spent > 0 ? ad.spent.toLocaleString() : '0'}</strong></td>
                    <td><span class="status-badge ${statusClass}">${ad.status.charAt(0).toUpperCase() + ad.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="ad-view.html?id=${ad.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="ad-edit.html?id=${ad.id}" class="action-btn action-edit" title="Edit Ad"><i class="fas fa-pen"></i></a>
                            <button class="action-btn action-block" title="Pause/Resume"><i class="fas fa-${ad.status === 'active' ? 'pause' : 'play'}"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupAdFilters() {
        const searchInput = document.getElementById('adSearchInput');
        const statusFilter = document.getElementById('adStatusFilter');
        const typeFilter = document.getElementById('adTypeFilter');

        if (searchInput) searchInput.addEventListener('input', filterAds);
        if (statusFilter) statusFilter.addEventListener('change', filterAds);
        if (typeFilter) typeFilter.addEventListener('change', filterAds);
    }

    function filterAds() {
        const searchTerm = document.getElementById('adSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('adStatusFilter')?.value || 'all';
        const typeFilter = document.getElementById('adTypeFilter')?.value || 'all';

        const rows = document.querySelectorAll('#adsTableBody tr');
        rows.forEach(row => {
            const adId = row.dataset.adId;
            const ad = adsData[adId];
            const matchesSearch = ad.name.toLowerCase().includes(searchTerm) ||
                                ad.vendor.toLowerCase().includes(searchTerm) ||
                                adId.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || ad.status === statusFilter;
            const matchesType = typeFilter === 'all' || ad.type === typeFilter;
            row.style.display = (matchesSearch && matchesStatus && matchesType) ? '' : 'none';
        });
    }

    function setupAdActions() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.action-block') && e.target.closest('#adsTableBody')) {
                const row = e.target.closest('tr');
                const adId = row.dataset.adId;
                if (adsData[adId]) {
                    adsData[adId].status = adsData[adId].status === 'active' ? 'paused' : 'active';
                    populateAdsTable();
                }
            }
        });
    }

    function initializeAdViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const adId = urlParams.get('id');

        if (adId && adsData[adId]) {
            populateAdView(adsData[adId]);
        }

        const editLink = document.getElementById('editAdLink');
        if (editLink && adId) {
            editLink.href = 'ad-edit.html?id=' + adId;
        }

        initializeLogout();
    }

    function populateAdView(ad) {
        document.getElementById('viewAdName').textContent = ad.name;
        document.getElementById('viewAdId').textContent = '#' + ad.id;
        document.getElementById('viewAdTitle').textContent = ad.name;
        document.getElementById('viewAdAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(ad.name.substring(0, 2)) + '&background=e74c3c&color=fff&size=120';

        const statusEl = document.getElementById('viewAdStatus');
        statusEl.textContent = ad.status.charAt(0).toUpperCase() + ad.status.slice(1);
        statusEl.className = 'status-badge status-' + ad.status;

        document.getElementById('viewAdVendor').textContent = ad.vendor;
        document.getElementById('viewAdType').textContent = ad.type.charAt(0).toUpperCase() + ad.type.slice(1);
        document.getElementById('viewAdPlacement').textContent = ad.placement.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        document.getElementById('viewAdStart').textContent = ad.startDate || 'Not set';
        document.getElementById('viewAdEnd').textContent = ad.endDate || 'Not set';
        document.getElementById('viewAdDuration').textContent = ad.duration + ' Days';
        document.getElementById('viewAdRate').textContent = 'SAR ' + ad.rate + '/hr';
        document.getElementById('viewAdCost').textContent = ad.costDisplay;

        // Performance
        const perfEl = document.getElementById('viewAdPerformance');
        if (perfEl) {
            perfEl.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Total Impressions</span>
                    <span class="info-value">${ad.impressions.toLocaleString()}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Total Clicks</span>
                    <span class="info-value">${ad.clicks.toLocaleString()}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Click-Through Rate</span>
                    <span class="info-value">${ad.ctr}%</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Conversions</span>
                    <span class="info-value">${ad.conversions.toLocaleString()}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Cost per Click</span>
                    <span class="info-value">SAR ${ad.clicks > 0 ? (ad.spent / ad.clicks).toFixed(2) : '0.00'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Cost per Conversion</span>
                    <span class="info-value">SAR ${ad.conversions > 0 ? (ad.spent / ad.conversions).toFixed(2) : '0.00'}</span>
                </div>
            `;
        }

        // Billing
        const billingEl = document.getElementById('viewAdBilling');
        if (billingEl) {
            const discountAmount = ad.budget * (ad.discount / 100);
            const netCost = ad.budget - discountAmount;
            billingEl.innerHTML = `
                <div class="payment-row">
                    <span>Hourly Rate</span>
                    <span>SAR ${ad.rate}/hr</span>
                </div>
                <div class="payment-row">
                    <span>Daily Hours</span>
                    <span>${ad.dailyHours}h</span>
                </div>
                <div class="payment-row">
                    <span>Duration</span>
                    <span>${ad.duration} Days</span>
                </div>
                <div class="payment-row">
                    <span>Total Budget</span>
                    <span>SAR ${ad.budget.toLocaleString()}</span>
                </div>
                ${ad.discount > 0 ? `<div class="payment-row discount"><span>Discount (${ad.discount}%)</span><span>- SAR ${discountAmount.toLocaleString()}</span></div>` : ''}
                <div class="payment-row total">
                    <span><strong>Net Cost</strong></span>
                    <span><strong>SAR ${netCost.toLocaleString()}</strong></span>
                </div>
                <div class="payment-row">
                    <span>Amount Spent</span>
                    <span>SAR ${ad.spent.toLocaleString()}</span>
                </div>
                <div class="payment-row">
                    <span>Payment Status</span>
                    <span class="payment-badge payment-${ad.paymentStatus}">${ad.paymentStatus.charAt(0).toUpperCase() + ad.paymentStatus.slice(1)}</span>
                </div>
            `;
        }

        // Vendor info
        document.getElementById('viewAdVendorName').textContent = ad.vendor;
        document.getElementById('viewAdVendorId').textContent = '#' + ad.vendorId;
        document.getElementById('viewAdVendorEmail').textContent = ad.vendorEmail;
        document.getElementById('viewAdVendorPhone').textContent = ad.vendorPhone;

        // Timeline
        const timelineEl = document.getElementById('viewAdTimeline');
        if (timelineEl) {
            timelineEl.innerHTML = `
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-plus-circle"></i></div>
                    <div class="activity-content">
                        <p>Ad campaign created by ${ad.vendor}</p>
                        <span class="activity-time">${ad.startDate || 'Not started'}</span>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-${ad.status === 'active' ? 'check-circle' : ad.status === 'pending' ? 'hourglass-half' : 'info-circle'}"></i></div>
                    <div class="activity-content">
                        <p>Status changed to ${ad.status.charAt(0).toUpperCase() + ad.status.slice(1)}</p>
                        <span class="activity-time">${ad.startDate || 'Pending'}</span>
                    </div>
                </div>
                ${ad.impressions > 0 ? `<div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="activity-content">
                        <p>Reached ${(ad.impressions / 1000).toFixed(0)}K impressions</p>
                        <span class="activity-time">Latest update</span>
                    </div>
                </div>` : ''}
            `;
        }
    }

    function initializeAdEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const adId = urlParams.get('id');

        if (adId && adsData[adId]) {
            populateAdEdit(adsData[adId]);
        }

        const form = document.getElementById('adEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() {
                    window.location.href = 'ad-view.html?id=' + adId;
                }, 1000);
            });
        }

        initializeLogout();
    }

    function populateAdEdit(ad) {
        document.getElementById('editAdDisplayName').textContent = ad.name;
        document.getElementById('editAdId').textContent = '#' + ad.id;
        document.getElementById('editAdStatus').value = ad.status;
        document.getElementById('editAdName').value = ad.name;
        document.getElementById('editAdType').value = ad.type;
        document.getElementById('editAdVendor').value = ad.vendor;
        document.getElementById('editAdPlacement').value = ad.placement;
        document.getElementById('editAdDescription').value = ad.description || '';
        document.getElementById('editAdDailyHours').value = ad.dailyHours;
        document.getElementById('editAdRate').value = ad.rate;
        document.getElementById('editAdBudget').value = ad.budget;
        document.getElementById('editAdPaymentStatus').value = ad.paymentStatus;
        document.getElementById('editAdDiscount').value = ad.discount;
        document.getElementById('editAdTargetRegion').value = ad.targetRegion;
        document.getElementById('editAdTargetAudience').value = ad.targetAudience;
        document.getElementById('editAdAdminNotes').value = ad.adminNotes || '';
    }

// ============================================
// PROMOTIONAL BANNER MANAGEMENT
// ============================================

    const bannersData = {
        'BNR-001': {
            id: 'BNR-001', name: 'Summer Sale - Hotels 50% Off',
            placement: 'homepage-hero', status: 'active', priority: 1,
            redirect: 'https://tourhub.com/summer-hotel-deals',
            startDate: 'Mar 01, 2026', endDate: 'Mar 31, 2026',
            displayHours: 'all-day', frequency: 'always',
            audience: 'all', createdBy: 'Admin User', created: 'Feb 20, 2026',
            description: 'Major summer promotion featuring up to 50% off on selected hotels across Saudi Arabia.',
            imageUrl: 'https://placehold.co/1200x400/e67e22/ffffff?text=Summer+Sale+50%25+Off',
            altText: 'Summer Hotel Sale - 50% Off', ctaText: 'Book Now', bgColor: '#e67e22',
            impressions: 245000, clicks: 12250, ctr: 5.0, conversions: 612,
            abEnabled: 'yes', variantName: 'Variant B - Blue Theme',
            trafficSplit: 50, variantImage: 'https://placehold.co/1200x400/3498db/ffffff?text=Summer+Sale+Blue',
            variantImpressions: 240000, variantClicks: 10800, variantCtr: 4.5, variantConversions: 540,
            adminNotes: 'Main summer campaign. A/B test shows orange variant outperforms blue by 11%.'
        },
        'BNR-002': {
            id: 'BNR-002', name: 'Umrah Season Packages',
            placement: 'homepage-hero', status: 'active', priority: 2,
            redirect: 'https://tourhub.com/umrah-packages',
            startDate: 'Feb 15, 2026', endDate: 'Apr 15, 2026',
            displayHours: 'all-day', frequency: 'always',
            audience: 'all', createdBy: 'Admin User', created: 'Feb 10, 2026',
            description: 'Promote premium Umrah packages with hotel and transport inclusions for the holy season.',
            imageUrl: 'https://placehold.co/1200x400/2ecc71/ffffff?text=Umrah+Season+Packages',
            altText: 'Umrah Season Special Packages', ctaText: 'Explore Packages', bgColor: '#2ecc71',
            impressions: 380000, clicks: 22800, ctr: 6.0, conversions: 1140,
            abEnabled: 'no', variantName: '', trafficSplit: 0, variantImage: '',
            variantImpressions: 0, variantClicks: 0, variantCtr: 0, variantConversions: 0,
            adminNotes: 'High-performing campaign. Best CTR of all banners. Extended through April.'
        },
        'BNR-003': {
            id: 'BNR-003', name: 'New User Welcome - 20% Off',
            placement: 'homepage-sidebar', status: 'active', priority: 1,
            redirect: 'https://tourhub.com/welcome-offer',
            startDate: 'Jan 01, 2026', endDate: 'Dec 31, 2026',
            displayHours: 'all-day', frequency: 'once-per-session',
            audience: 'new-users', createdBy: 'Admin User', created: 'Dec 28, 2025',
            description: 'Welcome banner for first-time visitors offering 20% discount on first booking.',
            imageUrl: 'https://placehold.co/400x300/9b59b6/ffffff?text=Welcome+20%25+Off',
            altText: 'New User Welcome Offer', ctaText: 'Claim Offer', bgColor: '#9b59b6',
            impressions: 156000, clicks: 9360, ctr: 6.0, conversions: 468,
            abEnabled: 'yes', variantName: 'Variant B - 15% Off',
            trafficSplit: 30, variantImage: 'https://placehold.co/400x300/e74c3c/ffffff?text=Welcome+15%25+Off',
            variantImpressions: 67000, variantClicks: 3350, variantCtr: 5.0, variantConversions: 167,
            adminNotes: '20% variant outperforms 15%. Keep traffic split at 70/30 for control.'
        },
        'BNR-004': {
            id: 'BNR-004', name: 'Desert Safari Adventures',
            placement: 'search-results', status: 'active', priority: 1,
            redirect: 'https://tourhub.com/desert-safari',
            startDate: 'Mar 01, 2026', endDate: 'May 31, 2026',
            displayHours: 'peak', frequency: 'always',
            audience: 'tourists', createdBy: 'Admin User', created: 'Feb 25, 2026',
            description: 'Promotional banner for desert safari activities shown in search results.',
            imageUrl: 'https://placehold.co/800x200/f39c12/ffffff?text=Desert+Safari+Adventures',
            altText: 'Desert Safari Activities', ctaText: 'Book Safari', bgColor: '#f39c12',
            impressions: 98000, clicks: 5880, ctr: 6.0, conversions: 294,
            abEnabled: 'no', variantName: '', trafficSplit: 0, variantImage: '',
            variantImpressions: 0, variantClicks: 0, variantCtr: 0, variantConversions: 0,
            adminNotes: 'Targeted at tourists. Only shows during peak hours for optimal engagement.'
        },
        'BNR-005': {
            id: 'BNR-005', name: 'Ramadan Special Offers',
            placement: 'homepage-hero', status: 'scheduled', priority: 1,
            redirect: 'https://tourhub.com/ramadan-special',
            startDate: 'Mar 10, 2026', endDate: 'Apr 10, 2026',
            displayHours: 'evening', frequency: 'always',
            audience: 'all', createdBy: 'Admin User', created: 'Mar 01, 2026',
            description: 'Ramadan season promotional banner with special hotel and dining offers.',
            imageUrl: 'https://placehold.co/1200x400/1abc9c/ffffff?text=Ramadan+Special+Offers',
            altText: 'Ramadan Special Deals', ctaText: 'View Offers', bgColor: '#1abc9c',
            impressions: 0, clicks: 0, ctr: 0, conversions: 0,
            abEnabled: 'no', variantName: '', trafficSplit: 0, variantImage: '',
            variantImpressions: 0, variantClicks: 0, variantCtr: 0, variantConversions: 0,
            adminNotes: 'Scheduled for Ramadan. Displays only in evening hours. Review creative before launch.'
        },
        'BNR-006': {
            id: 'BNR-006', name: 'Cab Service Launch Promo',
            placement: 'category-page', status: 'paused', priority: 3,
            redirect: 'https://tourhub.com/cabs',
            startDate: 'Feb 15, 2026', endDate: 'Mar 15, 2026',
            displayHours: 'all-day', frequency: 'once-per-day',
            audience: 'business', createdBy: 'Admin User', created: 'Feb 10, 2026',
            description: 'Promotion for the newly launched cab service targeting business travelers.',
            imageUrl: 'https://placehold.co/800x200/34495e/ffffff?text=Premium+Cab+Service',
            altText: 'Premium Cab Service Launch', ctaText: 'Try Now', bgColor: '#34495e',
            impressions: 45000, clicks: 1800, ctr: 4.0, conversions: 90,
            abEnabled: 'no', variantName: '', trafficSplit: 0, variantImage: '',
            variantImpressions: 0, variantClicks: 0, variantCtr: 0, variantConversions: 0,
            adminNotes: 'Paused due to low conversion rate. Need to optimize landing page before resuming.'
        },
        'BNR-007': {
            id: 'BNR-007', name: 'Valentine Getaway Deals',
            placement: 'homepage-hero', status: 'expired', priority: 1,
            redirect: 'https://tourhub.com/valentine-deals',
            startDate: 'Feb 01, 2026', endDate: 'Feb 15, 2026',
            displayHours: 'all-day', frequency: 'always',
            audience: 'families', createdBy: 'Admin User', created: 'Jan 25, 2026',
            description: 'Valentine season campaign promoting couple-friendly hotel and dining packages.',
            imageUrl: 'https://placehold.co/1200x400/e74c3c/ffffff?text=Valentine+Getaway',
            altText: 'Valentine Getaway Deals', ctaText: 'Surprise Them', bgColor: '#e74c3c',
            impressions: 210000, clicks: 8400, ctr: 4.0, conversions: 420,
            abEnabled: 'yes', variantName: 'Variant B - Pink Theme',
            trafficSplit: 50, variantImage: 'https://placehold.co/1200x400/ff69b4/ffffff?text=Valentine+Pink',
            variantImpressions: 205000, variantClicks: 9225, variantCtr: 4.5, variantConversions: 461,
            adminNotes: 'Campaign completed. Pink variant performed slightly better. Use insights for next year.'
        },
        'BNR-008': {
            id: 'BNR-008', name: 'Mobile App Download Banner',
            placement: 'mobile-app', status: 'draft', priority: 5,
            redirect: 'https://tourhub.com/download-app',
            startDate: '', endDate: '',
            displayHours: 'all-day', frequency: 'once-per-week',
            audience: 'all', createdBy: 'Admin User', created: 'Mar 02, 2026',
            description: 'Banner encouraging web users to download the TourHub mobile app.',
            imageUrl: 'https://placehold.co/800x200/2c3e50/ffffff?text=Download+TourHub+App',
            altText: 'Download TourHub App', ctaText: 'Get the App', bgColor: '#2c3e50',
            impressions: 0, clicks: 0, ctr: 0, conversions: 0,
            abEnabled: 'no', variantName: '', trafficSplit: 0, variantImage: '',
            variantImpressions: 0, variantClicks: 0, variantCtr: 0, variantConversions: 0,
            adminNotes: 'Draft - awaiting design finalization from marketing team.'
        }
    };

    function initializeBannerManagement() {
        populateBannersTable();
        setupBannerFilters();
        setupBannerActions();
        initializeLogout();
    }

    function populateBannersTable() {
        const tbody = document.getElementById('bannersTableBody');
        if (!tbody) return;

        const placementLabels = {
            'homepage-hero': 'Homepage Hero', 'homepage-sidebar': 'Homepage Sidebar',
            'search-results': 'Search Results', 'category-page': 'Category Page',
            'checkout': 'Checkout', 'mobile-app': 'Mobile App'
        };

        let html = '';
        for (let id in bannersData) {
            const banner = bannersData[id];
            const statusClass = 'status-' + banner.status;
            const schedule = banner.startDate ? banner.startDate + ' - ' + banner.endDate : 'Not scheduled';

            html += `
                <tr data-banner-id="${banner.id}" data-status="${banner.status}" data-placement="${banner.placement}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(banner.name.substring(0, 2))}&background=e67e22&color=fff&size=36" alt="${banner.name}">
                            <div>
                                <span class="table-user-name">${banner.name}</span>
                                <span class="table-user-id">${banner.id}</span>
                            </div>
                        </div>
                    </td>
                    <td><span class="type-badge placement-${banner.placement.split('-')[0]}"><i class="fas fa-map-marker-alt"></i> ${placementLabels[banner.placement] || banner.placement}</span></td>
                    <td>${schedule}</td>
                    <td><span class="priority-badge priority-${banner.priority <= 2 ? 'high' : banner.priority <= 3 ? 'medium' : 'low'}">#${banner.priority}</span></td>
                    <td>${banner.impressions > 0 ? (banner.impressions / 1000).toFixed(0) + 'K' : '0'}</td>
                    <td>${banner.clicks > 0 ? banner.clicks.toLocaleString() : '0'}</td>
                    <td>${banner.ctr > 0 ? banner.ctr + '%' : '0%'}</td>
                    <td><span class="status-badge ${statusClass}">${banner.status.charAt(0).toUpperCase() + banner.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="banner-view.html?id=${banner.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="banner-edit.html?id=${banner.id}" class="action-btn action-edit" title="Edit Banner"><i class="fas fa-pen"></i></a>
                            <button class="action-btn action-block" title="Pause/Resume"><i class="fas fa-${banner.status === 'active' ? 'pause' : 'play'}"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupBannerFilters() {
        const searchInput = document.getElementById('bannerSearchInput');
        const statusFilter = document.getElementById('bannerStatusFilter');
        const placementFilter = document.getElementById('bannerPlacementFilter');

        if (searchInput) searchInput.addEventListener('input', filterBanners);
        if (statusFilter) statusFilter.addEventListener('change', filterBanners);
        if (placementFilter) placementFilter.addEventListener('change', filterBanners);
    }

    function filterBanners() {
        const searchTerm = document.getElementById('bannerSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('bannerStatusFilter')?.value || 'all';
        const placementFilter = document.getElementById('bannerPlacementFilter')?.value || 'all';

        const rows = document.querySelectorAll('#bannersTableBody tr');
        rows.forEach(row => {
            const bannerId = row.dataset.bannerId;
            const banner = bannersData[bannerId];
            const matchesSearch = banner.name.toLowerCase().includes(searchTerm) || bannerId.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || banner.status === statusFilter;
            const matchesPlacement = placementFilter === 'all' || banner.placement === placementFilter;
            row.style.display = (matchesSearch && matchesStatus && matchesPlacement) ? '' : 'none';
        });
    }

    function setupBannerActions() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.action-block') && e.target.closest('#bannersTableBody')) {
                const row = e.target.closest('tr');
                const bannerId = row.dataset.bannerId;
                if (bannersData[bannerId]) {
                    bannersData[bannerId].status = bannersData[bannerId].status === 'active' ? 'paused' : 'active';
                    populateBannersTable();
                }
            }
        });
    }

    function initializeBannerViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const bannerId = urlParams.get('id');

        if (bannerId && bannersData[bannerId]) {
            populateBannerView(bannersData[bannerId]);
        }

        const editLink = document.getElementById('editBannerLink');
        if (editLink && bannerId) {
            editLink.href = 'banner-edit.html?id=' + bannerId;
        }

        initializeLogout();
    }

    function populateBannerView(banner) {
        document.getElementById('viewBannerName').textContent = banner.name;
        document.getElementById('viewBannerId').textContent = '#' + banner.id;
        document.getElementById('viewBannerTitle').textContent = banner.name;
        document.getElementById('viewBannerAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(banner.name.substring(0, 2)) + '&background=e67e22&color=fff&size=120';

        const statusEl = document.getElementById('viewBannerStatus');
        statusEl.textContent = banner.status.charAt(0).toUpperCase() + banner.status.slice(1);
        statusEl.className = 'status-badge status-' + banner.status;

        const placementLabels = {
            'homepage-hero': 'Homepage Hero', 'homepage-sidebar': 'Homepage Sidebar',
            'search-results': 'Search Results', 'category-page': 'Category Page',
            'checkout': 'Checkout', 'mobile-app': 'Mobile App'
        };

        document.getElementById('viewBannerPlacement').textContent = placementLabels[banner.placement] || banner.placement;
        document.getElementById('viewBannerRedirect').textContent = banner.redirect;
        document.getElementById('viewBannerStart').textContent = banner.startDate || 'Not set';
        document.getElementById('viewBannerEnd').textContent = banner.endDate || 'Not set';
        document.getElementById('viewBannerPriority').textContent = banner.priority + (banner.priority === 1 ? ' (Highest)' : banner.priority <= 3 ? ' (High)' : ' (Normal)');
        document.getElementById('viewBannerCreatedBy').textContent = banner.createdBy;
        document.getElementById('viewBannerCreated').textContent = banner.created;

        const audienceLabels = {
            'all': 'All Users', 'tourists': 'Tourists', 'business': 'Business Travelers',
            'families': 'Families', 'premium': 'Premium Users', 'new-users': 'New Users'
        };
        document.getElementById('viewBannerAudience').textContent = audienceLabels[banner.audience] || banner.audience;

        // Performance
        const perfEl = document.getElementById('viewBannerPerformance');
        if (perfEl) {
            perfEl.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Total Impressions</span>
                    <span class="info-value">${banner.impressions.toLocaleString()}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Total Clicks</span>
                    <span class="info-value">${banner.clicks.toLocaleString()}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Click-Through Rate</span>
                    <span class="info-value">${banner.ctr}%</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Conversions</span>
                    <span class="info-value">${banner.conversions.toLocaleString()}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Conversion Rate</span>
                    <span class="info-value">${banner.clicks > 0 ? ((banner.conversions / banner.clicks) * 100).toFixed(1) : '0'}%</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Cost per Click</span>
                    <span class="info-value">${banner.clicks > 0 ? 'SAR ' + (0).toFixed(2) : 'N/A'}</span>
                </div>
            `;
        }

        // A/B Testing
        const abEl = document.getElementById('viewBannerABTest');
        if (abEl) {
            if (banner.abEnabled === 'yes') {
                abEl.innerHTML = `
                    <div class="info-item">
                        <span class="info-label">A/B Test Status</span>
                        <span class="info-value"><span class="status-badge status-active">Enabled</span></span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Traffic Split</span>
                        <span class="info-value">${100 - banner.trafficSplit}% / ${banner.trafficSplit}%</span>
                    </div>
                    <div class="info-item" style="grid-column: 1 / -1; padding-top: 8px; border-top: 1px solid var(--border-color);">
                        <span class="info-label"><strong>Original (Variant A)</strong></span>
                        <span class="info-value"></span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Impressions</span>
                        <span class="info-value">${banner.impressions.toLocaleString()}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Clicks / CTR</span>
                        <span class="info-value">${banner.clicks.toLocaleString()} / ${banner.ctr}%</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Conversions</span>
                        <span class="info-value">${banner.conversions.toLocaleString()}</span>
                    </div>
                    <div class="info-item" style="grid-column: 1 / -1; padding-top: 8px; border-top: 1px solid var(--border-color);">
                        <span class="info-label"><strong>${banner.variantName}</strong></span>
                        <span class="info-value"></span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Impressions</span>
                        <span class="info-value">${banner.variantImpressions.toLocaleString()}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Clicks / CTR</span>
                        <span class="info-value">${banner.variantClicks.toLocaleString()} / ${banner.variantCtr}%</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Conversions</span>
                        <span class="info-value">${banner.variantConversions.toLocaleString()}</span>
                    </div>
                `;
            } else {
                abEl.innerHTML = `
                    <div class="info-item">
                        <span class="info-label">A/B Test Status</span>
                        <span class="info-value"><span class="status-badge status-inactive">Disabled</span></span>
                    </div>
                    <p style="color: var(--text-muted); font-size: 14px; margin-top: 8px;">No A/B test configured for this banner.</p>
                `;
            }
        }

        // Banner Preview
        const previewEl = document.getElementById('viewBannerPreview');
        if (previewEl) {
            previewEl.innerHTML = `
                <div class="banner-preview-container" style="border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color);">
                    <img src="${banner.imageUrl}" alt="${banner.altText}" style="width: 100%; display: block; border-radius: 8px;">
                </div>
                <div class="info-group" style="margin-top: 16px;">
                    <div class="info-item">
                        <span class="info-label">CTA Text</span>
                        <span class="info-value">${banner.ctaText}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Alt Text</span>
                        <span class="info-value">${banner.altText}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Display Frequency</span>
                        <span class="info-value">${banner.frequency.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Display Hours</span>
                        <span class="info-value">${banner.displayHours.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                    </div>
                </div>
            `;
        }

        // Timeline
        const timelineEl = document.getElementById('viewBannerTimeline');
        if (timelineEl) {
            timelineEl.innerHTML = `
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-plus-circle"></i></div>
                    <div class="activity-content">
                        <p>Banner created by ${banner.createdBy}</p>
                        <span class="activity-time">${banner.created}</span>
                    </div>
                </div>
                ${banner.startDate ? `<div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-calendar-check"></i></div>
                    <div class="activity-content">
                        <p>Campaign scheduled: ${banner.startDate} - ${banner.endDate}</p>
                        <span class="activity-time">${banner.created}</span>
                    </div>
                </div>` : ''}
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-${banner.status === 'active' ? 'check-circle' : banner.status === 'scheduled' ? 'clock' : 'info-circle'}"></i></div>
                    <div class="activity-content">
                        <p>Status: ${banner.status.charAt(0).toUpperCase() + banner.status.slice(1)}</p>
                        <span class="activity-time">Current</span>
                    </div>
                </div>
                ${banner.impressions > 0 ? `<div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="activity-content">
                        <p>Reached ${(banner.impressions / 1000).toFixed(0)}K impressions with ${banner.ctr}% CTR</p>
                        <span class="activity-time">Latest update</span>
                    </div>
                </div>` : ''}
            `;
        }
    }

    function initializeBannerEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const bannerId = urlParams.get('id');

        if (bannerId && bannersData[bannerId]) {
            populateBannerEdit(bannersData[bannerId]);
        }

        const form = document.getElementById('bannerEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() {
                    window.location.href = 'banner-view.html?id=' + bannerId;
                }, 1000);
            });
        }

        initializeLogout();
    }

    function populateBannerEdit(banner) {
        document.getElementById('editBannerDisplayName').textContent = banner.name;
        document.getElementById('editBannerId').textContent = '#' + banner.id;
        document.getElementById('editBannerStatus').value = banner.status;
        document.getElementById('editBannerPriority').value = banner.priority;
        document.getElementById('editBannerName').value = banner.name;
        document.getElementById('editBannerPlacement').value = banner.placement;
        document.getElementById('editBannerRedirect').value = banner.redirect;
        document.getElementById('editBannerAudience').value = banner.audience;
        document.getElementById('editBannerDescription').value = banner.description || '';
        document.getElementById('editBannerDisplayHours').value = banner.displayHours;
        document.getElementById('editBannerFrequency').value = banner.frequency;
        document.getElementById('editBannerImageUrl').value = banner.imageUrl;
        document.getElementById('editBannerAltText').value = banner.altText;
        document.getElementById('editBannerCtaText').value = banner.ctaText || '';
        document.getElementById('editBannerBgColor').value = banner.bgColor;
        document.getElementById('editBannerABEnabled').value = banner.abEnabled;
        document.getElementById('editBannerVariantName').value = banner.variantName || '';
        document.getElementById('editBannerTrafficSplit').value = banner.trafficSplit;
        document.getElementById('editBannerVariantImage').value = banner.variantImage || '';
        document.getElementById('editBannerAdminNotes').value = banner.adminNotes || '';
    }

// ============================================
// REPORTS MANAGEMENT
// ============================================

    const scheduledReportsData = {
        'RPT-001': {
            id: 'RPT-001', name: 'Weekly Revenue Summary', type: 'revenue',
            frequency: 'weekly', recipients: 'admin@tourhub.com',
            lastGenerated: 'Feb 28, 2026', nextRun: 'Mar 07, 2026', status: 'active'
        },
        'RPT-002': {
            id: 'RPT-002', name: 'Monthly Bookings Report', type: 'bookings',
            frequency: 'monthly', recipients: 'admin@tourhub.com, finance@tourhub.com',
            lastGenerated: 'Mar 01, 2026', nextRun: 'Apr 01, 2026', status: 'active'
        },
        'RPT-003': {
            id: 'RPT-003', name: 'Subscription Analytics', type: 'subscriptions',
            frequency: 'monthly', recipients: 'admin@tourhub.com',
            lastGenerated: 'Mar 01, 2026', nextRun: 'Apr 01, 2026', status: 'active'
        },
        'RPT-004': {
            id: 'RPT-004', name: 'Ads Performance Weekly', type: 'ads',
            frequency: 'weekly', recipients: 'marketing@tourhub.com',
            lastGenerated: 'Feb 28, 2026', nextRun: 'Mar 07, 2026', status: 'active'
        },
        'RPT-005': {
            id: 'RPT-005', name: 'Vendor Payout Summary', type: 'vendors',
            frequency: 'monthly', recipients: 'finance@tourhub.com',
            lastGenerated: 'Mar 01, 2026', nextRun: 'Apr 01, 2026', status: 'active'
        },
        'RPT-006': {
            id: 'RPT-006', name: 'Quarterly Service Breakdown', type: 'services',
            frequency: 'quarterly', recipients: 'admin@tourhub.com, ceo@tourhub.com',
            lastGenerated: 'Jan 01, 2026', nextRun: 'Apr 01, 2026', status: 'active'
        },
        'RPT-007': {
            id: 'RPT-007', name: 'Daily Booking Alerts', type: 'bookings',
            frequency: 'daily', recipients: 'operations@tourhub.com',
            lastGenerated: 'Mar 03, 2026', nextRun: 'Mar 04, 2026', status: 'paused'
        },
        'RPT-008': {
            id: 'RPT-008', name: 'Custom Executive Report', type: 'custom',
            frequency: 'monthly', recipients: 'ceo@tourhub.com',
            lastGenerated: 'Mar 01, 2026', nextRun: 'Apr 01, 2026', status: 'active'
        }
    };

    function initializeReportsPage() {
        populateScheduledReports();
        setupReportFilters();
        initializeLogout();
    }

    function populateScheduledReports() {
        const tbody = document.getElementById('scheduledReportsTableBody');
        if (!tbody) return;

        const typeIcons = {
            revenue: 'fa-money-bill-wave', bookings: 'fa-calendar-check',
            subscriptions: 'fa-crown', ads: 'fa-ad',
            vendors: 'fa-store', services: 'fa-concierge-bell', custom: 'fa-cogs'
        };

        let html = '';
        for (let id in scheduledReportsData) {
            const report = scheduledReportsData[id];
            const statusClass = 'status-' + report.status;
            const typeIcon = typeIcons[report.type] || 'fa-file-alt';

            html += `
                <tr data-report-id="${report.id}" data-status="${report.status}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(report.name.substring(0, 2))}&background=16a085&color=fff&size=36" alt="${report.name}">
                            <div>
                                <span class="table-user-name">${report.name}</span>
                                <span class="table-user-id">${report.id}</span>
                            </div>
                        </div>
                    </td>
                    <td><span class="type-badge report-type-${report.type}"><i class="fas ${typeIcon}"></i> ${report.type.charAt(0).toUpperCase() + report.type.slice(1)}</span></td>
                    <td>${report.frequency.charAt(0).toUpperCase() + report.frequency.slice(1)}</td>
                    <td>${report.recipients}</td>
                    <td>${report.lastGenerated}</td>
                    <td>${report.nextRun}</td>
                    <td><span class="status-badge ${statusClass}">${report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <button class="action-btn action-view" title="Download Report"><i class="fas fa-download"></i></button>
                            <button class="action-btn action-edit" title="Edit Schedule"><i class="fas fa-pen"></i></button>
                            <button class="action-btn action-block" title="Pause/Resume"><i class="fas fa-${report.status === 'active' ? 'pause' : 'play'}"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupReportFilters() {
        const reportType = document.getElementById('reportType');
        const reportDateRange = document.getElementById('reportDateRange');

        if (reportType) {
            reportType.addEventListener('change', function() {
                // Placeholder: could dynamically update the report KPIs and content
            });
        }

        if (reportDateRange) {
            reportDateRange.addEventListener('change', function() {
                const startDate = document.getElementById('reportStartDate');
                const endDate = document.getElementById('reportEndDate');
                if (startDate && endDate) {
                    const now = new Date();
                    switch (this.value) {
                        case 'today':
                            startDate.valueAsDate = now;
                            endDate.valueAsDate = now;
                            break;
                        case 'this-week':
                            const weekStart = new Date(now);
                            weekStart.setDate(now.getDate() - now.getDay());
                            startDate.valueAsDate = weekStart;
                            endDate.valueAsDate = now;
                            break;
                        case 'this-month':
                            startDate.valueAsDate = new Date(now.getFullYear(), now.getMonth(), 1);
                            endDate.valueAsDate = now;
                            break;
                        case 'last-month':
                            startDate.valueAsDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
                            endDate.valueAsDate = new Date(now.getFullYear(), now.getMonth(), 0);
                            break;
                        case 'this-quarter':
                            const qMonth = Math.floor(now.getMonth() / 3) * 3;
                            startDate.valueAsDate = new Date(now.getFullYear(), qMonth, 1);
                            endDate.valueAsDate = now;
                            break;
                        case 'this-year':
                            startDate.valueAsDate = new Date(now.getFullYear(), 0, 1);
                            endDate.valueAsDate = now;
                            break;
                    }
                }
            });
        }

        // Toggle scheduled report status
        document.addEventListener('click', function(e) {
            if (e.target.closest('.action-block') && e.target.closest('#scheduledReportsTableBody')) {
                const row = e.target.closest('tr');
                const reportId = row.dataset.reportId;
                if (scheduledReportsData[reportId]) {
                    scheduledReportsData[reportId].status = scheduledReportsData[reportId].status === 'active' ? 'paused' : 'active';
                    populateScheduledReports();
                }
            }
        });
    }

// ============================================
// REFUND MANAGEMENT
// ============================================

    const refundsData = {
        'RFD-001': {
            id: 'RFD-001', customer: 'Ahmed Al-Rashid', email: 'ahmed@example.com',
            bookingId: 'BKG-1234', service: 'hotel', serviceName: 'Luxury Palace Hotel - Deluxe Suite',
            bookingAmount: 4500, refundAmount: 4050, deduction: 10,
            refundType: 'full', method: 'original', status: 'pending', priority: 'high',
            paymentMethod: 'Credit Card ****4521', gateway: 'Stripe', txnRef: 'TXN-STR-88421',
            requestDate: 'Mar 01, 2026', processedDate: '',
            reason: 'Change of travel plans due to family emergency',
            eligible: true, policyCheck: 'Within 48-hour cancellation window',
            notifyEmail: 'yes', notifySms: 'yes',
            adminNotes: 'High priority - family emergency. Customer has been loyal for 2+ years.'
        },
        'RFD-002': {
            id: 'RFD-002', customer: 'Fatima Hassan', email: 'fatima.h@example.com',
            bookingId: 'BKG-1198', service: 'package', serviceName: 'Umrah Premium Package - 7 Days',
            bookingAmount: 12000, refundAmount: 10800, deduction: 10,
            refundType: 'full', method: 'original', status: 'approved', priority: 'normal',
            paymentMethod: 'Debit Card ****7832', gateway: 'Stripe', txnRef: 'TXN-STR-77312',
            requestDate: 'Feb 25, 2026', processedDate: 'Feb 27, 2026',
            reason: 'Medical condition preventing travel',
            eligible: true, policyCheck: 'Medical exemption with documentation provided',
            notifyEmail: 'yes', notifySms: 'yes',
            adminNotes: 'Medical certificate verified. Approved for full refund minus processing fee.'
        },
        'RFD-003': {
            id: 'RFD-003', customer: 'Omar Khalid', email: 'omar.k@example.com',
            bookingId: 'BKG-1156', service: 'activity', serviceName: 'Desert Safari Adventure - Premium',
            bookingAmount: 850, refundAmount: 850, deduction: 0,
            refundType: 'full', method: 'wallet', status: 'processed', priority: 'normal',
            paymentMethod: 'Wallet Balance', gateway: 'Internal', txnRef: 'TXN-INT-66201',
            requestDate: 'Feb 20, 2026', processedDate: 'Feb 22, 2026',
            reason: 'Activity cancelled by provider due to weather',
            eligible: true, policyCheck: 'Provider-initiated cancellation - full refund applicable',
            notifyEmail: 'yes', notifySms: 'no',
            adminNotes: 'Provider cancelled due to sandstorm. Full refund to wallet credited.'
        },
        'RFD-004': {
            id: 'RFD-004', customer: 'Sara Al-Mutairi', email: 'sara.m@example.com',
            bookingId: 'BKG-1089', service: 'hotel', serviceName: 'Beach Resort & Spa - Ocean View',
            bookingAmount: 6200, refundAmount: 3100, deduction: 50,
            refundType: 'partial', method: 'original', status: 'processed', priority: 'normal',
            paymentMethod: 'Credit Card ****9156', gateway: 'Stripe', txnRef: 'TXN-STR-55103',
            requestDate: 'Feb 18, 2026', processedDate: 'Feb 20, 2026',
            reason: 'Early checkout - stayed 3 of 6 nights',
            eligible: true, policyCheck: 'Partial refund per early checkout policy',
            notifyEmail: 'yes', notifySms: 'yes',
            adminNotes: 'Refund for unused nights. 50% deduction applied per policy.'
        },
        'RFD-005': {
            id: 'RFD-005', customer: 'Mohammed Al-Qahtani', email: 'moq@example.com',
            bookingId: 'BKG-1312', service: 'cab', serviceName: 'Airport Transfer - Premium Sedan',
            bookingAmount: 350, refundAmount: 0, deduction: 100,
            refundType: 'full', method: 'original', status: 'rejected', priority: 'normal',
            paymentMethod: 'UPI', gateway: 'Razorpay', txnRef: 'TXN-RZP-44890',
            requestDate: 'Mar 02, 2026', processedDate: 'Mar 03, 2026',
            reason: 'Did not like the vehicle provided',
            eligible: false, policyCheck: 'Service was completed. Post-completion refunds not eligible.',
            notifyEmail: 'yes', notifySms: 'no',
            adminNotes: 'Rejected - service was fully rendered. Suggested customer leave a review instead.'
        },
        'RFD-006': {
            id: 'RFD-006', customer: 'Layla Ibrahim', email: 'layla.i@example.com',
            bookingId: 'BKG-1278', service: 'restaurant', serviceName: 'Al Nakheel Fine Dining - Dinner for 4',
            bookingAmount: 1200, refundAmount: 1080, deduction: 10,
            refundType: 'full', method: 'bank', status: 'approved', priority: 'normal',
            paymentMethod: 'Bank Transfer', gateway: 'Direct', txnRef: 'TXN-BNK-33567',
            requestDate: 'Feb 28, 2026', processedDate: '',
            reason: 'Restaurant closed unexpectedly on booking date',
            eligible: true, policyCheck: 'Vendor-side issue. Full refund applicable.',
            notifyEmail: 'yes', notifySms: 'yes',
            adminNotes: 'Restaurant was closed for renovation without notice. Vendor has been warned.'
        },
        'RFD-007': {
            id: 'RFD-007', customer: 'Khalid Al-Dosari', email: 'khalid.d@example.com',
            bookingId: 'BKG-1345', service: 'package', serviceName: 'Jeddah City Tour - 3 Days',
            bookingAmount: 3500, refundAmount: 2450, deduction: 30,
            refundType: 'partial', method: 'original', status: 'pending', priority: 'urgent',
            paymentMethod: 'Credit Card ****6789', gateway: 'Stripe', txnRef: 'TXN-STR-22445',
            requestDate: 'Mar 03, 2026', processedDate: '',
            reason: 'Flight cancelled - unable to reach destination',
            eligible: true, policyCheck: 'Within 24-hour window. 30% deduction for late cancellation.',
            notifyEmail: 'yes', notifySms: 'yes',
            adminNotes: 'Urgent - customer requesting expedited processing. Flight cancellation proof attached.'
        },
        'RFD-008': {
            id: 'RFD-008', customer: 'Nora Al-Harbi', email: 'nora.h@example.com',
            bookingId: 'BKG-1401', service: 'hotel', serviceName: 'Mountain View Lodge - Family Room',
            bookingAmount: 2800, refundAmount: 2520, deduction: 10,
            refundType: 'full', method: 'original', status: 'pending', priority: 'normal',
            paymentMethod: 'Debit Card ****3344', gateway: 'Stripe', txnRef: 'TXN-STR-11223',
            requestDate: 'Mar 04, 2026', processedDate: '',
            reason: 'Double booking - already booked elsewhere',
            eligible: true, policyCheck: 'Standard cancellation policy applies. 10% processing fee.',
            notifyEmail: 'yes', notifySms: 'no',
            adminNotes: ''
        }
    };

    function initializeRefundManagement() {
        populateRefundsTable();
        setupRefundFilters();
        setupRefundActions();
        initializeLogout();
    }

    function populateRefundsTable() {
        const tbody = document.getElementById('refundsTableBody');
        if (!tbody) return;

        const serviceLabels = {
            hotel: 'Hotel', package: 'Package', activity: 'Activity',
            cab: 'Cab', restaurant: 'Restaurant'
        };
        const methodLabels = {
            original: 'Original Method', wallet: 'Wallet Credit', bank: 'Bank Transfer'
        };

        let html = '';
        for (let id in refundsData) {
            const refund = refundsData[id];
            const statusClass = 'status-' + refund.status;

            html += `
                <tr data-refund-id="${refund.id}" data-status="${refund.status}" data-service="${refund.service}" data-method="${refund.method}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(refund.id.substring(0, 2))}&background=e74c3c&color=fff&size=36" alt="${refund.id}">
                            <div>
                                <span class="table-user-name">${refund.id}</span>
                                <span class="table-user-id">${refund.requestDate}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(refund.customer)}&background=16a085&color=fff&size=36" alt="${refund.customer}">
                            <div>
                                <span class="table-user-name">${refund.customer}</span>
                                <span class="table-user-id">${refund.email}</span>
                            </div>
                        </div>
                    </td>
                    <td>${refund.bookingId}</td>
                    <td><span class="type-badge service-${refund.service}"><i class="fas fa-${refund.service === 'hotel' ? 'hotel' : refund.service === 'package' ? 'suitcase-rolling' : refund.service === 'activity' ? 'hiking' : refund.service === 'cab' ? 'taxi' : 'utensils'}"></i> ${serviceLabels[refund.service]}</span></td>
                    <td>SAR ${refund.refundAmount.toLocaleString()}</td>
                    <td>${methodLabels[refund.method]}</td>
                    <td><span class="status-badge ${statusClass}">${refund.status.charAt(0).toUpperCase() + refund.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="refund-view.html?id=${refund.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="refund-edit.html?id=${refund.id}" class="action-btn action-edit" title="Process Refund"><i class="fas fa-pen"></i></a>
                            ${refund.status === 'pending' ? '<button class="action-btn action-approve" title="Quick Approve"><i class="fas fa-check"></i></button>' : ''}
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupRefundFilters() {
        const searchInput = document.getElementById('refundSearchInput');
        const statusFilter = document.getElementById('refundStatusFilter');
        const serviceFilter = document.getElementById('refundServiceFilter');
        const methodFilter = document.getElementById('refundMethodFilter');

        if (searchInput) searchInput.addEventListener('input', filterRefunds);
        if (statusFilter) statusFilter.addEventListener('change', filterRefunds);
        if (serviceFilter) serviceFilter.addEventListener('change', filterRefunds);
        if (methodFilter) methodFilter.addEventListener('change', filterRefunds);
    }

    function filterRefunds() {
        const searchTerm = document.getElementById('refundSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('refundStatusFilter')?.value || 'all';
        const serviceFilter = document.getElementById('refundServiceFilter')?.value || 'all';
        const methodFilter = document.getElementById('refundMethodFilter')?.value || 'all';

        const rows = document.querySelectorAll('#refundsTableBody tr');
        rows.forEach(row => {
            const refundId = row.dataset.refundId;
            const refund = refundsData[refundId];
            const matchesSearch = refund.id.toLowerCase().includes(searchTerm) || refund.customer.toLowerCase().includes(searchTerm) || refund.bookingId.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || refund.status === statusFilter;
            const matchesService = serviceFilter === 'all' || refund.service === serviceFilter;
            const matchesMethod = methodFilter === 'all' || refund.method === methodFilter;
            row.style.display = (matchesSearch && matchesStatus && matchesService && matchesMethod) ? '' : 'none';
        });
    }

    function setupRefundActions() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.action-approve') && e.target.closest('#refundsTableBody')) {
                const row = e.target.closest('tr');
                const refundId = row.dataset.refundId;
                if (refundsData[refundId] && refundsData[refundId].status === 'pending') {
                    refundsData[refundId].status = 'approved';
                    populateRefundsTable();
                }
            }
        });
    }

    function initializeRefundViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const refundId = urlParams.get('id');

        if (refundId && refundsData[refundId]) {
            populateRefundView(refundsData[refundId]);
        }

        const editLink = document.getElementById('editRefundLink');
        if (editLink && refundId) {
            editLink.href = 'refund-edit.html?id=' + refundId;
        }

        initializeLogout();
    }

    function populateRefundView(refund) {
        document.getElementById('viewRefundId').textContent = refund.id;
        document.getElementById('viewRefundTitle').textContent = 'Refund ' + refund.id;
        document.getElementById('viewRefundAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(refund.id.substring(0, 2)) + '&background=e74c3c&color=fff&size=120';
        document.getElementById('viewRefundBookingId').textContent = '#' + refund.bookingId;

        const statusEl = document.getElementById('viewRefundStatus');
        statusEl.textContent = refund.status.charAt(0).toUpperCase() + refund.status.slice(1);
        statusEl.className = 'status-badge status-' + refund.status;

        document.getElementById('viewRefundCustomer').textContent = refund.customer;
        document.getElementById('viewRefundEmail').textContent = refund.email;
        document.getElementById('viewRefundService').textContent = refund.serviceName;
        document.getElementById('viewRefundBookingAmount').textContent = 'SAR ' + refund.bookingAmount.toLocaleString();
        document.getElementById('viewRefundAmount').textContent = 'SAR ' + refund.refundAmount.toLocaleString();
        document.getElementById('viewRefundType').textContent = refund.refundType === 'full' ? 'Full Refund (' + (100 - refund.deduction) + '%)' : 'Partial Refund (' + (100 - refund.deduction) + '%)';

        const methodLabels = { original: 'Original Payment Method', wallet: 'Wallet Credit', bank: 'Bank Transfer' };
        document.getElementById('viewRefundMethod').textContent = methodLabels[refund.method];
        document.getElementById('viewRefundDate').textContent = refund.requestDate;
        document.getElementById('viewRefundReason').textContent = refund.reason;

        // Eligibility
        const eligEl = document.getElementById('viewRefundEligibility');
        if (eligEl) {
            eligEl.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Eligibility</span>
                    <span class="info-value"><span class="status-badge ${refund.eligible ? 'status-active' : 'status-rejected'}">${refund.eligible ? 'Eligible' : 'Not Eligible'}</span></span>
                </div>
                <div class="info-item">
                    <span class="info-label">Policy Check</span>
                    <span class="info-value">${refund.policyCheck}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Cancellation Deduction</span>
                    <span class="info-value">${refund.deduction}%</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Priority</span>
                    <span class="info-value"><span class="priority-badge priority-${refund.priority === 'urgent' ? 'high' : refund.priority === 'high' ? 'high' : 'low'}">${refund.priority.charAt(0).toUpperCase() + refund.priority.slice(1)}</span></span>
                </div>
            `;
        }

        // Payment Details
        const payEl = document.getElementById('viewRefundPayment');
        if (payEl) {
            payEl.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Original Payment</span>
                    <span class="info-value">${refund.paymentMethod}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Payment Gateway</span>
                    <span class="info-value">${refund.gateway}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Transaction Reference</span>
                    <span class="info-value">${refund.txnRef}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Booking Amount</span>
                    <span class="info-value">SAR ${refund.bookingAmount.toLocaleString()}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Deduction (${refund.deduction}%)</span>
                    <span class="info-value">SAR ${(refund.bookingAmount * refund.deduction / 100).toLocaleString()}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Refund Amount</span>
                    <span class="info-value"><strong>SAR ${refund.refundAmount.toLocaleString()}</strong></span>
                </div>
            `;
        }

        // Routing
        const routeEl = document.getElementById('viewRefundRouting');
        if (routeEl) {
            routeEl.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Refund To</span>
                    <span class="info-value">${methodLabels[refund.method]}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Payment Instrument</span>
                    <span class="info-value">${refund.paymentMethod}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Gateway Used</span>
                    <span class="info-value">${refund.gateway}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Estimated Processing</span>
                    <span class="info-value">${refund.method === 'wallet' ? 'Instant' : refund.method === 'original' ? '3-5 business days' : '5-7 business days'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Email Notification</span>
                    <span class="info-value">${refund.notifyEmail === 'yes' ? 'Enabled' : 'Disabled'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">SMS Notification</span>
                    <span class="info-value">${refund.notifySms === 'yes' ? 'Enabled' : 'Disabled'}</span>
                </div>
            `;
        }

        // Timeline
        const timelineEl = document.getElementById('viewRefundTimeline');
        if (timelineEl) {
            timelineEl.innerHTML = `
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-plus-circle"></i></div>
                    <div class="activity-content">
                        <p>Refund request submitted by ${refund.customer}</p>
                        <span class="activity-time">${refund.requestDate}</span>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-clipboard-check"></i></div>
                    <div class="activity-content">
                        <p>Eligibility check: ${refund.eligible ? 'Passed' : 'Failed'} - ${refund.policyCheck}</p>
                        <span class="activity-time">${refund.requestDate}</span>
                    </div>
                </div>
                ${refund.status !== 'pending' ? `<div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-${refund.status === 'rejected' ? 'times-circle' : 'check-circle'}"></i></div>
                    <div class="activity-content">
                        <p>Refund ${refund.status} by Admin${refund.processedDate ? ' - Amount: SAR ' + refund.refundAmount.toLocaleString() : ''}</p>
                        <span class="activity-time">${refund.processedDate || 'Processing'}</span>
                    </div>
                </div>` : ''}
                ${refund.status === 'processed' ? `<div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-money-bill-wave"></i></div>
                    <div class="activity-content">
                        <p>Refund of SAR ${refund.refundAmount.toLocaleString()} processed to ${methodLabels[refund.method]}</p>
                        <span class="activity-time">${refund.processedDate}</span>
                    </div>
                </div>` : ''}
            `;
        }
    }

    function initializeRefundEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const refundId = urlParams.get('id');

        if (refundId && refundsData[refundId]) {
            populateRefundEdit(refundsData[refundId]);
        }

        const form = document.getElementById('refundEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() {
                    window.location.href = 'refund-view.html?id=' + refundId;
                }, 1000);
            });
        }

        initializeLogout();
    }

    function populateRefundEdit(refund) {
        document.getElementById('editRefundDisplayName').textContent = refund.id;
        document.getElementById('editRefundDisplayId').textContent = '#' + refund.bookingId;
        const statusDisplay = document.getElementById('editRefundDisplayStatus');
        statusDisplay.textContent = refund.status.charAt(0).toUpperCase() + refund.status.slice(1);
        statusDisplay.className = 'status-badge status-' + refund.status;
        document.getElementById('editRefundCustomerDisplay').textContent = refund.customer;
        document.getElementById('editRefundBookingAmountDisplay').textContent = 'SAR ' + refund.bookingAmount.toLocaleString();
        document.getElementById('editRefundStatus').value = refund.status;
        document.getElementById('editRefundPriority').value = refund.priority;
        document.getElementById('editRefundOriginalAmount').value = refund.bookingAmount;
        document.getElementById('editRefundDeduction').value = refund.deduction;
        document.getElementById('editRefundFinalAmount').value = refund.refundAmount;
        document.getElementById('editRefundType').value = refund.refundType;
        document.getElementById('editRefundMethod').value = refund.method;
        document.getElementById('editRefundPaymentMethod').value = refund.paymentMethod;
        document.getElementById('editRefundGateway').value = refund.gateway;
        document.getElementById('editRefundTxnRef').value = refund.txnRef;
        document.getElementById('editRefundNotifyEmail').value = refund.notifyEmail;
        document.getElementById('editRefundNotifySms').value = refund.notifySms;
        document.getElementById('editRefundAdminNotes').value = refund.adminNotes || '';
    }

// ============================================
// TRANSACTION MANAGEMENT
// ============================================

    const transactionsData = {
        'TXN-00001': {
            id: 'TXN-00001', user: 'Ahmed Al-Rashid', email: 'ahmed@example.com',
            type: 'booking', typeName: 'Booking Payment', amount: 4500, currency: 'SAR',
            method: 'credit-card', methodName: 'Credit Card ****4521',
            gateway: 'Stripe', gatewayRef: 'ch_3PqR5s2eZvKY3',
            status: 'completed', date: 'Mar 01, 2026 14:32',
            relatedId: 'BKG-1234', relatedType: 'Booking',
            commission: 12, commissionAmount: 540, netAmount: 3960,
            vendorName: 'Luxury Palace Hotel', vendorId: 'VND-015',
            settlementStatus: 'settled', settlementDate: 'Mar 03, 2026',
            gatewayStatus: 'succeeded', gatewayMessage: 'Payment processed successfully',
            ip: '92.168.1.45', country: 'Saudi Arabia'
        },
        'TXN-00002': {
            id: 'TXN-00002', user: 'Fatima Hassan', email: 'fatima.h@example.com',
            type: 'booking', typeName: 'Booking Payment', amount: 12000, currency: 'SAR',
            method: 'debit-card', methodName: 'Debit Card ****7832',
            gateway: 'Stripe', gatewayRef: 'ch_4TuV8w3fAkLZ6',
            status: 'completed', date: 'Feb 25, 2026 09:15',
            relatedId: 'BKG-1198', relatedType: 'Booking',
            commission: 10, commissionAmount: 1200, netAmount: 10800,
            vendorName: 'Umrah Travel Co.', vendorId: 'VND-022',
            settlementStatus: 'settled', settlementDate: 'Feb 28, 2026',
            gatewayStatus: 'succeeded', gatewayMessage: 'Payment processed successfully',
            ip: '10.0.0.88', country: 'Saudi Arabia'
        },
        'TXN-00003': {
            id: 'TXN-00003', user: 'Omar Khalid', email: 'omar.k@example.com',
            type: 'booking', typeName: 'Booking Payment', amount: 850, currency: 'SAR',
            method: 'wallet', methodName: 'Wallet Balance',
            gateway: 'Internal', gatewayRef: 'WAL-66201',
            status: 'refunded', date: 'Feb 20, 2026 16:45',
            relatedId: 'BKG-1156', relatedType: 'Booking',
            commission: 15, commissionAmount: 127.5, netAmount: 722.5,
            vendorName: 'Desert Adventures LLC', vendorId: 'VND-031',
            settlementStatus: 'reversed', settlementDate: 'Feb 22, 2026',
            gatewayStatus: 'refunded', gatewayMessage: 'Full refund processed',
            ip: '172.16.0.12', country: 'Saudi Arabia'
        },
        'TXN-00004': {
            id: 'TXN-00004', user: 'Premium Hotels Group', email: 'billing@premiumhotels.sa',
            type: 'subscription', typeName: 'Subscription Payment', amount: 999, currency: 'SAR',
            method: 'bank-transfer', methodName: 'Bank Transfer - Al Rajhi',
            gateway: 'Direct', gatewayRef: 'BNK-SUB-441',
            status: 'completed', date: 'Mar 01, 2026 00:01',
            relatedId: 'SUB-045', relatedType: 'Subscription',
            commission: 0, commissionAmount: 0, netAmount: 999,
            vendorName: 'Premium Hotels Group', vendorId: 'VND-008',
            settlementStatus: 'settled', settlementDate: 'Mar 01, 2026',
            gatewayStatus: 'succeeded', gatewayMessage: 'Bank transfer confirmed',
            ip: '192.168.5.10', country: 'Saudi Arabia'
        },
        'TXN-00005': {
            id: 'TXN-00005', user: 'Riyadh Tours Inc.', email: 'ads@riyadhtours.com',
            type: 'ads', typeName: 'Ads Billing', amount: 2500, currency: 'SAR',
            method: 'credit-card', methodName: 'Credit Card ****1122',
            gateway: 'Stripe', gatewayRef: 'ch_7XyZ1a4gBlMA9',
            status: 'completed', date: 'Mar 02, 2026 10:00',
            relatedId: 'AD-018', relatedType: 'Ad Campaign',
            commission: 0, commissionAmount: 0, netAmount: 2500,
            vendorName: 'Riyadh Tours Inc.', vendorId: 'VND-019',
            settlementStatus: 'settled', settlementDate: 'Mar 04, 2026',
            gatewayStatus: 'succeeded', gatewayMessage: 'Payment captured',
            ip: '10.10.10.5', country: 'Saudi Arabia'
        },
        'TXN-00006': {
            id: 'TXN-00006', user: 'Omar Khalid', email: 'omar.k@example.com',
            type: 'refund', typeName: 'Refund', amount: 850, currency: 'SAR',
            method: 'wallet', methodName: 'Wallet Credit',
            gateway: 'Internal', gatewayRef: 'RFD-WAL-66201',
            status: 'completed', date: 'Feb 22, 2026 11:30',
            relatedId: 'RFD-003', relatedType: 'Refund',
            commission: 0, commissionAmount: 0, netAmount: 850,
            vendorName: 'Desert Adventures LLC', vendorId: 'VND-031',
            settlementStatus: 'settled', settlementDate: 'Feb 22, 2026',
            gatewayStatus: 'succeeded', gatewayMessage: 'Wallet credit applied',
            ip: 'System', country: 'N/A'
        },
        'TXN-00007': {
            id: 'TXN-00007', user: 'Luxury Palace Hotel', email: 'finance@luxurypalace.sa',
            type: 'payout', typeName: 'Vendor Payout', amount: 39600, currency: 'SAR',
            method: 'bank-transfer', methodName: 'Bank Transfer - Al Rajhi ****4521',
            gateway: 'Direct', gatewayRef: 'PAY-2026-001',
            status: 'completed', date: 'Mar 03, 2026 08:00',
            relatedId: 'PAY-001', relatedType: 'Payout',
            commission: 0, commissionAmount: 0, netAmount: 39600,
            vendorName: 'Luxury Palace Hotel', vendorId: 'VND-015',
            settlementStatus: 'settled', settlementDate: 'Mar 03, 2026',
            gatewayStatus: 'succeeded', gatewayMessage: 'Bank transfer initiated',
            ip: 'System', country: 'N/A'
        },
        'TXN-00008': {
            id: 'TXN-00008', user: 'Sara Al-Mutairi', email: 'sara.m@example.com',
            type: 'booking', typeName: 'Booking Payment', amount: 6200, currency: 'SAR',
            method: 'credit-card', methodName: 'Credit Card ****9156',
            gateway: 'Stripe', gatewayRef: 'ch_9AbC2d5hCnOB1',
            status: 'completed', date: 'Feb 15, 2026 18:22',
            relatedId: 'BKG-1089', relatedType: 'Booking',
            commission: 12, commissionAmount: 744, netAmount: 5456,
            vendorName: 'Beach Resort & Spa', vendorId: 'VND-028',
            settlementStatus: 'settled', settlementDate: 'Feb 18, 2026',
            gatewayStatus: 'succeeded', gatewayMessage: 'Payment processed successfully',
            ip: '88.45.12.67', country: 'Saudi Arabia'
        },
        'TXN-00009': {
            id: 'TXN-00009', user: 'Khalid Al-Dosari', email: 'khalid.d@example.com',
            type: 'booking', typeName: 'Booking Payment', amount: 3500, currency: 'SAR',
            method: 'credit-card', methodName: 'Credit Card ****6789',
            gateway: 'Stripe', gatewayRef: 'ch_0DeF3e6iDoPC2',
            status: 'pending', date: 'Mar 03, 2026 20:10',
            relatedId: 'BKG-1345', relatedType: 'Booking',
            commission: 10, commissionAmount: 350, netAmount: 3150,
            vendorName: 'Jeddah City Tours', vendorId: 'VND-035',
            settlementStatus: 'pending', settlementDate: '',
            gatewayStatus: 'pending', gatewayMessage: 'Awaiting payment confirmation',
            ip: '45.67.89.12', country: 'Saudi Arabia'
        },
        'TXN-00010': {
            id: 'TXN-00010', user: 'Adventure Seekers Co.', email: 'billing@adventureseekers.sa',
            type: 'commission', typeName: 'Commission Deduction', amount: 1850, currency: 'SAR',
            method: 'bank-transfer', methodName: 'Auto-deduction',
            gateway: 'Internal', gatewayRef: 'COM-2026-FEB',
            status: 'completed', date: 'Mar 01, 2026 00:05',
            relatedId: 'COM-FEB-2026', relatedType: 'Monthly Commission',
            commission: 0, commissionAmount: 1850, netAmount: 0,
            vendorName: 'Adventure Seekers Co.', vendorId: 'VND-042',
            settlementStatus: 'settled', settlementDate: 'Mar 01, 2026',
            gatewayStatus: 'succeeded', gatewayMessage: 'Auto-deduction processed',
            ip: 'System', country: 'N/A'
        }
    };

    function initializeTransactionManagement() {
        populateTransactionsTable();
        setupTransactionFilters();
        initializeLogout();
    }

    function populateTransactionsTable() {
        const tbody = document.getElementById('transactionsTableBody');
        if (!tbody) return;

        const typeIcons = {
            booking: 'fa-calendar-check', subscription: 'fa-crown',
            ads: 'fa-ad', refund: 'fa-undo-alt',
            payout: 'fa-wallet', commission: 'fa-percentage'
        };

        let html = '';
        for (let id in transactionsData) {
            const txn = transactionsData[id];
            const statusClass = 'status-' + txn.status;
            const typeIcon = typeIcons[txn.type] || 'fa-exchange-alt';

            html += `
                <tr data-txn-id="${txn.id}" data-type="${txn.type}" data-status="${txn.status}" data-method="${txn.method}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(txn.id.substring(4, 9))}&background=3498db&color=fff&size=36" alt="${txn.id}">
                            <div>
                                <span class="table-user-name">${txn.id}</span>
                                <span class="table-user-id">${txn.gatewayRef}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(txn.user)}&background=16a085&color=fff&size=36" alt="${txn.user}">
                            <div>
                                <span class="table-user-name">${txn.user}</span>
                                <span class="table-user-id">${txn.email}</span>
                            </div>
                        </div>
                    </td>
                    <td><span class="type-badge txn-type-${txn.type}"><i class="fas ${typeIcon}"></i> ${txn.typeName}</span></td>
                    <td>${txn.type === 'refund' || txn.type === 'payout' ? '-' : ''}SAR ${txn.amount.toLocaleString()}</td>
                    <td>${txn.methodName.split(' ')[0]} ${txn.methodName.split(' ')[1] || ''}</td>
                    <td>${txn.date}</td>
                    <td><span class="status-badge ${statusClass}">${txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="transaction-view.html?id=${txn.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <button class="action-btn action-edit" title="Download Receipt"><i class="fas fa-download"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupTransactionFilters() {
        const searchInput = document.getElementById('transactionSearchInput');
        const typeFilter = document.getElementById('transactionTypeFilter');
        const statusFilter = document.getElementById('transactionStatusFilter');
        const methodFilter = document.getElementById('transactionMethodFilter');

        if (searchInput) searchInput.addEventListener('input', filterTransactions);
        if (typeFilter) typeFilter.addEventListener('change', filterTransactions);
        if (statusFilter) statusFilter.addEventListener('change', filterTransactions);
        if (methodFilter) methodFilter.addEventListener('change', filterTransactions);
    }

    function filterTransactions() {
        const searchTerm = document.getElementById('transactionSearchInput')?.value.toLowerCase() || '';
        const typeFilter = document.getElementById('transactionTypeFilter')?.value || 'all';
        const statusFilter = document.getElementById('transactionStatusFilter')?.value || 'all';
        const methodFilter = document.getElementById('transactionMethodFilter')?.value || 'all';

        const rows = document.querySelectorAll('#transactionsTableBody tr');
        rows.forEach(row => {
            const txnId = row.dataset.txnId;
            const txn = transactionsData[txnId];
            const matchesSearch = txn.id.toLowerCase().includes(searchTerm) || txn.user.toLowerCase().includes(searchTerm) || txn.gatewayRef.toLowerCase().includes(searchTerm);
            const matchesType = typeFilter === 'all' || txn.type === typeFilter;
            const matchesStatus = statusFilter === 'all' || txn.status === statusFilter;
            const matchesMethod = methodFilter === 'all' || txn.method === methodFilter;
            row.style.display = (matchesSearch && matchesType && matchesStatus && matchesMethod) ? '' : 'none';
        });
    }

    function initializeTransactionViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const txnId = urlParams.get('id');

        if (txnId && transactionsData[txnId]) {
            populateTransactionView(transactionsData[txnId]);
        }

        initializeLogout();
    }

    function populateTransactionView(txn) {
        document.getElementById('viewTxnId').textContent = txn.id;
        document.getElementById('viewTxnTitle').textContent = 'Transaction ' + txn.id;
        document.getElementById('viewTxnAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(txn.id.substring(4, 9)) + '&background=3498db&color=fff&size=120';
        document.getElementById('viewTxnType').textContent = txn.typeName;

        const statusEl = document.getElementById('viewTxnStatus');
        statusEl.textContent = txn.status.charAt(0).toUpperCase() + txn.status.slice(1);
        statusEl.className = 'status-badge status-' + txn.status;

        document.getElementById('viewTxnUser').textContent = txn.user;
        document.getElementById('viewTxnEmail').textContent = txn.email;
        document.getElementById('viewTxnAmount').textContent = txn.currency + ' ' + txn.amount.toLocaleString();
        document.getElementById('viewTxnMethod').textContent = txn.methodName;
        document.getElementById('viewTxnDate').textContent = txn.date;
        document.getElementById('viewTxnRef').textContent = txn.gatewayRef;
        document.getElementById('viewTxnGateway').textContent = txn.gateway;
        document.getElementById('viewTxnBooking').textContent = txn.relatedId + ' (' + txn.relatedType + ')';

        // Settlement
        const settlementEl = document.getElementById('viewTxnSettlement');
        if (settlementEl) {
            settlementEl.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Settlement Status</span>
                    <span class="info-value"><span class="status-badge status-${txn.settlementStatus === 'settled' ? 'completed' : txn.settlementStatus === 'reversed' ? 'refunded' : 'pending'}">${txn.settlementStatus.charAt(0).toUpperCase() + txn.settlementStatus.slice(1)}</span></span>
                </div>
                <div class="info-item">
                    <span class="info-label">Settlement Date</span>
                    <span class="info-value">${txn.settlementDate || 'Pending'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Vendor</span>
                    <span class="info-value">${txn.vendorName} (${txn.vendorId})</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Net to Vendor</span>
                    <span class="info-value">${txn.currency} ${txn.netAmount.toLocaleString()}</span>
                </div>
            `;
        }

        // Commission
        const commEl = document.getElementById('viewTxnCommission');
        if (commEl) {
            if (txn.commission > 0) {
                commEl.innerHTML = `
                    <div class="info-item">
                        <span class="info-label">Commission Rate</span>
                        <span class="info-value">${txn.commission}%</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Commission Amount</span>
                        <span class="info-value">${txn.currency} ${txn.commissionAmount.toLocaleString()}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Gross Amount</span>
                        <span class="info-value">${txn.currency} ${txn.amount.toLocaleString()}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Net After Commission</span>
                        <span class="info-value">${txn.currency} ${txn.netAmount.toLocaleString()}</span>
                    </div>
                `;
            } else {
                commEl.innerHTML = `
                    <div class="info-item">
                        <span class="info-label">Commission</span>
                        <span class="info-value">N/A - ${txn.typeName}</span>
                    </div>
                `;
            }
        }

        // Gateway Response
        const gwEl = document.getElementById('viewTxnGatewayResponse');
        if (gwEl) {
            gwEl.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Gateway</span>
                    <span class="info-value">${txn.gateway}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Gateway Reference</span>
                    <span class="info-value">${txn.gatewayRef}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Gateway Status</span>
                    <span class="info-value"><span class="status-badge status-${txn.gatewayStatus === 'succeeded' ? 'completed' : txn.gatewayStatus === 'refunded' ? 'refunded' : 'pending'}">${txn.gatewayStatus}</span></span>
                </div>
                <div class="info-item">
                    <span class="info-label">Message</span>
                    <span class="info-value">${txn.gatewayMessage}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">IP Address</span>
                    <span class="info-value">${txn.ip}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Country</span>
                    <span class="info-value">${txn.country}</span>
                </div>
            `;
        }

        // Timeline
        const timelineEl = document.getElementById('viewTxnTimeline');
        if (timelineEl) {
            timelineEl.innerHTML = `
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-plus-circle"></i></div>
                    <div class="activity-content">
                        <p>Transaction initiated - ${txn.typeName}</p>
                        <span class="activity-time">${txn.date}</span>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-credit-card"></i></div>
                    <div class="activity-content">
                        <p>Payment via ${txn.methodName} through ${txn.gateway}</p>
                        <span class="activity-time">${txn.date}</span>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-${txn.status === 'completed' ? 'check-circle' : txn.status === 'refunded' ? 'undo-alt' : 'clock'}"></i></div>
                    <div class="activity-content">
                        <p>Gateway response: ${txn.gatewayMessage}</p>
                        <span class="activity-time">${txn.date}</span>
                    </div>
                </div>
                ${txn.settlementDate ? `<div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-university"></i></div>
                    <div class="activity-content">
                        <p>Settlement ${txn.settlementStatus} - ${txn.currency} ${txn.netAmount.toLocaleString()} to ${txn.vendorName}</p>
                        <span class="activity-time">${txn.settlementDate}</span>
                    </div>
                </div>` : ''}
                ${txn.commission > 0 ? `<div class="activity-item">
                    <div class="activity-icon"><i class="fas fa-percentage"></i></div>
                    <div class="activity-content">
                        <p>Commission of ${txn.currency} ${txn.commissionAmount.toLocaleString()} (${txn.commission}%) deducted</p>
                        <span class="activity-time">${txn.settlementDate || txn.date}</span>
                    </div>
                </div>` : ''}
            `;
        }
    }

// ============================================
// PUSH NOTIFICATIONS MANAGEMENT
// ============================================

    const notificationsData = {
        'NTF-001': {
            id: 'NTF-001', title: 'Ramadan Special Offers', subject: 'Exclusive Ramadan Deals - Up to 40% Off!',
            body: 'Discover amazing Ramadan deals on hotels, packages, and activities. Book now and save up to 40% on your next trip. Limited time offer valid until the end of Ramadan. Use code RAMADAN40 at checkout.',
            type: 'broadcast', target: 'all-users', targetLabel: 'All Users',
            status: 'sent', priority: 'high', recipients: 2450, delivered: 2380, opened: 1632, clicked: 845,
            openRate: 68.6, clickRate: 34.5,
            sentDate: 'Mar 01, 2026 10:00', scheduledDate: '',
            channels: 'Push, Email', pushEnabled: 'yes', emailEnabled: 'yes', smsEnabled: 'no',
            actionUrl: 'https://tourhub.com/ramadan-deals',
            createdBy: 'Admin User', createdDate: 'Feb 28, 2026'
        },
        'NTF-002': {
            id: 'NTF-002', title: 'New Hotel Partner', subject: 'Welcome Beach Resort & Spa to TourHub!',
            body: 'We are excited to announce our newest hotel partner - Beach Resort & Spa. Enjoy world-class amenities, ocean views, and exclusive introductory rates. Book your stay today!',
            type: 'broadcast', target: 'all-users', targetLabel: 'All Users',
            status: 'sent', priority: 'normal', recipients: 2450, delivered: 2401, opened: 1470, clicked: 623,
            openRate: 61.2, clickRate: 25.9,
            sentDate: 'Feb 25, 2026 14:30', scheduledDate: '',
            channels: 'Push, Email', pushEnabled: 'yes', emailEnabled: 'yes', smsEnabled: 'no',
            actionUrl: 'https://tourhub.com/beach-resort',
            createdBy: 'Admin User', createdDate: 'Feb 24, 2026'
        },
        'NTF-003': {
            id: 'NTF-003', title: 'Commission Update', subject: 'Important: Commission Rate Changes Effective April 1',
            body: 'Dear Vendor, Please be informed that commission rates will be updated effective April 1, 2026. Hotel commissions will be adjusted to 12% and activity commissions to 15%. Please review the updated terms in your vendor dashboard.',
            type: 'vendor', target: 'all-vendors', targetLabel: 'All Vendors',
            status: 'sent', priority: 'high', recipients: 186, delivered: 186, opened: 172, clicked: 145,
            openRate: 92.5, clickRate: 78.0,
            sentDate: 'Feb 28, 2026 09:00', scheduledDate: '',
            channels: 'Push, Email, SMS', pushEnabled: 'yes', emailEnabled: 'yes', smsEnabled: 'yes',
            actionUrl: '',
            createdBy: 'Admin User', createdDate: 'Feb 27, 2026'
        },
        'NTF-004': {
            id: 'NTF-004', title: 'System Maintenance', subject: 'Scheduled Maintenance - March 10, 2026',
            body: 'The TourHub platform will undergo scheduled maintenance on March 10, 2026 from 2:00 AM to 6:00 AM (AST). During this time, the platform may be temporarily unavailable. We apologize for any inconvenience.',
            type: 'system', target: 'everyone', targetLabel: 'Everyone',
            status: 'scheduled', priority: 'high', recipients: 0, delivered: 0, opened: 0, clicked: 0,
            openRate: 0, clickRate: 0,
            sentDate: '', scheduledDate: 'Mar 08, 2026 09:00',
            channels: 'Push, Email', pushEnabled: 'yes', emailEnabled: 'yes', smsEnabled: 'no',
            actionUrl: '',
            createdBy: 'Admin User', createdDate: 'Mar 03, 2026'
        },
        'NTF-005': {
            id: 'NTF-005', title: 'Welcome New Users', subject: 'Welcome to TourHub! Start Exploring',
            body: 'Welcome aboard! Explore thousands of destinations, hotels, and activities. Complete your profile to get personalized recommendations. Enjoy 10% off your first booking with code WELCOME10.',
            type: 'targeted', target: 'specific-group', targetLabel: 'New Users (30 days)',
            status: 'sent', priority: 'normal', recipients: 342, delivered: 340, opened: 278, clicked: 195,
            openRate: 81.8, clickRate: 57.4,
            sentDate: 'Mar 02, 2026 08:00', scheduledDate: '',
            channels: 'Push, Email', pushEnabled: 'yes', emailEnabled: 'yes', smsEnabled: 'no',
            actionUrl: 'https://tourhub.com/get-started',
            createdBy: 'Admin User', createdDate: 'Mar 01, 2026'
        },
        'NTF-006': {
            id: 'NTF-006', title: 'Provider Verification', subject: 'Action Required: Complete Your Verification',
            body: 'Dear Provider, Your account verification is pending. Please upload the required documents to continue receiving bookings. Accounts not verified by March 15 will be temporarily suspended.',
            type: 'provider', target: 'all-providers', targetLabel: 'All Providers',
            status: 'sent', priority: 'urgent', recipients: 45, delivered: 45, opened: 42, clicked: 38,
            openRate: 93.3, clickRate: 84.4,
            sentDate: 'Mar 01, 2026 11:00', scheduledDate: '',
            channels: 'Push, Email, SMS', pushEnabled: 'yes', emailEnabled: 'yes', smsEnabled: 'yes',
            actionUrl: '',
            createdBy: 'Admin User', createdDate: 'Feb 28, 2026'
        },
        'NTF-007': {
            id: 'NTF-007', title: 'Summer Early Bird', subject: 'Book Summer 2026 Early & Save 25%!',
            body: 'Summer is coming! Book your summer vacation now and enjoy 25% early bird discount on selected hotels, packages, and activities. Offer valid for bookings made before April 30, 2026.',
            type: 'broadcast', target: 'all-users', targetLabel: 'All Users',
            status: 'draft', priority: 'normal', recipients: 0, delivered: 0, opened: 0, clicked: 0,
            openRate: 0, clickRate: 0,
            sentDate: '', scheduledDate: '',
            channels: 'Push, Email', pushEnabled: 'yes', emailEnabled: 'yes', smsEnabled: 'no',
            actionUrl: 'https://tourhub.com/summer-deals',
            createdBy: 'Admin User', createdDate: 'Mar 04, 2026'
        },
        'NTF-008': {
            id: 'NTF-008', title: 'Weekend Flash Sale', subject: 'Flash Sale: 48 Hours Only!',
            body: 'This weekend only! Get up to 50% off on desert safari adventures and city tours. Book between Friday 6 PM and Sunday 6 PM to grab this deal. Limited availability!',
            type: 'broadcast', target: 'all-users', targetLabel: 'All Users',
            status: 'scheduled', priority: 'normal', recipients: 0, delivered: 0, opened: 0, clicked: 0,
            openRate: 0, clickRate: 0,
            sentDate: '', scheduledDate: 'Mar 07, 2026 18:00',
            channels: 'Push, Email, SMS', pushEnabled: 'yes', emailEnabled: 'yes', smsEnabled: 'yes',
            actionUrl: 'https://tourhub.com/flash-sale',
            createdBy: 'Admin User', createdDate: 'Mar 05, 2026'
        }
    };

    function initializeNotificationManagement() {
        populateNotificationsTable();
        setupNotificationFilters();
        initializeLogout();
    }

    function populateNotificationsTable() {
        const tbody = document.getElementById('notificationsTableBody');
        if (!tbody) return;

        let html = '';
        for (let id in notificationsData) {
            const notif = notificationsData[id];
            const statusClass = 'status-' + notif.status;

            html += `
                <tr data-notif-id="${notif.id}" data-type="${notif.type}" data-status="${notif.status}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(notif.id.substring(0, 2))}&background=f39c12&color=fff&size=36" alt="${notif.id}">
                            <div>
                                <span class="table-user-name">${notif.title}</span>
                                <span class="table-user-id">${notif.id}</span>
                            </div>
                        </div>
                    </td>
                    <td>${notif.targetLabel}</td>
                    <td><span class="type-badge notif-type-${notif.type}">${notif.type.charAt(0).toUpperCase() + notif.type.slice(1)}</span></td>
                    <td>${notif.recipients > 0 ? notif.recipients.toLocaleString() : '-'}</td>
                    <td>${notif.openRate > 0 ? notif.openRate + '%' : '-'}</td>
                    <td>${notif.sentDate || notif.scheduledDate || '-'}</td>
                    <td><span class="status-badge ${statusClass}">${notif.status.charAt(0).toUpperCase() + notif.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="notification-view.html?id=${notif.id}" class="action-btn action-view" title="View Details"><i class="fas fa-eye"></i></a>
                            <a href="notification-edit.html?id=${notif.id}" class="action-btn action-edit" title="Edit"><i class="fas fa-pen"></i></a>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupNotificationFilters() {
        const searchInput = document.getElementById('notificationSearchInput');
        const typeFilter = document.getElementById('notificationTypeFilter');
        const statusFilter = document.getElementById('notificationStatusFilter');

        if (searchInput) searchInput.addEventListener('input', filterNotifications);
        if (typeFilter) typeFilter.addEventListener('change', filterNotifications);
        if (statusFilter) statusFilter.addEventListener('change', filterNotifications);
    }

    function filterNotifications() {
        const searchTerm = document.getElementById('notificationSearchInput')?.value.toLowerCase() || '';
        const typeFilter = document.getElementById('notificationTypeFilter')?.value || 'all';
        const statusFilter = document.getElementById('notificationStatusFilter')?.value || 'all';

        const rows = document.querySelectorAll('#notificationsTableBody tr');
        rows.forEach(row => {
            const notifId = row.dataset.notifId;
            const notif = notificationsData[notifId];
            const matchesSearch = notif.title.toLowerCase().includes(searchTerm) || notif.id.toLowerCase().includes(searchTerm) || notif.subject.toLowerCase().includes(searchTerm);
            const matchesType = typeFilter === 'all' || notif.type === typeFilter;
            const matchesStatus = statusFilter === 'all' || notif.status === statusFilter;
            row.style.display = (matchesSearch && matchesType && matchesStatus) ? '' : 'none';
        });
    }

    function initializeNotificationViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const notifId = urlParams.get('id');

        if (notifId && notificationsData[notifId]) {
            populateNotificationView(notificationsData[notifId]);
        }

        const editLink = document.getElementById('editNotifLink');
        if (editLink && notifId) {
            editLink.href = 'notification-edit.html?id=' + notifId;
        }

        initializeLogout();
    }

    function populateNotificationView(notif) {
        document.getElementById('viewNotifTitle').textContent = 'Notification ' + notif.id;
        document.getElementById('viewNotifSubject').textContent = notif.title;
        document.getElementById('viewNotifId').textContent = notif.id;
        document.getElementById('viewNotifAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(notif.id.substring(0, 2)) + '&background=f39c12&color=fff&size=120';

        const statusEl = document.getElementById('viewNotifStatus');
        statusEl.textContent = notif.status.charAt(0).toUpperCase() + notif.status.slice(1);
        statusEl.className = 'status-badge status-' + notif.status;

        document.getElementById('viewNotifType').textContent = notif.type.charAt(0).toUpperCase() + notif.type.slice(1);
        document.getElementById('viewNotifTarget').textContent = notif.targetLabel;
        document.getElementById('viewNotifRecipients').textContent = notif.recipients > 0 ? notif.recipients.toLocaleString() : 'N/A';
        document.getElementById('viewNotifSentDate').textContent = notif.sentDate || notif.scheduledDate || 'Not sent';
        document.getElementById('viewNotifPriority').textContent = notif.priority.charAt(0).toUpperCase() + notif.priority.slice(1);
        document.getElementById('viewNotifChannels').textContent = notif.channels;

        // Message Content
        const msgEl = document.getElementById('viewNotifMessage');
        if (msgEl) {
            msgEl.innerHTML = `
                <div class="info-item"><span class="info-label">Subject</span><span class="info-value">${notif.subject}</span></div>
                <div class="info-item"><span class="info-label">Body</span><span class="info-value">${notif.body}</span></div>
                ${notif.actionUrl ? '<div class="info-item"><span class="info-label">Action URL</span><span class="info-value"><a href="' + notif.actionUrl + '" target="_blank">' + notif.actionUrl + '</a></span></div>' : ''}
            `;
        }

        // Delivery Stats
        const statsEl = document.getElementById('viewNotifStats');
        if (statsEl) {
            statsEl.innerHTML = `
                <div class="info-item"><span class="info-label">Total Recipients</span><span class="info-value">${notif.recipients.toLocaleString()}</span></div>
                <div class="info-item"><span class="info-label">Delivered</span><span class="info-value">${notif.delivered.toLocaleString()}</span></div>
                <div class="info-item"><span class="info-label">Opened</span><span class="info-value">${notif.opened.toLocaleString()}</span></div>
                <div class="info-item"><span class="info-label">Clicked</span><span class="info-value">${notif.clicked.toLocaleString()}</span></div>
                <div class="info-item"><span class="info-label">Open Rate</span><span class="info-value">${notif.openRate}%</span></div>
                <div class="info-item"><span class="info-label">Click Rate</span><span class="info-value">${notif.clickRate}%</span></div>
            `;
        }

        // Audience Details
        const audEl = document.getElementById('viewNotifAudience');
        if (audEl) {
            audEl.innerHTML = `
                <div class="info-item"><span class="info-label">Target Audience</span><span class="info-value">${notif.targetLabel}</span></div>
                <div class="info-item"><span class="info-label">Notification Type</span><span class="info-value">${notif.type.charAt(0).toUpperCase() + notif.type.slice(1)}</span></div>
                <div class="info-item"><span class="info-label">Push Notification</span><span class="info-value">${notif.pushEnabled === 'yes' ? 'Enabled' : 'Disabled'}</span></div>
                <div class="info-item"><span class="info-label">Email</span><span class="info-value">${notif.emailEnabled === 'yes' ? 'Enabled' : 'Disabled'}</span></div>
                <div class="info-item"><span class="info-label">SMS</span><span class="info-value">${notif.smsEnabled === 'yes' ? 'Enabled' : 'Disabled'}</span></div>
            `;
        }

        // Timeline
        const timelineEl = document.getElementById('viewNotifTimeline');
        if (timelineEl) {
            timelineEl.innerHTML = `
                <div class="activity-item"><div class="activity-icon"><i class="fas fa-plus-circle"></i></div><div class="activity-content"><p>Notification created by ${notif.createdBy}</p><span class="activity-time">${notif.createdDate}</span></div></div>
                ${notif.scheduledDate ? '<div class="activity-item"><div class="activity-icon"><i class="fas fa-clock"></i></div><div class="activity-content"><p>Scheduled for ' + notif.scheduledDate + '</p><span class="activity-time">' + notif.createdDate + '</span></div></div>' : ''}
                ${notif.sentDate ? '<div class="activity-item"><div class="activity-icon"><i class="fas fa-paper-plane"></i></div><div class="activity-content"><p>Sent to ' + notif.recipients.toLocaleString() + ' recipients</p><span class="activity-time">' + notif.sentDate + '</span></div></div>' : ''}
                ${notif.delivered > 0 ? '<div class="activity-item"><div class="activity-icon"><i class="fas fa-check-circle"></i></div><div class="activity-content"><p>Delivered to ' + notif.delivered.toLocaleString() + ' recipients (' + Math.round(notif.delivered / notif.recipients * 100) + '% delivery rate)</p><span class="activity-time">' + notif.sentDate + '</span></div></div>' : ''}
            `;
        }
    }

    function initializeNotificationEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const notifId = urlParams.get('id');

        if (notifId && notificationsData[notifId]) {
            populateNotificationEdit(notificationsData[notifId]);
        }

        const form = document.getElementById('notificationEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() { window.location.href = 'notifications.html'; }, 1000);
            });
        }

        initializeLogout();
    }

    function populateNotificationEdit(notif) {
        document.getElementById('editNotifDisplayName').textContent = notif.title;
        document.getElementById('editNotifDisplayId').textContent = notif.id;
        const statusDisplay = document.getElementById('editNotifDisplayStatus');
        statusDisplay.textContent = notif.status.charAt(0).toUpperCase() + notif.status.slice(1);
        statusDisplay.className = 'status-badge status-' + notif.status;

        const titleEl = document.getElementById('editNotifTitle');
        if (titleEl) titleEl.value = notif.title;
        const typeEl = document.getElementById('editNotifType');
        if (typeEl) typeEl.value = notif.type;
        const priorityEl = document.getElementById('editNotifPriority');
        if (priorityEl) priorityEl.value = notif.priority;
        const targetEl = document.getElementById('editNotifTarget');
        if (targetEl) targetEl.value = notif.target;
        const subjectEl = document.getElementById('editNotifSubject');
        if (subjectEl) subjectEl.value = notif.subject;
        const bodyEl = document.getElementById('editNotifBody');
        if (bodyEl) bodyEl.value = notif.body;
        const actionEl = document.getElementById('editNotifActionUrl');
        if (actionEl) actionEl.value = notif.actionUrl || '';
        const pushEl = document.getElementById('editNotifPush');
        if (pushEl) pushEl.value = notif.pushEnabled;
        const emailEl = document.getElementById('editNotifEmail');
        if (emailEl) emailEl.value = notif.emailEnabled;
        const smsEl = document.getElementById('editNotifSms');
        if (smsEl) smsEl.value = notif.smsEnabled;
    }

// ============================================
// CUSTOMER SUPPORT MANAGEMENT
// ============================================

    const supportTicketsData = {
        'TKT-001': {
            id: 'TKT-001', customer: 'Ahmed Al-Rashid', email: 'ahmed@example.com',
            subject: 'Booking confirmation not received',
            category: 'booking', priority: 'high', status: 'open',
            assignedTo: 'Sarah Johnson', assignedId: 'agent-1',
            created: 'Mar 03, 2026 14:22', updated: 'Mar 04, 2026 09:15',
            description: 'I made a booking for Luxury Palace Hotel (BKG-1234) yesterday but have not received any confirmation email. I checked my spam folder as well. The payment of SAR 4,500 was deducted from my card. Please help.',
            relatedBooking: 'BKG-1234',
            sla: { responseTime: '2 hours', resolutionTime: '24 hours', firstResponse: '45 min', breach: false },
            conversation: [
                { sender: 'Ahmed Al-Rashid', role: 'customer', message: 'I made a booking for Luxury Palace Hotel (BKG-1234) yesterday but have not received any confirmation email. I checked my spam folder as well. The payment of SAR 4,500 was deducted from my card. Please help.', time: 'Mar 03, 2026 14:22' },
                { sender: 'Sarah Johnson', role: 'admin', message: 'Hello Ahmed, Thank you for reaching out. I can see your booking BKG-1234 in our system. The confirmation email was sent but it appears there was a delivery issue. I am resending it now. You should receive it within 5 minutes.', time: 'Mar 03, 2026 15:07' },
                { sender: 'Ahmed Al-Rashid', role: 'customer', message: 'Thank you! I received the email now. However, the dates shown are wrong. I booked for March 15-18 but the confirmation shows March 16-19.', time: 'Mar 04, 2026 09:15' }
            ],
            internalNotes: 'Email delivery issue confirmed. Dates mismatch needs to be verified with hotel.'
        },
        'TKT-002': {
            id: 'TKT-002', customer: 'Fatima Hassan', email: 'fatima.h@example.com',
            subject: 'Refund not processed after 7 days',
            category: 'refund', priority: 'urgent', status: 'escalated',
            assignedTo: 'Mohammed Ali', assignedId: 'agent-2',
            created: 'Feb 28, 2026 10:30', updated: 'Mar 04, 2026 16:45',
            description: 'I cancelled my Umrah Package booking (BKG-1198) on Feb 25 and was told the refund would be processed in 3-5 business days. It has been 7 days and I still have not received my refund of SAR 10,800.',
            relatedBooking: 'BKG-1198',
            sla: { responseTime: '1 hour', resolutionTime: '12 hours', firstResponse: '28 min', breach: true },
            conversation: [
                { sender: 'Fatima Hassan', role: 'customer', message: 'I cancelled my Umrah Package booking (BKG-1198) on Feb 25 and was told the refund would be processed in 3-5 business days. It has been 7 days and I still have not received my refund.', time: 'Feb 28, 2026 10:30' },
                { sender: 'Mohammed Ali', role: 'admin', message: 'Hello Fatima, I apologize for the delay. Let me check the refund status for your booking. I can see that the refund was approved but the processing to your bank is pending. I am escalating this to our finance team immediately.', time: 'Feb 28, 2026 10:58' },
                { sender: 'Mohammed Ali', role: 'admin', message: 'Update: The refund of SAR 10,800 has been re-initiated. You should see it in your account within 2-3 business days. I have marked this as priority.', time: 'Mar 02, 2026 11:00' },
                { sender: 'Fatima Hassan', role: 'customer', message: 'It is March 4th now and I still have not received the refund. This is unacceptable. I want to speak to a manager.', time: 'Mar 04, 2026 16:45' }
            ],
            internalNotes: 'ESCALATED: Refund stuck in payment gateway. Finance team investigating. Customer very upset.'
        },
        'TKT-003': {
            id: 'TKT-003', customer: 'Omar Khalid', email: 'omar.k@example.com',
            subject: 'Unable to login to my account',
            category: 'technical', priority: 'medium', status: 'resolved',
            assignedTo: 'Fatima Ahmed', assignedId: 'agent-3',
            created: 'Mar 01, 2026 08:15', updated: 'Mar 01, 2026 12:30',
            description: 'I cannot login to my account. It keeps showing "Invalid credentials" even though I am sure my password is correct. I tried the forgot password option but did not receive any reset email.',
            relatedBooking: '',
            sla: { responseTime: '4 hours', resolutionTime: '48 hours', firstResponse: '1 hr 10 min', breach: false },
            conversation: [
                { sender: 'Omar Khalid', role: 'customer', message: 'I cannot login to my account. It keeps showing "Invalid credentials" even though I am sure my password is correct.', time: 'Mar 01, 2026 08:15' },
                { sender: 'Fatima Ahmed', role: 'admin', message: 'Hello Omar, I have checked your account and it appears your email was updated recently. Please try logging in with omar.khalid@example.com. I have also sent a password reset link to both your emails.', time: 'Mar 01, 2026 09:25' },
                { sender: 'Omar Khalid', role: 'customer', message: 'That worked! I was able to reset my password and login. Thank you for the quick help!', time: 'Mar 01, 2026 12:30' }
            ],
            internalNotes: 'Email update caused login confusion. Resolved with password reset.'
        },
        'TKT-004': {
            id: 'TKT-004', customer: 'Sara Al-Mutairi', email: 'sara.m@example.com',
            subject: 'Hotel room not as described',
            category: 'booking', priority: 'high', status: 'in-progress',
            assignedTo: 'Sarah Johnson', assignedId: 'agent-1',
            created: 'Mar 02, 2026 20:10', updated: 'Mar 03, 2026 10:00',
            description: 'I booked an Ocean View room at Beach Resort & Spa but was given a city view room instead. The hotel says they do not have availability for ocean view. I paid extra specifically for the ocean view. This is misleading.',
            relatedBooking: 'BKG-1089',
            sla: { responseTime: '2 hours', resolutionTime: '24 hours', firstResponse: '1 hr 50 min', breach: false },
            conversation: [
                { sender: 'Sara Al-Mutairi', role: 'customer', message: 'I booked an Ocean View room at Beach Resort & Spa but was given a city view room instead. This is misleading advertising.', time: 'Mar 02, 2026 20:10' },
                { sender: 'Sarah Johnson', role: 'admin', message: 'Hello Sara, I sincerely apologize for this experience. I am contacting Beach Resort & Spa right now to resolve this. We will either get you the correct room or arrange appropriate compensation.', time: 'Mar 02, 2026 22:00' }
            ],
            internalNotes: 'Contacted hotel. They confirmed overbooking issue. Negotiating upgrade or partial refund.'
        },
        'TKT-005': {
            id: 'TKT-005', customer: 'Khalid Al-Dosari', email: 'khalid.d@example.com',
            subject: 'Payment declined but amount debited',
            category: 'payment', priority: 'urgent', status: 'open',
            assignedTo: 'David Chen', assignedId: 'agent-4',
            created: 'Mar 04, 2026 15:30', updated: 'Mar 04, 2026 15:30',
            description: 'I tried to book Jeddah City Tour and the payment page showed "Payment Failed" but SAR 3,500 was deducted from my credit card. I do not see any booking in my account. Please refund immediately.',
            relatedBooking: '',
            sla: { responseTime: '1 hour', resolutionTime: '12 hours', firstResponse: '', breach: false },
            conversation: [
                { sender: 'Khalid Al-Dosari', role: 'customer', message: 'I tried to book Jeddah City Tour and the payment page showed "Payment Failed" but SAR 3,500 was deducted from my credit card. Please refund immediately.', time: 'Mar 04, 2026 15:30' }
            ],
            internalNotes: ''
        },
        'TKT-006': {
            id: 'TKT-006', customer: 'Nora Al-Harbi', email: 'nora.h@example.com',
            subject: 'How to change booking dates?',
            category: 'general', priority: 'low', status: 'closed',
            assignedTo: 'Fatima Ahmed', assignedId: 'agent-3',
            created: 'Feb 26, 2026 13:00', updated: 'Feb 26, 2026 14:30',
            description: 'Hi, I would like to change the dates of my Mountain View Lodge booking from March 10-13 to March 17-20. Is this possible? How do I do it?',
            relatedBooking: 'BKG-1401',
            sla: { responseTime: '8 hours', resolutionTime: '72 hours', firstResponse: '45 min', breach: false },
            conversation: [
                { sender: 'Nora Al-Harbi', role: 'customer', message: 'I would like to change the dates of my Mountain View Lodge booking from March 10-13 to March 17-20. Is this possible?', time: 'Feb 26, 2026 13:00' },
                { sender: 'Fatima Ahmed', role: 'admin', message: 'Hello Nora, Yes, you can change your booking dates. Go to My Bookings > BKG-1401 > Modify Booking. If the new dates are available, the change will be processed. There is no extra charge for date changes made more than 7 days before check-in.', time: 'Feb 26, 2026 13:45' },
                { sender: 'Nora Al-Harbi', role: 'customer', message: 'Perfect, I was able to change it. Thank you!', time: 'Feb 26, 2026 14:30' }
            ],
            internalNotes: 'Simple inquiry. Customer self-served after guidance.'
        }
    };

    function initializeSupportManagement() {
        populateSupportTable();
        setupSupportFilters();
        initializeLogout();
    }

    function populateSupportTable() {
        const tbody = document.getElementById('supportTableBody');
        if (!tbody) return;

        const priorityColors = { low: 'priority-low', medium: 'priority-medium', high: 'priority-high', urgent: 'priority-high' };

        let html = '';
        for (let id in supportTicketsData) {
            const ticket = supportTicketsData[id];
            const statusClass = 'status-' + ticket.status.replace('in-progress', 'in-progress');

            html += `
                <tr data-ticket-id="${ticket.id}" data-status="${ticket.status}" data-priority="${ticket.priority}" data-category="${ticket.category}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(ticket.id.substring(0, 2))}&background=9b59b6&color=fff&size=36" alt="${ticket.id}">
                            <div>
                                <span class="table-user-name">${ticket.id}</span>
                                <span class="table-user-id">${ticket.created.split(' ')[0]} ${ticket.created.split(' ')[1]} ${ticket.created.split(' ')[2]}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(ticket.customer)}&background=16a085&color=fff&size=36" alt="${ticket.customer}">
                            <div>
                                <span class="table-user-name">${ticket.customer}</span>
                                <span class="table-user-id">${ticket.email}</span>
                            </div>
                        </div>
                    </td>
                    <td>${ticket.subject.length > 35 ? ticket.subject.substring(0, 35) + '...' : ticket.subject}</td>
                    <td><span class="type-badge ticket-cat-${ticket.category}">${ticket.category.charAt(0).toUpperCase() + ticket.category.slice(1)}</span></td>
                    <td><span class="priority-badge ${priorityColors[ticket.priority]}">${ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}</span></td>
                    <td>${ticket.assignedTo}</td>
                    <td><span class="status-badge ${statusClass}">${ticket.status === 'in-progress' ? 'In Progress' : ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="support-view.html?id=${ticket.id}" class="action-btn action-view" title="View"><i class="fas fa-eye"></i></a>
                            <a href="support-edit.html?id=${ticket.id}" class="action-btn action-edit" title="Reply"><i class="fas fa-reply"></i></a>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupSupportFilters() {
        const searchInput = document.getElementById('supportSearchInput');
        const statusFilter = document.getElementById('supportStatusFilter');
        const priorityFilter = document.getElementById('supportPriorityFilter');
        const categoryFilter = document.getElementById('supportCategoryFilter');

        if (searchInput) searchInput.addEventListener('input', filterSupportTickets);
        if (statusFilter) statusFilter.addEventListener('change', filterSupportTickets);
        if (priorityFilter) priorityFilter.addEventListener('change', filterSupportTickets);
        if (categoryFilter) categoryFilter.addEventListener('change', filterSupportTickets);
    }

    function filterSupportTickets() {
        const searchTerm = document.getElementById('supportSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('supportStatusFilter')?.value || 'all';
        const priorityFilter = document.getElementById('supportPriorityFilter')?.value || 'all';
        const categoryFilter = document.getElementById('supportCategoryFilter')?.value || 'all';

        const rows = document.querySelectorAll('#supportTableBody tr');
        rows.forEach(row => {
            const ticketId = row.dataset.ticketId;
            const ticket = supportTicketsData[ticketId];
            const matchesSearch = ticket.id.toLowerCase().includes(searchTerm) || ticket.customer.toLowerCase().includes(searchTerm) || ticket.subject.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
            const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;
            const matchesCategory = categoryFilter === 'all' || ticket.category === categoryFilter;
            row.style.display = (matchesSearch && matchesStatus && matchesPriority && matchesCategory) ? '' : 'none';
        });
    }

    function initializeSupportViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const ticketId = urlParams.get('id');

        if (ticketId && supportTicketsData[ticketId]) {
            populateSupportView(supportTicketsData[ticketId]);
        }

        const editLink = document.getElementById('editTicketLink');
        if (editLink && ticketId) {
            editLink.href = 'support-edit.html?id=' + ticketId;
        }

        initializeLogout();
    }

    function populateSupportView(ticket) {
        document.getElementById('viewTicketTitle').textContent = 'Ticket ' + ticket.id;
        document.getElementById('viewTicketSubject').textContent = ticket.subject;
        document.getElementById('viewTicketId').textContent = ticket.id;
        document.getElementById('viewTicketAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(ticket.id.substring(0, 2)) + '&background=9b59b6&color=fff&size=120';

        const statusEl = document.getElementById('viewTicketStatus');
        statusEl.textContent = ticket.status === 'in-progress' ? 'In Progress' : ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1);
        statusEl.className = 'status-badge status-' + ticket.status;

        document.getElementById('viewTicketCustomer').textContent = ticket.customer;
        document.getElementById('viewTicketEmail').textContent = ticket.email;
        document.getElementById('viewTicketCategory').textContent = ticket.category.charAt(0).toUpperCase() + ticket.category.slice(1);
        document.getElementById('viewTicketPriority').innerHTML = '<span class="priority-badge priority-' + (ticket.priority === 'urgent' || ticket.priority === 'high' ? 'high' : ticket.priority === 'medium' ? 'medium' : 'low') + '">' + ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1) + '</span>';
        document.getElementById('viewTicketCreated').textContent = ticket.created;
        document.getElementById('viewTicketUpdated').textContent = ticket.updated;
        document.getElementById('viewTicketAssigned').textContent = ticket.assignedTo;

        // Conversation
        const convEl = document.getElementById('viewTicketConversation');
        if (convEl) {
            let convHtml = '';
            ticket.conversation.forEach(msg => {
                const isAdmin = msg.role === 'admin';
                convHtml += `
                    <div class="activity-item" style="border-left: 3px solid ${isAdmin ? 'var(--primary)' : 'var(--text-secondary)'}; padding-left: 16px; margin-bottom: 16px;">
                        <div class="activity-content">
                            <p><strong>${msg.sender}</strong> <span class="status-badge ${isAdmin ? 'status-active' : 'status-pending'}" style="font-size: 10px;">${isAdmin ? 'Admin' : 'Customer'}</span></p>
                            <p style="margin-top: 8px;">${msg.message}</p>
                            <span class="activity-time">${msg.time}</span>
                        </div>
                    </div>
                `;
            });
            convEl.innerHTML = convHtml;
        }

        // Ticket Details
        const detailsEl = document.getElementById('viewTicketDetails');
        if (detailsEl) {
            detailsEl.innerHTML = `
                <div class="info-item"><span class="info-label">Category</span><span class="info-value">${ticket.category.charAt(0).toUpperCase() + ticket.category.slice(1)}</span></div>
                <div class="info-item"><span class="info-label">Related Booking</span><span class="info-value">${ticket.relatedBooking || 'N/A'}</span></div>
                <div class="info-item"><span class="info-label">Internal Notes</span><span class="info-value">${ticket.internalNotes || 'No internal notes'}</span></div>
            `;
        }

        // SLA
        const slaEl = document.getElementById('viewTicketSla');
        if (slaEl) {
            slaEl.innerHTML = `
                <div class="info-item"><span class="info-label">Response SLA</span><span class="info-value">${ticket.sla.responseTime}</span></div>
                <div class="info-item"><span class="info-label">Resolution SLA</span><span class="info-value">${ticket.sla.resolutionTime}</span></div>
                <div class="info-item"><span class="info-label">First Response Time</span><span class="info-value">${ticket.sla.firstResponse || 'Awaiting response'}</span></div>
                <div class="info-item"><span class="info-label">SLA Status</span><span class="info-value"><span class="status-badge ${ticket.sla.breach ? 'status-rejected' : 'status-active'}">${ticket.sla.breach ? 'Breached' : 'Within SLA'}</span></span></div>
            `;
        }

        // Timeline
        const timelineEl = document.getElementById('viewTicketTimeline');
        if (timelineEl) {
            let timelineHtml = `<div class="activity-item"><div class="activity-icon"><i class="fas fa-plus-circle"></i></div><div class="activity-content"><p>Ticket created by ${ticket.customer}</p><span class="activity-time">${ticket.created}</span></div></div>`;
            ticket.conversation.forEach(msg => {
                const icon = msg.role === 'admin' ? 'fa-reply' : 'fa-comment';
                timelineHtml += `<div class="activity-item"><div class="activity-icon"><i class="fas ${icon}"></i></div><div class="activity-content"><p>${msg.sender} ${msg.role === 'admin' ? 'replied' : 'responded'}</p><span class="activity-time">${msg.time}</span></div></div>`;
            });
            timelineEl.innerHTML = timelineHtml;
        }
    }

    function initializeSupportEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const ticketId = urlParams.get('id');

        if (ticketId && supportTicketsData[ticketId]) {
            populateSupportEdit(supportTicketsData[ticketId]);
        }

        const form = document.getElementById('supportEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() { window.location.href = 'support-view.html?id=' + ticketId; }, 1000);
            });
        }

        initializeLogout();
    }

    function populateSupportEdit(ticket) {
        document.getElementById('editTicketDisplayName').textContent = ticket.id;
        document.getElementById('editTicketDisplayId').textContent = ticket.customer;
        const statusDisplay = document.getElementById('editTicketDisplayStatus');
        statusDisplay.textContent = ticket.status === 'in-progress' ? 'In Progress' : ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1);
        statusDisplay.className = 'status-badge status-' + ticket.status;
        document.getElementById('editTicketCustomerDisplay').textContent = ticket.customer;
        document.getElementById('editTicketCategoryDisplay').textContent = ticket.category.charAt(0).toUpperCase() + ticket.category.slice(1);
        document.getElementById('editTicketCreatedDisplay').textContent = ticket.created;
        document.getElementById('editTicketStatus').value = ticket.status;
        document.getElementById('editTicketPriority').value = ticket.priority;
        document.getElementById('editTicketAssignedTo').value = ticket.assignedId;
        document.getElementById('editTicketCategory').value = ticket.category;
        document.getElementById('editTicketInternalNotes').value = ticket.internalNotes || '';
    }

// ============================================
// CMS PAGES MANAGEMENT
// ============================================

    const cmsPagesData = {
        'CMS-001': {
            id: 'CMS-001', title: 'Privacy Policy', slug: '/privacy-policy', type: 'policy',
            status: 'published', author: 'Admin User',
            created: 'Jan 15, 2026', modified: 'Mar 02, 2026',
            metaTitle: 'Privacy Policy - TourHub',
            metaDesc: 'Learn how TourHub collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
            keywords: 'privacy, data protection, personal information, GDPR',
            content: '<h2>Privacy Policy</h2><p>At TourHub, we are committed to protecting your privacy and personal data. This policy outlines how we collect, use, store, and protect your information when you use our platform.</p><h3>1. Information We Collect</h3><p>We collect personal information such as name, email address, phone number, and payment details when you register or make bookings. We also collect usage data including browsing patterns, device information, and location data.</p><h3>2. How We Use Your Information</h3><p>Your information is used to process bookings, provide customer support, send booking confirmations, improve our services, and comply with legal obligations.</p><h3>3. Data Protection</h3><p>We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your data.</p>',
            versions: [
                { version: 'v3.0', date: 'Mar 02, 2026', editor: 'Admin User', note: 'Updated data protection section' },
                { version: 'v2.0', date: 'Feb 15, 2026', editor: 'Admin User', note: 'Added GDPR compliance details' },
                { version: 'v1.0', date: 'Jan 15, 2026', editor: 'Admin User', note: 'Initial version' }
            ]
        },
        'CMS-002': {
            id: 'CMS-002', title: 'Terms & Conditions', slug: '/terms-conditions', type: 'policy',
            status: 'published', author: 'Admin User',
            created: 'Jan 15, 2026', modified: 'Feb 28, 2026',
            metaTitle: 'Terms & Conditions - TourHub',
            metaDesc: 'Read the terms and conditions governing use of TourHub platform, including booking policies, cancellations, and user responsibilities.',
            keywords: 'terms, conditions, policies, cancellation, booking rules',
            content: '<h2>Terms & Conditions</h2><p>By using TourHub, you agree to these terms and conditions. Please read them carefully before using our services.</p><h3>1. Booking Terms</h3><p>All bookings are subject to availability. Prices are in SAR unless otherwise stated. A confirmed booking constitutes a binding agreement.</p><h3>2. Cancellation Policy</h3><p>Cancellation policies vary by service type. Hotel cancellations made 48+ hours before check-in receive a full refund. Late cancellations may incur charges.</p><h3>3. User Responsibilities</h3><p>Users must provide accurate information, maintain account security, and comply with local laws and regulations at their travel destinations.</p>',
            versions: [
                { version: 'v2.0', date: 'Feb 28, 2026', editor: 'Admin User', note: 'Updated cancellation policy' },
                { version: 'v1.0', date: 'Jan 15, 2026', editor: 'Admin User', note: 'Initial version' }
            ]
        },
        'CMS-003': {
            id: 'CMS-003', title: 'About Us', slug: '/about-us', type: 'info',
            status: 'published', author: 'Admin User',
            created: 'Jan 20, 2026', modified: 'Feb 20, 2026',
            metaTitle: 'About TourHub - Your Travel Partner',
            metaDesc: 'Discover TourHub - the leading tourism platform in Saudi Arabia connecting travelers with hotels, restaurants, activities, and tour packages.',
            keywords: 'about, TourHub, tourism, Saudi Arabia, travel',
            content: '<h2>About TourHub</h2><p>TourHub is a leading tourism platform in Saudi Arabia, connecting travelers with the finest hotels, restaurants, activities, and tour packages. Founded in 2025, we have rapidly grown to become the go-to platform for both domestic and international tourists.</p><h3>Our Mission</h3><p>To make travel planning effortless and enjoyable by providing a comprehensive platform that offers the best services at competitive prices.</p><h3>Our Vision</h3><p>To be the premier tourism platform in the Middle East, driving the growth of Saudi Arabia\'s tourism industry under Vision 2030.</p>',
            versions: [
                { version: 'v1.1', date: 'Feb 20, 2026', editor: 'Admin User', note: 'Added Vision 2030 reference' },
                { version: 'v1.0', date: 'Jan 20, 2026', editor: 'Admin User', note: 'Initial version' }
            ]
        },
        'CMS-004': {
            id: 'CMS-004', title: 'FAQs', slug: '/faqs', type: 'faq',
            status: 'published', author: 'Admin User',
            created: 'Jan 22, 2026', modified: 'Mar 01, 2026',
            metaTitle: 'Frequently Asked Questions - TourHub',
            metaDesc: 'Find answers to common questions about booking, payments, cancellations, and using the TourHub platform.',
            keywords: 'FAQ, questions, help, booking, payment, cancellation',
            content: '<h2>Frequently Asked Questions</h2><h3>How do I make a booking?</h3><p>Simply search for your desired service (hotel, activity, package), select your dates, and proceed to payment. You will receive a confirmation email once the booking is complete.</p><h3>How can I cancel a booking?</h3><p>Go to My Bookings, find the booking you wish to cancel, and click "Cancel Booking." Cancellation policies vary by service type.</p><h3>What payment methods are accepted?</h3><p>We accept credit cards, debit cards, bank transfers, UPI, and wallet payments. All transactions are secured with industry-standard encryption.</p><h3>How long does a refund take?</h3><p>Refunds are typically processed within 3-5 business days for card payments and instantly for wallet credits.</p>',
            versions: [
                { version: 'v2.1', date: 'Mar 01, 2026', editor: 'Admin User', note: 'Added refund FAQ' },
                { version: 'v2.0', date: 'Feb 15, 2026', editor: 'Admin User', note: 'Added payment methods FAQ' },
                { version: 'v1.0', date: 'Jan 22, 2026', editor: 'Admin User', note: 'Initial version' }
            ]
        },
        'CMS-005': {
            id: 'CMS-005', title: 'Contact Us', slug: '/contact', type: 'info',
            status: 'published', author: 'Admin User',
            created: 'Jan 20, 2026', modified: 'Feb 10, 2026',
            metaTitle: 'Contact Us - TourHub Support',
            metaDesc: 'Get in touch with TourHub support team. Find our contact details, office address, and customer service hours.',
            keywords: 'contact, support, phone, email, address, help',
            content: '<h2>Contact Us</h2><p>We are here to help! Reach out to us through any of the channels below.</p><h3>Customer Support</h3><p>Email: support@tourhub.com<br>Phone: +966 11 234 5678<br>WhatsApp: +966 50 123 4567<br>Hours: 24/7</p><h3>Head Office</h3><p>TourHub Arabia Ltd.<br>King Fahd Road<br>Riyadh, Saudi Arabia 11564</p><h3>Business Inquiries</h3><p>Email: business@tourhub.com<br>Phone: +966 11 234 5679</p>',
            versions: [
                { version: 'v1.1', date: 'Feb 10, 2026', editor: 'Admin User', note: 'Updated phone numbers' },
                { version: 'v1.0', date: 'Jan 20, 2026', editor: 'Admin User', note: 'Initial version' }
            ]
        },
        'CMS-006': {
            id: 'CMS-006', title: 'Refund Policy', slug: '/refund-policy', type: 'policy',
            status: 'published', author: 'Admin User',
            created: 'Feb 01, 2026', modified: 'Feb 25, 2026',
            metaTitle: 'Refund Policy - TourHub',
            metaDesc: 'Understand TourHub refund policy including eligibility, processing times, and refund methods for different service types.',
            keywords: 'refund, policy, cancellation, money back',
            content: '<h2>Refund Policy</h2><p>TourHub is committed to fair refund practices. This policy covers all services booked through our platform.</p><h3>Hotels</h3><p>Free cancellation up to 48 hours before check-in. Late cancellations: 50% charge. No-shows: full charge.</p><h3>Packages & Activities</h3><p>Free cancellation up to 72 hours before the start date. 24-72 hours: 30% deduction. Less than 24 hours: no refund.</p><h3>Processing Time</h3><p>Card refunds: 3-5 business days. Wallet credits: Instant. Bank transfers: 5-7 business days.</p>',
            versions: [
                { version: 'v1.1', date: 'Feb 25, 2026', editor: 'Admin User', note: 'Added processing times' },
                { version: 'v1.0', date: 'Feb 01, 2026', editor: 'Admin User', note: 'Initial version' }
            ]
        },
        'CMS-007': {
            id: 'CMS-007', title: 'Vendor Guidelines', slug: '/vendor-guidelines', type: 'content',
            status: 'published', author: 'Admin User',
            created: 'Feb 05, 2026', modified: 'Feb 20, 2026',
            metaTitle: 'Vendor Guidelines - TourHub Partner Program',
            metaDesc: 'Guidelines for TourHub vendors including listing standards, quality requirements, and commission structure.',
            keywords: 'vendor, guidelines, partner, commission, listing',
            content: '<h2>Vendor Guidelines</h2><p>Welcome to the TourHub Partner Program. These guidelines ensure a high-quality experience for all users.</p><h3>Listing Standards</h3><p>All listings must include accurate descriptions, high-quality photos, current pricing, and availability information. Misleading content will result in listing removal.</p><h3>Quality Requirements</h3><p>Vendors must maintain a minimum 3.5 star rating. Consistent negative reviews may lead to suspension.</p>',
            versions: [
                { version: 'v1.0', date: 'Feb 05, 2026', editor: 'Admin User', note: 'Initial version' }
            ]
        },
        'CMS-008': {
            id: 'CMS-008', title: 'Safety Tips for Travelers', slug: '/safety-tips', type: 'content',
            status: 'draft', author: 'Admin User',
            created: 'Mar 01, 2026', modified: 'Mar 01, 2026',
            metaTitle: 'Travel Safety Tips - TourHub',
            metaDesc: 'Essential safety tips for travelers in Saudi Arabia.',
            keywords: 'safety, travel tips, Saudi Arabia',
            content: '<h2>Safety Tips for Travelers</h2><p>Draft content - safety guidelines and tips for travelers visiting Saudi Arabia.</p>',
            versions: [
                { version: 'v0.1', date: 'Mar 01, 2026', editor: 'Admin User', note: 'Draft created' }
            ]
        }
    };

    function initializeCmsManagement() {
        populateCmsTable();
        setupCmsFilters();
        initializeLogout();
    }

    function populateCmsTable() {
        const tbody = document.getElementById('cmsTableBody');
        if (!tbody) return;

        let html = '';
        for (let id in cmsPagesData) {
            const page = cmsPagesData[id];
            const statusClass = 'status-' + page.status;

            html += `
                <tr data-cms-id="${page.id}" data-status="${page.status}" data-type="${page.type}">
                    <td>
                        <div class="table-user">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(page.title.substring(0, 2))}&background=1abc9c&color=fff&size=36" alt="${page.title}">
                            <div>
                                <span class="table-user-name">${page.title}</span>
                                <span class="table-user-id">${page.id}</span>
                            </div>
                        </div>
                    </td>
                    <td>${page.slug}</td>
                    <td><span class="type-badge cms-type-${page.type}">${page.type.charAt(0).toUpperCase() + page.type.slice(1)}</span></td>
                    <td>${page.author}</td>
                    <td>${page.modified}</td>
                    <td><span class="status-badge ${statusClass}">${page.status.charAt(0).toUpperCase() + page.status.slice(1)}</span></td>
                    <td>
                        <div class="table-actions">
                            <a href="cms-view.html?id=${page.id}" class="action-btn action-view" title="Preview"><i class="fas fa-eye"></i></a>
                            <a href="cms-edit.html?id=${page.id}" class="action-btn action-edit" title="Edit"><i class="fas fa-pen"></i></a>
                        </div>
                    </td>
                </tr>
            `;
        }
        tbody.innerHTML = html;
    }

    function setupCmsFilters() {
        const searchInput = document.getElementById('cmsSearchInput');
        const statusFilter = document.getElementById('cmsStatusFilter');
        const typeFilter = document.getElementById('cmsTypeFilter');

        if (searchInput) searchInput.addEventListener('input', filterCmsPages);
        if (statusFilter) statusFilter.addEventListener('change', filterCmsPages);
        if (typeFilter) typeFilter.addEventListener('change', filterCmsPages);
    }

    function filterCmsPages() {
        const searchTerm = document.getElementById('cmsSearchInput')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('cmsStatusFilter')?.value || 'all';
        const typeFilter = document.getElementById('cmsTypeFilter')?.value || 'all';

        const rows = document.querySelectorAll('#cmsTableBody tr');
        rows.forEach(row => {
            const cmsId = row.dataset.cmsId;
            const page = cmsPagesData[cmsId];
            const matchesSearch = page.title.toLowerCase().includes(searchTerm) || page.slug.toLowerCase().includes(searchTerm) || page.id.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || page.status === statusFilter;
            const matchesType = typeFilter === 'all' || page.type === typeFilter;
            row.style.display = (matchesSearch && matchesStatus && matchesType) ? '' : 'none';
        });
    }

    function initializeCmsViewPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const cmsId = urlParams.get('id');

        if (cmsId && cmsPagesData[cmsId]) {
            populateCmsView(cmsPagesData[cmsId]);
        }

        const editLink = document.getElementById('editCmsLink');
        if (editLink && cmsId) {
            editLink.href = 'cms-edit.html?id=' + cmsId;
        }

        initializeLogout();
    }

    function populateCmsView(page) {
        document.getElementById('viewCmsTitle').textContent = 'CMS - ' + page.title;
        document.getElementById('viewCmsPageTitle').textContent = page.title;
        document.getElementById('viewCmsSlug').textContent = page.slug;
        document.getElementById('viewCmsAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(page.title.substring(0, 2)) + '&background=1abc9c&color=fff&size=120';

        const statusEl = document.getElementById('viewCmsStatus');
        statusEl.textContent = page.status.charAt(0).toUpperCase() + page.status.slice(1);
        statusEl.className = 'status-badge status-' + page.status;

        document.getElementById('viewCmsType').textContent = page.type.charAt(0).toUpperCase() + page.type.slice(1);
        document.getElementById('viewCmsAuthor').textContent = page.author;
        document.getElementById('viewCmsCreated').textContent = page.created;
        document.getElementById('viewCmsModified').textContent = page.modified;
        document.getElementById('viewCmsMetaDesc').textContent = page.metaDesc;

        // Content
        const contentEl = document.getElementById('viewCmsContent');
        if (contentEl) {
            contentEl.innerHTML = '<div class="cms-content-preview">' + page.content + '</div>';
        }

        // SEO
        const seoEl = document.getElementById('viewCmsSeo');
        if (seoEl) {
            seoEl.innerHTML = `
                <div class="info-item"><span class="info-label">Meta Title</span><span class="info-value">${page.metaTitle}</span></div>
                <div class="info-item"><span class="info-label">Meta Description</span><span class="info-value">${page.metaDesc}</span></div>
                <div class="info-item"><span class="info-label">Keywords</span><span class="info-value">${page.keywords}</span></div>
                <div class="info-item"><span class="info-label">URL Slug</span><span class="info-value">${page.slug}</span></div>
            `;
        }

        // Versions
        const versionsEl = document.getElementById('viewCmsVersions');
        if (versionsEl) {
            let html = '';
            page.versions.forEach(v => {
                html += `<div class="activity-item"><div class="activity-icon"><i class="fas fa-code-branch"></i></div><div class="activity-content"><p>${v.version} - ${v.note}</p><span class="activity-time">${v.date} by ${v.editor}</span></div></div>`;
            });
            versionsEl.innerHTML = html;
        }
    }

    function initializeCmsEditPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const cmsId = urlParams.get('id');

        if (cmsId && cmsPagesData[cmsId]) {
            populateCmsEdit(cmsPagesData[cmsId]);
        }

        const form = document.getElementById('cmsEditForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                setTimeout(function() { window.location.href = 'cms.html'; }, 1000);
            });
        }

        initializeLogout();
    }

    function populateCmsEdit(page) {
        document.getElementById('editCmsDisplayName').textContent = page.title;
        document.getElementById('editCmsDisplayId').textContent = page.slug;
        const statusDisplay = document.getElementById('editCmsDisplayStatus');
        statusDisplay.textContent = page.status.charAt(0).toUpperCase() + page.status.slice(1);
        statusDisplay.className = 'status-badge status-' + page.status;
        document.getElementById('editCmsCreatedDisplay').textContent = page.created;

        document.getElementById('editCmsTitle').value = page.title;
        document.getElementById('editCmsSlug').value = page.slug;
        document.getElementById('editCmsType').value = page.type;
        document.getElementById('editCmsStatus').value = page.status;
        document.getElementById('editCmsBody').value = page.content.replace(/<[^>]*>/g, '\n').replace(/\n{2,}/g, '\n\n').trim();
        document.getElementById('editCmsMetaTitle').value = page.metaTitle;
        document.getElementById('editCmsMetaDesc').value = page.metaDesc;
        document.getElementById('editCmsKeywords').value = page.keywords;
    }

// ============================================
// ADMIN SETTINGS
// ============================================

    function initializeSettingsPage() {
        populateLoginActivity();

        const form = document.getElementById('settingsForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
            });
        }

        const regenerateBtn = document.getElementById('regenerateApiKeyBtn');
        if (regenerateBtn) {
            regenerateBtn.addEventListener('click', function() {
                const apiKeyInput = document.getElementById('settingsApiKey');
                if (apiKeyInput) {
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let newKey = 'th_live_';
                    for (let i = 0; i < 32; i++) newKey += chars.charAt(Math.floor(Math.random() * chars.length));
                    apiKeyInput.value = newKey;
                }
            });
        }

        initializeLogout();
    }

    function populateLoginActivity() {
        const activityEl = document.getElementById('settingsLoginActivity');
        if (!activityEl) return;

        const loginHistory = [
            { action: 'Login successful', ip: '92.168.1.45', device: 'Chrome on Windows', time: 'Mar 05, 2026 09:42 AM' },
            { action: 'Login successful', ip: '92.168.1.45', device: 'Chrome on Windows', time: 'Mar 04, 2026 08:30 AM' },
            { action: 'Password changed', ip: '92.168.1.45', device: 'Chrome on Windows', time: 'Mar 03, 2026 14:15 PM' },
            { action: 'Login successful', ip: '10.0.0.88', device: 'Safari on macOS', time: 'Mar 03, 2026 08:22 AM' },
            { action: 'Failed login attempt', ip: '45.67.89.12', device: 'Firefox on Linux', time: 'Mar 02, 2026 23:45 PM' },
            { action: 'Login successful', ip: '92.168.1.45', device: 'Chrome on Windows', time: 'Mar 02, 2026 08:15 AM' },
            { action: '2FA enabled', ip: '92.168.1.45', device: 'Chrome on Windows', time: 'Mar 01, 2026 16:30 PM' },
            { action: 'Login successful', ip: '92.168.1.45', device: 'Chrome on Windows', time: 'Mar 01, 2026 08:00 AM' }
        ];

        let html = '';
        loginHistory.forEach(entry => {
            const icon = entry.action.includes('Failed') ? 'fa-exclamation-triangle' : entry.action.includes('Password') ? 'fa-key' : entry.action.includes('2FA') ? 'fa-shield-alt' : 'fa-sign-in-alt';
            const color = entry.action.includes('Failed') ? 'color: #e74c3c;' : '';
            html += `<div class="activity-item"><div class="activity-icon" style="${color}"><i class="fas ${icon}"></i></div><div class="activity-content"><p>${entry.action} <span style="color: var(--text-secondary); font-size: 12px;">from ${entry.ip} - ${entry.device}</span></p><span class="activity-time">${entry.time}</span></div></div>`;
        });
        activityEl.innerHTML = html;
    }

/* ============================================
   SIDEBAR COLLAPSE FUNCTIONALITY
   ============================================ */

function initializeProfileDropdown() {
    const userProfile = document.querySelector('.user-profile');
    const profileDropdown = document.querySelector('.profile-dropdown');

    if (!userProfile || !profileDropdown) return;

    userProfile.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!userProfile.contains(e.target)) {
            profileDropdown.classList.remove('active');
        }
    });

    // Close dropdown on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            profileDropdown.classList.remove('active');
        }
    });
}

function initializeSidebarCollapse() {
    const collapseBtn = document.getElementById('sidebarCollapseBtn');
    const container = document.querySelector('.dashboard-container');

    if (!collapseBtn || !container) return;

    // Load saved preference
    const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (isCollapsed) {
        container.classList.add('sidebar-collapsed');
    }

    collapseBtn.addEventListener('click', function() {
        container.classList.toggle('sidebar-collapsed');
        const collapsed = container.classList.contains('sidebar-collapsed');
        localStorage.setItem('sidebarCollapsed', collapsed);
    });
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
                'providers': 'Service Provider Management',
                'categories': 'Category Management',
                'hotels': 'Hotel Management',
                'restaurants': 'Restaurant Management',
                'packages': 'Package Management',
                'activities': 'Activity Management',
                'cabs': 'Cab Management',
                'bookings': 'Booking Management',
                'subscriptions': 'Subscription Management',
                'payouts': 'Payout Management',
                'ads': 'Ads Management',
                'banners': 'Promotional Banners',
                'refunds': 'Refund Management',
                'transactions': 'Transaction Management',
                'notifications': 'Push Notifications',
                'support': 'Customer Support',
                'cms': 'CMS Pages',
                'commission': 'Vendor Commission',
                'ads-rate': 'Ads Rate Control',
                'reports': 'Reports',
                'settings': 'Settings'
            };
            
            const pageTitle = document.getElementById('pageTitle');
            if (pageTitle) {
                pageTitle.textContent = titles[section] || 'Dashboard';
            }
            
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

// Notification dropdown toggle
(function() {
    document.addEventListener('click', function(e) {
        var btn = e.target.closest('.notification-btn');
        var dropdown = document.querySelector('.notification-dropdown');
        if (btn) {
            e.preventDefault();
            if (dropdown) {
                dropdown.classList.toggle('active');
            }
            // Close profile dropdown if open
            var profileDropdown = document.querySelector('.profile-dropdown');
            if (profileDropdown) profileDropdown.classList.remove('active');
            return;
        }
        // Close notification dropdown when clicking outside
        if (dropdown && !e.target.closest('.notification-dropdown')) {
            dropdown.classList.remove('active');
        }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            var dropdown = document.querySelector('.notification-dropdown');
            if (dropdown) dropdown.classList.remove('active');
        }
    });

    // Mark all as read
    document.addEventListener('click', function(e) {
        if (e.target.closest('.mark-all-read')) {
            var items = document.querySelectorAll('.notification-dropdown-item.unread');
            items.forEach(function(item) { item.classList.remove('unread'); });
            var badge = document.querySelector('.notification-badge');
            if (badge) badge.style.display = 'none';
        }
    });
})();

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

/* ============================================
   SERVICE PROVIDER MANAGEMENT
   ============================================ */

// Service Provider data store
var providersData = {
    'SPR-001': {
        name: 'Saudi Tours Co', contact: 'Mansour Al-Harbi',
        email: 'info@sauditours.com', phone: '+966 11 345 6789',
        joined: 'Mar 15, 2025', status: 'Approved', type: 'package', typeName: 'Package Provider', typeIcon: 'fa-suitcase-rolling',
        rating: '4.9', revenue: '$467,500', commission: '15', bookings: '2,845',
        area: 'Riyadh, Jeddah, Mecca', website: 'www.sauditours.com',
        avatar: 'Saudi+Tours+Co', avatarBg: '667eea',
        subscription: 'premium', subscriptionName: 'Premium', billing: 'Annual', renewal: 'Mar 15, 2027', fee: '$299/mo',
        responseTime: '1.2 hours', cancelRate: '0.8%', completionRate: '98.5%', satisfaction: '96%',
        description: 'Premium tour package provider specializing in desert safaris, cultural heritage tours, and adventure activities across Saudi Arabia.',
        bankName: 'Al Rajhi Bank', accountNumber: 'SA03 8000 0000 6080 1016 7519',
        notes: 'Top-performing provider. Premium partner with excellent customer satisfaction scores. Subscription auto-renews annually.'
    },
    'SPR-002': {
        name: 'Adventure Arabia', contact: 'Yusuf Al-Qahtani',
        email: 'hello@adventurearabia.com', phone: '+966 50 456 7890',
        joined: 'Apr 20, 2025', status: 'Approved', type: 'activity', typeName: 'Activity Operator', typeIcon: 'fa-hiking',
        rating: '4.7', revenue: '$234,200', commission: '12', bookings: '1,623',
        area: 'Riyadh, AlUla, Abha', website: 'www.adventurearabia.com',
        avatar: 'Adventure+Arabia', avatarBg: '27ae60',
        subscription: 'standard', subscriptionName: 'Standard', billing: 'Monthly', renewal: 'Apr 20, 2026', fee: '$149/mo',
        responseTime: '2.1 hours', cancelRate: '1.5%', completionRate: '97.2%', satisfaction: '93%',
        description: 'Outdoor adventure and activity operator offering hiking, rock climbing, zip-lining, and desert camping experiences.',
        bankName: 'Saudi National Bank', accountNumber: 'SA44 1000 0000 0060 8010 1234',
        notes: 'Strong activity operator. Growing customer base. Consider for premium tier upgrade.'
    },
    'SPR-003': {
        name: 'Heritage Guides', contact: 'Nasser Al-Shammari',
        email: 'contact@heritageguides.sa', phone: '+966 11 789 0123',
        joined: 'Jul 10, 2025', status: 'Pending', type: 'guide', typeName: 'Guide Service', typeIcon: 'fa-map-signs',
        rating: 'N/A', revenue: '$0', commission: '—', bookings: '0',
        area: 'Riyadh, Diriyah', website: 'www.heritageguides.sa',
        avatar: 'Heritage+Guides', avatarBg: 'f39c12',
        subscription: 'trial', subscriptionName: 'Trial', billing: 'N/A', renewal: 'N/A', fee: 'Free',
        responseTime: 'N/A', cancelRate: 'N/A', completionRate: 'N/A', satisfaction: 'N/A',
        description: 'Cultural heritage guide service specializing in historic site tours, museum guides, and educational experiences.',
        bankName: 'Riyad Bank', accountNumber: 'SA22 2000 0000 0012 3456 7890',
        notes: 'New application. Documents under review. Guide certifications pending verification.'
    },
    'SPR-004': {
        name: 'Royal Experiences', contact: 'Sultan Al-Dosari',
        email: 'info@royalexperiences.com', phone: '+966 11 654 3210',
        joined: 'Feb 01, 2025', status: 'Approved', type: 'experience', typeName: 'Experience Host', typeIcon: 'fa-gem',
        rating: '4.8', revenue: '$389,700', commission: '18', bookings: '2,156',
        area: 'Riyadh, Jeddah, NEOM', website: 'www.royalexperiences.com',
        avatar: 'Royal+Experiences', avatarBg: 'e74c3c',
        subscription: 'premium', subscriptionName: 'Premium', billing: 'Annual', renewal: 'Feb 01, 2027', fee: '$299/mo',
        responseTime: '0.8 hours', cancelRate: '0.5%', completionRate: '99.1%', satisfaction: '98%',
        description: 'Luxury experience host offering exclusive VIP tours, private dining, helicopter tours, and bespoke cultural experiences.',
        bankName: 'Al Rajhi Bank', accountNumber: 'SA55 8000 0000 6123 4567 8901',
        notes: 'Top-tier partner. Highest satisfaction scores. Exclusive luxury experiences. VIP partnership.'
    },
    'SPR-005': {
        name: 'Oasis Expeditions', contact: 'Tariq Al-Mutairi',
        email: 'tours@oasisexpeditions.com', phone: '+966 13 234 5678',
        joined: 'May 18, 2025', status: 'Under Review', type: 'package', typeName: 'Package Provider', typeIcon: 'fa-suitcase-rolling',
        rating: '4.2', revenue: '$78,400', commission: '10', bookings: '456',
        area: 'Eastern Province, Dammam', website: 'www.oasisexpeditions.com',
        avatar: 'Oasis+Expeditions', avatarBg: '9b59b6',
        subscription: 'basic', subscriptionName: 'Basic', billing: 'Monthly', renewal: 'Jun 18, 2026', fee: '$79/mo',
        responseTime: '3.5 hours', cancelRate: '2.8%', completionRate: '94.5%', satisfaction: '87%',
        description: 'Tour package provider focusing on Eastern Province experiences, oil heritage tours, and coastal adventures.',
        bankName: 'Alinma Bank', accountNumber: 'SA66 0500 0000 0034 5678 9012',
        notes: 'Under review — incomplete insurance documentation. Performance metrics need improvement. Follow up on missing documents.'
    },
    'SPR-006': {
        name: 'Falcon Adventures', contact: 'Bader Al-Enazi',
        email: 'info@falconadventures.sa', phone: '+966 17 345 6789',
        joined: 'Apr 05, 2025', status: 'Approved', type: 'activity', typeName: 'Activity Operator', typeIcon: 'fa-hiking',
        rating: '4.5', revenue: '$156,800', commission: '12', bookings: '1,089',
        area: 'Tabuk, AlUla, Asir', website: 'www.falconadventures.sa',
        avatar: 'Falcon+Adventures', avatarBg: '16a085',
        subscription: 'standard', subscriptionName: 'Standard', billing: 'Quarterly', renewal: 'Jul 05, 2026', fee: '$149/mo',
        responseTime: '1.8 hours', cancelRate: '1.2%', completionRate: '96.8%', satisfaction: '91%',
        description: 'Adventure activity operator offering falconry experiences, desert trekking, sandboarding, and stargazing tours.',
        bankName: 'Saudi National Bank', accountNumber: 'SA77 1000 0000 0078 9012 3456',
        notes: 'Reliable activity operator. Good seasonal performance. Consider expanding service areas.'
    },
    'SPR-007': {
        name: 'Nomad Trails', contact: 'Saleh Al-Ghamdi',
        email: 'info@nomadtrails.sa', phone: '+966 17 456 7890',
        joined: 'Jan 20, 2025', status: 'Suspended', type: 'guide', typeName: 'Guide Service', typeIcon: 'fa-map-signs',
        rating: '3.4', revenue: '$34,600', commission: '8', bookings: '234',
        area: 'Asir, Abha', website: 'www.nomadtrails.sa',
        avatar: 'Nomad+Trails', avatarBg: 'f093fb',
        subscription: 'basic', subscriptionName: 'Basic', billing: 'Monthly', renewal: 'Suspended', fee: '$79/mo',
        responseTime: '6.2 hours', cancelRate: '8.5%', completionRate: '85.3%', satisfaction: '72%',
        description: 'Mountain trail guide service in the Asir region. Currently suspended pending performance review.',
        bankName: 'Riyad Bank', accountNumber: 'SA88 2000 0000 0045 6789 0123',
        notes: 'Suspended — high cancellation rate and poor customer reviews. Expired safety certification. Must resubmit documents and improve metrics.'
    },
    'SPR-008': {
        name: 'Pearl Diving Tours', contact: 'Hamad Al-Wahabi',
        email: 'contact@pearldivingtours.com', phone: '+966 13 567 8901',
        joined: 'Jul 25, 2025', status: 'Pending', type: 'experience', typeName: 'Experience Host', typeIcon: 'fa-gem',
        rating: 'N/A', revenue: '$0', commission: '—', bookings: '0',
        area: 'Dammam, Khobar', website: 'www.pearldivingtours.com',
        avatar: 'Pearl+Diving+Tours', avatarBg: '4facfe',
        subscription: 'trial', subscriptionName: 'Trial', billing: 'N/A', renewal: 'N/A', fee: 'Free',
        responseTime: 'N/A', cancelRate: 'N/A', completionRate: 'N/A', satisfaction: 'N/A',
        description: 'Unique pearl diving experience host offering traditional pearl harvesting tours and marine cultural experiences.',
        bankName: 'Al Rajhi Bank', accountNumber: 'SA99 8000 0000 6234 5678 9012',
        notes: 'New application. Awaiting document verification and safety certification review.'
    }
};

function getProviderIdFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id') || 'SPR-001';
}

function initializeProviderManagement() {
    initializeTableSearch('providerSearchInput', 'providersTableBody');
    initializeStatusFilter('providerStatusFilter', 'providersTableBody');
    initializeProviderActions();
    initializeLogout();
}

function initializeProviderActions() {
    // Approve buttons
    document.querySelectorAll('#providersTable .action-approve').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var row = this.closest('tr');
            var statusBadge = row.querySelector('.status-badge');
            statusBadge.textContent = 'Approved';
            statusBadge.className = 'status-badge status-approved';

            var actionsDiv = row.querySelector('.table-actions');
            var viewBtn = actionsDiv.querySelector('.action-view').outerHTML;
            var editBtn = actionsDiv.querySelector('.action-edit');
            var editHtml = editBtn ? editBtn.outerHTML : '';
            actionsDiv.innerHTML = viewBtn + editHtml +
                '<button class="action-btn action-block" title="Suspend"><i class="fas fa-toggle-off"></i></button>';
        });
    });

    // Reject buttons
    document.querySelectorAll('#providersTable .action-reject').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var row = this.closest('tr');
            var statusBadge = row.querySelector('.status-badge');
            statusBadge.textContent = 'Suspended';
            statusBadge.className = 'status-badge status-suspended';

            var actionsDiv = row.querySelector('.table-actions');
            var viewBtn = actionsDiv.querySelector('.action-view').outerHTML;
            actionsDiv.innerHTML = viewBtn +
                '<button class="action-btn action-unblock" title="Reinstate"><i class="fas fa-toggle-on"></i></button>' +
                '<button class="action-btn action-delete" title="Delete"><i class="fas fa-trash"></i></button>';
        });
    });

    // Suspend/Reinstate toggle
    document.querySelectorAll('#providersTable .action-block').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var row = this.closest('tr');
            var statusBadge = row.querySelector('.status-badge');
            statusBadge.textContent = 'Suspended';
            statusBadge.className = 'status-badge status-suspended';
            this.title = 'Reinstate';
            this.className = 'action-btn action-unblock';
            this.innerHTML = '<i class="fas fa-toggle-on"></i>';
        });
    });

    document.querySelectorAll('#providersTable .action-unblock').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var row = this.closest('tr');
            var statusBadge = row.querySelector('.status-badge');
            statusBadge.textContent = 'Approved';
            statusBadge.className = 'status-badge status-approved';
            this.title = 'Suspend';
            this.className = 'action-btn action-block';
            this.innerHTML = '<i class="fas fa-toggle-off"></i>';
        });
    });
}

/* ============================================
   PROVIDER VIEW PAGE
   ============================================ */

function initializeProviderViewPage() {
    var providerId = getProviderIdFromUrl();
    var provider = providersData[providerId];

    if (provider) {
        document.getElementById('viewProviderAvatar').src = 'https://ui-avatars.com/api/?name=' + provider.avatar + '&background=' + provider.avatarBg + '&color=fff&size=120';
        document.getElementById('viewProviderName').textContent = provider.name;
        document.getElementById('viewProviderTitle').textContent = provider.name;
        document.getElementById('viewProviderId').textContent = '#' + providerId;
        document.getElementById('viewProviderContact').textContent = provider.contact;
        document.getElementById('viewProviderEmail').textContent = provider.email;
        document.getElementById('viewProviderPhone').textContent = provider.phone;
        document.getElementById('viewProviderArea').textContent = provider.area;
        document.getElementById('viewProviderWebsite').textContent = provider.website;
        document.getElementById('viewProviderJoined').textContent = provider.joined;
        document.getElementById('viewProviderBookings').textContent = provider.bookings;
        document.getElementById('viewProviderRevenue').textContent = provider.revenue;
        document.getElementById('viewProviderRating').textContent = provider.rating;
        document.getElementById('viewProviderCommission').textContent = provider.commission === '—' ? '—' : provider.commission + '%';

        // Subscription info
        document.getElementById('viewProviderPlan').textContent = provider.subscriptionName;
        document.getElementById('viewProviderBilling').textContent = provider.billing;
        document.getElementById('viewProviderRenewal').textContent = provider.renewal;
        document.getElementById('viewProviderFee').textContent = provider.fee;

        // Performance metrics
        document.getElementById('viewProviderResponseTime').textContent = provider.responseTime;
        document.getElementById('viewProviderCancelRate').textContent = provider.cancelRate;
        document.getElementById('viewProviderCompletionRate').textContent = provider.completionRate;
        document.getElementById('viewProviderSatisfaction').textContent = provider.satisfaction;

        // Status badge
        var statusEl = document.getElementById('viewProviderStatus');
        statusEl.textContent = provider.status;
        statusEl.className = 'status-badge status-' + provider.status.toLowerCase().replace(' ', '-');

        // Type badge
        var typeBadge = document.getElementById('viewProviderTypeBadge');
        if (typeBadge) {
            typeBadge.className = 'type-badge type-' + provider.type;
            typeBadge.innerHTML = '<i class="fas ' + provider.typeIcon + '"></i> ' + provider.typeName;
        }

        // Edit provider link
        var editLink = document.getElementById('editProviderLink');
        if (editLink) {
            editLink.href = 'provider-edit.html?id=' + providerId;
        }

        // Suspend/Reinstate button
        var suspendBtn = document.getElementById('suspendProviderViewBtn');
        if (suspendBtn) {
            if (provider.status === 'Suspended') {
                suspendBtn.innerHTML = '<i class="fas fa-check-circle"></i> Reinstate Provider';
                suspendBtn.classList.remove('btn-danger');
                suspendBtn.classList.add('btn-outline');
            }
            suspendBtn.addEventListener('click', function() {
                var currentStatus = statusEl.textContent.trim();
                if (currentStatus === 'Suspended') {
                    statusEl.textContent = 'Approved';
                    statusEl.className = 'status-badge status-approved';
                    this.innerHTML = '<i class="fas fa-ban"></i> Suspend Provider';
                    this.classList.remove('btn-outline');
                    this.classList.add('btn-danger');
                } else {
                    statusEl.textContent = 'Suspended';
                    statusEl.className = 'status-badge status-suspended';
                    this.innerHTML = '<i class="fas fa-check-circle"></i> Reinstate Provider';
                    this.classList.remove('btn-danger');
                    this.classList.add('btn-outline');
                }
            });
        }

        // Documents button
        var docsBtn = document.getElementById('viewProviderDocsBtn');
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
   PROVIDER EDIT PAGE
   ============================================ */

function initializeProviderEditPage() {
    var providerId = getProviderIdFromUrl();
    var provider = providersData[providerId];

    if (provider) {
        document.getElementById('editProviderAvatar').src = 'https://ui-avatars.com/api/?name=' + provider.avatar + '&background=' + provider.avatarBg + '&color=fff&size=120';
        document.getElementById('editProviderDisplayName').textContent = provider.name;
        document.getElementById('editProviderId').textContent = '#' + providerId;
        document.getElementById('editProviderTitle').textContent = 'Edit — ' + provider.name;
        document.getElementById('editProviderName').value = provider.name;
        document.getElementById('editProviderContactName').value = provider.contact;
        document.getElementById('editProviderEmail').value = provider.email;
        document.getElementById('editProviderPhone').value = provider.phone;
        document.getElementById('editProviderArea').value = provider.area;
        document.getElementById('editProviderJoinedDisplay').value = provider.joined;
        document.getElementById('editProviderDesc').value = provider.description;
        document.getElementById('editProviderNotes').value = provider.notes;

        // Website
        var websiteInput = document.getElementById('editProviderWebsite');
        if (websiteInput) {
            websiteInput.value = provider.website.startsWith('http') ? provider.website : 'https://' + provider.website;
        }

        // Status dropdown
        var statusSelect = document.getElementById('editProviderStatus');
        if (statusSelect) {
            statusSelect.value = provider.status.toLowerCase();
        }

        // Service type dropdown
        var typeSelect = document.getElementById('editProviderType');
        if (typeSelect) {
            typeSelect.value = provider.type;
        }

        // Commission
        var commissionInput = document.getElementById('editProviderCommission');
        if (commissionInput && provider.commission !== '—') {
            commissionInput.value = provider.commission;
        }

        // Subscription plan
        var planSelect = document.getElementById('editSubscriptionPlan');
        if (planSelect) {
            planSelect.value = provider.subscription;
        }

        // Billing cycle
        var billingSelect = document.getElementById('editBillingCycle');
        if (billingSelect) {
            billingSelect.value = provider.billing.toLowerCase();
        }

        // Bank details
        var bankInput = document.getElementById('editProviderBankName');
        if (bankInput) bankInput.value = provider.bankName;
        var accountInput = document.getElementById('editProviderAccountNumber');
        if (accountInput) accountInput.value = provider.accountNumber;
    }

    // Form submission
    var form = document.getElementById('editProviderForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            var saveBtn = document.getElementById('saveProviderBtn');
            if (saveBtn) {
                saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved Successfully';
                saveBtn.disabled = true;
                saveBtn.style.opacity = '0.8';

                setTimeout(function() {
                    window.location.href = 'provider-view.html?id=' + providerId;
                }, 1200);
            }
        });
    }

    initializeLogout();
}

/* ============================================
   CATEGORY MANAGEMENT
   ============================================ */

// Category data store
var categoriesData = {
    'CAT-001': {
        name: 'Hotels', slug: 'hotels', icon: 'fa-hotel', iconGradient: 'gradient-purple',
        status: 'Active', listings: '342', vendors: '89', revenue: '$1.2M', bookings: '4,567',
        created: 'Jan 01, 2025', order: '1', visibility: 'Public',
        description: 'Hotels and accommodation listings including resorts, boutique hotels, and budget stays',
        reqFields: '12', optFields: '8', photoLimit: '20', priceModel: 'Per Night',
        minPrice: '50', maxPrice: '10000', minRating: '3.5', responseSLA: '4',
        guidelines: 'All listings must provide accurate amenity information. Room sizes must be listed in square meters. Check-in/check-out times must be clearly stated. Free cancellation period of at least 24 hours is recommended.'
    },
    'CAT-002': {
        name: 'Restaurants', slug: 'restaurants', icon: 'fa-utensils', iconGradient: 'gradient-cyan',
        status: 'Active', listings: '284', vendors: '156', revenue: '$680K', bookings: '6,234',
        created: 'Jan 01, 2025', order: '2', visibility: 'Public',
        description: 'Restaurant and dining experience listings including fine dining, cafes, and street food vendors',
        reqFields: '10', optFields: '6', photoLimit: '15', priceModel: 'Per Person',
        minPrice: '10', maxPrice: '500', minRating: '3.0', responseSLA: '2',
        guidelines: 'Menu must be uploaded with current prices. Halal certification required. Dietary options (vegetarian, vegan, gluten-free) should be clearly marked. Reservation capacity must be accurate.'
    },
    'CAT-003': {
        name: 'Packages', slug: 'packages', icon: 'fa-suitcase-rolling', iconGradient: 'gradient-orange',
        status: 'Active', listings: '198', vendors: '67', revenue: '$890K', bookings: '2,845',
        created: 'Jan 01, 2025', order: '3', visibility: 'Public',
        description: 'Tour packages and bundled travel experiences including multi-day tours and all-inclusive deals',
        reqFields: '15', optFields: '10', photoLimit: '25', priceModel: 'Per Person',
        minPrice: '100', maxPrice: '25000', minRating: '3.5', responseSLA: '4',
        guidelines: 'Package itinerary must be detailed day-by-day. All inclusions and exclusions must be clearly listed. Guide languages must be specified. Safety equipment and insurance details required for adventure packages.'
    },
    'CAT-004': {
        name: 'Activities', slug: 'activities', icon: 'fa-hiking', iconGradient: 'gradient-pink',
        status: 'Active', listings: '245', vendors: '98', revenue: '$545K', bookings: '5,123',
        created: 'Jan 01, 2025', order: '4', visibility: 'Public',
        description: 'Individual activities and experiences including adventure sports, cultural activities, and wellness',
        reqFields: '11', optFields: '7', photoLimit: '15', priceModel: 'Per Person',
        minPrice: '20', maxPrice: '5000', minRating: '3.5', responseSLA: '3',
        guidelines: 'Activity duration and difficulty level must be specified. Age restrictions and physical requirements must be listed. Safety certifications required for adventure activities. Weather cancellation policy must be defined.'
    },
    'CAT-005': {
        name: 'Cabs', slug: 'cabs', icon: 'fa-taxi', iconGradient: 'gradient-purple',
        status: 'Active', listings: '112', vendors: '45', revenue: '$320K', bookings: '8,901',
        created: 'Jan 15, 2025', order: '5', visibility: 'Public',
        description: 'Transportation and cab services including airport transfers, city tours, and inter-city rides',
        reqFields: '8', optFields: '5', photoLimit: '10', priceModel: 'Per Kilometer',
        minPrice: '5', maxPrice: '1000', minRating: '3.0', responseSLA: '1',
        guidelines: 'Vehicle type and capacity must be specified. Driver credentials and license verification required. GPS tracking must be enabled. Base fare and per-km rate must be transparent.'
    },
    'CAT-006': {
        name: 'Wellness & Spa', slug: 'wellness-spa', icon: 'fa-spa', iconGradient: 'gradient-cyan',
        status: 'Active', listings: '66', vendors: '28', revenue: '$180K', bookings: '1,456',
        created: 'Mar 10, 2025', order: '6', visibility: 'Public',
        description: 'Wellness, spa, and relaxation services including massage, traditional hammam, and health retreats',
        reqFields: '9', optFields: '6', photoLimit: '15', priceModel: 'Per Person',
        minPrice: '50', maxPrice: '3000', minRating: '4.0', responseSLA: '3',
        guidelines: 'Practitioner qualifications must be listed. Treatment durations and descriptions required. Health disclaimers and contraindications must be stated. Hygiene certification required.'
    },
    'CAT-007': {
        name: 'Cruises', slug: 'cruises', icon: 'fa-ship', iconGradient: 'gradient-orange',
        status: 'Inactive', listings: '0', vendors: '0', revenue: '$0', bookings: '0',
        created: 'Jun 01, 2025', order: '7', visibility: 'Public',
        description: 'Cruise and boat tour experiences including Red Sea cruises, yacht charters, and fishing trips',
        reqFields: '14', optFields: '8', photoLimit: '20', priceModel: 'Per Person',
        minPrice: '200', maxPrice: '15000', minRating: '3.5', responseSLA: '6',
        guidelines: 'Maritime safety certification required. Life jacket availability must be confirmed. Route and port details must be specified. Sea-sickness policy and medical facilities must be listed.'
    },
    'CAT-008': {
        name: 'Camping', slug: 'camping', icon: 'fa-campground', iconGradient: 'gradient-pink',
        status: 'Archived', listings: '14', vendors: '5', revenue: '$45K', bookings: '234',
        created: 'Feb 20, 2025', order: '8', visibility: 'Private',
        description: 'Camping and glamping experiences including desert camps, mountain camping, and eco-lodges',
        reqFields: '10', optFields: '7', photoLimit: '15', priceModel: 'Per Night',
        minPrice: '30', maxPrice: '2000', minRating: '3.0', responseSLA: '4',
        guidelines: 'Campsite facilities must be listed (restrooms, showers, electricity). Fire safety measures required. Wildlife warning notices must be provided. Check-in/check-out procedures for remote sites must be clearly documented.'
    }
};

function getCategoryIdFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id') || 'CAT-001';
}

function initializeCategoryManagement() {
    initializeTableSearch('categorySearchInput', 'categoriesTableBody');
    initializeStatusFilter('categoryStatusFilter', 'categoriesTableBody');
    initializeCategoryActions();
    initializeLogout();
}

function initializeCategoryActions() {
    // Activate/Deactivate toggle
    document.querySelectorAll('#categoriesTable .action-block').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var row = this.closest('tr');
            var statusBadge = row.querySelector('.status-badge');
            statusBadge.textContent = 'Inactive';
            statusBadge.className = 'status-badge status-inactive';
            this.title = 'Activate';
            this.className = 'action-btn action-unblock';
            this.innerHTML = '<i class="fas fa-toggle-on"></i>';
        });
    });

    document.querySelectorAll('#categoriesTable .action-unblock').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var row = this.closest('tr');
            var statusBadge = row.querySelector('.status-badge');
            statusBadge.textContent = 'Active';
            statusBadge.className = 'status-badge status-active';
            this.title = 'Deactivate';
            this.className = 'action-btn action-block';
            this.innerHTML = '<i class="fas fa-toggle-off"></i>';
        });
    });
}

/* ============================================
   CATEGORY VIEW PAGE
   ============================================ */

function initializeCategoryViewPage() {
    var categoryId = getCategoryIdFromUrl();
    var category = categoriesData[categoryId];

    if (category) {
        document.getElementById('viewCategoryName').textContent = category.name;
        document.getElementById('viewCategoryTitle').textContent = category.name;
        document.getElementById('viewCategoryId').textContent = '#' + categoryId;
        document.getElementById('viewCategoryDesc').textContent = category.description;
        document.getElementById('viewCategoryCreated').textContent = category.created;
        document.getElementById('viewCategoryOrder').textContent = category.order;
        document.getElementById('viewCategoryVisibility').textContent = category.visibility;
        document.getElementById('viewCategorySlug').textContent = category.slug;

        // Icon
        var iconEl = document.getElementById('viewCategoryIcon');
        if (iconEl) {
            iconEl.className = 'fas ' + category.icon;
        }
        var iconWrap = document.getElementById('viewCategoryIconWrap');
        if (iconWrap) {
            iconWrap.className = 'category-icon-large ' + category.iconGradient;
        }

        // Stats
        document.getElementById('viewCategoryListings').textContent = category.listings;
        document.getElementById('viewCategoryVendors').textContent = category.vendors;
        document.getElementById('viewCategoryRevenue').textContent = category.revenue;
        document.getElementById('viewCategoryBookings').textContent = category.bookings;

        // Listing structure
        document.getElementById('viewCategoryReqFields').textContent = category.reqFields;
        document.getElementById('viewCategoryOptFields').textContent = category.optFields;
        document.getElementById('viewCategoryPhotoLimit').textContent = category.photoLimit + ' photos';
        document.getElementById('viewCategoryPriceModel').textContent = category.priceModel;

        // Status badge
        var statusEl = document.getElementById('viewCategoryStatus');
        statusEl.textContent = category.status;
        statusEl.className = 'status-badge status-' + category.status.toLowerCase();

        // Edit category link
        var editLink = document.getElementById('editCategoryLink');
        if (editLink) {
            editLink.href = 'category-edit.html?id=' + categoryId;
        }

        // Archive button
        var archiveBtn = document.getElementById('archiveCategoryBtn');
        if (archiveBtn) {
            if (category.status === 'Archived') {
                archiveBtn.innerHTML = '<i class="fas fa-undo"></i> Restore';
            }
            archiveBtn.addEventListener('click', function() {
                var currentStatus = statusEl.textContent.trim();
                if (currentStatus === 'Archived') {
                    statusEl.textContent = 'Active';
                    statusEl.className = 'status-badge status-active';
                    this.innerHTML = '<i class="fas fa-archive"></i> Archive';
                } else {
                    statusEl.textContent = 'Archived';
                    statusEl.className = 'status-badge status-archived';
                    this.innerHTML = '<i class="fas fa-undo"></i> Restore';
                }
            });
        }
    }

    initializeLogout();
}

/* ============================================
   CATEGORY EDIT PAGE
   ============================================ */

function initializeCategoryEditPage() {
    var categoryId = getCategoryIdFromUrl();
    var category = categoriesData[categoryId];

    if (category) {
        document.getElementById('editCategoryDisplayName').textContent = category.name;
        document.getElementById('editCategoryId').textContent = '#' + categoryId;
        document.getElementById('editCategoryTitle').textContent = 'Edit — ' + category.name;
        document.getElementById('editCategoryName').value = category.name;
        document.getElementById('editCategorySlug').value = category.slug;
        document.getElementById('editCategoryIcon').value = category.icon;
        document.getElementById('editCategoryOrder').value = category.order;
        document.getElementById('editCategoryDesc').value = category.description;
        document.getElementById('editCategoryCreatedDisplay').value = category.created;
        document.getElementById('editCategoryGuidelines').value = category.guidelines;

        // Icon display
        var iconEl = document.getElementById('editCategoryIconDisplay');
        if (iconEl) {
            iconEl.className = 'fas ' + category.icon;
        }
        var iconWrap = document.getElementById('editCategoryIconWrap');
        if (iconWrap) {
            iconWrap.className = 'category-icon-large ' + category.iconGradient;
        }

        // Status dropdown
        var statusSelect = document.getElementById('editCategoryStatus');
        if (statusSelect) {
            statusSelect.value = category.status.toLowerCase();
        }

        // Visibility
        var visibilitySelect = document.getElementById('editCategoryVisibility');
        if (visibilitySelect) {
            visibilitySelect.value = category.visibility.toLowerCase();
        }

        // Listing structure
        document.getElementById('editCategoryPhotoLimit').value = category.photoLimit;
        document.getElementById('editCategoryMinPrice').value = category.minPrice;
        document.getElementById('editCategoryMaxPrice').value = category.maxPrice;
        document.getElementById('editCategoryMinRating').value = category.minRating;
        document.getElementById('editCategoryResponseSLA').value = category.responseSLA;

        // Price model
        var priceModelSelect = document.getElementById('editCategoryPriceModel');
        if (priceModelSelect) {
            var modelMap = {
                'Per Night': 'per-night', 'Per Person': 'per-person', 'Per Group': 'per-group',
                'Flat Rate': 'flat-rate', 'Per Hour': 'per-hour', 'Per Kilometer': 'per-km'
            };
            priceModelSelect.value = modelMap[category.priceModel] || 'per-night';
        }
    }

    // Form submission
    var form = document.getElementById('editCategoryForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            var saveBtn = document.getElementById('saveCategoryBtn');
            if (saveBtn) {
                saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved Successfully';
                saveBtn.disabled = true;
                saveBtn.style.opacity = '0.8';

                setTimeout(function() {
                    window.location.href = 'category-view.html?id=' + categoryId;
                }, 1200);
            }
        });
    }

    initializeLogout();
}

/* ============================================
   PHASE 11: VENDOR COMMISSION SETUP
   ============================================ */

var commissionData = {
    'COM-001': {
        id: 'COM-001', vendor: 'Luxury Hotels Group', vendorId: '#VND-015', vendorType: 'Hotel',
        commissionType: 'Percentage', rate: '12%', rateValue: 12,
        effectiveDate: 'Jan 01, 2026', expiryDate: 'Dec 31, 2026', status: 'active',
        totalCollected: 'SAR 54,200', minCommission: 'SAR 50', maxCommission: 'SAR 5,000',
        overrideType: 'Per-Vendor Override', platformFee: 'Yes', invoice: 'Automatic - Monthly',
        modifiedBy: 'Admin User', baseRate: '12%',
        avatar: 'COM', avatarBg: '8e44ad',
        history: [
            { date: 'Jan 01, 2026', prevRate: '10%', newRate: '12%', changedBy: 'Admin User', reason: 'Annual rate adjustment' },
            { date: 'Jul 01, 2025', prevRate: '8%', newRate: '10%', changedBy: 'Admin User', reason: 'Performance tier upgrade' }
        ],
        invoices: [
            { id: 'INV-1201', period: 'Feb 2026', amount: 'SAR 6,800', status: 'Paid' },
            { id: 'INV-1185', period: 'Jan 2026', amount: 'SAR 5,400', status: 'Paid' },
            { id: 'INV-1160', period: 'Dec 2025', amount: 'SAR 4,900', status: 'Paid' }
        ]
    },
    'COM-002': {
        id: 'COM-002', vendor: 'Arabian Bites Restaurant', vendorId: '#VND-022', vendorType: 'Restaurant',
        commissionType: 'Percentage', rate: '15%', rateValue: 15,
        effectiveDate: 'Feb 01, 2026', expiryDate: 'Jan 31, 2027', status: 'active',
        totalCollected: 'SAR 28,500', minCommission: 'SAR 30', maxCommission: 'SAR 2,000',
        overrideType: 'Default Rate', platformFee: 'Yes', invoice: 'Automatic - Monthly',
        modifiedBy: 'Admin User', baseRate: '15%',
        avatar: 'COM', avatarBg: 'e74c3c',
        history: [
            { date: 'Feb 01, 2026', prevRate: '12%', newRate: '15%', changedBy: 'Admin User', reason: 'Category rate increase' }
        ],
        invoices: [
            { id: 'INV-1202', period: 'Feb 2026', amount: 'SAR 3,200', status: 'Paid' }
        ]
    },
    'COM-003': {
        id: 'COM-003', vendor: 'Desert Adventures Co.', vendorId: '#VND-035', vendorType: 'Package Provider',
        commissionType: 'Tiered', rate: '8-15%', rateValue: 10,
        effectiveDate: 'Jan 15, 2026', expiryDate: 'Jul 14, 2026', status: 'active',
        totalCollected: 'SAR 42,100', minCommission: 'SAR 100', maxCommission: 'SAR 10,000',
        overrideType: 'Tiered Override', platformFee: 'Yes', invoice: 'Automatic - Weekly',
        modifiedBy: 'Admin User', baseRate: '10%',
        avatar: 'COM', avatarBg: '27ae60',
        history: [
            { date: 'Jan 15, 2026', prevRate: '10%', newRate: '8-15%', changedBy: 'Admin User', reason: 'Switched to tiered commission model' }
        ],
        invoices: [
            { id: 'INV-1203', period: 'Feb 2026', amount: 'SAR 5,600', status: 'Pending' },
            { id: 'INV-1180', period: 'Jan 2026', amount: 'SAR 4,200', status: 'Paid' }
        ]
    },
    'COM-004': {
        id: 'COM-004', vendor: 'Jeddah Seaside Resort', vendorId: '#VND-008', vendorType: 'Hotel',
        commissionType: 'Fixed', rate: 'SAR 500/booking', rateValue: 500,
        effectiveDate: 'Mar 01, 2026', expiryDate: 'Aug 31, 2026', status: 'active',
        totalCollected: 'SAR 18,000', minCommission: 'SAR 500', maxCommission: 'SAR 500',
        overrideType: 'Per-Vendor Override', platformFee: 'No', invoice: 'Manual',
        modifiedBy: 'Admin User', baseRate: 'SAR 500',
        avatar: 'COM', avatarBg: '3498db',
        history: [
            { date: 'Mar 01, 2026', prevRate: '12%', newRate: 'SAR 500', changedBy: 'Admin User', reason: 'Negotiated fixed rate per agreement' }
        ],
        invoices: [
            { id: 'INV-1210', period: 'Mar 2026', amount: 'SAR 4,500', status: 'Pending' }
        ]
    },
    'COM-005': {
        id: 'COM-005', vendor: 'Mountain Trek Tours', vendorId: '#VND-041', vendorType: 'Activity Operator',
        commissionType: 'Percentage', rate: '10%', rateValue: 10,
        effectiveDate: 'Dec 01, 2025', expiryDate: 'Nov 30, 2026', status: 'active',
        totalCollected: 'SAR 15,800', minCommission: 'SAR 20', maxCommission: 'SAR 3,000',
        overrideType: 'Default Rate', platformFee: 'Yes', invoice: 'Automatic - Monthly',
        modifiedBy: 'Admin User', baseRate: '10%',
        avatar: 'COM', avatarBg: 'f39c12',
        history: [],
        invoices: [
            { id: 'INV-1195', period: 'Feb 2026', amount: 'SAR 2,100', status: 'Paid' },
            { id: 'INV-1170', period: 'Jan 2026', amount: 'SAR 1,800', status: 'Paid' }
        ]
    },
    'COM-006': {
        id: 'COM-006', vendor: 'Quick Ride Cabs', vendorId: '#VND-052', vendorType: 'Cab Provider',
        commissionType: 'Percentage', rate: '18%', rateValue: 18,
        effectiveDate: 'Jan 01, 2026', expiryDate: 'Dec 31, 2026', status: 'active',
        totalCollected: 'SAR 32,400', minCommission: 'SAR 5', maxCommission: 'SAR 500',
        overrideType: 'Default Rate', platformFee: 'Yes', invoice: 'Automatic - Weekly',
        modifiedBy: 'Admin User', baseRate: '18%',
        avatar: 'COM', avatarBg: '9b59b6',
        history: [
            { date: 'Jan 01, 2026', prevRate: '15%', newRate: '18%', changedBy: 'Admin User', reason: 'Annual cab commission adjustment' }
        ],
        invoices: [
            { id: 'INV-1200', period: 'Feb 2026', amount: 'SAR 4,200', status: 'Paid' }
        ]
    },
    'COM-007': {
        id: 'COM-007', vendor: 'Heritage Eats', vendorId: '#VND-028', vendorType: 'Restaurant',
        commissionType: 'Percentage', rate: '12%', rateValue: 12,
        effectiveDate: 'Nov 01, 2025', expiryDate: 'Oct 31, 2025', status: 'expired',
        totalCollected: 'SAR 8,900', minCommission: 'SAR 30', maxCommission: 'SAR 2,000',
        overrideType: 'Per-Vendor Override', platformFee: 'Yes', invoice: 'Automatic - Monthly',
        modifiedBy: 'Admin User', baseRate: '12%',
        avatar: 'COM', avatarBg: '1abc9c',
        history: [],
        invoices: [
            { id: 'INV-1090', period: 'Oct 2025', amount: 'SAR 1,200', status: 'Paid' }
        ]
    },
    'COM-008': {
        id: 'COM-008', vendor: 'Al Madinah Hotels', vendorId: '#VND-061', vendorType: 'Hotel',
        commissionType: 'Percentage', rate: '14%', rateValue: 14,
        effectiveDate: 'Apr 01, 2026', expiryDate: 'Mar 31, 2027', status: 'pending',
        totalCollected: 'SAR 0', minCommission: 'SAR 50', maxCommission: 'SAR 5,000',
        overrideType: 'Per-Vendor Override', platformFee: 'Yes', invoice: 'Automatic - Monthly',
        modifiedBy: 'Admin User', baseRate: '14%',
        avatar: 'COM', avatarBg: '2ecc71',
        history: [],
        invoices: []
    }
};

function initializeCommissionManagement() {
    populateCommissionTable();
    var searchInput = document.getElementById('commissionSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterCommissionTable);
    }
    var typeFilter = document.getElementById('commissionTypeFilter');
    var vendorTypeFilter = document.getElementById('commissionVendorTypeFilter');
    var statusFilter = document.getElementById('commissionStatusFilter');
    if (typeFilter) typeFilter.addEventListener('change', filterCommissionTable);
    if (vendorTypeFilter) vendorTypeFilter.addEventListener('change', filterCommissionTable);
    if (statusFilter) statusFilter.addEventListener('change', filterCommissionTable);
    initializeLogout();
}

function populateCommissionTable() {
    var tbody = document.getElementById('commissionTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    Object.keys(commissionData).forEach(function(key) {
        var c = commissionData[key];
        var statusClass = 'status-' + c.status;
        tbody.innerHTML += '<tr>' +
            '<td><strong>' + c.id + '</strong></td>' +
            '<td><div class="table-user"><img src="https://ui-avatars.com/api/?name=' + c.avatar + '&background=' + c.avatarBg + '&color=fff&size=32" alt=""><div class="table-user-info"><span class="table-user-name">' + c.vendor + '</span><span class="table-user-id">' + c.vendorId + '</span></div></div></td>' +
            '<td><span class="commission-vendor-type">' + c.vendorType + '</span></td>' +
            '<td><span class="commission-type-badge commission-type-' + c.commissionType.toLowerCase() + '">' + c.commissionType + '</span></td>' +
            '<td><strong>' + c.rate + '</strong></td>' +
            '<td>' + c.effectiveDate + '</td>' +
            '<td><span class="status-badge ' + statusClass + '">' + c.status.charAt(0).toUpperCase() + c.status.slice(1) + '</span></td>' +
            '<td><div class="action-buttons">' +
                '<a href="commission-view.html?id=' + c.id + '" class="action-btn action-view" title="View"><i class="fas fa-eye"></i></a>' +
                '<a href="commission-edit.html?id=' + c.id + '" class="action-btn action-edit" title="Edit"><i class="fas fa-pen"></i></a>' +
            '</div></td>' +
        '</tr>';
    });
}

function filterCommissionTable() {
    var searchTerm = (document.getElementById('commissionSearchInput').value || '').toLowerCase();
    var typeFilter = (document.getElementById('commissionTypeFilter').value || 'all');
    var vendorTypeFilter = (document.getElementById('commissionVendorTypeFilter').value || 'all');
    var statusFilter = (document.getElementById('commissionStatusFilter').value || 'all');
    var rows = document.querySelectorAll('#commissionTableBody tr');
    rows.forEach(function(row) {
        var text = row.textContent.toLowerCase();
        var matchSearch = !searchTerm || text.indexOf(searchTerm) > -1;
        var matchType = typeFilter === 'all' || text.indexOf(typeFilter) > -1;
        var matchVendor = vendorTypeFilter === 'all' || text.toLowerCase().indexOf(vendorTypeFilter) > -1;
        var matchStatus = statusFilter === 'all' || row.querySelector('.status-badge').textContent.toLowerCase() === statusFilter;
        row.style.display = (matchSearch && matchType && matchVendor && matchStatus) ? '' : 'none';
    });
}

function initializeCommissionViewPage() {
    var params = new URLSearchParams(window.location.search);
    var commissionId = params.get('id') || 'COM-001';
    var c = commissionData[commissionId];
    if (!c) { window.location.href = 'commission.html'; return; }

    document.getElementById('viewCommissionId').textContent = c.id;
    document.getElementById('viewCommissionVendorType').textContent = c.vendorType;
    document.getElementById('viewCommissionStatus').textContent = c.status.charAt(0).toUpperCase() + c.status.slice(1);
    document.getElementById('viewCommissionStatus').className = 'status-badge status-' + c.status;
    document.getElementById('viewCommissionVendor').textContent = c.vendor;
    document.getElementById('viewCommissionVendorId').textContent = c.vendorId;
    document.getElementById('viewCommissionType').textContent = c.commissionType;
    document.getElementById('viewCommissionRate').textContent = c.rate;
    document.getElementById('viewCommissionEffectiveDate').textContent = c.effectiveDate;
    document.getElementById('viewCommissionExpiryDate').textContent = c.expiryDate;
    document.getElementById('viewCommissionTotalCollected').textContent = c.totalCollected;
    document.getElementById('viewCommissionModifiedBy').textContent = c.modifiedBy;
    document.getElementById('viewCommissionBaseRate').textContent = c.baseRate;
    document.getElementById('viewCommissionOverrideType').textContent = c.overrideType;
    document.getElementById('viewCommissionMin').textContent = c.minCommission;
    document.getElementById('viewCommissionMax').textContent = c.maxCommission;
    document.getElementById('viewCommissionPlatformFee').textContent = c.platformFee;
    document.getElementById('viewCommissionInvoice').textContent = c.invoice;
    var avatar = document.getElementById('viewCommissionAvatar');
    if (avatar) avatar.src = 'https://ui-avatars.com/api/?name=' + c.avatar + '&background=' + c.avatarBg + '&color=fff&size=120';
    var editLink = document.getElementById('editCommissionLink');
    if (editLink) editLink.href = 'commission-edit.html?id=' + c.id;

    // Populate history table
    var historyBody = document.getElementById('commissionHistoryBody');
    if (historyBody) {
        historyBody.innerHTML = '';
        if (c.history.length === 0) {
            historyBody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text-secondary)">No changes recorded</td></tr>';
        } else {
            c.history.forEach(function(h) {
                historyBody.innerHTML += '<tr><td>' + h.date + '</td><td>' + h.prevRate + '</td><td>' + h.newRate + '</td><td>' + h.changedBy + '</td><td>' + h.reason + '</td></tr>';
            });
        }
    }

    // Populate invoices
    var invoicesDiv = document.getElementById('viewCommissionInvoices');
    if (invoicesDiv) {
        invoicesDiv.innerHTML = '';
        if (c.invoices.length === 0) {
            invoicesDiv.innerHTML = '<p style="color:var(--text-secondary)">No invoices generated yet</p>';
        } else {
            c.invoices.forEach(function(inv) {
                var invStatusClass = inv.status === 'Paid' ? 'status-active' : 'status-pending';
                invoicesDiv.innerHTML += '<div class="info-item"><span class="info-label"><i class="fas fa-file-invoice"></i> ' + inv.id + ' (' + inv.period + ')</span><span class="info-value">' + inv.amount + ' <span class="status-badge ' + invStatusClass + '">' + inv.status + '</span></span></div>';
            });
        }
    }
    initializeLogout();
}

function initializeCommissionEditPage() {
    var params = new URLSearchParams(window.location.search);
    var commissionId = params.get('id') || 'COM-001';
    var c = commissionData[commissionId];
    if (!c) { window.location.href = 'commission.html'; return; }

    document.getElementById('editCommissionDisplayId').textContent = c.id;
    document.getElementById('editCommissionVendorLabel').textContent = c.vendorType;
    document.getElementById('editCommissionVendor').value = c.vendor;
    document.getElementById('editCommissionVendorId').value = c.vendorId;

    var typeMap = { 'Hotel': 'hotel', 'Restaurant': 'restaurant', 'Package Provider': 'package', 'Activity Operator': 'activity', 'Cab Provider': 'cab' };
    var vendorTypeSelect = document.getElementById('editCommissionVendorType');
    if (vendorTypeSelect) vendorTypeSelect.value = typeMap[c.vendorType] || 'hotel';

    var statusSelect = document.getElementById('editCommissionStatus');
    if (statusSelect) statusSelect.value = c.status;

    var commTypeMap = { 'Percentage': 'percentage', 'Fixed': 'fixed', 'Tiered': 'tiered' };
    var commTypeSelect = document.getElementById('editCommissionType');
    if (commTypeSelect) commTypeSelect.value = commTypeMap[c.commissionType] || 'percentage';

    document.getElementById('editCommissionRate').value = c.rateValue;
    document.getElementById('editCommissionMin').value = parseInt(c.minCommission.replace(/[^0-9]/g, '')) || 0;
    document.getElementById('editCommissionMax').value = parseInt(c.maxCommission.replace(/[^0-9]/g, '')) || 0;

    var form = document.getElementById('commissionEditForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var saveBtn = form.querySelector('.btn-primary');
            if (saveBtn) {
                saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved Successfully';
                saveBtn.disabled = true;
                saveBtn.style.opacity = '0.8';
                setTimeout(function() { window.location.href = 'commission-view.html?id=' + commissionId; }, 1200);
            }
        });
    }
    initializeLogout();
}

/* ============================================
   PHASE 11: ADS HOURLY RATE CONTROL
   ============================================ */

var adsRateData = {
    'RATE-001': {
        id: 'RATE-001', adType: 'Banner', baseRate: 25, effectiveRate: 30,
        durationTier: '24-72 hours', lockIn: 'Rate locked at approval', status: 'active',
        effectiveDate: 'Jan 01, 2026', expiryDate: 'Jun 30, 2026',
        totalBilled: 'SAR 12,400', createdBy: 'Admin User',
        minHours: 4, maxHours: 720, minSpend: 100, maxSpend: 50000,
        invoice: 'Automatic',
        avatar: 'ADS', avatarBg: 'e67e22',
        tiers: [
            { range: '1-24 hours', rate: 35, discount: '0%', minSpend: 'SAR 100' },
            { range: '24-72 hours', rate: 30, discount: '14%', minSpend: 'SAR 500' },
            { range: '72-168 hours', rate: 25, discount: '29%', minSpend: 'SAR 1,500' },
            { range: '168+ hours', rate: 20, discount: '43%', minSpend: 'SAR 3,000' }
        ],
        history: [
            { date: 'Jan 01, 2026', prevRate: 'SAR 22/hr', newRate: 'SAR 25/hr', changedBy: 'Admin User' },
            { date: 'Sep 01, 2025', prevRate: 'SAR 20/hr', newRate: 'SAR 22/hr', changedBy: 'Admin User' }
        ],
        campaigns: [
            { name: 'Hotel Promo Spring', vendor: 'Luxury Hotels Group', hours: 168, cost: 'SAR 4,200' },
            { name: 'Weekend Deals', vendor: 'Arabian Bites', hours: 48, cost: 'SAR 1,440' }
        ]
    },
    'RATE-002': {
        id: 'RATE-002', adType: 'Featured Listing', baseRate: 40, effectiveRate: 45,
        durationTier: '24-168 hours', lockIn: 'Rate locked at campaign start', status: 'active',
        effectiveDate: 'Feb 01, 2026', expiryDate: 'Jul 31, 2026',
        totalBilled: 'SAR 22,800', createdBy: 'Admin User',
        minHours: 12, maxHours: 720, minSpend: 200, maxSpend: 100000,
        invoice: 'On Campaign Completion',
        avatar: 'ADS', avatarBg: '3498db',
        tiers: [
            { range: '1-24 hours', rate: 50, discount: '0%', minSpend: 'SAR 200' },
            { range: '24-72 hours', rate: 45, discount: '10%', minSpend: 'SAR 800' },
            { range: '72-168 hours', rate: 40, discount: '20%', minSpend: 'SAR 2,500' },
            { range: '168+ hours', rate: 35, discount: '30%', minSpend: 'SAR 5,000' }
        ],
        history: [
            { date: 'Feb 01, 2026', prevRate: 'SAR 35/hr', newRate: 'SAR 40/hr', changedBy: 'Admin User' }
        ],
        campaigns: [
            { name: 'Featured Hotels Q1', vendor: 'Grand Plaza', hours: 336, cost: 'SAR 13,440' },
            { name: 'Featured Restaurants', vendor: 'Heritage Eats', hours: 168, cost: 'SAR 6,720' }
        ]
    },
    'RATE-003': {
        id: 'RATE-003', adType: 'Sponsored', baseRate: 35, effectiveRate: 38,
        durationTier: '72-168 hours', lockIn: 'Rate locked at approval', status: 'active',
        effectiveDate: 'Jan 15, 2026', expiryDate: 'Jul 14, 2026',
        totalBilled: 'SAR 18,200', createdBy: 'Admin User',
        minHours: 24, maxHours: 720, minSpend: 500, maxSpend: 75000,
        invoice: 'Automatic',
        avatar: 'ADS', avatarBg: '9b59b6',
        tiers: [
            { range: '1-24 hours', rate: 45, discount: '0%', minSpend: 'SAR 500' },
            { range: '24-72 hours', rate: 40, discount: '11%', minSpend: 'SAR 1,200' },
            { range: '72-168 hours', rate: 35, discount: '22%', minSpend: 'SAR 2,000' },
            { range: '168+ hours', rate: 30, discount: '33%', minSpend: 'SAR 4,000' }
        ],
        history: [],
        campaigns: [
            { name: 'Sponsored Packages', vendor: 'Desert Adventures', hours: 168, cost: 'SAR 5,880' }
        ]
    },
    'RATE-004': {
        id: 'RATE-004', adType: 'Pop-up', baseRate: 50, effectiveRate: 55,
        durationTier: '1-24 hours', lockIn: 'No lock-in (dynamic)', status: 'active',
        effectiveDate: 'Mar 01, 2026', expiryDate: 'Aug 31, 2026',
        totalBilled: 'SAR 8,600', createdBy: 'Admin User',
        minHours: 1, maxHours: 48, minSpend: 50, maxSpend: 10000,
        invoice: 'Automatic',
        avatar: 'ADS', avatarBg: 'e74c3c',
        tiers: [
            { range: '1-6 hours', rate: 60, discount: '0%', minSpend: 'SAR 50' },
            { range: '6-12 hours', rate: 55, discount: '8%', minSpend: 'SAR 200' },
            { range: '12-24 hours', rate: 50, discount: '17%', minSpend: 'SAR 400' },
            { range: '24-48 hours', rate: 45, discount: '25%', minSpend: 'SAR 800' }
        ],
        history: [
            { date: 'Mar 01, 2026', prevRate: 'SAR 45/hr', newRate: 'SAR 50/hr', changedBy: 'Admin User' }
        ],
        campaigns: []
    },
    'RATE-005': {
        id: 'RATE-005', adType: 'Banner', baseRate: 22, effectiveRate: 22,
        durationTier: '168+ hours', lockIn: 'Rate locked at approval', status: 'locked',
        effectiveDate: 'Oct 01, 2025', expiryDate: 'Mar 31, 2026',
        totalBilled: 'SAR 31,200', createdBy: 'Admin User',
        minHours: 168, maxHours: 2160, minSpend: 3000, maxSpend: 100000,
        invoice: 'Automatic',
        avatar: 'ADS', avatarBg: '2ecc71',
        tiers: [
            { range: '168-336 hours', rate: 22, discount: '0%', minSpend: 'SAR 3,000' },
            { range: '336-720 hours', rate: 20, discount: '9%', minSpend: 'SAR 6,000' },
            { range: '720-1440 hours', rate: 18, discount: '18%', minSpend: 'SAR 12,000' },
            { range: '1440+ hours', rate: 15, discount: '32%', minSpend: 'SAR 20,000' }
        ],
        history: [],
        campaigns: [
            { name: 'Long-term Banner Q4', vendor: 'Jeddah Seaside', hours: 720, cost: 'SAR 14,400' }
        ]
    },
    'RATE-006': {
        id: 'RATE-006', adType: 'Featured Listing', baseRate: 38, effectiveRate: 38,
        durationTier: '72-168 hours', lockIn: 'Rate locked at campaign start', status: 'expired',
        effectiveDate: 'Jul 01, 2025', expiryDate: 'Dec 31, 2025',
        totalBilled: 'SAR 15,600', createdBy: 'Admin User',
        minHours: 72, maxHours: 720, minSpend: 2000, maxSpend: 50000,
        invoice: 'Manual',
        avatar: 'ADS', avatarBg: '7f8c8d',
        tiers: [
            { range: '72-168 hours', rate: 38, discount: '0%', minSpend: 'SAR 2,000' },
            { range: '168-336 hours', rate: 34, discount: '11%', minSpend: 'SAR 5,000' },
            { range: '336+ hours', rate: 30, discount: '21%', minSpend: 'SAR 8,000' }
        ],
        history: [],
        campaigns: []
    }
};

function initializeAdsRateManagement() {
    populateAdsRateTable();
    var searchInput = document.getElementById('adsRateSearchInput');
    if (searchInput) searchInput.addEventListener('input', filterAdsRateTable);
    var typeFilter = document.getElementById('adsRateTypeFilter');
    var statusFilter = document.getElementById('adsRateStatusFilter');
    if (typeFilter) typeFilter.addEventListener('change', filterAdsRateTable);
    if (statusFilter) statusFilter.addEventListener('change', filterAdsRateTable);
    initializeLogout();
}

function populateAdsRateTable() {
    var tbody = document.getElementById('adsRateTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    Object.keys(adsRateData).forEach(function(key) {
        var r = adsRateData[key];
        var statusClass = 'status-' + r.status;
        var lockIcon = r.lockIn.indexOf('locked') > -1 ? '<i class="fas fa-lock"></i> ' : '<i class="fas fa-unlock"></i> ';
        tbody.innerHTML += '<tr>' +
            '<td><strong>' + r.id + '</strong></td>' +
            '<td><span class="ads-type-badge ads-type-' + r.adType.toLowerCase().replace(' ', '-') + '">' + r.adType + '</span></td>' +
            '<td><strong>SAR ' + r.baseRate + '/hr</strong></td>' +
            '<td>' + r.durationTier + '</td>' +
            '<td><strong>SAR ' + r.effectiveRate + '/hr</strong></td>' +
            '<td>' + lockIcon + (r.lockIn.indexOf('locked') > -1 ? 'Yes' : 'No') + '</td>' +
            '<td><span class="status-badge ' + statusClass + '">' + r.status.charAt(0).toUpperCase() + r.status.slice(1) + '</span></td>' +
            '<td><div class="action-buttons">' +
                '<a href="ads-rate-view.html?id=' + r.id + '" class="action-btn action-view" title="View"><i class="fas fa-eye"></i></a>' +
                '<a href="ads-rate-edit.html?id=' + r.id + '" class="action-btn action-edit" title="Edit"><i class="fas fa-pen"></i></a>' +
            '</div></td>' +
        '</tr>';
    });
}

function filterAdsRateTable() {
    var searchTerm = (document.getElementById('adsRateSearchInput').value || '').toLowerCase();
    var typeFilter = (document.getElementById('adsRateTypeFilter').value || 'all');
    var statusFilter = (document.getElementById('adsRateStatusFilter').value || 'all');
    var rows = document.querySelectorAll('#adsRateTableBody tr');
    rows.forEach(function(row) {
        var text = row.textContent.toLowerCase();
        var matchSearch = !searchTerm || text.indexOf(searchTerm) > -1;
        var matchType = typeFilter === 'all' || text.indexOf(typeFilter) > -1;
        var matchStatus = statusFilter === 'all' || row.querySelector('.status-badge').textContent.toLowerCase() === statusFilter;
        row.style.display = (matchSearch && matchType && matchStatus) ? '' : 'none';
    });
}

function initializeAdsRateViewPage() {
    var params = new URLSearchParams(window.location.search);
    var rateId = params.get('id') || 'RATE-001';
    var r = adsRateData[rateId];
    if (!r) { window.location.href = 'ads-rate.html'; return; }

    document.getElementById('viewAdsRateId').textContent = r.id;
    document.getElementById('viewAdsRateAdType').textContent = r.adType + ' Ad';
    document.getElementById('viewAdsRateStatus').textContent = r.status.charAt(0).toUpperCase() + r.status.slice(1);
    document.getElementById('viewAdsRateStatus').className = 'status-badge status-' + r.status;
    document.getElementById('viewAdsRateBase').textContent = 'SAR ' + r.baseRate + '/hr';
    document.getElementById('viewAdsRateEffective').textContent = 'SAR ' + r.effectiveRate + '/hr';
    document.getElementById('viewAdsRateDuration').textContent = r.durationTier;
    document.getElementById('viewAdsRateLockIn').textContent = r.lockIn;
    document.getElementById('viewAdsRateEffectiveDate').textContent = r.effectiveDate;
    document.getElementById('viewAdsRateExpiryDate').textContent = r.expiryDate;
    document.getElementById('viewAdsRateTotalBilled').textContent = r.totalBilled;
    document.getElementById('viewAdsRateCreatedBy').textContent = r.createdBy;
    var avatar = document.getElementById('viewAdsRateAvatar');
    if (avatar) avatar.src = 'https://ui-avatars.com/api/?name=' + r.avatar + '&background=' + r.avatarBg + '&color=fff&size=120';
    var editLink = document.getElementById('editAdsRateLink');
    if (editLink) editLink.href = 'ads-rate-edit.html?id=' + r.id;

    // Populate tiers table
    var tiersBody = document.getElementById('adsRateTiersBody');
    if (tiersBody) {
        tiersBody.innerHTML = '';
        r.tiers.forEach(function(t) {
            tiersBody.innerHTML += '<tr><td>' + t.range + '</td><td>SAR ' + t.rate + '</td><td>' + t.discount + '</td><td>' + t.minSpend + '</td></tr>';
        });
    }

    // Populate history table
    var historyBody = document.getElementById('adsRateHistoryBody');
    if (historyBody) {
        historyBody.innerHTML = '';
        if (r.history.length === 0) {
            historyBody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--text-secondary)">No rate changes recorded</td></tr>';
        } else {
            r.history.forEach(function(h) {
                historyBody.innerHTML += '<tr><td>' + h.date + '</td><td>' + h.prevRate + '</td><td>' + h.newRate + '</td><td>' + h.changedBy + '</td></tr>';
            });
        }
    }

    // Populate campaigns
    var campaignsDiv = document.getElementById('viewAdsRateCampaigns');
    if (campaignsDiv) {
        campaignsDiv.innerHTML = '';
        if (r.campaigns.length === 0) {
            campaignsDiv.innerHTML = '<p style="color:var(--text-secondary)">No active campaigns using this rate</p>';
        } else {
            r.campaigns.forEach(function(camp) {
                campaignsDiv.innerHTML += '<div class="info-item"><span class="info-label"><i class="fas fa-bullhorn"></i> ' + camp.name + ' (' + camp.vendor + ')</span><span class="info-value">' + camp.hours + ' hrs — ' + camp.cost + '</span></div>';
            });
        }
    }
    initializeLogout();
}

function initializeAdsRateEditPage() {
    var params = new URLSearchParams(window.location.search);
    var rateId = params.get('id') || 'RATE-001';
    var r = adsRateData[rateId];
    if (!r) { window.location.href = 'ads-rate.html'; return; }

    document.getElementById('editAdsRateDisplayId').textContent = r.id;
    document.getElementById('editAdsRateAdTypeLabel').textContent = r.adType + ' Ad';

    var adTypeMap = { 'Banner': 'banner', 'Featured Listing': 'featured', 'Sponsored': 'sponsored', 'Pop-up': 'popup' };
    var adTypeSelect = document.getElementById('editAdsRateAdType');
    if (adTypeSelect) adTypeSelect.value = adTypeMap[r.adType] || 'banner';

    var statusSelect = document.getElementById('editAdsRateStatus');
    if (statusSelect) statusSelect.value = r.status;

    document.getElementById('editAdsRateBaseRate').value = r.baseRate;
    document.getElementById('editAdsRateMinHours').value = r.minHours;
    document.getElementById('editAdsRateMaxHours').value = r.maxHours;
    document.getElementById('editAdsRateMinSpend').value = r.minSpend;
    document.getElementById('editAdsRateMaxSpend').value = r.maxSpend;

    // Populate tier rates
    if (r.tiers.length >= 4) {
        document.getElementById('editAdsRateTier1Rate').value = r.tiers[0].rate;
        document.getElementById('editAdsRateTier2Rate').value = r.tiers[1].rate;
        document.getElementById('editAdsRateTier3Rate').value = r.tiers[2].rate;
        document.getElementById('editAdsRateTier4Rate').value = r.tiers[3].rate;
    }

    var lockInMap = { 'Rate locked at approval': 'approval', 'Rate locked at campaign start': 'start', 'No lock-in (dynamic)': 'none' };
    var lockInSelect = document.getElementById('editAdsRateLockIn');
    if (lockInSelect) lockInSelect.value = lockInMap[r.lockIn] || 'approval';

    var invoiceMap = { 'Automatic': 'auto', 'Manual': 'manual', 'On Campaign Completion': 'on-completion' };
    var invoiceSelect = document.getElementById('editAdsRateInvoice');
    if (invoiceSelect) invoiceSelect.value = invoiceMap[r.invoice] || 'auto';

    var form = document.getElementById('adsRateEditForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var saveBtn = form.querySelector('.btn-primary');
            if (saveBtn) {
                saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved Successfully';
                saveBtn.disabled = true;
                saveBtn.style.opacity = '0.8';
                setTimeout(function() { window.location.href = 'ads-rate-view.html?id=' + rateId; }, 1200);
            }
        });
    }
    initializeLogout();
}

/* ============================================
   PHASE 11: ENHANCED DASHBOARD DATE FILTERS
   ============================================ */

function initializeComparisonToggle() {
    var compareToggle = document.getElementById('compareToggle');
    var comparisonSection = document.getElementById('comparisonSection');
    if (compareToggle && comparisonSection) {
        // Load saved preference
        var savedCompare = localStorage.getItem('dashboardCompareEnabled');
        if (savedCompare === 'true') {
            compareToggle.checked = true;
            comparisonSection.style.display = '';
        }
        compareToggle.addEventListener('change', function() {
            if (this.checked) {
                comparisonSection.style.display = '';
                localStorage.setItem('dashboardCompareEnabled', 'true');
            } else {
                comparisonSection.style.display = 'none';
                localStorage.setItem('dashboardCompareEnabled', 'false');
            }
        });

        // Update comparison range text based on active filter
        var dateFilter = document.getElementById('dateFilter');
        if (dateFilter) {
            dateFilter.addEventListener('change', function() {
                updateComparisonRange(this.value);
            });
            updateComparisonRange(dateFilter.value);
        }
    }
}

function updateComparisonRange(filter) {
    var rangeEl = document.getElementById('comparisonRange');
    if (!rangeEl) return;
    var labels = {
        'daily': 'Today vs Yesterday',
        'weekly': 'This Week vs Last Week',
        'monthly': 'This Month vs Last Month',
        'yearly': 'This Year vs Last Year',
        'custom': 'Selected Range vs Previous Equal Period'
    };
    rangeEl.textContent = labels[filter] || 'Current vs Previous Period';
}

/* ============================================
   SUB ADMIN MANAGEMENT
   ============================================ */

function initializeSubAdminManagement() {
    var searchInput = document.getElementById('subAdminSearchInput');
    var statusFilter = document.getElementById('subAdminStatusFilter');
    var roleFilter = document.getElementById('subAdminRoleFilter');
    var sortFilter = document.getElementById('subAdminSortFilter');
    var table = document.getElementById('subAdminsTable');
    var rows = table ? table.querySelectorAll('tbody tr') : [];

    function filterTable() {
        var searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        var statusVal = statusFilter ? statusFilter.value : 'all';
        var roleVal = roleFilter ? roleFilter.value : 'all';

        rows.forEach(function(row) {
            var name = row.querySelector('.table-user-name');
            var email = row.cells[1];
            var id = row.querySelector('.table-user-id');
            var roleBadge = row.querySelector('.role-badge');
            var statusBadge = row.querySelector('.status-badge');

            var nameText = name ? name.textContent.toLowerCase() : '';
            var emailText = email ? email.textContent.toLowerCase() : '';
            var idText = id ? id.textContent.toLowerCase() : '';
            var roleText = roleBadge ? roleBadge.textContent.toLowerCase().replace(/\s+/g, '-') : '';
            var statusText = statusBadge ? statusBadge.textContent.toLowerCase() : '';

            var matchSearch = !searchTerm || nameText.includes(searchTerm) || emailText.includes(searchTerm) || idText.includes(searchTerm);
            var matchStatus = statusVal === 'all' || statusText === statusVal;
            var matchRole = roleVal === 'all' || roleText === roleVal;

            row.style.display = (matchSearch && matchStatus && matchRole) ? '' : 'none';
        });
    }

    if (searchInput) searchInput.addEventListener('input', filterTable);
    if (statusFilter) statusFilter.addEventListener('change', filterTable);
    if (roleFilter) roleFilter.addEventListener('change', filterTable);

    // Block/Unblock actions
    rows.forEach(function(row) {
        var blockBtn = row.querySelector('.action-block');
        var unblockBtn = row.querySelector('.action-unblock');

        if (blockBtn) {
            blockBtn.addEventListener('click', function() {
                var name = row.querySelector('.table-user-name').textContent;
                if (confirm('Are you sure you want to suspend ' + name + '?')) {
                    var badge = row.querySelector('.status-badge');
                    badge.textContent = 'Suspended';
                    badge.className = 'status-badge status-blocked';
                    blockBtn.className = 'action-btn action-unblock';
                    blockBtn.title = 'Reactivate Sub Admin';
                    blockBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
                }
            });
        }

        if (unblockBtn) {
            unblockBtn.addEventListener('click', function() {
                var name = row.querySelector('.table-user-name').textContent;
                if (confirm('Are you sure you want to reactivate ' + name + '?')) {
                    var badge = row.querySelector('.status-badge');
                    badge.textContent = 'Active';
                    badge.className = 'status-badge status-active';
                    unblockBtn.className = 'action-btn action-block';
                    unblockBtn.title = 'Suspend Sub Admin';
                    unblockBtn.innerHTML = '<i class="fas fa-ban"></i>';
                }
            });
        }
    });

    // Export CSV
    var exportBtn = document.getElementById('exportSubAdminsBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            alert('Sub admin data exported to CSV successfully!');
        });
    }
}

/* ============================================
   SUB ADMIN EDIT PAGE
   ============================================ */

function initializeSubAdminEditPage() {
    var form = document.getElementById('subAdminEditForm');
    var roleSelect = document.getElementById('subAdminRole');
    var customRoleGroup = document.getElementById('customRoleGroup');
    var ipRestrict = document.getElementById('subAdminIpRestrict');
    var ipWhitelistGroup = document.getElementById('ipWhitelistGroup');
    var selectAllBtn = document.getElementById('selectAllPermissions');
    var deselectAllBtn = document.getElementById('deselectAllPermissions');

    // Role presets
    var rolePresets = {
        'content-manager': ['dashboard', 'cms', 'banners', 'categories', 'notifications'],
        'booking-manager': ['dashboard', 'bookings', 'users', 'packages', 'hotels', 'restaurants', 'activities', 'cabs'],
        'finance-manager': ['dashboard', 'transactions', 'payouts', 'refunds', 'subscriptions', 'commission', 'ads-rate'],
        'support-manager': ['dashboard', 'support', 'notifications', 'users'],
        'vendor-manager': ['dashboard', 'vendors', 'providers', 'categories', 'commission']
    };

    // Show/hide custom role input
    if (roleSelect) {
        roleSelect.addEventListener('change', function() {
            if (customRoleGroup) {
                customRoleGroup.style.display = this.value === 'custom' ? '' : 'none';
            }

            // Apply role preset
            if (rolePresets[this.value]) {
                applyRolePreset(rolePresets[this.value]);
            }
        });
    }

    // IP restriction toggle
    if (ipRestrict) {
        ipRestrict.addEventListener('change', function() {
            if (ipWhitelistGroup) {
                ipWhitelistGroup.style.display = this.checked ? '' : 'none';
            }
        });
    }

    // Apply role preset
    function applyRolePreset(modules) {
        // First uncheck all
        document.querySelectorAll('.module-checkbox').forEach(function(cb) {
            cb.checked = false;
        });
        document.querySelectorAll('.permission-actions input[type="checkbox"]').forEach(function(cb) {
            cb.checked = false;
        });

        // Enable the preset modules
        modules.forEach(function(mod) {
            var moduleCheckbox = document.querySelector('.module-checkbox[data-module="' + mod + '"]');
            if (moduleCheckbox) {
                moduleCheckbox.checked = true;
                // Enable all sub-permissions for this module
                document.querySelectorAll('.permission-actions input[data-module="' + mod + '"]').forEach(function(cb) {
                    cb.checked = true;
                });
            }
        });
    }

    // Module toggle: check/uncheck all permissions in module
    document.querySelectorAll('.module-checkbox').forEach(function(moduleCheckbox) {
        moduleCheckbox.addEventListener('change', function() {
            var mod = this.getAttribute('data-module');
            var isChecked = this.checked;
            document.querySelectorAll('.permission-actions input[data-module="' + mod + '"]').forEach(function(cb) {
                cb.checked = isChecked;
            });
        });
    });

    // Individual permission toggle: auto-check module if any permission checked
    document.querySelectorAll('.permission-actions input[type="checkbox"]').forEach(function(permCheckbox) {
        permCheckbox.addEventListener('change', function() {
            var mod = this.getAttribute('data-module');
            var anyChecked = document.querySelector('.permission-actions input[data-module="' + mod + '"]:checked');
            var moduleCheckbox = document.querySelector('.module-checkbox[data-module="' + mod + '"]');
            if (moduleCheckbox) {
                moduleCheckbox.checked = !!anyChecked;
            }
        });
    });

    // Select All
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.module-checkbox, .permission-actions input[type="checkbox"]').forEach(function(cb) {
                cb.checked = true;
            });
        });
    }

    // Deselect All
    if (deselectAllBtn) {
        deselectAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.module-checkbox, .permission-actions input[type="checkbox"]').forEach(function(cb) {
                cb.checked = false;
            });
        });
    }

    // Update avatar and display name dynamically
    var firstNameInput = document.getElementById('subAdminFirstName');
    var lastNameInput = document.getElementById('subAdminLastName');
    var displayName = document.getElementById('subAdminDisplayName');
    var avatar = document.getElementById('subAdminAvatar');

    function updateDisplayInfo() {
        var first = firstNameInput ? firstNameInput.value : '';
        var last = lastNameInput ? lastNameInput.value : '';
        var fullName = (first + ' ' + last).trim() || 'New Sub Admin';
        if (displayName) displayName.textContent = fullName;
        if (avatar) avatar.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(fullName) + '&background=667eea&color=fff&size=120';
    }

    if (firstNameInput) firstNameInput.addEventListener('input', updateDisplayInfo);
    if (lastNameInput) lastNameInput.addEventListener('input', updateDisplayInfo);

    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Gather selected permissions
            var permissions = {};
            document.querySelectorAll('.module-checkbox:checked').forEach(function(cb) {
                var mod = cb.getAttribute('data-module');
                permissions[mod] = [];
                document.querySelectorAll('.permission-actions input[data-module="' + mod + '"]:checked').forEach(function(perm) {
                    permissions[mod].push(perm.getAttribute('data-perm'));
                });
            });

            // Validate passwords match
            var password = document.getElementById('subAdminPassword').value;
            var confirmPassword = document.getElementById('subAdminConfirmPassword').value;
            if (password && password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Check at least one module is selected
            if (Object.keys(permissions).length === 0) {
                alert('Please assign at least one module permission.');
                return;
            }

            alert('Sub admin saved successfully with ' + Object.keys(permissions).length + ' module permissions!');
            window.location.href = 'sub-admins.html';
        });
    }

    // Load existing data if editing (from URL params)
    var urlParams = new URLSearchParams(window.location.search);
    var subAdminId = urlParams.get('id');
    if (subAdminId) {
        var title = document.getElementById('subAdminEditTitle');
        if (title) title.textContent = 'Edit Sub Admin';
        var idEl = document.getElementById('subAdminId');
        if (idEl) idEl.textContent = '#' + subAdminId;

        // Simulate loading existing sub admin data
        var sampleData = {
            'SA-001': { first: 'Omar', last: 'Farooq', email: 'omar.farooq@tourism.com', phone: '+966 50 234 5678', role: 'booking-manager', status: 'active' },
            'SA-002': { first: 'Aisha', last: 'Khan', email: 'aisha.khan@tourism.com', phone: '+966 55 345 6789', role: 'content-manager', status: 'active' },
            'SA-003': { first: 'Youssef', last: 'Ali', email: 'youssef.ali@tourism.com', phone: '+966 54 456 7890', role: 'finance-manager', status: 'active' }
        };

        var data = sampleData[subAdminId];
        if (data) {
            if (firstNameInput) firstNameInput.value = data.first;
            if (lastNameInput) lastNameInput.value = data.last;
            var emailInput = document.getElementById('subAdminEmail');
            if (emailInput) emailInput.value = data.email;
            var phoneInput = document.getElementById('subAdminPhone');
            if (phoneInput) phoneInput.value = data.phone;
            if (roleSelect) {
                roleSelect.value = data.role;
                if (rolePresets[data.role]) {
                    applyRolePreset(rolePresets[data.role]);
                }
            }
            var statusSelect = document.getElementById('subAdminStatus');
            if (statusSelect) statusSelect.value = data.status;

            // Password not required when editing
            var pwInput = document.getElementById('subAdminPassword');
            var cpwInput = document.getElementById('subAdminConfirmPassword');
            if (pwInput) pwInput.removeAttribute('required');
            if (cpwInput) cpwInput.removeAttribute('required');
            if (pwInput) pwInput.placeholder = 'Leave blank to keep current';
            if (cpwInput) cpwInput.placeholder = 'Leave blank to keep current';

            updateDisplayInfo();
        }
    }
}

/* ============================================
   SUB ADMIN VIEW PAGE
   ============================================ */

function initializeSubAdminViewPage() {
    var urlParams = new URLSearchParams(window.location.search);
    var subAdminId = urlParams.get('id');

    // Update edit link
    var editLink = document.getElementById('editSubAdminLink');
    if (editLink && subAdminId) {
        editLink.href = 'sub-admin-edit.html?id=' + subAdminId;
    }

    // Suspend button
    var suspendBtn = document.getElementById('suspendSubAdminBtn');
    if (suspendBtn) {
        suspendBtn.addEventListener('click', function() {
            var statusBadge = document.getElementById('viewSubAdminStatus');
            var currentStatus = statusBadge ? statusBadge.textContent.trim() : '';
            if (currentStatus === 'Active') {
                if (confirm('Are you sure you want to suspend this sub admin?')) {
                    statusBadge.textContent = 'Suspended';
                    statusBadge.className = 'status-badge status-blocked';
                    suspendBtn.innerHTML = '<i class="fas fa-check-circle"></i> Reactivate';
                    suspendBtn.className = 'btn btn-primary';
                }
            } else {
                if (confirm('Are you sure you want to reactivate this sub admin?')) {
                    statusBadge.textContent = 'Active';
                    statusBadge.className = 'status-badge status-active';
                    suspendBtn.innerHTML = '<i class="fas fa-ban"></i> Suspend';
                    suspendBtn.className = 'btn btn-danger';
                }
            }
        });
    }

    // Reset password
    var resetPwBtn = document.getElementById('resetSubAdminPasswordBtn');
    if (resetPwBtn) {
        resetPwBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to reset this sub admin\'s password? They will receive a reset link via email.')) {
                alert('Password reset link sent to the sub admin\'s email address.');
            }
        });
    }
}

/* ============================================
   SUB ADMIN DASHBOARD
   ============================================ */

function initializeSubAdminDashboard() {
    // Booking Trend Chart
    var bookingCtx = document.getElementById('subAdminBookingChart');
    if (bookingCtx) {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        var gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
        var textColor = isDark ? '#b0b0b0' : '#7f8c8d';

        new Chart(bookingCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
                datasets: [{
                    label: 'Bookings',
                    data: [180, 220, 310, 420, 380, 350, 290, 260, 310, 340, 390, 456],
                    borderColor: '#16a085',
                    backgroundColor: 'rgba(22, 160, 133, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#16a085'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: textColor }
                    }
                }
            }
        });
    }

    // Service Distribution Chart
    var serviceCtx = document.getElementById('subAdminServiceChart');
    if (serviceCtx) {
        new Chart(serviceCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Hotels', 'Packages', 'Activities', 'Cabs', 'Restaurants'],
                datasets: [{
                    data: [35, 25, 20, 12, 8],
                    backgroundColor: [
                        '#16a085',
                        '#e67e22',
                        '#3498db',
                        '#9b59b6',
                        '#e74c3c'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                },
                cutout: '65%'
            }
        });
    }
}

/* ============================================
   ADD PAGE FORM HANDLER (Generic)
   ============================================ */
function initializeAddPageForm(form, redirectUrl, label) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> ' + label + ' Created';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.8';
            setTimeout(function() {
                window.location.href = redirectUrl;
            }, 1200);
        }
    });

    initializeLogout();
}
