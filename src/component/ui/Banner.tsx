import img1 from '../../assets/Images/img1.jpg';
import img2 from '../../assets/Images/img2.jpg';
import img3 from '../../assets/Images/img3.jpg';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';

export default function Banner() {
    const { currentSlide } = useAppSelector(state => state.banner)
    const dispatch = useAppDispatch()

    const handleSlideChange = (slideNumber: number) => {
        dispatch({ type: 'CHANGE_SLIDE', payload: slideNumber })
    }



    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-full h-[500px]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} className="w-full h-[500px]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} className="w-full h-[500px]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img1} className="w-full h-[500px]" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {[1, 2, 3, 4].map((item) => (
                    <a
                        key={`item${item}`}
                        href={`#item${item}`}
                        className={`btn btn-xs bg-[#12A9B2] text-[#FFF] ${currentSlide === item ? 'active' : ''
                            }`}
                        onClick={() => handleSlideChange(item)}
                    >{item}</a>
                ))}

            </div>
        </div>
    )
}
