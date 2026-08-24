import { useRef, useState } from "react";
import cardImg1 from "../../assets/images/card-1-image.jpg"
import cardImg2 from "../../assets/images/card-2-image.jpg"
import cardImg3 from "../../assets/images/card-3-image.png"
import floatingSecondSectionImage from "../../assets/images/image-transparent-Photoroom.png"
import { useSectionAnimation } from "../../hooks/useSectionAnimation";


function ProjectsSection() {
    const [activeButton, setActiveButton] = useState(0);
    const [previousButton, setPreviousButton] = useState(0);

    const handleClick = (index) => {
        setPreviousButton(activeButton);
        setActiveButton(index);
    };

    const sectionRef_1 = useRef(null)
    const sectionRef_2 = useRef(null)
    const sectionRef_3 = useRef(null)

    const showSection_1 = () => {
        sectionRef_1.current.style.display = "block";
        sectionRef_2.current.style.display = "block";
        sectionRef_3.current.style.display = "none";
    }
    const showSection_2 = () => {
        sectionRef_1.current.style.display = "none";
        sectionRef_2.current.style.display = "block";
        sectionRef_3.current.style.display = "none";
    }
    const showSection_3 = () => {
        sectionRef_1.current.style.display = "none";
        sectionRef_2.current.style.display = "block";
        sectionRef_3.current.style.display = "block";
    }

    const animate = useSectionAnimation(sectionRef_2, {
        threshold: 0,
        rootMargin: "-20% 0px -20% 0px"
    });

    const cards = [
        { img: cardImg1 },
        { img: cardImg2 },
        { img: cardImg3 },
        { img: cardImg1 },
        { img: cardImg2 },
        { img: cardImg3 },
    ]
    return (
        <>
            <section id="projects" className="projects-section pt-5 pb-3">
                <div className="project-section-info text-center mb-4">
                    <h2 className="text-light">My Projects</h2>
                    <p className="text-secondary  text-capitalize">My name is ahmed, I live in cairo and I a frontend Developer</p>
                </div>

                <div className="section-partitions">
                    <div className="partitions-container container d-flex flex-wrap text-white">
                        <div style={{ height: "50px", background: "rgba(150,150,150,0.1)", cursor: "pointer" }} className={`partition d-flex justify-content-center align-items-center flex-fill border border-end-0 border-info rounded-start-5 ${activeButton === 0 ? "active" : "inactive"}`} onClick={() => {
                            handleClick(0);
                            showSection_1();
                        }}>
                            <a className="text-capitalize fs-5 w-100 h-100 fw-semibold text-decoration-none text-white" href="#section_1"><span className="w-100 h-100 d-flex justify-content-center align-items-center ">1st section</span></a>
                        </div>
                        <div style={{ height: "50px", background: "rgba(150,150,150,0.1)", cursor: "pointer" }} className={`partition d-flex justify-content-center align-items-center flex-fill border border-info ${activeButton === 1 ? "active" : "inactive"}`} onClick={() => {
                            handleClick(1);
                            showSection_2();
                        }}>
                            <a className="text-capitalize fs-5 w-100 h-100 fw-semibold text-decoration-none text-white" href="#section_2"><span className="w-100 h-100 d-flex justify-content-center align-items-center ">2st section</span></a>
                        </div>
                        <div style={{ height: "50px", background: "rgba(150,150,150,0.1)", cursor: "pointer" }} className={`partition d-flex justify-content-center align-items-center flex-fill rounded-end-5 border border-start-0 border-info ${activeButton === 2 ? "active" : "inactive"}`} onClick={() => {
                            handleClick(2);
                            showSection_3();
                        }}>
                            <a className="text-capitalize fs-5 w-100 h-100 fw-semibold text-decoration-none text-white" href="#section_3"><span className="w-100 h-100 d-flex justify-content-center align-items-center ">3st section</span></a>
                        </div>
                    </div>
                </div>

                <section ref={sectionRef_1} id="section_1" className="first-section mt-5">
                    <div className="card-container container">
                        <div className="row g-3">
                            {cards.map((card, index) => {
                                return (
                                    /* Column wrapper handles the grid spacing */
                                    <div key={index} className="col-12 col-md-6 col-lg-4">

                                        {/* Card wrapper handles content, positioning, and clipping */}
                                        <div className="card-item p-0 rounded-5 position-relative overflow-hidden">
                                            <img src={card.img} />
                                            <div className="overlay w-100 h-100 position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center">
                                                <span className="text-white text-capitalize fw-bold fs-1">business startup</span>
                                                <span style={{ fontFamily: "-apple-system" }} className="text-white text-capitalize fs-6 fst-italic fw-semibold">
                                                    design & development
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </section>

            <section ref={sectionRef_3} id="section_3" className="last_section">
                <div className="container d-flex justify-content-center align-items-center px-5 text-center mb-5" style={{ minHeight: "15vh" }}>
                    <span className="text-secondary fs-6 fw-semibold text-capitalize">
                        my name is ahmed, i live in cairo, this is the final project in front-end development course.
                    </span>
                </div>
            </section>

            <section ref={sectionRef_2} id="section_2" className="GetInTouch_section container-fluid p-0 p-md-5">
                <div className="GetInTouch-container d-flex flex-column justify-content-between gap-3 align-items-center">
                    <div className="image text-center">
                        <img className={`w-75 ${animate ? "image-enter" : "image-normal"}`} src={floatingSecondSectionImage} />
                    </div>
                    <div className="form-box flex-fill">
                        <div className="card border-0" style={{ background: "transparent" }}>
                            <div className="card-header border-0 ">
                                <span className="fs-2 text-white fw-semibold text-capitalize">get in touch</span>
                            </div>
                            <div className="card-body flex-fill d-flex flex-column align-items-center py-0">
                                <div className="w-100 row g-2">
                                    <div className="col-6">
                                        <input type="text" placeholder="First Name" className="w-100 text-white" style={{ borderRadius: "15px", background: "rgba(150,150,150,0.2" }} onFocus={(e) => e.currentTarget.classList.add("clicked")} onBlur={(e) => e.currentTarget.classList.remove("clicked")} />
                                    </div>
                                    <div className="col-6">
                                        <input type="text" placeholder="Last Name" className="w-100 text-white" style={{ borderRadius: "15px", background: "rgba(150,150,150,0.2" }} onFocus={(e) => e.currentTarget.classList.add("clicked")} onBlur={(e) => e.currentTarget.classList.remove("clicked")} />
                                    </div>
                                    <div className="col-6">
                                        <input type="email" placeholder="Email Address" className="w-100 text-white" style={{ borderRadius: "15px", background: "rgba(150,150,150,0.2" }} onFocus={(e) => e.currentTarget.classList.add("clicked")} onBlur={(e) => e.currentTarget.classList.remove("clicked")} />
                                    </div>
                                    <div className="col-6">
                                        <input type="text" placeholder="Phone No." className="w-100 text-white" style={{ borderRadius: "15px", background: "rgba(150,150,150,0.2" }} onFocus={(e) => e.currentTarget.classList.add("clicked")} onBlur={(e) => e.currentTarget.classList.remove("clicked")} />
                                    </div>
                                    <form className="col-12" style={{ aspectRatio: "16/6" }}>
                                        <textarea style={{ height: "100%", outline: "none", resize: "none"}} placeholder="Message" className="w-100 p-3 rounded-4 fs-6 text-white" onFocus={(e) => e.currentTarget.classList.add("clicked")} onBlur={(e) => e.currentTarget.classList.remove("clicked")} ></textarea>
                                    </form>
                                </div>
                            </div>
                            <div className="card-footer ms-1 border-0">
                                <button className="btn btn-default bg-white rounded-0 px-5 py-2 text-black fw-bold">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectsSection;