import React, { useEffect, useState } from 'react';
import { Button, Table,Modal,Form,Input,Radio,Select } from 'antd';
import axios from 'axios';
import './CSS/Admin.css'
const { Option } = Select;
const { TextArea } = Input;

const Adminproductlists = () => {

  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);  
  const [form] = Form.useForm();


  useEffect(() => {
    fectedData();
  }, []);

  const fectedData = () => {
    axios.get('http://localhost:3001/productlists')
    .then((response) => {
      setData(response.data);     // Update the data state with fetched data
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }
    
  const handleView = (productId) =>{
    const product = data.find((item) => item.productid === productId);
    setSelectedProduct(product);
    setIsModalVisible(true);

    form.setFieldsValue({
      productid: product.productid,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      category: product.category,
      size: product.size,
      color: product.color,
    });

  }
  const handleDelete = (productid) =>{
    Modal.confirm({
      title: 'Confirm Delete',
      content: 'Are you sure you want to delete this product?',
      onOk() {
        console.log(productid);
        axios.delete(`http://localhost:3001/productdel`,{ data: { productid } })
          .then((response) => {
            console.log('Product deleted successfully:', response.data);
            fectedData();
          })
          .catch((error) => {
            console.error('Error deleting product:', error);
            Modal.error({
              title: 'Error',
              content: 'Error deleting product:This product have already in product history ', // Display the error message in the modal
            });
          });
      },
    });

  }
  const columns = [
    {
      title: 'id',
      dataIndex: 'productid',
      key: 'productid',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
    },
    {
      render: (text,record)=>(
        <div>
          <Button onClick={() => handleView(record.productid)}>View</Button>
          <Button type="primary" danger onClick={() => handleDelete(record.productid)}>Delete</Button>
        </div>
      )
    },
  ];
  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
  }

  const editedProduct = () => {
    form
    .validateFields()
    .then((record) => {
      // Form fields are valid
      console.log(record);
      axios.put('http://localhost:3001/editproduct',record)
      .then((response) => {
        console.log('Order status updated:', response);
        fectedData();
      })
      .catch((error) => {
        console.error('Error updating order status:', error);
      });
      setIsModalVisible(false);
      setSelectedProduct(null);
    })
    .catch((error) => {
      // Form fields have validation errors
      console.error('Form validation error:', error);
    });
    fectedData();
  }


  return (
    <div className='content'>
      <div className='incontent'>
        <Table columns={columns} dataSource={data}/>
        <Modal
          title="Product Details"
          visible={isModalVisible}
          onOk={editedProduct}
          onCancel={closeModal}
        >
          {selectedProduct && (
            <div>
              <Form form={form}>
                <Form.Item label="productid" name="productid" style={{ display: 'none' }}>
                  <Input />
                </Form.Item>
                <Form.Item label="name" name="name">
                  <Input/>
                </Form.Item>
                <Form.Item label="price" name="price">
                  <Input/>
                </Form.Item>
                <Form.Item label="quantity" name="quantity">
                  <Input/>
                </Form.Item>

                <Form.Item name="description" label="Description">
                  <TextArea rows={4} />
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
              </Form>
            </div>
          )}
        </Modal>
      </div>
    </div>
  )
}

export default Adminproductlists
