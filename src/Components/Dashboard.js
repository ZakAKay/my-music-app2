import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import OnlineSwitch from "./Controls/Online";
import VolumeSlider from "./Controls/Volume";
import SoundQuality from "./Controls/SoundQuality";
import Notifications from "./Notifications";

export default function Dashboard() {
  const [volume, setVolume] = React.useState(30);
  const [soundQuality, setSoundQuality] = React.useState("Normal");
  const [status, setStatus] = React.useState(false);
  const [notification, setNotification] = React.useState([]);

  // console.log("Volume Status", volume);
  // console.log("Sound Quality", soundQuality);
  // console.log("Online Status", status);
  // console.log("Notification", notification);

  return (
    <div className="every_Card">
      <Notifications notification={notification} />
      <Box
        style={{
          maxWidth: 250,
          paddingTop: 4,
          margin: "auto",
        }}
      >
        <Card
          variant="BasicCard"
          style={{ backgroundColor: " red", color: "white" }}
        >
          <OnlineSwitch
            setStatus={setStatus}
            status={status}
            setNotification={setNotification}
            notification={notification}
          />
        </Card>
      </Box>

      <Box
        style={{
          maxWidth: 250,
          padding: 4,
          paddingTop: 27,
          margin: "auto",
        }}
      >
        <Card
          variant="BasicCard"
          style={{ backgroundColor: "red", color: "white" }}
        >
          <VolumeSlider
            setVolume={setVolume}
            volume={volume}
            setNotification={setNotification}
            notification={notification}
          />
        </Card>
      </Box>

      <Box
        style={{
          maxWidth: 250,
          padding: 4,
          paddingTop: 27,
          margin: "auto",
        }}
      >
        <Card
          variant="BasicCard"
          style={{ backgroundColor: " red", color: "white" }}
        >
          <SoundQuality
            setSoundQuality={setSoundQuality}
            soundQuality={soundQuality}
            setNotification={setNotification}
            notification={notification}
          />
        </Card>
      </Box>
    </div>
  );
}