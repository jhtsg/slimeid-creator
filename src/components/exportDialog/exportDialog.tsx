import { Dialog, DialogContent } from "@mui/material";
import SlidCard from "../../model/SlidCard";
import CardFront from "../card/CardFront";
import CardBack from "../card/CardBack";
import { createRef, RefObject, useEffect } from "react";
// @ts-ignore
import { useScreenshot, createFileName } from "use-react-screenshot";

export default function ExportDialog(props: {
    card: SlidCard
    profileSrc?: string
    open: boolean
    setOpen: (val: boolean) => void
}) {

    const { card, profileSrc, open, setOpen } = props
    const frontRef: RefObject<HTMLDivElement> = createRef();
    const backRef: RefObject<HTMLDivElement> = createRef();

    const [_, takeScreenShot] = useScreenshot({
        type: "image/png",
        quality: 1.0
      });

    const download = (fileName: string) => (image: any, { name = fileName, extension = "png" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
      };
    
      const downloadFrontShot = () => takeScreenShot(frontRef.current).then(download(`SLID-${card.name.replace(' ','-')}-FRONT`));
      const downloadBackShot = () => takeScreenShot(backRef.current).then(download(`SLID-${card.name.replace(' ','-')}-BACK`));

      useEffect(()=>{
        if(open){
            new Promise(resolve=>setTimeout(resolve,1000)).then(()=>{
                downloadFrontShot();
                downloadBackShot();
                setOpen(false)    
            })
            
        }
      },[open])

    return <Dialog open={open} onClose={() => { setOpen(false) }} maxWidth="xl">
        <DialogContent>Exporting...</DialogContent>
        <DialogContent>
            <div ref={frontRef}>
                {open && <CardFront card={card} profileSrc={profileSrc} />}
            </div>       
            <div style={{height:'100px'}}></div>     
            <div ref={backRef}>
                {open && <CardBack card={card} />}
            </div>
        </DialogContent>
    </Dialog>


}