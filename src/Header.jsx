import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Center, Flex, Link,  Tooltip } from '@chakra-ui/react';
import { RiImageAddLine,  RiScissorsLine, RiPencilLine,  } from 'react-icons/ri';
import {PiTextboxDuotone }  from 'react-icons/pi'
import {TbFilters,TbReplace ,TbArrowsExchange }  from 'react-icons/tb'
import {BiCustomize }  from 'react-icons/bi'
const Header = () => {
  const location = useLocation();

  const routes = [
    { path: '/', label: 'Text to Image', icon: RiImageAddLine },
    { path: '/replace', label: 'Replace Background', icon: TbReplace },
    { path: '/reimagine', label: 'Reimagine', icon: TbArrowsExchange },
    { path: '/remove', label: 'Remove Background', icon: RiScissorsLine },
    { path: '/sketchToImage', label: 'Sketch to Image', icon: RiPencilLine },
    { path: '/removeText', label: 'Remove Text', icon: PiTextboxDuotone },
    { path: '/preFilters', label: 'Instagram Filters', icon: TbFilters },
    { path: '/customFilters', label: 'Custom Filters', icon: BiCustomize },
  ];

  return (
    <Center>
    <Box  
    zIndex={999}   
     position={"fixed"}
     top="2"
    width={["90%", "80%"]}
    mx="auto"
    bg="gray.800"
    color="white"
    py={2} // Reduced height
    borderRadius="lg"
    boxShadow="lg"
>
      <Flex direction={ 'row'} overflowX="auto" align="center" justify="center">
        {routes.map((route) => (
          <Tooltip key={route.path} label={route.label} aria-label={route.label}>
            <Link
              as={RouterLink}
              to={route.path}
              fontSize="md"
              px={4}
              py={2}
              rounded="md"
              _hover={{ bg: 'gray.700' }}
              bg={location.pathname === route.path ? 'gray.700' : 'transparent'}
              mb={[2, 0]}
              mx={2}
            >
              <route.icon size="20px" />
            </Link>
          </Tooltip>
        ))}
      </Flex>
    </Box>
    </Center>

  );
};

export default Header;
