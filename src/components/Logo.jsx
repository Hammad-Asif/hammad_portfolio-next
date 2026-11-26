import Image from 'next/image';

// Brand wordmark (public/hammad-logo-full.png, trimmed to its artwork).
// Height is set in CSS (.nav-logo-img); width follows the aspect ratio.
export const LOGO = { src: '/hammad-logo-full.png', width: 1119, height: 232 };

const Logo = ({ priority = false }) => (
  <Image
    src={LOGO.src}
    width={LOGO.width}
    height={LOGO.height}
    alt="Hammad Asif"
    className="nav-logo-img"
    sizes="180px"
    priority={priority}
  />
);

export default Logo;
