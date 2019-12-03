import {
  TextField,
  InputAdornment,
  Container,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Box
} from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const Settings = () => {
  const [subreddits, setSubreddits] = useState(
    JSON.parse(localStorage.getItem("subreddits")) || []
  );

  function setAndSaveSubreddits(updatedSubreddits) {
    localStorage.setItem("subreddits", JSON.stringify(updatedSubreddits));
    setSubreddits(updatedSubreddits);
  }

  function followSubreddit(e) {
    e.preventDefault();
    const newSubredditFollow = e.target.newSubredditFollow.value;
    e.target.newSubredditFollow.value = "";

    setAndSaveSubreddits([...subreddits, newSubredditFollow]);
  }

  function deleteFollowedSubreddit(subToRemove) {
    setAndSaveSubreddits(subreddits.filter(sub => sub !== subToRemove));
  }

  function displayFollowedSubreddits() {
    if (
      Object.entries(subreddits).length !== 0 &&
      subreddits.constructor !== Object
    ) {
      return (
        <List>
          {subreddits.map(sub => (
            <ListItem key={sub}>
              <ListItemText>
                r/
                {sub}
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteFollowedSubreddit(sub)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      );
    }
    return (
      <Typography variant="overline">Add a Subreddit to your feed</Typography>
    );
  }

  return (
    <Container>
      <Box style={{ marginBottom: "3rem", marginTop: "3rem" }}>
        {displayFollowedSubreddits()}
      </Box>

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
