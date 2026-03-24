import Heading from "./Components/Heading.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Proficiency from "./Components/Proficiency.jsx";
import Education from "./Components/Education.jsx";
import Projects from "./Components/Projects.jsx";
import Getintouch from "./Components/Getintouch.jsx";
import Contactme from "./Components/Contactme.jsx";

function Homepage({ theme, setTheme }) {
    return (
        <>
            <Heading theme={theme} setTheme={setTheme} />
            <Home theme={theme} />
            <About theme={theme} />
            <Proficiency theme={theme} />
            <Education theme={theme} />
            <Projects theme={theme} />
            <Getintouch theme={theme} />
            <Contactme theme={theme} />
        </>
    )
}

export default Homepage;