import React from "react";
import { Link } from "react-router-dom";
import { Button, Flex } from "antd";
import "../index.css";
const NotFoundPage = () => {
  return (
    <div>
      <Flex vertical gap="middle" align="center">
        <h1>Ah, 404 Not Found!</h1>
        <Button danger>
          <Link to="/guangzhou">Go back to HomePage</Link>
        </Button>
      </Flex>
    </div>
  );
};

export default NotFoundPage;
