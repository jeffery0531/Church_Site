// PhotoSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
];

export default function PhotoSlider() {
  return (
    <div
      style={{
        backgroundColor: '#f0f0f0', // 👉 背景颜色可以换成你想要的
        padding: '40px 0',          // 👉 上下留白一点好看
        display: 'flex',
        justifyContent: 'center'   // 👉 居中 Swiper
      }}
    >
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        style={{
          width: '80vw',
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
