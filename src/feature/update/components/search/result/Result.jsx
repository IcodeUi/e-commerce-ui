import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "../style/resultstyle.scss";
import PropTypes from "prop-types";
import Loading from "../../../../../provider/animation/Loading.jsx";
function Result({ data, isLoading, error, searchValue }) {
  const resultData = data.length;
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex items-center capitalize justify-center p-4 flex-col gap-2">
        <h3 className="font-medium">Oops something went wrong 😔</h3>
        <h4>
          we're sorry that this happened <br />{" "}
          <small className="text-red-400">{error.message}</small>
        </h4>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="w-full mt-3 p-5 gap-2 capitalize text-center flex items-center justify-center mx-auto flex-col">
        <h3>Oops! No data found</h3>
        <small className="mt-3">
          Please check your spelling for
          <small className="text-purple-500 text-lg capitalize font-medium">
            " {searchValue}"
          </small>
          or something and try again
        </small>
      </div>
    );
  }
  return (
    <div className="-t-result">
      <>
        {searchValue.length === searchValue.length && searchValue && (
          <div className="capitalize flex items-center  gap-2   px-2    p-1  mb-3 ">
            <small className="font-medium"> Is this what you want 😘 !?</small>
            <q className="text-purple-500  text-sm capitalize font-medium ">
              {searchValue}
            </q>
            nice!🔥
          </div>
        )}
        <div className="--grid">
          {data.slice(0, 12).map((p) => (
            <Link className="w-full" to={`/shop/`} key={p.product_id}>
              <div className="-t-data flex gap-[10px] py-1">
                <span className="-t-icon text-[#6e6e6e]">
                  <AiOutlineSearch size={18} />
                </span>
                <p className=" text-[.79em] capitalize text-[#656565]">
                  {p.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </>
      <div className="-t-a flex justify-between items-center w-full  py-3  px-1">
        <a
          href="https://t.me/mellod23"
          className="capitalize  bg-[#000] text-[#fff] px-3 py-2  rounded-md "
        >
          any questions
        </a>
        <div className="capitalize p-2 py-2 gap-2  flex items-center    ">
          <small className="">results Found</small>
          <q className="text-purple-500 text-sm capitalize font-medium">
            {searchValue}
          </q>
          <h4 className="font-bold ">({resultData})</h4>
        </div>
      </div>
    </div>
  );
}
//
Result.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      product_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Result;
