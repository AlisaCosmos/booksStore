import './ResultsShow.scss';
import ResultsListItems from '../ResultsListItems/ResultsListItems';
import { useSelector } from 'react-redux';
import { ReactComponent as Dote } from '../../assets/imgs/Group-1111.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function ResultsShow({ refapp }) {
  const { status } = useSelector((state) => state.books);
  gsap.registerPlugin(ScrollTrigger);
  //title
  useEffect(() => {
    const element = refapp.current;
    gsap.fromTo(
      element.querySelector('.resultsShow__img'),
      {
        //opacity: 0.6,
        translateY: 0,
      },
      {
        //opacity: 1,
        translateY: 300,
        duration: 1,
        //delay: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.resultsShow'),
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          //markers: true,
        },
      },
    );
  }, []);
  return (
    <div className="resultsShow">
      <div className="resultsShow__img">
        <Dote />
      </div>

      <h2 className="resultsShow__title">Все книги</h2>
      {status === 'loading' ? <div>loading</div> : <ResultsListItems />}
    </div>
  );
}
