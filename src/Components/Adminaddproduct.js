import React from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Form,Input,Button,Upload,Radio } from 'antd';

const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Adminaddproduct = () => {



  return (
    <div className='content'>
      <div className='incontent'>
        <Form
            
        >
          <Form.Item
            label="Name Product"
            name="name"
            rules={[
              {
              required: true,
              message: 'Please input name!' 
              }
            ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[
              {
              required: true,
              message: 'Please input quantity!' 
              },
              {
                pattern: /^\d+$/,
                message: 'Please input digit!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
              required: true,
              message: 'Please input price!' 
              },
              {
                pattern: /^\d+$/,
                message: 'Please input digit!'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea rows={4} />
          </Form.Item>


          <Form.Item name="size" label="Size">
            <Radio.Group>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
          </Form.Item>

        </Form>        

      </div>
    </div>
  )
}

export default Adminaddproduct