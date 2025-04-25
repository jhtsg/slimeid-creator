import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import countries from '../../model/Countries.json';
import { InputAdornment } from '@mui/material';
import TwemojiText from './TwemojiText';

export default function CountrySelect(props:{
    country: string;
    setCountry: (country: string) => void;
    label?: string;
}) {

    const { country:flag, setCountry, label } = props;

  return (
    <Autocomplete
      options={countries}
      value={countries.find((c) => c.flag === flag) || null}
      onChange={(_, newValue) => {
        if (newValue) {
          setCountry(newValue.flag);
        } else {
          setCountry('');
        }
      }}
      getOptionLabel={(option) => option.country}
      renderOption={(props, option) => (
        <li {...props}>
          <span style={{ marginRight: 8 }}><TwemojiText text={option.flag}/></span>
          {option.country}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label={label} InputProps={{
            ...params.InputProps,
            startAdornment: (
                <InputAdornment position='start' style={{marginLeft:'7px'}}><TwemojiText text={flag}/></InputAdornment>
            ),
          }} />
      )}
    />
  );
}
