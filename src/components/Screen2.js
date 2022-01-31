import React from 'react';
import Loc from '../assets/Loc.png';
import scot from '../assets/scot.png';
import locg from '../assets/locg.png'



const Screen2 =()=>{
  return (

<div>
    <div class='w- screen h-screen'>
        <div class='border drop-shadow-2xl bg-[#FFFFFF] rounded-lg' style={{width:'1364px',height:'730px',marginLeft:'5%',marginTop:'60px'}}>
        <div class="ml-28 relative top-16 flex flex-row gap-6"><img src={Loc} alt='logo'style={{width:'51px',height:'73px'}}></img>
        <h1 class="text-5xl relative top-3 text-[#3B60C6] " style={{height:'68px'}}>IN-Transit</h1>
        <p class="border w-44 h-10 bg-[#F9C935] relative top-8 rounded-lg" style={{marginLeft:'50%'}}></p></div>


        <div class='flex flex-row gap-2 relative top-24 ml-28 text-md'>
            <p>Estimated Delivery:</p>
            <p class="text-[#3BC664]">Wednesday,Sep 29</p>
            <p style={{marginLeft:'52%'}} class="text-md">Tracking ID:53454674637</p>
        </div>
        <div class='flex flex-row gap-2 relative top-28 ml-28'>
            <p class="text-[#4B4B4B]">Last updated:</p>
            <p class='text-sm text-black'>September 27 at 10:30AM IST</p>
        </div>

      <div class='w-1/4 relative top-52 left-28'>
        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-[#F9C935] bg-[#F9C935]"></p>
        <p class='border border-dashed border-yellow-300 w-52 ml-5 relative bottom-2'></p>
        <div class='flex flex-col relative top-4 '>
          <img src={Loc} style={{width:'4%'}}></img>
          <p class='text-[black] relative right-6'>Zirakhpur</p>
          <p class='text-[#919191] relative right-4' >29 Oct</p>
        </div>
      </div>
        

        <div>
          <img src={scot} style={{marginLeft:'64%',marginTop:'4%'}}></img>
        </div>
        
        <div class='w-1/4 relative top-5' style={{marginLeft:'25%'}}>
        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-[#F9C935] bg-[#F9C935]"></p>
        <p class='border border-dashed border-yellow-300 w-64 ml-5 relative bottom-2'></p>
        <div class='flex flex-col relative top-4 '>
          <img src={Loc} style={{width:'4%'}}></img>
          <p class='text-[black] relative right-6'>Zirakhpur</p>
          <p class='text-[#919191] relative right-4' >29 Oct</p>
        </div>
      </div>


      <div class='w-1/4 relative bottom-16'style={{marginLeft:'45%'}} >
        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-[#F9C935] bg-[#F9C935]"></p>
        <p class='border border-dashed border-yellow-300 w-64 ml-5 relative bottom-2'></p>
        <div class='flex flex-col relative top-4 '>
          <img src={locg} style={{width:'4%'}}></img>
          <p class='text-[black] relative right-6'>Zirakhpur</p>
          <p class='text-[#919191] relative right-4' >29 Oct</p>
        </div>
      </div>


      <div class='w-1/4 relative bottom-36'style={{marginLeft:'65%'}} >
        < p class="border-2 rounded-full h-4 w-4 ring-2 relative bottom-1 ring-[#F9C935] bg-[#F9C935]"></p>
        <p class='border border-dashed border-gray-300 w-48 ml-5 relative bottom-3'></p>
        <div class='flex flex-col relative top-4 '>
          <img src={locg} style={{width:'4%'}}></img>
          <p class='text-[black] relative right-6'>Zirakhpur</p>
          <p class='text-[#919191] relative right-4' >29 Oct</p>
        </div>
      </div>



      <div class='w-1/4 relative bottom-56'style={{marginLeft:'80%'}} >
        < p class="border-2 rounded-full h-4 w-4 ring-2 relative bottom-1 ring-[#C4C4C4] bg-[#C4C4C4]"></p>
        <div class='flex flex-col relative top-4 '>
          <img src={locg} style={{width:'4%'}}></img>
          <p class='text-[black] relative right-6'>Zirakhpur</p>
          <p class='text-[#919191] relative right-4' >29 Oct</p>
        </div>
      </div>


       <p class="text-[black] text-lg ml-24 relative bottom-44">Your Shipment Details</p>

       <div class='border drop-shadow-2xl bg-[#F9C93526] rounded-lg relative bottom-36 ml-24' style={{width:'80%',height:'23%'}}>

       <p class='text-[black] relative left-12 top-5'>Order ID</p><br></br>
       <p class='text-[#4B4B4B] relative left-12'>2435673654535</p>

       <p class='text-[black] relative left-72 bottom-12'>Name of the Buyer</p>
       <p class='text-[#4B4B4B] relative left-72 bottom-12'>Yaswanth</p>

       <p class='text-[black] relative bottom-24' style={{marginLeft:'55%'}}>Phone number</p>
       <p class='text-[#4B4B4B] relative bottom-24' style={{marginLeft:'55%'}}>+91 123456789</p>

       <p class='text-[black] relative bottom-36' style={{marginLeft:'80%'}}>Address</p>
       <p class='text-[#4B4B4B] text-sm relative bottom-36'style={{marginLeft:'80%'}}>Flat no:12,<br></br> ABCD street 12345 near by,<br></br> !@#$%^ District,<br></br> India</p><br></br><br></br>
       <p class='text-[#3B60C6] relative bottom-48' style={{marginLeft:'80%',marginTop:'1%'}}>Request address change</p>

       </div>

        </div>

    </div>
</div>
  )


}

export default Screen2;
