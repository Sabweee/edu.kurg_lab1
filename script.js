

let question = document.querySelector('.question');
let button_one = document.querySelector('.button_one');
let button_two = document.querySelector('.button_two');
let image = document.querySelector('.image');
let link = document.querySelector('.link > a:nth-child(1)');
const btnReset = document.querySelector('.reset');
const answerList = document.querySelector('.answer_list');

btnReset.addEventListener('click', (evt => {
    location.reload();
}));

function getTemplate(question, answer) {
    return `<li class="info-block">
                        <p class="history__question">Вопрос: ${question}</p>
                        <p class="history__answer">Ответ: ${answer}</p>
                    </li>`;
}

function render(template) {
    answerList.insertAdjacentHTML('beforeend', template);
}

button_one.onclick = function(){
    render(getTemplate(question.textContent, button_one.textContent));

    switch (question.textContent){
        case 'Какого вы пола?':
            question.textContent = "Хотите ли вы экстравагантную прическу?";
            button_one.textContent = "Нет";
            button_two.textContent = "Да";
            break;
        case 'Хотите ли вы экстравагантную прическу?':
            question.textContent = "Какую длину волос хотите?";
            button_one.textContent = "Длинные";
            button_two.textContent = "Короткие";
            break;
        case 'Какую длину волос хотите?':
            question.textContent = "Какая форма лица?";
            button_one.textContent = "Круглое";
            button_two.textContent = "Квадратное";
            break;
        case 'Какая форма лица?':
            question.textContent = "Какая структура волос?";
            button_one.textContent = "Мягкие";
            button_two.textContent = "Жесткие";
            break;
        case 'Какая структура волос?':
            question.textContent = "Тогда вам подойдет прическа : \"Боб\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://hardbro.ru/wp-content/uploads/2019/08/muzhskaya-strizhka-bob-1024x614.jpg";
            break;
        case 'Какая ваша форма лица?':
            question.textContent = "Структура волос";
            button_one.textContent = "Мягкие";
            button_two.textContent = "Жесткие";
            break;
        case 'Структура волос':
            question.textContent = "Тогда вам подойдет прическа : \"Кропп\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://barber-shop.su/wp-content/uploads/2019/05/shaircut-smooth-crop.jpg";
            break;
        case 'Ваша структура волос?':
            question.textContent = "Тогда вам подойдет прическа : \"Бокс\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://gentstyle.ru/wp-content/uploads/2020/07/muzhskaya-strizhka-boks.jpg";
            break;
        case 'Структура ваших волос':
            question.textContent = "Тогда вам подойдет прическа : \"Британка\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://barber-shop.su/wp-content/uploads/2017/06/britanka1.jpg";
            break;
        case 'Какая ваша длина волос?':
            question.textContent = "Тогда вам подойдет прическа : \"Озеро в лесу\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://cs9.pikabu.ru/post_img/big/2016/11/09/6/147868395212468174.jpg";
            break;
        case 'Какую прическу вы хотите?':
            question.textContent = "Длинные ли у вас волосы?";
            button_one.textContent = "да";
            button_two.textContent = "нет";
            break;
        case 'Длинные ли у вас волосы?':
            question.textContent = "Тогда вам подойдет прическа : \"Рога из волос\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://expertpovolosam.com/sites/default/files/styles/large/public/images/1362-17146.jpg?itok=EzQPEDjk";
            break;
        case 'Какую форму лица вы имеете?':
            question.textContent = "Хотите объемную прическу?";
            button_one.textContent = "да";
            button_two.textContent = "нет";
            break;
        case 'Хотите объемную прическу?':
            question.textContent = "Тогда вам подойдет прическа : \"Прическа с кудрями\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://volosomanjaki.com/wp-content/uploads/2020/01/5acf5dafa8c8edc0112bb56139df2c90.jpg";
            break;
        case 'Хотите сделать укладку волос?':
            question.textContent = "Тогда вам подойдет прическа : \"Амазонка\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "http://domashnie-pricheski.ru/wp-content/uploads/2014/05/Image00328.jpg";
            break;
    }
}
button_two.onclick = function(){
    render(getTemplate(question.textContent, button_two.textContent));

    switch (question.textContent) {
        case 'Хотите ли вы экстравагантную прическу?':
            question.textContent = "Какая ваша длина волос?";
            button_one.textContent = "Короткая";
            button_two.textContent = "Длинная";
            break;
        case 'Какая ваша длина волос?':
            question.textContent = "Тогда вам подойдет прическа : \"Ирокез\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://barbercompany.com/image/catalog/article/New2021/9%20scale_1200%20(1024%C3%97768)%20-%20Google%20Chrome%202021-06-09%2008.47.03.jpg";
            break;
        case 'Какую длину волос хотите?':
            question.textContent = "Какая ваша форма лица?";
            button_one.textContent = "Круглое";
            button_two.textContent = "Квадратное";
            break;
        case 'Какая ваша форма лица?':
            question.textContent = "Ваша структура волос?";
            button_one.textContent = "Мягкая";
            button_two.textContent = "Жесткая";
            break;
        case 'Ваша структура волос?':
            question.textContent = "Тогда вам подойдет прическа : \"Теннис\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "http://pricheska-strizhka.ru/wp-content/uploads/2016/12/2d1d6a97be43928553828261033d8e58.jpg";
            break;
        case 'Какой формы лицо?':
            question.textContent = "Структура ваших волос?";
            button_one.textContent = "Мягкая";
            button_two.textContent = "Жесткая";
            break;
        case 'Структура ваших волос?':
            question.textContent = "Тогда вам подойдет прическа : \"Канадка\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://barber.su/imgs/blog/036/36/blg5d677bfadc68f8_82581276.jpg";
            break;
        case 'Какая структура волос?':
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://zirulnik.com/uploadfiles/admin/xMuzhskaya-strizhka-Dvoynoye-kare_novyiy-razmer.jpg.pagespeed.ic.8SA-cEClG6.jpg";
            break;
        case 'Структура волос':
            question.textContent = "Тогда вам подойдет прическа : \"Цезарь\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://barber-shop.su/wp-content/uploads/2019/07/strigka-cesar2.jpg";
            break;
        case 'Какого вы пола?':
            question.textContent = "Какую прическу вы хотите?";
            button_one.textContent = "Экстравагантную";
            button_two.textContent = "Обычную";
            break;
        case 'Какую прическу вы хотите?':
            question.textContent = "Какую форму лица вы имеете?";
            button_one.textContent = "Круглое";
            button_two.textContent = "Квадратное";
            break;
        case 'Какую форму лица вы имеете?':
            question.textContent = "Хотите сделать укладку волос?";
            button_one.textContent = "Да";
            button_two.textContent = "Нет";
            break;
        case 'Хотите сделать укладку волос?':
            question.textContent = "Тогда вам подойдет прическа : \"Изящный боб\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://ohfashion.ru/wp-content/uploads/2021/08/pricheska-bob-za-60-na-osen-2021-2.jpg";
            break;
        case 'Хотите объемную прическу?':
            question.textContent = "Тогда вам подойдет прическа : \"Каре\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://volosomanjaki.com/wp-content/uploads/2021/12/d708426fd4f78fadb923e356ee1150b2.jpg";
            break;
        case 'Длинные ли у вас волосы?':
            question.textContent = "Тогда вам подойдет прическа : \"Каре с челкой\"";
            button_one.classList.add('hidden');
            button_two.classList.add('hidden');
            image.src = "https://volosomanjaki.com/wp-content/uploads/2019/11/8b7ec05542fc53b648c9d8bf889f2b5a.jpg";
            break;
    }
}
