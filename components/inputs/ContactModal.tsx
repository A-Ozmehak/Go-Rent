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

const ContactModal = () => {
    // let [value, setValue] = React.useState('')
    //
    // let handleInputChange = (e) => {
    //     let inputValue = e.target.value
    //     setValue(inputValue)
    // }
    return (
        function BasicUsage() {
            const {isOpen, onOpen, onClose} = useDisclosure()
            return (
                <>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay/>
                        <ModalContent>
                            <ModalHeader>Kontakta Monke via mejl</ModalHeader>
                            <ModalCloseButton/>
                            <ModalBody>
                                <Text>Meddelande</Text>
                                <Textarea
                                    // value={value}
                                    // onChange={handleInputChange}
                                    placeholder='Meddelande'
                                    size='sm'
                                />
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>

                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            )
        }
    )
};

export default ContactModal;
