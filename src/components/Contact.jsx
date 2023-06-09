import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Diamonds from "../assets/Diamonds.svg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Contact() {
  const diamonds = `${Diamonds}?t=${Date.now()}`;
  const controls = useAnimation();

  const form = useRef();

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.honey.value) {
      console.log("Honey pot triggered. Form not submitted.");
      return;
    }

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    emailjs
      .sendForm(
        "service_smu1wjr",
        "template_uda348p",
        form.current,
        "BnTKuvekJuvr8oWgo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Form submitted successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full flex justify-around px-6 py-8 "
      ref={ref}
    >
      <div className="flex justify-between flex-col  md:max-w-7xl md:flex-row">
        <motion.div
          className="md:w-1/2 md:flex md:flex-col md:justify-center"
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.75 }}
        >
          <h2 className="font-inter text-white font-black text-5xl mb-6 leading-loose">
            <span className="bg-tropical-gradient text-transparent bg-clip-text">
              Get in touch
            </span>
          </h2>
          <p className="font-inter text-white text-left mb-10 md:text-left md:w-2/3">
            Have a project in mind? Looking for a partner or work together?
            Reach out through the form or my social media and I’ll get you back
            as soon as I can.
          </p>
          <div className="flex flex-row justify-start gap-3">
            <motion.button
              ref={ref}
              initial={{ x: "-100vw" }}
              animate={controls}
              aria-label="Linkedin Profile"
            >
              <a
                href="https://www.linkedin.com/in/ayesha-yege/"
                aria-label="Linkedin"
              >
                <svg
                  width="45"
                  height="46"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.5"
                    width="45"
                    height="45"
                    rx="22.5"
                    fill="#00759D"
                  />
                  <g clip-path="url(#clip0_8_4199)">
                    <path
                      d="M16.459 32.375H11.9238V17.7705H16.459V32.375ZM14.189 15.7783C12.7388 15.7783 11.5625 14.5771 11.5625 13.127C11.5625 12.4304 11.8392 11.7623 12.3318 11.2698C12.8243 10.7772 13.4924 10.5005 14.189 10.5005C14.8855 10.5005 15.5536 10.7772 16.0462 11.2698C16.5387 11.7623 16.8154 12.4304 16.8154 13.127C16.8154 14.5771 15.6387 15.7783 14.189 15.7783ZM33.4326 32.375H28.9072V25.2656C28.9072 23.5713 28.873 21.3984 26.5493 21.3984C24.1914 21.3984 23.8301 23.2393 23.8301 25.1436V32.375H19.2998V17.7705H23.6494V19.7627H23.7129C24.3184 18.6152 25.7974 17.4043 28.0039 17.4043C32.5938 17.4043 33.4375 20.4268 33.4375 24.3525V32.375H33.4326Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_4199">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(10 10.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </motion.button>
            <motion.button
              ref={ref}
              initial={{ x: "-100vw" }}
              animate={controls}
            >
              <a href="https://github.com/Ayege" aria-label="Github">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="42" height="42" rx="21" fill="white" />
                  <g clip-path="url(#clip0_8_4216)">
                    <path
                      d="M17.3588 27.6973C17.3588 27.7935 17.2626 27.8622 17.1251 27.8622C16.9877 27.8622 16.8777 27.8622 16.8777 27.6973C16.8777 27.5324 16.9877 27.5324 17.1114 27.5324C17.2351 27.5324 17.3588 27.6011 17.3588 27.6973ZM15.9843 27.4912C15.9843 27.5874 15.9843 27.6973 16.1767 27.7248C16.2259 27.7484 16.2825 27.7516 16.334 27.7336C16.3856 27.7156 16.4279 27.6778 16.4516 27.6286C16.4516 27.5324 16.4516 27.4362 16.2592 27.395C16.0667 27.3538 16.0118 27.395 15.9843 27.4912ZM17.9361 27.4225C17.8124 27.4225 17.7299 27.5324 17.7437 27.6423C17.7574 27.7523 17.8674 27.7935 18.0048 27.766C18.1423 27.7385 18.211 27.6423 18.1973 27.5462C18.1835 27.45 18.0736 27.4088 17.9361 27.4225ZM20.8638 10.0009C19.4142 9.98722 17.9768 10.2665 16.6378 10.8218C15.2988 11.3772 14.0858 12.1972 13.0717 13.2327C12.0576 14.2682 11.2632 15.4979 10.7362 16.8478C10.2093 18.1978 9.96057 19.6402 10.0051 21.0886C9.9667 23.4613 10.6707 25.7867 12.0186 27.74C13.3666 29.6934 15.2912 31.1771 17.5237 31.984C18.0873 32.0802 18.2934 31.723 18.2934 31.4344C18.2934 31.1459 18.2934 29.5933 18.2934 28.6865C18.2934 28.6865 15.187 29.3735 14.5273 27.3126C14.5273 27.3126 14.0324 25.9386 13.3039 25.6501C13.3039 25.6501 12.2868 24.9357 13.3727 24.9494C13.7283 24.9973 14.0678 25.128 14.3638 25.3308C14.6598 25.5336 14.9041 25.803 15.0771 26.1173C15.2209 26.399 15.4208 26.6486 15.6645 26.8503C15.9083 27.0521 16.1907 27.202 16.4944 27.2907C16.7982 27.3795 17.1169 27.4053 17.431 27.3666C17.7451 27.3278 18.0479 27.2252 18.3209 27.0653C18.373 26.4917 18.6204 25.9533 19.0219 25.5402C16.5478 25.2517 14.0462 24.8944 14.0462 20.5115C14.0199 20.0164 14.0995 19.5213 14.2796 19.0594C14.4597 18.5975 14.7363 18.1791 15.0908 17.8324C14.7563 16.8266 14.7954 15.7341 15.2008 14.7547C16.1355 14.4525 18.2659 15.9775 18.2659 15.9775C20.0861 15.4644 22.0128 15.4644 23.8328 15.9775C23.8328 15.9775 25.9633 14.4525 26.898 14.7547C27.3123 15.7322 27.3513 16.8279 27.0079 17.8324C27.3751 18.1744 27.6662 18.5895 27.8628 19.051C28.0592 19.5125 28.1566 20.01 28.1488 20.5115C28.1488 24.9082 25.5372 25.2517 23.063 25.5402C23.3117 25.819 23.501 26.1456 23.6192 26.4999C23.7373 26.8542 23.7819 27.2289 23.7503 27.6011C23.7503 29.1399 23.7503 31.036 23.7503 31.407C23.7495 31.4997 23.7709 31.5913 23.813 31.674C23.8552 31.7568 23.9165 31.8282 23.9921 31.8821C24.0676 31.9361 24.1551 31.971 24.2469 31.9839C24.3389 31.9969 24.4326 31.9874 24.52 31.9565C26.7486 31.1566 28.6692 29.6772 30.0109 27.7271C31.3527 25.7771 32.0475 23.4548 31.9975 21.0886C32.0104 19.6255 31.731 18.1745 31.1755 16.8207C30.6201 15.467 29.7997 14.2377 28.7628 13.205C27.7259 12.1722 26.4929 11.3569 25.1365 10.8067C23.7801 10.2565 22.3275 9.98252 20.8638 10.0009ZM14.3211 25.6776C14.3211 25.6776 14.3211 25.8287 14.3211 25.9112C14.3364 25.9265 14.3546 25.9388 14.3747 25.947C14.3947 25.9554 14.4162 25.9597 14.4379 25.9597C14.4596 25.9597 14.4811 25.9554 14.5012 25.947C14.5212 25.9388 14.5394 25.9265 14.5548 25.9112C14.5548 25.9112 14.5548 25.76 14.5548 25.6638C14.5548 25.5677 14.3761 25.6226 14.3211 25.6776ZM13.84 25.3066C13.84 25.3066 13.84 25.444 13.9362 25.4852C13.9478 25.4997 13.9625 25.5112 13.9791 25.5192C13.9958 25.527 14.014 25.5313 14.0324 25.5313C14.0509 25.5313 14.0691 25.527 14.0857 25.5192C14.1024 25.5112 14.1171 25.4997 14.1287 25.4852C14.1287 25.4852 14.1287 25.3478 14.0324 25.3066C13.9362 25.2654 13.8675 25.2654 13.84 25.3066ZM15.2145 26.9279C15.2145 26.9279 15.2145 27.1202 15.2145 27.2164C15.2145 27.3126 15.4482 27.3263 15.5032 27.2164C15.5582 27.1065 15.5032 27.0241 15.5032 26.9279C15.5032 26.8317 15.3245 26.8592 15.2695 26.9279H15.2145ZM14.706 26.2546C14.706 26.2546 14.706 26.4195 14.706 26.5294C14.706 26.6394 14.8984 26.6806 14.9671 26.6394C15.0019 26.5994 15.0211 26.5481 15.0211 26.4951C15.0211 26.4421 15.0019 26.3908 14.9671 26.3508C14.8984 26.2409 14.7884 26.1997 14.706 26.2546Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_4216">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(10 10)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </motion.button>
            <motion.button
              ref={ref}
              initial={{ x: "-100vw" }}
              animate={controls}
            >
              <a href="mailto:ayege@frikiao.com" aria-label="Email to">
                <svg
                  width="45"
                  height="46"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.5"
                    width="45"
                    height="45"
                    rx="22.5"
                    fill="#F16529"
                  />
                  <g clip-path="url(#clip0_8_4245)">
                    <path
                      d="M16.9444 31.3334C15.8333 31.3334 14.7222 30.3611 14.1667 29.9445C11.3889 28 10.5556 27.3056 10 26.8889V32.7222C10 33.4892 10.622 34.1111 11.3889 34.1111H22.5C23.2669 34.1111 23.8889 33.4892 23.8889 32.7222V26.8889C23.3333 27.3056 22.5 28 19.7222 29.9445C19.1667 30.3611 18.0556 31.3334 16.9444 31.3334ZM22.5 23H11.3889C10.622 23 10 23.622 10 24.3889V25.0834C11.1111 25.9167 10.9722 25.9167 15 28.8334C15.4167 29.1111 16.25 29.9445 16.9444 29.9445C17.6389 29.9445 18.4722 29.1111 18.8889 28.9722C22.9167 26.0556 22.7778 26.0556 23.8889 25.2222V24.3889C23.8889 23.622 23.2669 23 22.5 23ZM33.6111 18.8334H19.7222C18.9553 18.8334 18.3333 19.4553 18.3333 20.2222V21.6111H22.5C23.9414 21.6111 25.1298 22.7144 25.2652 24.1207L25.2778 24.1111V29.9445H33.6111C34.378 29.9445 35 29.3225 35 28.5556V20.2222C35 19.4553 34.378 18.8334 33.6111 18.8334ZM32.2222 24.3889H29.4444V21.6111H32.2222V24.3889ZM16.9444 20.2222C16.9444 18.6906 18.1905 17.4445 19.7222 17.4445H29.4444V13.2778C29.4444 12.5109 28.8225 11.8889 28.0556 11.8889H14.1667C13.3997 11.8889 12.7778 12.5109 12.7778 13.2778V21.6111H16.9444V20.2222Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_4245">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(10 10.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          className="w-full relative items-center justify-center font-inter text-white text-xl font-bold py-4 md:w-1/2"
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.75 }}
        >
          <img
            src={diamonds}
            alt="Diamond bg"
            className="z-0 absolute h-full w-full inset-0 "
          ></img>
          <form ref={form} onSubmit={sendEmail} className="relative z-10">
            <label for="Name" className="block py-4 ">
              Name
            </label>
            <input
              className=" block w-full text-black bg-white rounded-lg h-10"
              aria-label="Name Input"
              type="text"
              name="user_name"
            />
            <label for="Email" className="block py-4">
              Email
            </label>
            <input
              type="email"
              aria-label="Email Input"
              name="user_email"
              className="block w-full rounded-lg h-10 text-black"
            />
            <input type="text" name="honey" style={{ display: "none" }} />
            <label for="Message" className="block w-full py-4">
              Message
            </label>
            <textarea
              name="message"
              aria-label="Message Input"
              className="z-10 block w-full text-black rounded-lg h-24 "
            />
            <div className="flex flex-row justify-center z-20 py-10 align-middle ">
              <input
                type="submit"
                value="Send"
                className="inline-block bg-white w-full px-6 py-2 text-2xl font-bold font-inter bg-tropical-gradient rounded-full shadow hover:bg-gray-800"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
