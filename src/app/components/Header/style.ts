import styled from "styled-components";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    background-color: #000000;
    color: #ffffff
`

const WrapperList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 200px;
    height: 100%;
    align-items: center;
    list-style: none;
    `

const List = styled.li`
    display: flex;
    justify-content: space-around;
`

const Link = styled.a`
    &:link{
        color: #ffffff;
        text-decoration: none;
    }

    &:visited{
        color: #ffffff;
    }

`

const ImageWrapper = styled.div`
    display: flex;
    height: 100%;
    margin-left: 40px
`

const Navbar = styled.nav`
`

export { HeaderWrapper, ImageWrapper, Link, List, Navbar, WrapperList }