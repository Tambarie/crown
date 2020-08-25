import React from 'react';
import './homepage-component-styles.scss';


  const Homepage = () => {
    return (
        <main className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>MEN</h1>
                        <span className='sub-title'>SHOP NOW</span>

                    </div>

                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>WOMEN</h1>
                        <span className='sub-title'>SHOP NOW</span>

                    </div>

                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>JACKET</h1>
                        <span className='sub-title'>SHOP NOW</span>

                    </div>

                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>SNEAKERS</h1>
                        <span className='sub-title'>SHOP NOW</span>

                    </div>

                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>HATS</h1>
                        <span className='sub-title'>SHOP NOW</span>

                    </div>
                </div>
            </div>
        </main>
    );
}


export default Homepage;