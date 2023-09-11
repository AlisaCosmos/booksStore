import './ScreenFirst.scss';
import Circl from '../../assets/imgs/Mask-Group-14.png';
import BookRight from '../../assets/imgs/Mask-Group-15.png';
import BookLeft from '../../assets/imgs/Mask-Group-16.png';
import { ReactComponent as LineOrange } from '../../assets/imgs/Group-7749.svg';
import { ReactComponent as LineViolet } from '../../assets/imgs/Group-7748.svg';
import { ReactComponent as LineCirc } from '../../assets/imgs/Group-7671.svg';
import Search from '../../components/Search/Search';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function ScreenFirst({ refapp }) {
  gsap.registerPlugin(ScrollTrigger);
  //title
  useEffect(() => {
    const element = refapp.current;
    gsap.fromTo(
      element.querySelector('.screenFirst__title'),
      {
        opacity: 0,
        y: 300,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        delay: 1,
        ease: 'SlowMo',
      },
    );
  }, []);

  //books
  useEffect(() => {
    const element = refapp.current;
    gsap.fromTo(
      element.querySelector('.screenFirst__imgBooks_wrapper'),
      {
        delay: 1,
        translateY: 0,
      },
      {
        translateY: 80,
        duration: 1,

        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.screenFirst'),
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  }, []);
  //Circle
  useEffect(() => {
    const element = refapp.current;
    gsap.fromTo(
      element.querySelector('#Circle'),
      {
        opacity: 0,
        scale: 0.2,
        delay: 1,
        //y: -20,
      },
      {
        opacity: 1,
        //y: 0,
        scale: 1,
        duration: 5,
        ease: 'SlowMo',
      },
    );
  }, []);
  //imput
  useEffect(() => {
    const element = refapp.current;
    gsap.fromTo(
      element.querySelector('.screenFirst__search'),
      {
        opacity: 0,
        delay: 1,
        //y: -20,
      },
      {
        opacity: 1,
        duration: 5,
        ease: 'SlowMo',
      },
    );
  }, []);
  return (
    <div className="screenFirst">
      <div className="screenFirst__inner">
        <div className="screenFirst__colRight">
          <div className="screenFirst__title_wrapper">
            <h1 className="screenFirst__title">
              <span className="screenFirst__title_color">Чтение</span> &ndash; это увлекательно
            </h1>
          </div>
          <div className="screenFirst__search">
            <Search />
          </div>
        </div>
        <div className="screenFirst__colLeft">
          <div className="screenFirst__imgCircl_wrapper">
            <img src={Circl} className="screenFirst__imgCircl" id="Circle" alt="" />
            <div className="screenFirst__imgLineViolet">
              <LineViolet />
            </div>
            <div className="screenFirst__imgLineOrange">
              <LineOrange />
            </div>

            <div className="screenFirst__imgBooks">
              <div className="screenFirst__imgBooks_wrapper">
                <div className="imgBooksLeft">
                  <img src={BookLeft} alt=""></img>
                </div>
                <div className="imgBooksRight">
                  <img src={BookRight} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
