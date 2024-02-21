import React from 'react';

import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useToast, Select } from '@chakra-ui/react';

import { useCompaniesStore } from '../../store/companies-store';
import { useForm } from 'react-hook-form';
import { ECompanyCategory } from '../../client';

const ComapniesEnumValues: ECompanyCategory[] = ['Consulting', 'Accelerator', 'Startup'];

interface AddCompanyProps {
    isOpen: boolean;
    onClose: () => void;
    id: number;
}

const AddCompany: React.FC<AddCompanyProps> = ({ isOpen, onClose, id }) => {
    const { companies, addCompany } = useCompaniesStore();
    const thisCompany = companies.find((company) => company.id === id);
    const toast = useToast();

    const {
        handleSubmit,
        formState: { isSubmitting },
        register,
    } = useForm();

    const onSubmit = async (values: any) => {
        values.position.type = "Point";
        addCompany(values)
            .then(() => onClose())
            .catch((err) => {
                toast({
                    title: 'Error',
                    description: 'Failed to add company: ' + JSON.stringify(err.body.detail),
                    status: 'error',
                    isClosable: true,
                    duration: null
                });
            });
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
                    <ModalHeader>Add Company</ModalHeader>
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
                                    {...register("position.coordinates[0]", { required: true })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Longitude</FormLabel>
                                <Input 
                                    placeholder='Longitude'
                                    defaultValue={thisCompany?.position.coordinates[1]}
                                    type='number'
                                    {...register("position.coordinates[1]", { required: true })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Category</FormLabel>
                                <Select
                                    placeholder='Category'
                                    defaultValue={thisCompany?.category}
                                    {...register("category", { required: true })}
                                >
                                    {ComapniesEnumValues.map((value) => (
                                        <option key={value} value={value}>{value}</option>
                                    ))}
                                </Select>
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

export default AddCompany;