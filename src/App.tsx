import { Card, Link } from "@mui/material";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import SlidCard from "./model/SlidCard";
import CardForm from "./components/cardForm/CardForm";
import { useWindowDimensions } from "./components/hooks/useWindowDimensions";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";

export default function App() {

  const [isFlipped, setIsFlipped] = useState(false);
  const [card, setCard] = useState(new SlidCard());
  const { vertical, height } = useWindowDimensions();

  return (
    <div style={vertical ? {} : { height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", overflowY: 'auto' }}>
      <div style={{ width: '100%', minHeight:'768px', maxWidth: '1500px', padding: '20px', flex: '1', display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
        <h1 style={{ marginBottom: '0px', fontSize: "1.5em" }}>The Slime ID (SLID) Creator</h1>
        <hr style={{ width: '100%' }} />
        <div style={vertical ? {display:'flex', flexDirection:'column-reverse'} : { display: 'flex', flex: '1', overflowY: 'hidden' }}>
          <Card style={{ flex: '1', overflowY: 'hidden' }}>
            <CardForm card={card} flipped={isFlipped} setCard={setCard} setFlipped={setIsFlipped} />
          </Card>
          <div style={{ transform: 'scale(1)'}}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <CardFront card={card}/>
              <CardBack card={card}/>
            </ReactCardFlip>
          </div>
        </div>
        <hr style={{ width: '100%' }} />
        <div style={{ marginTop: '5px', fontSize: '.8em', color: '#AAA', textAlign: 'center' }}>
          <div>Created by <Link href="https://the.slimeguy.net">Ian (The Slime Guy)</Link>, based on the SI Universe</div>
          <div style={{ fontSize: ".8em" }}>This is not a real ID! I assume no legal liability for anything you generate and what shenanigans you get up to!</div>
          <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', maxWidth: '300px', margin: '5px auto' }}>
            <img src="https://licensebuttons.net/p/zero/1.0/88x31.png" height={'20px'} />
            <div style={{ textAlign: 'left', fontSize: ".8em" }}>
              The universe this is based on, the images produced here, and the code for this page is all CC0.
              Feel free to use this as you wish :D</div>
          </div>
        </div>
      </div>
    </div>
  )
}