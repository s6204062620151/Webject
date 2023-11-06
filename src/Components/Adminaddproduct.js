import React ,{useState}from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Form,Input,Button,Upload,Radio,message, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;
const { TextArea } = Input;

const Adminaddproduct = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('quantity', values.quantity);
    formData.append('price', values.price);
    formData.append('description', values.description);
    formData.append('size', values.size);
    formData.append('color', values.color);
    formData.append('category', values.category);
    formData.append('file', fileList[0].originFileObj);



    axios.post('http://localhost:3001/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      // Handle success
      console.log('Data sent successfully:', response.data);
      console.log('Form values:',response);
      message.success('upload successfully.');
      setFileList([]);
      form.resetFields();
    })
    .catch((error) => {
      // Handle error
      console.error('Error sending data:', error);
      message.success('upload failed.');
    });
    
  };
  const onChange = ({ fileList }) => {
    setFileList(fileList);
  };

  return (
    <div className='content'>
      <div className='incontent'>
        <Form
          form={form}
          onFinish={onFinish}
          labelCol={{span: 6}}
          wrapperCol={{span: 14}}        
        >
          <Form.Item name="name"
            label="Name Product"
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

          <Form.Item name="color" label="Color">
            <Select>
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
              <Option value="black">Black</Option>
              <Option value="white">White</Option>
              <Option value="gray">Gray</Option>
              <Option value="pink">Pink</Option>
              <Option value="purple">Purple</Option>
              <Option value="brown">Brown</Option>
              <Option value="biege">Biege</Option>
            </Select>

          </Form.Item>

          <Form.Item name="category" label="Category">
            <Select>
              <Option value="dress">Dress</Option>
              <Option value="pajamas">Pajamas</Option>
              <Option value="shirt">Shirt</Option>
              <Option value="legging">Legging</Option>
              <Option value="hoddie">Hoddie</Option>
              <Option value="pants">Pants</Option>
              <Option value="-">-</Option>
            </Select>

          </Form.Item>
          
          <Form.Item name="file" label="Upload">
            <Upload
              customRequest={() => {}}
              onChange={onChange}
              fileList={fileList}
              maxCount={1}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Upload File</Button>
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