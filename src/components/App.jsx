import React from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";


const App = () => {



    return (
        <div>


        <div className='container'>
            <div className='wrapper'>
                <Header />

                <Main/>

                <Footer/>
            </div>

        </div>



        </div>
    );
};

export default App;