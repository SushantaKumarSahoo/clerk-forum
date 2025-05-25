"use client";
import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton , SignOutButton} from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import Link from "next/link";
// import {useUser} from "@clerk/nextjs";

const Navbar = () => {
    // const user = useUser();
    // console.log(user.user.username);
    return (

        <div className="flex justify-between items-center p-4 rounded-lg border-2 border-gray-200">

            <div>
                <Link href='/'> <span className="text-xl font-bold">ByteTalk</span></Link>


            </div>


            <div className="flex gap-4">
                <SignedOut>
                  <Button><SignInButton mode="modal" /></Button>
                    <Button><SignUpButton mode="modal" /></Button>
                </SignedOut>
                <SignedIn>
                   <Link href='/forums'> <Button>Forums</Button></Link>

                    <UserButton afterSignout='/' /> {/* Added afterSignOutUrl for redirect */}



                </SignedIn>
            </div>
        </div>
    );
};

export default Navbar;