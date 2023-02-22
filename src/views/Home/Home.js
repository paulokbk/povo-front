import CarouselFadeExample from "../../components/Carousel/Carousel";
import { Header } from "../../components/Header/Header";

export const Home = () => {
    return (
        <>
        <Header/>
        <div className="container">
            <CarouselFadeExample
            height={500}
            />
        </div>
        </>
        
    );

}