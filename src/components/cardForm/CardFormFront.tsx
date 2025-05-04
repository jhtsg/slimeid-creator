import { Button, Checkbox, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Select, TextField, Tooltip } from "@mui/material";
import SlidCard from "../../model/SlidCard";
import Colorfield from "../shared/Colorfield";
import { Colors } from "../../model/Colors";
import { Cores } from "../../model/Cores";
import { HelpOutline } from "@mui/icons-material";
import CountrySelect from "../shared/CountrySelect";
import { Paterns } from "../../model/Paterns";

export default function CardFormFront(props: {
    card: SlidCard;
    setCard: (card: SlidCard) => void;
    onUploadClick: () => void,
    filename?: string,
}) {

    const { card, setCard, onUploadClick } = props;

    return <>

        <div>
            <b>Identification Information</b>
            <hr style={{ width: '100%' }} />
        </div>
        <TextField label="Name" value={card.name} onChange={(e) => setCard({ ...card, name: e.target.value })} />


        <Tooltip title="This is your specimen ID which was given to you at the time the SI first documented your existence.">
            <TextField label="Speciment ID" value={card.specimenId} onChange={(e) => setCard({ ...card, specimenId: Number.parseInt(e.target.value) })} slotProps={{ input: { type: 'number' } }} />
        </Tooltip>

        <div style={{ marginTop: '10px' }}>
            <b>Profile Photo</b>
            <hr style={{ width: '100%' }} />
        </div>

        <div style={{ textAlign: 'center' }}>
            <Button variant="outlined" onClick={onUploadClick}>Upload a photo</Button>
        </div>

        <div style={{ marginTop: '10px' }}>
            <b>Visual Information</b>
            <hr style={{ width: '100%' }} />
        </div>

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
            <Tooltip title="Slimes in the SI Universe are all male in sex, but may present as a different gender.">
                <TextField label="Gender" value={card.presentingGender} onChange={(e) => setCard({ ...card, presentingGender: e.target.value })} style={{ flex: '1', flexShrink: '0' }} />
            </Tooltip>
            <Tooltip title="While you are obviously a slime, you may present as a human, or another anthropomorphic form.">
                <TextField label="Presenting Species" value={card.presentingSpecies} onChange={(e) => setCard({ ...card, presentingSpecies: e.target.value })} style={{ flex: '1', flexShrink: '0' }} />
            </Tooltip>
        </div>
        <Tooltip title="This is a brief visual description of the form you usually take. IE: Overweight male with short hair">
            <TextField label="Visual Description" value={card.visualDescription} onChange={(e) => setCard({ ...card, visualDescription: e.target.value })} multiline minRows={3} />
        </Tooltip>

        <div style={{ marginTop: '10px' }}>
            <b>Core Information</b>
            <hr style={{ width: '100%' }} />
        </div>

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
                {card.coreType?.widthDimensionName.length > 0 && <TextField label={`Core ${card.coreType?.widthDimensionName}`} value={card.coreSize} onChange={(e) => setCard({ ...card, coreSize: Number.parseFloat(e.target.value) })} slotProps={{ input: { type: 'number', endAdornment: <InputAdornment position="end">Cm</InputAdornment> } }} style={{ flex: "1", flexShrink: '0' }} />}
                {card.coreType?.hasHeight && <TextField label="Core Height" value={card.coreHeight} onChange={(e) => setCard({ ...card, coreHeight: Number.parseFloat(e.target.value) })} slotProps={{ input: { type: 'number', endAdornment: <InputAdornment position="end">Cm</InputAdornment> } }} style={{ flex: "1", flexShrink: '0' }} />}
            </div>
        }

        <div style={{ marginTop: '10px' }}>
            <b>Slime Institute Information</b>
            <hr style={{ width: '100%' }} />
        </div>

        <TextField label="Issue Date" value={card.issueDate} onChange={(e) => setCard({ ...card, issueDate: e.target.value })} slotProps={{ htmlInput: { type: 'date', placeholder: '' }, inputLabel: { shrink: true } }} />

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

            <TextField label="Expiration Date" value={card.expireDate} onChange={(e) => setCard({ ...card, expireDate: e.target.value })} slotProps={{
                input: {
                    type: 'date',
                    startAdornment: <InputAdornment position="start">
                        <Tooltip title='Some SLIDs may not expire. Check this box if this one does'>
                            <Checkbox checked={card.showExpireDate} onChange={(e) => setCard({ ...card, showExpireDate: e.target.checked })} />
                        </Tooltip>
                    </InputAdornment>

                }, inputLabel: { shrink: true },
            }} fullWidth disabled={!card.showExpireDate} />
        </div>

        <Tooltip title={`This is your date of "birth". If you do not know the exact date you were born, specify the first date the SI made contact with you`}>
            <TextField label="Date of Specimen" value={card.dateOfSpecimen} onChange={(e) => setCard({ ...card, dateOfSpecimen: e.target.value })} slotProps={{ htmlInput: { type: 'date', placeholder: '' }, inputLabel: { shrink: true } }} />
        </Tooltip>


        <Tooltip title={<div>
            <div>This is where you came form. Usually this is from:</div>
            <div style={{ marginTop: '5px' }}>
                <table ><tbody>
                    <tr>
                        <td style={{ alignContent: 'start' }}>SI Experiments: </td>
                        <td>Denoted by a series number and letter (100-D)</td>
                    </tr>
                    <tr>
                        <td style={{ alignContent: 'start' }}>Mitosis: </td>
                        <td>Denoted by name or speciment ID of the "Father" slime</td>
                    </tr>
                    <tr>
                        <td style={{ alignContent: 'start' }}>Unknown: </td>
                        <td>If you don't know where you came from</td>
                    </tr>
                </tbody></table>
            </div>
        </div>}>
            <TextField label="Origin" value={card.origin} onChange={(e) => setCard({ ...card, origin: e.target.value })} />
        </Tooltip>

        <div style={{ marginTop: '10px' }}>
            <b>Card Settings</b>
            <hr style={{ width: '100%' }} />
        </div>

        <FormControlLabel control={<Checkbox checked={card.useMonochromeSiLogo} onChange={(e) => setCard({ ...card, useMonochromeSiLogo: e.target.checked })} />} label="Use monochrome Slime Institute logo" />

        <Colorfield label="Header Color" color={card.cardHeaderColor} setColor={(val) => setCard({ ...card, cardHeaderColor: val })} />

        <FormControl fullWidth>
            <InputLabel>Header Pattern</InputLabel>
            <Select
                value={card.coreType?.code}
                label="Header Pattern"
                onChange={(e) => setCard({ ...card, cardPattern: e.target.value })}
            >
                {Paterns.map((patern) => <MenuItem key={patern.code} value={patern.code}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ backgroundColor: card.cardHeaderColor, backgroundImage: patern.backgroundImage, height: '32px', width: '64px' }}  ></div>
                        <div>{patern.name}</div>
                    </div>

                </MenuItem>)}
            </Select>
        </FormControl>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <FormControl fullWidth>
                <InputLabel>Card Badge</InputLabel>
                <Select
                    value={card.badge}
                    label="Card Variant"
                    onChange={(e) => setCard({ ...card, badge: e.target.value })}
                >
                    {[
                        { variant: '', label: 'None' },
                        { variant: 'A', label: 'Site A' },
                        { variant: 'B', label: 'Site B' },
                        { variant: 'L', label: 'Lost Core' },
                        { variant: 'U', label: 'University Study Program' },
                    ].map((core) => <MenuItem key={core.variant} value={core.variant}>{core.variant.length > 0 ? `${core.variant}: ` : ''}{core.label}</MenuItem>)}
                </Select>
            </FormControl>
            <Tooltip title="Variants brand this SLID with important information members of the SI should know when interacting with this slime. The mark is on the top right of the card">
                <HelpOutline />
            </Tooltip>
        </div>

        <CountrySelect country={card.flag} setCountry={(val) => setCard({ ...card, flag: val })} label="Nationality" />

    </>
}