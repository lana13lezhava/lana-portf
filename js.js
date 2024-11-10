const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
toggle.addEventListener('click', () => nav.classList.toggle('active'))

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')


// Добавляем обработчик события прокрутки
window.onscroll = () => {
  sections.forEach((sec) => {
    // Получаем позицию прокрутки сверху и положение секции
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    // Проверяем, находится ли прокрутка в пределах текущей секции
    if (top >= offset && top < offset + height) {
      // Удаляем класс 'active' у всех ссылок
      navLinks.forEach((link) => {
        link.classList.remove('active')
      })
      // Добавляем класс 'active' к ссылке, соответствующей текущей секции
      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add('active')
    }
  })
}
const texts = ['Fronted Developer!', 'Desinger']
const speed = 100 // Скорость набора текста
const delay = 1000 // Задержка перед началом нового текста
let textIndex = 0 // Индекс текущей строки из массива
let charIndex = 0 // Индекс текущего символа в строке
let isDeleting = false

function typeText() {
  const typewriter = document.getElementById('typewriter')
  const currentText = texts[textIndex]

  typewriter.innerHTML = currentText.substring(0, charIndex)

  if (!isDeleting && charIndex < currentText.length) {
    // Набираем текст
    charIndex++
    setTimeout(typeText, speed)
  } else if (isDeleting && charIndex > 0) {
    // Удаляем текст
    charIndex--
    setTimeout(typeText, speed)
  } else if (charIndex === currentText.length) {
    // Пауза перед удалением
    isDeleting = true
    setTimeout(typeText, delay)
  } else if (charIndex === 0) {
    // Переход к следующей строке
    isDeleting = false
    textIndex = (textIndex + 1) % texts.length // Возвращаемся к первому тексту после последнего
    setTimeout(typeText, speed)
  }
}

typeText()

//scills//
document.addEventListener('DOMContentLoaded' , function
  (event){
    let circle = document.querySelectorAll('.circle')
    circle.forEach(function(progress){
      let degree = 0 
      const targetDegree = parseInt(progress.getAttribute('data-degree'))
      let color = progress.getAttribute('data-color')
      let number = progress.querySelector('.number')
      const interval = setInterval(function(){
        degree += 1
        if(degree > targetDegree){
          clearInterval(interval)
          return
        }
        progress.style.background = `conic-gradient(${color} ${degree}%, #010101 0%)`
        number.innerHTML = degree + '<span>%<span>'
       // number.style.color = color
      } , 50)
    })

  }
)
  
//progress//


