import React, { useEffect, useState } from 'react';

import { Container, Flex, Heading, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure, useToast, Button } from '@chakra-ui/react';

import { useCompaniesStore } from '../../store/companies-store';

import ActionsMenu from '../../components/ActionsMenu';
import AddCompany from '../modals/AddCompany';

const Companies: React.FC = () => {
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const { companies, getCompanies } = useCompaniesStore();
    const addCompanyModal = useDisclosure();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setIsLoading(true);
                await getCompanies();
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                toast({
                    title: 'Error',
                    description: 'Failed to fetch companies',
                    status: 'error',
                    isClosable: true
                });
            }
        }
        fetchItems();
    }, [getCompanies, toast]);

    return (
        <>
            {isLoading ? (
                <Flex justify="center" align="center" height="100vh" width="full">
                    <Spinner size="xl" color='ui.main' />
                </Flex>
            ) : (
                companies &&
                <Container maxW="full">
                    <Heading size="lg" color="gray.700" textAlign={{ base: "center", md: "left" }} pt={12}>
                        Companies Management
                    </Heading>
                    <Button onClick={addCompanyModal.onOpen} colorScheme="green" size="sm" mt={4}>Add Company</Button>
                    <AddCompany isOpen={addCompanyModal.isOpen} onClose={addCompanyModal.onClose} id={0} />
                    <TableContainer>
                        <Table size={{ base: "sm", md: "md" }} style={{borderCollapse:"separate", borderSpacing:"0 1em"}}>
                            <Thead>
                                <Tr>
                                    <Th></Th>
                                    <Th>ID</Th>
                                    <Th>Name</Th>
                                    <Th>Lat</Th>
                                    <Th>Lng</Th>
                                    <Th>Category</Th>
                                    <Th>Description</Th>
                                    <Th>Website</Th>
                                    <Th>Logo</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {companies.map((company) => (
                                    <Tr key={company.id}>
                                        <Td>
                                            <ActionsMenu type={"Company"} id={company.id} />
                                        </Td>
                                        <Td>{company.id}</Td>
                                        <Td>{company.name}</Td>
                                        <Td>{company.position.coordinates[1]}</Td>
                                        <Td>{company.position.coordinates[0]}</Td>
                                        <Td>{company.category}</Td>
                                        <Td>{company.description}</Td>
                                        <Td>{company.website}</Td>
                                        <Td>{company.logo}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Container>
            )}
        </>
    )
}

export default Companies;