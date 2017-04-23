import React from 'react';
import{
        Footer,
        GenericTemplate,
        Header,
        Hero,
        MainMenu
      } from "components";

const ShopPage = () => {
  return (
    <GenericTemplate  title="Homepage!"
                      header={<Header />}
                      menu={<MainMenu />}
                      hero={<Hero />}
                      footer={<Footer />} >
      <h2> Something </h2>
    </GenericTemplate>
  );
};

export default ShopPage;