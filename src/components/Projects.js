
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"





function Projects(props) {
  return (
    <div id={props.id} className="projects">
        <br/>
        <Heading className="projects-heading">PROJECTS</Heading>
        <br/>
        <div className="projects-cards">
        <Card className="card">      
  <CardBody className="card-body">
    <Image
      src='auto-premium.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className="project-images"
      w="full"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' style={{color:"#08fdd8"}}>Auto Premium</Heading>
      <Text>
      A website to sell and buy cars, the site contain all CRUD operations, and have features such as localization of the announcement, and it's possible to send a message to seller's phone directly from the site with just a click of a button.
The skills used on this website were React, NodeJS, MongoDB, JavaScript, HTML5 and CSS3.
      </Text>
    </Stack>
  </CardBody>
  <CardFooter className="card-footer">
        <a href="https://auto-premium.netlify.app/" target="_blank" rel="noopener noreferrer" className="projects-btn">
      <Button variant='solid' style={{color:"#08fdd8", backgroundColor:"#3d4756"}}>
        Demo
      </Button>
      </a>


      <a href="https://github.com/joaovff/Auto-Premium-Frontend" target="_blank" rel="noopener noreferrer">
      <Button variant='solid' style={{color:"#08fdd8", backgroundColor:"#3d4756"}}>
        Code
      </Button>
      </a>

        {/* <select variant='solid' style={{color:"#08fdd8", backgroundColor:"#3d4756"}}>
        <option selected disabled hidden>Code</option>
  <option value="frontend"><a href="https://github.com/joaovff/Auto-Premium-Frontend" target="_blank" rel="noopener noreferrer">Frontend</a></option>
  <option value="backend"><a href="https://github.com/joaovff/Auto-Premium-Backend" target="_blank" rel="noopener noreferrer">Backend</a></option>
</select>   */}    
    
  </CardFooter>
</Card>

<br/>

<Card className="card">
  <CardBody className="card-body">
    <Image
      src='dentinho-madeira.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className="project-images"
      w="full"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' style={{color:"#08fdd8"}}>Dentinho da Madeira</Heading>
      <Text>
      This project is about "dentinho". Dentinho is an expression used in Madeira Island to describe a little dish that comes along with a drink asked in a bar. On this site you can search for dentinhos and bars, so you can see what dentinho have in each bar. The project contains all CRUD operations and was made using NodeJS, HandleBars, MongoDB, JavaScript, HTML5 and CSS3.
      </Text>
    </Stack>
  </CardBody>
  <CardFooter className="card-footer">
        <a href="https://dentolas-project.cyclic.app/" target="_blank" rel="noopener noreferrer" className="projects-btn">
      <Button variant='solid' style={{color:"#08fdd8", backgroundColor:"#3d4756"}}>
        Demo
      </Button>
      </a>
      
      <a href="https://github.com/FabricioSousa1994/DentolasProject" target="_blank" rel="noopener noreferrer">
      <Button variant='solid' style={{color:"#08fdd8", backgroundColor:"#3d4756"}}>
        Code
      </Button>
      </a>
    
  </CardFooter>
</Card>

<br/>

<Card className="card">
  <CardBody className="card-body">
    <Image
      src="road-to-125.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      className="project-images"
      w="full"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' style={{color:"#08fdd8"}}>Road to 125</Heading>
      <Text>
      A cross rad game, made with Canvas, Javascript, HTML5 and CSS3. The objective is to cross three roads without crashing into any car that is passing those roads, If you win, your score increases and you start again but it gets more difficult to pass the roads.
      </Text>
    </Stack>
  </CardBody>
  <CardFooter className="card-footer">
        <a href="https://roadto125.netlify.app/" target="_blank" rel="noopener noreferrer" className="projects-btn">
      <Button variant='solid' style={{color:"#08fdd8", backgroundColor:"#3d4756"}}>
        Demo
      </Button>
      </a>

      <a href="https://github.com/FabricioSousa1994/Project-Joao-e-Fabr-cio" target="_blank" rel="noopener noreferrer">
      <Button variant='solid' style={{color:"#08fdd8", backgroundColor:"#3d4756"}}>
        Code
      </Button>
      </a>
    
  </CardFooter>
</Card>
</div>


    </div>
  )
}

export default Projects