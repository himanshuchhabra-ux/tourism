# TourHub Admin Panel - TESTING GUIDE

## Testing Checklist & Instructions

This guide provides comprehensive testing procedures for the Phase 1 prototype to ensure all features, responsive behavior, and interactions work correctly.

---

## 1. SETUP & PREREQUISITES

### Required
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- All files in same directory:
  - index.html
  - dashboard.html
  - styles.css
  - script.js
- Internet connection (for CDN libraries: Chart.js, Font Awesome)

### Optional
- Chrome DevTools (F12) for responsive testing
- Mobile device or mobile browser emulator
- Screen recording tool for documentation

---

## 2. LOGIN PAGE TESTING

### File: `index.html`

#### Test 2.1: Page Load & Visual Appearance
- [ ] Page loads without console errors
- [ ] Brand section displays on left (desktop)
- [ ] Login form displays on right (desktop)
- [ ] Gradient background is animated
- [ ] All icons are visible and properly colored
- [ ] Font sizes are readable
- [ ] Color scheme matches design specification

#### Test 2.2: Form Elements
- [ ] Email/username input field is visible and focused
- [ ] Password input field is visible
- [ ] "Remember me" checkbox is clickable
- [ ] "Forgot password?" link is visible
- [ ] 2FA notice badge displays correctly
- [ ] Security badges (SSL, 2FA) are displayed
- [ ] "Sign In" button is prominent and clickable

#### Test 2.3: Password Toggle Functionality
- [ ] Click eye icon next to password field
- [ ] Password changes from hidden (•••) to visible text
- [ ] Icon changes from "eye" to "eye-slash"
- [ ] Click again to hide password
- [ ] Icon reverts to "eye"
- [ ] Works smoothly without lag

#### Test 2.4: Form Submission
- [ ] Enter email and password
- [ ] Click "Sign In" button
- [ ] Notification appears saying "Logging in..."
- [ ] After 1 second, page redirects to `dashboard.html`
- [ ] "Remember me" preference is saved in local storage
- [ ] Test works without actual authentication

#### Test 2.5: Forgot Password Link
- [ ] Click "Forgot password?" link
- [ ] Browser shows notification: "Password reset would be sent to your email"
- [ ] No page reload or error occurs

#### Test 2.6: Responsive Design - Tablet (768px - 1024px)
- [ ] Resize browser to tablet width
- [ ] Layout changes from side-by-side to stacked
- [ ] Login form is full width
- [ ] All elements are still visible and clickable
- [ ] Spacing is appropriate
- [ ] No horizontal scrolling

#### Test 2.7: Responsive Design - Mobile (<768px)
- [ ] Resize browser to mobile width (375px)
- [ ] Layout is single column
- [ ] Brand section still shows feature benefits
- [ ] Form takes full width with padding
- [ ] Input fields are full width
- [ ] Button is full width and touch-friendly
- [ ] Text is readable without squinting
- [ ] No elements overlap

#### Test 2.8: Responsive Design - Small Mobile (<640px)
- [ ] Resize to 375px width
- [ ] Brand feature text only shows as icons
- [ ] Form spacing is tight but readable
- [ ] All interactive elements are still accessible
- [ ] Touch targets are adequate (44px minimum)

#### Test 2.9: Form Validation - Empty Fields
- [ ] Try to submit form with email empty
- [ ] Notification shows: "Please fill in all fields"
- [ ] Form doesn't submit
- [ ] Try with password empty
- [ ] Same validation applies

#### Test 2.10: Accessibility
- [ ] Use keyboard to navigate form (Tab key)
- [ ] All inputs are reachable
- [ ] Form can be submitted with Enter key
- [ ] Focus indicators are visible
- [ ] Icon buttons have appropriate labels

---

## 3. DASHBOARD PAGE TESTING

### File: `dashboard.html`

#### Test 3.1: Page Load & Overall Layout
- [ ] Page loads without errors
- [ ] Sidebar is visible on left with navigation items
- [ ] Main content area displays with full width
- [ ] Top navigation bar is visible
- [ ] Dashboard title shows "Dashboard"
- [ ] All sections load properly

#### Test 3.2: Sidebar Navigation
- [ ] Sidebar has logo "TourHub" with icon
- [ ] All menu items are visible:
  - [ ] Dashboard (active/highlighted)
  - [ ] Users
  - [ ] Vendors
  - [ ] Bookings
  - [ ] Reports
  - [ ] Settings
  - [ ] Logout
- [ ] Menu items have appropriate icons
- [ ] Active item has different styling
- [ ] Hover effects work on menu items

#### Test 3.3: Navigation Item Interaction
- [ ] Click on "Users" in sidebar
- [ ] Page title changes to "User Management"
- [ ] "Users" item becomes active/highlighted
- [ ] Dashboard content updates appropriately
- [ ] Click on other menu items to test
- [ ] Each updates the title correctly

