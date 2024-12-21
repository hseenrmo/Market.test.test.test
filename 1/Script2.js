const carForm = document.getElementById("carForm");
const carDisplay = document.getElementById("carDisplay");
const carList = document.querySelector(".car-list");
const modelSelect = document.getElementById("model");

const models = {
    suv: ["Hyundai Santa Fe", "Kia Sorento", "Toyota Prado"],
    sedan: ["Hyundai Azera", "Kia Optima", "Toyota Camry"],
    pickup: ["Toyota Hilux", "Nissan Navara", "Ford Ranger"],
    van: ["Toyota Hiace", "Mercedes Sprinter"],
    cargo: ["Kia 2700", "Hyundai H100"]
};

// ÊÍÏíË ÇáÎíÇÑÇÊ ÈäÇÁð Úáì ÇáÊÕäíÝ
document.getElementById("category").addEventListener("change", (e) => {
    const selectedCategory = e.target.value;
    modelSelect.innerHTML = "<option value=''>Select Model</option>";
    models[selectedCategory]?.forEach(model => {
        modelSelect.innerHTML += `<option value="${model}">${model}</option>`;
    });
});

// ãÚÇáÌÉ ÇáÅÑÓÇá
carForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(carForm);
    const images = formData.getAll("images");
    const imageUrls = Array.from(images).map(file => URL.createObjectURL(file));

    const car = {
        category: formData.get("category"),
        model: formData.get("model"),
        year: formData.get("year"),
        mileage: formData.get("mileage"),
        paint: formData.get("paint"),
        price: formData.get("price"),
        province: formData.get("province"),
        phone: formData.get("phone"),
        images: imageUrls
    };

    displayCar(car);
    carForm.reset();
});

// ÚÑÖ ÇáÓíÇÑÉ
function displayCar(car) {
    const carCard = document.createElement("div");
    carCard.className = "car-card";

    const imageSlider = document.createElement("div");
    imageSlider.className = "image-slider";
    car.images.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = car.model;
        imageSlider.appendChild(img);
    });

    carCard.innerHTML = `
        <h3>${car.model} (${car.year})</h3>
        <p>Category: ${car.category}</p>
        <p>Mileage: ${car.mileage} km</p>
        <p>Paint: ${car.paint}</p>
        <p>Price: ${car.price} USD</p>
        <p>Province: ${car.province}</p>
        <p>Phone: ${car.phone}</p>
    `;
    carCard.appendChild(imageSlider);
    carList.appendChild(carCard);
}
