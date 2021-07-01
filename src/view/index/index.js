import React, { Fragment } from 'react'
import { indexNavs } from '../../router';
import Nav from '../../component/nav';
import qs from 'qs';

function IndexView() {
  return <Fragment>
    <Nav
      data={indexNavs}
      style={{
        marginTop: "10px"
      }}
      selected={({ search }) => {
        search = qs.parse(search.substr(1));
        let key = indexNavs.findIndex((item) => {
          let { tab } = qs.parse(item.to.substr(2));
          return tab === search.tab;
        })
        if (key < 0 && search.tab === undefined) {
          return "0";
        }
        return key + "";
      }}
    />
  </Fragment>
}

export default IndexView;