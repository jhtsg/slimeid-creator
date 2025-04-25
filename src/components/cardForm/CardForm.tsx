import { Button, Tab, Tabs } from "@mui/material";
import SlidCard from "../../model/SlidCard";
import CardFormBack from "./CardFormBack";
import CardFormFront from "./CardFormFront";
import ExportDialog from "../exportDialog/exportDialog";
import { useState } from "react";

export default function CardForm(props:{
    card:SlidCard;
    setCard: (card:SlidCard) => void;
    flipped: boolean;
    setFlipped: (flipped:boolean) => void;
    onUploadClick : ()=> void;
    filename?:string,
    profileSrc?:string
}){
    const {flipped,setFlipped} = props;
    const [open,setOpen] = useState(false)
    
    return <div style={{height:'100%', display:'flex', flexDirection:'column', overflowY:'hidden'}}>
        <div style={{display:'flex', alignItems:'center'}}>
        <Tabs value={flipped ? 1 : 0} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile style={{flex:1}}>
            <Tab label="Front" onClick={() => setFlipped(false)} />
            <Tab label="Back" onClick={() => setFlipped(true)} />
        </Tabs>
        <Button variant="contained" size="small" style={{marginRight:'10px'}} onClick={()=>setOpen(true)}>Export</Button>
        </div>
        <div style={{flex:'1', display:'flex', flexDirection:'column', padding:'10px', overflowY:'auto', gap:'15px'}}>
            {flipped ? <CardFormBack {...props}/> : <CardFormFront {...props}/>}
        </div>
        <ExportDialog card={props.card} open={open} setOpen={setOpen} profileSrc={props.profileSrc} />
    </div>

}