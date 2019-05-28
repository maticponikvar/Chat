import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import names from "starwars-names";

class Chbox extends React.Component {
  state = {
    selected: [],
    open: false,
    teamMates: ["matic", "jaz", "moje ime", "jamojaz"]
  };


  handleChange = event => {
    this.setState({ selected: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <div style={{ height: 100 }}>{JSON.stringify(this.state)}</div>
        <FormControl>
          <Button id="openMenu" onClick={this.handleOpen} variant="raised">
            Choose
          </Button>
          <Select
            multiple
            value={this.state.selected}
            onChange={this.handleChange}
            input={<Input id="select-multiple-checkbox" />}
            style={{ display: "none" }}
            open={this.state.open}
            onClose={this.handleClose}
            MenuProps={{
              anchorEl: document.getElementById("openMenu"),
              style: { marginTop: 60 }
            }}
          >
            {this.state.teamMates.map((name, index) => (
              <MenuItem key={name + index} value={name}>
                <Checkbox checked={this.state.selected.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default Chbox;