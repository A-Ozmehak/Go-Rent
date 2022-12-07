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
  let sellerBookings = await getBookingsBySeller(userID);
  let buyerBookings = await getBookingsByBuyer(userID);

  const bookings = new Map<string, bookingInterface>();

  sellerBookings.forEach((booking) => {
    if (booking.id) bookings.set(booking.id, booking);
  });
  buyerBookings.forEach((booking) => {
    if (booking.id) bookings.set(booking.id, booking);
  });
  return Array.from(bookings.values());
};

// * Get bookings by seller
export const getBookingsBySeller = async (userID: string) => {
  const q = query(bookingsCollection, where("seller.id", "==", userID));
  let userBookings: bookingInterface[] = [];

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

  return userBookings;
};

// * Get bookings by buyer
export const getBookingsByBuyer = async (userID: string) => {
  const q = query(bookingsCollection, where("buyer", "==", userID));
  let userBookings: bookingInterface[] = [];

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

  return userBookings;
};

export const getBooking = async (id: string) => {
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
};
