import React from 'react'

function Receipt() {
  return (
    <>
    <div className="">
        <h1 className='p-2 bg-purple-900 text-white'>New Reciept</h1>
        <form action="">
          <div className="px-5">
            <div className="flex flex-wrap gap-14 py-1">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" className='border px-2 w-[150px] sm:w-[200px]' />
            </div>

            <div className="flex flex-wrap gap-6 py-1">
                <label htmlFor="customer">Customer:</label>
                <input type="text" id="customer" name="customer" className='border w-[150px] sm:w-[200px]' placeholder="" />
            </div>

            <div className="flex flex-wrap gap-2 py-1">
                <label htmlFor="received">Received As:</label>
                <input type="text" id="received" name="received" className='border w-[150px] sm:w-[200px]' placeholder="" />
            </div>

            <div className="flex flex-wrap gap-2 py-1">
                <label htmlFor="receivedto">Received To:</label>
                <input type="text" id="received" name="receivedto" className='border w-[150px] sm:w-[200px]' placeholder="" />
            </div>

            <div className="flex flex-wrap gap-8 py-1">
                <label htmlFor="received">Amount :</label>
                <input type="number" id="amount" name="amount" className='border w-[150px] sm:w-[200px]' placeholder="" />

                <label htmlFor="">Payment Type:</label>
                <select id="paymentType" name="paymentType" className='border px-2'>
                  <option value="">Cash</option>
                  <option value="1">Cheque</option>
                  <option value="2">Card</option>
                  <option value="3">Online</option>
                </select>
            </div>

            <div className="flex flex-wrap gap-2 py-1">
              <label htmlFor="received">Cheque No :</label>
              <input type="text" id="chequeNo" name="chequeNo" className='border w-[150px] sm:w-[200px]' placeholder="" />

              <label htmlFor="">Cheque Date:</label>
              <input type="date" id="chequeDate" name="chequeDate" className='border px-2' />
            </div>

            <div className="flex flex-wrap gap-8 py-1">
              <label htmlFor="received">Remarks:</label>
              <textarea id="remarks" name="remarks" className='border w-[150px] sm:w-[200px]' placeholder="" rows="3"></textarea>
            </div> 

            <div className="mt-2 sm:mx-28">
              <button type="submit" className='bg-purple-900 text-white px-4 py-2 rounded'>Save</button>
              <button type="reset" className='bg-gray-200 text-gray-600 px-4 py-2 rounded ml-2'>Clear</button>
            </div>
          </div>
        </form>
    </div>
    </>
  )
}

export default Receipt;