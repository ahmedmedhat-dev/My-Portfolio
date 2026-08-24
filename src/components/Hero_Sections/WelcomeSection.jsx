import { useEffect } from "react";
import astronaut  from "../../assets/images/image-transparent-Photoroom.png"

function WelcomeSection() {
    useEffect(() => {
        const typed = new window.Typed(".input", {
            strings: ["Frontend Developer", "UX Designer", "Web Developer"],
            typeSpeed: 400,
            backSpeed: 100,
            backDelay: 3000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <section
                id="wallpaper"
                className="welcome-section container-fluid d-flex align-items-center"
                style={{ minHeight: "120vh" }} >
                <div className="container d-flex flex-column-reverse flex-lg-row align-items-center gap-3">

                    <div
                        className="welcome-info"
                        style={{ width: "min(500px, 100%)" }}
                    >
                        <p
                            style={{ width: "fit-content" }}
                            className="welcome-span text-capitalize text-white text-wrap p-2 bg-info fs-6 border"
                        >
                            Welcome all in my website
                        </p>

                        <h2 className="text-white text-capitalize my-2">
                            hi! i'm ahmed medhat mostafa,{" "}
                            <span className="input"></span>
                        </h2>

                        <span
                            className="d-block mb-4 text-secondary text-capitalize"
                            style={{ fontWeight: "bold" }}
                        >
                            hello everyone, i have 8 years of experience in web
                            development
                        </span>

                        <p
                            style={{ fontWeight: "bold" }}
                            className="text-capitalize text-white fs-6"
                        >
                            let's connect

                            <span
                                className="d-inline-flex justify-content-center align-items-center ms-2 pb-1 border"
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                }}
                            >
                                →
                            </span>
                        </p>
                    </div>

                    <img
                        id="astronout"
                        className="ms-0 ms-lg-auto"
                        src={astronaut}
                        alt="Astronaut"
                    />
                </div>
            </section>
        </>
    )
}

export default WelcomeSection;