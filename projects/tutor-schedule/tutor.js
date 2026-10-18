const languageButton=document.querySelector('#language');
let language=localStorage.getItem('portfolio-language')||'ru';
function renderLanguage(){document.documentElement.lang=language;document.querySelectorAll('[data-ru][data-en]').forEach(el=>{el.textContent=el.dataset[language]});languageButton.textContent=language==='ru'?'EN':'RU';languageButton.setAttribute('aria-label',language==='ru'?'Switch to English':'Переключить на русский');document.title=document.body.classList.contains('android-page')?(language==='ru'?'Расписание репетитора для Android — Кирилл Кириченко':'Tutor Schedule for Android — Kirill Kirichenko'):(language==='ru'?'Расписание репетитора — Кирилл Кириченко':'Tutor Schedule — Kirill Kirichenko')}
languageButton.addEventListener('click',()=>{language=language==='ru'?'en':'ru';localStorage.setItem('portfolio-language',language);renderLanguage()});
document.querySelector('#year').textContent=new Date().getFullYear();renderLanguage();
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.04,rootMargin:'0px 0px -6% 0px'});revealItems.forEach(item=>observer.observe(item))}else revealItems.forEach(item=>item.classList.add('is-visible'));
