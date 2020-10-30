import React, {useState} from 'react';
import css from './header.module.css'
import {
    Navbar,
    NavItem,
    NavLink,
    DropdownMenu,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav } from "reactstrap";

export default function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setDropdownOpen(!dropdownOpen);
    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <header className={css.header}>
            <img className={css.image} src='/assets/images/logo.png'/>
            <Navbar className={css.navigator} expand='xl'>
                <NavbarBrand href="/" className={css.navbarBrand}>Home</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink className={css.navItem} href='/book/book'>O Livro</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={css.navItem} href='/serie/serie'>A Série</NavLink>
                        </NavItem>
                        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle nav caret className={css.navItem} >
                                H. P. Lovecraft
                            </DropdownToggle>
                            <DropdownMenu className={css.dropdownMenu}>
                                <DropdownItem className={css.dropdownItem} href='/bio/bio'>Biografia</DropdownItem>
                                <DropdownItem className={css.dropdownItem} href='/universe/universe'>Universo</DropdownItem>
                                <DropdownItem className={css.dropdownItem} href='/monsters/monsters'>Criaturas</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem>
                            <NavLink className={css.navItem} href='/episodes/episodes'>Episórios</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={css.navItem} href='/trailers/trailers'>Trailers</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className={css.navItem} href='/podcast/podcast'>O Podcast</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={css.navItem} href='/credits/credits'>Créditos</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}