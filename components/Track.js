import React, { useState, useEffect } from 'react'
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import Image from 'next/image'
import { Howl } from 'howler';

const Track = ({
    track,
    playing,
    setPlaying,
    selHowl,
    setSelHowl,
    isFirstTrack,
    duration,
}) => {

    const [howl, setHowl] = useState(null)

    useEffect(() => {
        const newHowl = new Howl({
            src: [track.src],
            loop: true,
            autoplay: false,
            html5: true,
            volume: 0.5,


        })

        setHowl(newHowl)


        if (isFirstTrack) {
            setSelHowl(newHowl);
        }
    }, [isFirstTrack, setSelHowl, track, duration]);

    const togglePlay = () => {
        if (howl.playing()) {
            howl.pause()
            setPlaying(false)
            return
        }

        selHowl.playing() && selHowl.pause()

        setPlaying(true);
        howl.play()
        setSelHowl(howl)
    }

    return (
        <div onClick={togglePlay} className="grid col-span-5 grid-cols-12 sm:grid-cols-player mx-auto sm:ml-[-5px] ml-[-15px] px-4 py-2 rounded-sm transition-colors hover:bg-hover cursor-pointer">
            <div className="col-span-1 grid grid-cols-2 items-center">
                {selHowl === howl && playing ? (
                    <Image src='/pause.png' className='rounded-full pr-10' alt='icon' width='42px' height='42px' />
                ) : (
                    <Image src='/play.png' className='rounded-full pr-10' alt='icon' width='42px' height='42px' />
                )}
                {/*<Image src={track.imgSrc} width='40px' height='40px' className="ml-4 rounded-full w-4 h-4 sm:w-10 sm:h-10" alt='foto' />*/}
            </div>

            <div className="col-span-5 flex flex-col items-start ml-1 justify-center">
                <span className="text-white font-semibold text-[6px] sm:text-sm">{track.title}</span>

            </div>

            <div className="col-span-5 flex items-center justify-start text-[6px] sm:text-sm ml-1">{track.artist}</div>

            <div className="flex items-center justify-start">{selHowl === howl && playing ? <Image src='/wave.gif' className='rounded-full' alt='icon' width='20px' height='20px' /> : <Image src='/head.png' className='rounded-full' alt='icon' width='20px' height='20px' />} </div>

        </div>
    )
}

export default Track