import "./SideNav.css";
import { Link } from "react-router-dom";
import { useTheme, useFilter } from "../../context";
import { FaTrash, FaArchive, FaBook } from "react-icons/fa";
import { Button } from "../../components";
export const SideNav = () => {
  const { theme } = useTheme();
  const { filterState, filterDispatch } = useFilter();
  const { labels, sortByPriority, sortByDate } = filterState;

  return (
    <div className="flex-column">
      <div className="side-nav-container flex-column">
        <ul className="list side-nav-list">
          <Link to="/notes">
            <li className="flex">
              <FaBook size={20} />
              <h4 className="headline-3">Notes</h4>
            </li>
          </Link>

          <Link to="/archivePage">
            <li className="flex">
              <FaArchive size={20} />
              <h4 className="headline-3">Archive</h4>
            </li>
          </Link>

          <Link to="/deletedPage">
            <li className="flex">
              <FaTrash size={20} />
              <h4 className="headline-3">Trash</h4>
            </li>
          </Link>
        </ul>
        <div className="grid grid-col-2 grid-gap-1">
          <h3 className="headline-3">Filters</h3>
          <Button
            name={"Clear"}
            btnclass={"btn-secondary"}
            onClick={() => filterDispatch({ type: "CLEAR_FILTER" })}
          />
        </div>
        <ul className="list">
          <h4 className="headline-4">Sort By Date</h4>
          <div className="grid grid-col-2 grid-gap-1">
            <li>
              <label htmlFor="oldest">
                <input
                  type="radio"
                  name="SORT_BY_DATE"
                  id="oldest"
                  value="Oldest"
                  onChange={(e) =>
                    filterDispatch({
                      type: "SORT_BY_DATE",
                      payload: e.target.value,
                    })
                  }
                  checked={sortByDate === "Oldest"}
                />
                Oldest
              </label>
            </li>
            <li>
              <label htmlFor="Newest">
                <input
                  type="radio"
                  name="SORT_BY_DATE"
                  id="Newest"
                  value="Newest"
                  onChange={(e) =>
                    filterDispatch({
                      type: "SORT_BY_DATE",
                      payload: e.target.value,
                    })
                  }
                  checked={sortByDate === "Newest"}
                />
                Newest
              </label>
            </li>
          </div>

          <h4 className="headline-4">Sort By Labels</h4>
          <div className="grid grid-col-2 grid-gap-1">
            <li>
              <label htmlFor="work">
                <input
                  type="checkbox"
                  name="label"
                  id="work"
                  value="Work"
                  onChange={(e) =>
                    filterDispatch({
                      type: "FILTER_BY_LABEL",
                      payload: e.target.value,
                    })
                  }
                  checked={labels.includes("Work")}
                />
                Work
              </label>
            </li>
            <li>
              <label htmlFor="home">
                <input
                  type="checkbox"
                  name="label"
                  id="home"
                  value="Home"
                  onChange={(e) =>
                    filterDispatch({
                      type: "FILTER_BY_LABEL",
                      payload: e.target.value,
                    })
                  }
                  checked={labels.includes("Home")}
                />
                Home
              </label>
            </li>
          </div>
          <div className="grid grid-col-2 grid-gap-1">
            <li>
              <label htmlFor="chores">
                <input
                  type="checkbox"
                  name="label"
                  id="chores"
                  value="Chores"
                  onChange={(e) =>
                    filterDispatch({
                      type: "FILTER_BY_LABEL",
                      payload: e.target.value,
                    })
                  }
                  checked={labels.includes("Chores")}
                />
                Chores
              </label>
            </li>
            <li>
              <label htmlFor="exercise">
                <input
                  type="checkbox"
                  name="label"
                  id="exercise"
                  value="Exercise"
                  onChange={(e) =>
                    filterDispatch({
                      type: "FILTER_BY_LABEL",
                      payload: e.target.value,
                    })
                  }
                  checked={labels.includes("Exercise")}
                />
                Exercise
              </label>
            </li>
          </div>
          <h4 className="headline-4">Sort By Priority</h4>
          <li>
            <label htmlFor="high">
              <input
                type="radio"
                name="SORT_BY_PRIORITY"
                id="high"
                value="High"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_PRIORITY",
                    payload: e.target.value,
                  })
                }
                checked={sortByPriority === "High"}
              />
              High
            </label>
          </li>
          <li>
            <label htmlFor="medium">
              <input
                type="radio"
                name="SORT_BY_PRIORITY"
                id="medium"
                value="Medium"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_PRIORITY",
                    payload: e.target.value,
                  })
                }
                checked={sortByPriority === "Medium"}
              />
              Medium
            </label>
          </li>
          <li>
            <label htmlFor="low">
              <input
                type="radio"
                name="SORT_BY_PRIORITY"
                id="low"
                value="Low"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_PRIORITY",
                    payload: e.target.value,
                  })
                }
                checked={sortByPriority === "Low"}
              />
              Low
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
