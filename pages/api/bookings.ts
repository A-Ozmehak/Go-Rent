import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { bookingInterface } from "../../utils/interface";

const bookingsCollection = collection(db, "bookings");

// * Get all bookings
export const getBookings = async () => {
    const documents = await getDocs(bookingsCollection)
    let bookings: bookingInterface[] = []
    documents.forEach(doc => {
        let data = doc.data()
        const booking = { ...data, "id": doc.id } as bookingInterface
        booking.bookingDetails.bookingEndDate = +data.bookingDetails.bookingEndDate.toDate()
        booking.bookingDetails.bookingStartDate = +data.bookingDetails.bookingStartDate.toDate()
        bookings.push(booking)
    });
    return bookings
}


// * Get bookings by seller
export const getBookingsBySeller = async (userID: string) => {
    let bookings = await getBookings()
    let userBookings: bookingInterface[] = []
    for (let booking of bookings) {
        if (booking.Seller.id === userID) {
            userBookings.push(booking)
        }
    }
    console.log(userBookings)
    return userBookings
}

// * Get bookings by buyer
export const getBookingsByBuyer = async (userID: string) => {
    let bookings = await getBookings()
    let userBookings: bookingInterface[] = []

    for (let booking of bookings) {
        if (booking.Buyer === userID) {
            userBookings.push(booking)
        }
    }
    return userBookings
}

// ! NEEDS TO BE WORKED ON
export const getBookingsByStatus = async (userID:string) => {
    let bookings = await getBookingsBySeller(userID)

    let statusBookings: any = []

    for (let booking of bookings) {
        if (booking.Status === "Pending") {
            statusBookings.push(booking)
        }
    }
    return statusBookings
}

export const getBooking = async (id: string) => {
    let bookings: bookingInterface[] = await getBookings()
    let booking = bookings.find(item => item.id === id)
    return booking
}

