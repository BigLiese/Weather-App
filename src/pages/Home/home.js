import React from "react";
import { Flex } from "antd";
import Header from "../../components/Header/Header";
import "../../index.css";

const Home = () => {
  return (
    <div>
      <Flex gap="middle" vertical align="center">
        <Header />
      </Flex>
    </div>
  );
};

export default Home;
