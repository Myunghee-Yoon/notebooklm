// Q&A Data
const qaData = {
  "기본사용법": [
    {
      "question": "NotebookLM이 무엇인가요?",
      "answer": "NotebookLM은 구글에서 개발한 AI 기반 연구 및 노트 작성 도구입니다. 문서를 업로드하면 AI가 내용을 분석하여 질문 답변, 요약, 아이디어 생성 등을 도와줍니다.",
      "category": "기본개념",
      "keywords": ["정의", "개념", "기본"]
    },
    {
      "question": "NotebookLM을 어떻게 시작하나요?",
      "answer": "notebooklm.google.com에 접속하여 구글 계정으로 로그인합니다. 새 노트북을 만들고 PDF, 텍스트 파일, 또는 직접 텍스트를 입력하여 시작할 수 있습니다.",
      "category": "시작하기",
      "keywords": ["시작", "로그인", "접속"]
    },
    {
      "question": "어떤 파일 형식을 지원하나요?",
      "answer": "PDF, 텍스트 파일(.txt), 마크다운(.md), 구글 문서, 웹페이지 URL 등을 지원합니다. 각 노트북당 최대 50개의 소스를 추가할 수 있습니다.",
      "category": "파일지원",
      "keywords": ["파일형식", "지원", "업로드"]
    }
  ],
  "교육활용": [
    {
      "question": "수업 자료 준비에 어떻게 활용할 수 있나요?",
      "answer": "강의 노트, 논문, 교재를 업로드하면 AI가 핵심 내용을 요약하고, 퀴즈 문제를 생성하며, 학생들이 이해하기 쉬운 설명을 제공합니다. 또한 관련 예시나 비유를 만들어줍니다.",
      "category": "수업준비",
      "keywords": ["강의", "수업자료", "퀴즈", "요약"]
    },
    {
      "question": "학생 과제 지도에 어떻게 도움이 되나요?",
      "answer": "학생의 논문 초안이나 과제물을 분석하여 개선점을 제안하고, 참고 자료를 추천하며, 논리적 구조를 검토해줍니다. 학생과의 상담 내용 정리에도 유용합니다.",
      "category": "학생지도",
      "keywords": ["과제", "논문", "지도", "피드백"]
    },
    {
      "question": "연구 프로젝트 관리에 어떻게 사용하나요?",
      "answer": "연구 논문, 데이터, 회의록을 통합 관리하고, AI가 연구 아이디어를 제안하거나 문헌 검토를 도와줍니다. 공동 연구자들과의 협업도 지원합니다.",
      "category": "연구관리",
      "keywords": ["연구", "프로젝트", "논문", "협업"]
    }
  ],
  "고급기능": [
    {
      "question": "AI 채팅 기능은 어떻게 사용하나요?",
      "answer": "업로드한 문서들을 기반으로 AI와 대화할 수 있습니다. '이 논문의 주요 논점은?', '학생들에게 어떻게 설명할까?' 같은 질문을 하면 맥락에 맞는 답변을 제공합니다.",
      "category": "AI대화",
      "keywords": ["채팅", "질문", "대화", "AI"]
    },
    {
      "question": "노트 생성 기능이 무엇인가요?",
      "answer": "AI가 업로드된 자료를 바탕으로 자동으로 노트를 생성합니다. 핵심 개념, 중요 인용구, 관련 아이디어들을 체계적으로 정리해줍니다.",
      "category": "노트생성",
      "keywords": ["노트", "자동생성", "정리", "개념"]
    },
    {
      "question": "팟캐스트 생성 기능은 무엇인가요?",
      "answer": "업로드한 문서를 바탕으로 AI가 두 명의 진행자가 대화하는 형식의 오디오 팟캐스트를 생성합니다. 복잡한 내용을 이해하기 쉽게 설명하는 데 유용합니다.",
      "category": "팟캐스트",
      "keywords": ["팟캐스트", "오디오", "대화", "설명"]
    }
  ],
  "문제해결": [
    {
      "question": "파일 업로드가 안 될 때는?",
      "answer": "파일 크기가 너무 크거나 지원하지 않는 형식일 수 있습니다. PDF는 100MB 이하, 텍스트는 500MB 이하로 제한됩니다. 파일을 분할하거나 형식을 변경해보세요.",
      "category": "업로드문제",
      "keywords": ["업로드", "오류", "파일크기", "형식"]
    },
    {
      "question": "AI 응답이 부정확할 때는?",
      "answer": "더 구체적인 질문을 하거나, 맥락을 명확히 제공하세요. 또한 여러 소스를 추가하여 AI가 더 많은 정보를 참고할 수 있게 하면 정확도가 향상됩니다.",
      "category": "정확도문제",
      "keywords": ["부정확", "오답", "정확도", "개선"]
    },
    {
      "question": "데이터 보안은 어떻게 보장되나요?",
      "answer": "구글의 보안 정책에 따라 데이터가 암호화되어 저장됩니다. 업로드한 자료는 다른 사용자와 공유되지 않으며, 언제든 삭제할 수 있습니다.",
      "category": "보안",
      "keywords": ["보안", "프라이버시", "데이터", "암호화"]
    }
  ],
  "팁과요령": [
    {
      "question": "효과적인 질문 방법은?",
      "answer": "구체적이고 명확한 질문을 하세요. '요약해줘'보다는 '이 논문의 연구방법론을 3가지로 요약해줘'가 더 좋습니다. 맥락과 목적을 함께 제시하면 더 유용한 답변을 얻을 수 있습니다.",
      "category": "사용팁",
      "keywords": ["질문법", "팁", "효과적", "방법"]
    },
    {
      "question": "여러 문서를 효율적으로 관리하려면?",
      "answer": "주제별로 노트북을 분리하고, 파일명을 명확하게 작성하세요. 태그나 폴더 기능을 활용하여 체계적으로 정리하면 나중에 찾기 쉽습니다.",
      "category": "관리팁",
      "keywords": ["관리", "정리", "효율", "체계"]
    }
  ]
};

