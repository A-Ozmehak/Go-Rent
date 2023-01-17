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
  Text,
  Box,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

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
        <Flex
          direction={["column", "column", "row"]}
          justifyContent="space-between"
          gap={[2, 2, 10, 20]}
          pt={2}
          pb={2}
          width="100%"
        >
          <Flex flex="1" alignContent="center" direction={"column"}>
            <Image
              src={booking.listing.media}
              alt="listing picture"
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

          <Flex flex="2" justifyContent="space-between" direction={"column"}>
            <Flex justifyContent="space-between" direction="row">
              <Flex direction={"column"}>
                <h4>{booking.listing.title}</h4>
                <Box>
                  <Text fontSize={[13, 16]}>
                    Totalpris:
                    {booking.bookingDetails.totalPrice} kr
                  </Text>
                </Box>
              </Flex>

              <Flex direction={"column"}>
                <h4>datum</h4>
                <Flex>
                  <Text fontSize={[13, 16]}>{startDate} -</Text>
                  <Text fontSize={[13, 16]}>{endDate}</Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex justifyContent="space-between" direction={"row"}>
              {booking.buyer !== loggedInUser.uid && (
                <MinimalProfileCard profile={booking.buyer} />
              )}

              {booking.status === "pending" &&
                booking.seller.id === loggedInUser.uid && (
                  <form onSubmit={onSubmit}>
                    <ButtonGroup>
                      <Button
                        fontSize={[13, 15]}
                        variant="Accept"
                        type="submit"
                        name="acceptButton"
                        onClick={() => (status.button = "accept")}
                      >
                        Acceptera
                      </Button>
                      <Button
                        variant="Reject"
                        fontSize={[13, 15]}
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
        </Flex>
      ) : null}

      <Divider borderWidth={1} borderColor={"blackAlpha.200"} />
    </>
  );
};
export default BookingCard;
