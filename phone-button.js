document.addEventListener('DOMContentLoaded', function() {
  var phoneButton = document.getElementById('phone-button');
  var isMouseDown = false;
  var offsetX, offsetY;

  // Rendre le bouton déplaçable
  phoneButton.addEventListener('mousedown', function(e) {
    isMouseDown = true;
    offsetX = e.clientX - phoneButton.getBoundingClientRect().left;
    offsetY = e.clientY - phoneButton.getBoundingClientRect().top;
    phoneButton.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', function(e) {
    if (!isMouseDown) return;
    var x = e.clientX - offsetX;
    var y = e.clientY - offsetY;
    phoneButton.style.left = x + 'px';
    phoneButton.style.top = y + 'px';
  });

  document.addEventListener('mouseup', function() {
    isMouseDown = false;
    phoneButton.style.cursor = 'pointer';
  });

  // Faire en sorte que le bouton suive le défilement de la page
  window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    phoneButton.style.transform = 'translateY(' + scrollTop + 'px)';
  });
});
