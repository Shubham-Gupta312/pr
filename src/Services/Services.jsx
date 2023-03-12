import React from "react";
import '../Services/Style.css'
import '../wp-content/cache/min/3/cf235472ec93469dd13b131890b54f1d.css'
import service1 from "../wp-content/uploads/sites/3/2019/10/project-1-1-760x760.jpg";
import service2 from "../wp-content/uploads/sites/3/2019/10/project-2-1-760x760.jpg"
import service3 from "../wp-content/uploads/sites/3/2019/10/project-3-760x760.jpg"
import service4 from "../wp-content/uploads/sites/3/2019/10/project-4-760x760.jpg";
import service5 from "../wp-content/uploads/sites/3/2019/10/project-5-1-760x760.jpg"
import service6 from "../wp-content/uploads/sites/3/2019/10/project-6-1-760x760.jpg"
import service7 from "../wp-content/uploads/sites/3/2019/10/project-7-1-760x760.jpg"
import service8 from "../wp-content/uploads/sites/3/2019/10/project-8-760x760.jpg"
import service9 from "../wp-content/uploads/sites/3/2019/10/project-9-760x760.jpg"
import service10 from "../wp-content/uploads/sites/3/2019/10/project-12-1-760x760.jpg"
import service11 from "../wp-content/uploads/sites/3/2019/10/project-10-760x760.jpg"
import service12 from "../wp-content/uploads/sites/3/2019/10/project-11-760x760.jpg"
import Header from '../Header/Header';
import { useState } from "react";

