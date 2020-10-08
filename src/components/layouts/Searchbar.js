import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "./../../actions/logActions";
import { PropTypes } from "prop-types";

const Searchbar = ({ searchLogs }) => {
  const search = useRef("");
  return (
    <nav style={{ marginBottom: "30px" }} className="green">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              ref={search}
              id="search"
              type="search"
              placeholder="Search Logs.."
              onChange={() => searchLogs(search.current.value)}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};
Searchbar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};
export default connect(null, { searchLogs })(Searchbar);
