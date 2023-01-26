import React from 'react';
import Container from "components/layouts/Container";
import Col from "components/layouts/Col";
import Button from "components/form/Button";
import ButtonGroup from "components/form/ButtonGroup";
import Checkbox from "components/form/Checkbox";
import RadioGROUPO from "components/form/RadioGroup";
import Select from "components/form/Select";
import Switch from "components/form/Switch";
import Input from "components/form/Input";
import Textarea from "components/form/Textarea";
import Badge from "components/dataDisplay/Badge";
import Avatar from "components/dataDisplay/Avatar";
import Divider from "components/dataDisplay/Divider";
import List from "components/list/List";
import ListItem from "components/list/ListItem";
import Tooltip from "components/dataDisplay/Tooltip";

import avatar2 from 'Assets/2.jpg'
import avatar3 from 'Assets/3.jpg'
import avatar4 from 'Assets/4.jpg'
import {Box, Stack} from "@mui/material";

import MailIcon from '@mui/icons-material/Mail';
import Row from "components/layouts/Row";


const selectItems = [
    {label: 'Item 1', value: 11},
    {label: 'Item 2', value: 12},
    {label: 'Item 3', value: 13},
    {label: 'Item 4', value: 14},
    {label: 'Item 5', value: 15},
    {label: 'Item 6', value: 16},
]


const TestComponent = () => {
    return (
        <Container>
            <Row extraStyle={{py:2}}>
                <Col col={{xs: 12, md: 6}}>
                    <Button size='medium' variant='contained'> click </Button>
                    <Button size='small' color='warning' variant='outlined'> click </Button>
                </Col>
                <Col col={{xs: 12, md: 6}}>
                    <ButtonGroup size='small' variant='outlined' color='success'>
                        <Button> click 1 </Button>
                        <Button> click 2 </Button>
                        <Button> click 3 </Button>
                    </ButtonGroup>
                    <br/>
                    <ButtonGroup variant='contained' size='small' color='error'>
                        <Button> click 1 </Button>
                        <Button> click 2 </Button>
                        <Button> click 3 </Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col col={{xs: 12, md: 6}}>
                    <Checkbox size="small" defaultChecked/>
                    <Checkbox color='success' size="small" defaultChecked/>
                    <Checkbox color='error' defaultChecked/>
                    <Checkbox color='secondary' defaultChecked/>
                </Col>
                <Col col={{xs: 12, md: 6}}>
                    <RadioGROUPO items={[{label: "one", value: 1}, {label: "two", value: 2}]} defaultValue={2} row={true}/>
                </Col>
                <Col col={{xs: 12, md: 6}}>
                    <Select items={selectItems} label='test Select' multiple={false} value={[]} variant='standard'
                            itemVariant='badge' name='test1'/>
                </Col>
                <Col col={{xs: 12, md: 6}}>
                    <Select items={selectItems} label='test Select' multiple={true} value={[]} variant='outlined'
                            itemVariant='standard' name='test2'/>
                </Col>
                <Col col={{xs: 12, md: 6}}>
                    <Select items={selectItems} label='test Select' multiple={true} value={[14, 15]} variant='standard'
                            itemVariant='badge' name='test3'/>
                </Col>
                <Col col={{xs: 12, md: 6}}>
                    <Switch label='test' defaultChecked={true}/>
                    <Switch color='error' label='error' defaultChecked={true}/>
                    <Switch color='warning' label='warning' defaultChecked={true}/>
                    <Switch color='success' label='success' defaultChecked={true}/>
                    <Switch color='secondary' label='secondary' defaultChecked={true}/>
                </Col>
                <Col col={{xs: 12, md: 6}}>
                    <Textarea defaultValue='123 123 123123 123 213 123' minRows={8} maxRows={8}/>
                </Col>
                <Col col={{xs: 12, md: 6}}>
                    <Input label='search' />
                </Col>
                <Col col={{xs: 12, md: 6}}>
                    <Stack direction="row" spacing={2}>
                        <Avatar variant='circular' src={avatar2}/>
                        <Avatar variant='rounded' src={avatar3}/>
                        <Avatar variant='square' src={avatar4}/>
                    </Stack>
                </Col>
                <Col col={{xs: 12, md: 6}}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: 'fit-content',
                            border: (theme) => `1px solid ${theme.palette.divider}`,
                            borderRadius: 1,
                            bgcolor: 'background.paper',
                            color: 'text.secondary',
                            '& svg': {
                                m: 1.5,
                            },
                            '& hr': {
                                mx: 0.5,
                            },
                        }}
                    >
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon color="action"/>
                        </Badge>
                        <Divider orientation="vertical" flexItem />
                        <Badge color="secondary" variant="dot" invisible={false}>
                            <MailIcon/>
                        </Badge>
                        <Divider orientation="vertical" flexItem />

                        <Badge color="secondary" badgeContent={1000} max={999}>
                            <MailIcon />
                        </Badge>
                    </Box>


                </Col>
                <Col col={{xs: 12, md: 6}}>
                    tooltip :
                    <div>
                        <Tooltip title='test'  arrow={true} placement='right'>
                            <MailIcon />
                        </Tooltip>
                    </div>
                </Col>
                <Col col={{xs: 12, md: 6}}>
                    <List>
                        <ListItem
                            divider={true}
                            text='item 1'
                            icon={<MailIcon />}
                            showSubList={true}
                            subListProps={
                                <List>
                                    <ListItem
                                        divider={true}
                                        text='item 1-1'
                                        icon={<MailIcon />}
                                    />
                                    <ListItem
                                        divider={true}
                                        text='item 1-2'
                                        icon={<MailIcon />}
                                    />
                                </List>
                            }
                        />
                        <ListItem
                            divider={true}
                            text='item 2'
                            icon={<MailIcon />}
                            showSubList={true}
                            subListProps={
                                <List>
                                    <ListItem
                                        divider={true}
                                        text='item 2-1'
                                        icon={<MailIcon />}
                                    />
                                    <ListItem
                                        divider={true}
                                        text='item 2-2'
                                        icon={<MailIcon />}
                                    />
                                </List>
                            }
                        />
                    </List>
                </Col>
            </Row>



        </Container>
    );
};

export default TestComponent;

