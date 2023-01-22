import React from 'react';
import Container from "components/layouts/Container";
import Row from "components/layouts/Row";
import Col from "components/layouts/Col";
import Badge from "components/dataDisplay/Badge";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Button from "components/form/Button";

import styles from "./MainNav.module.css"

import logo from "assets/sample/logo.jpg"
import Input from "components/form/Input";
const isLogin = true;

type propsType = {}
const MainNav: React.FC<propsType> = () => {
    const attributes = {}
    return (
        <Container>
            <Row>
                <Col col={{xs: 12, sm: 3}}>
                    <img className={styles.logo} src={logo}/>
                </Col>
                <Col col={{xs: 12, sm: 6}}>
                    <Input label='جست و جو'  />
                </Col>
                <Col col={{xs: 12, sm: 3}}>
                    <Badge anchorOrigin={{horizontal: "right", vertical: "top"}} badgeContent='5' color='info'>
                        <ShoppingCart color='info'/>
                    </Badge>
                    {!isLogin && <Button color='info' type='button' variant='contained' size='small'> ورود </Button>}
                    {isLogin && <Button color='info' type='button' variant='contained' size='small'> پروفایل </Button>}
                </Col>


            </Row>
        </Container>
    );
};

export default MainNav;