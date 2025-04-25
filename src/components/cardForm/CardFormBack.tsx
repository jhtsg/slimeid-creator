import { Checkbox, FormControlLabel, TextField, Tooltip } from "@mui/material";
import SlidCard from "../../model/SlidCard";
import ListEditor from "../shared/ListEditor";

export default function CardFormBack(props: {
    card: SlidCard;
    setCard: (card: SlidCard) => void;
}){

    const {card,setCard} = props;

    return <>

        {/* Show QR Code */}
        <FormControlLabel control={<Checkbox checked={card.showQrCode} onChange={(e)=>setCard({...card,showQrCode:e.target.checked})}/>} label="Show SLID Generator QR Code" />


        {/* ShowCustomQR Code */}
        <FormControlLabel control={<Checkbox checked={card.showCustomQRCode} onChange={(e)=>setCard({...card,showCustomQRCode:e.target.checked})}/>} label="Show Custom QR Code" />
        {card.showCustomQRCode && <TextField label="Custom QR Code Data" value={card.customQRCodeText} onChange={(e)=>setCard({...card,customQRCodeText:e.target.value})} disabled={!card.showCustomQRCode}/>}

        {/* Show PDF417 */}
        <Tooltip title="Show a PDF417 (ID Like) code to this generator on the back of the card. The PDF417 will contain a JSON string of all the data on the card. It is NOT an AAMVA PDF417" arrow>
            <FormControlLabel control={<Checkbox checked={card.showPdf417} onChange={(e)=>setCard({...card,showPdf417:e.target.checked})}/>} label="Show PDF417" />
        </Tooltip>

        {/* Endorsements */}
        <ListEditor list={card.endorsements} setList={(list) => setCard({...card, endorsements: list})} label="Endorsements"/>

        {/* Restrictions */}
        <ListEditor list={card.restrictions} setList={(list) => setCard({...card, restrictions: list})} label="Restrictions"/>

    </>
}