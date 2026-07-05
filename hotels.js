const params = new URLSearchParams(window.location.search);
const country = params.get("country");

document.getElementById("title").innerText = "Готелі: " + country;

const container = document.getElementById("catalog");

// =========================
// Готелі
// =========================

const hotels = {

"Туреччина":[
{
    name:"Rixos Premium Belek",
    image:"https://lh3.googleusercontent.com/proxy/4oHEycEcZpilJa51p-LfXhN9VIcWVLkdX9BONY8lXoT26lJ4ATbAE2WFCuu1biqVuzOLHAK3siGo2d1XH4RAYtBfa-WwIAaUH9QkQ5OprE805DdZ-kjmrpxE65iQA3P4TrasVDn0QtYJ-HMIxKIKhObw9Ls27w=s680-w680-h510-rw",
    desc:"5★ Ultra All Inclusive, перша лінія моря.",
    people:"2–8 осіб",
    days:"7–10 днів",
    price:1200
},
{
    name:"Titanic Deluxe Belek",
    image:"https://images.unsplash.com/photo-1566073771259-6a8506099945",
    desc:"Розкішний сімейний курорт з аквапарком.",
    people:"2–6 осіб",
    days:"3–10 днів",
    price:980
},
{
    name:"Delphin Imperial",
    image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    desc:"Величезний готель біля моря.",
    people:"2–12 осіб",
    days:"6–14 днів",
    price:1100
},
{
    name:"Maxx Royal Kemer",
    image:"https://lh3.googleusercontent.com/proxy/z_YBliVhs2Kge7E6aZHy3dA1X_H8lT1zJYDI_XOwnpBNbWWtID1i0u7dnjLW952c_Uy9Y9POcxDxSM64qDt4f0Ghg2mPP58Fo9Dut0nGyy95-6_UDZtxKVIqzAgno77BpP2kx8X8hpKDj_h5gSIruVep6Lnqiw=s680-w680-h510-rw",
    desc:"Преміум клас, найкращий сервіс.",
    people:"2–7 осіб",
    days:"7–12 днів",
    price:1500
}
],

"Єгипет":[
{
    name:"Rixos Sharm El Sheikh",
    image:"https://lh3.googleusercontent.com/gps-cs-s/APNQkAFQ_DO3Z14u0qMJe7V0WUookV4tfMcA0xo9LAEClgqF8wUou9CXTKlyPi2VbtJlLmx8j0U-kyAYQe-5km8fvkOlQdyfK5oqj3lJ1Pb8c_dGXFKE6o7XI4rjUDxMs1WNVyfCwaFp=s680-w680-h510-rw",
    desc:"Червоне море, all inclusive.",
    people:"2–9 осіб",
    days:"7–15 днів",
    price:900
},
{
    name:"Jaz Aquamarine",
    image:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
    desc:"Великий готель з аквапарком.",
    people:"2–5 осіб",
    days:"6–12 днів",
    price:750
},
{
    name:"Albatros Palace",
    image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    desc:"Сімейний відпочинок біля моря.",
    people:"2–8 осіб",
    days:"7–11 днів",
    price:700
},
{
    name:"Sunrise Arabian Beach",
    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc:"Преміум готель з кораловим рифом.",
    people:"2–6 осіб",
    days:"6–10 днів",
    price:850
}
]
};

"Італія"[
{
    name:"Rome Cavalieri",
    image:"https://images.unsplash.com/photo-1529260830199-42c24126f198",
    desc:"Люкс готель у Римі.",
    people:2-12,
    days:5-10,
    price:1400
},
{
    name:"Hotel Milano Scala",
    image:"https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    desc:"Еко-готель у центрі Мілана.",
    people:2-10,
    days:4-10,
    price:1100
},
{
    name:"Grand Hotel Rimini",
    image:"https://lh3.googleusercontent.com/gps-cs-s/APNQkAFizK3YSwjJ2Cy5TmKxIPZJ759f7jFbNGw5KMFFkODz_b3atNBmgfrpjU_xtw2dqvFEePicFW46nietmomu_2Bre_WRWLXlKGJITrgXSUrNMvAf9tUngiKY6Ib4xyYMGRWDocNZYg=w324-h312-n-k-no",
    desc:"Класика біля моря.",
    people:2-8,
    days:610,
    price:1000
},
{
    name:"Venice Palace",
    image:"https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    desc:"Готель біля каналів Венеції.",
    people:2-6,
    days:5-8,
    price:1300
}
],
"Греція"[
{
    name:"Atlantica Grand Resort",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcQTwx1dnm1x9MX24f7CAWYpnZay98LR6XMLuHrI5BA&s=10",
    desc:"Розкішний курорт на острові Родос.",
    people:2-4,
    days:6-8,
    price:950
},
{
    name:"Creta Palace",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksXrlZPnq4tB4XUB79mJJ0aIzVef0dvHF5JG9ZrS_XQ&s=10",
    desc:"Сімейний готель на Криті.",
    people:2-5,
    days:7-9,
    price:880
},
{
    name:"Santorini View Hotel",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCtdsnniWVUZUA5M2Sn9mU8rCRCtOLjMfpYXpjvNqlw&s=10",
    desc:"Неймовірний вид на кальдеру.",
    people:2,
    days:5,
    price:1200
},
{
    name:"Athens Luxury Suites",
    image:"https://images.unsplash.com/photo-1555993539-1732b0258235",
    desc:"У центрі Афін біля Акрополя.",
    people:2-8,
    days:4-8,
    price:700
}
],

