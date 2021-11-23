import "./Incomeandexpenses.css";
import { Card, Button, Input, Form, Checkbox } from "antd";

export default function IncomeandExpenses() {
  const inputTitle = (event) => {
    console.log(event.target.value);
  };
  const inputAmount = (event) => {
    console.log(event.target.value);
  };
  const inputCheck = (event) => {
    console.log(event[0]);
  };
  const { Group } = Checkbox;
  const onFinish = (values) => {
    // ...values,
    const value = {
      จำนวนเงิน: values.จำนวนเงิน,
      รายการ: values.จำนวนเงิน,
      รายจ่าย: values.รายจ่าย ? values.รายจ่าย[0] : undefined,
      รายรับ: values.รายรับ ? values.รายรับ[0] : undefined,
    };
    console.log("value:", value);
  };
  const optionsWork = [
    { label: "ค่าอาหาร", value: "ค่าอาหาร" },
    { label: "ค่าที่พัก", value: "ค่าที่พัก" },
    { label: "ค่าเดินทาง", value: "ค่าเดินทาง" },
    { label: "ค่าอื่นๆ", value: "ค่าอื่นๆ" },
  ];
  const optionsWork2 = [
    { label: "เงินเดือน", value: "เงินเดือน" },
    { label: "ได้เงินคืน", value: "ได้เงินคืน" },
    { label: "ไปยืมมา", value: "ไปยืมมา" },
    { label: "ค่าอื่นๆ", value: "ค่าอื่นๆ" },
  ];
  return (
    <div style={{ textItem: "center" }}>
      <Card
        title="รายรับ - รายจ่าย"
        bordered={false}
        type="inner"
        className="ant-card"
        style={{ background: "white" }}
      >
        <div>
          <Form
            name="basic"
            labelCol={{
              span: 5,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="ชื่อรายการ"
              name="รายการ"
              rules={[
                {
                  required: true,
                  message: "กรุณาระบุรายการ!",
                },
              ]}
            >
              <Input type="text" placeholder="รายการ" onChange={inputTitle} />
            </Form.Item>
            <Form.Item
              label="จำนวนเงิน"
              name="จำนวนเงิน"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกจำนวนเงิน!",
                },
              ]}
            >
              <Input
                type="number"
                placeholder="จำนวนเงิน"
                onChange={inputAmount}
              />
            </Form.Item>
            <Form.Item label="รายรับ" name="รายรับ" valuePropName="check">
              <Group options={optionsWork2} onChange={inputCheck} />
            </Form.Item>
            <Form.Item label="รายจ่าย" name="รายจ่าย" valuePropName="checked">
              <Group options={optionsWork} onChange={inputCheck} />
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
