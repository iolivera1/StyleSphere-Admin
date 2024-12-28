import { redirect } from 'next/navigation';
import { auth } from "@clerk/nextjs/server";

import prismadb from '@/lib/prismadb';

type Params = Promise<{ storeId: string }>;

export default async function SetupLayout(props: { children: React.ReactNode; params: Params }) {
  const params = await props.params;
  const { storeId } = params;

  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId,
    }
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  return (
    <>
      {props.children}
    </>
  );
}