import React from 'react'
import  vg  from '../assets/2.webp';
import {AiFillGoogleCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
    <div className='home' id='home'>  
        <main>
            <h1><u>𝐊𝐈𝐒𝐇𝐀𝐍 𝐏𝐀𝐓𝐄𝐋⁰⁰⁷</u></h1>
            <p>Solution to all your problems...</p>
        </main>
    </div>

    <div className="home2" >
        <img src={vg} alt="graphics" />

        <div>
            <p>
                We are only one and tech problems you face every whose aim is to increase the problem solving abbility in children by Techypatel.
            </p>
        </div>
    </div>
    
    <div className="home3" id='about'>
        <div>
            <h1>WHO WE ARE?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium perspiciatis natus aspernatur omnis itaque possimus, incidunt ipsa, modi iste distinctio rem sit molestias illum amet et voluptatibus! Ea iusto veritatis delec, eligendi iste quisquam id nesciunt obcaecati debitis accusamus, sapiente deserunt eius natus. Nostrum sunt quas delectus quos dolores voluptatem blanditiis, ducimus placeat, fugit harum aspernatur fuga labore accusantium ea aliquam facere error nesciunt. At, doloremque expedita.</p>
        </div>

    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>


                <div style={{
                    animationDelay:'.3s',
                }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                </div>

                <div style={{
                    animationDelay:'.7s',
                }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                </div>
 
                <div style={{
                    animationDelay:'.10s',
                }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                </div>
                



            </article>
        </div>
    </div>



    </>
  )
}

export default Home