#### Test 3.4: Top Navigation Bar
- [ ] Page title displays correctly
- [ ] Date filter dropdown is visible with options:
  - [ ] Daily
  - [ ] Weekly
  - [ ] Monthly (default selected)
  - [ ] Yearly
  - [ ] Custom Range
- [ ] Notification bell icon shows with badge (3)
- [ ] User profile image displays
- [ ] User name shows "Admin User"
- [ ] User role shows "Super Admin"

#### Test 3.5: Date Filter Functionality
- [ ] Change date filter from Monthly to Weekly
- [ ] Notification shows "Displaying weekly data"
- [ ] Charts update (visually or via notification)
- [ ] Change to Daily - notification confirms
- [ ] Change to Yearly - notification confirms
- [ ] Click Custom Range - notification about date picker
- [ ] Selection persists (localStorage test)

#### Test 3.6: KPI Cards Display
Check all six KPI cards are present:
- [ ] Total Users: 14,285 (↑12.5%)
- [ ] Active Vendors: 892 (↑8.3%)
- [ ] Total Bookings: 3,456 (↑23.7%)
- [ ] Revenue: $127,450 (↑18.2%)
- [ ] Active Subscriptions: 567 (no change)
- [ ] Ads Performance: $24,890 (↑31.4%)

#### Test 3.7: KPI Card Styling
- [ ] Each card has gradient icon background
- [ ] Icons are colored appropriately
- [ ] Values display in large font
- [ ] Trend indicators show correct direction
- [ ] Positive trends are green
- [ ] Neutral trends are gray
- [ ] Hover effect lifts the card slightly

#### Test 3.8: Charts Rendering
- [ ] Revenue Trend chart (line chart) displays
  - [ ] Shows 12 months of data (Jan-Dec)
  - [ ] Two datasets: Revenue and Commission
  - [ ] Different colors for each dataset
  - [ ] Legend displays correctly
  - [ ] Y-axis shows dollar amounts
  - [ ] Grid lines are visible
  - [ ] Points are visible on lines

- [ ] Service Distribution chart (doughnut chart) displays
  - [ ] Shows 5 categories (Hotels, Restaurants, Packages, Activities, Cabs)
  - [ ] Each segment has different color
  - [ ] Legend shows at bottom
  - [ ] Percentage breakdown appears reasonable
  - [ ] Colors from palette

#### Test 3.9: Third Section - Booking Status
- [ ] "Booking Status Overview" card displays
  - [ ] Shows three status bars: Completed, Pending, Cancelled
  - [ ] Progress bars fill appropriately
  - [ ] Numbers display for each (2247, 691, 518)
  - [ ] Colors are correct (green, orange, red)

#### Test 3.10: Subscription Plans Section
- [ ] "Subscription Plans" card displays
  - [ ] Lists three plans: Basic, Premium, Enterprise
  - [ ] Shows active user counts
  - [ ] Shows revenue for each plan
  - [ ] Items hover with background change

#### Test 3.11: Quick Insights Section
- [ ] "Quick Insights" heading visible
- [ ] Four insight cards display:
  - [ ] Peak Booking Period (trending up icon)
  - [ ] Top Destination (location icon)
  - [ ] User Retention (user check icon)
  - [ ] Pending Reviews (warning icon)
- [ ] Each card has description text
- [ ] Cards have gradient background
- [ ] Left border is teal color
- [ ] Hover effect works

#### Test 3.12: Responsive Design - Tablet
- [ ] Resize to 1024px width (tablet)
- [ ] KPI cards grid adjusts to 2 columns
- [ ] Charts may stack
- [ ] Sidebar still visible
- [ ] All content readable

#### Test 3.13: Responsive Design - Mobile (768px)
- [ ] Resize to 768px
- [ ] Sidebar becomes hidden
- [ ] Hamburger menu icon appears (three lines)
- [ ] Click hamburger to open sidebar
- [ ] Sidebar slides in from left
- [ ] Content area becomes full width
- [ ] Click menu item, sidebar slides out
- [ ] KPI cards become single column
- [ ] Charts stack vertically

#### Test 3.14: Responsive Design - Small Mobile (375px)
- [ ] Resize to 375px width
- [ ] All elements stack properly
- [ ] Text remains readable
- [ ] Input fields and buttons are full width
- [ ] Profile name hidden in topbar
- [ ] Only profile icon shows
- [ ] No horizontal overflow
- [ ] Touch targets are adequate

#### Test 3.15: Logout Functionality
- [ ] Click logout in sidebar
- [ ] Confirmation dialog appears: "Are you sure you want to logout?"
- [ ] Click OK to confirm
- [ ] Notification shows "Logging out..."
- [ ] After ~500ms, redirects to login page (index.html)
- [ ] Click sidebar menu works from dashboard