"Іспанія"[
{
    name:"W Barcelona",
    image:"https://images.unsplash.com/photo-1583422409516-2895a77efded",
    desc:"Готель-парус біля моря.",
    people:2-3,
    days:7-9,
    price:1300
},
{
    name:"Hotel Arts Barcelona",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiF9ISLLrSNJnexlpEuua62curfiethHh8eJrl9mDTXA&s=10",
    desc:"Преміум клас у Барселоні.",
    people:2-7,
    days:6-9,
    price:1200
},
{
    name:"Ritz Madrid",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6HNdjZoVUmgxT2Lb3FQ67p8dILdl3FsInpL2fqeO2A&s=10",
    desc:"Класичний люкс у центрі.",
    people:2-7,
    days:5-8,
    price:1100
},
{
    name:"Ibiza Beach Resort",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PZruLjz06hZO81n97uPT0oo3u05YeOuRudFSlnzMxg&s=10",
    desc:"Для вечірок та відпочинку.",
    people:2-9,
    days:7-12,
    price:1400
}
],

"Франція"[
{
    name:"Hotel de Crillon Paris",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgMFBAFgDQoBIKAie9yRLxvwLYihwbVsRrGmYHYZ4HA&s=10",
    desc:"Люкс готель біля Лувру.",
    people:2-5,
    days:5-7,
    price:1600
},
{
    name:"Le Negresco Nice",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLOlyrI8m2qXZC-QVDBH4Jhqj7Tt4Cxp1Z2qc0XjWSQ&s=10",
    desc:"Класика Лазурного узбережжя.",
    people:2-6,
    days:6-8,
    price:1300
},
{
    name:"Hotel Martinez Cannes",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLg54_iv3fVPv4Kjz9qm_IxOCDBlHfmDIB18O3bGL7A&s",
    desc:"Відомий готель Каннського кінофестивалю.",
    people:2-3,
    days:5-7,
    price:1450
},
{
    name:"Paris Opera Hotel",
    image:"https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    desc:"Центр Парижа, комфорт.",
    people:2-8,
    days:4-8,
    price:1000
}
]

const hotelsData = hotels[country] || [];

function render(){

    container.innerHTML = "";

    hotelsData.forEach((h, i) => {

        container.innerHTML += `
        <div class="card">

            <img src="${h.image}" alt="">

            <div class="info">

                <h2>${h.name}</h2>

                <p>${h.desc}</p>

                <p>👥 Людей: ${h.people}</p>
                <p>📅 Днів: ${h.days}</p>

                <p class="price">${h.price}$</p>

                <div class="buttons">

                    <button onclick="openBooking(${i})" class="book">
                        Забронювати
                    </button>

                </div>

            </div>

        </div>
        `;
    });
}

render();
let selectedHotel = null;

function openBooking(index){

    selectedHotel = hotelsData[index];

    const modal = document.createElement("div");

    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal-content">

            <h2>Бронювання</h2>

            <p><b>${selectedHotel.name}</b></p>

            <input id="name" placeholder="Ваше ім'я">
            <input id="phone" placeholder="Телефон">

            <button onclick="confirmBooking()">Підтвердити</button>

        </div>
    `;

    document.body.appendChild(modal);

    modal.onclick = (e)=>{
        if(e.target === modal){
            modal.remove();
        }
    };
}

function confirmBooking(){

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if(!name || !phone){
        alert("Заповніть всі поля!");
        return;
    }

    const booking = {
        hotel: selectedHotel.name,
        country: country,
        name,
        phone,
        price: selectedHotel.price
    };

    let list = JSON.parse(localStorage.getItem("bookedHotels")) || [];

    list.push(booking);

    localStorage.setItem("bookedHotels", JSON.stringify(list));

    alert("Бронювання успішне!");

    document.querySelector(".modal").remove();
}