import React from "react";
import { Checkbox, Switch, TextField } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import MenuItem from "@material-ui/core/MenuItem";
// import { useDropzone } from "react-dropzone";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

interface Props {
  idField: number;
  class: string;
  input: any;
  label: string;
  type: string;
  error: string;
  color: string;
  text: string;
  option: any[];
  defaultChecked: boolean;
  placeholder: string;
  sendImage: (image: any) => void;
}

export function FieldInput(props: Props) {
  switch (props.idField) {
    case 1: {
      return (
        <div className={props.class}>
          <TextField
            className="input"
            {...props.input}
            label={props.label}
            type={props.type}
          />
        </div>
      );
    }
    case 2: {
      return (
        <div className={props.class}>
          <Checkbox
            {...props.input}
            color={props.color}
            defaultChecked={props.defaultChecked}
          />
          <label className="label">{props.label}</label>
        </div>
      );
    }

    case 3: {
      const classes = useStyles();
      const [values, setValues] = React.useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
      });

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        event.preventDefault();
      };
      return (
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            {...props.input}
            className="input"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      );
    }

    case 4: {
      const classes = useStyles();
      return (
        <FormControl fullWidth className={`${classes.margin} ${props.class}`}>
          <InputLabel htmlFor="standard-adornment-amount">
            {props.label}
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={
              <InputAdornment position="start">{props.text}</InputAdornment>
            }
            {...props.input}
          />
        </FormControl>
      );
    }

    case 5: {
      const [currency, setCurrency] = React.useState(props.option[0].value);

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
      };

      return (
        <TextField
          id="standard-select-currency"
          select
          label={props.label}
          value={currency}
          onChange={handleChange}
          helperText={props.text}
          {...props.input}
        >
          {props.option.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      );
    }

    // case 6: {
    //   const onDrop = useCallback((acceptedFiles) => {
    //     props.sendImage(acceptedFiles[0]);
    //     setUpload(true);
    //   }, []);
    //   const { getRootProps, getInputProps } = useDropzone({
    //     onDrop,
    //   });

    //   const [upload, setUpload] = React.useState(false);

    //   return (
    //     <div {...getRootProps()} className={props.class}>
    //       <input {...getInputProps()} />
    //       {upload ? (
    //         <div>
    //           <p>
    //             Fichier Telecharger
    //             <br />
    //           </p>
    //           <CheckCircleIcon className={`icon success`} />
    //         </div>
    //       ) : (
    //         <div>
    //           <p>
    //             Telecharger un fichier <br />
    //           </p>
    //           <GetAppIcon className="icon" />
    //         </div>
    //       )}
    //     </div>
    //   );
    // }

    case 7:
      return (
        <TextField
          label={props.label}
          variant="outlined"
          className={props.class}
          type={props.type}
          {...props.input}
        />
      );

    case 8:
      return (
        <TextField
          id="outlined-multiline-static"
          label={props.label}
          multiline
          rows={7}
          variant="outlined"
          className={props.class}
          {...props.input}
        />
      );

    case 9:
      return (
        <div className={`display-row display-space ${props.class}`}>
          <p>{props.label}</p>
          <Switch
            checked={props.defaultChecked}
            {...props.input}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
      );

    case 10:
      return <input className={props.class} placeholder={props.placeholder} />;

    default:
      return <TextField {...props.input} className="form-corps-input" />;
  }
}
