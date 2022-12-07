import { bookingInterface } from "../../utils/interface";
import MinimalProfileCard from "./MinimalProfileCard.";
import {
  Image,
  Flex,
  ButtonGroup,
  Button,
  useToast,
  Badge,
  Divider,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { profile } from "console";

interface BookingCardProps {
  booking: bookingInterface;
  refreshData: () => void;
}

const BookingCard = ({ booking, refreshData }: BookingCardProps) => {
  const [loggedInUser] = useAuthState(auth);

  const startDate = dayjs(booking.bookingDetails.bookingStartDate).format(
    "YYYY-MM-DD"
  );
  const endDate = dayjs(booking.bookingDetails.bookingEndDate).format(
    "YYYY-MM-DD"
  );
  const toast = useToast();

  const status = {
    button: "",
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (booking.id) {
      const statusRef = doc(db, "bookings", booking.id);

      if (status.button === "accept") {
        await updateDoc(statusRef, {
          status: "accepted",
        });

        toast({
          title: "Du har godkänt bokningen!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        refreshData();
      }

      if (status.button === "reject") {
        await updateDoc(statusRef, {
          status: "rejected",
        });

        toast({
          title: "Du har nekat bokningen!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        refreshData();
      }
    }
  };

  return (
    <>
      {loggedInUser && booking ? (
        <Flex gap={10} padding={2} justifyContent={"space-between"}>
          <Flex direction={"column"}>
            {booking.buyer !== loggedInUser.uid && (
              <MinimalProfileCard profile={booking.seller} />
            )}
            <Image
              src={booking.listing.media}
              alt="listing picture"
              width={180}
              objectFit={"cover"}
              sx={{ borderRadius: "0.5rem" }}
              height={20}
            />
            {booking.seller.id !== loggedInUser.uid ? (
              <Badge
                mt={1}
                p={0.5}
                borderRadius={5}
                textAlign="center"
                colorScheme="purple"
              >
                Köpare
              </Badge>
            ) : (
              <Badge
                mt={1}
                p={0.5}
                borderRadius={5}
                textAlign="center"
                colorScheme="green"
              >
                Uthyrare
              </Badge>
            )}
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
            {booking.status === "pending" &&
              booking.seller.id === loggedInUser.uid && 
              (
                <form onSubmit={onSubmit}>
                  <ButtonGroup gap={10}>
                    <Button
                      variant="Accept"
                      type="submit"
                      name="acceptButton"
                      onClick={() => (status.button = "accept")}
                    >
                      Acceptera
                    </Button>
                    <Button
                      variant="Reject"
                      type="submit"
                      name="rejectButton"
                      onClick={() => (status.button = "reject")}
                    >
                      Neka
                    </Button>
                  </ButtonGroup>
                </form>
              )}
          </Flex>
        </Flex>
      ) : null}
      <Divider borderWidth={1} borderColor={"blackAlpha.200"} />
    </>
  );
};
export default BookingCard;
