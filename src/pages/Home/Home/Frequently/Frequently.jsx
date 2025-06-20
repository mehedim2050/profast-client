import React from 'react';

const Frequently = () => {
    return (
        <div>
            <div className='text-center mt-10'>
                <h1 className='font-bold text-3xl'>Frequently Asked Question (FAQ)</h1>
                <p className='mt-5 text-gray-500 '>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            
            <div className="collapse collapse-arrow  border border-blue-500 mt-10">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold bg-white text-black">How does this posture corrector work?</div>
                <div className="collapse-content text-sm bg-emerald-500">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
            </div>
            <div className="collapse collapse-arrow  border border-blue-500 mt-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-black bg-white">Is it suitable for all ages and body types?</div>
                <div className="collapse-content text-sm bg-emerald-500">It depends on the specific program or product. Many are designed to be adaptable, but it's best to check for age or body-type suitability.</div>
            </div>
            <div className="collapse collapse-arrow  border border-blue-500 mt-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-black bg-white">Does it really help with back pain and posture improvement?</div>
                <div className="collapse-content text-sm bg-emerald-500">Yes, many programs and products do help with back pain and posture. However, effectiveness depends on proper use and individual needs.</div>
            </div>
            <div className="collapse collapse-arrow  border border-blue-500 mt-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-black bg-white">Does it really help with back pain and posture improvement?</div>
                <div className="collapse-content text-sm bg-emerald-500">Yes, many programs and products do help with back pain and posture. However, effectiveness depends on proper use and individual needs.</div>
            </div>
            <div className="collapse collapse-arrow  border border-blue-500 mt-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-black bg-white">Does it really help with back pain and posture improvement?</div>
                <div className="collapse-content text-sm bg-emerald-500">Yes, many programs and products do help with back pain and posture. However, effectiveness depends on proper use and individual needs.</div>
            </div>
           <div className="flex justify-center mt-10">
  <button className="btn btn-primary rounded-2xl text-black">
    See More FAQ’s
  </button>
</div>

        </div>
    );
};

export default Frequently;