// Application State
let currentFilter = '전체';
let currentSearchTerm = '';
let allQAItems = [];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const resultsGrid = document.getElementById('resultsGrid');
const resultsTitle = document.getElementById('resultsTitle');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const categoryButtons = document.querySelectorAll('.category-btn');
const quickQuestionButtons = document.querySelectorAll('.quick-question-btn');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Flatten all Q&A data into a single array
    allQAItems = [];
    Object.keys(qaData).forEach(categoryKey => {
        qaData[categoryKey].forEach(item => {
            allQAItems.push({
                ...item,
                mainCategory: categoryKey
            });
        });
    });

    // Display all Q&A items initially
    displayResults(allQAItems);
    updateResultsCount(allQAItems.length);

    // Set up event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Search input - real-time search
    searchInput.addEventListener('input', handleSearch);

    // Category filter buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', handleCategoryFilter);
    });

    // Quick question buttons
    quickQuestionButtons.forEach(button => {
        button.addEventListener('click', handleQuickQuestion);
    });
}

function handleSearch(event) {
    currentSearchTerm = event.target.value.trim().toLowerCase();
    filterAndDisplayResults();
}

function handleCategoryFilter(event) {
    // Remove active class from all buttons
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    currentFilter = event.target.dataset.category;
    filterAndDisplayResults();
    
    // Update results title
    updateResultsTitle();
}

function handleQuickQuestion(event) {
    const question = event.target.dataset.question;
    searchInput.value = question;
    currentSearchTerm = question.toLowerCase();
    
    // Reset category filter to 전체
    currentFilter = '전체';
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-category="전체"]').classList.add('active');
    
    filterAndDisplayResults();
    updateResultsTitle();
    
    // Scroll to results
    document.querySelector('.results-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function filterAndDisplayResults() {
    let filteredResults = allQAItems;

    // Apply category filter
    if (currentFilter !== '전체') {
        filteredResults = filteredResults.filter(item => 
            item.mainCategory === currentFilter
        );
    }

    // Apply search filter
    if (currentSearchTerm) {
        filteredResults = filteredResults.filter(item =>
            item.question.toLowerCase().includes(currentSearchTerm) ||
            item.answer.toLowerCase().includes(currentSearchTerm) ||
            item.category.toLowerCase().includes(currentSearchTerm) ||
            item.keywords.some(keyword => 
                keyword.toLowerCase().includes(currentSearchTerm)
            )
        );
    }

    displayResults(filteredResults);
    updateResultsCount(filteredResults.length);
}

