import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Flex, IconButton, Link, SystemStyleObject, Text, useMediaQuery } from "@chakra-ui/react";
import { DirectionsCar, PhoneIphone, SportsTennis, Checkroom, Hardware, Celebration, NavigateNext } from '@mui/icons-material';
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
    const [mediaQ600] = useMediaQuery('(max-width: 600px)')

    const categoriesLarge: SystemStyleObject = {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem'
    }

    const iconButtonStyle: SystemStyleObject = {
        background: '#006699',
        color: 'white',
        borderRadius: '50%'
    }

    // Use theme instead of manually entering color.
    return (
        <>
            {mediaQ600 ?
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
                </Swiper> :
                <Flex w="100%" justifyContent="center" className="swiperStyle">
                    <Box>
                        <Flex justifyContent="space-between">
                            <Text>Utforska efter kategori</Text>
                            <Link display="flex">
                                <Text>Alla annonser</Text>
                                <NavigateNext />
                            </Link>
                        </Flex>
                        <Box sx={categoriesLarge}>
                            {categories.map((category) => (
                                <Box key={category.title} className="swiperSlide">
                                    <IconButton
                                        sx={iconButtonStyle}
                                        aria-label={"Category select"}
                                        icon={<category.icon />}
                                    />
                                    <Text color="#006699">{category.title}</Text>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Flex>
            }
        </>
    )
};

export default CategoryCarousel;