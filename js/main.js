// -------------------- ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ --------------------
document.addEventListener('DOMContentLoaded', () => {
    // Находим все ссылки в навигации
    const navLinks = document.querySelectorAll('nav a');
    // Получаем имя текущего файла (например, "index.html") из URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // Перебираем ссылки, если href совпадает – добавляем класс active
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// -------------------- ТЁМНАЯ ТЕМА (СОХРАНЕНИЕ В LOCALSTORAGE) --------------------
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    // При загрузке проверяем, была ли сохранена тёмная тема
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Меняем иконку на солнце
    }
    // Обработчик клика по кнопке
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        // Сохраняем выбор в localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        // Меняем иконку: луна для светлой темы, солнце для тёмной
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}