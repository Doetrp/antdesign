import "./About.css";
import { Row, Col, Image } from "antd";
import "antd/dist/antd.css";
import MainLayout from "../../common/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div>
        <Row>
          <Col style={{ textAlign: "center", fontSize: "50px" }} span={24}>
            My Profile
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={3}>
            <Image
              className="aboutImage"
              src="http://board.roigoo.com/members/ohmohm-albums-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%81%E0%B8%A7%E0%B8%99%E0%B9%86+12-3-13-picture2776-%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%81%E0%B8%A7%E0%B8%99%E0%B9%861.jpg"
              alt="terapat"
            />
          </Col>
          <Col span={5} className="aboutText">
            <Row>
              <label>ชื่อ - นามสกุล :</label>
            </Row>
            <Row>
              <label>name - surname :</label>
            </Row>
            <Row>
              <label>ชื่อเล่น - Nickname:</label>
            </Row>
            <Row>
              <label>My career :</label>
            </Row>
          </Col>
          <Col span={15} className="aboutFill">
            <Row>
              <label>นาย ธีรภัทร์ ทั่วเจริญ</label>
            </Row>
            <Row>
              <label>Terapat Thuacharoen</label>
            </Row>
            <Row>
              <label>โด้ (Doe)</label>
            </Row>
            <Row>
              <label>Programmer in brother auto parts and engineering </label>
            </Row>
          </Col>
        </Row>
        <Row className="aboutTextCenter">
          <Col span={20}>
            <label>dsfgdhfjgfhdsd</label>
          </Col>
          <Col span={4}>
            <Image
              className="aboutImage"
              src="http://board.roigoo.com/members/ohmohm-albums-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%81%E0%B8%A7%E0%B8%99%E0%B9%86+12-3-13-picture2776-%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%81%E0%B8%A7%E0%B8%99%E0%B9%861.jpg"
              alt="terapat"
            />
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}
