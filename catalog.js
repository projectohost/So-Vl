const tours = [
{
    title: "Анталія",
    country: "Туреччина",
    days: 7,
    price: 520,
    image: "https://images.unsplash.com/photo-1541417904950-b855846fe074"
},
{
    title: "Кемер",
    country: "Туреччина",
    days: 10,
    price: 890,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
},
{
    title: "Хургада",
    country: "Єгипет",
    days: 7,
    price: 560,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206"
},
{
    title: "Шарм-ель-Шейх",
    country: "Єгипет",
    days: 8,
    price: 610,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECL0dccbJj_kPwm-zUOdO25rQtmUCQ2bWXg&s"
},
{
    title: "Рим",
    country: "Італія",
    days: 5,
    price: 730,
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198"
},
{
    title: "Мілан",
    country: "Італія",
    days: 4,
    price: 780,
    image: "https://ita.travel/user/blogimg/leto/lombardie/milan/milan.jpg"
},
{
    title: "Афіни",
    country: "Греція",
    days: 6,
    price: 640,
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235"
},
{
    title: "Барселона",
    country: "Іспанія",
    days: 7,
    price: 900,
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded"
},
{
    title: "Париж",
    country: "Франція",
    days: 5,
    price: 1100,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
   
}
];

// DOM
const catalog = document.getElementById("catalog");

const search = document.getElementById("search");
const country = document.getElementById("country");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const peopleInput = document.getElementById("people");

const modal = document.getElementById("modal");
const close = document.getElementById("close");
const toast = document.getElementById("toast");
const tourName = document.getElementById("tourName");

const clientName = document.getElementById("clientName");
const clientPhone = document.getElementById("clientPhone");
const bookBtn = document.getElementById("bookBtn");

let selectedTour = null;

// =====================
// РЕНДЕР
// =====================
function render(data){

    const fav = JSON.parse(localStorage.getItem("favorites")) || [];

    catalog.innerHTML = "";

    data.forEach(tour => {

        const isFav = fav.includes(tour.title);

        catalog.innerHTML += `
        <div class="card">

            <img src="${tour.image}" alt="${tour.title}">

            <div class="info">

                <h2>${tour.title}</h2>
                <p>🌍 ${tour.country}</p>
                <p>📅 ${tour.days} днів</p>
                <p class="price">${tour.price}$</p>

                <div class="buttons">

                    <button class="favorite ${isFav ? "active" : ""}" data-title="${tour.title}">
                        ❤️
                    </button>

                    <button class="book" data-title="${tour.title}">
                        Забронювати
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

    // ❤️ Обране
    document.querySelectorAll(".favorite").forEach(btn => {

        btn.onclick = () => {

            let fav = JSON.parse(localStorage.getItem("favorites")) || [];

            const title = btn.dataset.title;

            if(fav.includes(title)){
                fav = fav.filter(t => t !== title);
                btn.classList.remove("active");
            } else {
                fav.push(title);
                btn.classList.add("active");
            }

            localStorage.setItem("favorites", JSON.stringify(fav));
        };

    });

    // 📅 Бронювання
    document.querySelectorAll(".book").forEach(btn => {

        btn.onclick = () => {

            selectedTour = tours.find(t => t.title === btn.dataset.title);

            tourName.innerHTML = `
                <b>${selectedTour.title}</b><br>
                👥 Людей: ${peopleInput.value}
            `;

            modal.style.display = "flex";
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

    if(minPrice.value){
        result = result.filter(t =>
            t.price >= +minPrice.value
        );
    }

    if(maxPrice.value){
        result = result.filter(t =>
            t.price <= +maxPrice.value
        );
    }

    render(result);
}

// =====================
// EVENTS FILTER
// =====================
search.oninput = filter;
country.onchange = filter;
minPrice.oninput = filter;
maxPrice.oninput = filter;

// =====================
// MODAL
// =====================
close.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
};

// =====================
// BOOKING
// =====================
bookBtn.onclick = () => {

    if(!clientName.value || !clientPhone.value){
        alert("Заповніть всі поля!");
        return;
    }

    const booking = {
        title: selectedTour.title,
        country: selectedTour.country,
        days: selectedTour.days,
        price: selectedTour.price,
        people: peopleInput.value,
        name: clientName.value,
        phone: clientPhone.value
    };

    let booked = JSON.parse(localStorage.getItem("booked")) || [];

    booked.push(booking);

    localStorage.setItem("booked", JSON.stringify(booked));

    modal.style.display = "none";

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);

    clientName.value = "";
    clientPhone.value = "";
};

// =====================
// INIT
// =====================
render(tours);