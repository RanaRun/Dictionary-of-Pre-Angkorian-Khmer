document.addEventListener('DOMContentLoaded', function () {
    // Dictionary data (truncated for brevity, ensure full data is available in actual file)
    const dictionary = {
        "កុអគ្លៅ": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អគ្លៅ", source: "K.155", example: "", romanized: "kuaglau", latin: "​" },
        "អង្គណ": { pos: "សំ.", definition: "ទីធ្លា (ព្រះវិហារ)", source: "", example: "", romanized: "angana", latin: "Area Sacra" },
        "អង្គល៑": { pos: "", definition: "នង្គ័ល", source: "", example: "", romanized: "angala", latin: "Aratrum" },
        "វ្រៃអង្គល៑": { pos: "ន.ន.បុំ.", definition: "ព្រៃអង្គល (នង្គ័ល)", source: "K.904", example: "", romanized: "vraiangala", latin: "Silva Aratri" },
        "អង្គារទិនវារ": { pos: "សំ.", definition: "ថ្ងៃអង្គារ", source: "", example: "", romanized: "angaradinavara", latin: "Dies Martis" },
        "អចត៑": { pos: "ន.ន.", definition: "ចត់, ល្វីង", source: "K.155", example: "", romanized: "acata", latin: "Amarus" },
        "កុអច៑": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អច", source: "K.155", example: "", romanized: "kuac", latin: "Femina" },
        "អចិះ": { pos: "ន", definition: "ចេះដឹង", source: "k.", example: "គ្មាន", romanized: "aces", latin: "Scire" },
        "កោន៑អ្នង៑": { pos: "គ្មាន", definition: "កូន (ឈ្មោះ) អ្នង", source: "k. 748", example: "គ្មាន", romanized: "konang", latin: "Filius Ang" },
        "កុអ្នង៑": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អ្នង", source: "k. 137", example: "គ្មាន", romanized: "kunang", latin: "Femina Ang" },
        "កុអ្នង៑វ្យា": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អ្នងវ្យា", source: "k. 137", example: "គ្មាន", romanized: "kunangvea", latin: "Femina Angvea" },
        "អ្នន្តស្វាមិ": { pos: "សំ.ន.ន.", definition: "ស្វាមី", source: "k.", example: "គ្មាន", romanized: "anantasvami", latin: "Maritus Eternus" },
        "អ្នស៑": { pos: "ន.ន.", definition: "ណាស់", source: "k.", example: "គ្មាន", romanized: "anas", latin: "Valde" },
        "វាអ្នស៑": { pos: "ន.ន.បុំ.", definition: "បុរស (នាម) អ្នស", source: "k. 115", example: "គ្មាន", romanized: "veaanas", latin: "Vir Anas" },
        "អ្នាច៑": { pos: "គ្មាន", definition: "អំណាច, សិទ្ធិពិសេស", source: "k.", example: "គ្មាន", romanized: "aneach", latin: "Potestas" },
        "អ្នាច៑ប្រចាំ": { pos: "ន", definition: "អំណាចប្រចាំ", source: "k.", example: "គ្មាន", romanized: "aneachprasam", latin: "Potestas Perpetua" },
        "អ្នាច៑វ្រះ": { pos: "ន", definition: "អំណាចព្រះ", source: "k.", example: "គ្មាន", romanized: "aneachpreah", latin: "Potestas Divina" },
        "អ្នាច៑ស្ទឹង": { pos: "ន", definition: "អំណាចស្ទឹង", source: "k.", example: "គ្មាន", romanized: "aneachsteung", latin: "Potestas Fluvii" },
        "អ្នាច៑ភូមិ": { pos: "ន", definition: "អំណាចភូមិ", source: "k.", example: "គ្មាន", romanized: "aneachphum", latin: "Potestas Territorii" },
        "អ្នាច៑ក្រុង": { pos: "ន", definition: "អំណាចក្រុង", source: "k.", example: "គ្មាន", romanized: "aneachkrong", latin: "Potestas Urbis" },
        "អ្នាច៑សមុទ្រ": { pos: "ន", definition: "អំណាចសមុទ្រ", source: "k.", example: "គ្មាន", romanized: "aneachsamoat", latin: "Potestas Maris" },
        "អ្នាច៑មហា": { pos: "ន", definition: "អំណាចមហា", source: "k.", example: "គ្មាន", romanized: "aneachmaha", latin: "Potestas Magna" },
        "អ្នាច៑ធំ": { pos: "ន", definition: "អំណាចធំ", source: "k.", example: "គ្មាន", romanized: "aneachthom", latin: "Potestas Grandis" },
        "អ្នាច៑តូច": { pos: "ន", definition: "អំណាចតូច", source: "k.", example: "គ្មាន", romanized: "aneachtouch", latin: "Potestas Parva" },
        "អ្នាច៑ខ្ពស់": { pos: "ន", definition: "អំណាចខ្ពស់", source: "k.", example: "គ្មាន", romanized: "aneachkhpos", latin: "Potestas Excelsa" },
        "អ្នាច៑ទាប": { pos: "ន", definition: "អំណាចទាប", source: "k.", example: "គ្មាន", romanized: "aneachtieap", latin: "Potestas Humilis" },
        "អ្នាច៑សិលា": { pos: "ន", definition: "អំណាចសិលា", source: "k.", example: "គ្មាន", romanized: "aneachsla", latin: "Potestas Lapis" },
        "អាគមន៑": { pos: "ន.ន.បុំ.", definition: "ការមកដល់", source: "K.900", example: "គ្មាន", romanized: "akmon", latin: "Adventus" },
        "កុ": { pos: "ន.ន", definition: "អ្នកបម្រើស្រី", source: "K.900", example: "គ្មាន", romanized: "Ku", latin: "Ancilla" }
    };

    // UI Elements
    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('search-form');
    
    // Main Sections
    const homeView = document.getElementById('home-view');
    const searchResultsSection = document.getElementById('search-results-section');
    const historyView = document.getElementById('history-view');
    const bookmarkView = document.getElementById('bookmark-view');
    const settingsView = document.getElementById('settings-view');
    const aboutView = document.getElementById('about-view');
    const summaryView = document.getElementById('summary-view');
    const teamView = document.getElementById('team-view');

    // Search Result Elements
    const resultWordSpan = document.getElementById('result-word');
    const resultBookmarkIcon = document.getElementById('result-bookmark-icon');
    const reportWordLink = document.getElementById('report-word-link'); // Report link
    const resultPos = document.getElementById('result-pos');
    const resultDefinition = document.getElementById('result-definition');
    const resultSource = document.getElementById('result-source');
    const resultExample = document.getElementById('result-example');
    const resultRomanized = document.getElementById('result-romanized');
    const resultLatin = document.getElementById('result-latin');

    // Word of the Day Elements (Now multiple)
    const wotdCards = [
        {
            word: document.getElementById('wotd-word-1'),
            pos: document.getElementById('wotd-pos-1'),
            definition: document.getElementById('wotd-definition-1'),
            source: document.getElementById('wotd-source-1'),
            example: document.getElementById('wotd-example-1'),
            romanized: document.getElementById('wotd-romanized-1'),
            latin: document.getElementById('wotd-latin-1'),
            bookmarkIcon: document.getElementById('wotd-bookmark-icon-1')
        },
        {
            word: document.getElementById('wotd-word-2'),
            pos: document.getElementById('wotd-pos-2'),
            definition: document.getElementById('wotd-definition-2'),
            source: document.getElementById('wotd-source-2'),
            example: document.getElementById('wotd-example-2'),
            romanized: document.getElementById('wotd-romanized-2'),
            latin: document.getElementById('wotd-latin-2'),
            bookmarkIcon: document.getElementById('wotd-bookmark-icon-2')
        },
        {
            word: document.getElementById('wotd-word-3'),
            pos: document.getElementById('wotd-pos-3'),
            definition: document.getElementById('wotd-definition-3'),
            source: document.getElementById('wotd-source-3'),
            example: document.getElementById('wotd-example-3'),
            romanized: document.getElementById('wotd-romanized-3'),
            latin: document.getElementById('wotd-latin-3'),
            bookmarkIcon: document.getElementById('wotd-bookmark-icon-3')
        }
    ];

    const suggestionsContainer = document.getElementById('suggestions-container');
    const suggestionsListFlat = document.getElementById('suggestions-list-flat');
    const noSuggestionsMessage = document.getElementById('no-suggestions-message');
    const suggestionsTitle = document.getElementById('suggestions-title');
    
    const historyList = document.getElementById('history-list');
    const noHistoryMessage = document.getElementById('no-history-message');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    const bookmarkList = document.getElementById('bookmark-list');
    const noBookmarkMessage = document.getElementById('no-bookmark-message');
    const clearBookmarksBtn = document.getElementById('clear-bookmarks-btn');

    // Navigation Buttons (footer menu)
    const homeNavBtn = document.getElementById('home-nav-btn');
    const historyNavBtn = document.getElementById('history-nav-btn');
    const bookmarkNavBtn = document.getElementById('bookmark-nav-btn');
    const settingsNavBtn = document.getElementById('settings-nav-btn');

    // Settings elements
    const langKmBtn = document.getElementById('lang-km-btn');
    const langEnBtn = document.getElementById('lang-en-btn');
    const currentFontDisplay = document.getElementById('current-font-display');
    const fontRotateBtn = document.getElementById('font-rotate-btn');

    const aboutBtnLink = document.getElementById('about-btn-link');
    const summaryBtnLink = document.getElementById('summary-btn-link');
    const teamBtnLink = document.getElementById('team-btn-link');

    // Loading screen and PWA elements
    const loadingScreen = document.getElementById('loading-screen');
    const pwaInstallPrompt = document.getElementById('pwa-install-prompt');
    const installAppBtn = document.getElementById('install-app-btn');
    const pwaPromptCloseBtn = document.getElementById('pwa-prompt-close-btn');
    let deferredPrompt; // To store the PWA install event

    const currentDateDisplay = document.getElementById('current-date');

    // State variables
    let currentLang = localStorage.getItem('language') || 'km';
    let historyWords = JSON.parse(localStorage.getItem('historyWords')) || [];
    let bookmarkWords = JSON.parse(localStorage.getItem('bookmarkWords')) || [];
    const fonts = ["Noto Sans Khmer", "Hanuman", "Kantumruy Pro", "Battambang", "Bayon", "Nokora", "Moul", "Chenla", "Content", "Khmer", "Koulen"];
    let currentFontIndex = 0;

    // Translations object
    const translations = {
        km: {
            app_name: "វចនានុក្រមខ្មែរបុរាណ",
            search_placeholder: "ស្វែងរក...",
            word_of_the_day_title: "ពាក្យប្រចាំថ្ងៃ​",
            suggestions_title: "ពាក្យណែនាំ",
            search_results_title: "លទ្ធផលស្វែងរក",
            history_title: "ប្រវត្តិស្វែងរក",
            clear_history_button: "សម្អាតប្រវត្តិ",
            clear_history_label: "សម្អាតប្រវត្តិ",
            bookmark_title: "ពាក្យចំណាំ",
            clear_bookmarks_button: "សម្អាតចំណាំ",
            clear_bookmarks_label: "សម្អាតចំណាំ",
            settings_title: "កំណត់",
            language_setting: "ភាសា",
            font_setting: "ពុម្ពអក្សរ",
            change_font_button: "ប្តូរពុម្ព",
            about_title: "អំពីយើង",
            about_content: "កម្មវិធីវចនានុក្រមនេះត្រូវបានបង្កើតឡើងសម្រាប់គោលបំណងស្រាវជ្រាវ និងសិក្សាអំពីពាក្យពេចន៍ខ្មែរបុរាណ។ វាត្រូវបានបង្កើតឡើងដោយក្រុមអ្នកនិពន្ធកម្ពុជា។",
            summary_title: "សេចក្តីសង្ខេប",
            summary_intro: "វចនានុក្រមនេះផ្តោតជាសំខាន់លើពាក្យពេចន៍ពីសិលាចារឹកខ្មែរមុនសម័យអង្គរ ដែលជាផ្នែកមួយដ៏សំខាន់នៃប្រវត្តិសាស្រ្ត និងវប្បធម៌ខ្មែរ។",
            summary_point_1: "ប្រមូលផ្តុំពាក្យពីសិលាចារឹកខ្មែរមុនអង្គរ។",
            summary_point_2: "រួមបញ្ចូលទាំងថ្នាក់ពាក្យ និយមន័យ ប្រភព និងឧទាហរណ៍។",
            summary_point_3: "ជួយដល់ការស្រាវជ្រាវ និងការសិក្សាភាសាខ្មែរបុរាណ។",
            team_title: "ក្រុមការងារ",
            team_member_1: "ព្រះអមរិន្ទ រុន រ៉ាណា - អ្នកអភិវឌ្ឍន៍កម្មវិធី",
            team_member_2: "ព្រះអមរិន្ទ រុន រ៉ាណា - អ្នកស្រាវជ្រាវភាសា",
            team_member_3: "ព្រះអមរិន្ទ រុន រ៉ាណា - អ្នករចនាក្រាហ្វិក",
			team_member_4: "ព្រះតេជគុណ ចាន់ណារិទ្ធ សំរិត - អ្នកបញ្ចូលទិន្នន័យ",
			team_member_5: "លោក មាន បញ្ញា- អ្នកបញ្ចូលទិន្នន័យ",
			team_member_6: "កញ្ញា ពៅ សុជាតា- អ្នកបញ្ចូលទិន្នន័យ",
			  
            team_contact: "សម្រាប់ការសាកសួរ ឬសំណូមពរផ្សេងៗ សូមទាក់ទងមកកាន់ពួកយើងតាមរយៈ: Runrana2002@gamil.com",
            loading_message: "កំពុងផ្ទុកទិន្នន័យ...",
            install_button: "ដំឡើង",
            close_button: "បិទ",
            home_menu: "ទំព័រដើម",
            history_menu: "ប្រវត្តិ",
            bookmark_menu: "ចំណាំ",
            settings_menu: "កំណត់",
            copyright_year: "2025",
            app_name_footer: "វចនានុក្រមខ្មែរ",
            all_rights_reserved: "រក្សាសិទ្ធិគ្រប់យ៉ាងដោយក្រុមអ្នកនិពន្ធកម្ពុជា។",
            pwa_install_message: "តើអ្នកចង់ដំឡើងកម្មវិធីនេះទៅលើឧបករណ៍របស់អ្នកទេ?",
            no_results_found: "រកមិនឃើញលទ្ធផលទេ។",
            no_suggestions: "គ្មានពាក្យណែនាំទេ។ សូមសាកល្បងស្វែងរកពាក្យផ្សេង។",
            no_history: "មិនទាន់មានប្រវត្តិស្វែងរកទេ។",
            no_bookmarks: "មិនទាន់មានពាក្យចំណាំទេ។",
            lang_khmer: "ខ្មែរ",
            lang_english: "English"
        },
        en: {
            app_name: "Dictionary of Pre-Angkor Khmer",
            search_placeholder: "Search...",
            word_of_the_day_title: "Words of the Day",
            suggestions_title: "Suggestions",
            search_results_title: "Search Results",
            history_title: "Search History",
            clear_history_button: "Clear History",
            clear_history_label: "Clear History",
            bookmark_title: "Bookmarked Words",
            clear_bookmarks_button: "Clear Bookmarks",
            clear_bookmarks_label: "Clear Bookmarks",
            settings_title: "Settings",
            language_setting: "Language",
            font_setting: "Font",
            change_font_button: "Change Font",
            about_title: "About Us",
            about_content: "This dictionary application is created for research and study purposes of ancient Khmer words. It is developed by the Cambodian Authors Team.",
            summary_title: "Summary",
            summary_intro: "This dictionary primarily focuses on vocabulary from pre-Angkorian Khmer inscriptions, a crucial part of Khmer history and culture.",
            summary_point_1: "Collects words from pre-Angkorian Khmer inscriptions.",
            summary_point_2: "Includes part of speech, definition, source, and examples.",
            summary_point_3: "Aids in research and study of ancient Khmer language.",
            team_title: "Our Team",
            team_member_1: "ព្រះអមរិន្ទ រុន រ៉ាណា - អ្នកអភិវឌ្ឍន៍កម្មវិធី",
            team_member_2: "ព្រះអមរិន្ទ រុន រ៉ាណា - អ្នកស្រាវជ្រាវភាសា",
            team_member_3: "ព្រះអមរិន្ទ រុន រ៉ាណា - អ្នករចនាក្រាហ្វិក",
			team_member_4: "ព្រះតេជគុណ ចាន់ណារិទ្ធ សំរិត - អ្នកបញ្ចូលទិន្នន័យ",
			team_member_5: "លោក មាន បញ្ញា- អ្នកបញ្ចូលទិន្នន័យ",
			team_member_6: "កញ្ញា ពៅ សុជាតា- អ្នកបញ្ចូលទិន្នន័យ",
            team_contact: "For inquiries or suggestions, please contact us at: Runrana2002@gamil.com",
            loading_message: "Loading data...",
            install_button: "Install",
            close_button: "Close",
            home_menu: "Home",
            history_menu: "History",
            bookmark_menu: "Bookmark",
            settings_menu: "Settings",
            copyright_year: "2025",
            app_name_footer: "Dictionary of Pre-Angkor Khmer",
            all_rights_reserved: "All rights reserved by Writers of Cambodia Group.",
            pwa_install_message: "Do you want to install this app on your device?",
            no_results_found: "No results found.",
            no_suggestions: "No suggestions available. Try searching for a word.",
            no_history: "No search history yet.",
            no_bookmarks: "No bookmarked words yet.",
            lang_khmer: "Khmer",
            lang_english: "English"
        }
    };

    // --- Helper Functions ---

    function applyTranslations() {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[currentLang] && translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });
        if (searchInput) {
            searchInput.placeholder = translations[currentLang].search_placeholder;
        }
        if (pwaInstallPrompt && translations[currentLang].pwa_install_message) {
            document.getElementById('pwa-prompt-text').textContent = translations[currentLang].pwa_install_message;
        }
        if (suggestionsTitle) {
            suggestionsTitle.textContent = translations[currentLang].suggestions_title;
        }
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', currentLang);
        applyTranslations();
        updateLanguageButtons();
        displayWordOfTheDay();
        updateDateDisplay();
    }

    function updateLanguageButtons() {
        if (langKmBtn) langKmBtn.classList.remove('active');
        if (langEnBtn) langEnBtn.classList.remove('active');
        if (currentLang === 'km' && langKmBtn) {
            langKmBtn.classList.add('active');
        } else if (currentLang === 'en' && langEnBtn) {
            langEnBtn.classList.add('active');
        }
    }

    function updateFontDisplay() {
        if (currentFontDisplay) {
            currentFontDisplay.textContent = fonts[currentFontIndex];
        }
    }

    function updateFont() {
        currentFontIndex = (currentFontIndex + 1) % fonts.length;
        document.body.setAttribute("data-font", fonts[currentFontIndex]);
        localStorage.setItem('currentFont', fonts[currentFontIndex]);
        updateFontDisplay();
    }

    function sortKhmerWords(words) {
        return words.sort((a, b) => a.localeCompare(b, 'km'));
    }

    function updateActiveNavButton(activeButton) {
        const navButtons = [homeNavBtn, historyNavBtn, bookmarkNavBtn, settingsNavBtn];
        navButtons.forEach(button => {
            if (button) {
                button.classList.remove('active');
            }
        });
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    function addToHistory(word) {
        historyWords = historyWords.filter(item => item !== word);
        historyWords.unshift(word);
        if (historyWords.length > 20) {
            historyWords = historyWords.slice(0, 20);
        }
        localStorage.setItem('historyWords', JSON.stringify(historyWords));
    }

    function displayHistory() {
        if (!historyList) return;
        historyList.innerHTML = '';
        if (historyWords.length === 0) {
            if (noHistoryMessage) noHistoryMessage.classList.remove('hidden');
            return;
        } else {
            if (noHistoryMessage) noHistoryMessage.classList.add('hidden');
        }
        historyWords.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            li.addEventListener('click', () => {
                searchInput.value = word;
                searchWord(word);
            });
            historyList.appendChild(li);
        });
    }

    function toggleBookmark(word, iconElement) {
        const index = bookmarkWords.indexOf(word);
        if (index === -1) {
            bookmarkWords.push(word);
            if (iconElement) iconElement.classList.replace('far', 'fas');
        } else {
            bookmarkWords.splice(index, 1);
            if (iconElement) iconElement.classList.replace('fas', 'far');
        }
        localStorage.setItem('bookmarkWords', JSON.stringify(bookmarkWords));
        displayBookmarks();
        displayWordOfTheDay();
        if (resultWordSpan && resultWordSpan.textContent === word) {
             if (bookmarkWords.includes(word)) {
                resultBookmarkIcon.classList.replace('far', 'fas');
            } else {
                resultBookmarkIcon.classList.replace('fas', 'far');
            }
        }
    }

    function displayBookmarks() {
        if (!bookmarkList) return;
        bookmarkList.innerHTML = '';
        if (bookmarkWords.length === 0) {
            if (noBookmarkMessage) noBookmarkMessage.classList.remove('hidden');
            return;
        } else {
            if (noBookmarkMessage) noBookmarkMessage.classList.add('hidden');
        }
        bookmarkWords.forEach(word => {
            const li = document.createElement('li');
            li.classList.add('list-item');
            const wordSpan = document.createElement('span');
            wordSpan.textContent = word;
            wordSpan.addEventListener('click', () => {
                searchInput.value = word;
                searchWord(word);
            });
            const bookmarkIcon = document.createElement('i');
            bookmarkIcon.classList.add('fas', 'fa-bookmark');
            bookmarkIcon.style.color = 'gold';
            bookmarkIcon.style.cursor = 'pointer';
            bookmarkIcon.addEventListener('click', (event) => {
                event.stopPropagation();
                toggleBookmark(word, bookmarkIcon);
            });
            li.appendChild(wordSpan);
            li.appendChild(bookmarkIcon);
            bookmarkList.appendChild(li);
        });
    }

    function displayWordsFlatList(words) {
        if (!suggestionsListFlat) return;
        suggestionsListFlat.innerHTML = '';
        if (words.length === 0) {
            if (noSuggestionsMessage) noSuggestionsMessage.classList.remove('hidden');
            return;
        } else {
            if (noSuggestionsMessage) noSuggestionsMessage.classList.add('hidden');
        }
        words.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            li.addEventListener('click', () => {
                searchInput.value = word;
                searchWord(word);
            });
            suggestionsListFlat.appendChild(li);
        });
    }

    function displayWordOfTheDay() {
        const words = Object.keys(dictionary);
        if (words.length === 0) return;

        let selectedWords = [];
        let availableWords = [...words];
        for (let i = 0; i < 3; i++) {
            if (availableWords.length === 0) {
                selectedWords.push(words[Math.floor(Math.random() * words.length)]);
            } else {
                const randomIndex = Math.floor(Math.random() * availableWords.length);
                selectedWords.push(availableWords[randomIndex]);
                availableWords.splice(randomIndex, 1);
            }
        }

        wotdCards.forEach((card, index) => {
            const wordKey = selectedWords[index];
            const data = dictionary[wordKey];
            if (data) {
                card.word.textContent = wordKey;
                card.pos.textContent = data.pos ? `(${data.pos})` : '';
                card.definition.textContent = data.definition ? data.definition : '';
                card.source.textContent = data.source ? `ប្រភព: ${data.source}` : '';
                card.example.textContent = data.example ? `ឧទាហរណ៍: ${data.example}` : '';
                card.romanized.textContent = data.romanized ? `${data.romanized}` : '';
                card.latin.textContent = data.latin ? `Latin: ${data.latin}` : '';
                card.bookmarkIcon.style.display = 'inline-block';
                if (bookmarkWords.includes(wordKey)) {
                    card.bookmarkIcon.classList.replace('far', 'fas');
                } else {
                    card.bookmarkIcon.classList.replace('fas', 'far');
                }
                card.bookmarkIcon.onclick = () => toggleBookmark(wordKey, card.bookmarkIcon);
            }
        });
    }

    function updateDateDisplay() {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        currentDateDisplay.textContent = date.toLocaleDateString(currentLang === 'km' ? 'km-KH' : 'en-US', options);
    }

    function searchWord(word) {
        suggestionsContainer.classList.add('hidden-section'); // Hide suggestions when a search is made
        const data = dictionary[word];
        if (data) {
            resultWordSpan.textContent = word;
            resultPos.textContent = data.pos ? `(${data.pos})` : '';
            resultDefinition.textContent = data.definition ? data.definition : '';
            resultSource.textContent = data.source ? `ប្រភព: ${data.source}` : '';
            resultExample.textContent = data.example ? `ឧទាហរណ៍: ${data.example}` : '';
            resultRomanized.textContent = data.romanized ? `${data.romanized}` : '';
            resultLatin.textContent = data.latin ? `Latin: ${data.latin}` : '';

            // Handle report link
            if (reportWordLink) {
                const mailtoEmail = "Runrana2002@gmail.com";
                const subject = `Incorrect Word Report: ${word}`;
                const body = `I would like to report an issue with the word '${word}'.\n\n[Please describe the error here]\n\nThank you.`;
                reportWordLink.href = `mailto:${mailtoEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                reportWordLink.style.display = 'inline-block';
            }
            
            if (resultBookmarkIcon) {
                if (bookmarkWords.includes(word)) {
                    resultBookmarkIcon.classList.replace('far', 'fas');
                } else {
                    resultBookmarkIcon.classList.replace('fas', 'far');
                }
                resultBookmarkIcon.style.display = 'inline-block';
                resultBookmarkIcon.onclick = () => toggleBookmark(word, resultBookmarkIcon);
            }
            setAppView('search-results-view');
            addToHistory(word);
        } else {
            resultWordSpan.textContent = translations[currentLang].no_results_found;
            resultPos.textContent = '';
            resultDefinition.textContent = 'សូមពិនិត្យឡើងវិញ ថាពាក្យដែលអ្នកបានបញ្ចូលគឺត្រឹមត្រូវតាមអក្ខរាវិរុទ្ធ។';
            resultSource.textContent = '';
            resultExample.textContent = '';
            resultRomanized.textContent = '';
            resultLatin.textContent = '';
            if (resultBookmarkIcon) resultBookmarkIcon.style.display = 'none';
            if (reportWordLink) reportWordLink.style.display = 'none';
            setAppView('search-results-view');
        }
    }

    // --- Event Listeners ---

    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                searchWord(searchTerm);
            }
        });
    }
    
    // Suggestion display logic
    if(searchInput) {
        searchInput.addEventListener('focus', () => {
            homeView.classList.add('hidden-section'); // Hide word of the day
            suggestionsContainer.classList.remove('hidden-section');
            displayWordsFlatList(sortKhmerWords(Object.keys(dictionary)));
        });

        // ############### កូដដែលបានកែប្រែ ###############
        searchInput.addEventListener('blur', () => {
            // Delay hiding to allow click on suggestion items
            setTimeout(() => {
                // The check for `!searchInput.value.trim()` ensures that if the user
                // clicks away while the search box is empty, the suggestions hide.
                if (!searchInput.value.trim()) { 
                    suggestionsContainer.classList.add('hidden-section');
                    // The problematic line `setAppView('home-view');` has been removed
                    // to prevent the view from undesirably switching back to home on desktop.
                }
            }, 200); 
        });
        // #############################################
        
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim();
            const allWords = sortKhmerWords(Object.keys(dictionary));
            if (searchTerm === '') {
                displayWordsFlatList(allWords);
                suggestionsContainer.classList.remove('hidden-section');
                return;
            }
            const filteredWords = allWords.filter(word => word.startsWith(searchTerm));
            displayWordsFlatList(filteredWords);
            suggestionsContainer.classList.remove('hidden-section'); // Always show suggestions on input
        });
    }


    function setupNavigation() {
        if (homeNavBtn) {
            homeNavBtn.addEventListener('click', function (e) {
                e.preventDefault();
                setAppView('home-view');
                displayWordOfTheDay();
            });
        }
        if (historyNavBtn) {
            historyNavBtn.addEventListener('click', function (e) {
                e.preventDefault();
                setAppView('history-view');
            });
        }
        if (bookmarkNavBtn) {
            bookmarkNavBtn.addEventListener('click', function (e) {
                e.preventDefault();
                setAppView('bookmark-view');
            });
        }
        if (settingsNavBtn) {
            settingsNavBtn.addEventListener('click', function (e) {
                e.preventDefault();
                setAppView('settings-view');
            });
        }
    }
    
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', function () {
            historyWords = [];
            localStorage.setItem('historyWords', JSON.stringify(historyWords));
            displayHistory();
        });
    }

    if (clearBookmarksBtn) {
        clearBookmarksBtn.addEventListener('click', function () {
            bookmarkWords = [];
            localStorage.setItem('bookmarkWords', JSON.stringify(bookmarkWords));
            displayBookmarks();
            displayWordOfTheDay();
            if (resultWordSpan && resultWordSpan.textContent) {
                searchWord(resultWordSpan.textContent);
            }
        });
    }

    if (langKmBtn) {
        langKmBtn.addEventListener('click', () => setLanguage('km'));
    }
    if (langEnBtn) {
        langEnBtn.addEventListener('click', () => setLanguage('en'));
    }

    if (fontRotateBtn) {
        fontRotateBtn.addEventListener('click', updateFont);
    }

    if (aboutBtnLink) {
        aboutBtnLink.addEventListener('click', (e) => { e.preventDefault(); setAppView('about-view'); });
    }
    if (summaryBtnLink) {
        summaryBtnLink.addEventListener('click', (e) => { e.preventDefault(); setAppView('summary-view'); });
    }
    if (teamBtnLink) {
        teamBtnLink.addEventListener('click', (e) => { e.preventDefault(); setAppView('team-view'); });
    }

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (pwaInstallPrompt) {
            pwaInstallPrompt.style.display = 'block';
            document.getElementById('pwa-prompt-text').textContent = translations[currentLang].pwa_install_message;
        }
    });

    if (installAppBtn) {
        installAppBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to the install prompt: ${outcome}`);
                deferredPrompt = null;
                if (pwaInstallPrompt) {
                    pwaInstallPrompt.style.display = 'none';
                }
            }
        });
    }

    if (pwaPromptCloseBtn) {
        pwaPromptCloseBtn.addEventListener('click', () => {
            if (pwaInstallPrompt) {
                pwaInstallPrompt.style.display = 'none';
            }
        });
    }

    window.addEventListener('appinstalled', () => {
        if (pwaInstallPrompt) {
            pwaInstallPrompt.style.display = 'none';
        }
        deferredPrompt = null;
        console.log('PWA was installed');
    });

    window.addEventListener('load', () => {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }

        setLanguage(currentLang);

        const initialFont = localStorage.getItem('currentFont') || fonts[0];
        currentFontIndex = fonts.indexOf(initialFont) !== -1 ? fonts.indexOf(initialFont) : 0;
        document.body.setAttribute("data-font", initialFont);
        updateFontDisplay();

        setupNavigation();
        setAppView('home-view');
        displayWordOfTheDay();
    });

    function setAppView(view) {
        const allSections = [homeView, searchResultsSection, historyView, bookmarkView, settingsView, aboutView, summaryView, teamView, suggestionsContainer];
        allSections.forEach(section => {
            if (section) {
                section.classList.add('hidden-section');
            }
        });

        let activeNavBtn = null;
        if (view === 'home-view') activeNavBtn = homeNavBtn;
        else if (view === 'history-view') activeNavBtn = historyNavBtn;
        else if (view === 'bookmark-view') activeNavBtn = bookmarkNavBtn;
        else if (view === 'settings-view' || view === 'about-view' || view === 'summary-view' || view === 'team-view') activeNavBtn = settingsNavBtn;
        
        updateActiveNavButton(activeNavBtn);

        const targetView = document.getElementById(view);
        if(targetView) {
            targetView.classList.remove('hidden-section');
        } else if (view === 'search-results-view') {
            searchResultsSection.classList.remove('hidden-section');
        } else {
            homeView.classList.remove('hidden-section');
        }
        
        // Specific logic for suggestions and home view
        if (view === 'search-results-view' || searchInput.value.trim() !== '') {
            homeView.classList.add('hidden-section'); // Hide home view when search results or suggestions are active
        } else if (view === 'home-view' && searchInput.value.trim() === '') {
             homeView.classList.remove('hidden-section'); // Show home view if it's explicitly set and search is empty
        }

        if(view === 'history-view') displayHistory();
        if(view === 'bookmark-view') displayBookmarks();
    }
});
