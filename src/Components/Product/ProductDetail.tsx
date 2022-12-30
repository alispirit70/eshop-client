import React from 'react';
import Tabs from "../Navigation/Tabs";
import Container from "../Layouts/Container";
import Row from "../Layouts/Row";
import Col from "../Layouts/Col";
import Table from "../Table/Table";

// const descriptionData = <ul><li><strong>جنس الیاف:</strong>&nbsp;100% ویسکوز</li><li><strong>نرمی و زبری:</strong>&nbsp;نرم</li><li><strong>ضخامت پارچه:</strong>&nbsp;کم</li><li><strong>جزئیات مدل:</strong>کات هلالی، یوک افقی پشت لباس&nbsp;</li><li><strong>قد پیراهن:</strong>&nbsp;برای سایز M، در حدود&nbsp;77 سانتی متر</li></ul>;
const descriptionData = ""

const specData = [
    ["کد محصول", "22533058"],
    ["یقه", "کراواتی"],
    ["آستین", "کوتاه"],
    ["طرح", "طرحدار"],
    ["جنس پارچه", "ویسکوز"],
    ["نحوه بسته‌شدن", "دکمه"],
    ["قواره", "متناسب"],
    ["نوع شستشو", "دستی"],
    ["نحوه شستشو", "به صورت مجزا یا با رنگ‌های مشابه"],
    ["ماکزیمم دمای شستشو", "30 درجه سانتی‌گراد"],
    ["ماکزیمم دمای اتوکشی", "130 درجه سانتی‌گراد"],
    ["مناسب برای", "آقایان"],
    ["مناسب برای فصول", "گرم سال"],
    ["برند", "JootiJeans"],
]
const specification = <Table
    header={false}
    rows={specData}
    tableStriped={true}
/>;
const comments = '';

const tabLabels = [
    {index: 0, label: "ویژگی ها"},
    {index: 1, label: "مشخصات محصول"},
    {index: 2, label: "نظرات کاربران"},
]
const tabContent = [
    {index: 0, content: descriptionData},
    {index: 1, content: specification},
    {index: 2, content: comments},
]
type propsType = {}
const ProductDetail: React.FC<propsType> = () => {
    const attributes = {}
    return (
        <Container>
            <Row>
                <Col col={{xs: 12}}>
                    <Tabs labels={tabLabels} content={tabContent}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;