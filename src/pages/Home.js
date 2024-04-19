import '../App.css';

import Card from '../components/Card';
import About from '../components/About';
import Description from '../components/Description';
import Plan from '../components/Plan';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeHeader from '../components/HomeHeader';
import BlogCard from '../components/BlogCard';

import typingCat from './typing_cat.png';
import shukai from '../shukai.png'
import React from 'react';
import Cover from '../components/Cover'


const Home = () => {
    return (
        <div >
            <HomeHeader />
            <div className='content-1'>
                {/* <section className="hero">
                    <div className="content">
                        <Card />
                    </div>

                </section> */}
                <section className="section-1 beigebg">
                    <Cover/>
                </section>
                <section className="section-1 beigebg">
                    <About />
                </section>

                <section className="section-2 whitebg">
                    <Description />
                </section>

                <section className="section-2 beigebg">
                    <div className='vertical-area'>
                        <div className='text-container orizontal'>
                            <div className='title-area left'>
                                <h3>
                                    POSTS Square
                                </h3>
                                <h2>文章廣場</h2>
                            </div>
                            <a href="/posts" title="查看全部" className="button w-button">更多文章</a>
                        </div>
                        <div className='home-project-item-list w-dyn-list'>
                            <div role='list' className="project-items "> {/*w-dyn-items*/}
                                <BlogCard title='法律領域的大型語言模型' author='謝舒凱' coverPhoto={typingCat} avatar={shukai} datePublish='2024-04-08' postPath='/posts/'/>
                                {/*<BlogCard title='法律領域的大型語言模型' author='謝舒凱' coverPhoto='typingCat' datePublish='2024-04-08'/>*/}
                                {/*<Plan imgSrc='' text='post_1' />*/}
                                {/*<Plan imgSrc='' text='post_2' />*/}
                                {/*<Plan imgSrc='' text='post_3' />*/}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className='footer'>
                <Footer />
            </section>
        </div>
    );

}

export default Home