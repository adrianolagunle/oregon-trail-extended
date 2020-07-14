class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
        this.food = this.food + 2

    }

    eat() {

        if (this.food <= 0) {
            this.isHealthy = false
        } else {
            this.isHealthy = true
            this.food = this.food - 1
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            return this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index = index + 1) {
            let currentPassenger = this.passengers[index]
            if (currentPassenger.isHealthy === false) {
                return true
            }
        }
        return false

    }

    totalFood() {
        let totalFood = 0
        for (let index = 0; index < this.passengers.length; index = index + 1) {
            let currentPassenger = this.passengers[index]
             totalFood = totalFood + currentPassenger.food
             
        }
        return totalFood
    }

    
}