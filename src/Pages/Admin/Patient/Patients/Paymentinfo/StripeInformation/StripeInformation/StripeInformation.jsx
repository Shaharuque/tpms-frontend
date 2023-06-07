import React from "react";
import { UserOutlined, SettingOutlined, IdcardOutlined } from "@ant-design/icons";
import { DatePicker,Button, Form, Input,Col,Row } from 'antd';



const StripeInformation = () => {


const formRef = React.useRef(null);

  const onFinish = (values) => {
    console.log(values);
  };
//   const onReset = () => {
//     formRef.current?.resetFields();
//   };
//   const onFill = () => {
//     formRef.current?.setFieldsValue({
//       note: 'Hello world!',
//       gender: 'male',
//     });
//   };


  return (
    <>
      <div className="">
        <h1 className="text-lg mb-5 text-orange-400">Credit or Debit Card</h1>

        <div className="border border-black p-5 rounded max-w-md bg-[#EFF7F8]">
          <p className="text-sm mb-2 font-thin">
            We do not store any financial or card details anywhere on our system. The details collected to make any payment are taken in a secure manner and passed directly to a payment gateway to make the payment.
          </p>
          <p className="text-sm font-thin">
            The Card Verification Value (CVV) is an anti-fraud security feature and required for verification purposes. The CVV Number on the credit card is a 3 or 4 digit number located on the back or the front of the card.
          </p>
        </div>

        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5  max-w-md">
            <div className="">
              <label htmlFor="card_name" className="text-sm mb-2 block font-normal">
                Name on Card:
              </label>
              <Input addonBefore={<UserOutlined />} placeholder="Name On Card" {...register("card_name")} />
            </div>
            <div className="mt-2 mb-2">
              <label htmlFor="card_number" className="text-sm mb-2 block font-normal">
                Card Number:
              </label>
              <Input addonBefore={<IdcardOutlined />} placeholder="Card Number" {...register("card_number")} />
            </div>
            <Space direction="horizontal" className="max-w-md">
              <div>
                <label htmlFor="cvv" className="text-sm mb-2 block font-normal">
                  CVV:
                </label>
                <Input type="text" placeholder="Basic usage" {...register("cvv")} />
              </div>
              <div>
                <label htmlFor="month" className="text-sm mb-2 block font-normal">
                  Month:
                </label>
                <DatePicker picker="month" {...register("month")} />
              </div>
              <div>
                <label htmlFor="year" className="text-sm mb-2 block font-normal">
                  Year:
                </label>
                <DatePicker picker="year" {...register("year")} />
              </div>
            </Space>
            <div className="mt-2  ">
              <input className="bg-[#089bab] text-white rounded p-1" type="submit" value={"save card"} />
            </div>
          </div>
        </form> */}




<Form
     
      ref={formRef}
      name="control-ref"
      layout="vertical"
      onFinish={onFinish}
      style={{
        maxWidth: 450,
        marginTop: 20,
      }}
    >
      <Form.Item
        name="card_name"
        label="Name On Card"
        rules={[
          {
            required: true,
          },
        ]}
      >
       
        <Input    addonBefore={<UserOutlined/>}  placeholder="Card Name"/>
      </Form.Item>

      <Form.Item
        name="card_number"
        label="Card Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
       
        <Input    addonBefore={<IdcardOutlined/>}  placeholder="Card Number"/>
      </Form.Item>


      
        <Row gutter={12}>
          <Col span={10}>
            <Form.Item
              name="CVV"
              label="CVV"
              
              rules={[{ required: true, message: 'Please input the cvv you got!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="Month"
              label="Month"
            
              rules={[{ required: true, message: 'Please input the month ' }]}
            >
               <DatePicker  picker="month" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="Year"
              label="Year"
             
              rules={[{ required: true, message: 'Please input the year ' }]}
            >
              <DatePicker  picker="year" />
            </Form.Item>
          </Col>
          
        </Row>
     
    
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        
      
      </Form.Item>
    </Form>


      </div>
    </>
  );
}

export default StripeInformation;
