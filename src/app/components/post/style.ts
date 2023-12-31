import styled from "styled-components";

const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const PostContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const PostList = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
`

const PostItem = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
`
const PostLink = styled.a`
    &:link{
        color: #000000;
        text-decoration: none;
        padding: 5px;
    }

    &:visited{
        color: #000000;
    }
`

export { PostsContainer, PostContent, PostItem, PostList, PostLink }