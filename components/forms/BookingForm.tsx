import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import dayjs from "dayjs";
import "dayjs/locale/sv";
import { listingInterface } from "../../utils/interface";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface props {
  listing: listingInterface;
}

const BookingForm = ({ listing }: props) => {
  const [loggedInUser] = useAuthState(auth);
  const user = loggedInUser?.uid;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedStart, setSelectedStart] = useState(dayjs());
  const [selectedEnd, setSelectedEnd] = useState(dayjs());

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const setDate = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setSelectedEnd(end);
    setSelectedStart(start);
  };

  const handleSubmit = async () => {
    const dbInstance = collection(db, "bookings");
    let totalDays = dayjs(endDate).diff(dayjs(startDate), "days");
    let totalPrice = totalDays * listing.price;
    let value = {
      seller: listing.seller,
      buyer: user, // LOGGED IN USER, TODO: look over to fetch only id/username/image without a fetch...
      status: "pending", // PENDING AS START VALUE
      listing: {
        title: listing.title,
        media: listing.media,
      },
      bookingDetails: {
        bookingStartDate: startDate,
        bookingEndDate: endDate,
        totalDays: totalDays,
        totalPrice: totalPrice,
      },
    };
    try {
      const result = await addDoc(dbInstance, value);
      submitBooking();
    } catch (e) {
      return;
    }
  };

  const SelectedDays = () => {
    const start = dayjs(selectedStart);
    const end = dayjs(selectedEnd);

    const calculateDays = () => {
      const result = end.diff(start, "days");

      return result + 1;
    };

    const calculatePrice = () => {
      const totalDays = calculateDays();
      let result = totalDays * listing.price;
      return result;
    };

    const days = calculateDays();
    const price = calculatePrice();

    return (
      <Box>
        <Text>
          {" "}
          {days} dagar, kostnad: {price} kr{" "}
        </Text>
      </Box>
    );
  };

  const toast = useToast({
    title: "Container style is updated",
    containerStyle: {
      width: "500px",
      maxWidth: "100%",
    },
  });

  const submitBooking = () => {
    toast({
      title: "Bokningsförfrågan skickad",
      description:
        "Du blir meddelad när ägaren har accpterat eller nekat din förfrågan.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} rightIcon={<CalendarIcon />}>
        Öppna boka
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent alignItems="center">
          <ModalHeader>Välj de datum du vill boka</ModalHeader>
          <Text>Kostnad per dygn: {listing.price} kr </Text>
          <Text>Upphämtning: {listing.location} </Text>
          <ModalCloseButton />
          <ModalBody>
            <DatePicker
              selected={startDate}
              onChange={setDate}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />

            {endDate && <SelectedDays />}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            {loggedInUser ? (
              // Primary
              <Button onClick={handleSubmit}>Skicka förfrågan</Button>
            ) : (
              <Text>
                Du måste vara inloggad för att skicka en bokningsförfrågan
              </Text>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookingForm;
