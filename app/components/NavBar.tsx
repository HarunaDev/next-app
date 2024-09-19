'use client'

import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Links = ['Home', 'Products', 'Contact']

const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={3}
      py={2}
      rounded={'md'}
      fontWeight="bold"
      color={'gray.700'}
      _hover={{
        textDecoration: 'none',
        bg: 'red.50',
        color: 'red.500',
      }}
      _activeLink={{
        bg: 'red.400',
        color: 'white',
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={'white'} px={6} boxShadow={'sm'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          color={'red.500'}
          bg={'red.50'}
          _hover={{ bg: 'red.100' }}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Text fontSize={'lg'} fontWeight="bold" color={'red.500'}>
            Todo App
          </Text>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button
            variant={'solid'}
            colorScheme={'red'}
            size={'sm'}
            bg={'red.500'}
            _hover={{ bg: 'red.600' }}
            leftIcon={<AddIcon />}>
            Create New
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}
