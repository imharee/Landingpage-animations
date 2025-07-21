import MousePointer from '@/assets/images/icons/MousePointer';
import { twMerge } from 'tailwind-merge';

export default function Pointer (props:{
    name:string; color?: "red"| "blue"
}){

    const {name, color}= props
    return(
        <div className='relative'>
        <MousePointer/>
        <div className='absoute top-full left-full'> 
            <div className={twMerge('inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none',
                color==="red" && "bg-red-500")}>{name}</div>
        </div>
        </div>
    )

}