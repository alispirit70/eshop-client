import React from 'react';
import Container from "Components/Layouts/Container";
import Row from "../../../Components/Layouts/Row";
import Col from "../../../Components/Layouts/Col";
import Badge from "../../../Components/DataDisplay/Badge";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Button from "Components/Form/Button";

import styles from "./MainNav.module.css"

import logo from "Assets/sample/logo.jpg"
import Input from "../../../Components/Form/Input";
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