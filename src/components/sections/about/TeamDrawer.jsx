import React from 'react'
import TeamMember from '@/assets/about/team-member.jpg'
import TeamCard from './TeamCard'
import { RxCross2 } from 'react-icons/rx'

const TeamDrawer = ({ className, ref, setIsDrawerOpen }) => {
  const LeadersData = [
    {
      id: 1,
      name: 'Jane Doe',
      position: 'CEO',
      department: 'Management',
      description: 'Jane leads the company with a vision for innovation and excellence. With over a decade of experience in the industry, she drives the strategic direction and growth of the organization. Her leadership inspires the team to achieve new heights.',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      image: TeamMember
    },
    {
      id: 2,
      name: 'John Smith',
      position: 'CTO',
      department: 'Technology',
      description: 'John is responsible for the technological direction of the company. He ensures that the tech team is aligned with the business goals. Together with his team, he drives innovation and oversees the development of cutting-edge solutions.',
      linkedin: 'https://www.linkedin.com/in/johnsmith',
      image: TeamMember
    },
    {
      id: 3,
      name: 'Alice Johnson',
      position: 'CFO',
      department: 'Finance',
      description: 'Alice manages the company’s finances and financial planning. She ensures fiscal responsibility and strategic investment to support growth. Her expertise in financial management helps steer the company towards long-term success.',
      linkedin: 'https://www.linkedin.com/in/alicejohnson',
      image: TeamMember
    },
    {
      id: 4,
      name: 'Bob Brown',
      position: 'COO',
      department: 'Operations',
      description: 'Bob oversees the company’s day-to-day operations. He ensures that all departments work efficiently and effectively to meet company goals. His leadership in operations management is key to delivering quality products and services.',
      linkedin: 'https://www.linkedin.com/in/bobbrown',
      image: TeamMember
    },
  ]

  const TeamData = [
    {
      id: 1,
      name: 'Emily Davis',
      position: 'Lead Engineer',
      department: 'Engineering',
      description: 'Emily leads the engineering team with a focus on innovation and quality. She brings a wealth of experience in product development and is passionate about creating solutions that meet customer needs.',
      linkedin: 'https://www.linkedin.com/in/emilydavis',
      image: TeamMember
    },
    {
      id: 2,
      name: 'Michael Wilson',
      position: 'Senior Designer',
      department: 'Design',
      description: 'Michael is a creative force in the design team. He specializes in user experience and interface design, ensuring that our products are not only functional but also visually appealing. His attention to detail and innovative ideas drive the design process forward.',
      linkedin: 'https://www.linkedin.com/in/michaelwilson',
      image: TeamMember
    },
    {
      id: 3,
      name: 'Sarah Lee',
      position: 'Marketing Manager',
      department: 'Marketing',
      description: 'Sarah is a strategic thinker with a passion for storytelling. She leads the marketing team in crafting compelling narratives that resonate with our audience. Her expertise in digital marketing and brand strategy drives our outreach efforts.',
      linkedin: 'https://www.linkedin.com/in/sarahlee',
      image: TeamMember
    },
    {
      id: 4,
      name: 'David Martinez',
      position: 'Product Owner',
      department: 'Product',
      description: 'David is the bridge between the engineering team and stakeholders. He ensures that the product vision is clearly communicated and that the team is focused on delivering value to customers. His expertise in agile methodologies helps drive the product development process.',
      linkedin: 'https://www.linkedin.com/in/davidmartinez',
      image: TeamMember
    },
    {
      id: 5,
      name: 'Laura Garcia',
      position: 'UX Researcher',
      department: 'Design',
      description: 'Laura is dedicated to understanding user needs and behaviors. She conducts research and usability testing to inform design decisions and ensure that our products provide a seamless user experience.',
      linkedin: 'https://www.linkedin.com/in/lauragarcia',
      image: TeamMember
    },
    {
      id: 6,
      name: 'James Anderson',
      position: 'Data Scientist',
      department: 'Data',
      description: 'James is a data enthusiast with a knack for uncovering insights from complex datasets. He leverages advanced analytics and machine learning techniques to drive data-informed decision-making across the organization.',
      linkedin: 'https://www.linkedin.com/in/jamesanderson',
      image: TeamMember
    }
  ]

  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 z-20000 h-screen w-full backdrop-blur-md bg-white rounded-t-xl border border-cst-neutral-2 pt-4 ${className}`}
    >
      <div
        className="relative h-full w-full top-0 md:top-0 overflow-auto rounded-t-xl p-6"
      >
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="fixed top-8 right-8 md:right-10 z-[2000] p-2 border border-cst-neutral-3 rounded-full bg-white hover:bg-primary hover:text-white hover:border-primary shadow-lg hover:rotate-90 transition-all duration-300 ease-in-out"
        >
          <RxCross2 className="text-3xl" />
        </button>

        <div className="flex items-center justify-center w-full mb-16">
          <div className="w-20 bg-cst-neutral-2 rounded-full h-1.5"></div>
        </div>
        <div className="flex items-start justify-center h-full">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col text-center gap-2">
              <h2 className='text-3xl md:text-5xl capitalize'>Visionary Leadership</h2>
              <p>Meet the people steering innovation and integrity at the top.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {LeadersData.map((member, index) => (
                <TeamCard
                  key={index}
                  name={member.name}
                  position={member.position}
                  department={member.department}
                  description={member.description}
                  linkedin={member.linkedin}
                  imagePath={member.image}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex flex-col text-center gap-2">
                <h2 className='text-2xl md:text-4xl capitalize'>The minds behind the mission</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full my-6">
                {TeamData.map((member, index) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    position={member.position}
                    department={member.department}
                    description={member.description}
                    linkedin={member.linkedin}
                    imagePath={member.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamDrawer