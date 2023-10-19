
import Hero from "../components/homepage/Hero";
import Category from "../components/homepage/Category";
import Qna from "../components/homepage/Qna";


function Home() {
    return (
        <div className="App bg-white">
            <Hero />
            <Category />
            <Qna />
        </div>
    );
}

export default Home;
