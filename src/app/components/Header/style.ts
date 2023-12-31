import styled from "styled-components";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    background-color: #000000;
    color: #ffffff;
`

const WrapperList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    align-items: center;
    list-style: none;
    gap: 10px;
`

const List = styled.li`
    display: flex;
    height: 100%;
    align-items: center;
    border-radius: 5px;
    &:hover{
        background-color: rgba(256, 256, 256, 0.2);
    }
`

const Link = styled.a`
    &:link{
        color: #ffffff;
        text-decoration: none;
        padding: 5px;
    }

    &:visited{
        color: #ffffff;
    }

`

const ImageWrapper = styled.div`
    display: flex;
    height: 100%;
    margin-left: 40px;
`

const Navbar = styled.nav`
`

export { HeaderWrapper, ImageWrapper, Link, List, Navbar, WrapperList }