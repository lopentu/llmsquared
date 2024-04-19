import "../../App.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleList from "../../components/ArticleList";
/*import shukai from '../../shukai.png'*/
import React from 'react';


const Hackathon = () =>{


    return(
        <div>
            <Header/>

            <div className="content-1">
                <section className="container-posts">
                    <header className="title">
                        <div className='post-title '>

                                <h1>4/20『法律黑客松』--台大法學院霖澤館1901 (9:00-17:00)</h1>
                                <h3>
                                    <strong>
                                        "Legal Hackathon" in room 1901 of Tsai Lecture Hall, College of Law, NTU
                                    </strong>
                                </h3>
                                <div className='post-details'>
                                    <div className='date'>
                                        <h3>2024-04-20</h3>
                                    </div>
                                </div>

                        </div>
                    </header>

                    <div className="content-posts">
                        <div className="post-content">
                            <p>📍地點：國立台灣大學法律學院霖澤館1901室</p>
                            <p>🕘時間：9:00-17:00</p>
                        </div>
                    </div>


                </section>

            </div>

            <section className='footer'>
                <Footer/>
            </section>

        </div>

    );

}

export default Hackathon