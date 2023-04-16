import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const NavLink = ({ children, id }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    onClick={() => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    }}
  >
    {children}
  </Link>
);

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} className="nav">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack>
            <Box style={{display:"flex", alignItems:"center"}}>
            <Avatar
                  size={'md'}
                  src={
                    'fotoPerfil.jpg'
                  }
                />
              <Box style={{paddingLeft: "1rem"}}>Fabrício Sousa</Box>  
            </Box>
          </HStack>
          <HStack id="nav-bar" as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.id} id={link.id}>{link.name}</NavLink>
            ))}
          </HStack>
        </Flex>
      </Box>

              <Box>
      {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.id} id={link.id}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Nav;


