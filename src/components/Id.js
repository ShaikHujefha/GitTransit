import React, { useState } from 'react';
import { RiInstagramFill } from 'react-icons/ri';
import { SiFacebook } from 'react-icons/si';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import react from 'react';
const Id = () => {
    const [state, setState] = useState()
    const loadData = (e) => {
        e.preventDefault();
        var orderid = e.target.orderid;
        setState({
            ...state,
            orderid: e.target.value
        })
        console.log(state)
    }
    const validate = () => {
        if ((state.orderid) == 123456789101) {
            window.location.href = 'Screen1';
        }
        else {
            document.getElementById("demo1").style.visibility = "visible";

            document.getElementById("demo").innerHTML = "Tracking Number/Order ID not registered with us";
            document.getElementById("demo").style.color = 'red'
        }
    }

    return (
        <div class="bg-[#163159] h-screen ">

            <div class="flex flex-col  justify-center gap-4 w-screen h-screen ">
                <div>
                    <h1 class="font-bold flex justify-center text-white ">Enter your 12 digit Tracking number</h1>
                </div>

                <div class="flex flex-row justify-center">

                    <input type="radio" class="w-4 h-4 mt-1" /><span class=" text-white ">Tracking ID/AWB</span>
                    <input type="radio" class="w-4 h-4 mt-1" /><span class=" text-white">Order ID</span>

                </div>
                <div class="flex flex-row justify-center gap-3 ">
                    <input type="text" placeholder='Eg.123456789' class="border bg-gradient-to-r from-[#cccc] to-[#163159] text-black placeholder:text-[#CFCFCF]  rounded-md h-10 w-44 " orderid="id" onChange={loadData} ></input>
                    <button class="border border-white bg-[#DEEB4E] px-2 text-blue-900  w-24 rounded-lg text-bold" onClick={validate}>Submit</button>
                </div>
                <div class=" ">

                    <HiOutlineEmojiSad style={{ visibility: "hidden", color: "red" }} size={50} id="demo1" />
                    <p id="demo"></p>
                </div>


            </div>
        </div>

    )
}
export default Id;