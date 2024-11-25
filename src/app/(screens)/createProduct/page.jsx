import FormCreateProduct from "@/components/ui/formCreateProduct";

export default function CreateProduct() {
  return (
    <div>
      <div className="h-20 w-full bg-blue-700  flex items-center justify-center">
        <div className="relative w-[330px] h-[50px] flex items-center justify-center top-[50px] bg-white shadow-lg rounded-lg">
          <span className="text-lg font-semibold text-black text-center">
            Novo Produto
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <FormCreateProduct />
      </div>
    </div>
  );
}
