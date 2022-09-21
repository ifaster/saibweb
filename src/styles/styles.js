import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  background: #4d0099;
  color: #fff;
  height: 100vh;
  margin: 0;
  padding: 1rem;

  > h1 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  > h2 {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }

  > input {
    padding: 0.5rem;
    border: 0;
    outline: none;
    width: 15rem;
  }

  > button {
    padding: 0.5rem;

    background: yellow;
    color: #000;

    border: 0;
    outline: none;
    cursor: pointer;

    font-weight: bold;
    width: 15rem;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    background: #53e517;
    color: #000;

    border: 0;
    outline: none;
    cursor: pointer;

    font-weight: bold;
    width: 15rem;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.3rem;
  gap: 0.8rem;

  overflow-y: auto;
  width: 80%;
  max-height: 95vh;
  color: #fff;
`;
