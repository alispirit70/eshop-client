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
import { Link } from 'react-router-dom';
import Stack from "../../../components/layouts/Stack";
const isLogin = true;

type propsType = {}
const MainNav: React.FC<propsType> = () => {
    const attributes = {}
    return (
        <Container>
            <Row>
                <Col col={{xs: 12, sm: 3}}>
                    <Link to='/' >
                        <img className={styles.logo} src={logo}/>
                    </Link>
                </Col>
                <Col col={{xs: 12, sm: 6}}>
                    <Input label='جست و جو'  />
                </Col>
                <Col col={{xs: 12, sm: 3}}>
                    <Stack direction='row' >
                        <Badge anchorOrigin={{horizontal: "right", vertical: "top"}} badgeContent='5' color='info'>
                            <ShoppingCart color='info'/>
                        </Badge>
                        <div className='px-4'>
                            {!isLogin && <Button color='info' type='button' variant='contained' size='small'> ورود </Button>}
                            {isLogin && <Link to='/profile' > پروفایل </Link>}
                            {/*{isLogin && <Link to='/profile' > <Button color='info' type='button' variant='outlined' size='small'> پروفایل </Button> </Link>}*/}
                        </div>
                    </Stack>



                </Col>


            </Row>
        </Container>
    );
};

export default MainNav;