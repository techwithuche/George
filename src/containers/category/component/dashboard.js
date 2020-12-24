import React, { useState } from 'react';
import PropTypes, { number } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import * as mapDispatchToProps from '../utils/actions';
import Head from 'next/head'


const Dashboard = props => {
  const { currentBlogs, loading, pagination, handlePagination } = props;
  const maxPage = Math.ceil(pagination.totaldata / pagination.size);
  const pagenumber = [];
  for (let i = 1; i <= Math.ceil(pagination.totaldata / pagination.size); i++) {
    pagenumber.push(i);
  }
  return loading ? (
    <>
     <div></div>
    </>
  ) : currentBlogs.length > 0 ? (
    <>




      {currentBlogs.map(each => {
        const {
          thumbnail,
          _id,
          title,
          category,
          name,
          published_on,
          slug_url,
          description,
          added_at,
          avatar,
        } = each;

        return (
          <>
        
          <div className="col-lg-4 mb-4">
                      <div className="entry2">
                      <a href={`/${slug_url}`}>
                      <img
                        src={thumbnail}
                        className="img-fluid rounded"
                        alt="ajeboblog"
                      />

                      </a>
                      
                        <div className="excerpt">
                        <span className="post-category text-white bg-success mb-3">{category}</span>
                        
                        <h2>
                        <a href={`/${slug_url}`}>
                          {title.substring(0, 70) + '...'}
                          </a>
                         
                         </h2>
                        <div className="post-meta align-items-center text-left clearfix">
                          <span className="d-inline-block mt-1">By {name}</span><span>-</span>
                          <span> {moment(published_on).format('MMM Do YYYY')}</span>
                        </div>
                        
                        <p>{description.substring(0, 120) + '...'}</p>
                        <br/>
                          <div className="row">
                          <div className="col-6">
                          <a href={`/admin/edit/${_id}`}> 
                          <span className="btn btn-dark">Edit</span>
                          </a>
                          </div>

                          <div className="col-6">
                          <a href={`/admin/delete/${_id}`}> 
                          <span className="btn btn-dark">Delete</span>
                          </a>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
          </>
        );
      })}
      <div className="flex clearfix w-full pagination">
        <div className="w-full md:w-1/4" />
        <div className="w-3/4 flex mt-3 ">
          {pagination.page !== 1 && (
            <span>
              <button
                className="border border-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:text-white text-gray-800 font-bold w-10 h-10 rounded flex items-center justify-center"
                onClick={() =>
                  handlePagination({
                    ...pagination,
                    page: pagination.page - 1,
                  })
                }
              >
                <i className="material-icons">Back</i>
              </button>
            </span>
          )}
          {pagenumber.length > 0 &&
            pagenumber.map(each => (
              <span key={each}>
                <button
                  id={each}
                  className="border border-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:text-white text-gray-800 font-bold w-10 h-10 rounded"
                  onClick={e => {
                    handlePagination({
                      ...pagination,
                      page: e.target.id,
                    });
                  }}
                >
                  {each}
                </button>
              </span>
            ))}
          <span>
            <button
              className="border border-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:text-white text-gray-800 font-bold w-10 h-10 rounded flex items-center justify-center"
              disabled={pagination.page === maxPage}
              onClick={() =>
                handlePagination({ ...pagination, page: pagination.page + 1 })
              }
            >
              <i className="material-icons">next</i>
            </button>
          </span>
          </div>
        </div>
      
    </>
  ) : (
    <div>Blogs Not Found</div>
  );
};

Dashboard.propTypes = {
  currentBlogs: PropTypes.array.isRequired,
  loading: PropTypes.string,
  pagination: PropTypes.object,
  handlePagination: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(Dashboard);
