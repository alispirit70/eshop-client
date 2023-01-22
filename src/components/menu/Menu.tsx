import React, {MouseEventHandler, useState} from 'react';
import styles from './menu.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import Container from "../layouts/Container";
import {Link} from "react-router-dom";

type listType = {
    title: string,
    link: string,
}
type subMenuType = {
    title: string,
    link: string,
    list: listType[]
}
type MenuItemType = {
    title: string,
    subMenu: subMenuType[]
}
type MenuItemsType = {
    data: MenuItemType[]
}
type propsType = {
    menuItems?: MenuItemsType
}

const Menu: React.FC<propsType> = ({
                                       menuItems = { data : [] }
                                   }) => {
    const [active,setActive] = useState<number | null>( null);
    const [burgerActive,setBurgerActive] = useState<boolean>( false);

    const onClickHandler = ( event :  React.MouseEvent<HTMLElement> , num:number ) : void =>{
        setActive(num)
    }
    const backdropOnclickHandler = () : void =>{
        setActive(null)
        setBurgerActive( false)

    }
    const burgerOnClickHandler = () : void =>{
        if(burgerActive) {
            setActive(null)
        }else{
            setActive(0)
        }
        setBurgerActive( !burgerActive)
    }
    return (
        <Container>
            <div className={styles.mainMenu}>
                <div className={`${styles.menuBackdrop}  ${ active === null ? " " : styles.backdropActive } `} onClick={backdropOnclickHandler}></div>
                <nav>
                    <div onClick={burgerOnClickHandler} className={styles.menuBurger}><MenuIcon /></div>
                    <ul className={`${styles.menu} ${ burgerActive ? styles.shownMenu : '' }`}>
                        {
                            menuItems.data.map((menuItem , index) => {
                                return <li key={index} className={`  ${ index === active ? styles.active :" "} `}>
                                    <button className={styles.menuItem}   onClick={ (event) => onClickHandler(event , index) } >
                                        {menuItem.title}
                                    </button>
                                    <div className={styles.submenuSec}>
                                        <div   className={styles.submenuList}>
                                            {menuItem.subMenu.map( (subItem, indexSubItem) => {
                                                return (
                                                    <ul key={indexSubItem} className={styles.submenu}>
                                                        <li className={styles.subItem} ><a href={subItem.link}><strong>{subItem.title}</strong></a></li>
                                                        {subItem.list.map( (item,indexItem) => <li key={index+"-"+indexItem}><a href={item.link}>{item.title}</a></li>  )}
                                                    </ul>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </nav>
            </div>
        </Container>

    );
};

export default Menu;