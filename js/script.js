const pokemonName = document.querySelector('.pokemon-name')


//Função para pegar os dados do POKEMON requisitado 
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

//Função para RENDERIZAR a imagem do pokemon que foi requisitado
const renderPokemon = async (pokemon) => {    
    const data = await fetchPokemon(pokemon);
    console.log(data);
    document.querySelector('.pokemon-name').innerHTML = data.name;

}

fetchPokemon('25')
renderPokemon('25')