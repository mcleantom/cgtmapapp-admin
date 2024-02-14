import React from 'react';

import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

import SidebarItems from './SidebarItems';
import UserInfo from './UserInfo';


const Sidebar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {/* Mobile */}
            <IconButton onClick={onOpen} display={{ base: 'flex', md: 'none' }} aria-label="Open Menu" position="absolute" fontSize='20px' m={4} icon={<FiMenu />} />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="ui.secondary" maxW="250px">
                    <DrawerCloseButton />
                    <DrawerBody py={8}>
                        <Flex flexDir="column" justify="space-between" h="100%">
                            <Box>
                                <SidebarItems onClose={onClose} />
                            </Box>
                            <UserInfo />
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Desktop */}
            <Box bg="white" p={3} h="100vh" position="sticky" top="0" display={{ base: 'none', md: 'flex' }}>
                <Flex flexDir="column" justify="space-between" bg="ui.secondary" p={6} borderRadius={12}>
                    <Box>
                        <SidebarItems />
                    </Box>
                </Flex>
            </Box>
        </>
    );
}

export default Sidebar;