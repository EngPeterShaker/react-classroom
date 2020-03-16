import React, { FC, useRef, useState, useEffect, useCallback } from 'react'
import ReactPlayer from 'react-player'
import useInterval from "../Hooks/useInterval";
import moment from 'moment';
import { readRemoteFile } from 'react-papaparse'

interface Props {
  name?: string;
  priority?: boolean
}

const Styles = {
  wrapper: {
    marginLeft: '30%'
  },
  text: {
    backgroundColor: '#3f51b547',
    marginTop: '2em',
  }
}
const Classrom: FC<Props> = props => {
  const playerRef: any = useRef<HTMLInputElement>(null);
  let test = useRef({});
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [lastShownTime, setLastShownTime] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false);

  const getCsvData = useCallback(async () => {
    readRemoteFile('./sheet.csv', {
      complete: function (res: any) {
        const categoryPosts = res.data.reduce((acc: any, row: Array<string>) => {
          let timeString = row[0];
          const obj = { [timeString.toString()]: row[1] }
          return { ...acc, ...obj };
        }, {});
        test.current = categoryPosts;
      }
    })
  }, [])

  const getCurrentTime = (): any => {
    const myplayer = (playerRef as any).current
    const elapsedTime = myplayer.getCurrentTime();
    let dateobj = new Date();
    const minutes = Math.floor(elapsedTime / 60);
    dateobj.setMinutes(Math.floor(elapsedTime / 60));
    dateobj.setSeconds(Math.floor(elapsedTime - (minutes * 60)));
    let newTime = moment(dateobj).format('m:ss')
    let subtl: any = test.current
    let diff = moment(dateobj).diff(moment(lastShownTime)) / 1000
    if (!isNaN(diff) && diff > 5) {
      setText('')
    }
    if (newTime !== time && subtl[newTime]) {
      setTime(newTime)
      setText(`Teacher Note at ${newTime}:${subtl[newTime]}`)
      setLastShownTime(dateobj)
    }
  }

  useEffect(() => {
    getCsvData()
  }, [getCsvData])

  useInterval(() => {
    if (isPlaying) {
      getCurrentTime()
    }
  }, 1000);
  return (<>
    <div style={Styles.wrapper}>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=a9UrKTVEeZA'
        ref={playerRef}
        volume={0}
        muted={true}
        playing={false}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        config={{
          file: {
            attributes: {
              style: { width: '50%', height: '50%' }
            }
          }
        }}
        />
        </div>
      <p style={Styles.text}>
        {text}
      </p>
</>
  )
}

Classrom.propTypes = {

}

export default Classrom
