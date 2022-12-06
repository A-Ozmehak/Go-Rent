import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const bookingsCollection = collection(db, "bookings");

// * Get all bookings
export const getBookings = async () => {
  const documents = await getDocs(bookingsCollection);
  let bookings: any = [];
  documents.forEach((doc) => {
    let booking = doc.data();
    booking = { ...booking, id: doc.id };
    bookings.push(booking);
  });
  return bookings;
};

// * Get bookings by seller
export const getBookingsBySeller = async (userID: string) => {
  let bookings = await getBookings();
  let userBookings: any = [];
  for (let booking of bookings) {
    if (booking.Seller === userID) {
      userBookings.push(booking);
    }
  }
  return userBookings;
};

// * Get bookings by buyer
export const getBookingsByBuyer = async (userID: string) => {
  let bookings = await getBookings();
  let userBookings: any = [];
  for (let booking of bookings) {
    if (booking.Buyer === userID) {
      userBookings.push(booking);
    }
  }
  return userBookings;
};

// ! NEEDS TO BE WORKED ON
export const getBookingsByStatus = async (bookingID: string) => {};
