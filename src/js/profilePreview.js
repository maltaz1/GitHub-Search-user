export const renderProfile = (userData, profileResults) => {
    profileResults.innerHTML = `
      <div class="profile-card">
        <div class="profile-header">
          <img src="${userData.avatar_url}" alt="Foto de ${userData.name}" class="profile-avatar"/>
          <div class="profile-info">
            <h2 class="profile-name">${userData.name}</h2>
            <p class="profile-bio">${userData.bio || "Sem biografia disponível."}</p>
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
    `;
};

export const toggleLoading = (loadingIndicator, show) => {
    loadingIndicator.style.display = show ? "block" : "none";
};

export const clearProfileResults = (profileResults) => {
    profileResults.innerHTML = "";
};
