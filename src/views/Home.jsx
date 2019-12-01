import {
  Container,
  GridList,
  GridListTile,
  useMediaQuery
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MemeComponent from "../components/MemeComponent";

const Home = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/?sub=me_irl`)
      .then(res => setMemes(res.data));
    return () => {
      setMemes([]);
    };
  }, []);

  let memesRendering = <div />;
  if (useMediaQuery("(min-width:768px)")) {
    memesRendering = (
      <GridList cellHeight="auto" spacing={15} cols={3}>
        {Object.entries(memes).map(([key, value]) => (
          <GridListTile key={key}>
            <MemeComponent title={value.title} imageUrl={value.pic} />
          </GridListTile>
        ))}
      </GridList>
    );
  } else {
    memesRendering = Object.entries(memes).map(([key, value]) => (
      <MemeComponent key={key} title={value.title} imageUrl={value.pic} />
    ));
  }

  return <Container maxWidth="lg">{memesRendering}</Container>;
};

export default Home;
