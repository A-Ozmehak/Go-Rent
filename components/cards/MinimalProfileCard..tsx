import { Card, Image, Text } from "@chakra-ui/react";
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
    {profile.image?.length
    ? <Image sx={profileImageStyle} src={profile.image} alt="profile picture" />
    : <Text sx={{p: "1rem", bg: "lightGray"}}>{profile.firstName?.charAt(0)}</Text>
    }
      <h3>{profile.username}</h3>
    </Card>
  );
};

export default MinimalProfileCard;
