import React from 'react';
import Container from "Components/Layouts/Container";
import Col from "Components/Layouts/Col";
import Alert from "Components/Feedback/Alert";
import Button from "Components/Form/Button";
import Backdrop from "Components/Feedback/Backdrop";
import CircularProgress from "Components/Feedback/CircularProgress ";
import Snackbar from "Components/Feedback/Snackbar";
import Tabs from "Components/Navigation/Tabs";





const TestComponent2 = () => {
    const [open, setOpen] = React.useState(false);
    const handleToggle = () => {
        setOpen(open => !open);
    };
    const handleClose  = () => {
        setOpen(false);
    };


    const tabLabels = [
        {index : 0  , label : "label 1" },
        {index : 1  , label : "label 2" },
        {index : 2  , label : "label 3" },
    ]
    const tabContent = [
        {index : 0 , content : "tab 1 content" },
        {index : 1 , content : "tab 2 content" },
        {index : 2 , content : "tab 3 content" },
    ]
    return (
        <Container>
            <Col col={{xs: 12, md: 6}}>
                <Alert title={'simple title'} extraClass={{mt: 1}}>
                    some text for example .
                </Alert>
                <Alert severity='info' closeButton={true} extraClass={{mt: 1}}>
                    some text for example .
                </Alert>
                <Alert severity='error' closeButton={true} extraClass={{mt: 1}}>
                    some text for example .
                </Alert>
                <Alert severity='warning' closeButton={true} variant='filled' extraClass={{mt: 1}}>
                    some text for example .
                </Alert>
                <Alert severity='warning' closeButton={true} variant='outlined' extraClass={{mt: 1,py:0}}>
                    some text for example .
                </Alert>
                <Alert severity='warning' closeButton={true} variant='standard' extraClass={{mt: 1, py:0,}} >
                    some text for example .
                </Alert>
            </Col>
            <Col col={{xs: 12, md: 6}}>
                <Button onClick={handleToggle} variant='contained'>Show backdrop</Button>
                <Backdrop
                    open={open}
                    onClose={handleClose}
                />
            </Col>
            <Col col={{xs: 12, md: 6}}>
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
                <CircularProgress color="error" />
                <CircularProgress color="warning" value={45} variant="determinate"  />
                <CircularProgress color="info" value={65} variant="determinate" />
            </Col>
            <Col col={{xs: 12, md: 6}}>
                <Snackbar ButtonText='click for notif'  children="some text !!!"  severity='error' anchorOrigin={{horizontal: 'center' ,vertical:'top'  }}/>
                <Snackbar  ButtonVariant='outlined' ButtonText='click for notif'  children="some text !!!"  severity='warning' anchorOrigin={{horizontal: 'left' ,vertical:'bottom'  }} />
            </Col>
            <Col col={{xs: 12, md: 6}}>
                <Tabs labels={tabLabels} content={tabContent} />
            </Col>

        </Container>
    );
};

export default TestComponent2;

