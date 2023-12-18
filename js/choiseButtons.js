let choiseSectionItem = document.querySelectorAll('.choise__section_item');
let choisSectionItemText = document.querySelectorAll('.choise__section_item-text');

choiseSectionItem.forEach((unit,item)=>{
    unit.addEventListener('mouseover', function () {
        choisSectionItemText[item].classList.toggle('choise__section_item-text-hover');
})})

choiseSectionItem.forEach((unit,item)=>{
    unit.addEventListener('mouseout', function () {
        choisSectionItemText[item].classList.toggle('choise__section_item-text-hover');
})})

