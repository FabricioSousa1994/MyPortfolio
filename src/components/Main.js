import { useEffect, useState } from "react";
import Typewriter from "./TypeWriter";
import { Button } from "@chakra-ui/react";


function Main(props) {
  const [showDiv, setShowDiv] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const timeoutHeading = setTimeout(() => {
      setShowDiv(true);
    }, 2000);

    const timeoutParagraph = setTimeout(() => {
      setShowParagraph(true);
    }, 5500);

    const timeoutBtn = setTimeout(() => {
      setShowBtn(true);
    }, 6000);

    return () => {
      clearTimeout(timeoutHeading, timeoutParagraph, timeoutBtn);
    };
  }, []);

  return (
    <div className="main" id={props.id}>
      <div style={{fontSize: "xx-large"}}>{showDiv ? <Typewriter /> : null}</div>
      <br />
      <div id="main-paragraph" className="paragraph">{showParagraph ? "Welcome to my portfolio! My main concern is building responsive and intuitive websites and applications. Click on the button bellow to know more about me and my projects!" : null}</div>
      <br />
      
      <div>{showBtn ? <a href="#about"><Button style={{backgroundColor: "#08fdd8"}}>See more</Button></a> : null}</div>
      
    </div>
  );
}

export default Main;
