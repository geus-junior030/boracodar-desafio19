function showWidget() {
  const btnShowWidget = document.getElementById('btnShowWidget');
  btnShowWidget.style.display = 'none';

  const widget = document.getElementById('widget');
  widget.style.display = 'flex';
  widget.classList.remove('hide');
  widget.classList.add('show');
  widget.style.display = 'flex';
}

function hideWidget() {
  const widget = document.getElementById('widget');
  widget.classList.remove('show');
  widget.classList.add('hide');

  const btnShowWidget = document.getElementById('btnShowWidget');
  btnShowWidget.style.display = 'block';
}