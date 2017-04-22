import React from "react";
import{
        Footer,
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
      <TodoList />
    </GenericTemplate>
  );
};

// ComponentName.defaultProps = {
//   // myProp: 300
// };

// ComponentName.propTypes = {
//   // PropType Requirement
// };

export default HomePage;