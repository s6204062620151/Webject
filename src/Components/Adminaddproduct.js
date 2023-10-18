import React ,{useState} from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Form,Input,Button,Upload,Radio } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Adminaddproduct = () => {


  const onFinish = (values) => {

    
    console.log(values);
    // const uploadedFile = values.upload[0];
    // const te = uploadedFile.name;


    // axios.post('http://localhost:3001/addproduct' ,productData)
    // .then((response) => {
    //   console.log(response.data.message);
    // })
    // .catch((error) => {
    //   console.error('Error fetching data:', error);
    // });


  };

  return (
    <div className='content'>
      <div className='incontent'>
        <Form
          onFinish={onFinish}
          labelCol={{span: 6}}
          wrapperCol={{span: 14}}        
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
                pattern: /^\d+(\.\d{1,2})?$/,
                message: 'Please input digit!'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <TextArea rows={4} />
          </Form.Item>


          <Form.Item name="size" label="Size">
            <Radio.Group>
              <Radio value="S">S</Radio>
              <Radio value="M">M</Radio>
              <Radio value="L">L</Radio>
              <Radio value="XL">XL</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload 
          name="logo" 
          action="http://localhost:3001/upload"
          listType="picture" 
          maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
          </Form.Item>

          <Button type='primary' htmlType='submit'>
            Submit
          </Button>

        </Form>        

      </div>
    </div>
  )
}

export default Adminaddproduct