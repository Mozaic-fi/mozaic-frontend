import { useRouter } from 'next/router';
import React from 'react';

export default function Custom500() {
  const router = useRouter();
  return (
    <>
      <div className='container df-c h-100 w-100'>
        <div className='df-c'>
          <div className='text-container'>
            <p className='error tc-h fs-xxl fw-l'>500</p>
            <p className='info tc-s fs-xxl fw-l'>Server Error</p>
          </div>
          <img src='/assets/images/mozgrad.png' alt='' />
        </div>
        <p className='link tc-h' onClick={() => router.back()}>
          Go Back ↩
        </p>
      </div>
      <style jsx>{`
        .container {
          height: 80vh;
        }

        .text-container {
          position: absolute;
        }

        img {
          opacity: 0.1;
          position: relative;
        }
        .info {
          text-align: center;
          opacity: 0.5;
          letter-spacing: 2rem;
          margin-left: 2rem;
        }

        .error {
          font-size: 8rem;
          text-align: center;
          opacity: 0.5;
        }

        .link {
          position: absolute;
          margin-left: auto;
          margin-right: auto;
          cursor: pointer;
          text-align: center;
          bottom: 100px;
          font-size: 0.85rem;
        }
      `}</style>
    </>
  );
}
