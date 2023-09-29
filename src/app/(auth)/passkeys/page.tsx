"use client";
import { FC, useEffect, useState } from "react";
import "@corbado/webcomponent/pkg/auth_cui.css";
interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // This will run only on client-side
    import("@corbado/webcomponent")
      .then((module) => {
        const Corbado = module.default || module;
        setSession(new Corbado.Session(process.env.NEXT_PUBLIC_PROJECT_ID));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Refresh the session whenever it changes
    if (session) {
      //@ts-ignore
      session.refresh(() => {});
    }
  }, [session]);
  return (
    <div className=" h-full w-full flex items-center justify-center">
      <div className="bg-white">
        <corbado-auth
          project-id={process.env.NEXT_PUBLIC_PROJECT_ID}
          conditional="yes"
        >
          <input
            name="username"
            id="corbado-username"
            data-input="username"
            required
            autoComplete="webauthn"
          />
        </corbado-auth>
      </div>
    </div>
  );
};

export default Page;
