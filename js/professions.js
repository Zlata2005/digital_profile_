// Функция отображения карточек профессий (без изменений)
function renderProfessions(category) {
    const container = document.getElementById('professionsContainer');
    container.innerHTML = '';
    let filtered = professions;
    if (category !== 'all') {
        filtered = professions.filter(p => p.category === category);
    }
    if (filtered.length === 0) {
        container.innerHTML = '<p>Нет профессий в этой категории.</p>';
        return;
    }
    filtered.forEach(prof => {
        const card = document.createElement('div');
        card.className = 'card';
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

// НОВАЯ ФУНКЦИЯ - переход на страницу деталей
function showDetails(id) {
    window.location.href = `profession-detail.html?id=${id}`;
}

// Фильтр
document.getElementById('categoryFilter').addEventListener('change', (e) => {
    renderProfessions(e.target.value);
});

// Инициализация
renderProfessions('all');
