import React, { Component } from 'react'
import { connect } from 'react-redux';
import createPost from "../../store/actions/POSTPost/createPost"
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

class AddPost extends Component {
  constructor(props) {
    const members = props.users
    // console.log(props)
    const username = props.username
    const selection = members.filter((member) => { return member !== username })
    console.log(selection, "Selcetion")
    super(props)
    this.mmbrs = members
    this.state = {
      title: "",
      content: "",
      author: "",
      open: false,
      visibleFor: selection,
      selected: members
    }
  }

  // componentDidUpdate() {
  //   console.log(this.props.status)
  //   this.props.status === "successful" && this.setState({
  //     content: "",
  //     title: ""
  //   })
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(props, "next Props")
  //   console.log(state, "prevState")
  //   if (props.status === "successfulCreation") {
  //     return {
  //       title: "",
  //       content: "",
  //       selected: state.members
  //     };
  //   }
  // }




  // componentDidMount() {
  //     const teamSize = Math.floor(Math.random() * 16) + 5;
  //     const teamMates = names.random(teamSize);
  //     this.setState({ teamMates });
  //   }


  handleSelection = event => {
    this.setState({ selected: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  //   handleClose = () => {
  //     this.setState({ open: false });
  //   };

  //   handleOpen = () => {
  //     this.setState({ open: true });
  //   };


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    //console.log(this.state)
  }

  handleSubmit = (e) => {
    // console.log(prevState)
    e.preventDefault()
    this.props.dispatch(createPost(this.state))
    this.setState({
      content: "",
      title: "",
      selected: this.mmbrs
    })
  }

  render() {

    // const { auth } = this.props;
    // if (!auth.uid) return <Redirect to='/signup' /> 
    console.log(this.props, "PROPS")
    return (
      <div className="container" >
        <div>{this.props.status === "successfulCreation" ? <h2 className="center-align">Successfully created</h2> : this.props.status === "errorPost" ? <h2 className="center-align">Something went wrong</h2> : <h2> </h2>}</div>
        <form onSubmit={this.handleSubmit}>
          {/* <div style={{ height: 100 }}>{JSON.stringify(this.state)}</div> */}
          <div className="input-field">
            <TextField
              name="title"
              onChange={this.handleChange}
              required
              value={this.state.title}
              placeholder="Titile"
              multiline={true}
              fullWidth={true} />
          </div>
          <div className="input-field">
            <TextField
              name="content"
              onChange={this.handleChange}
              required
              value={this.state.content}
              placeholder="Content"
              multiline={true}
              fullWidth={true} />
          </div>
          <div>
            <FormControl>
              <Button id="openMenu" className="blue darken-4 white-text" onClick={this.handleOpen} variant="contained">
                Choose participants
          </Button>
              <Select
                multiple
                required
                name="slected"
                value={this.state.selected}
                onChange={this.handleSelection}
                input={<Input id="select-multiple-checkbox " />}
                style={{ display: "none" }}
                open={this.state.open}
                onClose={this.handleClose}
                MenuProps={{
                  anchorEl: document.getElementById("openMenu"),
                  style: { marginTop: 60 }
                }}
              >
                {this.state.visibleFor.map((name, index) => (
                  <MenuItem key={name + index} value={name}>
                    <Checkbox checked={this.state.selected.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <br />
          <div className="center">
            <button className="btn blue darken-4 " onClick={this.handleSubmit}>Sumbit</button>
          </div>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     //console.log(ownProps, "ownprops1111")
//    return {
//         createPost: (post) => dispatch(createPost(post))
//     }
// }

const mapStateToProps = (state) => {
  console.log(state.postsdata.status, "state")
  return {
    users: state.users.users,
    // postsdata: state.postsdata,
    username: state.postsdata.username,
    status: state.postsdata.status
  }
}

export default connect(mapStateToProps)(AddPost)