import React, { useEffect, useState } from 'react';
import Pagination from 'react-pagination-z';
// import EventBus from 'event-bus-e2z';

import SearchBar from '../SearchBar';
import SearchTag from '../SearchTag';
import FlexCenter from '../Common/FlexCenter';
import NFTItem from './NFTItem';

import { useSearchContext } from '../../context/search';
import { useTopFeatureContext } from '../../context/topfeature';

import { INFData } from '../../types/interface';
import { makeTemplateData } from '../../assets/data/list-product';

const fakeData = makeTemplateData();
const limit = 12;

const Marketplace = () => {
  const { searchData } = useSearchContext();
  const { setTopData } = useTopFeatureContext();

  const [page, setPage] = useState<number>(1);
  const [template, setTemplate] = useState<INFData[]>([]);
  const [total, setTotal] = useState<number>(0);

  // fake top 5 data
  useEffect(() => {
    const topPrice = [...fakeData].sort((a, b) => (a.price - b.price) * -1);
    setTopData(topPrice.slice(0, 5));
  }, []);

  useEffect(() => {
    // EventBus.$emit('scrollTopNft');
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchData]);

  const filterData = () => {
    let filter = [...fakeData];

    // can set share context
    if (searchData.type && searchData.type !== 'all') {
      // typeCondition.push({
      //   predicate: (data: INFData) => data.type === searchData.type,
      // });
      filter = filter.filter((item) => item.type === searchData.type);
    }

    const keySearch = (searchData.keySearch || '').trim().toLowerCase();
    if (keySearch.length > 0) {
      // typeCondition.push({
      //   predicate: (data: INFData) => data.name.includes(keySearch.trim()),
      // });
      filter = filter.filter(
        (item) =>
          item.name.toLocaleLowerCase().includes(keySearch) ||
          item.author.name.toLocaleLowerCase().includes(keySearch)
      );
    }

    // if (searchData.priceFrom !== 0 && searchData.priceFrom !== 200) {
    filter = filter.filter(
      (item) =>
        item.price >= searchData.priceFrom && item.price <= searchData.priceTo
    );
    // }

    if (searchData.tier) {
      filter = filter.filter((item) => item.tier === searchData.tier);
    }

    if (searchData.theme && searchData.theme !== 'All') {
      filter = filter.filter((item) => item.theme === searchData.theme);
    }

    let filterTIme = false;
    if (searchData.timeSort) {
      if (searchData.timeSort !== -1 && searchData.timeSort !== 1) {
        filter = filter.filter((item) => item.time === searchData.timeSort);
        filterTIme = true;
      }
    }

    if (!searchData.priceSort || filterTIme || !searchData.timeSort) {
      filter.sort(
        (a, b) => (a.price - b.price) * Number(searchData.priceSort || 1)
      );
    } else {
      filter.sort((a, b) => {
        const sort = (a.time - b.time) * Number(searchData.timeSort);
        if (sort) {
          return sort;
        }
        return (a.price - b.price) * Number(searchData.priceSort);
      });
    }

    setTotal(filter.length);
    setTemplate(filter.slice((page - 1) * limit, page * limit));
  };

  return (
    <div className="flex gap-8">
      <SearchBar />

      <div className="mx-auto">
        <SearchTag />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {total > 0 && (
            <>
              {template.map((item) => {
                return <NFTItem key={item.id} item={item} />;
              })}
            </>
          )}
        </div>

        {total === 0 && (
          <FlexCenter className="w-full">There is no data</FlexCenter>
        )}

        <div className="flex justify-center pt-20 pb-4">
          <Pagination
            className="go-quizd-pager"
            totalCount={total}
            limit={limit}
            sectionNumber={4}
            currentPage={page}
            setCurrentPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
