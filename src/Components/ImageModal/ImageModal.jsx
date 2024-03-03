export default function ImageModal({ imgM }) {
  const {
    urls: {
      regular = "https://lh4.googleusercontent.com/CK5DI6Tcnoz4dqKVY4ymW8lZDwqY5zAmD3A92Mrd78s28DzYy6ED1khq2S99bysFJBihW3MH8WVeoKBv6DQKVRHp8azWgaWSAWaD6PM_KRZ435UVCYa2N7J2H6GI9OuKhEKQ0LrY",
    },
    alt_description = "there should be a picture here",
  } = imgM;

  return <img src={regular} alt={alt_description} />;
}
