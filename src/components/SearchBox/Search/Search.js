import React from 'react';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import PropTypes from 'prop-types';

import { Autocomplete } from './Autocomplete/Autocomplete';
import { ProductItem } from './ProductItem/ProductItem';

import '@algolia/autocomplete-theme-classic';

function Search(props) {
  return (
      <Autocomplete
        openOnFocus={true}
        getSources={({ query }) => [
          {
            sourceId: 'products',
            getItems() {
              return getAlgoliaResults({
                searchClient: props.searchClient,
                queries: [
                  {
                    indexName: 'dev_fullstack',
                    query,
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                return <ProductItem hit={item} components={components} />;
              },
            },
          },
        ]}
      />
  );
}

Search.propTypes = {
  openOnFocus: PropTypes.bool,
  getSources: PropTypes.func
}

export default Search;