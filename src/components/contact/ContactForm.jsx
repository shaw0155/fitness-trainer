import { Button, Form, Input } from "antd";

export default function ContactForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        form={form}
        name="basic"
        className="form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please input your phone Number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="WHAT CAN I HELP YOU WITH?"
          name="message"
          rules={[
            {
              required: true,
              message: "Must be at least 25 characters!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{ height: "auto" }}>
          Submit
        </Button>
      </Form>
    </>
  );
}
