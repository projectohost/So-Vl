const container = document.getElementById("favorites");

let fav = JSON.parse(localStorage.getItem("favorites")) || [];

function render(){

    if(fav.length === 0){
        container.innerHTML = "<h2 style='color:white;text-align:center'>Немає обраних турів</h2>";
        return;
    }

    container.innerHTML = fav.map(title => `
        <div class="card">

            <div class="info">

                <h2>${title}</h2>

                <button onclick="removeFav('${title}')">
                    🗑 Видалити
                </button>

            </div>

        </div>
    `).join("");
}

function removeFav(title){

    fav = fav.filter(t => t !== title);

    localStorage.setItem("favorites", JSON.stringify(fav));

    render();
}

render();