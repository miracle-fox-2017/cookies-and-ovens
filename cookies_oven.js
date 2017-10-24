//your code here
'use strict'

class Oven{
	constructor(cookie, end){
		this.start = 0
		this.cookie = cookie
		this.end = end
		this.status = ''

	}

	bakeInOven(timer){
		// console.log(this.cookie)
		while(this.start < timer){
			this.start++
			if(this.start > this.end){
				this.status = "hangus"
			}else if(this.start >= this.end-5){
				this.status = 'matang'
			}else if(this.start >= this.end-10){
				this.status = 'hampir matang'
			}else{
				this.status = 'mentah'
			}
		}
		return this.status
	}

	bake(){

		this.cookie.bake(this.status)
		console.log(this.cookie)
	}
}

module.exports = Oven

// let bake = new Oven(`ChocolateChip {
//   name: 'chocolate chip ',
//   status: 'mentah',
//   ingredients: [ [ ' 1', ' 1', ' 2' ], [ ' chips', ' sugar', ' butter' ] ],
//   has_sugar: true,
//   choc_chip_count: 200 }`, 20)

// console.log(bake.bakeInOven(20))
// console.log(bake.bake())