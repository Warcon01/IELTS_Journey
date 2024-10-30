const translations = {
    en: {
        title: 'IELTS Journey',
        welcomeMessage: 'Welcome to the IELTS Journey website!',
        welcomeParagraph: 'Stay with us and get higher scores on the IELTS!',
        quote: '"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela',
        faqTitle: 'FAQ:',
        faq1: 'What is IELTS?',
        faq1Answer: 'IELTS is the International English Language Testing System, which measures the language proficiency of people who want to study or work where English is used as a language of communication.',
        faq2: 'How can I register for IELTS?',
        faq2Answer: 'You can register online on the official IELTS website or through an authorized test center.',
        faq3: 'What sections are there in IELTS?',
        faq3Answer: 'IELTS consists of four sections: Listening, Writing, Reading, Speaking.',
        faq4: 'What is the highest score I can get in IELTS?',
        faq4Answer: 'The highest score you can get in IELTS is 9.0.',
        tutorsTitle: 'Our Tutors:',
        contactTitle: 'Contact Us',
        namePlaceholder: 'Name',
        surnamePlaceholder: 'Surname',
        emailPlaceholder: 'Email',
        submitButton: 'Submit',
        subscribeTitle: 'Subscribe to get notified about our special offers.'
    },
    ru: {
        title: 'Путешествие по IELTS',
        welcomeMessage: 'Добро пожаловать на сайт IELTS Journey!',
        welcomeParagraph: 'Оставайтесь с нами и получайте более высокие баллы на IELTS!',
        quote: '"Образование — это самое мощное оружие, которым вы можете изменить мир." - Нельсон Мандела',
        faqTitle: 'Часто задаваемые вопросы:',
        faq1: 'Что такое IELTS?',
        faq1Answer: 'IELTS — это Международная система тестирования английского языка, которая оценивает владение языком для тех, кто хочет учиться или работать там, где используется английский язык.',
        faq2: 'Как я могу зарегистрироваться на IELTS?',
        faq2Answer: 'Вы можете зарегистрироваться онлайн на официальном сайте IELTS или через авторизованный центр тестирования.',
        faq3: 'Какие разделы есть в IELTS?',
        faq3Answer: 'IELTS состоит из четырех разделов: Аудирование, Письмо, Чтение, Разговор.',
        faq4: 'Какой максимальный балл я могу получить на IELTS?',
        faq4Answer: 'Максимальный балл, который вы можете получить на IELTS, — 9.0.',
        tutorsTitle: 'Наши Репетиторы:',
        contactTitle: 'Свяжитесь с нами',
        namePlaceholder: 'Имя',
        surnamePlaceholder: 'Фамилия',
        emailPlaceholder: 'Электронная почта',
        submitButton: 'Отправить',
        subscribeTitle: 'Подпишитесь, чтобы получать уведомления о наших специальных предложениях.'
    },
    kk: {
        title: 'IELTS Сапары',
        welcomeMessage: 'IELTS Journey веб-сайтына қош келдіңіздер!',
        welcomeParagraph: 'Бізбен бірге болып, IELTS бойынша жоғары балл алыңыздар!',
        quote: '"Білім - бұл әлемді өзгерте алатын ең қуатты қару." - Нельсон Мандела',
        faqTitle: 'Жиі қойылатын сұрақтар:',
        faq1: 'IELTS деген не?',
        faq1Answer: 'IELTS — бұл ағылшын тілін оқу немесе жұмыс істеуге арналған халықаралық тілдік тестілеу жүйесі.',
        faq2: 'IELTS-ке қалай тіркелуге болады?',
        faq2Answer: 'Сіз IELTS-тің ресми сайтында немесе уәкілетті тестілеу орталығы арқылы онлайн тіркеле аласыз.',
        faq3: 'IELTS қандай бөлімдерден тұрады?',
        faq3Answer: 'IELTS төрт бөлімнен тұрады: Тыңдау, Жазу, Оқу, Сөйлеу.',
        faq4: 'IELTS-те ең жоғары балл қанша?',
        faq4Answer: 'IELTS емтиханында ең жоғары балл 9.0.',
        tutorsTitle: 'Біздің Тәлімгерлеріміз:',
        contactTitle: 'Бізбен байланысыңыз',
        namePlaceholder: 'Есім',
        surnamePlaceholder: 'Тегі',
        emailPlaceholder: 'Электрондық пошта',
        submitButton: 'Жіберу',
        subscribeTitle: 'Арнайы ұсыныстарымыз туралы хабарлама алу үшін жазылыңыз.'
    }
};

function changeLanguage() {
    const selectedLanguage = document.getElementById('language-selector').value;

    document.querySelector('header h1').innerText = translations[selectedLanguage].title;

    document.getElementById('welcome-message').innerText = translations[selectedLanguage].welcomeMessage;
    document.getElementById('welcome-paragraph').innerText = translations[selectedLanguage].welcomeParagraph;

    document.getElementById('quote').innerText = translations[selectedLanguage].quote;

    document.getElementById('faq-title').innerText = translations[selectedLanguage].faqTitle;
    document.getElementById('faq1-question').innerText = translations[selectedLanguage].faq1;
    document.getElementById('faq1').innerText = translations[selectedLanguage].faq1Answer;
    document.getElementById('faq2-question').innerText = translations[selectedLanguage].faq2;
    document.getElementById('faq2').innerText = translations[selectedLanguage].faq2Answer;
    document.getElementById('faq3-question').innerText = translations[selectedLanguage].faq3;
    document.getElementById('faq3').innerText = translations[selectedLanguage].faq3Answer;
    document.getElementById('faq4-question').innerText = translations[selectedLanguage].faq4;
    document.getElementById('faq4').innerText = translations[selectedLanguage].faq4Answer;

    document.querySelector('#tutors h2').innerText = translations[selectedLanguage].tutorsTitle;

    document.getElementById('contact-title').innerText = translations[selectedLanguage].contactTitle;
    document.getElementById('name-input').placeholder = translations[selectedLanguage].namePlaceholder;
    document.getElementById('surname-input').placeholder = translations[selectedLanguage].surnamePlaceholder;
    document.getElementById('email-input').placeholder = translations[selectedLanguage].emailPlaceholder;

    document.getElementById('subscribe-title').innerText = translations[selectedLanguage].subscribeTitle;

    document.getElementById('submit-button').innerText = translations[selectedLanguage].submitButton;
}
