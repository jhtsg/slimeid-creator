import SlidCard from "../../model/SlidCard";
import CardFront from "../card/CardFront";
import CardBack from "../card/CardBack";
import { useEffect, useRef } from "react";
import { useToPng } from '@hugocxl/react-to-image'
import ReactDOM from "react-dom";

export default function ExportDialog(props: {
    card: SlidCard
    profileSrc?: string
    open: boolean
    setOpen: (val: boolean) => void
}) {

    const { card, profileSrc, open, setOpen } = props

    const [_, convertFront,frontRef] = useToPng<HTMLDivElement>({
        quality: 0.8,
        onSuccess: data => {
          const link = document.createElement('a');
          link.download = `SLID-${card.name.replace(' ','-')}-FRONT.png`;
          link.href = data;
          link.click();
        }
      })

      const [__, convertBack,backRef] = useToPng<HTMLDivElement>({
        quality: 0.8,
        onSuccess: data => {
          const link = document.createElement('a');
          link.download = `SLID-${card.name.replace(' ','-')}-BACK.png`;
          link.href = data;
          link.click();
        }
      })
 
      const hasRun = useRef(false)

      useEffect(() => {
        if (open && !hasRun.current) {
          hasRun.current = true;
      
          const runCapture = async () => {
            await new Promise(res => setTimeout(res, 500)); // allow time to render
            await convertFront();
            await convertBack();
            setOpen(false);
            hasRun.current = false; // reset so it can run next time
          };
      
          runCapture();
        }
      }, [open]);

      return ReactDOM.createPortal(<div style={{ position: 'absolute', top: '-10000px', left: '-10000px' }}>
            <div ref={frontRef}><CardFront card={card} profileSrc={profileSrc} /></div>       
            <div ref={backRef}><CardBack card={card} /></div>
      </div>, document.body)

}