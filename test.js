// ========== ТЕСТ: ВЫБОР ПЕРВОГО МОТОЦИКЛА ==========

// Вопросы и варианты ответов
const testQuestions = [
    {
        id: 1,
        question: "Какой у вас опыт вождения?",
        options: [
            {
                text: "Ноль, только начинаю",
                icon: "fas fa-baby",
                value: "beginner",
                scores: { classic: 3, cruiser: 2, scooter: 4, adventure: 1 }
            },
            {
                text: "Ездил(а) на скутере/мопеде",
                icon: "fas fa-scooter",
                value: "scooter",
                scores: { classic: 2, cruiser: 1, scooter: 3, adventure: 1 }
            },
            {
                text: "Есть опыт вождения автомобиля",
                icon: "fas fa-car",
                value: "car",
                scores: { classic: 3, cruiser: 2, scooter: 2, adventure: 2 }
            },
            {
                text: "Уже ездил(а) на мотоцикле",
                icon: "fas fa-motorcycle",
                value: "rider",
                scores: { classic: 3, cruiser: 3, scooter: 1, adventure: 3 }
            }
        ]
    },
    {
        id: 2,
        question: "Где планируете ездить чаще всего?",
        options: [
            {
                text: "В городе, по делам",
                icon: "fas fa-city",
                value: "city",
                scores: { classic: 3, cruiser: 2, scooter: 4, adventure: 1 }
            },
            {
                text: "Загородные трассы",
                icon: "fas fa-road",
                value: "highway",
                scores: { classic: 3, cruiser: 4, scooter: 1, adventure: 3 }
            },
            {
                text: "И по городу, и за городом",
                icon: "fas fa-exchange-alt",
                value: "mixed",
                scores: { classic: 4, cruiser: 3, scooter: 2, adventure: 4 }
            },
            {
                text: "Гравий, лесные дороги",
                icon: "fas fa-tree",
                value: "offroad",
                scores: { classic: 1, cruiser: 1, scooter: 1, adventure: 5 }
            }
        ]
    },
    {
        id: 3,
        question: "Какой стиль езды вам ближе?",
        options: [
            {
                text: "Спокойный, расслабленный",
                icon: "fas fa-peace",
                value: "relaxed",
                scores: { classic: 3, cruiser: 4, scooter: 3, adventure: 2 }
            },
            {
                text: "Динамичный, активный",
                icon: "fas fa-running",
                value: "active",
                scores: { classic: 4, cruiser: 2, scooter: 3, adventure: 4 }
            },
            {
                text: "Практичный, удобный",
                icon: "fas fa-user-check",
                value: "practical",
                scores: { classic: 3, cruiser: 2, scooter: 5, adventure: 2 }
            },
            {
                text: "Экспериментальный, вне дорог",
                icon: "fas fa-hiking",
                value: "explorer",
                scores: { classic: 2, cruiser: 1, scooter: 1, adventure: 5 }
            }
        ]
    },
    {
        id: 4,
        question: "Ваш рост?",
        options: [
            {
                text: "До 170 см",
                icon: "fas fa-arrow-down",
                value: "short",
                scores: { classic: 4, cruiser: 2, scooter: 5, adventure: 1 }
            },
            {
                text: "170-180 см",
                icon: "fas fa-arrows-alt-h",
                value: "medium",
                scores: { classic: 5, cruiser: 4, scooter: 4, adventure: 3 }
            },
            {
                text: "180-190 см",
                icon: "fas fa-arrow-up",
                value: "tall",
                scores: { classic: 3, cruiser: 5, scooter: 2, adventure: 4 }
            },
            {
                text: "Выше 190 см",
                icon: "fas fa-long-arrow-alt-up",
                value: "very-tall",
                scores: { classic: 2, cruiser: 3, scooter: 1, adventure: 5 }
            }
        ]
    },
    {
        id: 5,
        question: "Какой бюджет на покупку?",
        options: [
            {
                text: "До 100 000 руб",
                icon: "fas fa-ruble-sign",
                value: "low",
                scores: { classic: 3, cruiser: 2, scooter: 4, adventure: 1 }
            },
            {
                text: "100 000 - 300 000 руб",
                icon: "fas fa-money-bill-wave",
                value: "medium",
                scores: { classic: 4, cruiser: 3, scooter: 3, adventure: 2 }
            },
            {
                text: "300 000 - 500 000 руб",
                icon: "fas fa-chart-line",
                value: "high",
                scores: { classic: 5, cruiser: 5, scooter: 2, adventure: 4 }
            },
            {
                text: "Не ограничен",
                icon: "fas fa-crown",
                value: "unlimited",
                scores: { classic: 4, cruiser: 5, scooter: 1, adventure: 5 }
            }
        ]
    },
    {
        id: 6,
        question: "Что важнее: комфорт или управляемость?",
        options: [
            {
                text: "Комфорт, чтобы не уставать",
                icon: "fas fa-couch",
                value: "comfort",
                scores: { classic: 3, cruiser: 5, scooter: 4, adventure: 3 }
            },
            {
                text: "Управляемость, чёткий контроль",
                icon: "fas fa-bullseye",
                value: "handling",
                scores: { classic: 5, cruiser: 2, scooter: 3, adventure: 4 }
            },
            {
                text: "Универсальность",
                icon: "fas fa-balance-scale",
                value: "balance",
                scores: { classic: 4, cruiser: 3, scooter: 3, adventure: 4 }
            },
            {
                text: "Проходимость",
                icon: "fas fa-mountain",
                value: "offroad",
                scores: { classic: 1, cruiser: 1, scooter: 1, adventure: 5 }
            }
        ]
    },
    {
        id: 7,
        question: "Насколько важна экономичность?",
        options: [
            {
                text: "Очень, чтобы реже заправлять",
                icon: "fas fa-gas-pump",
                value: "very",
                scores: { classic: 4, cruiser: 2, scooter: 5, adventure: 1 }
            },
            {
                text: "Важна, но не критично",
                icon: "fas fa-filter",
                value: "medium",
                scores: { classic: 4, cruiser: 3, scooter: 4, adventure: 2 }
            },
            {
                text: "Готов платить за удовольствие",
                icon: "fas fa-gem",
                value: "low",
                scores: { classic: 3, cruiser: 4, scooter: 2, adventure: 3 }
            },
            {
                text: "Не имеет значения",
                icon: "fas fa-infinity",
                value: "none",
                scores: { classic: 2, cruiser: 5, scooter: 1, adventure: 5 }
            }
        ]
    }
];

