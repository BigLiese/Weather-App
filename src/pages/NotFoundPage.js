import React from "react";
import { Link } from "react-router-dom";
import { Button, Flex } from "antd";
import "../index.css";
const NotFoundPage = () => {
  return (
    <div>
      <Flex
        vertical
        justify="center"
        gap="middle"
        align="center"
        className="not-found-content"
      >
        <h2>Sorry, this city data can't be found.</h2>
        <h2>Please check cities through the selector!</h2>
        <Button danger size="large">
          <Link to="/">Go back to HomePage</Link>
        </Button>
      </Flex>
    </div>
  );
};

export default NotFoundPage;
