import React from "react";
import{
        Footer,
        Gallery,
        GenericTemplate,
        Header,
        Hero,
        MainMenu,
        TodoList
      } from "components";

const HomePage = () => {
  return (
    <GenericTemplate  title="Homepage!"
                      header={<Header />}
                      menu={<MainMenu />}
                      hero={<Hero />}
                      footer={<Footer />} >
      <Gallery />
      <TodoList />
    </GenericTemplate>
  );
};

export default HomePage;