function displayResults(results) {
    if (results.length === 0) {
        resultsGrid.style.display = 'none';
        noResults.classList.add('show');
        return;
    }

    resultsGrid.style.display = 'grid';
    noResults.classList.remove('show');

    resultsGrid.innerHTML = results.map(item => createQACard(item)).join('');
}

function createQACard(item) {
    const highlightedQuestion = highlightSearchTerm(item.question, currentSearchTerm);
    const highlightedAnswer = highlightSearchTerm(item.answer, currentSearchTerm);
    
    return `
        <div class="qa-card" data-question="${escapeHtml(item.question)}">
            <div class="qa-card__header">
                <div class="qa-card__category">${item.mainCategory}</div>
                <h3 class="qa-card__question">${highlightedQuestion}</h3>
            </div>
            <div class="qa-card__answer">${highlightedAnswer}</div>
            <div class="qa-card__keywords">
                ${item.keywords.map(keyword => 
                    `<span class="keyword-tag">${highlightSearchTerm(keyword, currentSearchTerm)}</span>`
                ).join('')}
            </div>
        </div>
    `;
}

function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm || searchTerm.length < 2) return text;
    
    const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function updateResultsCount(count) {
    resultsCount.textContent = `${count}개 결과`;
}

function updateResultsTitle() {
    const baseTitle = currentFilter === '전체' ? '모든 Q&A' : `${currentFilter} Q&A`;
    
    if (currentSearchTerm) {
        resultsTitle.textContent = `"${searchInput.value}" 검색 결과`;
    } else {
        resultsTitle.textContent = baseTitle;
    }
}

// Debounce function for search optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search function for better performance
const debouncedSearch = debounce(filterAndDisplayResults, 300);

// Update search handler to use debounced function
searchInput.removeEventListener('input', handleSearch);
searchInput.addEventListener('input', function(event) {
    currentSearchTerm = event.target.value.trim().toLowerCase();
    updateResultsTitle();
    debouncedSearch();
});

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    // Focus search input when pressing '/' key
    if (event.key === '/' && event.target !== searchInput) {
        event.preventDefault();
        searchInput.focus();
    }
    
    // Clear search when pressing Escape
    if (event.key === 'Escape' && event.target === searchInput) {
        searchInput.value = '';
        currentSearchTerm = '';
        filterAndDisplayResults();
        updateResultsTitle();
    }
});

// Add search input placeholder animation
let placeholderIndex = 0;
const placeholders = [
    '궁금한 내용을 검색해보세요...',
    'NotebookLM 사용법을 찾아보세요...',
    '교육 활용 방법을 검색해보세요...',
    'AI 기능에 대해 알아보세요...'
];

// Animate placeholder text every 3 seconds when input is empty
setInterval(() => {
    if (searchInput.value === '' && document.activeElement !== searchInput) {
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        searchInput.placeholder = placeholders[placeholderIndex];
    }
}, 3000);

// Smooth scroll for better UX
function smoothScrollToElement(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Analytics helper (if needed for tracking usage)
function trackSearch(searchTerm, category, resultCount) {
    // This could be connected to analytics service
    console.log('Search Analytics:', {
        searchTerm,
        category,
        resultCount,
        timestamp: new Date().toISOString()
    });
}

// Call analytics on search
const originalFilterAndDisplayResults = filterAndDisplayResults;
filterAndDisplayResults = function() {
    originalFilterAndDisplayResults();
    
    // Track search analytics
    const resultCount = document.querySelectorAll('.qa-card').length;
    trackSearch(currentSearchTerm, currentFilter, resultCount);
};