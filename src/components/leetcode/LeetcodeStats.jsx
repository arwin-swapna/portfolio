import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LeetcodeStats = ({data}) => {
    const easy = ((data.easySolved)/(data.totalEasy)*100).toFixed(2)
    const med = ((data.mediumSolved)/(data.totalMedium)*100).toFixed(2)
    const hard = ((data.hardSolved)/(data.totalHard)*100).toFixed(2)
  return (
    <div className='mt-5 grid md:grid-cols-3 grid-cols-1 gap-3'>
            {/*======= Easy Stats ========== */}
            <div className="block p-5 max-w-full rounded-lg shadow-md bg-slate-800">
                <div className='flex flex-row justify-between'>

                  <div>
                    <h5  className="mb-2 text-2xl font-bold tracking-tight text-white">Easy Questions</h5>
                    <p className='leading-loose'>Questions Solved: <span className='font-bold'>{data.easySolved}/{data.totalEasy}</span></p>
                  </div>

                  <div className='ml-1' style={{ width: 70, height: 'auto' }}>
                    <CircularProgressbar  value={easy} text={`${easy}%`} />
                  </div>

                </div>
            </div>
            {/*======= Medium Stats ========== */}
            <div className="block p-5 max-w-full rounded-lg shadow-md bg-slate-800">
                <div className='flex flex-row justify-between'>

                  <div>
                    <h5  className="mb-2 text-2xl font-bold tracking-tight text-white">Medium Questions</h5>
                    <p className='leading-loose'>Questions Solved: <span className='font-bold'>{data.mediumSolved}/{data.totalMedium}</span></p>
                  </div>

                  <div  style={{ width: 70, height: 'auto' }}>
                    <CircularProgressbar  value={med} text={`${med}%`} />
                  </div>

                </div>
            </div>
            {/*======= Hard Stats ========== */}
            <div className="block p-5 max-w-full rounded-lg shadow-md bg-slate-800">
                <div className='flex flex-row justify-between'>

                  <div>
                    <h5  className="mb-2 text-2xl font-bold tracking-tight text-white">Hard Questions</h5>
                    <p className='leading-loose'>Questions Solved: <span className='font-bold'>{data.hardSolved}/{data.totalHard}</span></p>
                  </div>

                  <div style={{ width: 70, height: 'auto' }}>
                    <CircularProgressbar  value={hard} text={`${hard}%`} />
                  </div>

                </div>
              </div>
    </div>
  )
}

export default LeetcodeStats