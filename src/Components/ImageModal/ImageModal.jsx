import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
export default function ImageModal({
  imgM = "https://lh4.googleusercontent.com/CK5DI6Tcnoz4dqKVY4ymW8lZDwqY5zAmD3A92Mrd78s28DzYy6ED1khq2S99bysFJBihW3MH8WVeoKBv6DQKVRHp8azWgaWSAWaD6PM_KRZ435UVCYa2N7J2H6GI9OuKhEKQ0LrY",
  imgAlt = "there should be a picture here",
  isOpen,
  onRequestClose,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={imgM} alt={imgAlt} />;
    </Modal>
  );
}

/* const {
  urls: {
    regular = "https://lh4.googleusercontent.com/CK5DI6Tcnoz4dqKVY4ymW8lZDwqY5zAmD3A92Mrd78s28DzYy6ED1khq2S99bysFJBihW3MH8WVeoKBv6DQKVRHp8azWgaWSAWaD6PM_KRZ435UVCYa2N7J2H6GI9OuKhEKQ0LrY",
  },
  alt_description = "there should be a picture here",
} = imgM; */
