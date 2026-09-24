function toggleDetails() {
  const checkbox = document.getElementById('creature');
  const details = document.getElementById('creature-details');
  details.classList.toggle('visible', checkbox.checked);
}

function calculateDays() {
  const startDateVal = document.getElementById('date-start').value;
  const endDateVal = document.getElementById('date-end').value;
  const daysInput = document.getElementById('days-quest');

  if (startDateVal && endDateVal) {
    const start = new Date(startDateVal);
    const end = new Date(endDateVal);

    const differenceInTime = end.getTime() - start.getTime();

    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    if (differenceInDays >= 0) {
      daysInput.textContent = differenceInDays;
    } else {
      daysInput.textContent = '-';
    }
  }
}
