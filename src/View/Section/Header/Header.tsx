import React from 'react';
import Sticky from "Components/DataDisplay/Sticky";
import stickyImg from 'Assets/sample/1671093621.gif';
import MainNav from "View/Section/Header/MainNav";
import Menu from "Components/Menu/Menu";
import MenuData from 'Services/FakeMenuItemsB';
type propsType = {
    disableSticky?: boolean,
}
const {getData} = MenuData()

const Header:React.FC<propsType> = ({
                                        disableSticky = false
                                    }) => {

const data = getData();
const attributes = {}
    return (
        <>
            {!disableSticky && <Sticky image={stickyImg} alt='sample' />}
            <MainNav />
            <Menu menuItems={data} />
        </>
    );
};

export default Header;