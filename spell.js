
document.querySelector('.classname')
document.querySelector('.new-spell')

const newSpellButton = document.querySelector('.new-spell');

newSpellButton.addEventListener('click', getSpell);

function getSpell() {
    console.log('newSpellButton was clicked');
}
