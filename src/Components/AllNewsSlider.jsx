import React from 'react'
import axios from 'axios'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import Spinner from './Spinner';

// import { data } from './Data';

const AllNewsSlider = () => {
    let topNews = {}
    let { data, isLoading } = useQuery({
        queryKey: ["top-headlines"],
        queryFn: () => {
            return axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b4e92df4ad63422e820ec3184968894f")
                .then((res) => res.data);
        
        },
    });
    topNews = data

    console.log(topNews);
    
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1023, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 767, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const autoPlaySpeed = 3000
    if(isLoading){
        return <Spinner/>
    }
    return (
        <div className=' grid grid-cols-1 z-10 mb-12 overflow-hidden  gap-1'>
            <Carousel responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={autoPlaySpeed}
            >
                {
                    topNews?.articles.map((item, index) => (
                        <div className='mx-6' key={index}>
                            <Link className="flex justify-between h-[5rem] items-center bg-gray-100 rounded-md px-5 py-3 hover:bg-gray-200" to={item.url} target='_blank'>
                                <div className="flex items-center">
                                    <span>

                                        <div className='w-16 h-16 '>
                                        <img src={item.urlToImage === null ? "" : item.urlToImage} alt="" className='rounded-full bg-gray-300 w-full h-full  object-cover'  />
                                        </div>

                                    </span>
                                    <h3 className='mx-6 capitalize h-5 overflow-hidden '>{item.title}</h3>
                                </div>
                            </Link>

                        </div>
                    ))
                }

            </Carousel>
        </div>
    )
}

export default AllNewsSlider
