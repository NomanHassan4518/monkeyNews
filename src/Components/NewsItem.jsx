import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AllNewsSlider from './AllNewsSlider'
import axios from 'axios'
import Spinner from './Spinner'
import { useQuery } from '@tanstack/react-query'
import LoadingBar from 'react-top-loading-bar'
// 39c3025e706146f99c1db7b6e2295f6e
const NewsItem = (props) => {
    const [pageNo, setPageNo] = useState(1)
    const [progress, setProgress] = useState(0)
    let [startIndex, setStartIndex] = useState(15)
    let allNews ={}

    let a = props.type
    let b = props.top

    const { data: news, isLoading, } = useQuery({
        queryKey: [a?.type, b?.type, props.categories, pageNo],
        queryFn: () => {
            if (a?.type === "everything") {
                setProgress(100)
                return axios.get(`https://newsapi.org/v2/${a.type}?q=bitcoin&apiKey=b4e92df4ad63422e820ec3184968894f&page=${pageNo}&pageSize=15`, {
                    headers: {
                        Authorization: 'Bearer b4e92df4ad63422e820ec3184968894f'
                    }
                })
                    .then((res) => res.data);

            } else if (b?.type) {
                setProgress(100)
                return axios.get(`https://newsapi.org/v2/${b.type}?country=us&apiKey=b4e92df4ad63422e820ec3184968894f&page=${pageNo}&pageSize=15`, {
                    headers: {
                        Authorization: 'Bearer b4e92df4ad63422e820ec3184968894f'
                    }
                })
                    .then((res) => res.data);
            }
            else {
                setProgress(100)
                return axios.get(`https://newsapi.org/v2/top-headlines?category=${props.categories}&apiKey=b4e92df4ad63422e820ec3184968894f&page=${pageNo}&pageSize=15`, {
                    headers: {
                        Authorization: 'Bearer b4e92df4ad63422e820ec3184968894f'
                    }
                })
                    .then((res) => res.data);
            }
        },
    });

    allNews = news

    const next = () => {
        setPageNo(pageNo + 1)
        setStartIndex(startIndex += 15)
    }

    const previous = () => {
        setPageNo(pageNo - 1)
        setStartIndex(startIndex -= 15)
    }


    if (isLoading) {
        return (
            <Spinner />
        )
    }


    return (
        <div >

            <LoadingBar
                color='#f11946'
                progress={progress}
                height={2}
                onLoaderFinished={() => setProgress(0)}
            />

            <div className='md:mx-5'>
                <div className=" pt-12 lg:mx-2">
                    <AllNewsSlider />
                </div>

                <div className="mt-4 border-[2px] border-r-gray-200 rounded-lg shadow-lg  w-full ">

                    <div className='my-7 md:flex space-y-2  justify-between items-center mx-4'>
                        <p className='lg:text-3xl font-bold'>MonkeyNews - {props.title} </p>
                        <p className='font-semibold text-gray-700'>Total News: {allNews?.totalResults}</p>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-12 my-4 mx-5 '>
                        {
                            allNews?.articles?.map((item, index) => (
                                <div className=' items-center justify-center  rounded-md group cursor-pointer border-[1px] border-black bg-gray-100' key={index}>
                                    <div className='lg:col-span-6 col-span-12 w-ful h-[200px]  '>
                                        <span class="bg-red-600 absolute to text-white text-b font-medium mr-2 px-6 py-1 rounded-sm dark:bg-blue-900 dark:text-blue-300">{item.source.name}</span>
                                        <img src={item.urlToImage === null || '' ? "data:image/png;base64,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" : item.urlToImage} alt="" className='group-hover:scale-105 transition-transform ease-in-out duration-500 h-full w-full object-cover' />
                                    </div>

                                    <div className='lg:col-span-6 col-span-12 flex flex-col justify-center items-center text-black  '>
                                        <p className='font-bold text-center text-lg my-2'>{item.author === null || '' ? "Unknown" : item.author}</p>
                                        <p className='font-semibold text-purple-900 mb-3'>{item.title.slice(0, 30)}...</p>
                                        <p className='w-72 h-5 text-center overflow-hidden'>{item.description}....</p>


                                        <Link to={item.url} target='_blank' className='text-white my-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 w-32'>Read more</Link>
                                        <div className='flex justify-end w-full'>
                                       <span className='bg-red-600 p-1 text-white font-semibold rounded-sm' >{item.publishedAt.slice(0,10)}</span>
                                       </div>


                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                    </div>
                </div>

                <div className='my-8 flex justify-between'>
                    <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" disabled={pageNo === 1} onClick={previous}>Previous</button>
                    <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={next} disabled={startIndex === 90}>Next</button>
                </div>
            </div>

        </div>

    )
}

export default NewsItem
