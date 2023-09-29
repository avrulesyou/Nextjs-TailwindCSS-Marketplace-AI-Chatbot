"use client";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import QrPopUpModal from "@/components/QrPopUpModal";
interface pageProps {
  searchParams: any;
}

const Page: FC<pageProps> = ({ searchParams }) => {
  const [username, setUsername] = useState<string>("");
  const [connectWallet, setConnectWallet] = useState<boolean>(false);
  const [linkWallet, setLinkWallet] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const { token, next } = searchParams;
    if (token) {
      localStorage.setItem("token", token as string);
      if (next == "home") {
        toast.success("Login success");
        redirect(`/${next}`);
      } else {
        setLinkWallet((prev) => !prev);
      }
    } else {
      router.push(`/sign-in`);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const handleClick = () => {
    if (username.length >= 4) {
      setConnectWallet(true);
    } else {
      toast.error("Username must be greater than 4 characters");
    }
  };

  return (
    <div className="w-full h-full md:flex md:items-center md:justify-center">
      {linkWallet ? (
        <div className="w-full px-5 py-4 md:px-10 flex flex-col items-center md:items-start gap-4 md:gap-5  md:max-w-md">
          <h1 className="gardient-color-green text-[2rem] font-semibold text-center">
            Setup your account
          </h1>
          <div className="w-full flex flex-col gap-2 ">
            <label
              htmlFor="usernameInput"
              className="text-white font-medium text-base"
            >
              Username
            </label>
            <Input
              id="usernameInput"
              placeholder="Ex: User123"
              required
              className="w-full"
              onChange={handleChange}
            />
          </div>
          <Button onClick={() => handleClick()} className="w-full">
            Connect Xumm{" "}
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full min-h-[calc(100vh-12rem)] md:min-h-screen   ">
          <Icons.loader className="animate-spin h-20 w-20  text-white" />
        </div>
      )}
      {connectWallet && (
        <QrPopUpModal
          onClose={() => setConnectWallet(false)}
          endpoint={"/v1/auth/oauth"}
          method={"PUT"}
          data={{ username }} //? apicall send json format
          socketChannel={"accountCreated"}
        />
      )}
    </div>
  );
};

export default Page;
