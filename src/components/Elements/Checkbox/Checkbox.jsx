import { Switch } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { darkModeCreator } from "../../../Redux/settings-reducer";

class CheckInput extends React.Component {
    state= {
        checked: this.props.darkMode
    }

    render() {
        return (
            <div>
                <span style= {{marginLeft: 50, fontSize: 18, marginRight: 10}}>Dark mode</span>
                 <span>
                    <Switch
                        color='secondary'
                        checked={this.state.checked}
                        onClick={async () => {
                            await this.setState({
                                ...this.state,
                                checked: !this.state.checked
                            })
                            this.props.darkModeCreator(this.state.checked)
                        }}
                    />
                </span>
                
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    darkMode: state.settings.darkMode
}) 

export default connect(mapStateToProps, {darkModeCreator})(CheckInput)