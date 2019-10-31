import React from 'react';
import './App.css';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

class App extends React.Component {
  state = {
    ingredients: this.props.ingredients,
    stack: []
  }

  handleIngredientChange = (e, id) => {
    const stackedArray = [...this.state.stack]
    stackedArray.push(this.state.ingredients[id])
        
    this.setState ({
          stack: stackedArray
        })
      }
  
  handleClear = (e) => {
    this.setState({
      stack: []
    })
  }

  render() {
    return (
      <div className="App">
        <IngredientList allIngredients={this.state.ingredients} onClick={this.handleIngredientChange} />
        <BurgerPane  burger={this.state.stack} clearBurger={this.handleClear} />
      </div>
    )
  }
}

export default App;
