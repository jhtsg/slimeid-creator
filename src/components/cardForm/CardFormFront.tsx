import { Checkbox, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Select, TextField, Tooltip } from "@mui/material";
import SlidCard from "../../model/SlidCard";
import Colorfield from "../shared/Colorfield";
import { Colors } from "../../model/Colors";
import { Cores } from "../../model/Cores";
import { HelpOutline } from "@mui/icons-material";
import CountrySelect from "../shared/CountrySelect";

export default function CardFormFront(props: {
    card: SlidCard;
    setCard: (card: SlidCard) => void;
}) {

    const { card, setCard } = props;

    return <>

        <TextField label="Name" value={card.name} onChange={(e) => setCard({ ...card, name: e.target.value })} />

        <Tooltip title="This is your specimen ID which was given to you at the time the SI first documented your existence.">
            <TextField label="Speciment ID" value={card.specimenId} onChange={(e) => setCard({ ...card, specimenId: Number.parseInt(e.target.value) })} slotProps={{ input: { type: 'number' } }} />
        </Tooltip>

        <hr style={{ width: '100%' }} />

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <FormControl fullWidth>
                <InputLabel>Color</InputLabel>
                <Select
                    value={card.color}
                    label="Color"
                    onChange={(e) => setCard({ ...card, color: e.target.value })}
                >
                    {Colors.map((color) => <MenuItem key={color.code} value={color.code}>{color.code}: {color.name}</MenuItem>)}
                </Select>
            </FormControl>
            <Tooltip title="This is your primary color. If you have more than one color, specify the color code that is most dominant">
                <HelpOutline />
            </Tooltip>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
            <Tooltip title="This is the volume of goo mass (excluding core) you are in control over">
                <TextField label="Total Volume" value={card.totalVolume} onChange={(e) => setCard({ ...card, totalVolume: Number.parseFloat(e.target.value) })} slotProps={{ input: { type: 'number', endAdornment: <InputAdornment position="end">L</InputAdornment> } }} style={{ flex: '1', flexShrink: '0' }} />
            </Tooltip>
            <TextField label="Typical Height" value={card.typicalHeight} onChange={(e) => setCard({ ...card, typicalHeight: Number.parseFloat(e.target.value) })} slotProps={{ input: { type: 'number', endAdornment: <InputAdornment position="end">Cm</InputAdornment> } }} style={{ flex: '1', flexShrink: '0' }} />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
            <Tooltip title="While you are obviously a slime, you may present as a human, or another anthropomorphic form.">
                <TextField label="Presenting Species" value={card.presentingSpecies} onChange={(e) => setCard({ ...card, presentingSpecies: e.target.value })} style={{ flex: '1', flexShrink: '0' }} />
            </Tooltip>
            <Tooltip title="Slimes in the SI Universe are all male in sex, but may present as a different gender.">
                <TextField label="Gender" value={card.presentingGender} onChange={(e) => setCard({ ...card, presentingGender: e.target.value })} style={{ flex: '1', flexShrink: '0' }} />
            </Tooltip>
        </div>
        <Tooltip title="This is a brief visual description of the form you usually take. IE: Overweight male with short hair">
            <TextField label="Visual Description" value={card.visualDescription} onChange={(e) => setCard({ ...card, visualDescription: e.target.value })} multiline minRows={3} />
        </Tooltip>

        <hr style={{ width: '100%' }} />


        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <FormControl fullWidth>
                <InputLabel>Core Type</InputLabel>
                <Select
                    value={card.coreType?.code}
                    label="Core Type"
                    onChange={(e) => setCard({ ...card, coreType: Cores.find((core) => core.code === e.target.value) })}
                >
                    {Cores.map((core) => <MenuItem key={core.code} value={core.code}>{core.code}: {core.name}</MenuItem>)}
                </Select>
            </FormControl>
            <Tooltip title="This is the shape of your core. It is usually a sphere, but can be other shapes. If you have multiple cores, specify the shape of your most dominant core.">
                <HelpOutline />
            </Tooltip>
        </div>
        {
            card.coreType && <div style={{ display: 'flex', gap: '10px' }}>
                {card.coreType?.widthDimensionName.length > 0 && <TextField label={`Core ${card.coreType?.widthDimensionName}`} value={card.coreSize} onChange={(e) => setCard({ ...card, coreSize: Number.parseInt(e.target.value) })} slotProps={{ input: { type: 'number', endAdornment: <InputAdornment position="end">Cm</InputAdornment> } }}  style={{flex:"1", flexShrink:'0'}}/>}
                {card.coreType?.hasHeight && <TextField label="Core Height" value={card.coreHeight} onChange={(e) => setCard({ ...card, coreHeight: Number.parseInt(e.target.value) })} slotProps={{ input: { type: 'number', endAdornment: <InputAdornment position="end">Cm</InputAdornment> } }} style={{flex:"1", flexShrink:'0'}} />}
            </div>
        }
        <hr style={{ width: '100%' }} />
        <Tooltip title={<div>
            <div>This is where you came form. Usually this is from:</div>
            <div style={{marginTop:'5px'}}>
                <table ><tbody>
                    <tr>
                        <td style={{alignContent:'start'}}>SI Experiments: </td>
                        <td>Denoted by a series number and letter (100-D)</td>
                    </tr>
                    <tr>
                        <td style={{alignContent:'start'}}>Mitosis: </td>
                        <td>Denoted by name or speciment ID of the "Father" slime</td>
                    </tr>
                    <tr>
                        <td style={{alignContent:'start'}}>Unknown: </td>
                        <td>If you don't know where you came from</td>
                    </tr>
                </tbody></table>
            </div>
        </div>}>
            <TextField label="Origin" value={card.origin} onChange={(e) => setCard({ ...card, origin: e.target.value })} />
        </Tooltip>
        <div style={{ display: 'flex', gap: '10px' }}>
            <Tooltip title="This is the amount of nutrition fluid you intake daily. This is a legacy field from SI experimentation and is no longer required">
                <TextField label="Daily Intake" value={card.dailyIntake} onChange={(e) => setCard({ ...card, dailyIntake: e.target.value.length === 0 ? undefined : Number.parseFloat(e.target.value) })} slotProps={{ input: { type: 'number', endAdornment: <InputAdornment position="end">L</InputAdornment> } }} />
            </Tooltip>
            <Tooltip title="This is the amount of fluid you eject daily. This is a legacy field from SI experimentation and is no longer required">
                <TextField label="Daily Output" value={card.dailyOutput} onChange={(e) => setCard({ ...card, dailyOutput: e.target.value.length === 0 ? undefined : Number.parseFloat(e.target.value) })} slotProps={{ input: { type: 'number', endAdornment: <InputAdornment position="end">L</InputAdornment> } }} />
            </Tooltip>
        </div>
        <hr style={{ width: '100%' }} />
        <Tooltip title={`This is your date of "birth". If you do not know the exact date you were born, specify the first date the SI made contact with you`}>
            <TextField label="Date of Specimen" value={card.dateOfSpecimen} onChange={(e) => setCard({ ...card, dateOfSpecimen: e.target.value })} slotProps={{ htmlInput: { type: 'date', placeholder: '' }, inputLabel: { shrink: true } }} />
        </Tooltip>
        <TextField label="Issue Date" value={card.issueDate} onChange={(e) => setCard({ ...card, issueDate: e.target.value })} slotProps={{ htmlInput: { type: 'date', placeholder: '' }, inputLabel: { shrink: true } }} />
        <FormControlLabel control={<Checkbox checked={card.showExpireDate} onChange={(e) => setCard({ ...card, showExpireDate: e.target.checked })} />} label="Show Expiration Date" />
        {card.showExpireDate && <TextField label="Expiration Date" value={card.expireDate} onChange={(e) => setCard({ ...card, expireDate: e.target.value })} slotProps={{ input: { type: 'date' }, inputLabel: { shrink: true } }} />}

        <hr style={{ width: '100%' }} />
        <FormControlLabel control={<Checkbox checked={card.showSiLogo} onChange={(e) => setCard({ ...card, showSiLogo: e.target.checked })} />} label="Show Slime Institute Logo" />
        <Colorfield label="Card Color" color={card.cardHeaderColor} setColor={(val) => setCard({ ...card, cardHeaderColor: val })} />
        <TextField label="Card Patern" value={card.name} onChange={(e) => setCard({ ...card, cardPattern: e.target.value })} />
        <CountrySelect country={card.flag} setCountry={(val)=>setCard({...card,flag:val})} label="Nationality"/>

    </>
}