import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsPerson, BsLinkedin } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Contact(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      name,
      email,
      message,
    };
    axios
      .post("https://fabricio-portfolio-api.cyclic.app/send", dataToSubmit)
      .then((res) => { console.log(res);
      toast.success("Your message has been sent");
        })
      .catch((err) => { console.log(err);
      toast.error("Something went wrong, try again please");
      })
    console.log(dataToSubmit);
  };


  return (
    <Container bg={useColorModeValue("gray.50", "gray.800")} maxW="full" mt={0} centerContent overflow="hidden" id={props.id} className='contacts-container'>
      <Heading className="contact-heading">CONTACT</Heading>
      <br/>
      <Flex>
        <Box
          bg="#2D3748"
          color="white"
          borderRadius="lg"

          className='contact-card-testing'
          >
          <Box p={4}>
            <Wrap className='contact-wrap'>
              <WrapItem className='contact-box'>
                <Box>
                  <Text color="gray.500" className='contact-text'>
                    Fill up the form to contact me!
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3}>
                      <Button
                        size="md"
                        height="48px"
/*                         width="300px"
 */                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        + 351 926340039
                      </Button>
                      <Button
                        size="md"
                        height="48px"
/*                         width="300px"
 */                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                        className='email-icon'
                        >
                        antonio.f.ssousa94@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
/*                         width="300px"
 */                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Lisbon, Portugal
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    className='contact-links'
                  >
                      <a href="https://www.linkedin.com/in/fabricio-ssousa/" target="_blank" rel="noopener noreferrer">
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsLinkedin size="28px" />}
                    />
                    </a>
                    <a href="https://github.com/FabricioSousa1994" target="_blank" rel="noopener noreferrer">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    />
                    </a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem className='contact-form'>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name" htmlFor="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" onChange={(e) => setName(e.target.value)}
                      value={name} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email" htmlFor="email">
                        <FormLabel>E-mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800"/>}
                          />
                          <Input type="text" size="md" onChange={(e) => setEmail(e.target.value)}
                      value={email}/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message" htmlFor="message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                          onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        />
                      </FormControl>
                      <FormControl float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                          type="submit"
                          onClick={handleSubmit}
                          >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Contact;


















