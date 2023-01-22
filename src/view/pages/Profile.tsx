import React from 'react';
import Layout from "components/layouts/Layout";
import Row from "../../components/layouts/Row";
import Col from "../../components/layouts/Col";
import Stack from "../../components/layouts/Stack";
import List from "../../components/list/List";
import ListItem from "../../components/list/ListItem";

type propsType = {}
const Profile: React.FC<propsType> = () => {
    const tempData = {
        firstname: 'علی',
        lastname: 'مردانی',
        validity: '1200000',

    }


    const attributes = {}
    return (
        <Layout>
            <Row>
                <Col col={{xs: 12, md: 4, lg: 3}}>
                    <Stack direction='column'>
                        <Stack direction='row'>
                            {tempData.firstname} {tempData.lastname}
                        </Stack>
                        <div>
                            اعتبار کیف پول :
                            {tempData.validity}
                            تومان
                        </div>
                        <div>
                            <List dense={false}>
                                <ListItem>
                                    حساب کاربری
                                </ListItem>
                                <ListItem>
                                    حساب کاربری
                                </ListItem>
                            </List>
                        </div>
                    </Stack>
                </Col>
                <Col col={{xs: 12, md: 8, lg: 9}}>
                    <Stack>
                        <div>
                            اطلاعات کاربری :
                        </div>

                        <div>
                            آخرین سفارشات
                        </div>
                    </Stack>
                </Col>
            </Row>
        </Layout>
    );
};

export default Profile;