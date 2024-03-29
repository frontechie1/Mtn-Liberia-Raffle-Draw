import React, { useState } from "react";

import { Images } from "../../Assets";
import { MtnButton } from "../../components/MtnButton";

export const Login = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //   const formErrorEvent = (type: string, data: any) => {
  //     const { identifier, message } = data;
  //     const newList = [
  //       ...errorList?.filter((x) => x.id != identifier),
  //       { id: identifier, message },
  //     ];
  //     console.log(newList);
  //     if (type == "error") setErrorList(newList);
  //     if (type == "clear")
  //       setErrorList(newList.filter((x) => x.id != identifier));
  //   };

  const onBeforeNext = (stage: number, data: number | string) => {
    console.log(stage, data);
    return true;
  };

  const onSubmit = async (stage: number, data: number | string) => {
    console.log(stage, data);
    // const validations: IBulkValidation = [
    //   {
    //     id: "username",
    //     rules: [{ rule: "empty", message: "A username is required" }],
    //   },
    //   {
    //     id: "password",
    //     rules: [{ rule: "empty", message: "A username is required" }],
    //   },
    // ];
    // if (!isFormValid(formWizard.formId, validations, formErrorEvent))
    //   return false;

    // try {
    //   setIsLoading(true);
    //   const res = await VerifyUser(data.username, data.password);
    //   console.log(res?.data?.success);
    //   showToast(res?.data?.responseMessage, res?.data.success);
    //   setIsLoading(false);
    //   // if (!res.data.success) return toast.Error("Login", res.data.responseMessage);
    // //   var data = res.data.data;

    //   setToken(data?.authorization?.token, data?.authorization?.expiry);
    //   // dispatch(
    //   //   setUser({ roles: data.user.role, username: data.user.username })
    //   // );
    //   dispatch(setUser({ roles: [], username: data.username }));
    // } catch (error) {
    //   setIsLoading(false);
    //   console.log(error);
    //   //toast.Error("Login", 'An error occured processing request');
    // }
  };

  return (
    <>
      <div className="flex">
        <div
          className="flex items-center w-full h-screen bg-yellow-500 bg-repeat bg-cover"
          style={{
            backgroundImage: "url(" + Images.bannerImg + ")",
            backgroundSize: "70%",
          }}
        >
          <div className="w-full px-32 text-white"></div>
        </div>
        <div className="w-1/2 mt-10 px-28">
          <div className="flex align-center">
            <h4 className="my-auto text-2xl font-bold">MTN Raffle Draw</h4>
          </div>
          <div className="flex items-center h-screen">
            <div className="w-full">
              <div className="mb-10">
                <h3 className="text-3xl font-extralight">
                  It's good to have you back!
                </h3>
                <span className="text-gray-400">
                  Veuillez vous connecter à votre compte
                </span>
              </div>

              <form className="w-full">
                <div className="relative mb-3" data-twe-input-wrapper-init>
                  <input
                    type="number"
                    className="spin-button-none peer block min-h-[auto] w-full  py-[0.32rem] leading-[1.6] focus:outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Example label"
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Enter Phone Number
                  </label>
                </div>
                <div className="relative my-8" data-twe-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Example label"
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Enter Password
                  </label>
                </div>
                <div className="pt-1 pb-1 mb-12 text-center">
                  <MtnButton
                    className="w-full py-2 text-white bg-black form-wizard-submit disabled:bg-gray-200 disabled:shadow-none lg:px-20"
                    disabled={isLoading}
                    loading={isLoading}
                    type={"submit"}
                    label={"Login"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
