    const searchInput = document.getElementById("input-search");
    const searchButton = document.getElementById("btn-search");
    const profileResults = document.querySelector(".profile-results");
    const loadingIndicator = document.getElementById("loading-indicator");

    const BASE_URL = "https://api.github.com";

    const searchUser = async () => {
        const username = searchInput.value;
        if (!username) {
            alert("Procure um usuário do GitHub");
            return;
        }

        loadingIndicator.style.display = "block";
        profileResults.innerHTML = "";

        try {
            const response = await fetch(`${BASE_URL}/users/${username}`);
            console.log(response);

            if (!response.ok) {
                alert("Usuário não encontrado");
                return;
            }

            const data = await response.json();
            console.log(data);

            profileResults.innerHTML = `
              <div class="profile-card">
                <div class="profile-header">
                  <img src="${data.avatar_url}" alt="Foto de ${data.name}" class="profile-avatar"/>
                  <div class="profile-info">
                    <h2 class="profile-name">${data.name}</h2>
                    <p class="profile-bio">${data.bio || "Sem biografia disponível."}</p>
                  </div>
                </div>
                <hr class="divider"/>
                <div class="profile-stats">
                  <div class="stat">
                    <div class="stat-label">SEGUIDORES</div>
                    <div class="stat-value">${data.followers}</div>
                  </div>
                  <div class="stat">
                    <div class="stat-label">SEGUINDO</div>
                    <div class="stat-value">${data.following}</div>
                  </div>
                </div>
              </div>
            `;
        } catch (error) {
            alert("Ocorreu um erro ao buscar o usuário");
            console.error(error);
        } finally {
            loadingIndicator.style.display = "none";
        }
    };

    if (searchButton) {
        searchButton.addEventListener("click", searchUser);
    }