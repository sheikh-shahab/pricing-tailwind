

import { Html, Head, Main, NextScript } from 'next/document'

import React from 'react'

export default function Document({
  children,
}: {
  children: React.ReactDOM;
}) {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-white flex justify-center text-center space-x-4'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
