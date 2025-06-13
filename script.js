document.addEventListener('DOMContentLoaded', function () {
    const dictionary = {
        "អចិះ": { pos: "ន", definition: "ចេះដឹង", source: "k.", example: "គ្មាន" },
        "កោន៑អ្នង៑": { pos: "គ្មាន", definition: "កូន (ឈ្មោះ) អ្នង", source: "k. 748", example: "គ្មាន" },
        "កុអ្នង៑": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អ្នង", source: "k. 137", example: "គ្មាន" },
        "កុអ្នង៑វ្យា": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អ្នងវ្យា", source: "k. 137", example: "គ្មាន" },
        "អ្នន្តស្វាមិ": { pos: "សំ.ន.ន.", definition: "ស្វាមី", source: "k.", example: "គ្មាន" },
        "អ្នស៑": { pos: "ន.ន.", definition: "ណាស់", source: "k.", example: "គ្មាន" },
        "វាអ្នស៑": { pos: "ន.ន.បុំ.", definition: "បុរស (នាម) អ្នស", source: "k. 115", example: "គ្មាន" },
        "អ្នាច៑": { pos: "គ្មាន", definition: "អំណាច, សិទ្ធិពិសេស", source: "k.", example: "គ្មាន" },
        "អ្នាច៑២": { pos: "គ្មាន", definition: "ឈ្មោះសម្លៀកបំពាក់ (សម្មតិ)", source: "k.", example: "គ្មាន" }, // Added '2' to key for uniqueness as there are two 'អ្នាច៑' entries
        "អ្នាទ": { pos: "សំ.ន.ន.", definition: "តុណ្ហី, សោះអង្គើយ, ព្រងើយ", source: "k.", example: "គ្មាន" },
        "កុអ្នាទ": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អ្នាទ", source: "k. 561", example: "គ្មាន" },
        "វាអ្នាទ": { pos: "ន.ន.បុំ.", definition: "បុរស (នាម) អ្នាទ", source: "k. 133", example: "គ្មាន" },
        "អ្នេក៑": { pos: "សំ.ន.ន.", definition: "ជាអនេក", source: "k.", example: "គ្មាន" },
        "ទ្នុក៑វាអ្នេក៑": { pos: "គ្មាន", definition: "ឆ្មាំ (នាម) អ្នេក", source: "k. 155B", example: "គ្មាន" },
        "អ្នៅ": { pos: "គ្មាន", definition: "នៅ, មានវត្តមាន, មានមុខ", source: "k.", example: "គ្មាន" },
        "អ្មច៑": { pos: "គ្មាន", definition: "អ្នកមានអំណាច, ប្រធាន", source: "k.", example: "គ្មាន" },
        "អ្មល៑": { pos: "សំ.ន.ន.", definition: "គ្មានមន្ទិល, ស្អាតបរិសុទ្ធឥតហ្មង", source: "k.", example: "គ្មាន" },
        "កុអ្មល៑កោន៑កុ": { pos: "គ្មាន", definition: "នារីអ្មល និងកូនមួយ", source: "k. 357", example: "គ្មាន" },
        "អ្មុះ": { pos: "គ្មាន", definition: "អ្នកដាំ (ទឹក)", source: "k.", example: "គ្មាន" },
        "អ្មេ": { pos: "គ្មាន", definition: "អ្នកម្តាយ, ម៉ែ (ម.ព. អមេ ផង)", source: "k.", example: "គ្មាន" },
        "អ្មេកំយេក៑": { pos: "គ្មាន", definition: "ម្តាយក្មេក", source: "k. 582", example: "គ្មាន" },
        "អ្មេវឯត៑": { pos: "គ្មាន", definition: "ម្តាយរបស់បុរស ឯត", source: "k. 51", example: "គ្មាន" },
        "កុអ្មេ": { pos: "ន.ន.ឥ.", definition: "នារីវ័យចំណាស់ (នាម) អ្មេ", source: "k. 115", example: "គ្មាន" },
        "អ្មេកំវហ៑": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) កំវះ", source: "k.", example: "គ្មាន" },
        "អ្មេអ្តា": { pos: "ន.ន.", definition: "ម្តាយ ឪពុក, មាតា បិតា", source: "k.", example: "គ្មាន" },
        "អ្មេកន្សេនឯ": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) កន្សេន", source: "k. 357", example: "គ្មាន" },
        "កុអ្តារ៑": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) តារ", source: "k. 133", example: "គ្មាន" },
        "អ្មេឥប៑": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) ស្រអិប", source: "k. 560", example: "គ្មាន" },
        "អ្មេកំទោត៑": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) កំទោត", source: "k. 766", example: "គ្មាន" },
        "កុអ្មេវាជោង៑": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) វាជោង", source: "k. 357", example: "គ្មាន" },
        "កុអ្មេកន្ទៃ": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) កន្ទៃ", source: "k. 808", example: "គ្មាន" },
        "កុអ្មេកន្យូ": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) កន្យូ", source: "k. 357", example: "គ្មាន" },
        "កុអ្មេកំជក៑": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) កំជក", source: "k. 163", example: "គ្មាន" },
        "កុអ្មេចតុង៑": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) ចតុង", source: "k. 24", example: "គ្មាន" },
        "កុអ្មេតង៑រោស៑": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) តងរោស", source: "k. 590", example: "គ្មាន" },
        "កុអ្មេត្វេង៑": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) ត្វេង", source: "k. 8", example: "គ្មាន" },
        "អ្មេអ្តា2": { pos: "គ្មាន", definition: "មេបា", source: "k.", example: "គ្មាន" }, // Added '2' to key for uniqueness
        "កុអ្មេអ្តា": { pos: "ន.ន.ឥ.", definition: "នារីចំណាស់ (នាម) អ្មេអ្តា", source: "k. 51", example: "គ្មាន" },
        "អ្រស៑": { pos: "ន.ន.", definition: "រស់, រស់នៅ", source: "k.", example: "គ្មាន" },
        "អ្វល៑": { pos: "គ្មាន", definition: "គ្រប់ចំនួន, ពេញលេញ (ម.ព. អំវល ផង)", source: "k.", example: "គ្មាន" },
        "អ្សាប៑": { pos: "ន.ន.", definition: "ជូរចត់", source: "k.", example: "គ្មាន" },
        "កុអ្សាប៑": { pos: "ន.ន.ឥ.", definition: "នារី (នាម)អ្សាប", source: "k. 877", example: "គ្មាន" },
        "អកាយ្យិនិបុណ": { pos: "សំ.ន.ន.", definition: "អាចប្រព្រឹត្តអំពើអកុសល", source: "k.", example: "គ្មាន" },
        "វាអកាយ្យិនិបុណ": { pos: "ន.ន.បុំ.", definition: "បុរស (នាម) អកាយ្យិនិបុណ", source: "k. 451", example: "គ្មាន" },
        "អក្សេគុប្ប": { pos: "សំ.ន.ន.", definition: "ឆ្នាំឯកសារសំណេរ", source: "k.", example: "គ្មាន" },
        "អគស្តិ": { pos: "សំ.", definition: "ដើមអង្គាដី", source: "k.", example: "គ្មាន" },
        "ស្រេតេំអគស្តិ": { pos: "គ្មាន", definition: "ស្រែដើមអង្គាដី", source: "k. 38", example: "គ្មាន" },
        "អគារ": { pos: "សំ.", definition: "គ្រឹះស្ថាន, វិហារ", source: "k.", example: "គ្មាន" },
        "អគ្រាសន": { pos: "សំ.", definition: "ឋានន្តរនាមថ្នាក់ខ្ពស់, វីរជនដែលមានសិទ្ធិ និងកាន់កាបអាសនៈទី១", source: "k.", example: "គ្មាន" }
    };
    // DOM Elements
    const form = document.getElementById("searchForm");
    const input = document.getElementById("searchInput");
    const resultDiv = document.getElementById("result");
    const suggestionsContainer = document.getElementById('suggestions-container');
    const suggestionsList = document.getElementById('suggestions-list');
    const historySection = document.getElementById('history-section');
    const bookmarkSection = document.getElementById('bookmark-section');
    const summarySection = document.getElementById('summary-section');
    const teamSection = document.getElementById('team-section');
    const aboutUsSection = document.getElementById('about-us');
    const settingsSection = document.getElementById('settings-section');
    const homeSection = document.getElementById('home');
    const loadingScreen = document.getElementById('loadingScreen');
    const currentFontDisplay = document.getElementById('current-font-display');
    const themeToggle = document.getElementById('theme-toggle');
    const langKmBtn = document.getElementById('lang-km');
    const langEnBtn = document.getElementById('lang-en');
    const fontRotateBtnSettings = document.getElementById('font-rotate-btn-settings'); // New ID for settings font button

    // Initial load handling
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Helper function to sort Khmer words alphabetically
    function sortKhmerWords(words) {
        return words.sort((a, b) => a.localeCompare(b, 'km'));
    }

    // Helper function to display words in the suggestions container
    function displayWordsInSuggestions(words, titleKey) {
        suggestionsList.innerHTML = '';
        const titleElement = suggestionsContainer.querySelector('h4 span');
        titleElement.setAttribute('data-lang-key', titleKey); // Set data-lang-key for translation
        setLanguage(localStorage.getItem('language') || 'km'); // Re-translate title

        if (words.length === 0 && titleKey === 'suggestions_title') {
            suggestionsContainer.style.display = 'none';
            return;
        }

        words.forEach(word => {
            const listItem = document.createElement('li');
            listItem.textContent = word;
            listItem.addEventListener('click', () => {
                input.value = word;
                form.dispatchEvent(new Event('submit', { bubbles: true }));
            });
            suggestionsList.appendChild(listItem);
        });
        suggestionsContainer.style.display = 'block';
    }

    // Search Form Submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = input.value.trim();

        resultDiv.innerHTML = '';
        suggestionsContainer.style.display = 'none';

        hideAllSections();
        homeSection.style.display = 'block';

        if (!query) {
            displayWordsInSuggestions(sortKhmerWords(Object.keys(dictionary)), 'suggestions_title');
            return;
        }

        const exactMatchEntry = dictionary[query];
        const relatedWords = Object.keys(dictionary).filter(word => word.includes(query) && word !== query);
        let foundSomething = false;

        if (exactMatchEntry) {
            foundSomething = true;
            const resultCard = document.createElement('div');
            resultCard.className = 'result-card';

            let sourceHtml = exactMatchEntry.source ? `<div class="result-source">${translations[savedLang].source_label || 'ប្រភព'}: ${exactMatchEntry.source}</div>` : '';
            let exampleHtml = exactMatchEntry.example ? `<div class="result-example">${translations[savedLang].example_label || 'ឧទាហរណ៍'}: ${exactMatchEntry.example}</div>` : '';

            resultCard.innerHTML = `
                <div class="result-word">${query}</div>
                <div class="result-pos">${exactMatchEntry.pos}</div>
                <div class="result-definition">${exactMatchEntry.definition}</div>
                ${sourceHtml}
                ${exampleHtml}
            `;
            resultDiv.appendChild(resultCard);
            addToHistory(query);
        }

        if (relatedWords.length > 0) {
            foundSomething = true;
            displayWordsInSuggestions(relatedWords, 'related_words_title'); // New translation key
        }

        if (!foundSomething) {
            const noResultDiv = document.createElement('div');
            noResultDiv.className = 'no-result';
            noResultDiv.textContent = translations[savedLang].no_result_message.replace('{query}', query); // Localized message
            resultDiv.appendChild(noResultDiv);
        }
    });

    // PWA Prompt Logic
    const pwaPrompt = document.getElementById('pwaPrompt');
    const pwaPromptText = document.getElementById('pwaPromptText');
    const pwaPromptCloseBtn = document.getElementById('pwaPromptClose');

    function isiOS() {
        return /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());
    }

    function isAndroid() {
        return /android/i.test(navigator.userAgent.toLowerCase());
    }

    function isInStandaloneMode() {
        return ('standalone' in window.navigator) && window.navigator.standalone;
    }

    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (!isInStandaloneMode()) {
            pwaPromptText.textContent = translations[savedLang].pwa_prompt_android || 'បន្ថែមកម្មវិធីនេះទៅកាន់អេក្រង់ដើមរបស់អ្នកសម្រាប់បទពិសោធន៍កាន់តែប្រសើរ! (ចុច Menu បន្ទាប់មក "Add to Home Screen")';
            pwaPrompt.style.display = 'block';
        }
    });

    if (isiOS() && !isInStandaloneMode()) {
        setTimeout(() => {
            pwaPromptText.textContent = translations[savedLang].pwa_prompt_ios || 'ដើម្បីបន្ថែមកម្មវិធីនេះទៅអេក្រង់ដើមរបស់អ្នក សូមចុចប៊ូតុង "Share" រួចជ្រើសរើស "Add to Home Screen"។';
            pwaPrompt.style.display = 'block';
        }, 3000);
    } else if (isAndroid() && !isInStandaloneMode() && !deferredPrompt) {
        setTimeout(() => {
            pwaPromptText.textContent = translations[savedLang].pwa_prompt_android || 'បន្ថែមកម្មវិធីនេះទៅកាន់អេក្រង់ដើមរបស់អ្នកសម្រាប់បទពិសោធន៍កាន់តែប្រសើរ! (ចុច Menu បន្ទាប់មក "Add to Home Screen")';
            pwaPrompt.style.display = 'block';
        }, 3000);
    }

    pwaPromptCloseBtn.onclick = function () {
        pwaPrompt.style.display = 'none';
    };

    // Font Rotation Logic
    const fonts = ["Hanuman", "Kantumruy Pro", "Battambang", "Bayon", "Nokora", "Moul", "Chenla", "Content", "Khmer", "Koulen"];
    let currentIndex = 0;

    function updateFontDisplay() {
        currentFontDisplay.textContent = `(${fonts[currentIndex]})`;
    }

    function rotateFont(event) {
        if (event) event.preventDefault();
        currentIndex = (currentIndex + 1) % fonts.length;
        document.body.setAttribute("data-font", fonts[currentIndex]);
        localStorage.setItem('selectedFont', fonts[currentIndex]); // Save font preference
        updateFontDisplay();
    }

    // Set initial font from localStorage or default
    const savedFont = localStorage.getItem('selectedFont');
    if (savedFont) {
        currentIndex = fonts.indexOf(savedFont);
        if (currentIndex === -1) currentIndex = 0; // Fallback if saved font is not in list
    }
    document.body.setAttribute("data-font", fonts[currentIndex]);
    updateFontDisplay();

    // Event listeners for font button (only for settings now)
    fontRotateBtnSettings.addEventListener('click', rotateFont);


    // Theme Toggle Logic
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeToggle.checked = (savedTheme === 'light-mode');
    } else {
        // Default to dark mode if no preference saved
        document.body.classList.add('dark-mode'); // Assuming dark mode is default
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.checked = false;
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Language Toggle Logic
    let savedLang = localStorage.getItem('language') || 'km'; // Default to Khmer

    const translations = {
        km: {
            search_word: "ស្វែងរកពាក្យ",
            search_btn: "ស្វែងរក",
            suggestions_title: "ពាក្យណែនាំ",
            related_words_title: "ពាក្យដែលពាក់ព័ន្ធ", // Added
            history_title: "ប្រវត្តិស្វែងរក",
            bookmark_title: "ពាក្យចំណាំ",
            bookmark_description: "អ្នកអាចបន្ថែមពាក្យទៅក្នុងចំណាំរបស់អ្នកដោយចុចលើរូបតំណាងចំណាំ។",
            summary_title: "អក្សរសង្ខេប",
            team_title: "ក្រុមការងារ",
            about_us_title: "អំពីពួកយើង",
            about_us_content: "នេះគឺជាកម្មវិធីវចនានុក្រមខ្មែរដ៏សាមញ្ញមួយ ដែលបង្កើតឡើងដើម្បីជួយអ្នកប្រើប្រាស់ស្វែងរកនិយមន័យនៃពាក្យខ្មែរ។",
            settings_title: "កំណត់",
            theme_toggle_label: "ប្ដូររូបរាង (យប់/ថ្ងៃ)",
            language_label: "ប្ដូរភាសា",
            font_setting_label: "ប្ដូរពុម្ពអក្សរ",
            about_us_title_link: "អំពីពួកយើង",
            copyright_year: "2025",
            app_name_footer: "វចនានុក្រមសិលាចារឹកខ្មែរមុនអង្គរ", // Updated name for footer
            all_rights_reserved: "រក្សាសិទ្ធិគ្រប់យ៉ាងដោយក្រុមអ្នកនិពន្ធកម្ពុជា។", // Updated for footer
            home_menu: "ទំព័រដើម",
            history_menu: "ប្រវត្តិ",
            bookmark_menu: "ចំណាំ",
            settings_menu: "កំណត់",
            font_menu: "ពុម្ពអក្សរ", // Added - kept for potential future use or if needed in other context
            no_history_message: "មិនទាន់មានប្រវត្តិស្វែងរកនៅឡើយ។", // Added
            no_bookmark_message: "មិនទាន់មានពាក្យចំណាំនៅឡើយទេ។", // Added
            no_result_message: "គ្មានលទ្ធផលសម្រាប់ពាក្យ \"{query}\"", // Added
            source_label: "ប្រភព", // Added
            example_label: "ឧទាហរណ៍", // Added
            pwa_prompt_ios: "ដើម្បីបន្ថែមកម្មវិធីនេះទៅអេក្រង់ដើមរបស់អ្នក សូមចុចប៊ូតុង \"Share\" រួចជ្រើសរើស \"Add to Home Screen\"។", // Added
            pwa_prompt_android: "បន្ថែមកម្មវិធីនេះទៅកាន់អេក្រង់ដើមរបស់អ្នកសម្រាប់បទពិសោធន៍កាន់តែប្រសើរ! (ចុច Menu បន្ទាប់មក \"Add to Home Screen\")" // Added
        },
        en: {
            search_word: "Search Word",
            search_btn: "Search",
            suggestions_title: "Suggestions",
            related_words_title: "Related Words", // Added
            history_title: "Search History",
            bookmark_title: "Bookmarks",
            bookmark_description: "You can add words to your bookmarks by clicking the bookmark icon.",
            summary_title: "Abbreviations",
            team_title: "Our Team",
            about_us_title: "About Us",
            about_us_content: "This is a simple Khmer dictionary application created to help users find definitions of Khmer words.",
            settings_title: "Settings",
            theme_toggle_label: "Toggle Theme (Night/Day)",
            language_label: "Change Language",
            font_setting_label: "Change Font",
            about_us_title_link: "About Us",
            copyright_year: "2025",
            app_name_footer: "Pre-Angkorian Khmer Inscription Dictionary", // Updated name for footer
            all_rights_reserved: "All rights reserved by the Cambodian Authors Team.", // Updated for footer
            home_menu: "Home",
            history_menu: "History",
            bookmark_menu: "Bookmark",
            settings_menu: "Settings",
            font_menu: "Font", // Added - kept for potential future use or if needed in other context
            no_history_message: "No search history yet.", // Added
            no_bookmark_message: "No bookmarks yet.", // Added
            no_result_message: "No results for \"{query}\"", // Added
            source_label: "Source", // Added
            example_label: "Example", // Added
            pwa_prompt_ios: "To add this app to your Home Screen, tap the \"Share\" button and then \"Add to Home Screen\".", // Added
            pwa_prompt_android: "Add this app to your Home screen for a better experience! (Tap Menu then \"Add to Home Screen\")" // Added
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('language', lang);
        savedLang = lang; // Update savedLang variable
        // Update active class for language buttons
        langKmBtn.classList.remove('active');
        langEnBtn.classList.remove('active');
        if (lang === 'km') {
            langKmBtn.classList.add('active');
        } else {
            langEnBtn.classList.add('active');
        }
        // Update placeholder for search input
        if (lang === 'km') {
            input.placeholder = "ស្វែងរកពាក្យ...";
        } else {
            input.placeholder = "Search word...";
        }
        // Re-render history and bookmarks to apply new language messages
        if (historySection.style.display === 'block') renderHistory();
        if (bookmarkSection.style.display === 'block') renderBookmark();
    }

    // Set initial language
    setLanguage(savedLang);

    langKmBtn.addEventListener('click', () => setLanguage('km'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    // Navigation functions
    function hideAllSections() {
        document.querySelectorAll('section').forEach(sec => {
            sec.style.display = 'none';
        });
        resultDiv.innerHTML = '';
        suggestionsContainer.style.display = 'none';
        input.value = '';
    }

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    document.getElementById('home-btn-footer').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        homeSection.style.display = 'block';
        displayWordsInSuggestions(sortKhmerWords(Object.keys(dictionary)), 'suggestions_title');
        scrollToTop();
    });

    document.getElementById('history-btn-footer').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        renderHistory();
        historySection.style.display = 'block';
        scrollToTop();
    });

    document.getElementById('bookmark-btn-footer').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        renderBookmark();
        bookmarkSection.style.display = 'block';
        scrollToTop();
    });

    document.getElementById('settings-btn-footer').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        settingsSection.style.display = 'block';
        updateFontDisplay();
        scrollToTop();
    });

    // Links from Settings section
    document.getElementById('about-btn-link').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        aboutUsSection.style.display = 'block';
        scrollToTop();
    });

    document.getElementById('summary-btn-link').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        summarySection.style.display = 'block';
        scrollToTop();
    });

    document.getElementById('team-btn-link').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        teamSection.style.display = 'block';
        scrollToTop();
    });


    // Bookmark and History Logic
    let historyWords = JSON.parse(localStorage.getItem('historyWords') || '[]');
    let bookmarkWords = JSON.parse(localStorage.getItem('bookmarkWords') || '[]');

    function addToHistory(word) {
        if (!historyWords.includes(word)) {
            historyWords.unshift(word);
            if (historyWords.length > 20) historyWords.pop();
            localStorage.setItem('historyWords', JSON.stringify(historyWords));
        }
    }

    function renderHistory() {
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = '';
        if (historyWords.length === 0) {
            historyList.innerHTML = `<p style="text-align: center; color: rgba(255,255,255,0.7);">${translations[savedLang].no_history_message}</p>`;
            return;
        }
        historyWords.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            li.style.cursor = 'pointer';
            li.style.padding = '5px 0';
            li.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
            li.addEventListener('click', () => {
                input.value = word;
                form.dispatchEvent(new Event('submit'));
                hideAllSections();
                homeSection.style.display = 'block';
                scrollToTop();
            });
            historyList.appendChild(li);
        });
    }

    window.toggleBookmark = function (word) {
        const bookmarkIcon = document.getElementById(`bookmark-icon-${word}`);
        if (bookmarkWords.includes(word)) {
            bookmarkWords = bookmarkWords.filter(w => w !== word);
            if (bookmarkIcon) bookmarkIcon.classList.remove('fas');
            if (bookmarkIcon) bookmarkIcon.classList.add('far');
        } else {
            bookmarkWords.push(word);
            if (bookmarkIcon) bookmarkIcon.classList.remove('far');
            if (bookmarkIcon) bookmarkIcon.classList.add('fas');
        }
        localStorage.setItem('bookmarkWords', JSON.stringify(bookmarkWords));
        renderBookmark();
    };

    function renderBookmark() {
        const bookmarkList = document.getElementById('bookmark-list');
        bookmarkList.innerHTML = '';
        if (bookmarkWords.length === 0) {
            bookmarkList.innerHTML = `<p style="text-align: center; color: rgba(255,255,255,0.7);">${translations[savedLang].no_bookmark_message}</p>`;
            return;
        }
        bookmarkWords.forEach(word => {
            const li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.style.padding = '5px 0';
            li.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.alignItems = 'center';

            const wordSpan = document.createElement('span');
            wordSpan.textContent = word;
            wordSpan.addEventListener('click', () => {
                input.value = word;
                form.dispatchEvent(new Event('submit'));
                hideAllSections();
                homeSection.style.display = 'block';
                scrollToTop();
            });

            const bookmarkIcon = document.createElement('i');
            bookmarkIcon.id = `bookmark-icon-${word}`;
            bookmarkIcon.classList.add(bookmarkWords.includes(word) ? 'fas' : 'far', 'fa-bookmark');
            bookmarkIcon.style.color = 'gold';
            bookmarkIcon.style.cursor = 'pointer';
            bookmarkIcon.addEventListener('click', (event) => {
                event.stopPropagation();
                toggleBookmark(word);
            });

            li.appendChild(wordSpan);
            li.appendChild(bookmarkIcon);
            bookmarkList.appendChild(li);
        });
    }

    // Intercept result display to add bookmark icon
    const originalAppendChild = resultDiv.appendChild;
    resultDiv.appendChild = function (node) {
        if (node.classList && node.classList.contains('result-card')) {
            const word = node.querySelector('.result-word').firstChild.textContent; // Get text before potential child nodes
            const bookmarkIcon = document.createElement('i');
            bookmarkIcon.id = `bookmark-icon-${word}`;
            bookmarkIcon.classList.add(bookmarkWords.includes(word) ? 'fas' : 'far', 'fa-bookmark');
            bookmarkIcon.style.color = 'gold';
            bookmarkIcon.style.cursor = 'pointer';
            bookmarkIcon.style.marginLeft = '10px';
            bookmarkIcon.addEventListener('click', () => toggleBookmark(word));

            const wordElement = node.querySelector('.result-word');
            if (wordElement) {
                // Prepend the icon to the word element, so it appears before the text
                wordElement.appendChild(bookmarkIcon);
            }
        }
        return originalAppendChild.apply(this, arguments);
    };

    // Initial display: show the home section and all words
    homeSection.style.display = 'block';
    displayWordsInSuggestions(sortKhmerWords(Object.keys(dictionary)), 'suggestions_title');
});
