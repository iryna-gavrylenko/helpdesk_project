// Landing page: load categories from the Express API and render them

const categoriesList = document.getElementById("categoriesList");
const categoriesMessage = document.getElementById("categoriesMessage");

const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const getStartedButton = document.getElementById("getStartedButton");

// Log in / Register are placeholders until the auth views are implemented
loginButton.addEventListener("click", showComingSoon);
registerButton.addEventListener("click", showComingSoon);
getStartedButton.addEventListener("click", showComingSoon);


async function loadCategories() {
    categoriesMessage.textContent = "Loading categories...";

    try {
        const response = await fetch("/api/v1/categories/getCategories");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const categories = await response.json();

        categoriesList.replaceChildren();
        
        if (categories.length === 0) {
            categoriesMessage.textContent = "No categories found.";
            return;
        }

        categoriesMessage.classList.add("hidden");
        renderCategories(categories);

    } catch (error) {
        categoriesMessage.textContent = "Could not load categories.";
        console.error(error);
    }
}

// Function to render categories on the landing page
function renderCategories(categories) {
    categories.forEach(category => {
        const item = document.createElement("li");
        item.className = "category-card";

        const title = document.createElement("h3");
        title.textContent = category.name;

        const description = document.createElement("p");
        description.className = "muted";
        description.textContent = category.description;

        item.append(title, description);
        categoriesList.appendChild(item);
    });
}

function showComingSoon() {
    alert("Coming soon: login and registration");
}

loadCategories();
