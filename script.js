document.addEventListener('DOMContentLoaded', function () {
    const dictionary = {
        "អចិះ": { pos: "ន", definition: "ចេះដឹង;...។" },
        "អញ្ចន": { pos: "ន", definition: "ស្រះ ត្រពាំងទឹក; ...។" },
        "អញ៑": { pos: "ន", definition: "អញ៑ ខ្ញុំ; ពាក្យប្រើជាសមាស នៃឋានន្តិរ ...។" },
        "អតិរៅរ": { pos: "សំ", definition: "គួរឲ្យ; ភ័យខ្លាច ឈ្មោះស្ថាននរក ...។" },
        "អទិត": { pos: "ន.ន", definition: "ព្រះសុរិយា ថ្ងៃ; ...។" },
        "អន្តេក": { pos: "ន.", definition: "អណ្ដើក;  ...។" },
        "អន្ដេង": { pos: "ន.ន", definition: "ត្រីអណ្ដែង; ...។" },
        "អភទ្រ": { pos: "សំ.ន.ន", definition: "អប្រិយ;មិនល្អ ...។" },
        "អភីរ,អភីរ": { pos: "សំ.ន.ន", definition: "អភ័យ;គ្មានភ័យ ...។" },
        "អមរ": { pos: "សំ.ន.ន", definition: "អមតៈ; មិនស្លាប់...។" },
        "អមរេស្វរៈ": { pos: "សំ", definition: "ឈ្មោះទេវៈ អមតៈ ...។" },
        "អរោក": { pos: "សំ.ន.ន", definition: "ខ្មៅ មិនភ្លឺថ្លា...។" },
        "អវិចិនរក": { pos: "សំ", definition: "ស្ថាននរក អវិថី...។" },
        "អស្តុ": { pos: "សំ", definition: "សូមឲ្យ...។" },
        "អស្ថិត": { pos: "សំ.ន.ន", definition: "មិនស្ថិតស្ថេរ ...។" },
        "អសុចិ": { pos: "សំ.ន.ន", definition: "អំណាច ...។" },
        "អ្គក៑": { pos: "ន.ន.", definition: "គក់" },
        "កុអ្គក៑": { pos: "ន.ន.ឥ.", definition: "នារី នាម អ្គក" },
        "អ្គត៑": { pos: "សំ.ន.ន.", definition: "គត់, គត់មត់" },
        "កុអ្គត៑": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អ្គត" },
        "អម្រះអក៑វាអ្គត៑": { pos: "", definition: "បុរស អ្គត អនុរក្សគ្រប់គ្រងអ្នកបំរើ" },
        "វាអ្គត៑": { pos: "ន.ន.បុំ.", definition: "បុរស (នាម) អ្គត" },
        "អ្គារ, អគារ": { pos: "សំ.", definition: "អគារ លំនៅដ្ឋាន (ម.ព. អគារ ផង)" },
        "កុអា្គរ៑": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អ្គារ" },
        "អ្ចស៑": { pos: "", definition: "ពីដើម, វ័យ" },
        "អ្ចាស៑": { pos: "", definition: "ចាស់ឈ្មោះរបស់សិវៈ" },
        "អ្ជិ, អ្ជី": { pos: "", definition: "ដូនតា បុព្វការី" },
        "អ្ជិ ច្កេ": { pos: "ន.ន.", definition: "ដូនតាឆ្កែ" },
        "តៃអ្ជិច្កេ": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) តៃអ្ជិច្កេ" },
        "អ្តង": { pos: "ន.ន.", definition: "តាង" },
        "អ្តា": { pos: "", definition: "បុព្វបុរស, ជិតា, ឪពុក" },
        "អ្មេគេ អ្តាគេ កោន៑ចៅគេ": { pos: "", definition: "ម្តាយគេ ឪពុកគេ កូនចៅគេ" },
        "ម្រតាង៑អ្តា": { pos: "", definition: "ម្រតាងជាជីតា" },
        "អ្មេអ្តា": { pos: "", definition: "មាតាបិតា" },
        "កុអ្តា": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អ្តា" },
        "វាអ្តា": { pos: "ន.ន.បុំ.", definition: "បុរស (នាម) អ្តា" },
        "វាអ្តាក្រសោប៑": { pos: "ន.ន.បុំ.", definition: "បុរស (នាម) អ្តាក្រសោប" },
        "អ្ទះតេំ": { pos: "", definition: "សាក្សី" },
        "តេំ": { pos: "", definition: "ដើម, ដើមកំណើត" },
        "អ្នក៑,អ្នក្ក": { pos: "", definition: "មនុស្សទូទៅ" },
        "កន៑ប្រទានអ្នក៑ផោន៑អាយ៑តវ្រះ": { pos: "", definition: "ទ្រព្យសម្បត្តិដែលថ្វាយចំពោះអាទិទេពដោយជនទាំងពួង" },
        "អ្នក៑វ្រះកន្មេង៑": { pos: "", definition: "បរិស័ទរបស់វិហារព្រះកន្មេង" },
        "អ្នក៑ក្លហ៑": { pos: "ប.ព.ន.", definition: "អ្នកក្លស់" },
        "អ្នក៑ទេប៑": { pos: "", definition: "មនុស្សរបស់អាទិទេព, អ្នកបំរើនៅវិហារ" },
        "អ្នក៑តបង្គំ": { pos: "", definition: "អ្នកបំរើវត្តអារាម, អ្នកធ្វើអភិវន្ទន៍" },
        "អ្នក៑បរិភវ": { pos: "", definition: "មនុស្សដែលផ្តល់នូវពន្ធអាករ" },
        "អ្នក៑មី": { pos: "", definition: "ម្នាក់ៗ, ជនណាម្នាក់" },
        "អ្នក៑កន្តៃ": { pos: "", definition: "ស្រីៗ" },
        "អ្នក្កបំរេ": { pos: "", definition: "អ្នកបំរើ" },
        "អ្នក៑ស្រេ": { pos: "", definition: "អ្នកស្រែ" },
        "ជ្មះអ្នក៑ស្រេ": { pos: "", definition: "ឈ្មោះអ្នកស្រែ" },
        "អំរះអ្នក៑ស្រេ": { pos: "", definition: "អនុរក្សគ្រប់គ្រងអ្នកស្រែចំការ" },
        "អ្នក៑ក្លោញ៑": { pos: "ឋានន្តរនាម", definition: "មនុស្សប្រធាន" },
        "អ្នង៑": { pos: "សំ.ន.ន.", definition: "ស្នេហា" },
    };

    const form = document.getElementById("searchForm");
    const input = document.getElementById("searchInput");
    const resultDiv = document.getElementById("result");
    const historySection = document.getElementById('history-section');
    const bookmarkSection = document.getElementById('bookmark-section');
    const homeSection = document.getElementById('home'); // Get the home section

    // Function to sort Khmer words alphabetically
    function sortKhmerWords(words) {
        return words.sort((a, b) => a.localeCompare(b, 'km'));
    }

    // Function to display all words alphabetically in the home section
    function displayAllWordsAlphabetically() {
        const sortedWords = sortKhmerWords(Object.keys(dictionary));
        const allWordsContainer = document.createElement('div');
        allWordsContainer.id = 'all-words-alphabetical';
        allWordsContainer.className = 'related-words-card'; // Reusing styling
        
        const title = document.createElement('h4');
        title.textContent = 'ពាក្យទាំងអស់ (តាមលំដាប់អក្សរក្រម)';
        allWordsContainer.appendChild(title);

        const list = document.createElement('ul');
        sortedWords.forEach(word => {
            const listItem = document.createElement('li');
            listItem.textContent = word;
            listItem.addEventListener('click', () => {
                input.value = word;
                form.dispatchEvent(new Event('submit', { bubbles: true }));
            });
            list.appendChild(listItem);
        });
        allWordsContainer.appendChild(list);
        homeSection.appendChild(allWordsContainer); // Append to the home section
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = input.value.trim();

        // Clear previous results and all words display
        resultDiv.innerHTML = '';
        const existingAllWords = document.getElementById('all-words-alphabetical');
        if (existingAllWords) {
            existingAllWords.remove();
        }
        hideAllSections(); // Hide other sections when searching
        homeSection.style.display = 'block'; // Ensure home section is visible for search results

        if (!query) {
            displayAllWordsAlphabetically(); // Re-display all words if search is empty
            return; // Exit if the search box is empty
        }

        const exactMatchEntry = dictionary[query];
        const relatedWords = Object.keys(dictionary).filter(word => word.includes(query) && word !== query);
        let foundSomething = false;

        // 1. Display the exact match if found
        if (exactMatchEntry) {
            foundSomething = true;
            const resultCard = document.createElement('div');
            resultCard.className = 'result-card';
            
            resultCard.innerHTML = `
                <div class="result-word">${query}</div>
                <div class="result-pos">${exactMatchEntry.pos}</div>
                <div class="result-definition">${exactMatchEntry.definition}</div>
            `;
            resultDiv.appendChild(resultCard);
            addToHistory(query);
        }

        // 2. Display related words if any are found
        if (relatedWords.length > 0) {
            foundSomething = true;
            const relatedCard = document.createElement('div');
            relatedCard.className = 'related-words-card';

            const title = document.createElement('h4');
            title.textContent = 'ពាក្យដែលពាក់ព័ន្ធ';
            relatedCard.appendChild(title);

            const list = document.createElement('ul');
            relatedWords.forEach(word => {
                const listItem = document.createElement('li');
                listItem.textContent = word;
                
                // Add click listener to each related word
                listItem.addEventListener('click', () => {
                    input.value = word;
                    // Automatically trigger a new search
                    form.dispatchEvent(new Event('submit', { bubbles: true }));
                });
                list.appendChild(listItem);
            });
            relatedCard.appendChild(list);
            resultDiv.appendChild(relatedCard);
        }

        // 3. Display 'no result' message if nothing was found
        if (!foundSomething) {
            const noResultDiv = document.createElement('div');
            noResultDiv.className = 'no-result';
            noResultDiv.textContent = `គ្មានលទ្ធផលសម្រាប់ពាក្យ "${query}"`;
            resultDiv.appendChild(noResultDiv);
        }
    });

    // iOS PWA prompt
    function isiOS() {
        return /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());
    }

    function isInStandaloneMode() {
        return ('standalone' in window.navigator) && window.navigator.standalone;
    }

    if (isiOS() && !isInStandaloneMode()) {
        setTimeout(() => {
            document.getElementById('iosPrompt').style.display = 'block';
        }, 1500);
    }

    document.getElementById('iosPromptClose').onclick = function () {
        document.getElementById('iosPrompt').style.display = 'none';
    };

    // Font rotation
    const fonts = ["Hanuman", "Kantumruy Pro", "Battambang", "Bayon", "Nokora", "Moul", "Chenla", "Content", "Khmer", "Koulen"];
    let currentIndex = 0;
    window.rotateFont = function (event) {
        event.preventDefault();
        currentIndex = (currentIndex + 1) % fonts.length;
        document.body.setAttribute("data-font", fonts[currentIndex]);
    }
    
    // Navigation
    window.goToTop = function(event) {
        event.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
        hideAllSections();
        homeSection.style.display = 'block'; // Show the home section
        displayAllWordsAlphabetically(); // Re-display all words on home
        resultDiv.innerHTML = ''; // Clear search results when going home
        input.value = ''; // Clear search input
    }
    
    window.showSection = function(event, id) {
        event.preventDefault();
        hideAllSections();
        const section = document.getElementById(id);
        if (section) {
          section.style.display = 'block';
          section.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }
    
    function hideAllSections() {
        document.querySelectorAll('.hidden-section').forEach(sec => {
          sec.style.display = 'none';
        });
        homeSection.style.display = 'none'; // Hide the home section
        resultDiv.innerHTML = ''; // Clear search results when navigating
        const existingAllWords = document.getElementById('all-words-alphabetical');
        if (existingAllWords) {
            existingAllWords.remove();
        }
    }

    // Bookmark and History
    let historyWords = JSON.parse(localStorage.getItem('historyWords') || '[]');
    let bookmarkWords = JSON.parse(localStorage.getItem('bookmarkWords') || '[]');

    function addToHistory(word) {
        if (!historyWords.includes(word)) {
            historyWords.unshift(word);
            if (historyWords.length > 20) historyWords.pop(); // Limit history size
            localStorage.setItem('historyWords', JSON.stringify(historyWords));
        }
    }

    function renderHistory() {
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = '';
        if (historyWords.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.7);">No history yet.</p>';
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
                hideAllSections(); // Hide history section after clicking an item
                homeSection.style.display = 'block'; // Show home section
            });
            historyList.appendChild(li);
        });
    }
    
    const historyBtn = document.getElementById('history-btn');
    if (historyBtn) {
        historyBtn.addEventListener('click', (event) => {
            event.preventDefault();
            if (historySection.style.display === 'none' || historySection.style.display === '') {
                hideAllSections();
                renderHistory();
                historySection.style.display = 'block';
            } else {
                historySection.style.display = 'none';
                homeSection.style.display = 'block'; // Show home when hiding history
                displayAllWordsAlphabetically(); // Re-display all words
            }
        });
    }

    function renderBookmark() {
        const bookmarkList = document.getElementById('bookmark-list');
        bookmarkList.innerHTML = '';
        if (bookmarkWords.length === 0) {
            bookmarkList.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.7);">No bookmarks yet.</p>';
            return;
        }
        bookmarkWords.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            li.style.cursor = 'pointer';
            li.style.padding = '5px 0';
            li.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
            li.addEventListener('click', () => {
                input.value = word;
                form.dispatchEvent(new Event('submit'));
                hideAllSections(); // Hide bookmark section after clicking an item
                homeSection.style.display = 'block'; // Show home section
            });
            bookmarkList.appendChild(li);
        });
    }

    const bookmarkBtn = document.getElementById('bookmark-btn');
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', (event) => {
            event.preventDefault();
            if (bookmarkSection.style.display === 'none' || bookmarkSection.style.display === '') {
                hideAllSections();
                renderBookmark();
                bookmarkSection.style.display = 'block';
            } else {
                bookmarkSection.style.display = 'none';
                homeSection.style.display = 'block'; // Show home when hiding bookmarks
                displayAllWordsAlphabetically(); // Re-display all words
            }
        });
    }

    // Initial display: show the home section and all words
    homeSection.style.display = 'block';
    displayAllWordsAlphabetically();
});