const container = document.getElementById("booked");

let booked = JSON.parse(localStorage.getItem("bookedHotels")) || [];
console.log(booked);
function render(){

    if(booked.length === 0){
        container.innerHTML = "<h2 style='color:white;text-align:center'>Немає бронювань</h2>";
        return;
    }

    container.innerHTML = booked.map((b, index) => `
    <div class="card">

        <div class="info">

            <h2>${b.hotel}</h2>

            <p>🌍 ${b.country}</p>

            <p>👥 Кількість людей: ${b.people}</p>

            <p>📅 Кількість днів: ${b.days}</p>

            <p>👤 ${b.name}</p>

            <p>📞 ${b.phone}</p>

            <p class="price">${b.price}$</p>

            <button onclick="removeBooking(${index})">
                🗑 Скасувати
            </button>

        </div>

    </div>
`).join("");
  
}

function removeBooking(index){

    booked.splice(index, 1);

    localStorage.setItem("booked", JSON.stringify(booked));

    render();
}

render();