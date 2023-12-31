import React, { useState } from 'react'

function Control({ onAddTask, onSearch, onSort}) {
  // Quản lý keyword
  const [keyword, setKeyword] = useState("");

  // Chuyển dữ liệu sang app
  const handleSearch = () => {
    console.log("keyword", keyword);
    onSearch(keyword);
  };
  const[sort,setSort]=useState('NAME-ASC');

  const handleSort = (param)=>{
    console.log("click a:",param);
    setSort(param.toUpperCase())
    onSort(param)
  }

  const handleAddTask = () => {
    onAddTask(true, "Save", null);
  };

  return (
    <>
      <div className="row">
        {/* SEARCH : START */}
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
              name="keyword"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-info"
                type="button"
                onClick={handleSearch}
              >
                Search booking date
              </button>
            </span>
          </div>
        </div>
        {/* SEARCH : END */}
        {/* SORT : START */}
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="dropdown">
            <button
              className="btn btn-default dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort by <span className="caret" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>
                <a href='' role="button" onClick={()=>handleSort("name-ASC")}>Name ASC</a>
              </li>
              <li>
                <a href='' role="button" onClick={()=>handleSort("name-DESC")}>Name DESC</a>
              </li>
              <li role="separator" className="divider" />
              <li>
                <a href='' role="button" onClick={()=>handleSort("lever-ASC")}>Level ASC</a>
              </li>
              <li>
                <a href='' role="button" onClick={()=>handleSort("lever-DESC")}>Level DESC</a>
              </li>
            </ul>
            <span className="label label-success label-medium">
              {sort}
            </span>
          </div>
        </div>
        {/* SORT : END */}
        {/* ADD : START */}
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <button
            type="button"
            className="btn btn-block"
            onClick={handleAddTask}
          style={{backgroundColor: '#d7b659',borderRadius:'50%',fontSize:'30px'}
                }
          >
            Book a room
          </button>
        </div>
        {/* ADD : END */}
      </div>
    </>
  );
}

export default Control