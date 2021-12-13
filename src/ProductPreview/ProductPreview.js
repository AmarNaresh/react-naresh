import react from 'react';
import classes from './ProductPreview.module.css';


const Productpreview = (props) => {
    const currentHours = new Date().getHours() > 9 ? new Date().getHours() :  '0' + new Date().getHours(); 
    const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() :  '0' + new Date().getMinutes();
    
    return (
        <div className={classes.Productpreview}>
               <img src={props.currentPreviewImage} alt="productpreview"/>
                 {
                     props.currentFeatureListpos ?
                     
                     <div className={classes.HeartaBeatSection}>
                   <i className="fas fa-heartbeat"></i>
                   <p>78</p>
                   </div>
                   :
                    <div className={classes.TimeSection}>
                    <p>{`${currentHours}:${currentMinutes}`}</p>
                    </div>
                    
                   
            }
            </div>
    );
}
export default Productpreview;