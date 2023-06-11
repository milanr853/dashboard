import React, { useState } from 'react'
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { FaRegChartBar, FaUserAlt } from 'react-icons/fa';
import { MdArrowDropDown, MdArrowDropUp, MdTimer } from 'react-icons/md';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from 'chart.js';

//////////////////DOUGHNUT//////////////////////
ChartJS.register(ArcElement, Tooltip, Legend);

//////////////////LINE//////////////////////
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function Body() {
    const RANGE = ['30 days', '90 days', '6 months', '12 months']

    const [rangeVal, setRangeVal] = useState('30 days')

    const DataSet = {
        labels: ['DIRECT', "SEARCH"],
        datasets: [
            {
                label: '',
                data: [50, 50],
                backgroundColor: [
                    '#22d3ee',
                    '#c084fc',
                ],
                borderColor: [
                    '#22d3ee',
                    '#c084fc',
                ],
                borderWidth: 1,
            },
        ],
    }

    /////////////////////////////////////////
    const LineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: '',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: '#b470fa',
            tension: 0.1
        }]
    };


    return (
        <div className='bodyContent h-[90%] overflow-y-scroll px-8'>
            <div className='flex justify-between items-center my-8'>
                <div className='flex items-center space-x-8'>
                    <div className='font-semibold text-4xl text-gray-700'>Project statistics</div>
                    <HiQuestionMarkCircle size={24} color='#7166f9' />
                </div>

                <div className='flex space-x-2 items-center'>
                    {
                        RANGE.map(range => (
                            <div onClick={() => setRangeVal(range)}
                                className={`text-xs ${rangeVal === range ? 'bg-[#7166f9]' : 'bg-[#f6f6fb]'} ${rangeVal === range ? 'text-white' : 'text-black'}
                            flex justify-center items-center w-[80px] h-[40px] 
                            rounded-3xl cursor-pointer`}>
                                {range}
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex-1 space-y-10 mb-8'>
                <div className="top flex space-x-6">
                    <div className='w-[50%] h-[400px] bg-[#f6f6fb] rounded-3xl px-8 pb-6'>
                        <div className='h-[20%] flex items-center justify-between'>
                            <div className='text-xl'>Total visits</div>
                            <div className='text-2xl font-semibold text-[#6f64f6]'>42.43M</div>
                        </div>

                        <div className='border border-gray-300'></div>

                        <div className='h-[80%] flex pt-4'>
                            <Line
                                data={LineData}
                                options={{
                                    plugins: {
                                        legend: {
                                            display: false,
                                        }
                                    },
                                    maintainAspectRatio: false,
                                }}
                            />
                        </div>
                    </div>

                    <div className='w-[50%] h-[400px]'
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2,1fr)',
                            gridTemplateRows: 'repeat(2,1fr)',
                            gridGap: '1.5rem',
                        }}>

                        <div className='bg-gradient-to-br from-cyan-400 from-30% to-purple-400 to-70% 
                        rounded-3xl py-4 px-8'
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '50% 50%',
                                gridTemplateRows: 'repeat(2,1fr)',
                            }}
                        >
                            <div className='flex justify-center items-center'>
                                <FaRegChartBar size={24} color='white' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <MdArrowDropUp size={20} color='#00FF00' />
                                <div className='text-xs text-white'>12%</div>
                            </div>
                            <div className='flex justify-center items-center text-2xl font-semibold text-white flex-col'>
                                <div>42.34%</div>
                                <div className='text-xs'>Bounce rate</div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <HiQuestionMarkCircle color='white' />
                            </div>
                        </div>

                        <div className='bg-[#f6f6fb] rounded-3xl py-4 px-8'
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '50% 50%',
                                gridTemplateRows: 'repeat(2,1fr)',
                            }}
                        >
                            <div className='flex justify-center items-center'>
                                <BsFillCalendarWeekFill size={24} color='#6f64f6' />
                            </div>
                            <div className='flex justify-center items-center'>
                            </div>
                            <div className='flex justify-center items-center text-2xl font-semibold flex-col'>
                                <div>42.34%</div>
                                <div className='text-xs'>Pages per visit</div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <HiQuestionMarkCircle color='#6f64f6' />
                            </div>
                        </div>
                        <div className='bg-[#f6f6fb] rounded-3xl py-4 px-8'
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '50% 50%',
                                gridTemplateRows: 'repeat(2,1fr)',
                            }}
                        >
                            <div className='flex justify-center items-center'>
                                <FaUserAlt size={24} color='#6f64f6' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <MdArrowDropDown color='#ef4444' />
                                <div className='text-xs '>2.1%</div>
                            </div>
                            <div className='flex justify-center items-center text-2xl font-semibold flex-col'>
                                <div>326.60K</div>
                                <div className='text-xs'>Total monthly visit</div>
                            </div>
                            <div className='flex justify-center items-center'>
                            </div>
                        </div>
                        <div className='bg-[#f6f6fb] rounded-3xl py-4 px-8'
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '50% 50%',
                                gridTemplateRows: 'repeat(2,1fr)',
                            }}
                        >
                            <div className='flex justify-center items-center'>
                                <MdTimer size={28} color='#6f64f6' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <MdArrowDropDown color='#ef4444' />
                                <div className='text-xs'>2.4%</div>
                            </div>
                            <div className='flex flex-col justify-center items-center text-2xl font-semibold'>
                                <div>00:03:27</div>
                                <div className='text-xs'>Avg visit duration</div>
                            </div>
                            <div className='flex justify-center items-center'>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="bottom flex space-x-6">
                    <div className='w-[50%] h-[250px] bg-[#f6f6fb] rounded-3xl px-8 pb-6'>
                        <div className='h-[30%] flex items-center text-xl'>Traffic Sources</div>

                        <div className='border border-gray-300'></div>

                        <div className='h-[70%] flex'>
                            <div className='w-[70%] h-full flex items-start justify-center flex-col space-y-4'>
                                <div className='w-[90%] bg-slate-200 h-[40px] rounded-full flex justify-between items-center px-16'>
                                    <div className='text-xs text-gray-400'>Source</div>
                                    <div className='text-xs text-gray-400'>Traffic %</div>
                                </div>

                                <div className='w-[90%] flex justify-between items-center pl-5 pr-16'>
                                    <div className='flex space-x-4'>
                                        <div className='w-[30px] h-[15px] bg-cyan-400'></div>
                                        <div className='text-xs'>Direct</div>
                                    </div>
                                    <div className='text-xs'>50</div>
                                </div>
                                <div className='w-[90%] flex justify-between items-center pl-5 pr-16'>
                                    <div className='flex space-x-4'>
                                        <div className='w-[30px] h-[15px] bg-purple-400'></div>
                                        <div className='text-xs'>Search</div>
                                    </div>
                                    <div className='text-xs'>50</div>
                                </div>
                            </div>

                            <div className='w-[30%] p-2 relative h-full 
                            flex items-center justify-center'>
                                <Doughnut
                                    data={DataSet}
                                    height={'90%'}
                                    options={{
                                        plugins: {
                                            legend: {
                                                display: false,
                                            }
                                        },
                                        maintainAspectRatio: false,
                                        cutout: 53
                                    }} />
                                <div className='absolute flex justify-center items-center flex-col'>
                                    <div className='text-4xl font-semibold'>50%</div>
                                    <div className='text-xs'>Direct</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[50%] h-[250px] bg-[#f6f6fb] rounded-3xl px-8 pb-6'>
                        <div className='h-[30%] flex items-center text-xl'>Traffic Sources</div>

                        <div className='border border-gray-300'></div>

                        <div className='h-[70%] flex'>
                            <div className='w-[70%] h-full flex items-start justify-center flex-col space-y-4'>
                                <div className='w-[90%] bg-slate-200 h-[40px] rounded-full flex justify-between items-center px-16'>
                                    <div className='text-xs text-gray-400'>Source</div>
                                    <div className='text-xs text-gray-400'>Traffic %</div>
                                </div>

                                <div className='w-[90%] flex justify-between items-center pl-5 pr-16'>
                                    <div className='flex space-x-4'>
                                        <div className='w-[30px] h-[15px] bg-cyan-400'></div>
                                        <div className='text-xs'>Direct</div>
                                    </div>
                                    <div className='text-xs'>50</div>
                                </div>
                                <div className='w-[90%] flex justify-between items-center pl-5 pr-16'>
                                    <div className='flex space-x-4'>
                                        <div className='w-[30px] h-[15px] bg-purple-400'></div>
                                        <div className='text-xs'>Search</div>
                                    </div>
                                    <div className='text-xs'>50</div>
                                </div>
                            </div>
                            <div className='w-[30%] p-2 relative h-full 
                            flex items-center justify-center'>
                                <Doughnut
                                    data={DataSet}
                                    height={'90%'}
                                    options={{
                                        plugins: {
                                            legend: {
                                                display: false,
                                            }
                                        },
                                        maintainAspectRatio: false,
                                        cutout: 53
                                    }} />
                                <div className='absolute flex justify-center items-center flex-col'>
                                    <div className='text-4xl font-semibold'>50%</div>
                                    <div className='text-xs'>Direct</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body