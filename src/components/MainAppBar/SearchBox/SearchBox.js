import algoliasearch from 'algoliasearch';
import PropTypes from 'prop-types';
// import useSWR from 'swr'
// import { useRequestData } from '../../hooks/useRequestData';

import Search from './Search/Search';

const searchClient = algoliasearch(
  '4XK9MRMZUZ',
  '2cbb64e05103f11cad513d9cda693b43'
);

const indexName = searchClient.initIndex('dev_fullstack');

const DEFAULT_PROPS = {
  searchClient,
  indexName
};

const SearchBox = () => {
  // const fetcher = url => useRequestData(url, []);

  // const { data, error } = useSWR('/api/user', fetcher)

  // indexName.saveObjects(data, { autoGenerateObjectIDIfNotExist: true });

  // if (error) { return <div>failed to load</div>}
  // if (!data) { return <div>loading...</div> }

  return (
    <div>
      <Search
        {...DEFAULT_PROPS}>
      </Search>
    </div>
  )
}

SearchBox.propTypes = {
  DEFAULT_PROPS: PropTypes.object,
}

export default SearchBox;