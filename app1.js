// --- DYNAMIC CONTENT VARIABLES ---
        const INSTITUTE_NAME = "Al-Zahraa Learning Institute";
        
        // --- PRAYER TIMES DATA ---
        const PRAYER_TIMES_DATA = {
            date: "Friday, October 3, 2025",
            prayers: [
                { name: "Fajr", time: "5:30 AM" },
                { name: "Sunrise", time: "6:45 AM" },
                { name: "Dhuhr", time: "1:15 PM" },
                { name: "Asr", time: "4:40 PM" },
                { name: "Maghrib", time: "6:55 PM" },
                { name: "Isha", time: "8:21 PM" }
            ],
            jumuah: "Jumu'ah Prayer: 1st Khutbah at 1:30 PM"
        };
        
        // --- SERVICES DATA ---
        const SERVICES_DATA = {
            title: "Our Services",
            subtitle: "Dedicated to serving the spiritual and educational needs of our community.",
            services: [
                {
                    title: "Online Training",
                    description: "Access a wealth of knowledge from home with our online Quran, Hadith, and Arabic language classes for all ages.",
                    linkText: "Learn More",
                    linkUrl: "#"
                },
                {
                    title: "Congregational Prayers",
                    description: "Join us for the five daily prayers, Jumu'ah (Friday) prayers, and special holiday prayers in a serene and welcoming environment.",
                    linkText: "View Schedule",
                    linkUrl: "#"
                },
                {
                    title: "Community Programs",
                    description: "We host a variety of events, including youth activities, family nights, and interfaith dialogues to strengthen community bonds.",
                    linkText: "See Events Calendar",
                    linkUrl: "#"
                }
            ]
        };
        
        // Function to update prayer times
        const updatePrayerTimes = () => {
            // Update the date
            const dateElement = document.querySelector('[data-prayer-date]');
            if (dateElement) {
                dateElement.textContent = PRAYER_TIMES_DATA.date;
            }
            
            // Update prayer times
            const prayerContainer = document.querySelector('[data-prayer-container]');
            if (prayerContainer) {
                prayerContainer.innerHTML = '';
                PRAYER_TIMES_DATA.prayers.forEach(prayer => {
                    const prayerCard = document.createElement('div');
                    prayerCard.className = 'bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700';
                    prayerCard.innerHTML = `
                        <h3 class="text-lg font-semibold text-teal-600 dark:text-teal-400">${prayer.name}</h3>
                        <p class="text-3xl font-bold text-slate-800 dark:text-white mt-2">${prayer.time}</p>
                    `;
                    prayerContainer.appendChild(prayerCard);
                });
            }
            
            // Update Jumuah prayer info
            const jumuahElement = document.querySelector('[data-jumuah-info]');
            if (jumuahElement) {
                jumuahElement.textContent = PRAYER_TIMES_DATA.jumuah;
            }
        };
        
        // Function to update services
        const updateServices = () => {
            // Update services title
            const titleElement = document.querySelector('[data-services-title]');
            if (titleElement) {
                titleElement.textContent = SERVICES_DATA.title;
            }
            
            // Update services subtitle
            const subtitleElement = document.querySelector('[data-services-subtitle]');
            if (subtitleElement) {
                subtitleElement.textContent = SERVICES_DATA.subtitle;
            }
            
            // Update services container
            const servicesContainer = document.querySelector('[data-services-container]');
            if (servicesContainer) {
                servicesContainer.innerHTML = '';
                SERVICES_DATA.services.forEach(service => {
                    const serviceCard = document.createElement('div');
                    serviceCard.className = 'bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300';
                    serviceCard.innerHTML = `
                        <div class="p-8">
                            <h3 class="text-2xl font-bold mb-3">${service.title}</h3>
                            <p class="text-slate-600 dark:text-slate-300 mb-6">${service.description}</p>
                            <a href="${service.linkUrl}" class="font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">${service.linkText} &rarr;</a>
                        </div>
                    `;
                    servicesContainer.appendChild(serviceCard);
                });
            }
        };
        
        // Function to update dynamic content
        const updateDynamicContent = () => {
            // Update page title
            document.title = INSTITUTE_NAME;
            
            // Update all elements with the institute name
            const instituteNameElements = document.querySelectorAll('[data-institute-name]');
            instituteNameElements.forEach(element => {
                element.textContent = INSTITUTE_NAME;
            });
            
            // Update prayer times
            updatePrayerTimes();
            
            // Update services
            updateServices();
        };

        // --- MOBILE MENU ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });


        // --- THEME SWITCHER (CORRECTED) ---
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
        const themeToggleBtn = document.getElementById('theme-toggle');
        const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');

        // Function to update the icons based on the current theme (true if dark, false if light)
        const updateThemeIcons = (isDarkMode) => {
            if (themeToggleDarkIcon && themeToggleLightIcon) {
                if (isDarkMode) {
                    themeToggleDarkIcon.classList.add('hidden');
                    themeToggleLightIcon.classList.remove('hidden');
                } else {
                    themeToggleDarkIcon.classList.remove('hidden');
                    themeToggleLightIcon.classList.add('hidden');
                }
            }
        };

        // Check the initial theme from the class on the <html> element and set the icon
        const initialThemeIsDark = document.documentElement.classList.contains('dark');
        updateThemeIcons(initialThemeIsDark);

        // The function that will be called when a toggle button is clicked
        const handleThemeToggle = () => {
            // Toggle the 'dark' class on the <html> element and check if it's now present
            const isDarkModeNow = document.documentElement.classList.toggle('dark');
            
            // Update localStorage with the new theme status
            localStorage.setItem('color-theme', isDarkModeNow ? 'dark' : 'light');
            
            // Update the icons to reflect the new theme
            updateThemeIcons(isDarkModeNow);
        };

        // Add the same click event listener to both the desktop and mobile buttons
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', handleThemeToggle);
        }
        if (mobileThemeToggleBtn) {
            mobileThemeToggleBtn.addEventListener('click', handleThemeToggle);
        }

        // Initialize dynamic content
        updateDynamicContent();