import RestaurantNavbar from "../components/RestaurantNavbar";
import RestaurantMenu from "../components/RestaurantMenu";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getRestaurantMenu = async (slug: string) => {
  const menu = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!menu) {
    throw new Error();
  }

  return menu.items;
};

export default async function page({ params }: { params: { slug: string } }) {
  const items = await getRestaurantMenu(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} />
        <RestaurantMenu items={items} />
      </div>
    </>
  );
}
