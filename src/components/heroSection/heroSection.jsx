import { Typography } from '@material-tailwind/react';
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#66bb6a' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src="images/logo.png" alt="" style={{ height: 60 }}/>
                            </div>

                            {/* Text  */}
                            <h1 className=' text-3xl text-white font-bold'>Aamcha Community</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Here are some latest feeds from Aamcha Auto.
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection