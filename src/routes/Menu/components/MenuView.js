import React from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';
import JumpTo from './JumpTo';
import UserBasket from './UserBasket';

class MenuView extends React.Component {


    render(){        
        return (
            <div className="container" style={{paddingTop: "20px", paddingBottom: "20px"}}>
                <div className="row"></div>
                <div className="row">
                    <div className="col-lg-9">
                        <Menu menu={this.props.menu} />
                    </div>
                    <div className="col-lg-3" style={{paddingLeft: "0px"}}>
                        <UserBasket showUnitPrice={false} />
                        <JumpTo menu={this.props.menu} /> 
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu : state.restaurant.menu
    }
}

export default connect(mapStateToProps)(MenuView)