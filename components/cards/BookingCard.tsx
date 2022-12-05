import { bookingInterface } from "../../utils/interface";
import MinimalProfileCard from "./MinimalProfileCard.";
import { Image, Flex, ButtonGroup, Button, useToast } from "@chakra-ui/react";
import dayjs from "dayjs";
import { borderRadius } from "@mui/system";
import { useEffect, useState } from "react";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

interface BookingCardProps {
  booking: bookingInterface;
}

const BookingCard = ({ booking }: BookingCardProps) => {
  //   const [status, setStatus] = useState("");
  const startDate = dayjs(booking.bookingDetails.bookingStartDate).format(
    "YYYY-MM-DD"
  );
  const endDate = dayjs(booking.bookingDetails.bookingEndDate).format(
    "YYYY-MM-DD"
  );

  const toast = useToast();

  const [accStatus, setAccStatus] = useState(false)
  const [rejStatus, setRejStatus] = useState(false)

//   useEffect(() => {
//     const setAccept = async () => {
//       if (booking.id)
//         await setDoc(doc(db, "bookings", booking.id), {
//           Status: "accepted",
//         });
//       toast({
//         title: "Du har godkänt bokningen!",
//         status: "success",
//         duration: 9000,
//         isClosable: true,
//       });
//     };
//     setAccStatus(true)
//     setAccept();
//   }, []);

//   useEffect(() => {
//     const setReject = async () => {
//       if (booking.id)
//         await setDoc(doc(db, "bookings", booking.id), {
//           Status: "rejected",
//         });
//       toast({
//         title: "Du har nekat bokningen!",
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//     };
//     setRejStatus(true)
//     setReject();
//   }, []);

  return (
    <Flex gap={10} padding={2} justifyContent={"space-between"}>
      <Flex direction={"column"}>
        <MinimalProfileCard profile={booking.seller} />
        <Image
          src={booking.listing.media}
          alt="listing picture"
          width={180}
          objectFit={"cover"}
          sx={{ borderRadius: "0.5rem" }}
          height={20}
        />
      </Flex>

      <Flex direction={"column"} gap={5}>
        <Flex gap={10}>
          <Flex direction={"column"}>
            <h4>{booking.listing.title}</h4>
            <p>Totalpris: {booking.bookingDetails.totalPrice} kr</p>
          </Flex>
          <Flex direction={"column"}>
            <h4>datum</h4>
            <p>
              {startDate} - {endDate}
            </p>
          </Flex>
        </Flex>

        <ButtonGroup gap={10}>
          <Button variant="Accept" onClick={()=> setAccStatus}>
            Acceptera
          </Button>
          <Button variant="Reject" onClick={() => setRejStatus}>
            Neka
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
export default BookingCard;
