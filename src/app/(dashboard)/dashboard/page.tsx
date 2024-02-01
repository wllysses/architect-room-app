import Link from "next/link";
import { FolderKanbanIcon, SquareUserIcon, UserIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <>
      <main className="mt-8 w-full container mx-auto min-h-[50vh] flex items-center justify-center flex-col gap-4">
        <h2 className="font-bold text-3xl">Escolha uma das opções</h2>
        <div className="mt-4 w-full flex items-center justify-center gap-4 flex-wrap">
          <Card className="p-4 max-w-[180px] h-[180px] cursor-pointer bg-secondary w-full">
            <Link
              href="/dashboard"
              className="w-full h-full flex items-center justify-center flex-col gap-2"
            >
              <UserIcon size={50} />
              <span className="font-semibold text-xl">Usuário</span>
            </Link>
          </Card>
          <Card className="p-4 max-w-[180px] h-[180px] cursor-pointer bg-secondary w-full">
            <Link
              href="/dashboard/profile"
              className="w-full h-full flex items-center justify-center flex-col gap-2"
            >
              <SquareUserIcon size={50} />
              <span className="font-semibold text-xl">Perfil</span>
            </Link>
          </Card>
          <Card className="p-4 max-w-[180px] h-[180px] cursor-pointer bg-secondary w-full">
            <Link
              href="/dashboard"
              className="w-full h-full flex items-center justify-center flex-col gap-2"
            >
              <FolderKanbanIcon size={50} />
              <span className="font-semibold text-xl">Projetos</span>
            </Link>
          </Card>
        </div>
      </main>
    </>
  );
}
