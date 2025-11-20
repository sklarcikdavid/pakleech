import HeroSection from "./components/HeroSection"
import AboutUs from "./components/AboutUs"

const App = () => {
    return (
        <div>
            <HeroSection />
            <AboutUs />
        </div>

)
}

window.onblur = function () {
    document.title = "Don't forget your keys!";    
}
window.onfocus = function () {
    document.title = 'pakleech';
}

export default App