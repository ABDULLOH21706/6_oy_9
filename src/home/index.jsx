import React from "react";
import "../../src/index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import json from "../../src/.json";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[100%]">
      <header className="flex flex-col items-center justify-center w-[100%] gap-[20px]">
        <div className="flex items-center justify-center w-[100%] gap-[57px]">
          <div className="w-[113px]">
            <img
              src={
                "https://www.spot.uz/media/img/2022/04/hLeO0B16487901147503_b.jpg"
              }
              draggable="false"
            />
          </div>
          <button className="flex items-center justify-center bg-[#FFBE1F] rounded-[12px] h-[44px] pl-[10px] pr-[10px] gap-[5px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12H22"
                stroke="#A5B1BB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2 6H22"
                stroke="#A5B1BB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2 18H22"
                stroke="#A5B1BB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="hidden lg:block text-black text-[16px] font-[600]">
              Mahsulotlar katalogi
            </span>
          </button>
          <div className="flex items-center justify-center rounded-[12px] w-[400px] p-[2px] bg-[#FFBE1F]">
            <input
              type="text"
              id="search"
              className="w-[100%] rounded-[10px] outline-none bg-white h-[44px] pl-[10px] pr-[10px]"
              placeholder="Mahsulotlarni qidirish"
            />
            <label
              for="search"
              className="flex items-center justify-center w-[50px]"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </label>
          </div>
          <div className="flex flex-col items-center justify-end cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                stroke="#A5B1BB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p className="text-[13px] font-[400]">Savat</p>
          </div>
          <div className="flex flex-col items-center justify-end cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 4.61012C20.3292 4.09912 19.7228 3.69376 19.0554 3.4172C18.3879 3.14064 17.6725 2.99829 16.95 2.99829C16.2275 2.99829 15.5121 3.14064 14.8446 3.4172C14.1772 3.69376 13.5708 4.09912 13.06 4.61012L12 5.67012L10.94 4.61012C9.9083 3.57842 8.50903 2.99883 7.05 2.99883C5.59096 2.99883 4.19169 3.57842 3.16 4.61012C2.1283 5.64181 1.54871 7.04108 1.54871 8.50012C1.54871 9.95915 2.1283 11.3584 3.16 12.3901L4.22 13.4501L12 21.2301L19.78 13.4501L20.84 12.3901C21.351 11.8794 21.7563 11.2729 22.0329 10.6055C22.3095 9.93801 22.4518 9.2226 22.4518 8.50012C22.4518 7.77763 22.3095 7.06222 22.0329 6.39476C21.7563 5.7273 21.351 5.12087 20.84 4.61012V4.61012Z"
                fill="white"
                stroke="#A5B1BB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p className="text-[13px] font-[400]">Tanlangan</p>
          </div>
          <button className="border-[2px] border-[#FFBE1F] rounded-[12px] pl-[10px] pr-[10px] h-[44px]">
            Tizimga kirish
          </button>
          <div className="flex items-center justify-center">
            <p className="text-[18px] font-[600] cursor-pointer text-gray-400 hover:text-gray-500">
              RUS
            </p>
            <span className="text-[18px] font-[600] cursor-pointer text-gray-300">
              /
            </span>
            <p className="text-[18px] font-[600] cursor-pointer text-gray-400 hover:text-gray-500">
              UZB
            </p>
          </div>
        </div>
        <div className="w-[100%]">
          <div className="flex items-center justify-center w-[100%] whitespace-nowrap gap-[12px]">
            <div class="cursor-box move text-white">
              Smartfonlar va gadjetlar
            </div>
            <div class="cursor-box move text-white">
              Noutbook va kompyuterlar
            </div>
            <div class="cursor-box move text-white">
              Televizor va proyektorlar
            </div>
            <div class="cursor-box move text-white">Audio uskunalar</div>
            <div class="cursor-box move text-white">Transport</div>
            <div class="cursor-box move text-white">Setlar</div>
            <div class="cursor-box move text-white">Maishiy texnika</div>
            <div class="cursor-box move text-white">Oshxona jihozlari</div>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center w-[70%] mt-[60px] gap-[20px]">
        <div className="w-[100%] h-auto">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000, // 3 sekundda bir marta suring (millisekundlarda)
              disableOnInteraction: false, // Foydalanuvchi surganidan keyin ham avtomatik surishni davom ettirish
            }}
            className="mySwiper rounded-[10px]"
          >
            <SwiperSlide className="cursor-pointer">
              <img
                src={
                  "https://s3.fortifai.uz/shop/catalog/carousel/294/1744973342-Novinka_infinix_ru_1600%E2%95%A4%D0%95491.png"
                }
                alt=""
                draggable="false"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={
                  "https://s3.fortifai.uz/shop/catalog/carousel/215/1716885789-main_1600x491_ru.png"
                }
                alt=""
                draggable="false"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={
                  "https://s3.fortifai.uz/shop/catalog/carousel/250/1730379481-bosch_web_1600x491_RU.jpg"
                }
                alt=""
                draggable="false"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={
                  "https://s3.fortifai.uz/shop/catalog/carousel/292/1744378496-noutbuki-web-banner_1600%D1%85491_ru.png"
                }
                alt=""
                draggable="false"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={
                  "https://s3.fortifai.uz/shop/catalog/carousel/291/1744378310-%D0%A1%D0%B0%D0%B9%D1%82%20%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%201600%D1%85491-1.png"
                }
                alt=""
                draggable="false"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={
                  "https://s3.fortifai.uz/shop/catalog/carousel/282/1743045942-realme-web-banner_1600x491_ru.png"
                }
                alt=""
                draggable="false"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={
                  "https://s3.fortifai.uz/shop/catalog/carousel/268/1737111160-sokany_ru_1600%D1%85491.png"
                }
                alt=""
                draggable="false"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={
                  "https://s3.fortifai.uz/shop/catalog/carousel/216/1745324768-byd_1600%E2%95%A4%D0%95491_ru.png"
                }
                alt=""
                draggable="false"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex items-center justify-start gap-[20px] w-[100%]">
          <p className="text-[33px] font-[600]">Chegirmalar</p>
          <button className="text-blue-400 border-[1px] h-[44px] pl-[10px] pr-[10px] rounded-[10px]">
            Hammasini ko'rish
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-[20px] w-[100%]">
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[0].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[0].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[0].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[0].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[0].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[1].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[1].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[1].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[1].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[1].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[2].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[2].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[2].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[2].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[2].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[3].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[3].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[3].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[3].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[3].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[2].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[4].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[4].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[4].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[4].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[3].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[5].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[5].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[5].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[5].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[6].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[6].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[6].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[6].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[6].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[7].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[7].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[7].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[7].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[7].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[8].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[8].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[8].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[8].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[8].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[9].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[9].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[9].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[9].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[9].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[10].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[10].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[10].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[10].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[10].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[11].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[11].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[11].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[11].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[11].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[12].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[12].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[12].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[12].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[12].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[0].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[0].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[0].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[0].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[0].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
          <div className="flex flex-col items-start justify-between w-[250px] h-[450px] cursor-pointer gap-[5px]">
            <div className="flex items-start justify-center w-[100%] h-[290px]">
              <div className="rounded-[10px]">
                <img src={json[1].img} draggable="false" />
              </div>
            </div>
            <p className="text-[15px] font-[400]">{json[1].info}</p>
            <div className="rounded-[10px] pl-[10px] pr-[10px] bg-[#FFEDC2] border-[#FFCA48] border-[1px]">
              <p className="">dan {json[1].oyiga} so'm/oy</p>
            </div>
            <del className="text-[15px] text-[#A5B1BB]">
              {json[1].old_price} so'm
            </del>
            <p className="text-[#FF4444] text-[18px]">
              {json[1].active_price} so'm
            </p>
            <button className="flex items-center justify-center bg-[#FFD671] h-[50px] rounded-[10px] pl-[10px] pr-[10px] gap-[10px] w-[100%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#A5B1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-center text-[18px]">Savatchaga qo'shish</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
