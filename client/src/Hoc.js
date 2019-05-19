import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function Hoc(ComponentToProtect) {
  return class extends Component {
    constructor(props) {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      //console.log("hello world")
        axios.get("/auth/checkToken", {withCredentials: true})
        .then(res => {
          //console.log(res.status)
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }


    render() {
      //console.log("hello world")
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/signin" />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      )
    }
  }
}


