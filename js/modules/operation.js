export class Operation {
  constructor(operation) {
    this.operation = document.querySelector(operation);
  }

  data() {
    this.weekDays = this.operation?.dataset.semana.split(',').map(Number);
    this.hourly = this.operation?.dataset.horario.split(',').map(Number);
  }

  nowData() {
    this.nowDate = new Date();
    this.nowDay = this.nowDate.getDay();
    this.nowHourly = this.nowDate.getUTCHours() - 3;
  }

  isOpenToday() {
    return this.weekDays.includes(this.nowDay);
  }

  isOpenNow() {
    return (
      this.isOpenToday
      && this.nowHourly >= this.hourly[0]
      && this.nowHourly < this.hourly[1]
    );
  }

  open() {
    if (this.isOpenNow) this.operation.classList.add('open');
  }

  init() {
    if (this.operation) {
      this.data();
      this.nowData();
      this.open();
    }

    return this;
  }
}
