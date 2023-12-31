import styled from "styled-components";

const CharactersContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const CharContent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`

const CharList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const CharItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
    list-style: none;
    width: 300px;
`

const CharDescription = styled.p`
    text-align: justify;
`

const CharLink = styled.a`
    &:link{
        text-decoration: none;
        color: #000000;
    }

    &:visited{
        color: #000000;
    }
`

export { CharactersContainer, CharContent, CharDescription, CharItem, CharList, CharLink }