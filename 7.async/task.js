class AlarmClock {
  constructor() {
    this.alarmCollection = [];     //для хранения коллекции звонков
    this.intervalId = null;        //для хранения `id` таймера
  }

  // добавляет новый звонок в коллекцию существующих //
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({callback, time, canCall: true});
  }

  // удаляет звонки по определённому времени //
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  // возвращает текущее время в строковом формате `HH:MM` //
  getCurrentFormattedTime() {
    const CurrentTime = new Date();
    const CurrentFormattedTime = String(CurrentTime.getHours()) + ':' + String(CurrentTime.getMinutes());
    return CurrentFormattedTime;
  }

  // запускает будильник //
  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(this.alarmCollection.forEach(alarm => {
      if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
      alarm.canCall = false;
      alarm.callback();
      }
    }), 1000);
  }

  // останавливает выполнение интервала будильника //
  stop() {
    clearInterval(this.intervalID);
    this.intervalId = null;
  }

  // сбрасывает возможность запуска всех звонков //
  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
    this.intervalId = null;
  }

  // удаляет все звонки //
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}