{
  const elem = document.querySelector('#me');
  if (elem) {
    document.querySelector('#karma').textContent = "❤️";
  }
}

{
  const table = document.querySelector('.profileform table');
  if (table) {
    [...table.rows].forEach(row => {
      if (row.cells.length >= 2 && row.cells[0].textContent === 'karma:') {
        row.cells[1].textContent = '???';
      }
    });
  }
}