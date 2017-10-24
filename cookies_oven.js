//your code here
class Cookie {
  constructor() {
    this.status = 'Mentah';
    this.timeStart = 0;
    this.timeCook = 40;
  }
}

class ChocoCookie extends Cookie {
  constructor(status) {
    super(status);
    this.name = 'Kue Coklat';
    this.timeCook = 20;
  }
}

class PeanutCookie extends Cookie {
  constructor(status) {
    super(status);
    this.name = 'Kue Kacang';
    this.timeCook = 30;
  }
}

class CheeseCookie extends Cookie {
  constructor(status) {
    super(status);
    this.name = 'Kue Keju';
    this.timeCook = 35;
  }
}

class Oven {
  constructor(tray) {
    this.tray = tray;
  }

  bake(menit) {
    for (let j = 1; j <= menit; j++) {
      console.log(`============= BAKE =============`);
      cooking.status();
      for (let i = 0; i < this.tray.length; i++) {
        this.tray[i].timeStart += 10;
        if (this.tray[i].timeStart > this.tray[i].timeCook)
        this.tray[i].status = 'Hangus';
        else if (this.tray[i].timeStart == this.tray[i].timeCook)
        this.tray[i].status = 'Matang';
        else if (this.tray[i].timeStart > 10)
        this.tray[i].status = 'Hampir Matang';
        else
        this.tray[i].status = 'Mentah';
      }
    }
    console.log(`============= BAKE =============`);
    cooking.status();
  }

  status() {
    for (let i = 0; i < this.tray.length; i++) {
      console.log(`${this.tray[i].name} menit ke ${this.tray[i].timeStart} : ${this.tray[i].status}`);
    }
  }
}

let tray1 = new ChocoCookie();
let tray2 = new PeanutCookie();
let tray3 = new CheeseCookie();

let cooking = new Oven([tray1, tray2, tray3]);
//bake dikali 10 menit
cooking.bake(4);
// cooking.status();
