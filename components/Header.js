import React from 'react'
import { BsSpotify, BsPlayFill, BsPauseFill, BsVolumeUp } from 'react-icons/bs'
import { Howler } from 'howler'

const Header = ({ selHowl, playing, setPlaying }) => {

    const handleVolChange = (e) => {
        Howler.volume(parseInt(e.target.value, 10) / 100);
    }

    const togglePlay = () => {
        if (!selHowl) return;
        if (playing) {
            selHowl.pause();
            setPlaying(false);
        } else {
            selHowl.play();
            setPlaying(true);
        }
    }
    return (
        <div className='bg-header w-full p-4 flex items-center justify-between '>
            <div className='flex items-center'>
                <BsSpotify className='text-textLight' size='30px' />
                <h1 className='text-textLight ml-2 font-bold text-2xl'>Bodify</h1>
            </div>
            <div className='flex items-center'>

            <BsVolumeUp className='text-textLight mr-2' size='20px' />
                <input type="range" max="100" defaultValue="100" onChange={handleVolChange} className="appearance-none focus:outline-none focus:ring-0 focus:shadow-none bg-transparent cursor-pointer" />

                <button className='text-textLight bg-gray-500 p-2 rounded-full ml-4' onClick={togglePlay} >
                    {playing ? <BsPauseFill size='18px' /> : <BsPlayFill size='18px' />}
                </button>
            </div>
        </div>
    )
}

export default Header