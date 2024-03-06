import React from 'react';

import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useToast,
NumberInput, NumberInputField, Select } from '@chakra-ui/react';

import { useCompaniesStore } from '../../store/companies-store';
import { useForm } from 'react-hook-form';
import { ECompanyCategory } from '../../client';

const ComapniesEnumValues: ECompanyCategory[] = ['Consulting', 'Accelerator', 'Startup'];

interface EditCompanyProps {
    isOpen: boolean;
    onClose: () => void;
    id: number;
}

const EditCompany: React.FC<EditCompanyProps> = ({ isOpen, onClose, id }) => {
    const toast = useToast();
    const { companies, updateCompany } = useCompaniesStore();
    const thisCompany = companies.find((company) => company.id === id);
    
    const {
        handleSubmit,
        formState: { isSubmitting },
        register
    } = useForm();

    const onSubmit = (values: any) => {
        values.position.type = "Point";
        updateCompany(id, values)
            .then(() => onClose())
            .catch((err) => {
                toast({
                    title: 'Error',
                    description: 'Failed to update company: ' + err,
                    status: 'error',
                    isClosable: true
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
                                <NumberInput defaultValue={thisCompany?.position.coordinates[0]}>
                                    <NumberInputField 
                                        placeholder='Latitude'
                                        type='number'
                                        {...register("position.coordinates[0]", { required: true })}
                                    />
                                </NumberInput>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Longitude</FormLabel>
                                <NumberInput defaultValue={thisCompany?.position.coordinates[1]}>
                                    <NumberInputField 
                                        placeholder='Longitude'
                                        type='number'
                                        {...register("position.coordinates[1]", { required: true })}
                                    />
                                </NumberInput>
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
                            <FormControl>
                                <FormLabel>Icon</FormLabel>
                                <Input
                                    placeholder='Icon'
                                    defaultValue={thisCompany?.icon? thisCompany?.icon : ''}
                                    {...register("icon", { required: true })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Banner Image</FormLabel>
                                <Input
                                    placeholder='Banner Image'
                                    defaultValue={thisCompany?.banner_image? thisCompany?.banner_image : ''}
                                    {...register("banner_image", { required: true })}
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