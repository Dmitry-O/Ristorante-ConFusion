import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import Dishdetail from './DishdetailComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments:  COMMENTS,
      selectedDish: null
    };
  }

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }

  render() {
    return (
      <div className="App">
          <Navbar dark color="primary">
            <div className="contrainer">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}/>
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} 
          comments={this.state.comments}/>
      </div>
    );
  }
}

export default Main;
