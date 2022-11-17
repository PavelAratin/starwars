//картинки для персонажей
export const imgPeople = 'https://starwars-visualguide.com/assets/img/characters/1.jpg';
export const getImg = (url) => {
 return `https://starwars-visualguide.com/assets/img/characters/${url.replace(/[^0-9]/g,"")}.jpg`
}