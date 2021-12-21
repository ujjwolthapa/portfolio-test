import React from "react";
import { Card, Button } from "react-bootstrap";
import { Bounce, Roll } from "react-reveal";
const Work = () => {
  return (
    <>
      <div
        className="row text-center justify-content-center mb-5 "
        id="academic"
      >
        <div className="col-xl-6 col-lg-8">
          <Bounce bottom>
            <h2 className="font-weight-bold mb-5">Work Information</h2>
          </Bounce>
        </div>
      </div>
      <div className="row">
        {/* card1 */}
        <Roll>
          <div className="col-md-3">
            <div className="card text-center h-100 border-0 bg-primary">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="card-img-top"
              />
              <div className="bg-primary text-white">
                <h5 className="card-title">Intern on AndMine</h5>
                <p>Worked on Web development on Shopify,Wordpress</p>
              </div>
            </div>
          </div>
        </Roll>

        <Roll left delay={1000}>
          <div className="col-md-3">
            <div className="card text-center h-100 border-0 bg-primary">
              <img
                src="https://fedingo.com/wp-content/uploads/2021/06/django-iterate-through-list.png"
                alt=""
                className="card-img-top"
              />
              <div className="bg-primary text-white">
                <h5 className="card-title">Django</h5>
                <p>WeatherApp CV Generator</p>
              </div>
            </div>
          </div>
        </Roll>
        <Roll left delay={2000}>
          <div className="col-md-3">
            <div className="card text-center h-100 border-0 bg-primary">
              <img
                src="https://scontent.fktm2-1.fna.fbcdn.net/v/t1.6435-9/32170123_2049417895313802_8258118604260638720_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=y42UmLcKbh4AX8vqfiu&_nc_ht=scontent.fktm2-1.fna&oh=00_AT-otMV06O0NDS-iqjtrl_b5eKxmzsaqP8IT-GJ519fNHw&oe=61E69919"
                alt=""
                className="card-img-top"
              />
              <div className="bg-primary text-white">
                <h5 className="card-title">RealInfo Tech</h5>
                <p>Worked on Digital Marketing(VideoEditor)</p>
              </div>
            </div>
          </div>
        </Roll>

        <Roll left delay={3000}>
          <div className="col-md-3">
            <div className="card text-center h-100 border-0 bg-primary">
              <img
                src="https://pbs.twimg.com/profile_images/1163911054788833282/AcA2LnWL_400x400.jpg"
                alt=""
                className="card-img-top"
              />
              <div className="bg-primary text-white">
                <h5 className="card-title">Laravel</h5>
                <p>Blog</p>
              </div>
            </div>
          </div>
        </Roll>
      </div>
    </>
  );
};

export default Work;
