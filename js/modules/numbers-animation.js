export function initAnimateNumbers() {
  const observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector('.numeros');
  observer.observe(observerTarget, { attributes: true });

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      animate();
    }
  }

  function animate() {
    const numbers = document.querySelectorAll('[data-numero]');

    numbers.forEach((number) => {
      const total = +number.innerText;

      const increment = Math.floor(total / 100);

      let start = 0;

      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
}
