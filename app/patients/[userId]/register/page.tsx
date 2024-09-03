import RegisterForm from '@/components/forms/RegisterForm';
import { getUser } from '@/lib/actions/patient.actions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  console.log(1, userId);
  console.log(2, user);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[496px] flex-1 flex-col py-10">
          <Image src="/assets/icons/logo-full.svg" width={1000} height={1000} alt="patient" className="mb-12 h-10 w-fit" />

          <RegisterForm user={user} />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">ⓒ 2024 CarePulse</p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image src="/assets/images/register-img.png" width={1000} height={1000} alt="patient" className="side-img max-w-[50%]" />
    </div>
  );
};

export default Register;
