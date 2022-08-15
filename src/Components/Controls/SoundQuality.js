import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { CardContent } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SoundQuality(props) {
  const { setNotification, setSoundQuality, soundQuality, notification } =
    props;

  const handleChange = (event) => {
    setSoundQuality(event.target.value);
    console.log("notification from SoundQuality", notification);
    const warningMessage =
      "Music quality is degraded. Increase quality if your connection allows it.";
    const index = notification.indexOf(warningMessage);

    if (event.target.value === "Low" && index === -1) {
      setNotification([...notification, warningMessage]);
    } else if (event.target.value !== "Low" && index !== -1) {
      setNotification((prevState) => {
        let newState = [...prevState];
        newState.splice(index, 1);
        return newState;
      });
    }
  };

  return (
    <CardContent>
      <FormControl fullWidth>
        <InputLabel style={{ color: "blue" }}>Sound quality</InputLabel>

        <Select
          style={{ color: "white" }}
          labelId="demo-simple-select-label"
          value={soundQuality}
          label="Sound quality"
          onChange={handleChange}
        >
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"Normal"}>Normal</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
        </Select>
      </FormControl>
    </CardContent>
  );
}