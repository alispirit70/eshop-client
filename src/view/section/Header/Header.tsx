import React from 'react';
import Sticky from "components/dataDisplay/Sticky";
import stickyImg from 'assets/sample/1671093621.gif';
import MainNav from "view/section/Header/MainNav";
import Menu from "components/menu/Menu";
import MenuData from 'services/FakeMenuItemsB';
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