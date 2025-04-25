import { Add, Delete } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";

export default function ListEditor(props:{
    label:string;
    list:string[];
    setList: (list:string[]) => void;
}){
    const {list,setList} = props;

    return <div style={{display:'flex', flexDirection:'column', paddingTop:'10px'}}>
        <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
            <div>{props.label}</div>
            <Button onClick={() => setList([...list, ''])} startIcon={<Add/>}>Add</Button>
        </div>
        <div style={{flex:'1', display:'flex', flexDirection:'column', overflowY:'auto', gap:'10px'}}>
            {list.map((item, index) => <div style={{display:'flex', gap:'5px', alignItems:'center'}} key={index}>
                <IconButton onClick={()=>{
                    const newList = [...list];
                    newList.splice(index, 1);
                    setList(newList);
                }}><Delete/></IconButton>
                <TextField value={item} size="small" onChange={(e) => {
                    const newList = [...list];
                    newList[index] = e.target.value;
                    setList(newList);
                }} style={{flex:'1'}}/>
                </div>)}
        </div>
        
    </div>
}

