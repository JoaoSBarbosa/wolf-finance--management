import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const Login = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src={"/logo-white.png"}
          height={39}
          width={173}
          alt="logo"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo à Nobre!</h1>
        <p className="text-muted-foreground mb-8">
          Acesse sua conta e descubra como nossa inteligência financeira pode
          transformar sua gestão de despesas e investimentos. Conecte-se agora e
          comece a tomar decisões mais inteligentes com facilidade!
        </p>
        <Button variant={"outline"}>
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>

      <div className="relative h-full w-full">
        <Image src={"/login.png"} alt="login" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Login;
