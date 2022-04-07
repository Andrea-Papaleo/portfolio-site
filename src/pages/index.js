// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import Splash from "../components/Splash/Splash";
import { BioContainer, Button } from "../Elements";
import TileContainer from "../components/TiledSection/TileContainer";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Splash />
      <BioContainer>
        <h1>Hi, I'm Andrea.</h1>
        <p>
          I am a front-end engineer with backgrounds in physics, scientific
          computing, and FinTech. Let's work together.
        </p>
        <Button as={Link} to="/resume">
          Resume
        </Button>
      </BioContainer>
      <TileContainer />
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
