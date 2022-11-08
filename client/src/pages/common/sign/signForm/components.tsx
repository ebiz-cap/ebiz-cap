//
import { alpha, styled as Styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";


export const SignInputLabel = Styled(InputLabel)(() => ({
  color: "#929CA7 !important",
  fontSize: "16px",
  fontFamily: "Noto Sans KR",
}));
export const SignFormControl = Styled(FormControl)(() => ({
  marginTop: "16px",
  width: "100%",
}));

export const BootstrapInput = Styled(InputBase)(({ theme }: any) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },

  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 13,
    fontWeight: "bold",
    color: "#495057",
    padding: "8px 10px",
    width: "100%",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha("#FF5491", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#FF5491",
    },
  },
}));
