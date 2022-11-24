import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IconButton } from "@chakra-ui/react";
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

    //Currently using inline style since swiper doesn't have sx prop, fix this.
    const swiperStyle: React.CSSProperties = {
        width: '100%',
        height: '100%'
    }

    const swiperSlide: React.CSSProperties = {
        textAlign: 'center',
        userSelect: 'none',
        fontSize: '18px',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        WebkitBoxPack: 'center',
        WebkitJustifyContent: 'center',
        justifyContent: 'center',
        WebkitBoxAlign: 'center',
        WebkitAlignItems: 'center',
        alignItems: 'center'
    }

    const swiperImage: React.CSSProperties = {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }

    // issue: navigation buttons dont work and cant drag unless emulating mobile
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={0}
                style={swiperStyle}
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.title} style={swiperSlide}>
                        <IconButton
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