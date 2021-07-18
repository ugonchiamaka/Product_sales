// import React from 'react'
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    if (res) {
      setFetchData(res.data);
      console.log("this is it", fetchData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {fetchData.map(
        ({ name, id, company, phone, description, image, category, title }) => (
          <Wrapper key={id}>
            <Link to={`/Detailed/${id}`}>
              <Image src={image} />

              <span>{title}</span>
              <div>{category}</div>
            </Link>
          </Wrapper>
        )
      )}
    </Container>
  );
};

export default HomeScreen;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 5px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: cyan;
  color: black;
  font-size: 10px;
`;

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  padding: 20px;
  background-color: #4a154b;
  border-radius: 5px;
  font-size: 12px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 10px;
    font-weight: bold;
    margin-top: 10px;
  }

  div {
    font-size: 10px;
    display: flex;
    justify-content: center;
    color: red;
    letter-spacing: 1.3px;
  }
`;
