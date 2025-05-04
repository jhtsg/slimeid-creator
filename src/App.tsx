import { Card, Link } from "@mui/material";
import { useRef, useState } from "react";
import SlidCard from "./model/SlidCard";
import CardForm from "./components/cardForm/CardForm";
import { useWindowDimensions } from "./components/hooks/useWindowDimensions";
import CardDisplay from "./components/card/CardDisplay";

export default function App() {

  const [isFlipped, setIsFlipped] = useState(false);
  const [card, setCard] = useState(new SlidCard());
  const { vertical } = useWindowDimensions();

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

  return (
    <div style={vertical ? {} : { height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", overflowY: 'auto' }}>
      <div style={{ width: '100%', minHeight: '768px', maxWidth: '1500px', padding: '20px', flex: '1', display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div>
            <img src={"/sitight.png"} style={{ height: '48px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Orbitron' }}>
            <div style={{ fontSize: '2.75em', fontWeight: '500' }}>SLID</div>
            <hr style={{ height: '48px' }} />
            <div style={{ fontSize: '.9em' }}>
              <div>Slime Institute</div>
              <div>Specimen Identification Card Creation System</div>
            </div>
          </div>

        </div>
        <hr style={{ width: '100%' }} />
        <div style={{ display: 'flex', flexDirection: vertical ? 'column-reverse' : undefined, flex: vertical ? undefined : 1, overflowY: vertical ? undefined : 'hidden' }}>
          <Card style={{ overflowY: 'hidden', flexShrink: 0, width: vertical ? undefined : '400px' }}>
            <CardForm card={card} flipped={isFlipped} setCard={setCard} setFlipped={setIsFlipped} onUploadClick={onUploadClick} filename={fileName} profileSrc={imageSrc} />
          </Card>
          <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', flex: '1' }}>
            <CardDisplay card={card} isFlipped={isFlipped} profileSrc={imageSrc} style={{ padding: '20px', width: '100%', aspectRatio: '1035/660', maxWidth: '1000px' }} />
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