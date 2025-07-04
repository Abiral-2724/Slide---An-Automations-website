import { Input } from '@/components/ui/input'
import React from 'react'
import {  SearchIcon } from 'lucide-react';
type Props = {}

const Search = (props: Props) => {
    return (
      <div className="flex overflow-hidden gap-x-2 border-[1px] border-[#3352CC] rounded-full px-4 py-1 items-center flex-1">
         <SearchIcon />
        <Input
          placeholder="Search by name, email or status"
          className="border-none outline-none ring-0 focus:ring-0 flex-1"
        />
      </div>
    )
  }
  
  export default Search
  