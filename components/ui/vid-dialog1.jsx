import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function VidDialog1({
  videoSrc,
  videoThumbnailSrc,
  videoThumbnailAlt,
  animationStyle = 'from-center',
  className = '', // Optional additional class
}) {
  return (
    <div className={`${className} relative  z-index--1 `}>
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle={animationStyle}
        videoSrc={videoSrc}
        thumbnailSrc={videoThumbnailSrc}
        thumbnailAlt={videoThumbnailAlt}
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle={animationStyle}
        videoSrc={videoSrc}
        thumbnailSrc={videoThumbnailSrc}
        thumbnailAlt={videoThumbnailAlt}
      />
    </div>
  );
}
