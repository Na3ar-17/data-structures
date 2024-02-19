document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div')
  const body = document.body
  div.classList.add('wrapper')

  body.appendChild(div)

  const header = document.createElement('h1')
  header.innerText = 'Text'

  div.insertAdjacentElement('beforebegin', header)

  const ul = `
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
  `

  div.innerHTML = ul

  const img = document.createElement('img')
  img.src = 'https://picsum.photos/240'
  img.width = 240
  img.classList.add('img')
  img.alt = 'image'

  div.appendChild(img)

  const el = `
    <div class='pDiv'>
    <p>First</p>
    <p>Second</p>
    </div>
  `

  const ulList = div.querySelector('ul')
  ulList.insertAdjacentHTML('beforebegin', el)

  const pDiv = document.querySelector('.pDiv')
  pDiv.children[1].classList.add('text')

  pDiv.firstElementChild.remove()

  const carGenerator = (brand, color, year) => {
    return `
    <div class='autoCard'>
    <h2>${brand} ${year}</h2>
    <p>Car ${brand}-${year}, ${color} color</p>
    <button class='btn'>Delete</button>
    </div>
    `
  }

  const carsContainer = document.createElement('div')
  carsContainer.classList.add('cars')

  const carData = [
    { brand: 'Toyota', color: 'Blue', year: 2022 },
    { brand: 'Honda', color: 'Red', year: 2020 },
    { brand: 'Ford', color: 'Black', year: 2021 },
    { brand: 'Chevrolet', color: 'Silver', year: 2019 },
    { brand: 'BMW', color: 'White', year: 2023 },
  ]
  const carsHTML = carData
    .map((el) => carGenerator(el.brand, el.color, el.year))
    .join('')

  carsContainer.innerHTML = carsHTML

  div.insertAdjacentElement('beforebegin', carsContainer)

  const buttonsDelete = document.querySelectorAll('.btn')

  function remove(e) {
    e.currentTarget.closest('.autoCard').remove()
  }

  buttonsDelete.forEach((el) => {
    el.addEventListener('click', remove)
  })
})
