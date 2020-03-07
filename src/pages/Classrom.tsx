import React , {useRef} from 'react'
import ReactPlayer from 'react-player'
import useInterval from "../Hooks/useInterval";
// import Papa from 'papaparse';
import CSVReader from "react-csv-reader";
import axios from 'axios'
import { readRemoteFile } from 'react-papaparse'

interface Props {
  /** The user's name */
  name?: string;
  /** Should the name be rendered in bold */
  priority?: boolean
}

const Classrom: React.FC<Props> = props => {
  const playerRef : any= useRef(null);

const handleForce = (data: any, fileName: any) => console.log(data);

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header: any) => header.toLowerCase().replace(/\W/g, "_")
};

  // const fetchCsv=()=> {
  //   fetch('some-url')
  // .then(response => {
  //   return response
  // })
  // }
  // React.useEffect(() => {

  //  const res = getCsvData()
  //  console.log(' res',  res)
  // }, [])

  const getCsvData = async ()  => {
  // let csvData = await fetchCsv();

// )

axios.get('https://www.dropbox.com/s/yvc6z8997qac4e5/sheet.csv')
.then(res => {
  console.log('res', res)
})

// }
// const work = (str: String ) => {
//   console.log('str', str)
//   // let data = str.split('\n').map(i=>i.split(','));
//   // let headers = data.shift();
//   // let output =data.map(d=>{obj = {};headers.map((h,i)=>obj[headers[i]] = d[i]);return obj;});
//   // console.log(output);
}

  const getCurrentTime  = (): any => {
    const myplayer = (playerRef as any).current
    console.log('myplayer', myplayer)
    if (myplayer){

      // return null
      const elapsedTime =myplayer.getCurrentTime();
      const minutes = Math.floor(elapsedTime / 60);
      const seconds = Math.floor(elapsedTime - (minutes * 60));

      console.log('minutes', minutes)
      console.log('seconds', seconds)
      const time = { minutes , seconds}
      return time

      // console.log('playerRef',myplayer.getCurrentTime()/1000)
      // return playerRef.current.getCurrentTime()
      // console.log('getCurrentTime()', getCurrentTime())
    }
  }

  useInterval(() => {
    getCurrentTime()
}, 10* 1000);

  return (
    <div>
      <ReactPlayer url='https://www.youtube.com/watch?v=a9UrKTVEeZA'
      ref={playerRef}
      volume={0}
      muted={true}
      playing={false}
       />
            <button onClick={()=> getCsvData()}>Focus the input</button>


            <CSVReader
      cssClass="react-csv-input"
      label="Select CSV with secret Death Star statistics"
      onFileLoaded={handleForce}
      parserOptions={papaparseOptions}
    />
    </div>
  )
}

Classrom.propTypes = {

}

export default Classrom
