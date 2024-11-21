import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex">

      <Sidebar />
      <main className="flex-1 p-4 md:p-8 md:ml-64">
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          fringilla, turpis ac aliquam luctus, arc
        </p>
        <Button>Click me</Button>
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="placeholder"
          width={200}
          height={200}
        />
      </main>
    </div>
  );
}
