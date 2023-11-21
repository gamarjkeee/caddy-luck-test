'use strict';

const toGrid = document.getElementById('togrid');
const filterButton = document.getElementById('filter');
const filterButtonAbsolute = document.getElementById('filter-absolute');
const filterSection = document.querySelector('.search__filters');

filterButton.addEventListener('click', () => {
  filterSection.classList.toggle('active');
});

toGrid.addEventListener('click', () => {
  const itemsSection = document.querySelector('.search-section__items');
  const container = document.querySelector('.search-section__container');
  itemsSection.classList.toggle('grid');
  if (itemsSection.classList.contains('grid')) {
    container.style.paddingLeft = '357px';
    toGrid.innerHTML = 'grid';
    filterSection.classList.add('absolute');
    filterButton.style.display = 'none';
    filterButtonAbsolute.style.display = 'inline-flex';
  } else {
    container.style.paddingLeft = '15px';
    toGrid.innerHTML = 'line';
    filterSection.classList.remove('absolute');
    filterButton.style.display = 'inline-flex';
    filterButtonAbsolute.style.display = 'none';
  }
});

filterButtonAbsolute.addEventListener('click', () => {
  filterSection.classList.toggle('active');
});
