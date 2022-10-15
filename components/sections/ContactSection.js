import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SectionHeading from "../small_components/SectionHeading";
import Button from "../small_components/Button";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-web";
import planeAnimation from "../../public/loading_plane.json";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      msg: "",
    },
  });

  const [formRes, setFormRes] = useState({
    res: "",
    error: null,
    loading: false,
  });

  const handleFormSubmit = (data) => {
    setFormRes({ ...formRes, loading: true });
    // console.table(data);
    emailjs
      .send("service_ndakti6", "template_qljdqwq", data, "gVrSzAtgtkm6O9BTH")
      .then(
        (response) => {
          if (response.text === "OK") {
            setFormRes({ ...formRes, res: "OK", loading: false });
            // reset the form feilds
            reset();
          }
        },
        (err) => {
          setFormRes({ ...formRes, error: err, loading: false });
          console.log("FAILED...", err);
        }
      );
  };

  // !NOTE add env var

  // Lottie animation stuff

  const animContainer = useRef();
  const anim = useRef(null);
  useEffect(() => {
    if (animContainer.current) {
      anim.current = Lottie.loadAnimation({
        name: "Plane animation",
        container: animContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: planeAnimation,
      });
    }
    return () => anim.current?.destroy();
  }, []);

  if (formRes.loading) {
    anim?.current?.play();
  } else {
    anim?.current?.stop();
  }
  return (
    <section
      className="bg-darkBlue   h-full w-full p-5 sm:mt-10 md:mt-0"
      id="contact"
    >
      <SectionHeading headingName={"Contact"} />
      <div className="text-textGray font-roboto   mx-auto flex  h-full   w-full flex-col justify-start py-8 md:px-10 lg:mt-12">
        <div className="mx-auto w-[100%]">
          <h4 className="font-noto text-4xl font-bold">Liked my work?</h4>
          <p className="mt-4 text-lg">
            Reach out to me @{" "}
            <a href="mailto:parshant.dhall@gmail.com" className="text-pinkish">
              parshant.dhall@gmail.com
            </a>{" "}
            or just filing out the below form 👇.
          </p>
        </div>
        <div className=" ml mx-auto mt-9 w-[90%] p-[inherit] lg:mx-0 lg:ml-6 lg:w-[60%] xl:w-[50%]">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col justify-evenly"
          >
            <div className="w-full">
              <label
                htmlFor="name"
                className="text-textGray font-roboto block text-lg font-semibold"
              >
                Your Name ?
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required.",
                  minLength: {
                    value: 4,
                    message: "Name should be atleast 4 characters long",
                  },
                })}
                className={`text-pinkish ${
                  errors.name
                    ? "border-r-8 border-r-[#b91c1c]"
                    : "border-r-lightBlue border-r-4"
                }  my-3 w-full rounded-sm  bg-[#ece5e517] px-4 py-4`}
              />
              {errors.name ? (
                <p role="input error" className="my-2 text-[#ef4444]">
                  {errors.name.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-textGray font-roboto block text-lg font-semibold"
              >
                Your Email ?
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required.",
                  minLength: {
                    value: 7,
                    message: "Please enter a valid email.",
                  },
                })}
                className={`text-pinkish ${
                  errors.email
                    ? "border-r-8 border-r-[#b91c1c]"
                    : "border-r-lightBlue border-r-4"
                }  my-3 w-full rounded-sm  bg-[#ece5e517] px-4 py-4`}
              />
              {errors.email ? (
                <p role="input error" className="my-2 text-[#ef4444]">
                  {errors.email.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-textGray font-roboto block text-lg font-semibold"
              >
                What would you like to say ?
              </label>
              <textarea
                {...register("msg", {
                  required: "Please enter a valid message",
                })}
                cols="40"
                rows="6"
                className={`text-pinkish  my-3 w-full rounded-sm ${
                  errors.msg
                    ? "border-r-8 border-r-[#b91c1c]"
                    : "border-r-lightBlue border-r-4"
                } bg-[#ece5e517] px-4 py-4`}
              ></textarea>
              {errors.msg ? (
                <p role="input error" className="my-2 text-[#ef4444]">
                  {errors.msg.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="w-1/3 py-4">
              <div
                ref={animContainer}
                className={`${formRes.loading ? "block" : "hidden"}`}
              ></div>
              {formRes.loading ? (
                ""
              ) : (
                <Button
                  bgColor={formRes.res === "OK" ? "#43E97B" : "#F14DC3"}
                  content={formRes.res === "OK" ? "Submitted" : "Submit"}
                  icon={formRes.res === "OK" ? "FaCheck" : ""}
                  type="submit"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
