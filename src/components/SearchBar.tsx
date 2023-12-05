import React from 'react'
import { Input } from './Input'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
    return (
        <>
        <div className='flex items-center bg-gray-300 p-2 rounded-full max-md:hidden'
        >
            <button type='submit' className='opacity-50'><BiSearch /></button>
            <Input
                className=' outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]'
                placeholder='Search'
                autoComplete='false'
            />
        </div></>


    )
}

export default SearchBar