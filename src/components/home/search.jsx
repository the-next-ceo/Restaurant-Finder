import "./home.css";
import { Route, Routes } from "react-router";
import { Local } from "../locations/loc";
import { Link } from "react-router-dom";
import { TextField, IconButton } from "@mui/material";
import { SearchOutlined } from '@material-ui/icons';

function Search() {
  const locs = [
    { id: "1", value: "Delhi" },
    { id: "2", value: "Mumbai" },
    { id: "3", value: "Pune" },
    { id: "4", value: "Patna" },
    { id: "5", value: "Kolkata" },
  ];

  return(
    <div>
      <TextField
                className="textfield"
                variant="outlined"
                placeholder="Enter your locationF"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
    </div>
  )
}

export default Search;
