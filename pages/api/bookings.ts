import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { bookingInterface } from "../../utils/interface";

const bookingsCollection = collection(db, "bookings");

export const getBookingsByUser = async (userID: string) => {
  console.log('getBookingsByUser')
  const bookings = new Map<string, bookingInterface>();
  try {
    let sellerBookings = await getBookingsBySeller(userID);
    let buyerBookings = await getBookingsByBuyer(userID);
    
    sellerBookings.forEach((booking) => {
      if (booking.id) bookings.set(booking.id, booking);
    });
    buyerBookings.forEach((booking) => {
      if (booking.id) bookings.set(booking.id, booking);
    });

  } catch (e) { }
  return Array.from(bookings.values());
};

// * Get bookings by seller
export const getBookingsBySeller = async (userID: string) => {
  console.log('getBookingsBySeller')
  let userBookings: bookingInterface[] = [];
  try {
    const q = query(bookingsCollection, where("seller.id", "==", userID));


    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const bookingData = doc.data();
      const booking = { ...bookingData, id: doc.id } as bookingInterface;
      booking.bookingDetails.bookingEndDate =
        +bookingData.bookingDetails.bookingEndDate.toDate();
      booking.bookingDetails.bookingStartDate =
        +bookingData.bookingDetails.bookingStartDate.toDate();
      userBookings.push(booking);
    });
  } catch (e) { }
  return userBookings;
};

// * Get bookings by buyer
export const getBookingsByBuyer = async (userID: string) => {
  console.log('getBookingsByBuyer')
  let userBookings: bookingInterface[] = [];
  try {
    const q = query(bookingsCollection, where("buyer", "==", userID));


    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const bookingData = doc.data();
      const booking = { ...bookingData, id: doc.id } as bookingInterface;
      booking.bookingDetails.bookingEndDate =
        +bookingData.bookingDetails.bookingEndDate.toDate();
      booking.bookingDetails.bookingStartDate =
        +bookingData.bookingDetails.bookingStartDate.toDate();
      userBookings.push(booking);
    });
  } catch (e) { }
  return userBookings;
};

export const getBooking = async (id: string) => {
  console.log('getBooking')
  try {
    const boookingDocRef = doc(db, "bookings", id);
    const docSnap = await getDoc(boookingDocRef);
    if (docSnap.exists()) {
      const bookingData = docSnap.data();
      const booking = { ...bookingData, id: docSnap.id } as bookingInterface;
      booking.bookingDetails.bookingEndDate =
        +bookingData.bookingDetails.bookingEndDate.toDate();
      booking.bookingDetails.bookingStartDate =
        +bookingData.bookingDetails.bookingStartDate.toDate();
      return { booking };
    } else {
      return null;
    }
  } catch (e) { return null }
};
