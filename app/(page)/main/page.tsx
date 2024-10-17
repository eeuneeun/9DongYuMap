import SwiperWithPager from "@/app/_components/swiper/swiperWithPager";
import MainHotThread from "@/app/_components/thread/mainHotThread";

export default function MainContents() {
  return (
    <div className="main">
      <SwiperWithPager />
      <MainHotThread />
    </div>
  );
}
