import { Card, Image } from "@chakra-ui/react";
import { userInterface } from "../../utils/interface";
import { profileImageStyle, card } from "./ProfileCard";

interface MinimalProfileCardProps {
  profile: userInterface;
}

const MinimalProfileCard = ({ profile }: MinimalProfileCardProps) => {
  return (
    <Card
      sx={card}
      direction={{ base: "row", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image sx={profileImageStyle} src={profile.image} alt="profile picture" />
      <h3>{profile.username}</h3>
    </Card>
  );
};

export default MinimalProfileCard;
