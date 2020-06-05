import React from 'react';
import Data from '../Products/products.json'


const initialState = {
    products: Data
  }
  // this.state is our brain 
  class Filter1 extends React.Component {
    constructor() {
        super()
        this.state = initialState
  }
  
  filterProducts =(evt) => {
    let value = evt.target.value
  
    // makes a new array for product availability 
    const allProducts =  [...initialState.products] 
      if (value === "All"){
        this.setState({products: allProducts})
        return 
      }
      //filters by category
    const filterProducts = allProducts.filter(product => {
      return product.category === value
    })
    // only products that we filter
    this.setState({products: filterProducts})
  };
  
  
  filterPrice =(evt) => {
    let value = evt.target.value
  
    // makes a new array for product availability 
    const allProducts =  [...initialState.products] 
      if (value === "All"){
        this.setState({products: allProducts})
        return 
      }
      //filters by price
    const filterPrice = allProducts.filter(product => {
      return product.price === value
    })
    // only products that we filter
    this.setState({products: filterPrice})
  };
  
  
  render(){
  const mappedProducts = this.state.products.map(product => {
     
      return <Filter1 name={product.productname} price={product.price} description={product.description} image={product.image} />
  })
  
  return (
  
    <div className="ProductsContainer ">
  
      <h1 >Menu</h1>
        <select onChange={evt => this.filterProducts(evt)} >
                <option value="All">All Types</option>
                <option value="Mats">Mats</option>
                 <option value="Blocks">Blocks</option>
                 <option value="Spray">Spray</option>
                 <option value="Sale">Sale</option>
        </select> 
  
        <select onChange={evt => this.filterPrice(evt)} >
                <option value="All">All Prices</option>
                <option value="5.00">$5.00</option>
                <option value="7.00">$7.00</option>
                <option value="10.00">$10.00</option>
                <option value="12.00">$12.00</option>
        </select> 
  
     <div className= "container">
     {mappedProducts}
    </div>   

    </div>
  );
  }
  }

  export default Filter1;