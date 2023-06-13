import React from 'react';



const portfolio = () => {

    const myImage = require('../myImage.jpg').default;

    return (
        <div  className="image-box">
            <img src={'https://img.freepik.com/free-vector/watercolor-oil-painting-background_52683-107025.jpg'}  />

            <div className="image-text">
                <h1 className="main_image_text">안녕하세요</h1>
            </div>
         
        
        </div>
    );
};

export default portfolio;