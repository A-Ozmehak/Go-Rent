import {
  Box,
  Flex,
  Heading,
  IconButton,
  SystemStyleObject,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  Celebration,
  Checkroom,
  Construction,
  DirectionsCar,
  House,
  NavigateNext,
  Smartphone,
  SportsTennis,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCategories } from "../pages/api/categories";
import { CategoryDoc } from "../utils/interface";

const icons = {
  Celebration,
  House,
  DirectionsCar,
  Construction,
  SportsTennis,
  Checkroom,
  Smartphone,
};

const SubHeader = () => {
  const [categories, setCategories] = useState<CategoryDoc[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  let removeSubHeader = false;

  if (
    router.pathname === "/profile/[profile]" ||
    router.pathname === "/createListing" ||
    router.pathname === "/login" ||
    router.pathname === "/register"
  ) {
    removeSubHeader = true;
  }

  const getIcon = (icon: string) => {
    if (icon === "Celebration") {
      return <Celebration />;
    }
    if (icon === "House") {
      return <House />;
    }
    if (icon === "DirectionsCar") {
      return <DirectionsCar />;
    }
    if (icon === "Construction") {
      return <Construction />;
    }
    if (icon === "SportsTennis") {
      return <SportsTennis />;
    }
    if (icon === "Checkroom") {
      return <Checkroom />;
    }
    if (icon === "Smartphone") {
      return <Smartphone />;
    }
  };

  const [mediaQ600] = useMediaQuery("(max-width: 600px)");

  const categoriesLarge: SystemStyleObject = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  };

  const catTextStyle: SystemStyleObject = {
    fontSize: "1rem",
    color: "#005799",
  };

  return (
    <Box display={removeSubHeader ? "none" : "block"}>
      {mediaQ600 ? (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={-20}
          className="swiperStyle"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.name} className="swiperSlide">
              <Link href={`/category/${category.id}`} className="swiperSlide">
                <Box className="swiperSlide">
                  <IconButton
                    mt={2}
                    aria-label={"Category select"}
                    icon={getIcon(category.icon)}
                    variant="iconBg"
                  />
                  <Text sx={catTextStyle}>{category.name}</Text>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Flex w="100%" justifyContent="center" className="swiperStyle">
          <Box>
            <Flex justifyContent="space-between">
              <Heading as="h4" size="sm">
                Utforska efter kategori
              </Heading>
              <Link href="/listings">
                <Flex>
                  <Heading as="h4" size="sm">
                    Alla annonser
                  </Heading>
                  <NavigateNext />
                </Flex>
              </Link>
            </Flex>
            <Box sx={categoriesLarge}>
              {categories.map((category) => (
                <Link
                  href={`/category/${category.id}`}
                  key={category.name}
                  className="swiperSlide"
                >
                  <Box className="swiperSlide">
                    <IconButton
                      mt={2}
                      aria-label={"Category select"}
                      icon={getIcon(category.icon)}
                      variant="iconBg"
                    />
                    <Text sx={catTextStyle}>{category.name}</Text>
                  </Box>
                </Link>
              ))}
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default SubHeader;
