function filterMenu(category) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else if (card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

window.filterMenu = filterMenu;

document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById('search');

  search.addEventListener('keyup', () => {
    let value = search.value.toLowerCase();

    document.querySelectorAll('.card').forEach(card => {
      let text = card.innerText.toLowerCase();
      card.style.display = text.includes(value) ? 'block' : 'none';
    });
  });
});

function orderFood(name, price, image) {
  const message =
`🔔 New Order

🍽 Order: ${name}
💰 Price: ${price}
🔢 Quantity: 1

Please confirm my order.`;
  window.open(
    'https://t.me/Colors_Cafe_Hawassa' + encodeURIComponent(message),
    '_blank'
  );
}
function toggleMenu() {
  var menu = document.getElementById('navMenu');
  menu.classList.toggle('active');
}

function closeMenu() {
  var menu = document.getElementById('navMenu');
  menu.classList.remove('active');
}