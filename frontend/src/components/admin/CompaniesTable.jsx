import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, Edit2Icon, MoveHorizontal } from 'lucide-react'

function CompaniesTable() {
  return (
    <div>
        <Table>
            <TableCaption>A list of your recent companies</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Logo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className='text-right'>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableCell>
                    <Avatar>
                        <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"/>
                    </Avatar>
                </TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>18-07-2024</TableCell>
                <TableCell className='text-right cursor-pointer'>
                    <Popover>
                        <PopoverTrigger><MoveHorizontal/></PopoverTrigger>
                        <PopoverContent className='w-32'>
                            <div className='flex items-center gap-2 w-fit cursor-pointer'>
                                <Edit2 className='w-4'/>
                                <span>Edit</span>
                            </div>
                        </PopoverContent>
                    </Popover>
                </TableCell>
            </TableBody>
        </Table>
    </div>
  )
}

export default CompaniesTable