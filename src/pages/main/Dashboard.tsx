import React from 'react';

import { Text, Container, Heading } from '@chakra-ui/react';

const Dashboard: React.FC = () => {
    return (
        <>
            <Container maxW="full">
                <Heading size="lg" color="gray.700" textAlign={{ base: "center", md: "left" }} pt={12}>
                    <Text>Dashboard</Text>
                </Heading>
            </Container>
        </>
    )
};

export default Dashboard;