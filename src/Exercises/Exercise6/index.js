import React, { Fragment, useCallback, useEffect, useState } from "react";
import "h8k-components";

import { image1, image2, image3, image4 } from "./assets/images";
import { Thumbs, Viewer } from "./components";

const title = "Catalog Viewer";

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1,
    },
    {
      thumb: image2,
      image: image2,
    },
    {
      thumb: image3,
      image: image3,
    },
    {
      thumb: image4,
      image: image4,
    },
  ];

  const [catalogs] = useState([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDuration] = useState(3000);
  const [startSlideShow, setStartSlideShow] = useState(false);
  const [to, setTo] = useState();

  /** @param {'previous' | 'next'} to */
  const handleActiveIndex = useCallback(
    (to) => {
      setTo(to);
      setActiveIndex((state) => {
        if (state === 0 && to === "previous") return catalogsList.length - 1;
        if (state === 3 && to === "next") return 0;

        return to === "previous" ? state - 1 : state + 1;
      });
    },
    [catalogsList.length]
  );

  /** @param {number} index */
  const handleCallback = (index) => {
    setActiveIndex(() => index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === 0) return handleActiveIndex("next");
      if (activeIndex === 3) return handleActiveIndex("previous");

      handleActiveIndex(to);
    }, slideDuration);

    if (!startSlideShow) clearInterval(interval);

    return () => clearInterval(interval);
  }, [activeIndex, handleActiveIndex, slideDuration, startSlideShow, to]);

  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center mt-75">
        <div className="layout-row justify-content-center">
          <div className="card pt-25">
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className="layout-row justify-content-center align-items-center mt-20">
              <button
                className="icon-only outlined"
                data-testid="prev-slide-btn"
                onClick={handleActiveIndex.bind(App, "previous")}
              >
                <i className="material-icons">arrow_back</i>
              </button>
              <Thumbs
                handleCallback={handleCallback}
                items={catalogs}
                setCurrentIndex={setActiveIndex}
                currentIndex={activeIndex}
              />
              <button
                className="icon-only outlined"
                onClick={handleActiveIndex.bind(App, "next")}
                data-testid="next-slide-btn"
              >
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className="layout-row justify-content-center mt-25">
          <input
            type="checkbox"
            onClick={() => setStartSlideShow((state) => !state)}
            data-testid="toggle-slide-show-button"
          />
          <label className="ml-6">Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
