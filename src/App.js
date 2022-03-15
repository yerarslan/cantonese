import './App.css';
import { Reactm, useState } from 'react';
import { Route, Link, BrowserRouter as Router, Routes} from 'react-router-dom';
import Information from './screens/Information';
import Question from './screens/Question';
import Main from './screens/Main';
import Introduction from './screens/Introduction';
import Lesson1 from './screens/Lesson1';
import Quiz1 from './screens/Quiz1';
import Lesson2 from './screens/Lesson2';
import Quiz2 from './screens/Quiz2';
import Lesson3 from './screens/Lesson3';
import Quiz3 from './screens/Quiz3';
import Lesson4 from './screens/Lesson4';
import Quiz4 from './screens/Quiz4';
import Lesson5 from './screens/Lesson5';
import Quiz5 from './screens/Quiz5';
import Notes from './screens/Notes';
import Video from './screens/Video';
import Game from './screens/Game';

function App() {
    let localStorage = window.localStorage;
    if (localStorage.getItem('progress1') === null) {
        localStorage.setItem('progress1', '1');
    }
    if (localStorage.getItem('progress2') === null) {
        localStorage.setItem('progress2', '0');
    }
    if (localStorage.getItem('progress3') === null) {
        localStorage.setItem('progress3', '0');
    }
    if (localStorage.getItem('progress4') === null) {
        localStorage.setItem('progress4', '0');
    }
    if (localStorage.getItem('progress5') === null) {
        localStorage.setItem('progress5', '0');
    }
    if (localStorage.getItem('progress6') === null) {
        localStorage.setItem('progress6', '0');
    }
    let storedArray = [0, 0, 0, 0, 0, 0];
    storedArray[0] = localStorage.getItem('progress1') - '0';
    storedArray[1] = localStorage.getItem('progress2') - '0';
    storedArray[2] = localStorage.getItem('progress3') - '0';
    storedArray[3] = localStorage.getItem('progress4') - '0';
    storedArray[4] = localStorage.getItem('progress5') - '0';
    storedArray[5] = localStorage.getItem('progress6') - '0';
    const [progress, setProgress] = useState(storedArray);
    console.log(progress);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main progress={progress}/>}/>
                <Route path="/information" element={<Information />} />
                <Route path="/question" element={<Question />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/lesson1" element={<Lesson1 />} />
                <Route path="/quiz1" element={<Quiz1 setProgress={setProgress} progress={progress}/>} />
                <Route path="/lesson2" element={<Lesson2 />} />
                <Route path="/quiz2" element={<Quiz2 setProgress={setProgress} progress={progress}/>} />
                <Route path="/lesson3" element={<Lesson3 />} />
                <Route path="/quiz3" element={<Quiz3 setProgress={setProgress} progress={progress}/>} />
                <Route path="/lesson4" element={<Lesson4 />} />
                <Route path="/quiz4" element={<Quiz4 setProgress={setProgress} progress={progress}/>} />
                <Route path="/lesson5" element={<Lesson5 />} />
                <Route path="/quiz5" element={<Quiz5 setProgress={setProgress}  progress={progress}/>} />
                <Route path="/notes" element={<Notes setProgress={setProgress}/>} />
                <Route path="/game" element={<Game />}/>
                <Route path="/video1" element={<Video number={1}/>}/>
                <Route path="/video2" element={<Video number={2}/>}/>
                <Route path="/video3" element={<Video number={3}/>}/>
                <Route path="/video4" element={<Video number={4}/>}/>
                <Route path="/video5" element={<Video number={5}/>}/>
            </Routes>
        </Router>  
    );
}

export default App;
