// pages/Home.jsx
import styled from "@emotion/styled";
import { useEffect } from "react";
import { getUserInfo } from "../api/user";

const Home = () => {

    useEffect(() => {
        const data = getUserInfo(1)
        console.log(data.id);
    },[])

    return <Container>Home</Container>;
};

const Container = styled.div`
  background-color: red;
`;

export default Home;