// Типы мотоциклов и их описания
const motorcycleTypes = {
    classic: {
        name: "Классик / Нейкед",
        description: "Универсальный вариант для первого знакомства с миром мото. Прямая посадка, простой дизайн и предсказуемое поведение на дороге делают его идеальным для обучения.",
        advantages: [
            "Простота управления и обслуживания",
            "Универсальность (город/трасса)",
            "Огромный выбор на рынке",
            "Недорогие запчасти"
        ],
        considerations: [
            "Не самый комфортный для дальних поездок",
            "Обычно слабая ветрозащита",
            "Стандартный дизайн, не для тех, кто хочет выделяться"
        ],
        examples: ["Honda CB500F", "Yamaha MT-03", "Kawasaki Z400", "BMW G310R"],
        power: "25-50 л.с.",
        weight: "160-200 кг",
        price: "от 300 000 руб",
        fuel: "4-5 л/100км"
    },
    cruiser: {
        name: "Круизер / Чоппер",
        description: "Мотоцикл для неспешных поездок с низкой посадкой и вытянутыми вперед подножками. Идеален для расслабленной езды по прямым дорогам.",
        advantages: [
            "Очень комфортная посадка",
            "Мощный низкий крутящий момент",
            "Эффектный внешний вид",
            "Хорош для высоких райдеров"
        ],
        considerations: [
            "Слабая маневренность в городе",
            "Большой вес",
            "Высокий расход топлива у больших объёмов",
            "Не для активной езды"
        ],
        examples: ["Harley-Davidson Street 500", "Honda Rebel 500", "Yamaha XVS 650"],
        power: "30-60 л.с.",
        weight: "220-280 кг",
        price: "от 400 000 руб",
        fuel: "5-7 л/100км"
    },
    scooter: {
        name: "Скутер / Макси-скутер",
        description: "Практичный выбор для города. Автоматическая коробка передач, место под седлом для хранения вещей и отличная маневренность в пробках.",
        advantages: [
            "Автоматическая коробка (нет переключения передач)",
            "Встроенный багажник",
            "Отличная маневренность",
            "Низкая стоимость обслуживания"
        ],
        considerations: [
            "Не для трассы и высоких скоростей",
            "Маленькие колёса — хуже на неровностях",
            "Ограниченный выбор мощных моделей",
            "Часто воспринимается как «не серьёзный» мотоцикл"
        ],
        examples: ["Honda PCX 150", "Yamaha XMAX 300", "Suzuki Burgman 200"],
        power: "10-30 л.с.",
        weight: "120-180 кг",
        price: "от 150 000 руб",
        fuel: "2-4 л/100км"
    },
    adventure: {
        name: "Эндуро / Турист",
        description: "Мотоцикл для тех, кто хочет свободы передвижения. Подходит для асфальта, гравия и лёгкого бездорожья. Высокая посадка и длинноходная подвеска.",
        advantages: [
            "Универсальность (асфальт/бездорожье)",
            "Высокий клиренс",
            "Комфорт на дальних расстояниях",
            "Отличная ветрозащита"
        ],
        considerations: [
            "Высокий центр тяжести (сложнее для новичков)",
            "Большой вес у полноразмерных моделей",
            "Высокая стоимость",
            "Громоздкий для города"
        ],
        examples: ["Kawasaki Versys-X 300", "BMW G310 GS", "Honda CB500X"],
        power: "30-50 л.с.",
        weight: "170-220 кг",
        price: "от 400 000 руб",
        fuel: "4-6 л/100км"
    }
};

