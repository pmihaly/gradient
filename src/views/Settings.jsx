import {
  TextField,
  InputAdornment,
  Container,
  Button,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

const Settings = () => {
  const [subreddits, setSubreddits] = useState(
    JSON.parse(localStorage.getItem("subreddits")) || []
  );

  function followSubreddit(e) {
    e.preventDefault();
    const newSubredditFollow = e.target.newSubredditFollow.value;
    e.target.newSubredditFollow.value = "";

    const updatedSubreddits = [...subreddits, newSubredditFollow];

    localStorage.setItem("subreddits", JSON.stringify(updatedSubreddits));
    setSubreddits(updatedSubreddits);
  }

  function displayFollowedSubreddits() {
    if (subreddits) {
      return subreddits.map(sub => (
        <ListItem key={sub}>
          <ListItemText>{sub}</ListItemText>
        </ListItem>
      ));
    }
  }

  return (
    <Container>
      <List>{displayFollowedSubreddits()}</List>

      <form noValidate autoComplete="off" onSubmit={followSubreddit}>
        <TextField
          label="New Subreddit"
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">r/</InputAdornment>
          }}
          style={{ marginRight: "2rem" }}
          name="newSubredditFollow"
        />
        <Button
          variant="outlined"
          color="primary"
          startIcon={<AddIcon />}
          size="large"
          type="submit"
        >
          Add Subreddit
        </Button>
      </form>
    </Container>
  );
};

export default Settings;
