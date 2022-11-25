import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Flex, Heading, IconButton, Link, SystemStyleObject, Text, useMediaQuery } from "@chakra-ui/react";
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

    const catTextStyle: SystemStyleObject = {
        fontSize: "1rem",
        color: "#006699" //should get color from theme instead
    }

    const iconButtonStyle: SystemStyleObject = {
        color: 'white',
        borderRadius: '50%'
    }

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
                                variant="primary"
                            />
                            <Text sx={catTextStyle}>{category.title}</Text>
                        </SwiperSlide>
                    ))}
                </Swiper> :
                <Flex w="100%" justifyContent="center" className="swiperStyle">
                    <Box>
                        <Flex justifyContent="space-between">
                            <Heading as="h4" size="sm">Utforska efter kategori</Heading>
                            <Link display="flex">
                                <Heading as="h4" size="sm">Alla annonser</Heading>
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
                                        variant="primary"
                                    />
                                    <Text sx={catTextStyle}>{category.title}</Text>
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