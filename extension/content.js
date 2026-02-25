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

{
  const style = document.createElement('style');
  style.textContent = `
    @media (prefers-color-scheme: dark) {
      :root {
        color-scheme: dark;
      }
      html {
        filter: invert(1);
        background-color: white;
      }
      textarea, input {
        filter: invert(1);
      }
    }
  `;
  document.head.appendChild(style);
}