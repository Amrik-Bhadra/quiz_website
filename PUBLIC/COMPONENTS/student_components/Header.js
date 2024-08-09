// import meraFunc from '../../JS/script';

function Header() {
    // This useEffect hook will run after the component mounts
    React.useEffect(() => {
        const hamburger = document.getElementById('hamburger-icon');
        const hamburgerbox = document.getElementById('hamburger-box');
        hamburger.addEventListener('click', function() {
            if (hamburger.classList.contains('fa-bars')) {
                hamburger.classList.remove('fa-bars');
                hamburger.classList.add('fa-x');
                hamburgerbox.classList.remove('hidden');
            } else {
                hamburger.classList.remove('fa-x');
                hamburger.classList.add('fa-bars');
                hamburgerbox.classList.add('hidden');
            }
        });

        let xmark = document.getElementById('x-mark');
        xmark.addEventListener('click', function(){
            hamburger.classList.remove('fa-x');
            hamburger.classList.add('fa-bars');
            hamburgerbox.classList.add('hidden');
        });

        let tl = gsap.timeline();
        tl.from('.logo-box', {
            y: -100,
            opacity: 0,
            delay: 0.3,
            duration: 0.6
        });
        tl.from('nav a', {
            y: -100,
            opacity: 0,
            duration: 0.6,
            stagger: {
                each: 0.2,        
                from: "start",    
                grid: "auto",     
                ease: "power1.inOut"
            }
        });
        tl.from('.profile-box', {
            y: -100,
            opacity: 0,
            duration: 0.6,
            
        });
        

    }, []);

    return (
        <>
            <a href="" className="logo-box">
                <img src="/PUBLIC/ASSETS/logo.png" alt="" />
                <p>QuizoTopia</p>
            </a>

            <nav>
                <a href="">Trivia</a>
                <a href="">Topics</a>
                <a href="">Leaderboard</a>
                <a href="">Store</a>
            </nav>

            <div className="nav-ele-box">
                <div className="profile-box">
                    <a className="login-btn btn">Login</a>
                    <a className="registration-btn btn">Register</a>
                </div>
                <i className="fa-solid fa-bars" id="hamburger-icon"></i>
            </div>

            <div className="hamburger-box hidden" id="hamburger-box">
                <i className="fa-solid fa-x" id="x-mark"></i>
                <a href="">Trivia</a>
                <a href="">Topics</a>
                <a href="">Leaderboard</a>
                <a href="">Store</a>
            </div>
        </>
    );
}

window.Header = Header;
