import Typography from "@mui/material/Typography";
import { fontFamily } from "@mui/system";

export default function Notifcations(props) {
  return (
    <div>
      <Typography
        style={{
          fontFamily: "arial",
        }}
        variant="h6"
        alignSelf='center'
      >
        System Notifications
        </Typography>
        <br></br>
        <br></br>

      {props.notification.map((warning, index) => (
        <p key={index}>{warning}</p>
      ))}
    </div>
  );
}