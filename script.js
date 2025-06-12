document.addEventListener('DOMContentLoaded', function () {
    const dictionary = {
        "អចិះ": { pos: "ន", definition: "ចេះដឹង;...។", source: "វចនានុក្រមខ្មែរ", example: "ពាក្យ 'អចិះ' ត្រូវបានប្រើដើម្បីបញ្ជាក់ពីការចេះដឹង។" },
        "អញ្ចន": { pos: "ន", definition: "ស្រះ ត្រពាំងទឹក; ...។", source: "វចនានុក្រមខ្មែរ", example: "យើងបានទៅលេងអញ្ចនដែលមានទឹកថ្លា។" },
        "អញ៑": { pos: "ន", definition: "អញ៑ ខ្ញុំ; ពាក្យប្រើជាសមាស នៃឋានន្តិរ ...។", source: "វចនានុក្រមខ្មែរ", example: "អញ៑ ខ្ញុំមិនដឹងរឿងនេះទេ។" },
        "អតិរៅរ": { pos: "សំ", definition: "គួរឲ្យ; ភ័យខ្លាច ឈ្មោះស្ថាននរក ...។", source: "វចនានុក្រមខ្មែរ", example: "ការងារនេះអតិរៅរខ្លាំងណាស់។" },
        "អទិត": { pos: "ន.ន", definition: "ព្រះសុរិយា ថ្ងៃ; ...។", source: "វចនានុក្រមខ្មែរ", example: "អទិតរះឡើងពីទិសខាងកើត។" },
        "អន្តេក": { pos: "ន.", definition: "អណ្ដើក;  ...។", source: "វចនានុក្រមខ្មែរ", example: "អន្តេកដើរយឺតណាស់។" },
        "អន្ដេង": { pos: "ន.ន", definition: "ត្រីអណ្ដែង; ...។", source: "វចនានុក្រមខ្មែរ", example: "គាត់នេសាទបានត្រីអណ្ដែងធំមួយ។" },
        "អភទ្រ": { pos: "សំ.ន.ន", definition: "អប្រិយ;មិនល្អ ...។", source: "វចនានុក្រមខ្មែរ", example: "ទង្វើអភទ្រមិនគួរបង្កឡើងទេ។" },
        "អភីរ,អភីរ": { pos: "សំ.ន.ន", definition: "អភ័យ;គ្មានភ័យ ...។", source: "វចនានុក្រមខ្មែរ", example: "គាត់មានចិត្តអភីរខ្លាំងណាស់។" },
        "អមរ": { pos: "សំ.ន.ន", definition: "អមតៈ; មិនស្លាប់...។", source: "វចនានុក្រមខ្មែរ", example: "រឿងនិទាននេះបានក្លាយជាអមរ។" },
        "អមរេស្វរៈ": { pos: "សំ", definition: "ឈ្មោះទេវៈ អមតៈ ...។", source: "វចនានុក្រមខ្មែរ", example: "អមរេស្វរៈគឺជាទេវៈដ៏សំខាន់មួយ។" },
        "អរោក": { pos: "សំ.ន.ន", definition: "ខ្មៅ មិនភ្លឺថ្លា...។", source: "វចនានុក្រមខ្មែរ", example: "មេឃអរោកដោយសារពពកច្រើន។" },
        "អវិចិនរក": { pos: "សំ", definition: "ស្ថាននរក អវិថី...។", source: "វចនានុក្រមខ្មែរ", example: "មនុស្សអាក្រក់អាចធ្លាក់ទៅអវិចិនរក។" },
        "អស្តុ": { pos: "សំ", definition: "សូមឲ្យ...។", source: "វចនានុក្រមខ្មែរ", example: "អស្តុឲ្យគាត់បានសុខសាន្ត។" },
        "អស្ថិត": { pos: "សំ.ន.ន", definition: "មិនស្ថិតស្ថេរ ...។", source: "វចនានុក្រមខ្មែរ", example: "ជីវិតនេះអស្ថិតណាស់។" },
        "អសុចិ": { pos: "សំ.ន.ន", definition: "អំណាច ...។", source: "វចនានុក្រមខ្មែរ", example: "គាត់ប្រើអសុចិរបស់គាត់ដើម្បីជួយអ្នកដទៃ។" },
        "អ្គក៑": { pos: "ន.ន.", definition: "គក់", source: "វចនានុក្រមខ្មែរ", example: "គាត់បានអ្គក៑ក្បាលរបស់គាត់ដោយចៃដន្យ។" },
        "កុអ្គក៑": { pos: "ន.ន.ឥ.", definition: "នារី នាម អ្គក", source: "វចនានុក្រមខ្មែរ", example: "កុអ្គក៑គឺជាឈ្មោះដ៏ស្រស់ស្អាត។" },
        "អ្គត៑": { pos: "សំ.ន.ន.", definition: "គត់, គត់មត់", source: "វចនានុក្រមខ្មែរ", example: "គាត់ធ្វើការអ្គត៑ណាស់។" },
        "កុអ្គត៑": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អ្គត", source: "វចនានុក្រមខ្មែរ", example: "កុអ្គត៑គឺជាឈ្មោះនារីមួយ។" },
        "អម្រះអក៑វាអ្គត៑": { pos: "", definition: "បុរស អ្គត អនុរក្សគ្រប់គ្រងអ្នកបំរើ", source: "វចនានុក្រមខ្មែរ", example: "អម្រះអក៑វាអ្គត៑មានតួនាទីសំខាន់។" },
        "វាអ្គត៑": { pos: "ន.ន.បុំ.", definition: "បុរស (នាម) អ្គត", source: "វចនានុក្រមខ្មែរ", example: "វាអ្គត៑គឺជាឈ្មោះបុរសមួយ។" },
        "អ្គារ, អគារ": { pos: "សំ.", definition: "អគារ លំនៅដ្ឋាន (ម.ព. អគារ ផង)", source: "វចនានុក្រមខ្មែរ", example: "អ្គារនេះធំណាស់។" },
        "កុអា្គរ៑": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អ្គារ", source: "វចនានុក្រមខ្មែរ", example: "កុអា្គរ៑គឺជាឈ្មោះស្រីស្អាតមួយ។" },
        "អ្ចស៑": { pos: "", definition: "ពីដើម, វ័យ", source: "វចនានុក្រមខ្មែរ", example: "តាំងពីអ្ចស៑មកម្ល៉េះ។" },
        "អ្ចាស៑": { pos: "", definition: "ចាស់ឈ្មោះរបស់សិវៈ", source: "វចនានុក្រមខ្មែរ", example: "អ្ចាស៑គឺជាឈ្មោះដ៏ពិសិដ្ឋ។" },
        "អ្ជិ, អ្ជី": { pos: "", definition: "ដូនតា បុព្វការី", source: "វចនានុក្រមខ្មែរ", example: "ពួកគាត់គឺជាអ្ជិរបស់យើង។" },
        "អ្ជិ ច្កេ": { pos: "ន.ន.", definition: "ដូនតាឆ្កែ", source: "វចនានុក្រមខ្មែរ", example: "រឿងនេះនិយាយអំពីអ្ជិ ច្កេ។" },
        "តៃអ្ជិច្កេ": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) តៃអ្ជិច្កេ", source: "វចនានុក្រមខ្មែរ", example: "តៃអ្ជិច្កេគឺជាឈ្មោះស្រីមួយ។" },
        "អ្តង": { pos: "ន.ន.", definition: "តាង", source: "វចនានុក្រមខ្មែរ", example: "អ្តងនេះតូចណាស់។" },
        "អ្តា": { pos: "", definition: "បុព្វបុរស, ជិតា, ឪពុក", source: "វចនានុក្រមខ្មែរ", example: "អ្តាគឺជាអ្នកដ៏មានគុណ។" },
        "អ្មេគេ អ្តាគេ កោន៑ចៅគេ": { pos: "", definition: "ម្តាយគេ ឪពុកគេ កូនចៅគេ", source: "វចនានុក្រមខ្មែរ", example: "នេះជាពាក្យសំដៅលើអ្មេគេ អ្តាគេ កោន៑ចៅគេ។" },
        "ម្រតាង៑អ្តា": { pos: "", definition: "ម្រតាងជាជីតា", source: "វចនានុក្រមខ្មែរ", example: "ម្រតាង៑អ្តាគឺជាជីតាដ៏ល្អ។" },
        "អ្មេអ្តា": { pos: "", definition: "មាតាបិតា", source: "វចនានុក្រមខ្មែរ", example: "យើងត្រូវគោរពអ្មេអ្តា។" },
        "កុអ្តា": { pos: "ន.ន.ឥ.", definition: "នារី (នាម) អ្តា", source: "វចនានុក្រមខ្មែរ", example: "កុអ្តាគឺជាឈ្មោះស្រីមួយ។" },
        "វាអ្តា": { pos: "ន.ន.បុំ.", definition: "បុរស (នាម) អ្តា", source: "វចនានុក្រមខ្មែរ", example: "វាអ្តាគឺជាឈ្មោះបុរសមួយ។" },
        "វាអ្តាក្រសោប៑": { pos: "ន.ន.បុំ.", definition: "បុរស (នាម) អ្តាក្រសោប", source: "វចនានុក្រមខ្មែរ", example: "វាអ្តាក្រសោប៑បានមកដល់ហើយ។" },
        "អ្ទះតេំ": { pos: "", definition: "សាក្សី", source: "វចនានុក្រមខ្មែរ", example: "គាត់គឺជាអ្ទះតេំតែមួយគត់។" },
        "តេំ": { pos: "", definition: "ដើម, ដើមកំណើត", source: "វចនានុក្រមខ្មែរ", example: "នេះជាតេំនៃរឿង។" },
        "អ្នក៑,អ្នក្ក": { pos: "", definition: "មនុស្សទូទៅ", source: "វចនានុក្រមខ្មែរ", example: "អ្នក៑ទាំងអស់ត្រូវចូលរួម។" },
        "កន៑ប្រទានអ្នក៑ផោន៑អាយ៑តវ្រះ": { pos: "", definition: "ទ្រព្យសម្បត្តិដែលថ្វាយចំពោះអាទិទេពដោយជនទាំងពួង", source: "វចនានុក្រមខ្មែរ", example: "កន៑ប្រទានអ្នក៑ផោន៑អាយ៑តវ្រះត្រូវបានថ្វាយដោយស្មោះ។" },
        "អ្នក៑វ្រះកន្មេង៑": { pos: "", definition: "បរិស័ទរបស់វិហារព្រះកន្មេង", source: "វចនានុក្រមខ្មែរ", example: "អ្នក៑វ្រះកន្មេង៑បានទៅចូលរួមពិធី។" },
        "អ្នក៑ក្លហ៑": { pos: "ប.ព.ន.", definition: "អ្នកក្លស់", source: "វចនានុក្រមខ្មែរ", example: "អ្នក៑ក្លហ៑មានជំនាញក្នុងការងារនេះ។" },
        "អ្នក៑ទេប៑": { pos: "", definition: "មនុស្សរបស់អាទិទេព, អ្នកបំរើនៅវិហារ", source: "វចនានុក្រមខ្មែរ", example: "អ្នក៑ទេប៑បានបម្រើនៅវិហារ។" },
        "អ្នក៑តបង្គំ": { pos: "", definition: "អ្នកបំរើវត្តអារាម, អ្នកធ្វើអភិវន្ទន៍", source: "វចនានុក្រមខ្មែរ", example: "អ្នក៑តបង្គំបានធ្វើការងារយ៉ាងខ្ជាប់ខ្ជួន។" },
        "អ្នក៑បរិភវ": { pos: "", definition: "មនុស្សដែលផ្តល់នូវពន្ធអាករ", source: "វចនានុក្រមខ្មែរ", example: "អ្នក៑បរិភវត្រូវបង់ពន្ធតាមច្បាប់។" },
        "អ្នក៑មី": { pos: "", definition: "ម្នាក់ៗ, ជនណាម្នាក់", source: "វចនានុក្រមខ្មែរ", example: "អ្នក៑មីបានយល់ព្រម។" },
        "អ្នក៑កន្តៃ": { pos: "", definition: "ស្រីៗ", source: "វចនានុក្រមខ្មែរ", example: "អ្នក៑កន្តៃបានចូលរួមពិធីជប់លៀង។" },
        "អ្នក្កបំរេ": { pos: "", definition: "អ្នកបំរើ", source: "វចនានុក្រមខ្មែរ", example: "អ្នក្កបំរេកំពុងធ្វើការ។" },
        "អ្នក៑ស្រេ": { pos: "", definition: "អ្នកស្រែ", source: "វចនានុក្រមខ្មែរ", example: "អ្នក៑ស្រេកំពុងច្រូតកាត់។" },
        "ជ្មះអ្នក៑ស្រេ": { pos: "", definition: "ឈ្មោះអ្នកស្រែ", source: "វចនានុក្រមខ្មែរ", example: "ជ្មះអ្នក៑ស្រេគឺ លី។" },
        "អំរះអ្នក៑ស្រេ": { pos: "", definition: "អនុរក្សគ្រប់គ្រងអ្នកស្រែចំការ", source: "វចនានុក្រមខ្មែរ", example: "អំរះអ្នក៑ស្រេបានណែនាំពីរបៀបដាំដុះ។" },
        "អ្នក៑ក្លោញ៑": { pos: "ឋានន្តរនាម", definition: "មនុស្សប្រធាន", source: "វចនានុក្រមខ្មែរ", example: "អ្នក៑ក្លោញ៑បានដឹកនាំកិច្ចប្រជុំ។" },
        "អ្នង៑": { pos: "សំ.ន.ន.", definition: "ស្នេហា", source: "វចនានុក្រមខ្មែរ", example: "គាត់មានអ្នង៑ចំពោះមុខវិជ្ជានេះ។" },
    };

    const form = document.getElementById("searchForm");
    const input = document.getElementById("searchInput");
    const resultDiv = document.getElementById("result");
    const historySection = document.getElementById('history-section');
    const bookmarkSection = document.getElementById('bookmark-section');
    const aboutUsSection = document.getElementById('about-us');
    const contactUsSection = document.getElementById('contact-us');
    const homeSection = document.getElementById('home');
    const loadingScreen = document.getElementById('loadingScreen');

    // Hide loading screen after a short delay
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500); // Wait for fade out to complete
        }, 1000); // Display loading screen for 1 second
    });

    // Function to sort Khmer words alphabetically
    function sortKhmerWords(words) {
        return words.sort((a, b) => a.localeCompare(b, 'km'));
    }

    // Function to display all words alphabetically in the home section
    function displayAllWordsAlphabetically() {
        const sortedWords = sortKhmerWords(Object.keys(dictionary));
        let allWordsContainer = document.getElementById('all-words-alphabetical');
        if (!allWordsContainer) {
            allWordsContainer = document.createElement('div');
            allWordsContainer.id = 'all-words-alphabetical';
            allWordsContainer.className = 'related-words-card';
            homeSection.appendChild(allWordsContainer);
        } else {
            allWordsContainer.innerHTML = ''; // Clear existing content
        }
        
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
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = input.value.trim();

        resultDiv.innerHTML = ''; // Clear previous results
        const existingAllWords = document.getElementById('all-words-alphabetical');
        if (existingAllWords) {
            existingAllWords.remove(); // Remove alphabetical list when searching
        }
        hideAllSections(); 
        homeSection.style.display = 'block'; 

        if (!query) {
            displayAllWordsAlphabetically(); // Re-display all words if search is empty
            return;
        }

        const exactMatchEntry = dictionary[query];
        const relatedWords = Object.keys(dictionary).filter(word => word.includes(query) && word !== query);
        let foundSomething = false;

        if (exactMatchEntry) {
            foundSomething = true;
            const resultCard = document.createElement('div');
            resultCard.className = 'result-card';
            
            // Add source and example fields to the display
            let sourceHtml = exactMatchEntry.source ? `<div class="result-source">ប្រភព: ${exactMatchEntry.source}</div>` : '';
            let exampleHtml = exactMatchEntry.example ? `<div class="result-example">ឧទាហរណ៍: ${exactMatchEntry.example}</div>` : '';

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
            const relatedCard = document.createElement('div');
            relatedCard.className = 'related-words-card';

            const title = document.createElement('h4');
            title.textContent = 'ពាក្យដែលពាក់ព័ន្ធ';
            relatedCard.appendChild(title);

            const list = document.createElement('ul');
            relatedWords.forEach(word => {
                const listItem = document.createElement('li');
                listItem.textContent = word;
                listItem.addEventListener('click', () => {
                    input.value = word;
                    form.dispatchEvent(new Event('submit', { bubbles: true }));
                });
                list.appendChild(listItem);
            });
            relatedCard.appendChild(list);
            resultDiv.appendChild(relatedCard);
        }

        if (!foundSomething) {
            const noResultDiv = document.createElement('div');
            noResultDiv.className = 'no-result';
            noResultDiv.textContent = `គ្មានលទ្ធផលសម្រាប់ពាក្យ "${query}"`;
            resultDiv.appendChild(noResultDiv);
        }
    });

    // PWA Prompt (iOS and Android)
    const pwaPrompt = document.getElementById('pwaPrompt');
    const pwaPromptText = document.getElementById('pwaPromptText');

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
            pwaPromptText.textContent = 'បន្ថែមកម្មវិធីនេះទៅកាន់អេក្រង់ដើមរបស់អ្នកសម្រាប់បទពិសោធន៍កាន់តែប្រសើរ!';
            pwaPrompt.style.display = 'block';
        }
    });

    if (isiOS() && !isInStandaloneMode()) {
        setTimeout(() => {
            pwaPromptText.textContent = 'ដើម្បីបន្ថែមកម្មវិធីនេះទៅអេក្រង់ដើមរបស់អ្នក សូមចុចប៊ូតុង "Share" រួចជ្រើសរើស "Add to Home Screen"។';
            pwaPrompt.style.display = 'block';
        }, 3000); // Delay for iOS prompt
    } else if (isAndroid() && !isInStandaloneMode() && !deferredPrompt) {
        // Fallback for Android if beforeinstallprompt doesn't fire immediately
        setTimeout(() => {
            pwaPromptText.textContent = 'បន្ថែមកម្មវិធីនេះទៅកាន់អេក្រង់ដើមរបស់អ្នកសម្រាប់បទពិសោធន៍កាន់តែប្រសើរ! (ចុច Menu បន្ទាប់មក "Add to Home Screen")';
            pwaPrompt.style.display = 'block';
        }, 3000); // Delay for Android fallback prompt
    }

    document.getElementById('pwaPromptClose').onclick = function () {
        pwaPrompt.style.display = 'none';
    };

    // Font rotation
    const fonts = ["Hanuman", "Kantumruy Pro", "Battambang", "Bayon", "Nokora", "Moul", "Chenla", "Content", "Khmer", "Koulen"];
    let currentIndex = 0;
    window.rotateFont = function (event) {
        if (event) event.preventDefault(); // Prevent default if called from an event
        currentIndex = (currentIndex + 1) % fonts.length;
        document.body.setAttribute("data-font", fonts[currentIndex]);
    }
    document.getElementById('font-rotate-btn-footer').addEventListener('click', rotateFont);
    
    // Navigation functions (updated to use specific IDs)
    function hideAllSections() {
        document.querySelectorAll('section').forEach(sec => {
          sec.style.display = 'none';
        });
        resultDiv.innerHTML = ''; // Clear search results when navigating
        const existingAllWords = document.getElementById('all-words-alphabetical');
        if (existingAllWords) {
            existingAllWords.remove();
        }
        input.value = ''; // Clear search input on navigation
    }

    document.getElementById('home-btn-footer').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        homeSection.style.display = 'block';
        displayAllWordsAlphabetically();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    document.getElementById('history-btn-footer').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        renderHistory();
        historySection.style.display = 'block';
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    document.getElementById('bookmark-btn-footer').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        renderBookmark();
        bookmarkSection.style.display = 'block';
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    document.getElementById('about-btn-footer').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        aboutUsSection.style.display = 'block';
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    document.getElementById('contact-btn-footer').addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        contactUsSection.style.display = 'block';
        window.scrollTo({top: 0, behavior: 'smooth'});
    });


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
            historyList.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.7);">មិនទាន់មានប្រវត្តិស្វែងរកនៅឡើយទេ។</p>';
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
            });
            historyList.appendChild(li);
        });
    }
    
    function renderBookmark() {
        const bookmarkList = document.getElementById('bookmark-list');
        bookmarkList.innerHTML = '';
        if (bookmarkWords.length === 0) {
            bookmarkList.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.7);">មិនទាន់មានពាក្យចំណាំនៅឡើយទេ។</p>';
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
                hideAllSections();
                homeSection.style.display = 'block';
            });
            bookmarkList.appendChild(li);
        });
    }

    // Initial display: show the home section and all words
    homeSection.style.display = 'block';
    displayAllWordsAlphabetically();
});
