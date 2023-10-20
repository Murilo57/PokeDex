const pokemonName = document.querySelector('.pokemon-name')
const pokemonNumber = document.querySelector('.pokemon-number')
const pokemonImage = document.querySelector('.pokemon-image')

const form1 = document.querySelector('#form1')
const input = document.querySelector('.input-search')

//Função para pegar os dados do POKEMON requisitado 
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    console.log(data)
    return data;
}

//Função para RENDERIZAR a imagem do pokemon que foi requisitado
const renderPokemon = async (pokemon) => {    
    const data = await fetchPokemon(pokemon);
    document.querySelector('.pokemon-name').innerHTML   = data.name;
    document.querySelector('.pokemon-number').innerHTML = data.id;
    document.querySelector('.pokemon-image').src        = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];    
}

form1.addEventListener('submit', (event) => {

    event.preventDefault();

    console.log(input.value)
    // renderPokemon(input.value.toLowerCase())
});