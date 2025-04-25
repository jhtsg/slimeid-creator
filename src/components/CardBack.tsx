import { Card } from "@mui/material";
import SlidCard from "../model/SlidCard";

export default function CardBack(props:{card:SlidCard}) {

    const {card} = props;

    return <Card style={{ backgroundColor: 'white', borderRadius: '10px', width: '1035px', height: '660px', display: 'flex', flexDirection: 'column'  }}>
        <div style={{height:'375px', backgroundColor:'#555555'}}>

        </div>
        <div style={{flex:1}}>

        </div>
  </Card>
}