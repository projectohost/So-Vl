
const container = document.getElementById("favorites");


// =========================
// Тури
// =========================

const tours = [

    {
        title: "Анталія",
        country: "Туреччина",
        image: "https://images.unsplash.com/photo-1541417904950-b855846fe074"
    },

    {
        title: "Кемер",
        country: "Туреччина",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },

    {
        title: "Хургада",
        country: "Єгипет",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206"
    },

    {
        title: "Шарм-ель-Шейх",
        country: "Єгипет",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECL0dccbJj_kPwm-zUOdO25rQtmUCQ2bWXg&s"
    },

    {
        title: "Рим",
        country: "Італія",
        image: "https://images.unsplash.com/photo-1529260830199-42c24126f198"
    },

    {
        title: "Мілан",
        country: "Італія",
        image: "https://ita.travel/user/blogimg/leto/lombardie/milan/milan.jpg"
    },

    {
        title: "Афіни",
        country: "Греція",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235"
    },

    {
        title: "Барселона",
        country: "Іспанія",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded"
    },

    {
        title: "Париж",
        country: "Франція",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    }

];


// =========================
// Отримуємо обране
// =========================

let fav = JSON.parse(
    localStorage.getItem("favorites")
) || [];


// =========================
// Виведення обраного
// =========================

function render() {

    if (fav.length === 0) {

        container.innerHTML = `
            <div class="empty-favorites">

                <h2>Немає обраних турів</h2>

                <p>
                    Додайте тури до обраного,
                    щоб вони з'явилися тут.
                </p>

            </div>
        `;

        return;
    }


    container.innerHTML = fav.map(title => {

        // Знаходимо тур у масиві tours
        const tour = tours.find(
            item => item.title === title
        );


        // Якщо тур не знайдений
        if (!tour) {

            return `
                <div class="card">

                    <div class="info">

                        <h2>${title}</h2>

                        <button
                            onclick="removeFav('${title}')"
                        >
                            Видалити
                        </button>

                    </div>

                </div>
            `;
        }


        // =========================
        // Картка обраного туру
        // =========================

        return `

            <div class="card favorite-card">

                <img
                    src="${tour.image}"
                    alt="${tour.title}"
                    class="favorite-image"
                >


                <div class="info">

                    <h2>
                        ${tour.title}
                    </h2>


                    <p class="country">
                        ${tour.country}
                    </p>


                    <div class="favorite-buttons">

                        <button
                            class="hotels-btn"
                            onclick="openHotels('${tour.country}')"
                        >
                            Переглянути готелі
                        </button>


                        <button
                            class="delete-btn"
                            onclick="removeFav('${tour.title}')"
                        >
                            Видалити
                        </button>

                    </div>

                </div>

            </div>

        `;

    }).join("");
}


// =========================
// Перейти до готелів КРАЇНИ
// =========================

function openHotels(country) {

    // Знаходимо будь-який тур цієї країни,
    // щоб передати його фотографію

    const tour = tours.find(
        item => item.country === country
    );


    let image = "";

    if (tour) {
        image = tour.image;
    }


    window.location.href =
        "hotels.html?country=" +
        encodeURIComponent(country) +
        "&image=" +
        encodeURIComponent(image);

}


// =========================
// Видалити з обраного
// =========================

function removeFav(title) {

    fav = fav.filter(
        item => item !== title
    );


    localStorage.setItem(
        "favorites",
        JSON.stringify(fav)
    );


    render();

}


// =========================
// Запуск
// =========================

render();

