import { ReactNode } from "react";
import Navbar from "./components/Navbar";


export default function Layout({children} : {children : ReactNode}){
    return(
        <>
            <Navbar/>
            <div className="mt-20 print:mt-0 ">
                {children}
            </div>
        </>
    )
}