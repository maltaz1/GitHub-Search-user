import { searchUser, searchRepos } from "./gitHubAPI.js";
import { renderProfile, toggleLoading, clearProfileResults } from "./profilePreview.js";

const searchInput = document.getElementById("input-search");
const searchButton = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");
const loadingIndicator = document.getElementById("loading-indicator");

const handleSearch = async () => {
    const username = searchInput.value;
    if (!username) {
        alert("Procure um usuário do GitHub");
        return;
    }

    toggleLoading(loadingIndicator, true);
    clearProfileResults(profileResults);

    try {
        const data = await searchUser(username);
        const repos = await searchRepos(username);
        renderProfile(data, repos, profileResults);
    } catch (error) {
        alert("Ocorreu um erro ao buscar o usuário");
        console.error(error);
    } finally {
        toggleLoading(loadingIndicator, false);
    }
};

if (searchButton) {
    searchButton.addEventListener("click", handleSearch);
}

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});