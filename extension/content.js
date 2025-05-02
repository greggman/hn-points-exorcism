{
  const elem = document.querySelector('#me');
  if (elem) {
    document.querySelector('#karma').textContent = "❤️";
  }
}

{
  const tables = [
    ...document.querySelectorAll('.profileform table'),
    ...document.querySelectorAll('#hnmain table'),
  ];
  for (const table of tables) {
    [...table.rows].forEach(row => {
      if (row.cells.length >= 2 && row.cells[0].textContent === 'karma:') {
        row.cells[1].textContent = '???';
      }
    });
  }
}