// Переменные теста
let currentQuestion = 0;
let userAnswers = [];
let userScores = { classic: 0, cruiser: 0, scooter: 0, adventure: 0 };

// Инициализация теста
function initTest() {
    showQuestion(currentQuestion);
    updateProgress();
    updateNavigation();
}

// Показать вопрос
function showQuestion(questionIndex) {
    const question = testQuestions[questionIndex];
    const questionCard = document.getElementById('questionCard');
    
    let optionsHTML = '';
    question.options.forEach((option, index) => {
        const isSelected = userAnswers[questionIndex] === option.value;
        optionsHTML += `
            <div class="option-card ${isSelected ? 'selected' : ''}" 
                 onclick="selectOption(${questionIndex}, '${option.value}', ${index})">
                <div class="option-icon">
                    <i class="${option.icon}"></i>
                </div>
                <div class="option-title">${option.text}</div>
            </div>
        `;
    });
    
    questionCard.innerHTML = `
        <div class="question-number">${question.id}</div>
        <h2 class="question-text">${question.question}</h2>
        <div class="options-grid">${optionsHTML}</div>
    `;
    
    document.getElementById('currentQuestion').textContent = question.id;
    document.getElementById('totalQuestions').textContent = testQuestions.length;
    
    updateProgress();
}

// Выбор варианта ответа
function selectOption(questionIndex, optionValue, optionIndex) {
    userAnswers[questionIndex] = optionValue;
    
    // Добавляем очки
    const option = testQuestions[questionIndex].options[optionIndex];
    for (const type in option.scores) {
        userScores[type] += option.scores[type];
    }
    
    // Показываем выбранный вариант
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => card.classList.remove('selected'));
    optionCards[optionIndex].classList.add('selected');
    
    // Активируем кнопку "Далее"
    document.getElementById('nextBtn').disabled = false;
    
    console.log('Текущие очки:', userScores);
}

// Обновление прогресс-бара
function updateProgress() {
    const progress = ((currentQuestion + 1) / testQuestions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

// Обновление навигации
function updateNavigation() {
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = userAnswers[currentQuestion] === undefined;
    
    if (currentQuestion === testQuestions.length - 1) {
        document.getElementById('nextBtn').innerHTML = 'Узнать результат <i class="fas fa-flag-checkered"></i>';
    } else {
        document.getElementById('nextBtn').innerHTML = 'Далее <i class="fas fa-arrow-right"></i>';
    }
}

// Следующий вопрос
function nextQuestion() {
    if (userAnswers[currentQuestion] === undefined) {
        alert('Пожалуйста, выберите вариант ответа');
        return;
    }
    
    if (currentQuestion < testQuestions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
        updateNavigation();
    } else {
        showResult();
    }
}

// Предыдущий вопрос
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateNavigation();
    }
}

