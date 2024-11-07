import React from 'react'

function Home() {
  return (
    <>
    <div className="h-screen">
        <h1 className='px-5'>WELLFIT MARKETING AGENCY</h1>

        <div className="flex justify-evenly flex-wrap my-5">
            <div className="w-[250px]  mt-3 rounded-xl p-2 px-2 bg-yellow-100 border">
                <p className='pb-5'>
                    <span>icon</span>
                    <span>Purchase & Return</span>
                </p>
                <p className='flex justify-between'>
                    <span>Purchase</span>
                    <span className='font-bold'>5695811.18</span>
                </p>
                <p className='flex justify-between'>
                    <span>Return</span>
                    <span className='font-bold'>145246.00</span>
                </p>
            </div>

            <div className="w-[250px] mt-3 rounded-xl p-2 px-2 border bg-red-100">
                <p className='pb-5'>
                    <span>icon</span>
                    <span>Sales & Return</span>
                </p>
                <p className='flex justify-between'>
                    <span>Sales</span>
                    <span className='font-bold'>5695811.18</span>
                </p>
                <p className='flex justify-between'>
                    <span>Return</span>
                    <span className='font-bold'>145246.00</span>
                </p>
            </div>

            <div className="w-[250px] mt-3 rounded-xl p-2 px-2 border bg-slate-100">
                <p className='pb-5'>
                    <span>icon</span>
                    <span>Income & Receipt</span>
                </p>
                <p className='flex justify-between'>
                    <span>Income</span>
                    <span className='font-bold'>5695811.18</span>
                </p>
                <p className='flex justify-between'>
                    <span>Receipt</span>
                    <span className='font-bold'>145246.00</span>
                </p>
            </div>

            <div className="w-[250px] mt-3 rounded-xl p-2 px-2 border bg-pink-100">
                <p className='pb-5'>
                    <span>icon</span>
                    <span>Expense & Payment</span>
                </p>
                <p className='flex justify-between'>
                    <span>Expense</span>
                    <span className='font-bold'>5695811.18</span>
                </p>
                <p className='flex justify-between'>
                    <span>Payment</span>
                    <span className='font-bold'>145246.00</span>
                </p>
            </div>

            <div className="w-[250px] mt-3 rounded-xl p-2 px-2 border bg-orange-50">
                <p className='pb-5'>
                    <span>icon</span>
                    <span>Stock</span>
                </p>
                <p className='flex justify-between pt-6'>
                    <span>Stock</span>
                    <span className='font-bold'>5695811.18</span>
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
