import React from "react";

const Timeline = () => {
  return (
    <>
      <div className="container" id="academic">
        <div className="row text-center justify-content-center mb-5">
          <div className="col-xl-6 col-lg-8">
            <h2 className="font-weight-bold">Academic Information</h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div
              className="timeline-steps aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="timeline-step">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2003"
                >
                  <div className="inner-circle"></div>
                  <p className="h6 mt-3 mb-1">2070 BS</p>
                  <p className="h6 text-muted mb-0 mb-lg-0">
                    School Graduation
                  </p>
                  <p> Everest Sec. Boarding School</p>
                </div>
              </div>
              <div className="timeline-step">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2004"
                >
                  <div className="inner-circle"></div>
                  <p className="h6 mt-3 mb-1">2070-2073</p>
                  <p className="h6 text-muted mb-0 mb-lg-0">+2 Graduation</p>
                </div>
                <p>Pinnacle College</p>
              </div>
              <div className="timeline-step">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2005"
                >
                  <div className="inner-circle"></div>
                  <p className="h6 mt-3 mb-1">2073-present</p>
                  <p className="h6 text-muted mb-0 mb-lg-0">Bachelor</p>
                  <p>Himalaya College of Enginerring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
