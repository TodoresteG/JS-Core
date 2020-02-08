class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this._roomsCapacity = {
            'single': parseInt(capacity * 0.5),
            'double': parseInt(capacity * 0.3),
            'maisonette': parseInt(capacity * 0.2),
        };
    }

    get roomsPricing() {
        return {
            'single': 50,
            'double': 90,
            'maisonette': 135,
        };
    }

    get servicesPricing() {
        return {
            'food': 10,
            'drink': 15,
            'housekeeping': 25,
        };
    }

    rentARoom(clientName, roomType, nights) {
        if (this._roomsCapacity[roomType] > 0) {
            const roomNumber = this.currentBookingNumber;
            const booking = { clientName, roomType, nights, roomNumber };
            this.bookings.push(booking);
            this._roomsCapacity[roomType] -= 1;

            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber++}.`;
        }

        let result = `No ${roomType} rooms available! `;

        for (const element in this._roomsCapacity) {
            if (element !== roomType) {
                result += `Available ${element} rooms: ${this._roomsCapacity[element]}. `;
            }
        }

        return result.trimRight();
    }

    roomService(currentBookingNumber, serviceType) {
        let booking = this.bookings.find(x => x.roomNumber === currentBookingNumber);
        const services = this.servicesPricing;

        if (booking) {
            if (services.hasOwnProperty(serviceType)) {
                if (booking.hasOwnProperty('services') === false) {
                    booking['services'] = [];
                }

                booking['services'].push(serviceType);

                return `Mr./Mrs. ${booking.clientName}, Your order for ${serviceType} service has been successful.`;
            }

            return `We do not offer ${serviceType} service.`;
        }


        return `The booking ${currentBookingNumber} is invalid.`;
    }

    checkOut(currentBookingNumber) {
        const booking = this.bookings.find(x => x.roomNumber === currentBookingNumber);

        if (booking) {
            let totalMoney = 0;

            const priceForNight = this.roomsPricing[booking.roomType];
            totalMoney += priceForNight * booking.nights;
            this._roomsCapacity[booking.roomType] += 1;
            const indexOfBooking = this.bookings.indexOf(booking);
            this.bookings.splice(indexOfBooking, 1);

            if (booking.hasOwnProperty('services')) {
                let totalServiceMoney = 0;
                const pricesForService = this.servicesPricing;

                for (let element of booking.services) {
                    totalServiceMoney += pricesForService[element];
                }

                return `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`
            }

            return `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`
        }

        return `The booking ${currentBookingNumber} is invalid.`;
    }

    report() {
        let result = `${this.name.toUpperCase()} DATABASE:\n--------------------\n`;
        let counter = 0;

        if (this.bookings.length > 0) {
            for (const element of this.bookings) {
                result += `bookingNumber - ${element.roomNumber}\n`;
                result += `clientName - ${element.clientName}\n`;
                result += `roomType - ${element.roomType}\n`;
                result += `nights - ${element.nights}\n`;

                if (element.hasOwnProperty('services')) {
                    result += `services: ${element.services.join(', ')}\n`;
                }

                if (counter !== this.bookings.length - 1) {
                    result += `----------\n`;
                }

                counter++;
            }
        } else {
            result += 'There are currently no bookings.'
        }

        return result.trimRight();
    }
}

let hotel = new Hotel('HotUni', 10);

console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));
console.log(hotel.report());
console.log(hotel.roomService(3, 'housekeeping'));
console.log(hotel.roomService(3, 'drink'));
console.log(hotel.roomService(2, 'room'));
console.log(hotel.checkOut(2));