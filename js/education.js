// -------------------- ОТРИСОВКА КАРТОЧЕК УЧЕБНЫХ ЗАВЕДЕНИЙ --------------------
function renderEducation(field) {
    const container = document.getElementById('educationContainer');
    container.innerHTML = '';

    // Фильтрация: используем includes, т.к. поле может быть "IT/Инженерия"
    let filtered = field === 'all' ? education : education.filter(e => e.field.includes(field));

    if (filtered.length === 0) {
        container.innerHTML = '<p>Нет учебных заведений в этой сфере.</p>';
        return;
    }

    filtered.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3><i class="fas fa-university"></i> ${edu.name}</h3>
            <p>${edu.description}</p>
            <p><strong><i class="fas fa-graduation-cap"></i> Направление:</strong> ${edu.field}</p>
            <a href="${edu.link}" target="_blank" class="btn"><i class="fas fa-external-link-alt"></i> Сайт →</a>
        `;
        container.appendChild(card);
    });
}

// -------------------- ФИЛЬТР --------------------
document.getElementById('eduFieldFilter').addEventListener('change', (e) => {
    renderEducation(e.target.value);
});

// -------------------- ЗАПУСК --------------------
renderEducation('all');