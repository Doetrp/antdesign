import "./Aboutme.css";
import { Card } from "antd";

export default function Aboutme() {
  return (
    <div>
      <Card
        className="TextHeader"
        title="About Me"
        bordered={false}
        style={{ width: 500 }}
      >
        <div className="inBody">
          <span>Name : </span>
          <label> Terapat Thuacharoen</label>
          <br />
          <label>Nick Name : Doe</label>
          <br />
          <label>lineid : Doe_trp </label>
          <br />
          <label>tel : 091-xxx-xxxx </label>
          <br />
        </div>
      </Card>
    </div>
  );
}
