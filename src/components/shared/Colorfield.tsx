import { InputAdornment, TextField } from "@mui/material";

export default function Colorfield(props:{
    color:string;
    setColor: (color:string) => void;
    label:string
}){

    const {color,setColor,label} = props;
    return <TextField label={label} value={color} onChange={(e) => setColor(e.target.value)} slotProps={{input:{startAdornment:<InputAdornment position="start">
        <div style={{width:'20px', height:'20px', backgroundColor:color, borderRadius:'2px'}}></div>
    </InputAdornment>}}}/>

}