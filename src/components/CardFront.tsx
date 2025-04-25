import { Card } from "@mui/material";
import SlidCard from "../model/SlidCard";

export default function CardFront(props:{card:SlidCard}) {

    const {card} = props;

    return <Card style={{ backgroundColor: 'white', borderRadius: '10px', width: '1035px', height: '660px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: "189px", width: '100%', backgroundColor: '#115511' }}>

        </div>
        <div style={{ flex: 1, display: 'flex' }}>
            <div style={{width:'413px', height:'100%', backgroundColor:'#551111'}}></div>
            <div style={{flex:1, height:'100%', backgroundColor:'#111155'}}>Waos</div>
        </div>

    </Card>
}