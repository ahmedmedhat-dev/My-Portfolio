

function Footer() {
    return (
        <>
            <footer className="container-fluid d-flex align-items-end position-relative">
                <section >
                    <div className="container position-absolute top-0 bg-white h-75 rounded-0 rounded-md-5 p-3 p-md-5 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3" style={{ left: "50%", transform: "translate(-50%, -50%)" }}>
                        <div className="flex-fill">
                            <span className="text-black text-capitalize fs-5 fw-bold">
                                See My Projects At Once
                                & leave Here Your E-mail
                                Address, Yasta
                            </span>
                        </div>
                        <form id="form-middle" className="flex-fill w-100">
                            <label className="d-flex w-100 p-1 border rounded-3 bg-white">
                                <input
                                    style={{
                                        outline: "none",
                                        background: "transparent",
                                        paddingRight: "10px",
                                        fontSize: "small",
                                        minWidth: 0,
                                        flex: 1
                                    }}
                                    className="border-0"
                                    type="email"
                                    placeholder="Email Address"
                                />

                                <button
                                    style={{
                                        padding: "10px 40px",
                                        fontSize: "small",
                                        flexShrink: 0
                                    }}
                                    className="d-block ms-auto border-0 rounded-3 text-white"
                                >
                                    Submit
                                </button>
                            </label>
                        </form>
                    </div>
                </section>
                <div className="container d-flex flex-column flex-md-row gap-5 justify-content-between align-items-center">
                    <span style={{ fontSize: "45px" }} className="text-white text-capitalize fw-semibold">logo</span>
                    <div className="right-side d-flex flex-column align-items-center align-items-md-end gap-3">
                        <div className="links d-flex gap-2">
                            <a href="https://www.linkedin.com/in/ahmed-med/" className=" px-0">
                                <span className="text-light p-2 rounded-pill border border-secondary">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </span>
                            </a>

                            <a href="https://www.facebook.com" className=" px-0">
                                <span className="text-light p-2 rounded-pill border border-secondary">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </span>
                            </a>

                            <a href="https://www.instgram.com" className=" px-0">
                                <span className="text-light p-2 rounded-pill border border-secondary">
                                    <i className="fa-brands fa-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <span className="d-block text-secondary text-capitalize text-center">-- Copyrights 2016 -- All Rights Reserved here By Islam Mohamed Abdelaziz</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;