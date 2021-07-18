//import React from "react";
// import React from 'react'
import React, { useState, useEffect } from "react";
//import axios from "axios";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { data } from "browserslist";

const Detailed = () => {
  const { id } = useParams();
  const [mydata, setMyData] = useState([]);
  const [fetch1, setFetch1] = useState([]);

  console.log({ id });

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    if (res) {
      setMyData(res.data[id - 1]);
      setFetch1(res.data);
      console.log(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const [show1, setShow1] = useState(false);
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
    if (show === show) {
      setShow1(false);
    }
  };

  const handle = () => {
    setShow1(!show1);
    if (show1 === show1) {
      setShow(false);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Image src={mydata && mydata.image} />
        <span>{mydata && mydata.description}</span>
        <Describe>{mydata && mydata.category}</Describe>
      </Wrapper>

      <BoxHolder>
        <BoxDiv>
          <Box onClick={toggle}>
            <span>Men's closet</span>
          </Box>
          <Box onClick={handle}>
            <span>Women's closet</span>
          </Box>
        </BoxDiv>
        <Section>
          {show
            ? fetch1.map(({ id, image, category }) => (
                <Category key={id}>
                  {category === "men's clothing" ? (
                    <Image1 src={image} />
                  ) : null}
                </Category>
              ))
            : null}
        </Section>
        <Section>
          {show1
            ? fetch1.map(({ id, image, category }) => (
                <Category key={id}>
                  {category === "women's clothing" ? (
                    <Image1 src={image} />
                  ) : null}
                </Category>
              ))
            : null}
        </Section>
      </BoxHolder>
    </Container>
  );
};

export default Detailed;

const BoxDiv = styled.div`
  width: 350px;
  height: 50px;
  border: 1px solid blue;
  align-items: center;
  justify-content: center;
  // margin-top: -300px;
`;

const Section = styled.div``;

const Category = styled.div`
  // width: 200px;
  // height: 200px;
  // border: 5px solid blue;
`;

const Image1 = styled.img`
  width: 80%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin: 5px;
  border: 10px solid blue;
`;

const Box = styled.div`
  width: 110px;
  height: 40px;
  font-family: san-serif;
  margin: 5px;
  background-color: tomato;
  display: flex;
  //position: absolute;
  border-radius: 5px;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  span {
    font-size: 13px;
    font-weight: bold;
    margin-top: 10px;
    //position: fixed;
    color: black;
  }
`;
const Describe = styled.div``;

const BoxHolder = styled.div`
  /background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //border: 1px solid red;
  width: 80vw;
  height: 200px;
  div {
    display: flex;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  display: flex;
`;

const Container = styled.div`
  width: 100vw;
  height: 300vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  background-color: lavender;
  color: white;
  font-size: 10px;
  //position: relative;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 400px;
  margin: 20px;
  padding: 20px;
  background-color: #4a154b;
  border-radius: 5px;
  font-size: 12px;
  //position: relative;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 10px;
    font-weight: bold;
    margin-top: 30px;
  }

  div {
    font-size: 10px;
    display: flex;
    justify-content: center;
    color: red;
    letter-spacing: 1.3px;
  }
`;
