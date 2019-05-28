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
      axios.get("/api/auth/checkToken/", { withCredentials: true })
        .then(res => {
          console.log(res.status)
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
      const { loading, redirect } = this.state;
      return (
        <div>
          {loading
            ? <p> </p>
            : redirect
              ? <Redirect to="/signin" />
              : <React.Fragment>
                <ComponentToProtect {...this.props} />
              </React.Fragment>}
        </div>
      )
    }
  }
}


