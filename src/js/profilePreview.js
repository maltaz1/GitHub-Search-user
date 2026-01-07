export const renderProfile = (userData, repos, profileResults) => {
  const repositoriesHTML =
    repos.length > 0
      ? repos
          .map(
            (repo) => `
        <div class="repo-card">
        <a href="${repo.html_url}" target="_blank">
            <h3 class="repo-name">${repo.name}</h3>
            <div class="repo-stat">
                <span class="repo-icon">🔀</span>
                <span class="repo-label">Forks:</span>
                <span class="repo-value">${repo.forks_count}</span>
            </div>
            <div class="repo-stat">
                <span class="repo-icon">⭐</span>
                <span class="repo-label">Stars:</span>
                <span class="repo-value">${repo.stargazers_count}</span>
            </div>
            <div class="repo-stat">
                <span class="repo-icon">👀</span>
                <span class="repo-label">Watchers:</span>
                <span class="repo-value">${repo.watchers_count}</span>
            </div>
            <div class="repo-stat">
                <span class="repo-icon">💻</span>
                <span class="repo-label">Linguagem:</span>
                <span class="repo-value">${repo.language || "Nenhuma"}</span>
            </div>
            </a>
        </div>
        `
          )
          .join("")
      : `<p class="no-repos">Este usuário não possui repositórios públicos.</p>`;

  profileResults.innerHTML = `
      <div class="profile-card">
        <div class="profile-header">
          <img src="${userData.avatar_url}" alt="Foto de ${
    userData.name
  }" class="profile-avatar"/>
          <div class="profile-info">
            <h2 class="profile-name">${userData.name}</h2>
            <p class="profile-bio">${
              userData.bio || "Sem biografia disponível."
            }</p>
          </div>
        </div>
        <hr class="divider"/>
        <div class="profile-stats">
          <div class="stat">
            <div class="stat-label">SEGUIDORES</div>
            <div class="stat-value">${userData.followers}</div>
          </div>
          <div class="stat">
            <div class="stat-label">SEGUINDO</div>
            <div class="stat-value">${userData.following}</div>
          </div>
        </div>
      </div>

      <div class="profile-repositories">
        <h2>Repositórios</h2>
        <div class="repositories-list">
          ${repositoriesHTML}
        </div>
      </div>
      `;
};

export const toggleLoading = (loadingIndicator, show) => {
  loadingIndicator.style.display = show ? "block" : "none";
};

export const clearProfileResults = (profileResults) => {
  profileResults.innerHTML = "";
};
