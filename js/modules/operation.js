export function initOperation() {
  const operation = document.querySelector("[data-semana]");
  const weekDays = operation.dataset.semana.split(",").map(Number);
  const hourly = operation.dataset.horario.split(",").map(Number);

  const nowDate = new Date();
  const nowDay = nowDate.getDay();
  const nowHourly = nowDate.getHours();

  const isOpenToday = weekDays.includes(nowDay)

  const isOpenNow = isOpenToday && nowHourly >= hourly[0] && nowHourly < hourly[1] 

  isOpenNow && operation.classList.add('open')
}
