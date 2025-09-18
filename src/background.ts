const bgFadeSpeed = 2600;

document.body.style.setProperty('--speed', bgFadeSpeed + 'ms');

function dismissPrevious(next: string) {
  document.body.classList.toggle('change-background');
  document.body.style.setProperty('--previous-bg', next);
}

function exchangeBackgrounds() {
  const next = `var(--bg-${Math.ceil(Math.random() * 9)})`;
  document.body.style.setProperty('--current-bg', next);
  document.body.classList.toggle('change-background');
  setTimeout(() => dismissPrevious(next), bgFadeSpeed);
}

export function cycleBackground() {
  const duration = bgFadeSpeed * 1.5;
  setInterval(exchangeBackgrounds, duration);
}
