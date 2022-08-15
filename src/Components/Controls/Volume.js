import * as React from "react";
import { FormGroup, Stack, Slider } from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { CardContent } from "@mui/material";

export default function VolumeSlider(props) {
  const { setNotification, setVolume, volume, notification } = props;
  const handleChange = (event, newVolume) => {
    setVolume(event.target.value);
    console.log("notification from volume", notification);
    const warningMessage =
      "Listening to music at a high volume could cause long-term hearing loss.";
    const index = notification.indexOf(warningMessage);

    if (newVolume >= 80 && index === -1) {
      setNotification([...notification, warningMessage]);
    } else if (newVolume < 80 && index !== -1) {
      setNotification((prevState) => {
        let newState = [...prevState];
        newState.splice(index, 1);
        return newState;
      });
    }
  };
  //how do i get all three notifications to appear at the same time?
  return (
    <CardContent>
      <FormGroup>
        <Stack direction="row">
          <VolumeDown />
          <Slider
            style={{ color: "white" }}
            aria-label="Volume"
            value={volume}
            onChange={handleChange}
          />
          <VolumeUp />
        </Stack>
      </FormGroup>
    </CardContent>
  );
}