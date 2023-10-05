function simulador(astronaut, spaceShip, direction) {
  astronaut.navigate(spaceShip, direction);
  return spaceShip._movements;
}

class Astronaut {
  constructor({ name }) {
    this.name = name;
    this[this._spaceShipKey] = Symbol();
  }

  setAccessKey(accessKey) {
    this[this._spaceShipKey] = accessKey;
  }

  navigate(spaceShip, direction) {
    spaceShip.navigator(direction, { accessKey: this[this._spaceShipKey] });
  }
}

class SpaceShip {
  constructor({ key }) {
    this._key = Symbol();
    this[this._key] = key
    this._movements = [];
  }

  getAccessKey(astronaut) {
    const isAstronaut = astronaut instanceof Astronaut;

    if (isAstronaut) {
      astronaut.setAccessKey(this[this._key]);
    }
  }

  navigator(direction, { accessKey }) {
    if (this[this._key] == accessKey) {
      this._movements.push(direction);
    } else {
      this._movements.push('Incorrect Access Key');
    }
  }
}
