import React from 'react'
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router'
import { browserHistory } from 'react-router'

import ReactLoading from 'react-loading';
import 'styles/themeBuilder.sass'

import Header from 'components/Header'
import Footer from 'components/Footer'
import { initRestaurant } from 'store/restaurant.reducer'
import { initUserBasket } from 'store/userBasket.reducer';
import { initUser } from 'store/user.reducer'

import Auth from 'utils/auth.service';
import { userLogin } from '../../store/user.reducer';

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    if(!localStorage.getItem('expires_at'))
        localStorage.removeItem("id_token");
  }

  componentWillMount() {
    this.props.initRestaurant();    
    this.props.initUserBasket();

    if(Auth.isAuthenticated()){
      this.props.userLogin().then(() => {}, (err) => {
        //onError
        Auth.logout();
      });
    }
    Auth.lock.on("authenticated", (authResult, error) => {
      Auth.onAuthenticated(authResult, error, () => {
        this.props.userLogin().then(() => {
          browserHistory.push('/checkout');
        });
        
      })
    });

    Auth.lock.on('hide', () => {
      browserHistory.push('/menu');
    })
  }

  componentWillReceiveProps(props){
  }

  render() {
    const  { info, menu }  = this.props.restaurant;
    // console.log("men")
    if (info && menu) {
      document.title = info.name;

      return (
        <div className="grey-red-theme">
          <Header restaurant={info}/>
          <div style={{backgroundColor: "#f3f3f3" }}>
            {this.props.children}
          </div>
          <Footer restaurant={info} />
        </div>
      )
    } else {
      return (
        <div id="page-loader">
          <ReactLoading type="spin" color="#FFF" height='50px' width='50px' />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    restaurant : state.restaurant
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initUserBasket : () => dispatch(initUserBasket()),
    initRestaurant : () => dispatch(initRestaurant()),
    userLogin : () => dispatch(userLogin(localStorage.getItem('token'), localStorage.getItem('profile')))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);
