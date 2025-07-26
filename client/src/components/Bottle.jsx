
const Bottle = ({name,image,quant,info,height,svg,width,mheight})=>{
    return (
        <div className="w-1/3 flex flex-col items-center justify-end" >
            <div className={`flex flex-col justify-center relative`} >
                <img className={`w-auto object-contain lg:[height:var(--bottle-height)] [height:var(--bottle-mheight)]`} style={{
                    '--bottle-height': height,
                    '--bottle-width': width,
                    '--bottle-mheight': mheight,
                    }} src={image} alt={name}/>
                
                <div className="relative my-4 lg:my-0 lg:absolute top-0 lg:-right-16 w-[97px] h-[40px] z-[-1]">
               
                <div className="relative w-full h-full">
                    
                   
                    <div className="lg:absolute inset-0 w-full h-full">
                    {svg}
                    </div>

                    
                    <div className="absolute inset-0 flex items-center justify-center text-[22px] text-black">
                            <p className="font-absolute font-normal" >
                             {quant}           
                            </p>
                    </div>

                </div>
                </div>



            </div>
            <div className="lg:mt-5" >
                <p className="text-center fontdfgghgr" >{info}</p>
                <p className="text-center fontdfgghgr" >{name}</p>
            </div>
        </div>
    )
}

export default Bottle