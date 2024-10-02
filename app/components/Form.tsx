'use client'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'

import React from 'react'

interface FormData {
  title: string;
  message: string;
}

export default function Form() {
  // defining state with typed object
  const [formData, setFormData] = useState<FormData>({
    title: '',
    message: ''
  })

  // function to handle state change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData)
  };

  // function to handl button submission
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      // api code
      toast.success("Sent")
    } catch(error) {
      toast.error("Failed")
    }
  }

  return (
    <Container bg="white" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="red.400"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box bg="white" borderRadius="lg" boxShadow="lg">
                  <Box m={8} color="red.700">
                    <ToastContainer theme="dark" autoClose={2000} />
                    <form onSubmit={onSubmitHandler}>
                    <VStack spacing={5}>
                      <FormControl id="title">
                        <FormLabel color="red.500">Title</FormLabel>
                        <InputGroup borderColor="red.300">
                          <Input type="text" name="title" value={formData.title} onChange={handleInputChange} size="md" focusBorderColor="red.500" />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="message">
                        <FormLabel color="red.500">Message</FormLabel>
                        <Textarea name="message" value={formData.message} onChange={handleInputChange}
                          borderColor="red.300"
                          _hover={{
                            borderColor: 'red.400',
                          }}
                          focusBorderColor="red.500"
                          placeholder="Enter your message"
                        />
                      </FormControl>
                      <FormControl id="submit" float="right">
                        <Button id='submit' type='submit'
                          variant="solid"
                          bg="red.500"
                          color="white"
                          _hover={{ bg: 'red.600' }}>
                          Post
                        </Button>
                      </FormControl>
                    </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}