#### Test 3.16: Notification Button
- [ ] Click notification bell icon
- [ ] Notification appears: "You have 3 unread notifications"
- [ ] Red badge shows "3"
- [ ] Button doesn't navigate away

#### Test 3.17: Browser Compatibility
Test in multiple browsers:
- [ ] Chrome (Latest)
- [ ] Firefox (Latest)
- [ ] Safari (Latest)
- [ ] Edge (Latest)
- [ ] All features work consistently
- [ ] Styling appears correct
- [ ] Charts render properly
- [ ] Animations are smooth

#### Test 3.18: Performance
- [ ] Page loads quickly (<2 seconds)
- [ ] No console errors on load
- [ ] Chart rendering is smooth
- [ ] Animations are not stuttering
- [ ] Interactions are responsive with no lag
- [ ] Page doesn't use excessive memory

#### Test 3.19: Internationalization (Future Check)
- [ ] All text is properly spelled
- [ ] Currency symbols are correct ($)
- [ ] Number formatting is consistent
- [ ] Dates would use appropriate format

#### Test 3.20: Data Accuracy
- [ ] KPI values are reasonable
- [ ] Chart data is consistent with titles
- [ ] Percentages add up correctly
- [ ] Revenue calculations appear logical
- [ ] Numbers don't have typos

---

## 4. CROSS-BROWSER TESTING

### Desktop Browsers

#### Chrome
- [ ] Login page renders correctly
- [ ] Dashboard loads all components
- [ ] Charts display properly
- [ ] All interactions work
- [ ] Responsive design works at all breakpoints
- [ ] Console has no errors

#### Firefox
- [ ] Login page renders correctly
- [ ] Dashboard loads all components
- [ ] Charts display properly
- [ ] All interactions work
- [ ] Responsive design works at all breakpoints
- [ ] Icons render correctly

#### Safari
- [ ] Login page renders correctly
- [ ] Dashboard loads all components
- [ ] Charts display properly
- [ ] Animations are smooth
- [ ] No rendering issues
- [ ] Responsive design works

#### Edge
- [ ] Login page renders correctly
- [ ] Dashboard loads all components
- [ ] Charts display properly
- [ ] All features work as expected
- [ ] No compatibility issues

### Mobile Browsers

#### Chrome Mobile
- [ ] Login page is responsive
- [ ] Dashboard sidebar toggle works
- [ ] Charts display on mobile
- [ ] Touch interactions work
- [ ] Scrolling is smooth

#### Safari Mobile (iOS)
- [ ] Login page is responsive
- [ ] Dashboard sidebar toggle works
- [ ] Input fields work properly
- [ ] Touch keyboard appears correctly
- [ ] Bottom nav/address bar doesn't interfere

---

## 5. LOCAL STORAGE TESTING

#### Test 5.1: Remember Username
- [ ] On login page, check "Remember me"
- [ ] Enter email address
- [ ] Go to login page again (open index.html)
- [ ] Previously entered email should be remembered (design phase)

#### Test 5.2: Date Filter Persistence
- [ ] On dashboard, change date filter to "Weekly"
- [ ] Refresh page (F5)
- [ ] Date filter should still show "Weekly"
- [ ] Change to "Daily"
- [ ] Refresh page
- [ ] Should show "Daily"

#### Test 5.3: Clear Data
- [ ] Press F12 to open DevTools
- [ ] Go to Application → Local Storage
- [ ] Verify keys: `rememberUsername`, `selectedDateFilter`
- [ ] Clear local storage
- [ ] Reload page
- [ ] Stored data should be cleared

---

## 6. ANIMATION & TRANSITION TESTING

#### Test 6.1: Login Page Animations
- [ ] Brand section content slides in from left
- [ ] Background pattern floats smoothly
- [ ] No jank or stuttering

#### Test 6.2: Hover Effects
- [ ] Hover over login button - lifts up slightly
- [ ] Hover over KPI cards - lifts and shadows increase
- [ ] Hover over nav items - highlight appears
- [ ] Hover over buttons - color changes smoothly

#### Test 6.3: Navigation Transitions
- [ ] Click menu items - title updates smoothly
- [ ] No page flash or blink
- [ ] Transitions feel responsive

#### Test 6.4: Notifications
- [ ] Notification slides in from right
- [ ] Notification auto-disappears after 3 seconds
- [ ] Animation is smooth

---

## 7. ACCESSIBILITY TESTING

#### Test 7.1: Keyboard Navigation
- [ ] Press Tab repeatedly on login page
- [ ] Focus moves through: email, password, checkbox, button
- [ ] Visual focus indicator is visible
- [ ] Can submit form with Enter key

