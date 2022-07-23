import React from 'react'
import { BsClock, BsVolumeUpFill } from 'react-icons/bs'

const Headline = () => {
    return (
        <div className="w-full grid grid-cols-12 sm:grid-cols-player py-2 px-4 mb-2 border-b-[1px] border-border">
        <span className="col-span-1 font-textLight ml-[-13px] sm:ml-3">#</span>
        <span className="col-span-5 font-textLight">TITLE</span>
        <span className="col-span-5 font-textLight">AUTHOR</span>
        <span className="col-span-1 font-textLight">
          <BsVolumeUpFill size="18px" />
        </span>
      </div>
    )
}

export default Headline