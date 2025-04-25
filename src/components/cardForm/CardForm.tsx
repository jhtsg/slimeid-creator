import { Tab, Tabs } from "@mui/material";
import SlidCard from "../../model/SlidCard";
import CardFormBack from "./CardFormBack";
import CardFormFront from "./CardFormFront";

export default function CardForm(props:{
    card:SlidCard;
    setCard: (card:SlidCard) => void;
    flipped: boolean;
    setFlipped: (flipped:boolean) => void;
}){
    const {flipped,setFlipped} = props;
    
    return <div style={{height:'100%', display:'flex', flexDirection:'column', overflowY:'hidden'}}>
        <Tabs value={flipped ? 1 : 0} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
            <Tab label="Front" onClick={() => setFlipped(false)} />
            <Tab label="Back" onClick={() => setFlipped(true)} />
        </Tabs>
        <div style={{flex:'1', display:'flex', flexDirection:'column', padding:'10px', overflowY:'auto', gap:'15px'}}>
            {flipped ? <CardFormBack {...props}/> : <CardFormFront {...props}/>}
        </div>
    </div>

}