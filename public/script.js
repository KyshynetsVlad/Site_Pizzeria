window.addEventListener('scroll', function() {
  const section = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;
  section.forEach(function(item) {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < windowHeight) {
      item.classList.add('animate');
    } else {
      item.classList.remove('animate');
    }
  });
});

window.onload = function() {
  const container = document.querySelector('.container');
  const text = document.querySelector('.text');
  const message = 'Pizzeria!';

  for (let i = 0; i < message.length; i++) {
    setTimeout(function() {
      text.textContent += message.charAt(i);
    }, i * 100);
  }

  container.classList.add('loaded');
}

const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});


// Отримуємо всі кнопки замовлення
var orderBtns = document.querySelectorAll(".order-btn");

// Додаємо обробник події для кожної кнопки замовлення
for (var i = 0; i < orderBtns.length; i++) {
  orderBtns[i].addEventListener("click", function() {
    // Отримуємо назву страви, яку потрібно замовити
    var dishName = this.parentNode.parentNode.childNodes[1].innerHTML;
    // Виводимо повідомлення про замовлення страви
    alert("Ви замовили страву: " + dishName);
  });
}


