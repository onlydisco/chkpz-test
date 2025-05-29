document.addEventListener('DOMContentLoaded', () => {
  const cardsData = [
    { percent: 75, number: '2-3-14', name: 'Александров И.И.' },
    { percent: 60, number: '1-5-22', name: 'Петров А.В.' },
    { percent: 45, number: '3-1-10', name: 'Сидорова О.К.' },
    { percent: 15, number: '2-3-14', name: 'Александров И.И.' },
    { percent: 30, number: '1-5-22', name: 'Петров А.В.' },
    { percent: 81, number: '3-1-10', name: 'Сидорова О.К.' },
  ];

  cardsData.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const numberElement = document.createElement('span');
    numberElement.classList.add('card__number');
    numberElement.textContent = card.number;

    const latheElement = document.createElement('span');
    latheElement.classList.add('card__lathe');
    latheElement.innerHTML = `Токарная<br />с ЧПУ ${index + 1}`;

    const donutContainerElement = document.createElement('div');
    donutContainerElement.classList.add('card__donut-container');

    const donutElement = document.createElement('canvas');
    donutElement.id = `chart${index + 1}`;

    const centerElement = document.createElement('div');
    centerElement.classList.add('card__center');

    const percentElement = document.createElement('span');
    percentElement.classList.add('card__percent');
    percentElement.textContent = `${card.percent}%`;

    donutContainerElement.appendChild(donutElement);
    centerElement.appendChild(percentElement);
    donutContainerElement.appendChild(centerElement);

    const nameElement = document.createElement('span');
    nameElement.classList.add('card__name');
    nameElement.textContent = card.name;

    cardElement.appendChild(numberElement);
    cardElement.appendChild(latheElement);
    cardElement.appendChild(donutContainerElement);
    cardElement.appendChild(nameElement);

    const contentElement = document.getElementById('content');
    contentElement.appendChild(cardElement);

    const ctx = document.getElementById(`chart${index + 1}`);

    const colors = {
      green: '#009846',
      blue: '#315ab6',
      gray: '#b2b3b3',
    };

    new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            data: [card.percent, 100 - card.percent],
            backgroundColor: [colors.green, colors.gray],
            hoverBackgroundColor: [colors.blue, colors.gray],
            borderWidth: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: false,
          },
        },
        animation: {
          animateRotate: false,
          animateScale: false,
        },
      },
    });
  });
});
