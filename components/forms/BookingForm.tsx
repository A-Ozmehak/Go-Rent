import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Box,
  Button,
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

const BookingForm = () => {
  // TODO: Ändra sen, är om en användare är inloggad
  const loggedInUser = true;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedStart, setSelectedStart] = useState(dayjs());
  const [selectedEnd, setSelectedEnd] = useState(dayjs());

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const setDate = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setSelectedEnd(end);
    setSelectedStart(start);
  };

  const SelectedDays = () => {
    const start = dayjs(selectedStart);
    const end = dayjs(selectedEnd);

    const calculateDays = () => {
      const result = end.diff(start, "days");

      return result + 1;
    };
    // TODO: Calculate based on the price of the listing
    const days = calculateDays();
    return (
      <Box>
        <Text>Valda Datum:</Text>
        <Text>
          {dayjs(selectedStart).locale("sv").format("ddd D MMMM")} {" - "}
          {dayjs(selectedEnd).locale("sv").format("ddd D MMMM")}
        </Text>
        {/* TODO: Ska vara totalpris som visas här med sen. */}
        <Text>Totalt antal dagar:{days} </Text>
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
    // TODO: Skicka data till firebase.
    toast({
      title: "Bokningsförfrågan skickad",
      description:
        "Du blir meddelad när ägaren har accpterat eller nekat din förfrågan.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    // close modal on submit
    onClose();
  };

  return (
    <>
      <Text>Välj datum:</Text>
      <Button onClick={onOpen} rightIcon={<CalendarIcon />}>
        Välj datum
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent alignItems="center">
          <ModalHeader>Välj de datum du vill boka</ModalHeader>
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
              <Button onClick={submitBooking}>Skicka förfrågan</Button>
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
