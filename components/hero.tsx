import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className=' w-full h-[100vh] bg-dark'>
      <div className=' max-w-7xl bg-dark mx-auto items-center'>

        <div id='Hero'>

          <div className=' flex justify-center'>
            <img width={600} src="/assets/Hero.png" alt="hero" className='mt-24' />
          </div>

          <div className=' mt-10'>
            <h1 className='text-6xl text-center font-bold h-20'
              style={{
                background: 'linear-gradient(to bottom,  gray, white, white)',
                WebkitBackgroundClip: 'text',
                MozBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            > Be assured that no task <span className="text-red font-medium underline-custom">escapes</span> you</h1>
          </div>

          <div className=' flex justify-center items-center mt-8 gap-5'>

            <div><button className=' px-10 py-5 text-dark bg-white border-white border-2 rounded-md'>Create account →</button></div>

            <div><button className=' px-10 py-5 text-white border-red border-2 rounded-md'>More about teams</button></div>

          </div>

          <div className=' mt-7'>
            <p id='subhero' className=' text-lg text-center'>Tasks under control, <b className=' text-white'>goals</b> within reach.</p>
          </div>

        </div>

        <div className=' mt-28 w-full flex justify-center'>
          <span className="ticker">
            <ul className=' flex space-x-14 uppercase text-gray font-bold text-[10px]'>
              <li>Productivity</li>
              <li>Efficiency</li>
              <li>Task</li>
              <li>Management</li>
              <li>Organization</li>
              <li>Goals</li>
              <li>Achievement</li>
              <li>Planning</li>
              <li>Schedule</li>
              <li>Prioritization</li>
              <li>Collaboration</li>
              <li>Motivation</li>
              <li>Focus</li>
              <li>Progress</li>
              <li>Success</li>
              <li>Timeline</li>
              <li>Reminder</li>
              <li>Deadline</li>
              <li>Milestone</li>
              <li>Accountability</li>
            </ul>
          </span>

        </div>

      </div>
    </div>
  )
}

export default Hero
