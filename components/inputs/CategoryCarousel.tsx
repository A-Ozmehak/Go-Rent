import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IconButton, SystemStyleObject } from "@chakra-ui/react";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Navigation } from "swiper";


const categories = [
    {
        title: 'Fordon',
        icon: DirectionsCarIcon
    },
    {
        title: 'Teknik',
        icon: DirectionsCarIcon
    },
    {
        title: 'Fritid',
        icon: DirectionsCarIcon
    },
    {
        title: 'Mode',
        icon: DirectionsCarIcon
    },
    {
        title: 'Verktyg',
        icon: DirectionsCarIcon
    },
    {
        title: 'Övrigt',
        icon: DirectionsCarIcon
    },
]

const CategoryCarousel = () => {

    const iconButtonStyle: SystemStyleObject = {
        background: 'blue'
    }

    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={0}
                className="swiperStyle"
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.title} className="swiperSlide">
                        <IconButton
                            sx={iconButtonStyle}
                            aria-label={"Category select"}
                            icon={<category.icon />}
                        />
                        <span>{category.title}</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
};

export default CategoryCarousel;