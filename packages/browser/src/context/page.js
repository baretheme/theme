import React from 'react';
import PropTypes from 'prop-types';

const PageContext = React.createContext(null);

const usePageContext = function usePageContext() {
  const context = React.useContext(PageContext);
  return context;
};

const PageProvider = ({ value, children }) => (
  <PageContext.Provider value={{ ...value }}>
    {children}
  </PageContext.Provider>
);

PageProvider.defaultProps = {
  value: {},
};

PageProvider.propTypes = {
  value: PropTypes.shape({}),
  children: PropTypes.element.isRequired,
};

export { PageContext, PageProvider, usePageContext };
