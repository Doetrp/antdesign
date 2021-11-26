import "./Subeminem.css";
import MainLayout from "../../common/MainLayout";
import { Row, Col } from "antd";
export default function Eminem() {
  return (
    <MainLayout>
      <div className="subEminemHeaders">
        <h1> Eminem </h1>
      </div>
      <div className="subEminemBodyfont"> 
        <Row>
          <Col span={1} />
          <Col span={22} style={{ textAlign: "left", fontSize: "20px" }}>
            vm,fkpvmfkpmv
          </Col>
          <Col span={1} />
        </Row>
      </div>
    </MainLayout>
  );
}
