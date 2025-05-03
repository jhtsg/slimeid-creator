import { Card, Link } from "@mui/material";
import { useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";
import SlidCard from "./model/SlidCard";
import CardForm from "./components/cardForm/CardForm";
import { useWindowDimensions } from "./components/hooks/useWindowDimensions";
import CardBack from "./components/card/CardBack";
import CardFront from "./components/card/CardFront";

export default function App() {

  const [isFlipped, setIsFlipped] = useState(false);
  const [card, setCard] = useState(new SlidCard());
  const { vertical, width } = useWindowDimensions();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [fileName, setFileName] = useState<string | undefined>(undefined);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const objectUrl = URL.createObjectURL(file);
      setImageSrc(objectUrl);
    }
  };

  const onUploadClick = () => {
    fileInputRef.current?.click();
  };

  //Below 1100px we need to start scaling down
  //Max at 0.75
  //Min at 0.4 with a marginLeft of -300px, and a marginTop/Bottom of -170px

  return (
    <div style={vertical ? {} : { height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", overflowY: 'auto' }}>
      <div style={{ width: '100%', minHeight: '768px', maxWidth: '1500px', padding: '20px', flex: '1', display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
        <h1 style={{ marginBottom: '0px', fontSize: "1.5em" }}>The Slime ID (SLID) Creator</h1>
        <hr style={{ width: '100%' }} />
        <div style={vertical ? { display: 'flex', flexDirection: 'column-reverse' } : { display: 'flex', flex: '1', overflowY: 'hidden' }}>
          <Card style={{ flex: '1', overflowY: 'hidden' }}>
            <CardForm card={card} flipped={isFlipped} setCard={setCard} setFlipped={setIsFlipped} onUploadClick={onUploadClick} filename={fileName} profileSrc={imageSrc} />
          </Card>
          <div style={
            width < 500 ? { transform: 'scale(0.3)', marginLeft: '-360px', marginTop: '-220px', marginBottom: '-220px', maxWidth: '1035px', margin: '0 auto' } :
              width < 1100 ?
                { transform: 'scale(0.4)', marginLeft: '-300px', marginTop: '-170px', marginBottom: '-170px', maxWidth: '1035px', margin: '0 auto' }
                : { transform: 'scale(0.95)', maxWidth: '1035px', margin: '0 auto' }
          }>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <CardFront card={card} profileSrc={imageSrc} />
              <CardBack card={card} />
            </ReactCardFlip>
          </div>
        </div>
        <hr style={{ width: '100%' }} />
        <div style={{ marginTop: '5px', fontSize: '.8em', color: '#AAA', textAlign: 'center' }}>
          <div>Created by <Link href="https://the.slimeguy.net">Ian (The Slime Guy)</Link>, based on the SI Universe</div>
          <div style={{ fontSize: ".8em" }}>This is not a real ID! I assume no legal liability for anything you generate and what shenanigans you get up to!</div>
          <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', maxWidth: '300px', margin: '5px auto' }}>
            <img src="https://licensebuttons.net/p/zero/1.0/88x31.png" height={'20px'} />

          </div>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

    </div>
  )
}