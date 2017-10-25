//your code here
class oven {

  static panggang(cake, lamamemanggang) {

    var i = 0

    while(i <= lamamemanggang) {

      if(i > cake.bataswaktupanggang) {

        cake.status = 'hangus'

      }

      else if(i == cake.bataswaktupanggang) {

        cake.status = 'matang'

      }

      else if((i - cake.bataswaktupanggang) == -5) {
        cake.status = 'hampir matang'
      }

      else {

        cake.status = 'mentah'

      }

      console.log(`${cake.nama}, menit ke - ${i} : ${cake.status}`);
      i+=5

    }

  }

}

class Cake {
  constructor(nama, bataswaktupanggang) {
    this.nama = nama
    this.status = 'mentah'
    this.bataswaktupanggang = bataswaktupanggang
  }
}

class chocolateCake extends Cake {
  constructor() {
    super('chocolateCake', 25)
  }
}

class peanutCake extends Cake {
  constructor() {
    super('peanutCake', 20)
  }
}

class cheeseCake extends Cake {
  constructor() {
    super('cheeseCake', 15)
  }
}

var kuekeju = new cheeseCake()
var kuekacang = new peanutCake()
var kuecoklat = new chocolateCake()

oven.panggang(kuekeju, 25)
oven.panggang(kuekacang, 25)
oven.panggang(kuecoklat, 25)
