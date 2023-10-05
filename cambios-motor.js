class Motor {
  constructor(propulsionTo, historyInstance) {
    let status = 'off';
    let history = historyInstance;

    this.getStatus = () => status;
    let setStatus = (newStatus) => {
      status = newStatus;
    };

    this.turnOn = () => setStatus('on');
    this.turnOff = () => setStatus('off');

    this.getHistory = () => history.getFullState();
  }
}

class History {
  constructor() {
    let history = [];

    this.getFullState = () => history;
  }
}
