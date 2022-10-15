import React, { useState } from "react";
import { TextField, Button, DialogActions } from "@mui/material";
import AddCptCodeActionModal from "../../Settings/Settings/AddCptCode/AddCptCode/AddCptCodeActionModal";
import { EVENTS } from "./events";

const CustomEditor = ({ scheduler }) => {
  const event = scheduler.edited;
  console.log(scheduler);

  // Make your own form/state
  const [state, setState] = useState({
    title: event?.title || "",
    description: event?.description || "",
    name: event?.name || "",
    age: event?.age || "",
  });
  const [error, setError] = useState(null);

  const handleChange = (value, name) => {
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    // Your own validation
    if (state.name.length < 3) {
      return setError({ ...error, name: "Min 3 letters" });
    }

    try {
      scheduler.loading(true);

      /**Simulate remote data saving */
      const added_updated_event = await new Promise((res) => {
        /**
         * Make sure the event have 4 mandatory fields
         * event_id: string|number
         * p: string
         * start: Date|string
         * end: Date|string
         */
        setTimeout(() => {
          res({
            event_id: event?.event_id || Math.random(),
            title: state.title,
            start: scheduler.state.start.value,
            end: scheduler.state.end.value,
            description: state.description,
            age: state.age,
            name: state.name,
          });
        }, 3000);
      });

      scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
      scheduler.close();
    } finally {
      scheduler.loading(false);
    }
  };
  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <TextField
          label="Title"
          value={state.title}
          onChange={(e) => handleChange(e.target.value, "title")}
          error={!!error}
          helperText={!!error && error["title"]}
          fullWidth
        />
        <TextField
          label="Description"
          value={state.description}
          onChange={(e) => handleChange(e.target.value, "description")}
          fullWidth
        />
        <TextField
          label="Name"
          value={state.name}
          onChange={(e) => handleChange(e.target.value, "name")}
          error={!!error}
          helperText={!!error && error["name"]}
          fullWidth
        />
        <TextField
          label="Age"
          value={state.age}
          onChange={(e) => handleChange(e.target.value, "age")}
          error={!!error}
          helperText={!!error && error["age"]}
          fullWidth
        />
      </div>
      <DialogActions>
        <Button onClick={scheduler.close}>Cancel</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </DialogActions>
      {/* <AddCptCodeActionModal
        open={true}
        handleClose={false}
      ></AddCptCodeActionModal> */}
    </div>
  );
};

export default CustomEditor;
