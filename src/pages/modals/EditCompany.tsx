import React from 'react';

import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';

import { useCompaniesStore } from '../../store/companies-store';
import { useForm } from 'react-hook-form';

interface EditCompanyProps {
    isOpen: boolean;
    onClose: () => void;
    id: string;
}


const EditCompany: React.FC<EditCompanyProps> = ({ isOpen, onClose, id }) => {
    const { companies } = useCompaniesStore();
    const thisCompany = companies.find((company) => company._id === id);
    const {
        handleSubmit,
        formState: { isSubmitting },
        reset,
        register
    } = useForm();

    const onSubmit = (values: any) => {
        return new Promise((resolve: any) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              reset();
              resolve()
            }, 500)
        })
    }


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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    placeholder='Name'
                                    defaultValue={thisCompany?.name}
                                    {...register("name", { required: true })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Latitude</FormLabel>
                                <Input
                                    placeholder='Latitude'
                                    defaultValue={thisCompany?.position.coordinates[0]}
                                    type='number'
                                    {...register("latitude", { required: true })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Longitude</FormLabel>
                                <Input 
                                    placeholder='Longitude'
                                    defaultValue={thisCompany?.position.coordinates[1]}
                                    type='number'
                                    {...register("longitude", { required: true })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Category</FormLabel>
                                <Input
                                    placeholder='Category' 
                                    defaultValue={thisCompany?.category}
                                    {...register("category", { required: true })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Input
                                    placeholder='Description'
                                    defaultValue={thisCompany?.description}
                                    {...register("description", { required: true })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Website</FormLabel>
                                <Input
                                    placeholder='Website'
                                    defaultValue={thisCompany?.website}
                                    {...register("website", { required: true })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Logo</FormLabel>
                                <Input
                                    placeholder='Logo'
                                    defaultValue={thisCompany?.logo}
                                    {...register("logo", { required: true })}
                                />
                            </FormControl>
                            {/* <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage> */}
                            <Button mt={4} colorScheme="teal" type="submit" isLoading={isSubmitting}>
                                Save
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditCompany;