import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'

const skills=["HTML", "CSS", "Javascript", "React.js"];
function Profile() {

  const isResume=true;
  return (
    <div>
      <Navbar/>
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"/>
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>Full Name</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <Button className="text-right" variant="outline"><Pen/></Button>
        </div>
        
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail/>
            <span>rushighogare5561@gmail.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact/>
            <span>8450404949</span>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          <div className='flex items-center gap-1'>  
            {
              skills.length!=0 ? skills.map((item, index)=><Badge key={index}>{item}</Badge>) : <span>NA</span>
            }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className="text-md font-bold">Resume</Label>
          {
            isResume ? <a target='blank' href="" className='text-blue-500 w-full hover:underline cursor-pointer'>Rushikesh Ghogare</a> : <span>NA</span>   // target='blank' refers to open new window after clicking on it
          }
        </div>
      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
          <h1 className='font-bold my-5 text-lg'>Applied Jobs</h1>

          {/* Application table */}
          <AppliedJobTable/>
      </div>
    </div>
  )
}

export default Profile