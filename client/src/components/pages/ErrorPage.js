import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends React.Component {
    state = {
        display: true
    }
    
    displayNone() {
        this.setState({
            display: false
        })
    }

    render() {

        return (
            <div>
                <div className="full-width-row error-primary-bg">
                    <div className="error-div" style={{display : this.state.display ? 'block' : 'none'}}>
                        <h2 className="error-div__header text-center ">404</h2>
                        <h2 className="error-div__sub-header text-center ">Oh no! Page not found.</h2>
                        <Link to={`/`} className="text-center hero__content__button" onClick={this.displayNone}>
                        <button>
                        Return to Home
                        </button>
                        </Link>

                    </div>
                </div>
            </div>
        );
    }
}