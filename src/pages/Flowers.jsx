import React, { useEffect } from "react";

const Flowers = () => {
  useEffect(() => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  }, []);

  return (
    <div className="body-div">
      <div className="container">
        <div
          className="night"
          style={{
            filter: "blur(0.2vmin)",
          }}
        ></div>
        <div className="flowers">
          {[...Array(3)].map((_, index) => (
            <div key={index} className={`flower flower--${index + 1}`}>
              <div className={`flower__leafs flower__leafs--${index + 1}`}>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`flower__leaf flower__leaf--${i + 1}`}
                  ></div>
                ))}
                <div className="flower__white-circle"></div>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`flower__light flower__light--${i + 1}`}
                  ></div>
                ))}
              </div>
              <div className="flower__line">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`flower__line__leaf flower__line__leaf--${
                      i + 1
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}

          <div className="grow-ans" style={{ "--d": "1.2s" }}>
            <div className="flower__g-long">
              <div className="flower__g-long__top"></div>
              <div className="flower__g-long__bottom"></div>
            </div>
          </div>

          {[...Array(2)].map((_, index) => (
            <div key={index} className="growing-grass">
              <div className={`flower__grass flower__grass--${index + 1}`}>
                <div className="flower__grass--top"></div>
                <div className="flower__grass--bottom"></div>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`flower__grass__leaf flower__grass__leaf--${
                      i + 1
                    }`}
                  ></div>
                ))}
                <div className="flower__grass__overlay"></div>
              </div>
            </div>
          ))}

          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="grow-ans"
              style={{ "--d": `${2.4 + index * 0.4}s` }}
            >
              <div className={`flower__g-right flower__g-right--${index + 1}`}>
                <div className="leaf"></div>
              </div>
            </div>
          ))}

          <div className="grow-ans" style={{ "--d": "2.8s" }}>
            <div className="flower__g-front">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${
                    i + 1
                  }`}
                >
                  <div className="flower__g-front__leaf"></div>
                </div>
              ))}
              <div className="flower__g-front__line"></div>
            </div>
          </div>

          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`long-g long-g--${index}`}
              style={{ "--d": `${3 + index * 0.2}s` }}
            >
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`grow-ans`}
                  style={{ "--d": `${3 + i * 0.2}s` }}
                >
                  <div className={`leaf leaf--${i}`}></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flowers;
