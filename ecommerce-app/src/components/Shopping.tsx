import {useRef, useEffect} from 'react';
import {mount} from "shopping/ShoppingIndex";

const Shopping =()=>{
    const divRef=useRef(null)
    useEffect(()=>{
        mount(divRef.current);
    },[])
    return <div ref={divRef}></div>
}

export default Shopping;