import {
  Avatar,
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function About(props) {
  return (
    <Stack
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
      id={props.id}
      className="about"
    >
      
      <Heading className="about-heading"> Who am I?</Heading>

      <Box className="about-div">
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"justify"}
        maxW={"5xl"}
      >
        Hi there, I'm Fabrício Sousa, I'm 28 years old web developer from
        Madeira Island Portugal, currently living in Lisbon. Since 2015 I have
        been working in the field of Justice, but techonology and what goes on
        behind the scenes in the digital world always fascinated me. That's why
        I decided to pursue my interest and enrolled in the Ironhack web
        development bootcamp in September 2022. During the intensive program, I
        learned skills such us HTML5, CSS3, JavaScript, React, and Node.js,
        among other technologies. I worked on various projects that challenged
        me to think creatively and collaboratively, and I learned how to design
        and develop intuitive and responsive web applications from scratch. I
        successfully completed the Bootcamp in March 2023, and now, as a{" "}
        <a
          className="certificate"
          href="https://www.credential.net/6b8ca033-41bf-4007-bfdc-10d6bcc98fa9#gs.vhtnpp"
          target="_blank"
          rel="noopener noreferrer"
        >
          certified
        </a>{" "}
        Fullstack Web Developer, I'm excited to apply my skills and knowledge to
        a new role in this field! I'm eager to join a dynamic team where I can
        continue to learn, grow, and make a positive impact. Thank you for
        taking the time to learn more about me, scroll down to see my projects!
      </Text>


      <Box textAlign={"center"}>
        <Avatar
          size="x-lg"
          src={"fotoPerfil.jpg"}
          mb={2}
          className="about-avatar"
        />

        <Text fontWeight={600}>Fabrício Sousa</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Fullstack Developer
        </Text>
      </Box>
      </Box>
    </Stack>
  );
}

export default About;
