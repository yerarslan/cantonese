import './Information.css';
import { React } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function Information() {
    let navigate = useNavigate();
  return (
    <div className="Information">
        <div className="information-menu-top-bar">
            <div className="information-menu-top-bar-left" onClick={() => {navigate("/");}}>
                <IoChevronBack className="information-menu-top-bar-icon"size="50"/>
                <h2 className="information-menu-top-bar-icon-text">Home</h2>
            </div>
            <h1 className="information-menu-top-bar-text">Info</h1>
            <div className="information-menu-top-bar-right"></div>
        </div>
        <h1 className="information-menu-header">Version</h1>
        <div className="information-menu-text">
            <p>Version 1.0.2 March 10, 2021</p>
        </div>
        <h1 className="information-menu-header">About</h1>
        <div className="information-menu-text">
            <p>
                Cantonese is a language that uses tones to convey meaning. That means learners need to pay attention to the pitch (i.e. high and low) of each syllable in order to understand what is being said. This is arguably the hardest area for self-learners, especially if one’s native language does not use a similar mechanism. CanTONEse was designed to solve this problem. In this app, Cantonese tones are visualised and colour-coded, illustrated with recordings, including words, phrases, and full conversations, by actual speakers. There is a step-by-step guide for beginners, and there are tools and games for more advanced learners who may need help on certain aspects of tones. This is an ultimate self-learning tool for learners from different levels who want to master this important and significant aspect of the Cantonese sound system.
            </p>
        </div>
        <h1 className="information-menu-header">Credits</h1>
        <div className="information-menu-text">
            <p>
                CanTONEse is developed and maintained by the Chinese Language Teaching Development Centre, Department of Chinese Language and Literature, The Chinese University of Hong Kong. This project was supported by the Courseware Development Grant Scheme (2018-19, CUHK).
            </p>
            <hr></hr>
            <p>Authors (in alphabetic order of surnames): Miss Ki Mei Ying, Mr. Lai Yik Po, Mr. Yip Ka Fai</p>
            <hr></hr>
            <p>App Development: Ms. Eva Cheung (E-Learning Team of the Information Technology Services Centre, CUHK)</p>
            <hr></hr>
            <p>Student Programmers: Mr. Chan Chak Hong, Mr. To Ka Ho, Mr. Yau Chung Yiu</p>
            <hr></hr>
            <p>Principal supervisor: Dr. Lai Pit Shun</p>
            <hr></hr>
            <p>Co-supervisors: Dr. Cheung Wing Mui, Dr. Cheng Siu Pong, Dr. Ng Ka Yi, Mr. Kwok Kim Fung</p>
        </div>
        <h1 className="information-menu-header">Acknowledgment</h1>
        <div className="information-menu-text">
            <p>
                We would like to thank Prof. Tang Sze Wing and Prof. Kwok Bit Chee for their support.
            </p>
        </div>
    </div>
  );
}

export default Information;