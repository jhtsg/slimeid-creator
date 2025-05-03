import { ClickAwayListener, IconButton, InputAdornment, Popper, TextField, Tooltip } from "@mui/material";
import { useState } from "react";
import { SketchPicker } from 'react-color';

export default function Colorfield(props: {
    color: string;
    setColor: (color: string) => void;
    label: string
}) {

    const { color, setColor, label } = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    return <>
        <TextField
            label={label} value={color}
            onChange={(e) => setColor(e.target.value)} slotProps={{
                input: {
                    startAdornment:
                        <InputAdornment position="start">
                            <Tooltip title="Pick a color">
                                <IconButton onClick={(e) => { setAnchorEl(e.currentTarget) }}>
                                    <div style={{ width: '20px', height: '20px', backgroundColor: color, borderRadius: '1px', border: 'gray 2px dashed' }} />
                                </IconButton>
                            </Tooltip>
                        </InputAdornment>
                }
            }} />
        <Popper open={!!anchorEl} anchorEl={anchorEl} sx={{ zIndex: 1500 }}>
            <ClickAwayListener onClickAway={() => { setAnchorEl(null) }}>
                <SketchPicker color={color} onChange={(color) => { setColor(color.hex); }} />
            </ClickAwayListener>
        </Popper>
    </>

}