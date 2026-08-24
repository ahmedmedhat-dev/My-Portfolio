import { useState, useEffect, useRef } from "react";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navRef = useRef(null);

  useEffect(() => {
    const navbar = navRef.current;

    const updateNavbarHeight = () => {
      const height = navbar.getBoundingClientRect().height;

      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`
      );
    };

    updateNavbarHeight();

    const observer = new ResizeObserver(updateNavbarHeight);
    observer.observe(navbar);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef} className={`navbar navbar-expand-sm fixed-top px-1 px-md-5 py-2 py-md-3 navbar-dark  navigation-bar ${scrolled ? "" : "scrolled"
          }`}>
        <div className="container-fluid px-3 px-sm-3">
          <a href="#" className="navbar-brand" style={{ fontWeight: "700" }}>LOGO</a>
          <button className="navbar-toggler border-0 shadow-none" type="button"
            data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapseNavbar">
            <div className="d-flex flex-column flex-sm-row gap-4 ms-auto">
              <ul id="nav-links-group" className="navbar-nav gap-2">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#skills" className="nav-link active">
                    Skills
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#projects" className="nav-link">
                    Projects
                  </a>
                </li>
              </ul>

              <ul id="link-group-2" className="navbar-nav gap-2 flex-row">
                <li className="nav-item">
                  <div className="d-flex gap-2">
                    <a href="https://www.linkedin.com/in/ahmed-med/" className="nav-link px-0">
                      <span className="text-light p-2 rounded-pill border border-secondary">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </span>
                    </a>

                    <a href="https://www.facebook.com" className="nav-link px-0">
                      <span className="text-light p-2 rounded-pill border border-secondary">
                        <i className="fa-brands fa-facebook-f"></i>
                      </span>
                    </a>

                    <a href="https://www.instgram.com" className="nav-link px-0">
                      <span className="text-light p-2 rounded-pill border border-secondary">
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </a>
                  </div>
                </li>

                <li className="nav-item d-flex">
                  <button
                    id="connect-btn"
                    className="btn border border-secondary rounded-0 px-3 py-2 text-white flex-shrink-0"
                  >
                    Let's Connect
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header