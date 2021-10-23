import "./Aboutme.css";
import { Card, Button, Input, Form } from "antd";

export default function Aboutme() {
  return (
    <div style={{ textItem: "center" }}>
      <Card
        className="TextHeader"
        title="รายรับ - รายจ่าย"
        bordered={false}
        style={{ width: 500 }}
      >
        <div>
          <Form
            name="basic"
            labelCol={{
              span: 8
            }}
            >
            <Form.Item
              label="รายการ"
              name="รายการ"
              rules={[
                {
                  required: true,
                  message: "กรุณาระบุรายการด้วยครับ!",
                },
              ]}
            >
              <Input type="text" placeholder="รายการ" />
            </Form.Item>
            <Form.Item
              label="จำนวนเงิน"
              name="จำนวนเงิน"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกจำนวนเงินด้วยครับ!",
                },
              ]}
            >
              <Input type="number" placeholder="จำนวนเงิน" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" shape="round">
                submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
}
