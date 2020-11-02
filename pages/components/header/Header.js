import React, {useState} from 'react';
import Link from 'next/link';
import css from './header.module.css';
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
                <Link href="/"><NavbarBrand href="/" className={css.navbarBrand}>Home</NavbarBrand></Link>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <Link href="/book/book"><NavLink className={css.navItem} href='/book/book'>O Livro</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/serie/serie"><NavLink className={css.navItem} href='/serie/serie'>A Série</NavLink></Link>
                        </NavItem>
                        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle nav caret className={css.navItem} >
                                H. P. Lovecraft
                            </DropdownToggle>
                            <DropdownMenu className={css.dropdownMenu}>
                                <Link href="/bio/bio"><DropdownItem className={css.dropdownItem} href='/bio/bio'>Biografia</DropdownItem></Link>
                                <Link href="/universe/universe"><DropdownItem className={css.dropdownItem} href='/universe/universe'>Universo</DropdownItem></Link>
                                <Link href="/monsters/monsters"><DropdownItem className={css.dropdownItem} href='/monsters/monsters'>Criaturas</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem>
                            <Link href="/episodes/episodes"><NavLink className={css.navItem} href='/episodes/episodes'>Episórios</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/trailers/trailers"><NavLink className={css.navItem} href='/trailers/trailers'>Trailers</NavLink></Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/podecast/podecast"><NavLink className={css.navItem} href='/podcast/podcast'>O Podcast</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/credits/credits"><NavLink className={css.navItem} href='/credits/credits'>Créditos</NavLink></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}