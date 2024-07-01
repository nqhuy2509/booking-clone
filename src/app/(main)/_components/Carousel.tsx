import React from "react";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

export default function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={6}
        itemsToScroll={1}
        speed={400}
        easing="linear"
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            maxWidth: 768,
          },
          {
            itemsToShow: 2,
            itemsToScroll: 1,
            minWidth: 769,
            maxWidth: 1024,
          },
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 1025,
          },
          {
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 1025,
          },
          {
            itemsToShow: 5,
            itemsToScroll: 1,
            minWidth: 1025,
          },
          {
            itemsToShow: 6,
            itemsToScroll: 1,
            minWidth: 1025,
          },
        ]}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "25px",
            height: 40,
            lineHeight: 1,
            textAlign: "center",
            width: 40,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "25px",
            height: 40,
            lineHeight: 1,
            textAlign: "center",
            width: 40,
          },
          children: <span>{`<`}</span>,
        }}
      >
        <div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundImage: `url('/image/VungTau.jpg')`,
              backgroundSize: "cover",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          ></div>
          <h1 className="text-black font-bold text-xl">Vũng Tàu</h1>
        </div>

        <div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundImage: `url('/image/DaLat.jpg')`,
              backgroundSize: "cover",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          ></div>
          <h1 className="text-black font-bold text-xl">Đà Lạt</h1>
        </div>

        <div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundImage: `url('/image/DaNang.jpg')`,
              backgroundSize: "cover",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          ></div>
          <h1 className="text-black font-bold text-xl">Đà Nẵng</h1>
        </div>

        <div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundImage: `url('/image/TpHCM.jpg')`,
              backgroundSize: "cover",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          ></div>
          <h1 className="text-black font-bold text-xl">Tp. Hồ Chí Minh</h1>
        </div>

        <div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundImage: `url('/image/NhaTrang.jpg')`,
              backgroundSize: "cover",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          ></div>
          <h1 className="text-black font-bold text-xl">Nha Trang</h1>
        </div>

        <div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundImage: `url('/image/HaNoi.jpg')`,
              backgroundSize: "cover",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          ></div>
          <h1 className="text-black font-bold text-xl">Hà Nội</h1>
        </div>

        <div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundImage: `url('/image/PhanThiet.jpg')`,
              backgroundSize: "cover",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          ></div>
          <h1 className="text-black font-bold text-xl">Phan Thiết</h1>
        </div>
        <div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundImage: `url('/image/Hue.jpg')`,
              backgroundSize: "cover",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          ></div>
          <h1 className="text-black font-bold text-xl">Huế</h1>
        </div>
        <div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundImage: `url('/image/HoiAn.jpg')`,
              backgroundSize: "cover",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          ></div>
          <h1 className="text-black font-bold text-xl">Hội An</h1>
        </div>
        <div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundImage: `url('/image/HaLong.jpg')`,
              backgroundSize: "cover",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          ></div>
          <h1 className="text-black font-bold text-xl">Hạ Long</h1>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}
