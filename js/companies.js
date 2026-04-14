// -------------------- ОТРИСОВКА КАРТОЧЕК КОМПАНИЙ --------------------
function renderCompanies(field) {
    const container = document.getElementById('companiesContainer');
    container.innerHTML = '';

    // Фильтрация по сфере деятельности
    let filtered = field === 'all' ? companies : companies.filter(c => c.field === field);

    if (filtered.length === 0) {
        container.innerHTML = '<p>Нет компаний в этой сфере.</p>';
        return;
    }

    filtered.forEach(company => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3><i class="fas fa-building"></i> ${company.name}</h3>
            <p>${company.description}</p>
            <p><strong><i class="fas fa-tag"></i> Сфера:</strong> ${company.field}</p>
            <a href="${company.vacancies}" target="_blank" class="btn"><i class="fas fa-external-link-alt"></i> Вакансии →</a>
        `;
        container.appendChild(card);
    });
}

// -------------------- ФИЛЬТР --------------------
document.getElementById('fieldFilter').addEventListener('change', (e) => {
    renderCompanies(e.target.value);
});

// -------------------- ЗАПУСК --------------------
renderCompanies('all');