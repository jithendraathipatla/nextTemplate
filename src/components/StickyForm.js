'use client'
import React from 'react'
import { Input, Form, Select, Space, Button } from 'antd';


const StickyForm = props => {
    return (
        <div>
            <div className="back">
                <h3>Brigade Calista</h3>
                <br/>
                <Form>

                    <Input placeholder="Name" />
                    <br />
                    <Input placeholder="Phone Number" />
                    <br />
                    <Input placeholder="Email" />
                    <br />

                    <Select placeholder="Intrested in site visit">

                        <Option value="Yes">Yes</Option>
                        <Option value="No">NO</Option>
                    </Select>
                    <br />
                    <Button type="primary" htmlType="submit">
                        Enquire Now
                    </Button>
                </Form>
            </div>
            <style>
                {`
         .back{
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.5rem 1.275rem 0.75rem;
            background-color: hsla(190, 72%, 50%, 0.1);
            border-radius: 1rem;
            overflow: hidden;
            isolation: isolate;
         }
         .ant-input{
             margin-bottom: 15px;
         }
         .ant-btn-primary {
            margin-top: 15px;
            color: #fff;
            background-color: #1677ff !important;
            box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
        }
        `}
            </style>
        </div>
    )
}



export default StickyForm