const SWAPI_ROOT = 'https://swapi.dev/api/';
const PEOPLE = 'people';
export const SWAPI__PEOPLE = SWAPI_ROOT + PEOPLE;

//картинки для персонажей
export const imgPeople = 'https://starwars-visualguide.com/assets/img/characters/1.jpg';
export const getImg = (url) => {
 console.log(url.replace(/[^0-9]/g,""))
 return `https://starwars-visualguide.com/assets/img/characters/${url.replace(/[^0-9]/g,"")}.jpg`
}