- [ ] Press Tab on dashboard
- [ ] Focus moves through sidebar items, filters, etc.
- [ ] All interactive elements reachable

#### Test 7.2: Color Contrast
- [ ] Text on background has sufficient contrast
- [ ] Use browser extension to check (e.g., WebAIM)
- [ ] Check text colors meet WCAG standards

#### Test 7.3: Screen Reader (Optional)
- [ ] Use screen reader (NVDA, JAWS, VoiceOver)
- [ ] Form labels are announced correctly
- [ ] Button purposes are clear
- [ ] Structure is logical

#### Test 7.4: Focus Indicators
- [ ] All buttons have visible focus indicators
- [ ] Input fields show focus state
- [ ] Focus indicators are not hidden

---

## 8. NETWORK & PERFORMANCE

#### Test 8.1: Offline Testing
- [ ] Open DevTools → Network tab
- [ ] Go to Network Conditions tab
- [ ] Select "Offline"
- [ ] Try to load page
- [ ] Error should show (expected since using CDN)
- [ ] Switch back to "Online"
- [ ] Page loads normally

#### Test 8.2: Slow Network
- [ ] DevTools → Network
- [ ] Set to "Slow 3G"
- [ ] Load page
- [ ] Note load time (should be acceptable)
- [ ] Charts should render once loaded
- [ ] All elements eventually appear

#### Test 8.3: Console Warnings
- [ ] Press F12 to open DevTools
- [ ] Go to Console tab
- [ ] Load page (login and dashboard)
- [ ] Should have no errors
- [ ] May have warnings from external libraries (OK)

---

## 9. USABILITY TESTING CHECKLIST

#### Test 9.1: First Time User
- [ ] Can user understand the purpose at first glance?
- [ ] Is the login process intuitive?
- [ ] Are dashboard sections self-explanatory?
- [ ] Do KPI cards make sense?
- [ ] Can user navigate without instructions?

#### Test 9.2: Mobile User Experience
- [ ] Is mobile layout intuitive?
- [ ] Can user easily access menu?
- [ ] Input fields are easy to fill on mobile?
- [ ] Text is readable on small screens?
- [ ] Touch targets are appropriate size?

#### Test 9.3: Information Hierarchy
- [ ] Most important information is prominent?
- [ ] Secondary information is not overwhelming?
- [ ] Color hierarchy is clear?
- [ ] Typography hierarchy is clear?

---

## 10. EDGE CASES & ERROR HANDLING

#### Test 10.1: Very Small Screen (320px)
- [ ] Extreme mobile device (old phones)
- [ ] Content doesn't overflow
- [ ] Text wraps appropriately
- [ ] Buttons are still clickable

#### Test 10.2: Very Large Screen (4K, 3840px)
- [ ] Content doesn't stretch too much
- [ ] Cards remain readable
- [ ] No excessive whitespace
- [ ] Layout feels balanced

#### Test 10.3: Missing Resources
- [ ] Temporarily disable CDN (Chart.js, Font Awesome)
- [ ] Check for graceful degradation
- [ ] Icons may not load, but layout shouldn't break
- [ ] Charts won't render (expected)

#### Test 10.4: Rapid Interactions
- [ ] Quickly click multiple buttons
- [ ] Quickly navigate between menu items
- [ ] No crashes or errors
- [ ] UI doesn't get stuck

---

## TESTING TEMPLATE

### Test Execution Log

```
Date: _______________
Tester: _______________
Browser: _______________
Device: _______________
OS: _______________

Test Case: _______________
Status: [ ] PASS  [ ] FAIL  [ ] N/A
Notes: _______________

Screenshots/Videos:
_______________

Issues Found:
_______________

Recommendations:
_______________
```

---

## KNOWN LIMITATIONS (Design Phase)

- [ ] No actual authentication (all logins accepted)
- [ ] No backend database
- [ ] Data is hardcoded
- [ ] Date filters don't actually filter data
- [ ] Charts are static/demo data
- [ ] No actual email/password validation
- [ ] No 2FA implementation
- [ ] Navigation doesn't load actual pages (placeholder)
- [ ] No real notifications

---

## SIGN-OFF CHECKLIST

- [ ] All visual elements render correctly
- [ ] All interactive elements work as designed
- [ ] Responsive design verified at all breakpoints
- [ ] Cross-browser testing completed
- [ ] Accessibility standards met
- [ ] Performance is acceptable
- [ ] No console errors
- [ ] Local storage functions properly
- [ ] Animations are smooth
- [ ] Documentation is accurate

**Testing Completed By**: _______________

**Date**: _______________

**Status**: [ ] APPROVED  [ ] NEEDS FIXES

**Notes**: _______________

---

**Document Version**: 1.0
**Last Updated**: March 2, 2026
