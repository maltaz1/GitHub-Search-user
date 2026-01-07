const BASE_URL = "https://api.github.com";

export const searchUser = async (username) => {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    console.log(response);

    if (!response.ok) {
        throw new Error("Usuário não encontrado");
    }

    const data = await response.json();
    console.log(data);
    
    return data;
};
