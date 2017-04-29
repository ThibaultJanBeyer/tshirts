import React from "react";

import{
  Footer,
  Gallery,
  GenericTemplate,
  FeaturedArtists,
  Header,
  Hero,
  MainMenu,
  TodoList,
  theme
} from "components";

const HomePage = () => {
  return (
    <GenericTemplate  title="Homepage!"
                      header={<Header />}
                      menu={<MainMenu />}
                      footer={<Footer />} >
      <div className={theme["gutter"]}>
        <Hero />
      </div>
      <div className={theme["gutter"]}>
        <Gallery title="Featured" />
      </div>
      <div className={theme["gutter"]}>
        <FeaturedArtists />
      </div>
      <div className={theme["gutter"]}>
        <Gallery title="Most Popular" />
      </div>
      <TodoList />
    </GenericTemplate>
  );
};

export default HomePage;