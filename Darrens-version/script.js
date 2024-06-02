function expandWindow(button) {
  const container = button.parentElement;
  const allContainers = document.querySelectorAll('.box-container > div');

  if (!container.classList.contains('is-expanded')) {
    // Expand the selected container
    container.classList.add('is-expanded');
    button.innerHTML = ' - ';

    // Hide all other containers
    allContainers.forEach((cont) => {
      if (cont !== container) {
        cont.classList.add('hidden');
      }
    });

  } else {
    // Contract the selected container
    container.classList.remove('is-expanded');
    button.innerHTML = ' + ';

    // Show all containers
    allContainers.forEach((cont) => {
      cont.classList.remove('hidden');
    });
  }
}
