import "./About.css";
import { Row, Col, Image } from "antd";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
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
        <Row className="aboutFill">
          <Col span={5}>
            <Row>
              <label>My Address :</label>
            </Row>
            <Row>
              <label>My hobby :</label>
            </Row>
            <br />
            <Row>
              <label>Educational record :</label>
            </Row>
            <br />
            <Row>
              <label>Work experience :</label>
            </Row>
            <br />
            <br />
            <Row>
              <label>My contract :</label>
            </Row>
          </Col>
          <Col span={15}>
            <Row>
              <label>
                59/5 หมู่ 5 ตำบล บ้านแก่ง อำเภอเมืองฯ จังหวัดนครสวรรค์
              </label>
            </Row>
            <Row>
              <label>
                In his spare time, he likes to watch movies, listen to music,
                cook and play music.
              </label>
            </Row>
            <Row>
              <label>
                2014-2016 : Studying in Photisansuksa in Nakhonsawan
                <br />
                2017-2020 : Studying in Nareasuan University
              </label>
            </Row>
            <Row>
              <label>
                2016 : Work part time at big c
                <br />
                2018-2021 : work part time at restaurant Beef r us
                <br />
                2021-present : Work at brother auto parts ann engineering
              </label>
            </Row>
            <Row>
              <label>
                if you want to know my contact
                <br />
                please press the button
                <br />
              </label>
            </Row>
          </Col>
          <Col span={4}>
            <Image
              className="aboutImage"
              src="http://board.roigoo.com/members/ohmohm-albums-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%81%E0%B8%A7%E0%B8%99%E0%B9%86+12-3-13-picture2776-%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%81%E0%B8%A7%E0%B8%99%E0%B9%861.jpg"
              alt="terapat"
            />
          </Col>
        </Row>
        <label
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "50px",
          }}
        >
          ⇩
        </label>
        <div style={{ textAlign: "center" }}>
          <Button style={{ background: "#434343", width: "350px", height: "90px", fontSize: "50px"}} shape="round">
            <Link to="/contact">☠✇☹卐</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
