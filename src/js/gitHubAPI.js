const BASE_URL = "https://api.github.com";

export const searchUser = async (username) => {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    console.log(response);

    if (!response.ok) {
        throw new Error("Usuário não encontrado");
    }

    const data = await response.json();
    
    return data;
};

export const searchRepos = async (username) => {
    const response = await fetch(`${BASE_URL}/users/${username}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error("Repositórios não encontrados");
    }
    const repos = await response.json();

    return repos
}
