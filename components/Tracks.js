import React from 'react'
import Headline from './Headline'
import Track from './Track'
import tracks from './Music'



const Tracks = (
    {
        playing,
        setPlaying,
        selHowl,
        setSelHowl,
    }
) => {
    return (
        <div className='w-full mx-auto px-4 py-2'>

            <Headline />
            {tracks.map((track, i) => {
                return <Track
                    key={track.id}
                    track={track}
                    selHowl={selHowl}
                    setSelHowl={setSelHowl}
                    playing={playing}
                    setPlaying={setPlaying}
                    isFirstTrack={i === 0}
                />
            })}

        </div>
    )
}

export default Tracks