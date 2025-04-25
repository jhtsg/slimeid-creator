import { Dialog, DialogContent } from "@mui/material";
import SlidCard from "../../model/SlidCard";
import CardFront from "../card/CardFront";
import CardBack from "../card/CardBack";
import { useEffect } from "react";
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
 
      useEffect(()=>{
        if(open){
            new Promise(resolve=>setTimeout(resolve,1000)).then(()=>{
                convertFront();
                convertBack();
                setOpen(false)    
            })  
        }
      },[open])

      return ReactDOM.createPortal(<div style={{ position: 'absolute', top: '-10000px', left: '-10000px' }}>
            <div ref={frontRef}><CardFront card={card} profileSrc={profileSrc} /></div>       
            <div ref={backRef}><CardBack card={card} /></div>
      </div>, document.body)

}