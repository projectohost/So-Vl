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

// =====================
// DOM
// =====================

const catalog = document.getElementById("catalog");
const search = document.getElementById("search");
const country = document.getElementById("country");

// =====================
// РЕНДЕР
// =====================

function render(data){

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    catalog.innerHTML = "";

    data.forEach(tour => {

        const isFav = favorites.includes(tour.title);

        catalog.innerHTML += `
        <div class="card">

            <img src="${tour.image}" alt="${tour.title}">

            <div class="info">

                <h2>${tour.title}</h2>

                <p>🌍 ${tour.country}</p>

                <div class="buttons">

                    <button class="favorite ${isFav ? "active" : ""}" data-title="${tour.title}">
                        ❤️
                    </button>

                    <button class="book" data-country="${tour.country}">
                        Переглянути готелі
                    </button>

                </div>

            </div>

        </div>
        `;

    });

    addEvents();

}

// =====================
// ПОДІЇ
// =====================

function addEvents(){

    // Обране
    document.querySelectorAll(".favorite").forEach(btn=>{

        btn.onclick = ()=>{

            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

            const title = btn.dataset.title;

            if(favorites.includes(title)){

                favorites = favorites.filter(t=>t!==title);

                btn.classList.remove("active");

            }else{

                favorites.push(title);

                btn.classList.add("active");

            }

            localStorage.setItem("favorites",JSON.stringify(favorites));

        };

    });

    // Перехід до готелів
    document.querySelectorAll(".book").forEach(btn=>{

        btn.onclick = ()=>{

            const country = btn.dataset.country;

            window.location.href =
                `hotels.html?country=${encodeURIComponent(country)}`;

        };

    });

}

// =====================
// ФІЛЬТР
// =====================

function filter(){

    let result = [...tours];

    const text = search.value.toLowerCase();

    if(text){

        result = result.filter(t =>
            t.title.toLowerCase().includes(text)
        );

    }

    if(country.value !== "all"){

        result = result.filter(t =>
            t.country === country.value
        );

    }

    render(result);

}

// =====================
// EVENTS
// =====================

search.oninput = filter;
country.onchange = filter;

// =====================
// INIT
// =====================

render(tours);