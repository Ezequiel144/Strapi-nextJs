"use client";

import Formulary from "@/components/Login/Formulary";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type InputLogin = {
  user: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<InputLogin>();
  const onSubmit: SubmitHandler<InputLogin> = async (dataEnter) => {
    //console.log(data);
    try {
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          identifier: dataEnter.user,
          password: dataEnter.password,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        //console.log(data);
        localStorage.setItem("token-user",data.jwt)
        router.push(`/dashboards/${data.user.id}`);
      }
    } catch (err) {
      console.log(err);
    }
    /* fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${API_TOKEN_UNLIMIT}`,
      },
      body: JSON.stringify({
        identifier: dataEnter.user,
        password: dataEnter.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          //alert("logeado");
          //console.log(response);
          //redirect(`/dashboards/home`);
          router.push(`/dashboards/${dataEnter.user}`);
        } else {
          alert("error");
          console.log(response)
        }
        response.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err)); */
  };
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <Formulary
        register={register}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
