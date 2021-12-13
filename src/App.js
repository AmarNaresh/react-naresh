import react, {Component} from 'react';

import classes from './App.module.css';

import ProductDetails from './Productdetails/ProductDetails';
import Productpreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';
import ProductData from './ProductData ';


class App extends Component {
  state = {
    ProductData: ProductData,
    currentPreviewImagepos: 0,
    currentFeatureListpos: 0,
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagepos: pos});
  }

  onFeatureListClick = (pos) => {
    this.setState({currentFeatureListpos: pos});
  }
  render () {
    return (
      <div className="App">
              <Topbar />

         <div className={classes.Maincontainer}> 
            <div className={classes.Productpreview}>
            <Productpreview currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagepos].imageUrl} 
             currentFeatureListpos={this.state.currentFeatureListpos} />
            </div>
  
            <div className={classes.ProductData}>
               <ProductDetails data={this.state.ProductData}  onColorOptionClick={this. onColorOptionClick}
              currentPreviewImagepos={this.state.currentPreviewImagepos} onFeatureListClick={this.onFeatureListClick}
              currentFeatureListpos={this.state.currentFeatureListpos} />
            </div>
         </div>
      </div>
    );

  }
   
    }
  
  


export default App;