function Services() {
    const [activeTab, setActiveTab] = useState(1);

    function setTab(id) {
        setActiveTab(id)
    }

    return (
        <>

            <div>
                <div id="page" className="site">
                    {/* #site-header-open */}
                    <Header />
                    {/* #side-panel-close */}
                    {/* #content */}
                    <div id="content" className="site-content">
                        <div style={{ backgroundImage: `url("http://wpdemo.archiwp.com/onum/wp-content/themes/onum/images/bg-page-header.jpg")`, marginTop: "12%" }}
                            data-bg="http://wpdemo.archiwp.com/onum/wp-content/themes/onum/images/bg-page-header.jpg"
                            className="page-header dtable text-center rocket-lazyload">
                            <div className="dcell">
                                <div className="container">
                                    <h1 className="page-title">Portfolio Grid</h1>
                                    <ul id="breadcrumbs" className="breadcrumbs"><li><a href="http://wpdemo.archiwp.com/onum">Home</a></li><li className="active">Portfolio Grid</li></ul>                  </div>
                            </div>
                        </div>
                        <div data-elementor-type="wp-page" data-elementor-id={1430} className="elementor elementor-1430">
                            <div className="elementor-inner">
                                <div className="elementor-section-wrap">
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-520365a4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="520365a4" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5de3624e ot-flex-column-vertical" data-id="5de3624e" data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <div className="elementor-element elementor-element-5e310185 elementor-widget elementor-widget-iheading" data-id="5e310185" data-element_type="widget" data-widget_type="iheading.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="ot-heading center-align">
                                                                        <h6 className="sub-heading"><span>our projects</span></h6>
                                                                        <h2 className="main-heading">View Some of Our Works <br />
                                                                            and Case Studies for Clients</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-753a1b7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="753a1b7" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-24510132 ot-flex-column-vertical" data-id={24510132} data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <div className="elementor-element elementor-element-1abe061b elementor-widget elementor-widget-ipfilter" data-id="1abe061b" data-element_type="widget" data-widget_type="ipfilter.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="project-filter-wrapper">
                                                                        <div className="container">
                                                                            <ul className="project_filters">
                                                                                <li><a href="#" data-filter="*" className={activeTab === 1 ? "setSelected": "selected"} onClick={()=>setTab(1)} >All</a></li>
                                                                                <li><a  data-filter=".category-14" className={activeTab === 2 ? "setSelected": "selected"} onClick={()=>setTab(2)} >Development</a></li>
                                                                                <li><a  data-filter=".category-15" className={activeTab === 3 ? "setSelected": "selected"} onClick={()=>setTab(3)} >Marketing</a></li>
                                                                                <li><a  data-filter=".category-16" className={activeTab === 4 ? "setSelected": "selected"} onClick={()=>setTab(4)} >Media</a></li>
                                                                                <li><a  data-filter=".category-17" className={activeTab === 5 ? "setSelected": "selected"} onClick={()=>setTab(5)} >Optimization</a></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="projects-grid projects-style-1 ">
                                                                            {/* <div className="project-grid-sizer" /> */}
                                                                            <div className="project-item category-15 category-17 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a href="../portfolio/crypto-app-project/index.html">
                                                                                            <img width={760} height={760}
                                                                                                src={service1}
                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image" alt="" decoding="async"
                                                                                                data-lazy-srcset={service1}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px" data-lazy-src={service1} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service1} class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async"
                                                                                                srcset={service1}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a href="../portfolio/crypto-app-project/index.html">Crypto App Project</a></h5>
                                                                                            <p className="portfolio-cates"><a href="../portfolio-cat/marketing/index.html">Marketing</a><span>/</span><a href="../portfolio-cat/optimization/index.html">Optimization</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="project-item category-14 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a href="../portfolio/cereal-project/index.html">
                                                                                            <img width={760} height={760}
                                                                                                src={service2}
                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image" alt="" decoding="async"
                                                                                                data-lazy-srcset={service2}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px"
                                                                                                data-lazy-src={service2} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service2}
                                                                                                class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" loading="lazy"
                                                                                                srcset={service2}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a href="../portfolio/cereal-project/index.html">Cereal Project</a></h5>
                                                                                            <p className="portfolio-cates"><a href="../portfolio-cat/development/index.html">Development</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="project-item category-15 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a href="../portfolio/immersive-experience/index.html">
                                                                                            <img width={760} height={760}
                                                                                                src={service3}
                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" data-lazy-srcset={service3}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px" data-lazy-src={service3} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service3}
                                                                                                class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" loading="lazy"
                                                                                                srcset={service3}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a href="../portfolio/immersive-experience/index.html">Immersive Experience</a></h5>
                                                                                            <p className="portfolio-cates"><a href="../portfolio-cat/marketing/index.html">Marketing</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="project-item category-15 category-16 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a href="../portfolio/your-new-reality/index.html">
                                                                                            <img width={760} height={760}
                                                                                                src={service4}
                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image" alt="" decoding="async"
                                                                                                data-lazy-srcset={service4}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px"
                                                                                                data-lazy-src={service4} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service4}
                                                                                                class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" loading="lazy"
                                                                                                srcset={service4}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a href="../portfolio/your-new-reality/index.html">Your New Reality</a></h5>
                                                                                            <p className="portfolio-cates">
                                                                                                <a href="../portfolio-cat/marketing/index.html">Marketing</a><span>/</span><a href="../portfolio-cat/media/index.html">Media</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="project-item category-15 category-16 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a href="../portfolio/social-media-app/index.html">
                                                                                            <img width={760} height={760}
                                                                                                src={service5}
                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async"
                                                                                                data-lazy-srcset={service5}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px"
                                                                                                data-lazy-src={service5} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service5}
                                                                                                class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" loading="lazy"
                                                                                                srcset={service5}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a href="../portfolio/social-media-app/index.html">Social Media App</a></h5>
                                                                                            <p className="portfolio-cates"><a href="../portfolio-cat/marketing/index.html">Marketing</a><span>/</span><a href="../portfolio-cat/media/index.html">Media</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="project-item category-14 category-16 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a href="../portfolio/basics-project/index.html">
                                                                                            <img width={760} height={760}
                                                                                                src={service6}
                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image" alt="" decoding="async"
                                                                                                data-lazy-srcset={service6}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px"
                                                                                                data-lazy-src={service6} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service6}
                                                                                                class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" loading="lazy"
                                                                                                srcset={service6}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a href="../portfolio/basics-project/index.html">Basics Project</a></h5>
                                                                                            <p className="portfolio-cates"><a href="../portfolio-cat/development/index.html">Development</a><span>/</span><a href="../portfolio-cat/media/index.html">Media</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="project-item category-16 category-17 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a href="../portfolio/new-soft-for-watch/index.html">
                                                                                            <img width={760} height={760}
                                                                                                src={service7}
                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async"
                                                                                                data-lazy-srcset={service7}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px"
                                                                                                data-lazy-src={service7} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service7}
                                                                                                class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" loading="lazy"
                                                                                                srcset={service7}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a href="../portfolio/new-soft-for-watch/index.html">New Soft for Watch</a></h5>
                                                                                            <p className="portfolio-cates"><a href="../portfolio-cat/media/index.html">Media</a><span>/</span><a href="../portfolio-cat/optimization/index.html">Optimization</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="project-item category-14 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a href="../portfolio/ux-design-for-tubus/index.html">
                                                                                            <img width={760} height={760}
                                                                                                src={service8}
                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async"
                                                                                                data-lazy-srcset={service8}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px"
                                                                                                data-lazy-src={service8} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service8}
                                                                                                class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" loading="lazy"
                                                                                                srcset={service8}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a>UX Design for Tubus</a></h5>
                                                                                            <p className="portfolio-cates"><a >Development</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="project-item category-15 category-17 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a>
                                                                                            <img width={760} height={760}
                                                                                                src={service9}
                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image" alt="" decoding="async"
                                                                                                data-lazy-srcset={service9}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px"
                                                                                                data-lazy-src={service9} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service9}
                                                                                                class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" loading="lazy"
                                                                                                srcset={service9}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a >Analysis of Security</a></h5>
                                                                                            <p className="portfolio-cates"><a >Marketing</a><span>/</span><a>Optimization</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="project-item category-14 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a >
                                                                                            <img width={760} height={760}
                                                                                                src={service10}
                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async"
                                                                                                data-lazy-srcset={service10}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px"
                                                                                                data-lazy-src={service10} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service10}
                                                                                                class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" loading="lazy"
                                                                                                srcset={service10}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a >App for Health</a></h5>
                                                                                            <p className="portfolio-cates"><a >Development</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="project-item category-16 category-17 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a>
                                                                                            <img width={760} height={760}
                                                                                                src={service11}
                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image" alt="" decoding="async"
                                                                                                data-lazy-srcset={service11}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px"
                                                                                                data-lazy-src={service11} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service11}
                                                                                                class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" loading="lazy"
                                                                                                srcset={service11}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a >SMM Project</a></h5>
                                                                                            <p className="portfolio-cates"><a>Media</a><span>/</span><a>Optimization</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="project-item category-17 ">
                                                                                <div className="projects-box">
                                                                                    <div className="projects-thumbnail">
                                                                                        <a >
                                                                                            <img width={760} height={760}
                                                                                                src={service12}

                                                                                                className="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image" alt="" decoding="async"
                                                                                                data-lazy-srcset={service12}
                                                                                                data-lazy-sizes="(max-width: 760px) 100vw, 760px"
                                                                                                data-lazy-src={service12} />
                                                                                            <noscript>&lt;img width="760" height="760"
                                                                                                src={service12}
                                                                                                class="attachment-onum-portfolio-thumbnail-left-top size-onum-portfolio-thumbnail-left-top wp-post-image"
                                                                                                alt="" decoding="async" loading="lazy"
                                                                                                srcset={service12}
                                                                                                sizes="(max-width: 760px) 100vw, 760px" /&gt;</noscript>								</a>
                                                                                    </div>
                                                                                    <div className="portfolio-info s1">
                                                                                        <div className="portfolio-info-inner">
                                                                                            <h5 className="portfolio-info-title"><a>Responsive Design</a></h5>
                                                                                            <p className="portfolio-cates"><a >Optimization</a><span>/</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>{/* #content */}
                    <footer id="site-footer" class="site-footer" itemscope="itemscope" itemtype="http://schema.org/WPFooter">		<div data-elementor-type="wp-post" data-elementor-id="1108" class="elementor elementor-1108">
                        <div class="elementor-inner">
                            <div class="elementor-section-wrap">
                                <section class="elementor-section elementor-top-section elementor-element elementor-element-f2c5a23 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="f2c5a23" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                    <div class="elementor-container elementor-column-gap-extended">
                                        <div class="elementor-row">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b170a34 ot-flex-column-vertical" data-id="b170a34" data-element_type="column">
                                                <div class="elementor-column-wrap elementor-element-populated">
                                                    <div class="elementor-widget-wrap">
                                                        <section class="elementor-section elementor-inner-section elementor-element elementor-element-cf65d65 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cf65d65" data-element_type="section">
                                                            <div class="elementor-container elementor-column-gap-extended">
                                                                <div class="elementor-row">
                                                                    <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-b909f08 ot-flex-column-vertical" data-id="b909f08" data-element_type="column">
                                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                                            <div class="elementor-widget-wrap">
                                                                                <div class="elementor-element elementor-element-0c321b9 elementor-widget elementor-widget-image" data-id="0c321b9" data-element_type="widget" data-widget_type="image.default">
                                                                                    <div class="elementor-widget-container">
                                                                                        <div class="elementor-image">
                                                                                            <img width="124" height="50" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20124%2050'%3E%3C/svg%3E" class="attachment-full size-full wp-image-1111" alt="" data-lazy-src="../wp-content/uploads/sites/3/2019/10/logo.png" /><noscript><img width="124" height="50" src="../wp-content/uploads/sites/3/2019/10/logo.png" class="attachment-full size-full wp-image-1111" alt="" /></noscript>														</div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="elementor-element elementor-element-cd6c939 elementor-widget elementor-widget-text-editor" data-id="cd6c939" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                    <div class="elementor-widget-container">
                                                                                        <div class="elementor-text-editor elementor-clearfix">
                                                                                            <p>Our approach to SEO is uniquely built around what we know works…and what we know doesn’t work. With over 200 verified factors in play.</p>					</div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="elementor-element elementor-element-39180cb4 e-grid-align-left hover-up elementor-grid-4 elementor-shape-rounded elementor-widget elementor-widget-social-icons" data-id="39180cb4" data-element_type="widget" data-widget_type="social-icons.default">
                                                                                    <div class="elementor-widget-container">
                                                                                        <div class="elementor-social-icons-wrapper elementor-grid">
                                                                                            <span class="elementor-grid-item">
                                                                                                <a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-7c99cad" target="_blank">
                                                                                                    <span class="elementor-screen-only">Twitter</span>
                                                                                                    <i class="fab fa-twitter"></i>					</a>
                                                                                            </span>
                                                                                            <span class="elementor-grid-item">
                                                                                                <a class="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-97785a0" target="_blank">
                                                                                                    <span class="elementor-screen-only">Facebook-f</span>
                                                                                                    <i class="fab fa-facebook-f"></i>					</a>
                                                                                            </span>
                                                                                            <span class="elementor-grid-item">
                                                                                                <a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin-in elementor-repeater-item-4c2b54a" target="_blank">
                                                                                                    <span class="elementor-screen-only">Linkedin-in</span>
                                                                                                    <i class="fab fa-linkedin-in"></i>					</a>
                                                                                            </span>
                                                                                            <span class="elementor-grid-item">
                                                                                                <a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-28a9de5" target="_blank">
                                                                                                    <span class="elementor-screen-only">Instagram</span>
                                                                                                    <i class="fab fa-instagram"></i>					</a>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-cc98716 ot-flex-column-vertical" data-id="cc98716" data-element_type="column">
                                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                                            <div class="elementor-widget-wrap">
                                                                                <div class="elementor-element elementor-element-bf1bf68 elementor-widget elementor-widget-heading" data-id="bf1bf68" data-element_type="widget" data-widget_type="heading.default">
                                                                                    <div class="elementor-widget-container">
                                                                                        <h5 class="elementor-heading-title elementor-size-default">Contacts</h5>		</div>
                                                                                </div>
                                                                                <div class="elementor-element elementor-element-0435990 footer-contact-info elementor-widget elementor-widget-text-editor" data-id="0435990" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                    <div class="elementor-widget-container">
                                                                                        <div class="elementor-text-editor elementor-clearfix">
                                                                                            <ul class="font-second">
                                                                                                <li><strong>Address:</strong> 411 University St,
                                                                                                    Seattle, USA</li>
                                                                                                <li><strong>Email:</strong> onum_company@mail.com</li>
                                                                                                <li><strong>Phone:</strong> +1 -800-456-478-23</li>
                                                                                                <li><strong>Open:</strong> Mon 8:00 am &#8211; 18:00 pm</li>
                                                                                            </ul>					</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-d3c4cd5 ot-flex-column-vertical" data-id="d3c4cd5" data-element_type="column">
                                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                                            <div class="elementor-widget-wrap">
                                                                                <div class="elementor-element elementor-element-fcae218 elementor-widget elementor-widget-heading" data-id="fcae218" data-element_type="widget" data-widget_type="heading.default">
                                                                                    <div class="elementor-widget-container">
                                                                                        <h5 class="elementor-heading-title elementor-size-default">Services</h5>		</div>
                                                                                </div>
                                                                                <div class="elementor-element elementor-element-1a1e832 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="1a1e832" data-element_type="widget" data-widget_type="icon-list.default">
                                                                                    <div class="elementor-widget-container">
                                                                                        <ul class="elementor-icon-list-items">
                                                                                            <li class="elementor-icon-list-item">
                                                                                                <a>

                                                                                                    <span class="elementor-icon-list-text">SEO for Small Business</span>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li class="elementor-icon-list-item">
                                                                                                <a>

                                                                                                    <span class="elementor-icon-list-text">SEO for Local Services</span>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li class="elementor-icon-list-item">
                                                                                                <a >

                                                                                                    <span class="elementor-icon-list-text">Enterprise SEO</span>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li class="elementor-icon-list-item">
                                                                                                <a>

                                                                                                    <span class="elementor-icon-list-text">National SEO</span>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li class="elementor-icon-list-item">
                                                                                                <a>

                                                                                                    <span class="elementor-icon-list-text">International SEO</span>
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3347730 ot-flex-column-vertical" data-id="3347730" data-element_type="column">
                                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                                            <div class="elementor-widget-wrap">
                                                                                <div class="elementor-element elementor-element-28ea872 elementor-widget elementor-widget-heading" data-id="28ea872" data-element_type="widget" data-widget_type="heading.default">
                                                                                    <div class="elementor-widget-container">
                                                                                        <h5 class="elementor-heading-title elementor-size-default">Gallery</h5>		</div>
                                                                                </div>
                                                                                <div class="elementor-element elementor-element-d66e451 elementor-widget elementor-widget-image-gallery" data-id="d66e451" data-element_type="widget" data-widget_type="image-gallery.default">
                                                                                    <div class="elementor-widget-container">
                                                                                        <div class="elementor-image-gallery">
                                                                                            <div id='gallery-1' class='gallery galleryid-402 gallery-columns-3 gallery-size-full'><figure class='gallery-item'>
                                                                                                <div class='gallery-icon landscape'>
                                                                                                    <img width="250" height="250" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3E%3C/svg%3E" class="attachment-full size-full" alt="" decoding="async" data-lazy-srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-1.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-1-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-1-100x100.jpg 100w" data-lazy-sizes="(max-width: 250px) 100vw, 250px" data-lazy-src="../wp-content/uploads/sites/3/2019/10/insta-1.jpg" /><noscript><img width="250" height="250" src="../wp-content/uploads/sites/3/2019/10/insta-1.jpg" class="attachment-full size-full" alt="" decoding="async" srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-1.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-1-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-1-100x100.jpg 100w" sizes="(max-width: 250px) 100vw, 250px" /></noscript>
                                                                                                </div></figure><figure class='gallery-item'>
                                                                                                    <div class='gallery-icon landscape'>
                                                                                                        <img width="250" height="250" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3E%3C/svg%3E" class="attachment-full size-full" alt="" decoding="async" data-lazy-srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-2.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-2-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-2-100x100.jpg 100w" data-lazy-sizes="(max-width: 250px) 100vw, 250px" data-lazy-src="../wp-content/uploads/sites/3/2019/10/insta-2.jpg" /><noscript><img width="250" height="250" src="../wp-content/uploads/sites/3/2019/10/insta-2.jpg" class="attachment-full size-full" alt="" decoding="async" srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-2.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-2-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-2-100x100.jpg 100w" sizes="(max-width: 250px) 100vw, 250px" /></noscript>
                                                                                                    </div></figure><figure class='gallery-item'>
                                                                                                    <div class='gallery-icon landscape'>
                                                                                                        <img width="250" height="250" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3E%3C/svg%3E" class="attachment-full size-full" alt="" decoding="async" data-lazy-srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-3.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-3-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-3-100x100.jpg 100w" data-lazy-sizes="(max-width: 250px) 100vw, 250px" data-lazy-src="../wp-content/uploads/sites/3/2019/10/insta-3.jpg" /><noscript><img width="250" height="250" src="../wp-content/uploads/sites/3/2019/10/insta-3.jpg" class="attachment-full size-full" alt="" decoding="async" srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-3.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-3-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-3-100x100.jpg 100w" sizes="(max-width: 250px) 100vw, 250px" /></noscript>
                                                                                                    </div></figure><figure class='gallery-item'>
                                                                                                    <div class='gallery-icon landscape'>
                                                                                                        <img width="250" height="250" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3E%3C/svg%3E" class="attachment-full size-full" alt="" decoding="async" data-lazy-srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-4.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-4-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-4-100x100.jpg 100w" data-lazy-sizes="(max-width: 250px) 100vw, 250px" data-lazy-src="../wp-content/uploads/sites/3/2019/10/insta-4.jpg" /><noscript><img width="250" height="250" src="../wp-content/uploads/sites/3/2019/10/insta-4.jpg" class="attachment-full size-full" alt="" decoding="async" srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-4.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-4-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-4-100x100.jpg 100w" sizes="(max-width: 250px) 100vw, 250px" /></noscript>
                                                                                                    </div></figure><figure class='gallery-item'>
                                                                                                    <div class='gallery-icon landscape'>
                                                                                                        <img width="250" height="250" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3E%3C/svg%3E" class="attachment-full size-full" alt="" decoding="async" data-lazy-srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-5.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-5-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-5-100x100.jpg 100w" data-lazy-sizes="(max-width: 250px) 100vw, 250px" data-lazy-src="../wp-content/uploads/sites/3/2019/10/insta-5.jpg" /><noscript><img width="250" height="250" src="../wp-content/uploads/sites/3/2019/10/insta-5.jpg" class="attachment-full size-full" alt="" decoding="async" srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-5.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-5-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-5-100x100.jpg 100w" sizes="(max-width: 250px) 100vw, 250px" /></noscript>
                                                                                                    </div></figure><figure class='gallery-item'>
                                                                                                    <div class='gallery-icon landscape'>
                                                                                                        <img width="250" height="250" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3E%3C/svg%3E" class="attachment-full size-full" alt="" decoding="async" data-lazy-srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-6.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-6-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-6-100x100.jpg 100w" data-lazy-sizes="(max-width: 250px) 100vw, 250px" data-lazy-src="../wp-content/uploads/sites/3/2019/10/insta-6.jpg" /><noscript><img width="250" height="250" src="../wp-content/uploads/sites/3/2019/10/insta-6.jpg" class="attachment-full size-full" alt="" decoding="async" srcset="http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-6.jpg 250w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-6-150x150.jpg 150w, http://wpdemo.archiwp.com/onum/wp-content/uploads/sites/3/2019/10/insta-6-100x100.jpg 100w" sizes="(max-width: 250px) 100vw, 250px" /></noscript>
                                                                                                    </div></figure>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section class="elementor-section elementor-inner-section elementor-element elementor-element-ba85455 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="ba85455" data-element_type="section">
                                                            <div class="elementor-container elementor-column-gap-extended">
                                                                <div class="elementor-row">
                                                                    <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-9079df2 ot-flex-column-vertical" data-id="9079df2" data-element_type="column">
                                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                                            <div class="elementor-widget-wrap">
                                                                                <div class="elementor-element elementor-element-acc6b62 elementor-widget elementor-widget-text-editor" data-id="acc6b62" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                    <div class="elementor-widget-container">
                                                                                        <div class="elementor-text-editor elementor-clearfix">
                                                                                            <p>Copyright © 2022 Onum by OceanThemes. All Rights Reserved.</p>					</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    </footer>
                </div>{/* #page */}


            </div>


        </>
    )
}
export default Services;