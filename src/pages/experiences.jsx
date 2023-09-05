import { useState, useEffect, useCallback } from "react";

import { useRouter } from "next/router";
import Fuse from "fuse.js";
import Timeline from "@/components/Timeline";

const experience = () =>{
    const router = useRouter();

    return(
    <>
        <Timeline/>
    </>
    )
}

export default experience