import { useEffect } from "react";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function SkillsSection() {
    useEffect(() => {
        const swiper = new Swiper(".swiper", {
            loop: true,

            breakpoints: {
                575: {
                    slidesPerView: 2,
                },

                1024: {
                    slidesPerView: 3,
                },
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    const skills = [
        {
            title: "Front Development",
            percentage: "95"
        },
        {
            title: "OOP",
            percentage: "90"
        },
        {
            title: "Backend Development",
            percentage: "85"
        },
        {
            title: "Automation",
            percentage: "70"
        },
    ]

    return (
        <>
            <section id="skills" className="skills-section container-fluid position-relative d-flex justify-content-center">
                <div
                    className="container text-center rounded-5"
                    style={{
                        background: "rgb(0, 0, 0)",
                        boxShadow: "0 0 15px rgba(0,0,0,0.5)",
                        top: "-30px",
                        position: "absolute",
                        padding: "75px 50px",
                    }}
                >

                    <div className="info mb-5">
                        <h2 className="text-white text-capitalize">
                            Skills
                        </h2>

                        <span className="text-light fs-6 text-capitalize">
                            you can see my skills here yasta
                        </span>
                    </div>

                    <div className="swiper container position-relative">
                        <div className="swiper-wrapper w-100 mx-auto text-white">
                            {skills.map((skill, index) => {
                                const radius = 35;
                                const circumference = 2 * Math.PI * radius;

                                const progress =
                                    (skill.percentage / 100) * circumference;

                                const gap =
                                    circumference - progress;

                                return (
                                    <div className="swiper-slide text-center" key={index}>

                                        <div className="progress-circle">

                                            <svg viewBox="0 0 100 100">

                                                <defs>
                                                    <linearGradient
                                                        id={`gradient${index}`}
                                                        x1="0%"
                                                        y1="0%"
                                                        x2="100%"
                                                        y2="100%"
                                                    >
                                                        <stop
                                                            offset="0%"
                                                            stopColor="#1714a8"
                                                        />

                                                        <stop
                                                            offset="100%"
                                                            stopColor="#00a6c7"
                                                        />
                                                    </linearGradient>
                                                </defs>

                                                <circle
                                                    cx="50"
                                                    cy="50"
                                                    r={radius}
                                                    fill="none"
                                                    stroke={`url(#gradient${index})`}
                                                    strokeWidth="7"
                                                    strokeLinecap="round"
                                                    strokeDashoffset="-30"
                                                    strokeDasharray={`${progress} ${gap}`}
                                                    transform="rotate(-90 50 50)"
                                                />

                                            </svg>

                                            <span className="progress-text fs-6 fw-semibold">
                                                {skill.percentage}%
                                            </span>

                                        </div>

                                        <h2 className="fs-6 text-light">
                                            {skill.title}
                                        </h2>

                                    </div>
                                );
                            })}
                        </div>

                        <span
                            className="swiper-button-button swiper-button-next text-black position-absolute"
                        >
                        </span>

                        <span
                            className="swiper-button-button swiper-button-prev text-black position-absolute"
                        >
                        </span>

                    </div>
                </div>
            </section>
        </>
    );
}

export default SkillsSection;