import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IconButton, SystemStyleObject, Text } from "@chakra-ui/react";
import { DirectionsCar, PhoneIphone, SportsTennis, Checkroom, Hardware, Celebration } from '@mui/icons-material';
import { Navigation } from "swiper";


const categories = [
    {
        title: 'Fordon',
        icon: DirectionsCar
    },
    {
        title: 'Teknik',
        icon: PhoneIphone
    },
    {
        title: 'Fritid',
        icon: SportsTennis
    },
    {
        title: 'Mode',
        icon: Checkroom
    },
    {
        title: 'Verktyg',
        icon: Hardware
    },
    {
        title: 'Övrigt',
        icon: Celebration
    },
]

const CategoryCarousel = () => {

    const iconButtonStyle: SystemStyleObject = {
        background: '#006699',
        color: 'white',
        borderRadius: '50%'
    }

    // Use theme instead of manually entering color.
    return (
        <>
        {/* If mobile then swiper, if not then no swiper */}
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={-20}
                className="swiperStyle"
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.title} className="swiperSlide">
                            <IconButton
                                sx={iconButtonStyle}
                                aria-label={"Category select"}
                                icon={<category.icon />}
                            />
                            <Text color="#006699">{category.title}</Text>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
};

export default CategoryCarousel;