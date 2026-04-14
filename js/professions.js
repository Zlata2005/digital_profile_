// -------------------- ОТРИСОВКА КАРТОЧЕК ПРОФЕССИЙ --------------------
function renderProfessions(category) {
    const container = document.getElementById('professionsContainer');
    container.innerHTML = ''; // Очищаем контейнер

    // Фильтрация данных по категории
    let filtered = professions;
    if (category !== 'all') {
        filtered = professions.filter(p => p.category === category);
    }

    if (filtered.length === 0) {
        container.innerHTML = '<p>Нет профессий в этой категории.</p>';
        return;
    }

    // Проходим по каждой профессии и создаём карточку
    filtered.forEach(prof => {
        const card = document.createElement('div');
        card.className = 'card';

        // Определяем стиль бейджа в зависимости от востребованности
        let demandClass = '', demandText = '';
        if (prof.demand === 'высокий') {
            demandClass = 'demand-high';
            demandText = 'Высокий спрос';
        } else if (prof.demand === 'средний') {
            demandClass = 'demand-medium';
            demandText = 'Средний спрос';
        } else {
            demandClass = 'demand-low';
            demandText = 'Низкий спрос';
        }

        // Заполняем HTML карточки
        card.innerHTML = `
            <h3><i class="fas fa-code"></i> ${prof.title}</h3>
            <p>${prof.description.substring(0, 90)}...</p>
            <div class="salary">💰 ${prof.salary.average.toLocaleString()} руб./мес</div>
            <div class="demand ${demandClass}">${demandText}</div>
            <button onclick="showDetails(${prof.id})"><i class="fas fa-info-circle"></i> Подробнее</button>
        `;
        container.appendChild(card);
    });
}

// -------------------- ПОКАЗ ДЕТАЛЬНОЙ ИНФОРМАЦИИ --------------------
function showDetails(id) {
    const prof = professions.find(p => p.id === id);
    if (!prof) return;

    // Находим названия компаний по их id
    const companyNames = prof.companies.map(cId => {
        const company = companies.find(c => c.id === cId);
        return company ? company.name : 'Неизвестно';
    }).join(', ');

    // Находим названия учебных заведений
    const eduNames = prof.education.map(eId => {
        const edu = education.find(e => e.id === eId);
        return edu ? edu.name : 'Неизвестно';
    }).join(', ');

    // Выводим всплывающее окно (можно заменить на модальное)
    alert(`
        ${prof.title}
        Описание: ${prof.description}
        Навыки: ${prof.skills.join(', ')}
        Зарплата: от ${prof.salary.min.toLocaleString()} до ${prof.salary.max.toLocaleString()} руб.
        Востребованность: ${prof.demand}
        Где работать: ${companyNames}
        Где учиться: ${eduNames}
    `);
}

// -------------------- ФИЛЬТР ПО КАТЕГОРИИ --------------------
document.getElementById('categoryFilter').addEventListener('change', (e) => {
    renderProfessions(e.target.value);
});

// -------------------- ИНИЦИАЛИЗАЦИЯ --------------------
renderProfessions('all');