import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, useDisclosure,
    Text,
    Textarea
} from '@chakra-ui/react'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../config/firebase";

interface props {
    isOpen: any
    onClose: any
}

const ContactModal = ({isOpen, onClose}: props) => {
    const [user] = useAuthState(auth);

    // let [value, setValue] = React.useState('')
    //
    // let handleInputChange = (e) => {
    //     let inputValue = e.target.value
    //     setValue(inputValue)
    // }
    return (
                <>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay/>
                        <ModalContent>
                            <ModalHeader>Kontakta {user?.displayName} via mejl</ModalHeader>
                            <ModalCloseButton/>
                            <ModalBody>
                                <Text>Meddelande</Text>
                                <Textarea
                                    height="30rem"
                                    // value={value}
                                    // onChange={handleInputChange}
                                    placeholder='Meddelande'
                                    size='sm'
                                />
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Skicka
                                </Button>

                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
    )};

export default ContactModal;
