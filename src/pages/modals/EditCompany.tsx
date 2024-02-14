import React from 'react';

import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';


interface EditCompanyProps {
    isOpen: boolean;
    onClose: () => void;
}


const EditCompany: React.FC<EditCompanyProps> = ({ isOpen, onClose }) => {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={{ base: "sm", md: "md" }}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Company</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder='Name' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Latitude</FormLabel>
                            <Input placeholder='Latitude' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Longitude</FormLabel>
                            <Input placeholder='Longitude' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Category</FormLabel>
                            <Input placeholder='Category' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input placeholder='Description' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Website</FormLabel>
                            <Input placeholder='Website' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Logo</FormLabel>
                            <Input placeholder='Logo' />
                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditCompany;