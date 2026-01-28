// ========== ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ (БЕЗОПАСНАЯ ВЕРСИЯ) ==========

// Функция для безопасного логирования (игнорирует ошибки расширений)
function safeLog(message) {
    try {
        console.log(message);
    } catch (e) {
        // Игнорируем ошибки консоли
    }
}

// Инициализация темы
function initTheme() {
    try {
        const savedTheme = localStorage.getItem('motobezpaniki-theme');
        
        // ЛОГИКА: Если тема сохранена — берем её. Если нет — ВСЕГДА ставим 'dark'.
        let themeToApply = savedTheme ? savedTheme : 'dark';
        
        // Применяем тему к тегу <html>
        document.documentElement.setAttribute('data-theme', themeToApply);
        
        // Синхронизируем состояние ползунка (чекбокса)
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.checked = (themeToApply === 'dark');
        }
        
        safeLog('Применена тема по умолчанию:', themeToApply);
    } catch (error) {
        safeLog('Ошибка темы:', error.message);
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}
// Настройка переключателя
function setupThemeToggle() {
    try {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) {
            safeLog('Переключатель темы не найден!');
            return;
        }
        
        safeLog('Переключатель найден, настраиваем...');
        
        // Вешаем обработчик
        themeToggle.addEventListener('change', function() {
            safeLog('Кликнули переключатель. Состояние:', this.checked);
            
            try {
                if (this.checked) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('motobezpaniki-theme', 'dark');
                    safeLog('Переключили на ТЁМНУЮ тему');
                } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('motobezpaniki-theme', 'light');
                    safeLog('Переключили на СВЕТЛУЮ тему');
                }
            } catch (error) {
                safeLog('Ошибка при переключении темы:', error.message);
            }
        });
        
        safeLog('Переключатель настроен успешно');
    } catch (error) {
        safeLog('Ошибка настройки переключателя:', error.message);
    }
}

// ========== ОСНОВНОЙ КОД ==========

// Запускаем когда DOM загружен
document.addEventListener('DOMContentLoaded', function() {
    safeLog('====== САЙТ ЗАГРУЖЕН ======');
    
    // Инициализируем тему
    initTheme();
    setupThemeToggle();
    
    // Мобильное меню
    try {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', function() {
                const isVisible = navMenu.style.display === 'flex';
                navMenu.style.display = isVisible ? 'none' : 'flex';
                
                if (!isVisible) {
                    navMenu.style.flexDirection = 'column';
                    navMenu.style.position = 'absolute';
                    navMenu.style.top = '100%';
                    navMenu.style.left = '0';
                    navMenu.style.width = '100%';
                    navMenu.style.backgroundColor = 'white';
                    navMenu.style.padding = '20px';
                    navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    if (document.documentElement.getAttribute('data-theme') === 'dark') {
                        navMenu.style.backgroundColor = '#1e1e1e';
                    }
                }
            });
        }
    } catch (error) {
        safeLog('Ошибка мобильного меню:', error.message);
    }
    
    // Плавная прокрутка
    try {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!') return;
                
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Закрываем мобильное меню
                    if (window.innerWidth <= 768) {
                        const navMenu = document.querySelector('.nav-menu');
                        if (navMenu) navMenu.style.display = 'none';
                    }
                }
            });
        });
    } catch (error) {
        safeLog('Ошибка плавной прокрутки:', error.message);
    }
    
    // Проверяем переменные CSS
    try {
        const rootStyles = getComputedStyle(document.documentElement);
        const hasDarkTheme = rootStyles.getPropertyValue('--calm-dark').trim() === '#f8f9fa';
        safeLog('CSS переменные загружены:', hasDarkTheme ? 'да' : 'нет');
    } catch (error) {
        safeLog('Ошибка проверки CSS переменных:', error.message);
    }
});

// ========== CSS ДЛЯ ТЁМНОЙ ТЕМЫ (инъекция) ==========

// Проверяем, не добавлен ли уже наш стиль
if (!document.querySelector('#dark-theme-styles')) {
    const darkThemeCSS = `
        /* Основные переменные для тёмной темы */
        [data-theme="dark"] {
            --calm-dark: #f8f9fa;
            --calm-light: #121212;
            --calm-white: #1e1e1e;
            --calm-gray: #6c757d;
            --calm-blue: #4d7cfe;
            --calm-light-blue: #6a9eff;
            --calm-green: #5ac8fa;
            --calm-accent: #9d4edd;
            --calm-warning: #ff6b9d;
        }
        
        [data-theme="dark"] body {
            background-color: var(--calm-light) !important;
            color: var(--calm-dark) !important;
        }
        
        [data-theme="dark"] .navbar {
            background-color: var(--calm-white) !important;
            border-bottom: 1px solid #333;
        }
        
        [data-theme="dark"] .logo-moto {
            color: var(--calm-dark) !important;
        }
        
        [data-theme="dark"] .logo-bezpaniki {
            color: var(--calm-blue) !important;
        }
        
        [data-theme="dark"] .nav-link {
            color: var(--calm-dark) !important;
        }
        
        [data-theme="dark"] .nav-link:hover {
            color: var(--calm-blue) !important;
        }
        
        [data-theme="dark"] .hero {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
        }
        
        [data-theme="dark"] .section-calm {
            background: var(--calm-white) !important;
        }
        
        [data-theme="dark"] .section-confident {
            background: linear-gradient(to bottom, #121212, #1a1a1a) !important;
        }
        
        [data-theme="dark"] .emergency-card {
            background: #252525 !important;
            color: #e9ecef !important;
            border-left: 5px solid var(--calm-warning);
        }
        
        [data-theme="dark"] .emergency-link {
            background: #333 !important;
            color: #e9ecef !important;
        }
        
        [data-theme="dark"] .emergency-link:hover {
            background: var(--calm-blue) !important;
            color: white !important;
        }
        
        [data-theme="dark"] .feature {
            background: #252525 !important;
            color: #e9ecef !important;
        }
        
        [data-theme="dark"] .feature h3 {
            color: #f8f9fa !important;
        }
        
        [data-theme="dark"] .maintenance-card {
            background: #252525 !important;
            color: #e9ecef !important;
        }
        
        [data-theme="dark"] .maintenance-card h3 {
            color: #f8f9fa !important;
        }
        
        [data-theme="dark"] .checklist li {
            color: #e9ecef !important;
        }
        
        [data-theme="dark"] .cta-card {
            background: #252525 !important;
            color: #e9ecef !important;
        }
        
        [data-theme="dark"] .footer {
            background: #0a0a0a !important;
            color: #e9ecef !important;
        }
        
        [data-theme="dark"] .footer-column a {
            color: #adb5bd !important;
        }
        
        [data-theme="dark"] .footer-column a:hover {
            color: var(--calm-blue) !important;
        }
        
        [data-theme="dark"] .btn-confident {
            background: #252525 !important;
            color: #e9ecef !important;
            border: 2px solid var(--calm-blue) !important;
        }
        
        /* Плавные переходы */
        body, .navbar, .section, .feature, .maintenance-card,
        .emergency-card, .footer, .btn, .nav-link, .logo-moto, .logo-bezpaniki {
            transition: background-color 0.5s ease, 
                        color 0.5s ease, 
                        border-color 0.5s ease !important;
        }
    `;
    
    const style = document.createElement('style');
    style.id = 'dark-theme-styles';
    style.textContent = darkThemeCSS;
    document.head.appendChild(style);
    
    safeLog('Стили тёмной темы добавлены');
}
