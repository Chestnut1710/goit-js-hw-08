const categoriesList = document.querySelector('#categories');
const categoriesElements = categoriesList.querySelectorAll('li.item');
console.log('Number of categories:', categoriesElements.length);

categoriesElements.forEach(categoryElement => {
    const categoryTitle = categoryElement.querySelector('h2').textContent
    console.log(`Category: ${categoryTitle}`)
    const numberOfElements = categoryElement.querySelectorAll('ul li')
    console.log(`Elements: ${numberOfElements.length}`)
});