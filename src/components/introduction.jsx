import React from "react";
import mapkids from "/Users/odedportnoy/Desktop/Full-Stack/Projects/Hackathon/hackathon/src/images/map.png";
import girl from "/Users/odedportnoy/Desktop/Full-Stack/Projects/Hackathon/hackathon/src/images/girl-modified.png";
import boy from "/Users/odedportnoy/Desktop/Full-Stack/Projects/Hackathon/hackathon/src/images/boy-modified.png";
import heart from "/Users/odedportnoy/Desktop/Full-Stack/Projects/Hackathon/hackathon/src/images/heart.png";
import temp from "/Users/odedportnoy/Desktop/Full-Stack/Projects/Hackathon/hackathon/src/images/temp.png";
import foot from "/Users/odedportnoy/Desktop/Full-Stack/Projects/Hackathon/hackathon/src/images/image-removebg-preview.png";
import { useState, useEffect } from "react";
const Intro = () => {
  const arr = [80, 81, 82, 83, 84, 85, 86];
  const loc = [
    { lat: 32.08635, lon: 34.80217 },
    { lat: 32.08642, lon: 34.80216 },
    { lat: 32.08643, lon: 34.80216 },
    { lat: 32.08638, lon: 34.80218 },
  ];
  const dias = [76, 77, 78];
  const sis = [116, 117, 118, 119, 120, 121, 121];
  const [temperture, setTemp] = useState(36.7);
  const [pulse, setPulse] = useState(80);
  const [location, setLocation] = useState({ lat: 32.08635, lon: 34.80217 });
  const [counter, setCounter] = useState(0);
  const [avatar, setAvatar] = useState(boy);
  const [avatarName, setAvatarName] = useState("Jack");
  const [diast, setDiast] = useState(77);
  const [sist, setSist] = useState(118);
  const [sleep, setSleep] = useState(8.5);
  const [bsteps, setBsteps] = useState(2652);
  const [gsteps, setGsteps] = useState(1852);
  const [steps, setSteps] = useState(bsteps);
  useEffect(() => {
    let interval;
    let locterval;
    let diasterval;
    let sisterval;
    let bsteperval;
    let gsteperval;

    const updateCounter = () => {
      setCounter((currentValue) => currentValue + 1);
    };

    interval = setInterval(() => {
      setPulse(arr[Math.floor(Math.random() * 5)]);
      updateCounter();
    }, 1000);
    locterval = setInterval(() => {
      setLocation(loc[Math.floor(Math.random() * 4)]);
      updateCounter();
    }, 4000);
    diasterval = setInterval(() => {
      setDiast(dias[Math.floor(Math.random() * 3)]);
      updateCounter();
    }, 1000);
    sisterval = setInterval(() => {
      setSist(sis[Math.floor(Math.random() * 7)]);
      updateCounter();
    }, 3000);
    bsteperval = setInterval(() => {
      setBsteps(bsteps + 1);
      updateCounter();
    }, 500);
    gsteperval = setInterval(() => {
      setGsteps(gsteps + 1);
      updateCounter();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const changeJack = () => {
    setAvatar(boy);
    setAvatarName("Jack");
    setTemp(36.7);
    setSleep(8.5);
    setSteps(bsteps);
  };
  const changeLili = () => {
    setAvatar(girl);
    setAvatarName("Mary");
    setTemp(36.9);
    setSleep(7.5);
    setSteps(gsteps);
  };

  return (
    <React.Fragment>
      <div className="mapic">
        <img className="firstPic" src={mapkids} />
        <img className="boy" onClick={changeJack} src={boy}></img>
        <img className="girl" onClick={changeLili} src={girl}></img>
        <div className="details">
          <div className="dhead">
            <img className="boypic" src={avatar} />
            <h1 className="name">{avatarName}</h1>
            <img className="heart" src={heart} />
            <h5 className="pulse">{pulse}</h5>
          </div>
          <div className="info">
            <h5 className="lon sleep">{sleep} Hours sleep</h5>
            <h3 className="lon">
              <u>Location coordinate:</u>
            </h3>
            <h4 className="lat">
              <span className="boldi">Latitude</span> {location.lat}
            </h4>
            <h4 className="lon">
              <span className="boldi">Longitude</span> {location.lon}
            </h4>
          </div>
          <div className="info2">
            <h3 className="lon">
              <u>Blood Pressure:</u>
            </h3>
            <h4 className="lat">
              <span className="boldi">Diastolic </span> {diast}
            </h4>
            <h4 className="lon">
              <span className="boldi">Systolic </span> {sist}
            </h4>
            <div className="info3">
              <h5 className="lon celsius">
                {temperture}C
                <img className="temp" src={temp} />
              </h5>
              <h5 className="lon steps">
                {steps}
                <img className="foots" src={foot} />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
