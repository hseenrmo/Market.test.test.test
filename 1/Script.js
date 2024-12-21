const subCategoryData = {
    cars: ["���"],
    real_estate: ["���", "����", "����"]
};

function updateFilters() {
    const category = document.getElementById("category").value;
    const subCategory = document.getElementById("subCategory");
    const specificFilters = document.getElementById("specificFilters");

    if (category) {
        subCategory.style.display = "block";
        subCategory.innerHTML = `<option value="">���� �����</option>`;
        subCategoryData[category].forEach(option => {
            subCategory.innerHTML += `<option value="${option}">${option}</option>`;
        });

        specificFilters.style.display = "block";
        specificFilters.innerHTML = specificFiltersData[category];
    } else {
        subCategory.style.display = "none";
        subCategory.innerHTML = "";
        specificFilters.style.display = "none";
        specificFilters.innerHTML = "";
    }
}

function filterResults() {
    const category = document.getElementById("category").value;
    const subCategory = document.getElementById("subCategory").value;
    const minPrice = document.getElementById("minPrice").value;
    const maxPrice = document.getElementById("maxPrice").value;
    const location = document.getElementById("location").value;

    let filters = {
        category,
        subCategory,
        minPrice,
        maxPrice,
        location
    };

    if (category === "cars") {
        filters.fuelType = document.getElementById("fuelType").value;
        filters.carColor = document.getElementById("carColor").value;
    } else if (category === "real_estate") {
        filters.area = document.getElementById("area").value;
        filters.constructionYear = document.getElementById("constructionYear").value;
    }

    console.log("Applied Filters:", filters);
    // ����� ��� ����� ��� ������ ���� ������� ����� ��� �������
}