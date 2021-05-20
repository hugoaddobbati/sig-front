import styled from "styled-components";

const View = styled.div`
    height: 100vh;
    width: 100vw;
    background: #2F131E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around
`;

const Title = styled.div`
    color: #CEC3C1;
    font-size: 40px;
    font-weight: bold;
    font-family: Roboto;
`;

export {
    View,
    Title
};