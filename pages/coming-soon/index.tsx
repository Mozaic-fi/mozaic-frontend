import { useRouter } from 'next/router';
import React from 'react';

export default function ComingSoon() {
  const router = useRouter();
  return (
    <>
      <div className='container df-c h-100 w-100'>
        <div className='df-c'>
          <div className='text-container'>
            <p className='info tc-s fs-xxl fw-l'>Coming Soon</p>
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
          letter-spacing: 4rem;
          margin-left: 4rem;
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
