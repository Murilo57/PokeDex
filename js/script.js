//Função para pegar os dados do POKEMON requisitado 
const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

//Função para RENDERIZAR a imagem do pokemon que foi requisitado
const renderPokemon = (pokemon) => {
    
    const data = fetchPokemon(pokemon)


    
}