import React from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: React.ReactNode;
  title?: string; // Optional prop to customize the title for each page
};

const Layout: React.FC<LayoutProps> = ({ children, title = 'Default Title' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Other meta tags can be added here */}
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
