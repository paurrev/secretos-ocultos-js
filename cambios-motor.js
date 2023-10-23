export class Motor {
  constructor(propulsionTo, historyInstance) {
    let status = 'off';
    let history = historyInstance;

    this.getStatus = () => status;
    let setStatus = (newStatus) => {
      if(status != newStatus){
        history.addEvent(propulsionTo, historyInstance)
        status = newStatus;
      }
    };

    this.turnOn = () => setStatus('on');
    this.turnOff = () => setStatus('off');

    this.getHistory = () => history.getFullState();
  }
}

export class History {
  constructor() {
    let history = [];

    this.getFullState = () => history;

    this.addEvent = (position, status) => history.push({"propulsionTo": position, "status": status}) 
  } 
}
