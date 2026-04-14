// -------------------- МАССИВ ПРОФЕССИЙ (8 профессий) --------------------
const professions = [
    { id: 1, title: "Разработчик ПО", category: "IT", description: "Создаёт веб-сервисы, мобильные приложения, ERP-системы. Пишет код, тестирует, внедряет.", skills: ["JavaScript", "Python", "SQL", "Git", "Алгоритмы"], salary: { min: 60000, max: 180000, average: 110000 }, demand: "высокий", companies: [1, 2, 3], education: [1, 3] },
    { id: 2, title: "Кибербезопасник", category: "IT", description: "Защищает сети и данные от взломов. Проводит аудит, настраивает системы защиты.", skills: ["Сети", "Криптография", "Linux", "Python"], salary: { min: 70000, max: 200000, average: 130000 }, demand: "высокий", companies: [1, 4], education: [2, 3] },
    { id: 3, title: "Финансовый аналитик", category: "Финансы", description: "Анализирует бюджеты, прогнозирует риски, готовит отчёты.", skills: ["Excel", "SQL", "1С", "Анализ данных"], salary: { min: 50000, max: 150000, average: 90000 }, demand: "средний", companies: [5, 6], education: [4, 5] },
    { id: 4, title: "Инженер-робототехник", category: "Производство", description: "Разрабатывает роботизированные линии, программирует контроллеры.", skills: ["C++", "Схемотехника", "3D-моделирование", "Arduino"], salary: { min: 55000, max: 160000, average: 100000 }, demand: "средний", companies: [7, 8], education: [2, 6] },
    { id: 5, title: "Data Scientist", category: "IT", description: "Анализирует большие данные, строит модели машинного обучения.", skills: ["Python", "Pandas", "Статистика", "SQL"], salary: { min: 80000, max: 220000, average: 140000 }, demand: "высокий", companies: [1, 2], education: [1, 3] },
    { id: 6, title: "IT-менеджер", category: "Управление", description: "Координирует команду разработки, следит за сроками и бюджетом.", skills: ["Agile", "Scrum", "Jira", "Коммуникации"], salary: { min: 70000, max: 200000, average: 120000 }, demand: "высокий", companies: [3, 5], education: [4] },
    { id: 7, title: "QA-инженер", category: "IT", description: "Находит ошибки в программах, пишет автотесты, проверяет качество.", skills: ["Ручное тестирование", "Автоматизация", "Баг-трекинг"], salary: { min: 50000, max: 150000, average: 90000 }, demand: "высокий", companies: [2, 3], education: [1, 3] },
    { id: 8, title: "Системный администратор", category: "IT", description: "Настраивает серверы, сети, обеспечивает бесперебойную работу.", skills: ["Windows/Linux", "Сети", "Администрирование"], salary: { min: 40000, max: 120000, average: 70000 }, demand: "средний", companies: [4, 7], education: [2, 6] }
];

// -------------------- МАССИВ КОМПАНИЙ (10 компаний) --------------------
const companies = [
    { id: 1, name: "СимбирСофт", field: "IT", description: "Разработка заказного ПО, мобильных приложений.", vacancies: "https://hh.ru/employer/123" },
    { id: 2, name: "Mobyte", field: "IT", description: "Мобильные приложения и веб-сервисы.", vacancies: "https://hh.ru/employer/456" },
    { id: 3, name: 'IT-компания "Эксперт"', field: "IT", description: "Разработка ERP-систем.", vacancies: "#" },
    { id: 4, name: "Кибербез", field: "IT", description: "Аудит безопасности, защита сетей.", vacancies: "#" },
    { id: 5, name: "Банк ВТБ (Ульяновск)", field: "Финансы", description: "Отделение банка, финансовые услуги.", vacancies: "#" },
    { id: 6, name: "Сбербанк", field: "Финансы", description: "Кредитование, вклады, инвестиции.", vacancies: "#" },
    { id: 7, name: "Авиастар-СП", field: "Производство", description: "Авиастроение, производство самолётов.", vacancies: "#" },
    { id: 8, name: "УАЗ", field: "Производство", description: "Автомобильный завод.", vacancies: "#" },
    { id: 9, name: "Ростелеком", field: "IT", description: "Телекоммуникации, облачные сервисы.", vacancies: "#" },
    { id: 10, name: "Альфа-Банк", field: "Финансы", description: "Банковские услуги, финтех.", vacancies: "#" }
];

// -------------------- МАССИВ УЧЕБНЫХ ЗАВЕДЕНИЙ (7 вузов/колледжей) --------------------
const education = [
    { id: 1, name: "УлГУ (ФИСТ)", field: "IT", description: "Факультет информационных систем и технологий.", link: "https://ulsu.ru" },
    { id: 2, name: "УлГТУ (ИАТ)", field: "IT/Инженерия", description: "Институт авиационных технологий.", link: "https://ulstu.ru" },
    { id: 3, name: "УлГТУ (ФИСТ)", field: "IT", description: "Факультет информационных систем и технологий.", link: "https://ulstu.ru" },
    { id: 4, name: "УлГУ (Экономический)", field: "Финансы", description: "Экономический факультет.", link: "https://ulsu.ru" },
    { id: 5, name: "Ульяновский аграрный университет", field: "Финансы", description: "Экономика в АПК.", link: "#" },
    { id: 6, name: "Ульяновский электромеханический колледж", field: "Производство", description: "Специальности по робототехнике.", link: "#" },
    { id: 7, name: "УлГПУ (Факультет математики)", field: "IT", description: "Педагогическое образование + IT.", link: "#" }
];