// Показать результат
function showResult() {
    // Определяем тип мотоцикла с наибольшим количеством очков
    let maxScore = 0;
    let resultType = 'classic';
    
    for (const type in userScores) {
        if (userScores[type] > maxScore) {
            maxScore = userScores[type];
            resultType = type;
        }
    }
    
    const result = motorcycleTypes[resultType];
    
    // Показываем результат
    document.getElementById('questionScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
    // Заполняем данные результата
    document.getElementById('resultMotoName').textContent = result.name;
    document.getElementById('resultDescription').textContent = result.description;
    
    // Преимущества
    const advantagesList = document.getElementById('resultAdvantages');
    advantagesList.innerHTML = '';
    result.advantages.forEach(adv => {
        advantagesList.innerHTML += `<li>${adv}</li>`;
    });
    
    // Что учесть
    const considerationsList = document.getElementById('resultConsiderations');
    considerationsList.innerHTML = '';
    result.considerations.forEach(cons => {
        considerationsList.innerHTML += `<li>${cons}</li>`;
    });
    
    // Характеристики
    const featuresContainer = document.getElementById('resultFeatures');
    featuresContainer.innerHTML = `
        <div class="feature-item">
            <div class="option-icon">
                <i class="fas fa-horse-head"></i>
            </div>
            <div class="option-title">Мощность</div>
            <div>${result.power}</div>
        </div>
        <div class="feature-item">
            <div class="option-icon">
                <i class="fas fa-weight"></i>
            </div>
            <div class="option-title">Вес</div>
            <div>${result.weight}</div>
        </div>
        <div class="feature-item">
            <div class="option-icon">
                <i class="fas fa-tag"></i>
            </div>
            <div class="option-title">Стоимость</div>
            <div>${result.price}</div>
        </div>
        <div class="feature-item">
            <div class="option-icon">
                <i class="fas fa-gas-pump"></i>
            </div>
            <div class="option-title">Расход</div>
            <div>${result.fuel}</div>
        </div>
    `;
    
    // Примеры моделей
    featuresContainer.innerHTML += `
        <div class="feature-item" style="grid-column: 1 / -1;">
            <div class="option-icon">
                <i class="fas fa-motorcycle"></i>
            </div>
            <div class="option-title">Примеры моделей</div>
            <div>${result.examples.join(', ')}</div>
        </div>
    `;
    
    // Сохраняем результат в localStorage для истории
    saveTestResult(resultType);
}

// Сохранить результат теста
function saveTestResult(resultType) {
    const testHistory = JSON.parse(localStorage.getItem('motobezpaniki-test-history') || '[]');
    
    testHistory.push({
        date: new Date().toLocaleDateString('ru-RU'),
        result: resultType,
        score: userScores[resultType]
    });
    
    // Храним только последние 10 результатов
    if (testHistory.length > 10) {
        testHistory.shift();
    }
    
    localStorage.setItem('motobezpaniki-test-history', JSON.stringify(testHistory));
}

// Начать тест заново
function restartTest() {
    currentQuestion = 0;
    userAnswers = [];
    userScores = { classic: 0, cruiser: 0, scooter: 0, adventure: 0 };
    
    document.getElementById('questionScreen').style.display = 'block';
    document.getElementById('resultScreen').style.display = 'none';
    
    initTest();
}

// Поделиться результатом
function shareResult() {
    const resultName = document.getElementById('resultMotoName').textContent;
    const text = `Мой результат теста "Какой мотоцикл вам подходит?" на МотоБезПаники: ${resultName}. Пройдите тест тоже! ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Мой результат теста по выбору мотоцикла',
            text: text,
            url: window.location.href
        });
    } else {
        // Копируем в буфер обмена
        navigator.clipboard.writeText(text).then(() => {
            alert('Результат скопирован в буфер обмена! Поделитесь им в социальных сетях.');
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initTest();
    
    // Вешаем обработчики на кнопки
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    
    // Активируем переключение темы
    if (typeof initTheme === 'function') {
        initTheme();
        setupThemeToggle();
    }
});
