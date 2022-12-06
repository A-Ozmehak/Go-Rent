import { Box, Divider, Flex, Image } from "@chakra-ui/react";
import { userInterface } from "../../utils/interface";

interface MinimalProfileCardProps {
  profile: userInterface;
}

const MinimalProfileCard = ({ profile }: MinimalProfileCardProps) => {
  return (
    <Box>
      <Divider 
        mb={2} 
        borderWidth={1} 
        width= "100%"
        borderColor="black"
        display={['none', 'none','block']}
      />
      <Flex 
        direction="row"
        alignItems="center"
        gap={3}
        overflow="hidden"
      > 
        <Image 
          objectFit="cover"
          h={[8,12]}
          w={[8,12]}
          borderRadius="20rem"
          src={profile.image} 
          alt={profile.username} 
        /> 
        <h4>{profile.username}</h4>
      </Flex>
      <Divider 
        display={['block', 'block','none']}
        mt={2} 
        borderWidth={1} 
        width="100%" 
        borderColor="black"/>
    </Box>
  );
};

export default MinimalProfileCard;
