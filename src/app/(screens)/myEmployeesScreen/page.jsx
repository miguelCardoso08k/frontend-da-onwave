import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserRoundPlus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import EditEmployee from "@/components/ui/editEmployee";
import { getEmployees } from "@/services/api";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DeleteButton } from "@/components/ui/deleteButton";

export default async function MyEmployeesScreen() {
  const user = await getServerSession(nextAuthOptions);
  const employees = await getEmployees(user.id, user.token);

  // const employees = [
  //   {
  //     id: 1,
  //     firstname: "Cleyton",
  //     fixedPayment: 200,
  //     commissionProduct: 3,
  //     commissionProcedure: 4,
  //     cellphone: "11 96956-8931",
  //   },
  //   {
  //     id: 2,
  //     firstname: "Felipe",
  //     fixedPayment: 200,
  //     commissionProduct: 3,
  //     commissionProcedure: 40,
  //     cellphone: "11 96956-8931",
  //   },
  //   {
  //     id: 3,
  //     firstname: "Rogerio",
  //     fixedPayment: 200,
  //     commissionProduct: 30,
  //     commissionProcedure: 40,
  //     cellphone: "11 96956-8931",
  //   },
  //   {
  //     id: 4,
  //     firstname: "Paulo",
  //     fixedPayment: 200,
  //     commissionProduct: 2,
  //     commissionProcedure: 4,
  //     cellphone: "11 96956-8931",
  //   },
  // ];

  return (
    <div className="flex flex-col gap-2 ">
      <div className="h-20 w-full bg-blue-700  flex items-center justify-center">
        <div className="relative w-[330px] h-[50px] flex items-center justify-center top-[50px] bg-white shadow-lg rounded-lg">
          <span className="text-lg font-semibold text-black text-center">
            Meus Funcionários
          </span>
        </div>
      </div>
      <div className="pt-10 flex justify-center">
        <Carousel className="w-[65%] max-w-xs flex flex-col ">
          <CarouselContent>
            {employees.map((employee) => (
              <CarouselItem key={employee.id}>
                <Card className="p-4 pt-0">
                  <CardHeader className="px-0 pb-2 relative">
                    <CardTitle>{employee.firstname}</CardTitle>
                    <EditEmployee
                      id={user.id}
                      token={user.token}
                      employeeId={employee.id}
                    />
                  </CardHeader>
                  <div className="">
                    <CardContent className="pt-2 px-0 flex flex-col aspect-square items-center w-full">
                      <div className="flex flex-col gap-1 bg-blue-100/50 rounded-lg border-2 border-blue-600 w-full p-2">
                        <div className="text-left flex flex-col w-full">
                          <h3 className=" text-gray-700 text-xl font-semibold">
                            Contato:
                          </h3>
                          <div className="w-full flex justify-between">
                            <span className="text-sm">Celular</span>
                            <span className="text-sm">
                              +55 {employee.cellphone}
                            </span>
                          </div>
                        </div>
                        <hr className="bg-blue-600 h-[2px] mt-3" />
                        <div className="flex flex-col items-start w-full">
                          <h3 className="text-gray-700 text-xl font-semibold">
                            Pagamento:
                          </h3>

                          <div className="w-full flex justify-between">
                            <span>Fixo</span>
                            <span>R$ {employee.fixedPayment.toFixed(2)}</span>
                          </div>
                        </div>
                        <hr className="bg-blue-600 h-[2px] mt-3" />
                        <div className="flex flex-col items-start w-full">
                          <h3 className="text-gray-700 text-xl font-semibold">
                            Comissões:
                          </h3>
                          <div className="w-full flex justify-between">
                            <span>Corte</span>
                            <span>
                              {employee.commissionProcedure.toFixed(1)}%
                            </span>
                          </div>
                        </div>
                        <div className="w-full flex justify-between">
                          <span>Produto</span>
                          <span>{employee.commissionProduct.toFixed(1)}%</span>
                        </div>
                      </div>
                    </CardContent>

                    <div className="flex justify-center">
                      <Dialog>
                        <DialogTrigger className="bg-slate-100 shadow-md h-10 w-10 rounded-full flex justify-center items-center">
                          <Image
                            src="/lixeira.png"
                            alt="editarfinanças"
                            width={20}
                            height={20}
                          />
                        </DialogTrigger>
                        <DialogContent className="w-11/12 flex flex-col justify-between rounded-lg">
                          <DialogHeader>
                            <DialogTitle>Excluir Funcionário</DialogTitle>
                            <DialogDescription>
                              Tem certeza?
                              <br /> Essa ação não pode ser revertida
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter className="flex flex-row justify-evenly">
                            <DialogClose className="bg-primary text-primary-foreground h-10 rounded-md px-3 hover:bg-primary/90 ">
                              Cancelar
                            </DialogClose>
                            <DeleteButton
                              id={user.id}
                              employeeId={employee.id}
                              token={user.token}
                            />
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex items-center justify-center">
        <Button className="bg-blue-700 hover:bg-blue-800">
          <Link href="/createEmployee" className="flex items-center gap-2">
            Novo funcionário
            <UserRoundPlus />
          </Link>
        </Button>
      </div>
    </div>
  );
}
