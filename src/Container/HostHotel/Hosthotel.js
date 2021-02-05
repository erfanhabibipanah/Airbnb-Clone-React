import React, { Component } from "react";
import "./Hosthotel.css";
import Logo from "../../Assets/host.png";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import Input from "../../Components/Input/Input";
import * as actionCreators from "../../Store/ActionCreators/index";
import { Redirect } from "react-router";
class Hosthotel extends Component {
  state = {
    loading: false,
  };

  setLoading = (bool) => {
    this.setState({ loading: bool });
  };
  render() {
      return (
          <div className="host">
              {this.props.user===null && <Redirect to="/"/>}
          {this.props.user && 
          <React.Fragment>
          <h2>Host Your Hotel Here.</h2>
          <p>
            Send Us the details we will contact you as Soon as there will be
            booking for your Hotel.
          </p>
          <div className="host__powered">
            {" "}
            <h4>Hosted By</h4>{" "}
            <img className="host__image" alt="host" src={Logo} />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.props.resetInputHandler();
            }}
          >
              <div className={"Input"}>
            <label className={"Label"}><div style={{display: "flex",alignItems: "center",alignSelf: "center"}} >E-mail</div>
            <input type="email"  disabled={true} value={this.props.user.user.email}/>
            </label>
        </div>
            {Object.keys(this.props.hotelInputs).map((ele) => {
              return (
                <Input
                onChange={this.props.changeInputHandler}
                id={ele}
                  key={ele}
                  haveChangedOnce={this.props.hotelInputs[ele].haveChangedOnce}
                  conditions={this.props.hotelInputs[ele].conditions}
                  isValid={this.props.hotelInputs[ele].isValid}
                  elementConfig={this.props.hotelInputs[ele].elementConfig}
                  elementValue={this.props.hotelInputs[ele].elementValue}
                  label={this.props.hotelInputs[ele].label}
                  elementType={this.props.hotelInputs[ele].elementType}
                />
              );
            })}
            <Button style={{margin: "0px auto"}}
              variant="outlined"
              className="host__submitbutton"
              type="submit"
            >
              SUBMIT
            </Button>
          </form>
        
          </React.Fragment>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hotelInputs: state.hostinput.hotelInformation,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      changeInputHandler: (e,id)=>{dispatch(actionCreators.changeinput(e,id))},
      resetInputHandler: ()=>{dispatch(actionCreators.resetInput())}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hosthotel);
